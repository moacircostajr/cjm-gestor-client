(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{hv1F:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("ipfH"),t=u("ZZ/e"),b=function(){function l(l,n){this.exercicioService=l,this.navController=n}return l.prototype.ionViewWillEnter=function(){this.obterExercicios()},l.prototype.obterExercicios=function(){var l=this;this.exercicioService.obterExercicios().subscribe(function(n){l.exercicios=n},function(l){console.log(l)})},l.prototype.verExercicio=function(l){this.navController.navigateForward(["/admin/questao",l.id])},l}(),e=function(){return function(){}}(),c=u("pMnS"),r=u("oBZk"),a=u("ZYCi"),p=u("Ip0R"),k=o.nb({encapsulation:0,styles:[[""]],data:{}});function s(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,29,"div",[],null,null,null,null,null)),(l()(),o.pb(1,0,null,null,28,"ion-card",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.verExercicio(l.context.$implicit)&&o),o},r.O,r.e)),o.ob(2,49152,null,0,t.l,[o.h,o.k],null,null),(l()(),o.pb(3,0,null,0,26,"ion-card-content",[],null,null,null,r.L,r.f)),o.ob(4,49152,null,0,t.m,[o.h,o.k],null,null),(l()(),o.pb(5,0,null,0,4,"ion-item",[],null,null,null,r.X,r.p)),o.ob(6,49152,null,0,t.G,[o.h,o.k],null,null),(l()(),o.pb(7,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.r)),o.ob(8,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.Fb(9,0,["",""])),(l()(),o.pb(10,0,null,0,4,"ion-item",[],null,null,null,r.X,r.p)),o.ob(11,49152,null,0,t.G,[o.h,o.k],null,null),(l()(),o.pb(12,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.r)),o.ob(13,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.Fb(14,0,["",""])),(l()(),o.pb(15,0,null,0,4,"ion-item",[],null,null,null,r.X,r.p)),o.ob(16,49152,null,0,t.G,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.r)),o.ob(18,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.Fb(19,0,["",""])),(l()(),o.pb(20,0,null,0,4,"ion-item",[],null,null,null,r.X,r.p)),o.ob(21,49152,null,0,t.G,[o.h,o.k],null,null),(l()(),o.pb(22,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.r)),o.ob(23,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.Fb(24,0,["",""])),(l()(),o.pb(25,0,null,0,4,"ion-item",[],null,null,null,r.X,r.p)),o.ob(26,49152,null,0,t.G,[o.h,o.k],null,null),(l()(),o.pb(27,0,null,0,2,"ion-label",[],null,null,null,r.Y,r.r)),o.ob(28,49152,null,0,t.M,[o.h,o.k],null,null),(l()(),o.Fb(29,0,["",""]))],null,function(l,n){l(n,9,0,n.context.$implicit.id),l(n,14,0,n.context.$implicit.enunciado1),l(n,19,0,n.context.$implicit.enunciado2),l(n,24,0,n.context.$implicit.opcoes),l(n,29,0,n.context.$implicit.gabaritoObjetivo)})}function h(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.S,r.l)),o.ob(1,49152,null,0,t.A,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.nb,r.G)),o.ob(3,49152,null,0,t.Ab,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.K,r.d)),o.ob(5,49152,null,0,t.k,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.bb,r.v)),o.ob(7,49152,null,0,t.Q,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.lb,r.E)),o.ob(9,49152,null,0,t.yb,[o.h,o.k],null,null),(l()(),o.Fb(-1,0,["Quest\xf5es"])),(l()(),o.pb(11,0,null,null,11,"ion-content",[["padding",""]],null,null,null,r.P,r.i)),o.ob(12,49152,null,0,t.t,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,7,"ion-fab",[["edge","true"],["horizontal","end"],["slot","fixed"],["vertical","top"]],null,null,null,r.R,r.j)),o.ob(14,49152,null,0,t.v,[o.h,o.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"],edge:[2,"edge"]},null),(l()(),o.pb(15,0,null,0,5,"ion-fab-button",[["routerLink","/admin/questao"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.zb(l,17).onClick()&&i),"click"===n&&(i=!1!==o.zb(l,18).onClick(u)&&i),i},r.Q,r.k)),o.ob(16,49152,null,0,t.w,[o.h,o.k],null,null),o.ob(17,16384,null,0,a.n,[a.m,a.a,[8,null],o.D,o.k],{routerLink:[0,"routerLink"]},null),o.ob(18,737280,null,0,t.Kb,[p.g,t.Fb,o.k,a.m,[2,a.n]],null,null),(l()(),o.pb(19,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,r.T,r.m)),o.ob(20,49152,null,0,t.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.gb(16777216,null,0,1,null,s)),o.ob(22,278528,null,0,p.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,14,0,"end","top","true"),l(n,17,0,"/admin/questao"),l(n,18,0),l(n,20,0,"add"),l(n,22,0,u.exercicios)},null)}function d(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,1,"app-questoes",[],null,null,null,h,k)),o.ob(1,49152,null,0,b,[i.a,t.Fb],null,null)],null,null)}var x=o.lb("app-questoes",b,d,{},{},[]),f=u("gIcY");u.d(n,"QuestoesPageModuleNgFactory",function(){return m});var m=o.mb(e,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[c.a,x]],[3,o.j],o.x]),o.xb(4608,p.k,p.j,[o.u,[2,p.r]]),o.xb(4608,f.k,f.k,[]),o.xb(4608,t.a,t.a,[o.z,o.g]),o.xb(4608,t.Eb,t.Eb,[t.a,o.j,o.q,p.c]),o.xb(4608,t.Ib,t.Ib,[t.a,o.j,o.q,p.c]),o.xb(1073742336,p.b,p.b,[]),o.xb(1073742336,f.i,f.i,[]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,t.Cb,t.Cb,[]),o.xb(1073742336,a.o,a.o,[[2,a.u],[2,a.m]]),o.xb(1073742336,e,e,[]),o.xb(1024,a.k,function(){return[[{path:"",component:b}]]},[])])})}}]);