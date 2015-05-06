'use strict';

var fs = require('fs'),
	strip = require('strip-json-comments');

function HTTPStatusCode() {
	var status = this,
		definitions = {};

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
	 * obtain all valid status code/message pairs based on the given protocol
	 *
	 * @method _getProtocolDefinitions
	 * @param  {String} protocol [optional, default 'all' - combine all definitions]
	 * @return {Object} <{Integer} status: {String} message>
	 * @private
	 */
	function _getProtocolDefinitions(protocol) {
		var rfcList = ['rfc1945'];

		switch (protocol) {
			case '1.0':
			case 'HTTP/1.0':
				//  result always starts with rfc1945, which is http/1.0
				break;

			case '1.1':
			case 'HTTP/1.1':
				//  result always starts with rfc1945, which is http/1.0
				rfcList = rfcList.concat([
					'rfc2068', // obsoletes/updates #1945
					'rfc2616', // obsoletes/updates #2068
					'rfc2817', // updates #2616
					'rfc6585'  // updates #2616
				]);
				break;

			case 'DAV':
			case 'WEBDAV':
				//  result always starts with rfc1945, which is http/1.0
				rfcList = rfcList.concat([
					'rfc2068', // obsoletes/updates #1945
					'rfc2518', // first DAV spec
					'rfc2616', // obsoletes/updates #2068
					'rfc4918'  // updates #2518
				]);
				break;

			default:
				//  result always starts with rfc1945, which is http/1.0
				rfcList = rfcList.concat([
					'rfc2068', // obsoletes/updates #1945
					'rfc2518', // first DAV spec
					'rfc2616', // obsoletes/updates #2068
					'rfc2817', // updates #2616
					'rfc4918', // updates #2518
					'rfc6585', // updates #2616
					'misc'     // add misc
				]);
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
		if (!protocol)
			protocol = 'all';

		return _getProtocolDefinitions(protocol);
	};

	init();
}

module.exports = new HTTPStatusCode();
