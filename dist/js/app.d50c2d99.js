(function(){"use strict";var e={9492:function(e,n,t){var o=t(9242),s=t(3396);function r(e,n,t,o,r,a){const i=(0,s.up)("note-component");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i)])}const a=e=>((0,s.dD)("data-v-4dbc657d"),e=e(),(0,s.Cn)(),e),i={class:"container"},c=a((()=>(0,s._)("h1",null,"Note Component!",-1))),u=a((()=>(0,s._)("hr",null,null,-1)));function l(e,n,t,o,r,a){const l=(0,s.up)("progress-component"),d=(0,s.up)("form-component"),m=(0,s.up)("card-component");return(0,s.wg)(),(0,s.iD)("div",i,[c,u,(0,s.Wm)(l,{totalnotes:r.totalNotes},null,8,["totalnotes"]),(0,s.Wm)(d,{onNewmessage:a.getNewMessage},null,8,["onNewmessage"]),(0,s.Wm)(m,{messages:r.messages,onMessageid:a.removeMessageById},null,8,["messages","onMessageid"])])}var d=t(7139);const m={class:"container"},p={class:"wrapper"},g={class:"progress-bar"};function f(e,n,t,o,r,a){return(0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",p,[(0,s._)("div",g,[(0,s._)("span",{class:"progress-bar-fill",style:(0,d.j5)({width:100*t.totalnotes/9+"%"})},(0,d.zw)(t.totalnotes)+"/9",5)])])])}var v={name:"ProgressComponent",props:["totalnotes"]},h=t(89);const b=(0,h.Z)(v,[["render",f],["__scopeId","data-v-ebfd966a"]]);var w=b;const _={class:"container"},y={class:"form-inline"};function C(e,n,t,r,a,i){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("form",y,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>a.message=e),type:"text",placeholder:"Enter your note here..."},null,512),[[o.nr,a.message]]),(0,s._)("button",{type:"button",onClick:n[1]||(n[1]=(...e)=>i.addMessage&&i.addMessage(...e))},"Add Note")])])}var M={name:"FormComponent",data(){return{message:""}},methods:{addMessage(e){e.preventDefault(),this.$emit("newmessage",this.message),this.message=""}}};const N=(0,h.Z)(M,[["render",C],["__scopeId","data-v-7b9861ce"]]);var O=N;const j={class:"container"},D={class:"card-body"},k=["messageid"];function I(e,n,t,o,r,a){return(0,s.wg)(),(0,s.iD)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.messages,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"card",onClick:n[0]||(n[0]=(...e)=>a.removeMessage&&a.removeMessage(...e)),key:e},[(0,s._)("div",D,[(0,s._)("p",{messageid:t},(0,d.zw)(e),9,k)])])))),128))])}var x={name:"CardComponent",props:["messages"],methods:{removeMessage(e){this.$emit("messageid",e.target.attributes.messageid.value)}}};const Z=(0,h.Z)(x,[["render",I],["__scopeId","data-v-0d0ff5bb"]]);var F=Z,P={name:"NoteComponent",data(){return{totalNotes:0,messages:[]}},components:{ProgressComponent:w,FormComponent:O,CardComponent:F},methods:{getNewMessage(e){this.messages.length<9?(this.messages.push(e),this.totalNotes++):alert("Note Full")},removeMessageById(e){this.messages.splice(e,1),this.totalNotes--}}};const W=(0,h.Z)(P,[["render",l],["__scopeId","data-v-4dbc657d"]]);var z=W,A={name:"App",components:{NoteComponent:z}};const B=(0,h.Z)(A,[["render",r]]);var E=B;(0,o.ri)(E).mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],r=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(l--,1);var u=s();void 0!==u&&(n=u)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,r,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(s in i)t.o(i,s)&&(t.m[s]=i[s]);if(c)var l=c(t)}for(n&&n(o);u<a.length;u++)r=a[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunknoteproject"]=self["webpackChunknoteproject"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(9492)}));o=t.O(o)})();
//# sourceMappingURL=app.d50c2d99.js.map