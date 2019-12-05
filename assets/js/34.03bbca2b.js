(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{261:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started-for-back-end-providers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-for-back-end-providers"}},[e._v("#")]),e._v(" Getting started for back-end providers")]),e._v(" "),r("p",[e._v("As a back-end provider who wants to provide its datasets, processes and infrastructure to a broader audience through a standardized interface you may want to implement a driver for openEO.")]),e._v(" "),r("p",[e._v("First of all, you should go through the list of "),r("a",{attrs:{href:"https://github.com/Open-EO",target:"_blank",rel:"noopener noreferrer"}},[e._v("openEO repositories"),r("OutboundLink")],1),e._v(' and check whether there is already a back-end driver that suits your needs. In this case you don\'t need to develop your own driver, but "only" need to ingest your data, adopt your required processes and set up the infrastructure. Please follow the documentation for the individual driver you want to use.')]),e._v(" "),r("p",[e._v("If your preferred technology has no back-end driver yet, you may consider writing your own driver. All software written for openEO should follow the "),r("router-link",{attrs:{to:"/documentation/software-guidelines.html"}},[e._v("software development guidelines")]),e._v(".")],1),e._v(" "),r("p",[e._v("You certainly need to understand the "),r("router-link",{attrs:{to:"/documentation/0.4/glossary.html"}},[e._v("glossary")]),e._v(", the "),r("router-link",{attrs:{to:"/documentation/0.4/developers/arch.html"}},[e._v("architecture")]),e._v(" of openEO and the concepts behind "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/"}},[e._v("processes")]),e._v(" and "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/"}},[e._v("process graphs")]),e._v(". This helps you read and understand the "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html"}},[e._v("API specification")]),e._v(". Technical API related documents like "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/"}},[e._v("CORS")]),e._v(" and "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/errors.html"}},[e._v("error handing")]),e._v(" should be read, too.")],1),e._v(" "),r("p",[e._v("If you do not want to start from scratch, you could try to generate a server stub from the "),r("a",{attrs:{href:"https://www.openapis.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI 3.0"),r("OutboundLink")],1),e._v("-based "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html"}},[e._v("API specification")]),e._v(" with the "),r("a",{attrs:{href:"https://github.com/OpenAPITools/openapi-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI Generator"),r("OutboundLink")],1),e._v(".\nIf you are using Python to implement your driver you may reuse some common modules of the existing driver implementations:")],1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Open-EO/openeo-python-driver",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Driver Commons"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("You can implement a back-end in iterations. It is recommended to start by implementing the "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html#tag/Capabilities"}},[e._v("Capabilities")]),e._v(" microservice. "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html#tag/EO-Data-Discovery"}},[e._v("EO Data Discovery")]),e._v(", "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html#tag/Process-Discovery"}},[e._v("Process Discovery")]),e._v(" are important for the client libraries to be available, too. Afterwards you should implement "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html#tag/Batch-Job-Management"}},[e._v("Batch Job Management")]),e._v(" or "),r("router-link",{attrs:{to:"/documentation/0.4/developers/api/reference.html#/paths/~1result/post"}},[e._v("synchronous data processing")]),e._v(". All other microservices can be added later and are not strictly required to run openEO services. Keep in mind that you don't need to implement all endpoints in the first iteration and that you can specify in the Capabilities, which endpoints you are supporting.")],1),e._v(" "),r("p",[e._v("For example, you could start by implementing the following endpoints in the first iteration:")]),e._v(" "),r("ul",[r("li",[e._v("Well-Known Document: "),r("code",[e._v("GET /.well-known/openeo")])]),e._v(" "),r("li",[e._v("Capabilities: "),r("code",[e._v("GET /")]),e._v(" and "),r("code",[e._v("GET /output_formats")])]),e._v(" "),r("li",[e._v("Data discovery: "),r("code",[e._v("GET /collections")]),e._v(" and "),r("code",[e._v("GET /collections/{collection_id}")])]),e._v(" "),r("li",[e._v("Process discovery: "),r("code",[e._v("GET /processes")])]),e._v(" "),r("li",[e._v("Data processing: "),r("code",[e._v("POST /result")])]),e._v(" "),r("li",[e._v("Authentication (if required): "),r("code",[e._v("GET /credentials/basic")])])]),e._v(" "),r("p",[e._v("Afterwards you can already start experimenting with your first process graphs and process EO data with our client libraries on your back-end.")])])}),[],!1,null,null,null);t.default=n.exports}}]);