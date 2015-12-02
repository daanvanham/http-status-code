'use strict';

function HTTPStatusCode() {
	var status = this,
		fs = require('fs'),
		strip = require('strip-json-comments'),
		definitions = {},
		map = {
			'HTTP/1.0': ['HTTP/1.0', '1.0'],
			'HTTP/1.1': ['HTTP/1.1', '1.1'],
			'HTTP/2.0': ['H2', 'H2C', '2', '2.0', 'HTTP/2', 'HTTP/2.0'],
			WEBDAV:     ['DAV', 'WEBDAV']
		};

	/**
	 * initialize the HTTPStatusCode class by reading all the RFC json files
	 *
	 * @method init
	 * @return void
	 * @private
	 */
	function init() {
		var path = __dirname + '/../json/';

		fs.readdirSync(path).forEach(function(filename) {
			var file = fs.readFileSync(path + filename, {encoding: 'utf8'});

			definitions[filename.split('.')[0]] = JSON.parse(strip(file));
		});
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
		return Object.keys(map).filter(function(key) {
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
		var rfcList = ['rfc1945'];

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

			default:
				rfcList = Object.keys(definitions);
				break;
		}

		return getList(rfcList);
	}

	/**
	 * get definitions list by rfcList
	 *
	 * @method getList
	 * @param {Object} rfcList
	 * @return {Object} result <{Integer} status: {String} message>
	 * @private
	 */
	function getList(rfcList) {
		var result = {};

		rfcList.forEach(function(rfc) {
			Object.keys(definitions[rfc]).forEach(function(status) {
				result[status] = definitions[rfc][status];
			});
		});

		return result;
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
	status.getMessage = function getMessage(status, protocol) {
		var list = _getProtocolDefinitions(protocol);

		return list[status + ''] || 'Unknown';
	};

	/**
	 * obtain all valid status code/message pairs based on the given protocol
	 *
	 * @method getProtocolDefinitions
	 * @param  {String} protocol [optional, default 'all' - combine all definitions]
	 * @return {Object} <{Integer} status: {String} message>
	 * @public
	 */
	status.getProtocolDefinitions = function getProtocolDefinitions(protocol) {
		if (!protocol) {
			protocol = 'all';
		}

		return _getProtocolDefinitions(protocol);
	};

	init();
}

module.exports = new HTTPStatusCode();
