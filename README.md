[![npm version](https://badge.fury.io/js/http-status-code.svg)](http://badge.fury.io/js/http-status-code)
[![travis ci](https://api.travis-ci.org/daanvanham/http-status-code.svg)](https://travis-ci.org/daanvanham/http-status-code)
[![Coverage Status](https://coveralls.io/repos/daanvanham/http-status-code/badge.svg)](https://coveralls.io/r/daanvanham/http-status-code)

# HTTP Status Codes
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

#### RFCs
- [RFC1945](http://tools.ietf.org/html/rfc1945)

### HTTP/1.1

#### Status Codes
- 100: Continue
- 101: Switching Protocols
- 200: OK
- 201: Created
- 202: Accepted
- 203: Non-Authoritative Information
- 204: No Content
- 205: Reset Content
- 206: Partial Content
- 300: Multiple Choices
- 301: Moved Permanently
- 302: Moved Temporarily
- 303: See Other
- 304: Not Modified
- 305: Use Proxy
- 306: Unused)
- 307: Temporary Redirect
- 400: Bad Request
- 401: Unauthorized
- 402: Payment Required
- 403: Forbidden
- 404: Not Found
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
- 500: Internal Server Error
- 501: Not Implemented
- 502: Bad Gateway
- 503: Service Unavailable
- 504: Gateway Timeout
- 505: HTTP Version Not Supported
- 511: Network Authentication Required

#### RFCs
- [RFC1945](http://tools.ietf.org/html/rfc1945)
- [RFC2068](http://tools.ietf.org/html/rfc2068)
- [RFC2616](http://tools.ietf.org/html/rfc2616)
- [RFC2817](http://tools.ietf.org/html/rfc2817)
- [RFC6585](http://tools.ietf.org/html/rfc6585)

### HTTP/2

#### Status Codes
- 100: Continue
- 101: Switching Protocols
- 200: OK
- 201: Created
- 202: Accepted
- 203: Non-Authoritative Information
- 204: No Content
- 205: Reset Content
- 206: Partial Content
- 300: Multiple Choices
- 301: Moved Permanently
- 302: Found
- 302: Moved Temporarily
- 303: See Other
- 304: Not Modified
- 305: Use Proxy
- 306: Unused)
- 307: Temporary Redirect
- 308: Permanent Redirect
- 400: Bad Request
- 401: Unauthorized
- 402: Payment Required
- 403: Forbidden
- 404: Not Found
- 405: Method Not Allowed
- 406: Not Acceptable
- 407: Proxy Authentication Required
- 408: Request Timeout
- 409: Conflict
- 410: Gone
- 411: Length Required
- 412: Precondition Failed
- 413: Payload Too Large
- 413: Request Entity Too Large
- 414: Request-URI Too Long
- 414: URI Too Long
- 415: Unsupported Media Type
- 416: Requested Range Not Satisfiable
- 417: Expectation Failed
- 421: Misdirected Request
- 426: Upgrade Required
- 428: Precondition Required
- 429: Too Many Requests
- 431: Request Header Fields Too Large
- 500: Internal Server Error
- 501: Not Implemented
- 502: Bad Gateway
- 503: Service Unavailable
- 504: Gateway Timeout
- 505: HTTP Version Not Supported
- 511: Network Authentication Required

#### RFCs
- [RFC1945](http://tools.ietf.org/html/rfc1945)
- [RFC2068](http://tools.ietf.org/html/rfc2068)
- [RFC2616](http://tools.ietf.org/html/rfc2616)
- [RFC2817](http://tools.ietf.org/html/rfc2817)
- [RFC6585](http://tools.ietf.org/html/rfc6585)
- [RFC7231](http://tools.ietf.org/html/rfc7231)
- [RFC7232](http://tools.ietf.org/html/rfc7232)
- [RFC7235](http://tools.ietf.org/html/rfc7235)
- [RFC7538](http://tools.ietf.org/html/rfc7538)
- [RFC7540](http://tools.ietf.org/html/rfc7540)

### WEBDAV

#### Status Codes
- 102: Processing
- 200: OK
- 201: Created
- 202: Accepted
- 204: No Content
- 207: Multi-Status
- 208: Already Reported
- 226: IM Used
- 300: Multiple Choices
- 301: Moved Permanently
- 302: Moved Temporarily
- 304: Not Modified
- 306: Unused)
- 307: Temporary Redirect
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 416: Requested Range Not Satisfiable
- 417: Expectation Failed
- 422: Unprocessable Entity
- 423: Locked
- 424: Failed Dependency
- 426: Upgrade Required
- 428: Precondition Required
- 429: Too Many Requests
- 431: Request Header Fields Too Large
- 500: Internal Server Error
- 501: Not Implemented
- 502: Bad Gateway
- 503: Service Unavailable
- 507: Insufficient Storage
- 508: Loop Detected
- 511: Network Authentication Required

#### RFCs
- [RFC1945](http://tools.ietf.org/html/rfc1945)
- [RFC2518](http://tools.ietf.org/html/rfc2518)
- [RFC2616](http://tools.ietf.org/html/rfc2616)
- [RFC2817](http://tools.ietf.org/html/rfc2817)
- [RFC3229](http://tools.ietf.org/html/rfc3229)
- [RFC4918](http://tools.ietf.org/html/rfc4918)
- [RFC5842](http://tools.ietf.org/html/rfc5842)
- [RFC6585](http://tools.ietf.org/html/rfc6585)

### Miscellanious

#### Status Codes
- 103 Early Hints ([misc](https://tools.ietf.org/html/draft-kazuho-early-hints-status-code-00))
- 418: I'm A Teapot ([RFC2324](http://tools.ietf.org/html/rfc2324))
- 451: Unavailable For Legal Reasons ([misc](https://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-00))
- 506: Variant Also Negotiates ([RFC2295](http://tools.ietf.org/html/rfc2295))
- 510: Not Extended ([RFC2774](http://tools.ietf.org/html/rfc2774))


## Credits
All credits go to the creator/maintainer(s) of the [Konsolidate Status](https://github.com/konfirm/konsolidate_hacklang/blob/master/core/status.hh) class.
