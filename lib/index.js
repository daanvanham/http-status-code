'use strict';

const
	fs = require('fs'),
	Path = require('path'),
	strip = require('strip-json-comments'),
	map = {
		'HTTP/1.0': ['HTTP/1.0', '1.0'],
		'HTTP/1.1': ['HTTP/1.1', '1.1'],
		'HTTP/2.0': ['H2', 'H2C', '2', '2.0', 'HTTP/2', 'HTTP/2.0'],
		WEBDAV:     ['DAV', 'WEBDAV'],
		misc:       ['misc', 'miscellanious']
	};

let definitions = {};

/**
 * get definitions list by rfcList
 *
 * @method _getList
 * @param {Object} rfcList
 * @return {Object} result <{Integer} status: {String} message>
 * @private
 */
function _getList(rfcList) {
	let result = {};

	rfcList.forEach((rfc) => {
		Object.keys(definitions[rfc]).forEach((status) => {
			result[status] = definitions[rfc][status];
		});
	});

	return result;
}

/**
 * get a single protocol for the protocol
 *
 * @method _getProcotol
 * @param {String} protocol [option, default 'all' - combine all definitions]
 * @return {String} protocol
 * @private
 */
function _getProtocol(protocol) {
	return Object.keys(map).filter((key) => {
		return map[key].indexOf(protocol) !== -1;
	})[0];
}

/**
 * obtain all valid status code/message pairs based on the given protocol
 *
 * @method _getProtocolDefinitions
 * @param  {String} protocol [optional, default 'all' - combine all definitions]
 * @return {Object} <{Integer} status: {String} message>
 * @private
 */
function _getProtocolDefinitions(protocol) {
	let rfcList = ['rfc1945'];

	switch (_getProtocol(protocol)) {
		case 'HTTP/1.0':
			break;

		case 'HTTP/1.1':
			rfcList = rfcList.concat([
				'rfc2068', // obsoletes/updates #1945
				'rfc2616', // obsoletes/updates #2068
				'rfc2817', // updates #2616
				'rfc6585'  // updates #2616
			]);
			break;

		case 'HTTP/2.0':
			rfcList = rfcList.concat([
				'rfc2068', // obsoletes/updates #1945
				'rfc2616', // obsoletes/updates #2068
				'rfc2817', // updates #2616
				'rfc6585', // updates #2616
				'rfc7231', // updates #6585
				'rfc7538', // updates #7231
				'rfc7540'  // http/2
			]);
			break;

		case 'WEBDAV':
			rfcList = rfcList.concat([
				'rfc2068', // obsoletes/updates #1945
				'rfc2518', // first DAV spec
				'rfc2616', // obsoletes/updates #2068
				'rfc4918'  // updates #2518
			]);
			break;

		case 'misc':
			rfcList = ['misc'];
			break;

		default:
			rfcList = Object.keys(definitions);
			break;
	}

	return _getList(rfcList);
}

/**
 * the HTTPStatusCode class which will be constructed at the end of this file
 *
 * @class HTTPStatusCode
 * @constructor
 */
class HTTPStatusCode {
	/**
	 * initialize the HTTPStatusCode class by reading all the RFC json files
	 *
	 * @method init
	 * @return void
	 * @public
	 */
	constructor() {
		let path = Path.join(__dirname, '..', 'json');

		fs.readdirSync(path).forEach((filename) => {
			let file = fs.readFileSync(Path.join(path, filename), {encoding: 'utf8'});

			definitions[filename.split('.')[0]] = JSON.parse(strip(file));
		});
	}

	/**
	 * obtain the status message associated with the status code
	 *
	 * @method getMessage
	 * @param  {Integer} status code
	 * @param  {String} protocol
	 * @return {String} message
	 * @public
	 */
	getMessage(status, protocol) {
		let list = _getProtocolDefinitions(protocol);

		return list[status + ''] || 'Unknown';
	}

	/**
	 * obtain all valid status code/message pairs based on the given protocol
	 *
	 * @method getProtocolDefinitions
	 * @param  {String} protocol [optional, default 'all' - combine all definitions]
	 * @return {Object} <{Integer} status: {String} message>
	 * @public
	 */
	getProtocolDefinitions(protocol) {
		return _getProtocolDefinitions(protocol || 'all');
	}
}

module.exports = new HTTPStatusCode();
