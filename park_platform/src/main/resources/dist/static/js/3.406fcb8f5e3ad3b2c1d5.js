webpackJsonp([3],{"2NtT":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("6Kx6"),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"handle-box"},[e._m(0),e._v(" "),a("el-form",{ref:"form",attrs:{inline:!0,rules:e.rules}},[a("el-form-item",{attrs:{label:"客户类型：",prop:"userType"}},[a("el-select",{staticClass:"handle-select",attrs:{placeholder:"请选择"},on:{change:e.khlxFn},model:{value:e.userType,callback:function(t){e.userType=t},expression:"userType"}},e._l(e.khlx,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"证件类型：",prop:"documentType"}},[a("el-select",{staticClass:"handle-select",attrs:{placeholder:"请选择"},model:{value:e.documentType,callback:function(t){e.documentType=t},expression:"documentType"}},e._l(e.zjlx,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"证件号码：",prop:"documentNo"}},[a("el-input",{staticClass:"handle-input",staticStyle:{width:"164px"},attrs:{placeholder:"请输入证件号码"},model:{value:e.documentNo,callback:function(t){e.documentNo=t},expression:"documentNo"}}),e._v(" "),a("span",{staticClass:"self_button",on:{click:e.jiaoyan}},[e._v("校验")])],1),e._v(" "),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"客户名称：",prop:"userName"}},[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入客户名称"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"手机号码：",prop:"mobile"}},[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入手机号码"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱："}},[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("el-form-item",{staticClass:"input100",attrs:{label:"联系地址：",prop:"address"}},[a("el-input",{staticClass:"input100_1",attrs:{placeholder:"请输入联系地址"},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1),e._v(" "),a("br"),e._v(" "),a("el-form-item",{staticClass:"input100",attrs:{label:"安装地址："}},[a("el-input",{staticClass:"input100_1",attrs:{placeholder:"请输入安装地址"},model:{value:e.fixAddress,callback:function(t){e.fixAddress=t},expression:"fixAddress"}})],1),e._v(" "),a("br"),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.userType,expression:"userType == 2 ? true : false"}]},[a("el-form-item",{staticClass:"input100",attrs:{label:"分支机构名称：",prop:"branchName"}},[a("el-input",{staticClass:"input100_1",attrs:{placeholder:"请输入分支机构名称"},model:{value:e.branchName,callback:function(t){e.branchName=t},expression:"branchName"}})],1),e._v(" "),a("br"),e._v(" "),a("el-form-item",{attrs:{label:"经办人名称：",prop:"agentName"}},[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入经办人名称"},model:{value:e.agentName,callback:function(t){e.agentName=t},expression:"agentName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"经办人证件：",prop:"agentDocumentType"}},[a("el-select",{staticClass:"handle-select",attrs:{placeholder:"请选择"},model:{value:e.agentDocumentType,callback:function(t){e.agentDocumentType=t},expression:"agentDocumentType"}},e._l(e.jbrzj,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"证件号码：",prop:"agentDocumentNo"}},[a("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入证件号码"},model:{value:e.agentDocumentNo,callback:function(t){e.agentDocumentNo=t},expression:"agentDocumentNo"}})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"证件照：",prop:"documentPhotos"}},[a("ul",{attrs:{id:"photos"}},e._l(e.documentPhotos,function(t,s){return a("li",{key:s},[a("img",{attrs:{src:t.path,width:"160",height:"auto"}}),e._v(" "),a("i",{staticClass:"el-icon-error self_delete",on:{click:function(t){e.self_delete(s)}}})])})),e._v(" "),a("el-button",{staticClass:"el-button el-button--primary el-button--small",attrs:{type:"button"},on:{click:e.self_upload}},[e._v("点击上传")]),e._v(" "),a("div",{staticStyle:{display:"none"}},[a("form",{attrs:{id:"uploadform",target:"uploadform",enctype:"multipart/form-data",method:"post"}},[a("input",{attrs:{id:"uploadfile",type:"file",name:"file",accept:"image/png, image/jpeg, image/gif, image/jpg"}}),e._v(" "),a("input",{attrs:{id:"uploadsubmit",type:"submit",value:"上传"}}),e._v(" "),a("iframe",{attrs:{id:"uploadiframe",name:"uploadform"}})])])],1),e._v(" "),a("br"),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"30px"},attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{type:"info"},on:{click:e.clear}},[e._v("清空")])],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"crumbs"},[t("span",[this._v("快速开户")])])}]};var n=function(e){a("HeX1"),a("J2A1")},o=a("VU/8")(s.a,l,!1,n,"data-v-814c09ea",null);t.default=o.exports},"6Kx6":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={data:function(){return{khlx:[{name:"个人用户",id:"1"},{name:"集团用户",id:"2"}],zjlx:[],userType:"",documentType:"",documentNo:"",userName:"",mobile:"",email:"",address:"",fixAddress:"",branchName:"",agentName:"",agentDocumentType:"",agentDocumentNo:"",documentPhotos:[],jbrzj:[{name:"身份证",id:"101"},{name:"护照",id:"102"},{name:"港澳居民来往内地通行证",id:"103"},{name:"台湾居民来往大陆通行证",id:"104"},{name:"军官证",id:"105"},{name:"武警警察身份证",id:"106"}],rules:{userType:[{required:!0,message:"请输入客户类型",validator:this.self_check}],documentType:[{required:!0,message:"请输入证件类型",validator:this.self_check}],documentNo:[{required:!0,message:"请输入证件号码",trigger:"blur",validator:this.self_check}],userName:[{required:!0,message:"请输入客户名称",trigger:"blur",validator:this.self_check}],mobile:[{required:!0,message:"请输入手机号码",trigger:"blur",validator:this.self_check}],address:[{required:!0,message:"请输入联系地址",trigger:"blur",validator:this.self_check}],branchName:[{required:!0,message:"请输入分支机构名称",trigger:"blur",validator:this.self_check}],agentName:[{required:!0,message:"请输入经办人名称",trigger:"blur",validator:this.self_check}],agentDocumentType:[{required:!0,message:"",validator:this.self_check}],agentDocumentNo:[{required:!0,message:"请输入证件号码",trigger:"blur",validator:this.self_check}],documentPhotos:[{required:!0,message:"",validator:this.self_check}]}}},mounted:function(){this.judgeUser()},methods:{self_check:function(e,t,a){this[e.field]||a(new Error(e.message))},judgeIsIE:function(){return!!(window.ActiveXObject||"ActiveXObject"in window)},khlxFn:function(){1==this.userType?this.zjlx=[{name:"身份证",id:"101"},{name:"护照",id:"102"},{name:"港澳居民来往内地通行证",id:"103"},{name:"台湾居民来往大陆通行证",id:"104"},{name:"军官证",id:"105"},{name:"武警警察身份证",id:"106"}]:2==this.userType&&(this.zjlx=[{name:"统一社会信用代码证书",id:"201"},{name:"组织机构代码证",id:"202"},{name:"营业执照",id:"203"},{name:"事业单位法人证书",id:"204"},{name:"社会团体法人登记证书",id:"205"},{name:"律师事务所执业许可证",id:"206"}]),this.documentType=""},jiaoyan:function(){var e=this,t=this.baseUrl+"issuing-card/rfid/customer/check?documentNo="+this.documentNo+"&documentType="+this.documentType;this.$axios.get(t).then(function(t){e.$message({message:t.data.msg,center:!0})})},self_upload:function self_upload(){if(this.documentPhotos.length>2)return this.$message({message:"最多上传3张证件照！",center:!0}),!1;var self=this;document.getElementById("uploadform").setAttribute("action",self.baseUrl+"issuing-card/core/annex/save"),document.getElementById("uploadfile").click(),this.judgeIsIE()?(self.$loading(),document.getElementById("uploadsubmit").click(),document.getElementById("uploadiframe").onload=function(){self.$loading().close(),document.getElementById("uploadfile").value="";try{var el=(document.getElementById("uploadiframe").contentWindow||document.getElementById("uploadiframe").contentDocument.parentWindow).document.body.innerHTML,html=el,json=!!html&&eval("("+html+")");json?(self.$message({message:json.msg,center:!0}),0==json.code&&self.documentPhotos.push(json.data)):self.$message({message:"上传失败！",center:!0})}catch(e){self.$message({message:"上传失败！",center:!0})}}):document.getElementById("uploadfile").onchange=function(){self.$loading(),document.getElementById("uploadsubmit").click(),document.getElementById("uploadiframe").onload=function(){self.$loading().close(),document.getElementById("uploadfile").value="";try{for(var el=(document.getElementById("uploadiframe").contentWindow||document.getElementById("uploadiframe").contentDocument.parentWindow).document.body;el&&3!==el.nodeType;)el=el.firstChild;var html=el.nodeValue,json=!!html&&eval("("+html+")");json?(self.$message({message:json.msg,center:!0}),0==json.code&&self.documentPhotos.push(json.data)):self.$message({message:"上传失败！",center:!0})}catch(e){self.$message({message:"上传失败！",center:!0})}}}},save:function(){var e=this,t=this.baseUrl+"issuing-card/rfid/customer/create";console.log(t);for(var a={address:this.address,documentNo:this.documentNo,documentType:this.documentType,email:this.email,fixAddress:this.fixAddress,mobile:this.mobile,userName:this.userName,userType:this.userType,documentPhotos:[]},s=0;s<this.documentPhotos.length;s++)a.documentPhotos.push(this.documentPhotos[s].id);2==this.userType&&(a.agentDocumentNo=this.agentDocumentNo,a.agentDocumentType=this.agentDocumentType,a.agentName=this.agentName,a.branchName=this.branchName),this.$axios.post(t,a).then(function(t){console.log(t),e.$message({message:t.data.msg,center:!0}),t.data.success&&e.$router.push("/yhgl")})},self_delete:function(e){this.documentPhotos.splice(e,1)},clear:function(){this.userType="",this.documentType="",this.documentNo="",this.userName="",this.mobile="",this.email="",this.address="",this.fixAddress="",this.branchName="",this.agentName="",this.agentDocumentType="",this.agentDocumentNo="",this.documentPhotos=[]}}}},HeX1:function(e,t){},J2A1:function(e,t){}});
//# sourceMappingURL=3.406fcb8f5e3ad3b2c1d5.js.map