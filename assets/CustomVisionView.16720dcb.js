import{u as q}from"./settings.fe6fa44e.js";import{g as _,S as j,a as U,A as M}from"./apiKeyCredentials.7b051a1a.js";import{d as C,o as B,c as T,a as g,F as w}from"./index.e0d5fc43.js";import"./v4.90f1a8cc.js";import"./tokenCredential.b04f4687.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var P=function(n,i){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},P(n,i)};function v(n,i){P(n,i);function e(){this.constructor=n}n.prototype=i===null?Object.create(i):(e.prototype=i.prototype,new e)}var s=function(){return s=Object.assign||function(i){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a])}return i},s.apply(this,arguments)},x={serializedName:"BoundingBox",type:{name:"Composite",className:"BoundingBox",modelProperties:{left:{required:!0,nullable:!1,serializedName:"left",type:{name:"Number"}},top:{required:!0,nullable:!1,serializedName:"top",type:{name:"Number"}},width:{required:!0,nullable:!1,serializedName:"width",type:{name:"Number"}},height:{required:!0,nullable:!1,serializedName:"height",type:{name:"Number"}}}}},p={serializedName:"CustomVisionError",type:{name:"Composite",className:"CustomVisionError",modelProperties:{code:{required:!0,serializedName:"code",type:{name:"String"}},message:{required:!0,serializedName:"message",type:{name:"String"}}}}},D={serializedName:"Prediction",type:{name:"Composite",className:"Prediction",modelProperties:{probability:{nullable:!1,readOnly:!0,serializedName:"probability",type:{name:"Number"}},tagId:{nullable:!1,readOnly:!0,serializedName:"tagId",type:{name:"Uuid"}},tagName:{nullable:!0,readOnly:!0,serializedName:"tagName",type:{name:"String"}},boundingBox:{nullable:!0,readOnly:!0,serializedName:"boundingBox",type:{name:"Composite",className:"BoundingBox"}},tagType:{nullable:!0,readOnly:!0,serializedName:"tagType",type:{name:"String"}}}}},l={serializedName:"ImagePrediction",type:{name:"Composite",className:"ImagePrediction",modelProperties:{id:{nullable:!1,readOnly:!0,serializedName:"id",type:{name:"Uuid"}},project:{nullable:!1,readOnly:!0,serializedName:"project",type:{name:"Uuid"}},iteration:{nullable:!1,readOnly:!0,serializedName:"iteration",type:{name:"Uuid"}},created:{nullable:!1,readOnly:!0,serializedName:"created",type:{name:"DateTime"}},predictions:{readOnly:!0,serializedName:"predictions",type:{name:"Sequence",element:{type:{name:"Composite",className:"Prediction"}}}}}}},f={serializedName:"ImageUrl",type:{name:"Composite",className:"ImageUrl",modelProperties:{url:{required:!0,nullable:!1,serializedName:"url",type:{name:"String"}}}}},E=Object.freeze(Object.defineProperty({__proto__:null,BoundingBox:x,CustomVisionError:p,Prediction:D,ImagePrediction:l,ImageUrl:f},Symbol.toStringTag,{value:"Module"})),d={parameterPath:["options","application"],mapper:{serializedName:"application",type:{name:"String"}}},m={parameterPath:"endpoint",mapper:{required:!0,serializedName:"Endpoint",defaultValue:"",type:{name:"String"}},skipEncoding:!0},N={parameterPath:"imageData",mapper:{required:!0,serializedName:"imageData",type:{name:"Stream"}}},u={parameterPath:"projectId",mapper:{required:!0,serializedName:"projectId",type:{name:"Uuid"}}},c={parameterPath:"publishedName",mapper:{required:!0,serializedName:"publishedName",type:{name:"String"}}},k="@azure/cognitiveservices-customvision-prediction",A="5.1.2",V=function(n){v(i,n);function i(e,t,r){var a=this;if(t==null)throw new Error("'endpoint' cannot be null.");if(e==null)throw new Error("'credentials' cannot be null.");if(r||(r={}),!r.userAgent){var o=_();r.userAgent=k+"/"+A+" "+o}return a=n.call(this,e,r)||this,a.baseUri="{Endpoint}/customvision/v3.1/prediction",a.requestContentType="multipart/form-data",a.endpoint=t,a.credentials=e,a}return i}(j),R=function(n){v(i,n);function i(e,t,r){return n.call(this,e,t,r)||this}return i.prototype.classifyImage=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageData:r,options:a},W,o)},i.prototype.classifyImageWithNoStore=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageData:r,options:a},F,o)},i.prototype.classifyImageUrl=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageUrl:r,options:a},H,o)},i.prototype.classifyImageUrlWithNoStore=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageUrl:r,options:a},L,o)},i.prototype.detectImage=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageData:r,options:a},K,o)},i.prototype.detectImageWithNoStore=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageData:r,options:a},G,o)},i.prototype.detectImageUrl=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageUrl:r,options:a},J,o)},i.prototype.detectImageUrlWithNoStore=function(e,t,r,a,o){return this.sendOperationRequest({projectId:e,publishedName:t,imageUrl:r,options:a},Q,o)},i}(V),y=new U(E),W={httpMethod:"POST",path:"{projectId}/classify/iterations/{publishedName}/image",urlParameters:[m,u,c],queryParameters:[d],formDataParameters:[N],contentType:"multipart/form-data",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},F={httpMethod:"POST",path:"{projectId}/classify/iterations/{publishedName}/image/nostore",urlParameters:[m,u,c],queryParameters:[d],formDataParameters:[N],contentType:"multipart/form-data",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},H={httpMethod:"POST",path:"{projectId}/classify/iterations/{publishedName}/url",urlParameters:[m,u,c],queryParameters:[d],requestBody:{parameterPath:"imageUrl",mapper:s(s({},f),{required:!0})},contentType:"application/json; charset=utf-8",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},L={httpMethod:"POST",path:"{projectId}/classify/iterations/{publishedName}/url/nostore",urlParameters:[m,u,c],queryParameters:[d],requestBody:{parameterPath:"imageUrl",mapper:s(s({},f),{required:!0})},contentType:"application/json; charset=utf-8",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},K={httpMethod:"POST",path:"{projectId}/detect/iterations/{publishedName}/image",urlParameters:[m,u,c],queryParameters:[d],formDataParameters:[N],contentType:"multipart/form-data",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},G={httpMethod:"POST",path:"{projectId}/detect/iterations/{publishedName}/image/nostore",urlParameters:[m,u,c],queryParameters:[d],formDataParameters:[N],contentType:"multipart/form-data",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},J={httpMethod:"POST",path:"{projectId}/detect/iterations/{publishedName}/url",urlParameters:[m,u,c],queryParameters:[d],requestBody:{parameterPath:"imageUrl",mapper:s(s({},f),{required:!0})},contentType:"application/json; charset=utf-8",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y},Q={httpMethod:"POST",path:"{projectId}/detect/iterations/{publishedName}/url/nostore",urlParameters:[m,u,c],queryParameters:[d],requestBody:{parameterPath:"imageUrl",mapper:s(s({},f),{required:!0})},contentType:"application/json; charset=utf-8",responses:{200:{bodyMapper:l},default:{bodyMapper:p}},serializer:y};const X=g("input",{type:"text",placeholder:"Link to the image you want to analyze ...",class:"input input-bordered w-1/3",id:"imagelink1"},null,-1),Y=g("p",{id:"display"},null,-1),Z=g("img",{id:"image"},null,-1),ie=C({__name:"CustomVisionView",setup(n){const i=q();var e="",t=0;function r(){e=document.getElementById("imagelink1").value;const a=new M({inHeader:{"Prediction-key":i.predictionkey}});new R(a,i.predictionendpoint).classifyImageUrl(i.iterationid,i.publishiterationname,{url:e}).then(O=>{var b=O.predictions;let I="";t=Object.keys(b).length;for(var h=0;h<t;h++){var S=b[h].probability*100,z=b[h].tagName;console.log(b[h].probability*100),I+='<progress class="progress w-56" value='+Math.round(S)+' max="100"></progress>'+z+"<br>"}document.getElementById("display").innerHTML=I,document.getElementById("image").src=e})}return(a,o)=>(B(),T(w,null,[g("div",{class:"form-control"},[g("div",{class:"input-group"},[X,g("button",{class:"btn",onClick:r},"Classify")])]),Y,Z],64))}});export{ie as default};
