[![npm version](https://badge.fury.io/js/http-status-code.svg)](http://badge.fury.io/js/http-status-code)
[![travis ci](https://api.travis-ci.org/daanvanham/http-status-code.svg)](https://travis-ci.org/daanvanham/http-status-code)
[![Coverage Status](https://coveralls.io/repos/daanvanham/http-status-code/badge.svg)](https://coveralls.io/r/daanvanham/http-status-code)

# HTTP Status Codes
Port of [Konsolidate Status](https://github.com/konfirm/konsolidate_hacklang/blob/master/core/status.hh)

## Install
```
npm install http-status-code --save
```

## Usage
```javascript
var HTTPStatusCode = require('http-status-code');

console.log(HTTPStatusCode.getMessage(200)); // > OK
console.log(HTTPStatusCode.getMessage(429, 'WEBDAV')); // > Unknown
console.log(HTTPStatusCode.getMessage(429, 'HTTP/1.1')); // > Too Many Request
```

## Credits
All credits go to the creator/maintainer(s) of the [Konsolidate Status](https://github.com/konfirm/konsolidate_hacklang/blob/master/core/status.hh) class.
