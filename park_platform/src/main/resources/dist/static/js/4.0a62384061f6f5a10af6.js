webpackJsonp([4],{XTaT:function(t,e,n){"use strict";(function(t){var c=n("Wj8O"),a=(n.n(c),n("j1ja")),o=(n.n(a),n("mtWM")),r=n.n(o);e.a={data:function(){return{}},mounted:function(){this.judgeUser()},computed:{},methods:{test:function(){r.a.get("api/issuing-card/hello",{}).then(function(t){console.log(t)})},connect:function(){var t=OCX.OCX_Connect();alert(t)},read:function(){var t=OCX.OCX_Read3();alert(t)},write1:function(){t.getJSON("${ctx}/writeCard",function(t){if(t.success){var e=OCX.OCX_Write(t.data);alert(e)}else alert("Sorry.")})},putKey:function(){t.getJSON("${ctx}/putKey",function(t){if(t.success){var e=OCX.OCX_PutKey(t.data.first,t.data.second);alert(e)}else alert("Sorry.")})}}}}).call(e,n("Wj8O"))},ZHQg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n("XTaT"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("OBJECT",{attrs:{ID:"OCX",CLASSID:"CLSID:876b45b2-5c31-499f-a28b-11eef25c6746",codebase:"./../../static/cardrealize.ocx",height:"0",width:"0"}}),t._v(" "),n("button",{on:{click:function(e){t.test()}}},[t._v("test")]),t._v(" "),n("button",{on:{click:function(e){t.connect()}}},[t._v("connect")]),t._v(" "),n("button",{on:{click:function(e){t.read()}}},[t._v("read")])],1)},staticRenderFns:[]};var o=function(t){n("dhd6")},r=n("VU/8")(c.a,a,!1,o,"data-v-8535497e",null);e.default=r.exports},dhd6:function(t,e){}});
//# sourceMappingURL=4.0a62384061f6f5a10af6.js.map