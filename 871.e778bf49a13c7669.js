"use strict";(self.webpackChunkfinal=self.webpackChunkfinal||[]).push([[871],{2871:(G,l,a)=>{a.r(l),a.d(l,{SortGameModule:()=>v});var s=a(6895),c=a(9427),e=a(1571),d=a(1491);function m(t,o){1&t&&e._UZ(0,"i",18)}function g(t,o){1&t&&e._UZ(0,"i",19)}const p=function(t){return["/gameDetails",t]};function f(t,o){if(1&t&&(e.TgZ(0,"div",5)(1,"div",6)(2,"div",7),e._UZ(3,"img",8),e.qZA(),e.TgZ(4,"div",9)(5,"h4",10),e._uU(6),e.qZA(),e.TgZ(7,"span",11),e._uU(8,"FREE"),e.qZA()(),e.TgZ(9,"div",12)(10,"p"),e._uU(11),e.qZA()(),e.TgZ(12,"div",13),e._UZ(13,"i",14),e.TgZ(14,"div",15)(15,"span"),e._uU(16),e.qZA(),e.YNc(17,m,1,0,"i",16),e.YNc(18,g,1,0,"i",17),e.qZA()()()()),2&t){const n=o.$implicit;e.Q6J("routerLink",e.VKq(7,p,n.id)),e.xp6(3),e.s9C("src",n.thumbnail,e.LSH),e.xp6(3),e.Oqu(n.title),e.xp6(5),e.hij("",n.short_description.slice(0,25),"..."),e.xp6(5),e.Oqu(n.genre),e.xp6(1),e.Q6J("ngIf","PC (Windows)"==n.platform),e.xp6(1),e.Q6J("ngIf","Web Browser"==n.platform)}}function u(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",20)(1,"a",21),e.NdJ("click",function(){e.CHM(n);const Z=e.oxw();return e.KtG(Z.increase())}),e._uU(2," More Games "),e._UZ(3,"i",22),e.qZA()()}}function h(t,o){1&t&&(e.TgZ(0,"div",23)(1,"div"),e._UZ(2,"i",24),e.qZA(),e.TgZ(3,"div",25),e._UZ(4,"i",26),e.qZA(),e.TgZ(5,"div"),e._UZ(6,"i",27),e.qZA(),e.TgZ(7,"div"),e._UZ(8,"i",28),e.qZA()())}let r=(()=>{class t{constructor(n,i){this._ApiService=n,this._ActivatedRoute=i,this.pagination=20,this.final=[],this.loading=!0,this.sortedGames=[]}ngOnInit(){this.getSortedGame()}getSortedGame(){let n=this._ActivatedRoute.snapshot.routeConfig?.path;console.log(n),this._ApiService.getApiSortBy(n).subscribe({next:i=>{this.sortedGames=i.slice(0,this.pagination),this.final=Array.from(i).length},complete:()=>{this.loading=!1}})}increase(){this.pagination+=20,this.getSortedGame()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.s),e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sorted-game"]],decls:5,vars:3,consts:[[1,"container","mt-5"],[1,"row","gx-4","gy-4"],["class","col-md-3",3,"routerLink",4,"ngFor","ngForOf"],["class","loadMore text-center my-5",4,"ngIf"],["class","position-fixed w-100 h-100 bg loading d-flex justify-content-center align-items-center",4,"ngIf"],[1,"col-md-3",3,"routerLink"],[1,"game"],[1,"gameImg"],["alt","",1,"w-100","rounded-1",3,"src"],[1,"gameHeader","p-2","d-flex","justify-content-between","align-items-center"],[1,"text-truncate"],[1,""],[1,"gameDetails","p-1","pb-0"],[1,"gameDetails2","p-1","d-flex","justify-content-between","align-items-center"],["_ngcontent-qwf-c7","",1,"fas","fa-plus-square"],[1,"gameDetailsIcon"],["_ngcontent-ajm-c6","","class","fab fa-windows me-1 px-2",4,"ngIf"],["_ngcontent-ndh-c6","","class","fas fa-window-maximize text-muted me-1 px-2",4,"ngIf"],["_ngcontent-ajm-c6","",1,"fab","fa-windows","me-1","px-2"],["_ngcontent-ndh-c6","",1,"fas","fa-window-maximize","text-muted","me-1","px-2"],[1,"loadMore","text-center","my-5"],[1,"loadMore",3,"click"],[1,"fas","fa-angle-right"],[1,"position-fixed","w-100","h-100","bg","loading","d-flex","justify-content-center","align-items-center"],[1,"fa-regular","fa-circle","a","me-2"],[1,"s","me-2"],[1,"bi","bi-triangle-fill"],[1,"fa-regular","fa-square-full","b","me-2"],[1,"fa-solid","fa-diamond","n","me-2"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,f,19,9,"div",2),e.qZA(),e.YNc(3,u,4,0,"div",3),e.qZA(),e.YNc(4,h,9,0,"div",4)),2&n&&(e.xp6(2),e.Q6J("ngForOf",i.sortedGames),e.xp6(1),e.Q6J("ngIf",i.pagination<i.final),e.xp6(1),e.Q6J("ngIf",i.loading))},dependencies:[s.sg,s.O5,c.rH],styles:[".game[_ngcontent-%COMP%]{background-color:#32383e;transition:all .2s;cursor:pointer}.gameHeader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;background-color:#4799eb;padding:2px 9px;border-radius:5px;font-size:12px;font-weight:700}.game[_ngcontent-%COMP%]:hover{transform:scale(1.03)}.gameDetailsIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#7c8388;color:#fff;padding:1px 9px;border-radius:5px;font-size:12px;font-weight:700}"]}),t})();const _=[{path:"",component:r},{path:"release-date",component:r},{path:"popularity",component:r},{path:"alphabetical",component:r},{path:"relevance",component:r}];let x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(_),c.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,x]}),t})()}}]);