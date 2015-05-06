[![npm version](https://badge.fury.io/js/http-status-code.svg)](http://badge.fury.io/js/http-status-code)
[![travis ci](https://api.travis-ci.org/daanvanham/http-status-code.svg)](https://travis-ci.org/daanvanham/http-status-code)
[![Coverage Status](https://coveralls.io/repos/daanvanham/http-status-code/badge.svg)](https://coveralls.io/r/daanvanham/http-status-code)

# HTTP Status Codes
Port of [Konsolidate Status](https://github.com/konfirm/konsolidate_hacklang/blob/master/core/status.hh).

Access the status codes you need, with the protocol being used. If no protocol is given, all status codes are used.

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

## Protocols

### HTTP/1.0

#### Status Codes
- 200: OK
- 201: Created
- 202: Accepted
- 204: No Content
- 300: Multiple Choices
- 301: Moved Permanently
- 302: Moved Temporarily
- 304: Not Modified
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error
- 501: Not Implemented
- 502: Bad Gateway
- 503: Service Unavailable

#### RFC
- [RFC1945](http://tools.ietf.org/html/rfc1945)

### HTTP/1.1
- All from HTTP/1.0
- +
- 100: Continue
- 101: Switching Protocols
- 203: Non-Authoritative Information
- 205: Reset Content
- 206: Partial Content
- 303: See Other
- 305: Use Proxy
- 306: (Unused)
- 307: Temporary Redirect
- 402: Payment Required
- 405: Method Not Allowed
- 406: Not Acceptable
- 407: Proxy Authentication Required
- 408: Request Timeout
- 409: Conflict
- 410: Gone
- 411: Length Required
- 412: Precondition Failed
- 413: Request Entity Too Large
- 414: Request-URI Too Long
- 415: Unsupported Media Type
- 416: Requested Range Not Satisfiable
- 417: Expectation Failed
- 426: Upgrade Required
- 428: Precondition Required
- 429: Too Many Requests
- 431: Request Header Fields Too Large
- 504: Gateway Timeout
- 505: HTTP Version Not Supported
- 511: Network Authenticatoin Required

#### RFC
- [RFC1945](http://tools.ietf.org/html/rfc1945)
- [RFC2068](http://tools.ietf.org/html/rfc2068)
- [RFC2616](http://tools.ietf.org/html/rfc2616)
- [RFC2817](http://tools.ietf.org/html/rfc2817)
- [RFC6585](http://tools.ietf.org/html/rfc6585)

### WEBDAV

#### Status Codes
- All from HTTP/1.0
- +
- 100: Continue
- 101: Switching Protocols
- 102: Processing
- 203: Non-Authoritative Information
- 205: Reset Content
- 206: Partial Content
- 207: Multi-Status
- 303: See Other
- 305: Use Proxy
- 306: (Unused)
- 307: Temporary Redirect
- 402: Payment Required
- 405: Method Not Allowed
- 406: Not Acceptable
- 407: Proxy Authentication Required
- 408: Request Timeout
- 409: Conflict
- 410: Gone
- 411: Length Required
- 412: Precondition Failed
- 413: Request Entity Too Large
- 414: Request-URI Too Long
- 415: Unsupported Media Type
- 416: Requested Range Not Satisfiable
- 417: Expectation Failed
- 422: Unprocessable Entity
- 423: Locked
- 504: Gateway Timeout
- 505: HTTP Version Not Supported
- 507: Insufficient Storage

#### RFC
- [RFC1945](http://tools.ietf.org/html/rfc1945)
- [RFC2068](http://tools.ietf.org/html/rfc2068)
- [RFC2518](http://tools.ietf.org/html/rfc2518)
- [RFC2616](http://tools.ietf.org/html/rfc2616)
- [RFC4918](http://tools.ietf.org/html/rfc4918)

### Misc

#### Status Codes
- 418: I'm A Teapot
- 451: Unavailable For Legal Reasons

## Credits
All credits go to the creator/maintainer(s) of the [Konsolidate Status](https://github.com/konfirm/konsolidate_hacklang/blob/master/core/status.hh) class.
