(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{lAMa:function(n,l,u){"use strict";u.r(l);var a=u("CcnG"),o=u("pYHs"),t=function(){return function(n){this.empresa=n}}(),i=u("EFyh"),b=function(){function n(n,l){this.padroesService=n,this.loginService=l,this.bancas=[],this.bancasPadrao=new t(this.loginService.empresa)}return n.prototype.ngOnInit=function(){this.obterBancas()},n.prototype.atualiza=function(n,l){var u=this.bancas.indexOf(n);this.bancas[u]=l},n.prototype.remove=function(n){var l=this.bancas.indexOf(n);this.bancas.splice(l,1)},n.prototype.novaBanca=function(){null==this.bancas&&(this.bancas=[]),this.bancas.push("NOVA_BANCA")},n.prototype.salvarBancas=function(){this.bancasPadrao.bancas=this.bancas,this.padroesService.registrarBancas(this.bancasPadrao).subscribe(function(n){n?alert("Bancas registradas no servidor"):alert("Falha no servidor")},function(n){console.log(n)})},n.prototype.obterBancas=function(){var n=this;this.padroesService.obterBancas().subscribe(function(l){l?(n.bancas=l.bancas,n.bancasPadrao=l):n.bancas=[]})},n}(),c=function(){return function(){}}(),e=u("pMnS"),r=u("oBZk"),s=u("ZZ/e"),p=u("gIcY"),h=u("Ip0R"),v=a.nb({encapsulation:0,styles:[[""]],data:{}});function f(n){return a.Gb(0,[(n()(),a.pb(0,0,null,null,11,"div",[],null,null,null,null,null)),(n()(),a.pb(1,0,null,null,10,"ion-item",[],null,null,null,r.X,r.p)),a.ob(2,49152,null,0,s.H,[a.h,a.k,a.z],null,null),(n()(),a.pb(3,0,null,0,3,"ion-input",[],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var o=!0,t=n.component;return"ionBlur"===l&&(o=!1!==a.zb(n,6)._handleBlurEvent(u.target)&&o),"ionChange"===l&&(o=!1!==a.zb(n,6)._handleInputEvent(u.target)&&o),"ionBlur"===l&&(o=!1!==t.atualiza(n.context.$implicit,a.zb(n,5).value)&&o),o},r.V,r.o)),a.Cb(5120,null,p.c,function(n){return[n]},[s.Ob]),a.ob(5,49152,[["valor",4]],0,s.G,[a.h,a.k,a.z],{value:[0,"value"]},null),a.ob(6,16384,null,0,s.Ob,[a.k],null,null),(n()(),a.pb(7,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.pb(8,0,null,null,3,"ion-button",[["item-end",""]],null,[[null,"click"]],function(n,l,u){var a=!0;return"click"===l&&(a=!1!==n.component.remove(n.context.$implicit)&&a),a},r.J,r.c)),a.ob(9,49152,null,0,s.k,[a.h,a.k,a.z],null,null),(n()(),a.pb(10,0,null,0,1,"ion-icon",[["name","remove"]],null,null,null,r.T,r.m)),a.ob(11,49152,null,0,s.C,[a.h,a.k,a.z],{name:[0,"name"]},null)],function(n,l){n(l,5,0,a.rb(1,"",l.context.$implicit,"")),n(l,11,0,"remove")},null)}function d(n){return a.Gb(0,[(n()(),a.pb(0,0,null,null,20,"ion-header",[],null,null,null,r.S,r.l)),a.ob(1,49152,null,0,s.B,[a.h,a.k,a.z],null,null),(n()(),a.pb(2,0,null,0,18,"ion-toolbar",[],null,null,null,r.nb,r.G)),a.ob(3,49152,null,0,s.Cb,[a.h,a.k,a.z],null,null),(n()(),a.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.K,r.d)),a.ob(5,49152,null,0,s.l,[a.h,a.k,a.z],null,null),(n()(),a.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.bb,r.v)),a.ob(7,49152,null,0,s.R,[a.h,a.k,a.z],null,null),(n()(),a.pb(8,0,null,0,9,"ion-buttons",[["slot","end"]],null,null,null,r.K,r.d)),a.ob(9,49152,null,0,s.l,[a.h,a.k,a.z],null,null),(n()(),a.pb(10,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,u){var a=!0;return"click"===l&&(a=!1!==n.component.novaBanca()&&a),a},r.J,r.c)),a.ob(11,49152,null,0,s.k,[a.h,a.k,a.z],null,null),(n()(),a.pb(12,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,r.T,r.m)),a.ob(13,49152,null,0,s.C,[a.h,a.k,a.z],{name:[0,"name"]},null),(n()(),a.pb(14,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,u){var a=!0;return"click"===l&&(a=!1!==n.component.salvarBancas()&&a),a},r.J,r.c)),a.ob(15,49152,null,0,s.k,[a.h,a.k,a.z],null,null),(n()(),a.pb(16,0,null,0,1,"ion-icon",[["name","save"]],null,null,null,r.T,r.m)),a.ob(17,49152,null,0,s.C,[a.h,a.k,a.z],{name:[0,"name"]},null),(n()(),a.pb(18,0,null,0,2,"ion-title",[],null,null,null,r.lb,r.E)),a.ob(19,49152,null,0,s.Ab,[a.h,a.k,a.z],null,null),(n()(),a.Fb(-1,0,["Bancas"])),(n()(),a.pb(21,0,null,null,4,"ion-content",[["padding",""]],null,null,null,r.P,r.i)),a.ob(22,49152,null,0,s.u,[a.h,a.k,a.z],null,null),a.ob(23,16384,null,0,s.d,[a.k],null,null),(n()(),a.gb(16777216,null,0,1,null,f)),a.ob(25,278528,null,0,h.h,[a.O,a.L,a.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var u=l.component;n(l,13,0,"add"),n(l,17,0,"save"),n(l,25,0,u.bancas)},null)}function k(n){return a.Gb(0,[(n()(),a.pb(0,0,null,null,1,"app-organiza-bancas",[],null,null,null,d,v)),a.ob(1,114688,null,0,b,[o.a,i.a],null,null)],function(n,l){n(l,1,0)},null)}var m=a.lb("app-organiza-bancas",b,k,{},{},[]),z=u("ZYCi");u.d(l,"OrganizaBancasPageModuleNgFactory",function(){return g});var g=a.mb(c,[],function(n){return a.wb([a.xb(512,a.j,a.bb,[[8,[e.a,m]],[3,a.j],a.x]),a.xb(4608,h.k,h.j,[a.u,[2,h.r]]),a.xb(4608,p.k,p.k,[]),a.xb(4608,s.a,s.a,[a.z,a.g]),a.xb(4608,s.Gb,s.Gb,[s.a,a.j,a.q]),a.xb(4608,s.Kb,s.Kb,[s.a,a.j,a.q]),a.xb(1073742336,h.b,h.b,[]),a.xb(1073742336,p.i,p.i,[]),a.xb(1073742336,p.b,p.b,[]),a.xb(1073742336,s.Eb,s.Eb,[]),a.xb(1073742336,z.o,z.o,[[2,z.u],[2,z.m]]),a.xb(1073742336,c,c,[]),a.xb(1024,z.k,function(){return[[{path:"",component:b}]]},[])])})}}]);