'use strict';

var Lab = require('lab'),
	lab = exports.lab = Lab.script(),
	Code = require('code'),
	HTTPStatusCode = require('../lib'),
	protocols = ['HTTP/1.0', 'HTTP/1.1', 'HTTP/2', 'WEBDAV', 'misc'],
	definitions = HTTPStatusCode.getProtocolDefinitions();

protocols.forEach(function(protocol) {
	lab.experiment(protocol, function() {
		Object.keys(definitions).forEach(function(status) {
			lab.test(status, function(done) {
				var message = HTTPStatusCode.getMessage(status, protocol),
					expectation = HTTPStatusCode.getProtocolDefinitions(protocol)[status] || 'Unknown';

				Code.expect(message).to.equal(expectation);
				done();
			});
		});
	});
});
