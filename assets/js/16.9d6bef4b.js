(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{246:function(t,e,i){},403:function(t,e,i){"use strict";i(246)},414:function(t,e,i){"use strict";i.r(e);var s=i(160),n=i(155),r={name:"FederationMissingNotice",mixins:[s.a],props:{missing:{type:Array,required:!0},retry:{type:Function,default:null}},computed:{services(){return Array.isArray(this.missing)?this.missing.map(t=>n.a.isObject(this.federation)&&n.a.isObject(this.federation[t])&&"string"==typeof this.federation[t].title?this.federation[t].title:t):null}}},o=(i(403),i(4)),a=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.services?e("section",{staticClass:"vue-component message-block federation federation-backends"},[t.retry?e("button",{staticClass:"retry",attrs:{type:"button"},on:{click:t.retry}},[t._t("button-text",(function(){return[t._v("Retry")]}))],2):t._e(),t._v(" "),e("strong",{staticClass:"header"},[t._v("Incomplete")]),t._v(" "),e("p",[t._v("\r\n\t\t\tThe following list is incomplete as at least one of the services in the federation is currently not available.\r\n\t\t\tThe data for the following services is missing: "+t._s(t.services.join(", "))+"\r\n\t\t")])]):t._e()}),[],!1,null,null,null);e.default=a.exports}}]);