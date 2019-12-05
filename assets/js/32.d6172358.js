(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{258:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"status-and-error-handling"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status-and-error-handling"}},[e._v("#")]),e._v(" Status and error handling")]),e._v(" "),r("p",[e._v("The success of requests MUST be indicated using "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP status codes"),r("OutboundLink")],1),e._v(" according to "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7231"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If the API responds with a status code between 100 and 399 the back-end indicates that the request has been handled successfully.")]),e._v(" "),r("p",[e._v("In general an error is communicated with a status code between 400 and 599. Client errors are defined as a client passing invalid data to the service and the service "),r("em",[e._v("correctly")]),e._v(' rejecting that data. Examples include invalid credentials, incorrect parameters, unknown versions, or similar. These are generally "4xx" HTTP error codes and are the result of a client passing incorrect or invalid data. Client errors do '),r("em",[e._v("not")]),e._v(" contribute to overall API availability.")]),e._v(" "),r("p",[e._v('Server errors are defined as the server failing to correctly return in response to a valid client request. These are generally "5xx" HTTP error codes. Server errors '),r("em",[e._v("do")]),e._v(" contribute to the overall API availability. Calls that fail due to rate limiting or quota failures MUST NOT count as server errors.")]),e._v(" "),r("h2",{attrs:{id:"json-error-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#json-error-object"}},[e._v("#")]),e._v(" JSON error object")]),e._v(" "),r("p",[e._v("A JSON error object SHOULD be sent with all responses that have a status code between 400 and 599.")]),e._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"936DA01F-9ABD-4D9D-80C7-02AF85C822A8"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"code"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SampleError"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"message"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A sample error message."')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://www.openeo.org/docs/errors/SampleError"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("Sending "),r("code",[e._v("code")]),e._v(" and "),r("code",[e._v("message")]),e._v(" is REQUIRED.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("A back-end MAY add a free-form "),r("code",[e._v("id")]),e._v(" (unique identifier) to the error response to be able to log and track errors with further non-disclosable details.")])]),e._v(" "),r("li",[r("p",[e._v("The "),r("code",[e._v("code")]),e._v(" is either one of the standardized textual openEO error codes below or a proprietary error code.")])]),e._v(" "),r("li",[r("p",[e._v("The "),r("code",[e._v("message")]),e._v(' explains the reason the server is rejecting the request. For "4xx" error codes the message explains how the client needs to modify the request.')]),e._v(" "),r("p",[e._v("By default the message MUST be sent in English language. Content Negotiation is used to localize the error messages: If an "),r("code",[e._v("Accept-Language")]),e._v(" header is sent by the client and a translation is available, the message should be translated accordingly and the "),r("code",[e._v("Content-Language")]),e._v(' header must be present in the response. See "'),r("a",{attrs:{href:"http://apiux.com/2013/04/25/how-to-localize-your-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to localize your API"),r("OutboundLink")],1),e._v('" for more information.')])]),e._v(" "),r("li",[r("p",[r("code",[e._v("url")]),e._v(" is an OPTIONAL attribute and contains a link to a resource that is explaining the error and potential solutions in-depth.")])])]),e._v(" "),r("h2",{attrs:{id:"standardized-status-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#standardized-status-codes"}},[e._v("#")]),e._v(" Standardized status codes")]),e._v(" "),r("p",[e._v("The openEO API usually uses the following HTTP status codes for successful requests:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("200 OK")]),e._v(":\nIndicates a successful request "),r("strong",[e._v("with")]),e._v(" a response body being sent.")]),e._v(" "),r("li",[r("strong",[e._v("201 Created")]),e._v("\nIndicates a successful request that successfully created a new resource. Sends a "),r("code",[e._v("Location")]),e._v(" header to the newly created resource "),r("strong",[e._v("without")]),e._v(" a response body.")]),e._v(" "),r("li",[r("strong",[e._v("202 Accepted")]),e._v("\nIndicates a successful request that successfully queued the creation of a new resource, but it has not been created yet. The response is sent "),r("strong",[e._v("without")]),e._v(" a response body.")]),e._v(" "),r("li",[r("strong",[e._v("204 No Content")]),e._v(":\nIndicates a successful request "),r("strong",[e._v("without")]),e._v(" a response body being sent.")])]),e._v(" "),r("p",[e._v("The openEO API often uses the following HTTP status codes for failed requests:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("400 Bad Request")]),e._v(":\nThe back-end responds with this error code whenever the error has its origin on client side and no other HTTP status code in the 400 range is suitable.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("401 Unauthorized")]),e._v(":\nThe client did not provide any authentication details for a resource requiring authentication or the provided authentication details are not correct.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("403 Forbidden")]),e._v(":\nThe client did provided correct authentication details, but the privileges/permissions of the provided credentials do not allow to request the resource.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("404 Not Found")]),e._v(":\nThe resource specified by the path does not exist, i.e. one of the resources belonging to the specified identifiers are not available at the back-end.\n"),r("em",[e._v("Note:")]),e._v(" Unsupported endpoints MUST use HTTP status code 501.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("500 Internal Server Error")]),e._v(":\nThe error has its origin on server side and no other status code in the 500 range is suitable.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("501 Not Implemented")]),e._v(":\nAn endpoint is specified in the openEO API, but is not supported.")])])]),e._v(" "),r("p",[e._v("If a HTTP status code in the 400 range is returned, the client SHOULD NOT repeat the request without modifications. For HTTP status code in the 500 range, the client MAY repeat the same request later.")]),e._v(" "),r("p",[e._v("All HTTP status codes defined in RFC 7231 in the 400 and 500 ranges can be used as openEO error code in addition to the most used status codes mentioned here. Responding with openEO error codes 400 and 500 SHOULD be avoided in favor of any more specific standardized or proprietary openEO error code.")]),e._v(" "),r("h2",{attrs:{id:"openeo-error-codes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openeo-error-codes"}},[e._v("#")]),e._v(" openEO error codes")]),e._v(" "),r("p",[e._v("The following table of error codes is "),r("strong",[e._v("incomplete")]),e._v(". These error codes will evolve over time. If you are missing any common error, please contribute it by adding an "),r("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),r("OutboundLink")],1),e._v(", creating a pull request or get in contact in our "),r("a",{attrs:{href:"https://openeo-chat.eodc.eu/channel/public",target:"_blank",rel:"noopener noreferrer"}},[e._v("chat room"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ErrorCodes")],1)}),[],!1,null,null,null);t.default=o.exports}}]);