(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CedQ:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("ZYCi"),r=u("Ip0R"),a=u("A7o+"),d=u("gIcY"),s=function(){return function(){this.Members=[]}}(),c=u("xxjL"),p=function(){function l(l,n){this.http=l,this.login=n,this.projectToCreate=new s,this.projectList=[],this.isLoadingProjects=!1}return l.prototype.ngOnInit=function(){this.getProjectList()},l.prototype.getProjectList=function(){var l=this;this.isLoadingProjects=!0;var n=this.login.getUser()._id;this.http.get("/api/projects/all/"+n).subscribe(function(n){l.projectList=n.data||[],l.isLoadingProjects=!1})},Object.defineProperty(l.prototype,"temp",{get:function(){return this.projectList},enumerable:!0,configurable:!0}),l.prototype.saveProject=function(){var l=this,n=this.login.getUser()._id;this.projectToCreate.Members.push(n),this.projectToCreate.CreatedBy=n,this.http.post("/api/projects",this.projectToCreate).subscribe(function(n){l.projectList=n.data||[],n.success&&(l.projectToCreate=new s)})},l}(),g=u("t/Na"),f=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"a",[["class","list-group-item list-group-item-action flex-column align-items-"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t},null,null)),e["\u0275did"](1,671744,null,0,i.n,[i.k,i.a,r.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,2),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","d-flex w-100 justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h5",[["class","mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,[" "," "])),(l()(),e["\u0275eld"](6,0,null,null,1,"p",[["class","mb-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](7,null,[" "," "]))],function(l,n){var u=l(n,2,0,"/projects",n.context.$implicit._id);l(n,1,0,u)},function(l,n){l(n,0,0,e["\u0275nov"](n,1).target,e["\u0275nov"](n,1).href),l(n,5,0,n.context.$implicit.Title),l(n,7,0,n.context.$implicit.Description)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"small",[["class","text-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[""," "])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,e["\u0275unv"](n,1,0,e["\u0275nov"](n,2).transform("FORMS.Required")))})}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,20,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,19,"div",[["class","container py-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,13,"div",[["aria-label","Button group with nested dropdown"],["class","btn-group float-right"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,5,"button",[["class","btn btn-outline-dark w-100"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.getProjectList()&&e),e},null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"i",[["class","fa fa-refresh mr-2"]],null,null,null,null,null)),e["\u0275did"](5,278528,null,0,r.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](6,{"fa-spin":0}),(l()(),e["\u0275ted"](7,null,[" "," "])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](9,0,null,null,6,"div",[["class","btn-group w-100"],["role","group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,0,"button",[["aria-expanded","false"],["aria-haspopup","true"],["class","btn btn-dark dropdown-toggle"],["data-toggle","dropdown"],["id","btnGroupDrop1"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,4,"div",[["aria-labelledby","btnGroupDrop1"],["class","dropdown-menu dropdown-menu-right mt-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,3,"a",[["class","dropdown-item clickable"],["data-target","#newProjectModal"],["data-toggle","modal"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"i",[["class","fa fa-plus mr-2 text-dark"]],null,null,null,null,null)),(l()(),e["\u0275ted"](14,null,[" "," "])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,2,"div",[["class","list-group"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](20,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](21,0,null,null,37,"div",[["aria-hidden","true"],["aria-labelledby","modelTitleId"],["class","modal fade"],["id","newProjectModal"],["role","dialog"],["tabindex","-1"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,36,"div",[["class","modal-dialog"],["role","document"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,35,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,25,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,24,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,23,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](27,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](28,null,["",": "])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](30,0,null,null,7,"input",[["autocomplete","false"],["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,33)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,33).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,33)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,33)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.projectToCreate.Title=u)&&t),t},null,null)),e["\u0275did"](31,278528,null,0,r.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](32,{"is-invalid":0}),e["\u0275did"](33,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275prd"](1024,null,d.e,function(l){return[l]},[d.c]),e["\u0275did"](35,671744,null,0,d.h,[[8,null],[8,null],[8,null],[6,d.e]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.f,null,[d.h]),e["\u0275did"](37,16384,null,0,d.g,[[4,d.f]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](39,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](42,null,["",": "])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](44,0,null,null,5,"textarea",[["class","form-control"],["cols","30"],["rows","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,45)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,45).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,45)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,45)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.projectToCreate.Description=u)&&t),t},null,null)),e["\u0275did"](45,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275prd"](1024,null,d.e,function(l){return[l]},[d.c]),e["\u0275did"](47,671744,null,0,d.h,[[8,null],[8,null],[8,null],[6,d.e]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.f,null,[d.h]),e["\u0275did"](49,16384,null,0,d.g,[[4,d.f]],null,null),(l()(),e["\u0275eld"](50,0,null,null,8,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](51,0,null,null,3,"button",[["class","btn btn-secondary col-md-6"],["data-dismiss","modal"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](52,0,null,null,0,"i",[["class","fa fa-ban mr-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](53,null,[" ",""])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef]),(l()(),e["\u0275eld"](55,0,null,null,3,"button",[["class","btn btn-primary col-md-6"],["data-dismiss","modal"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.saveProject()&&e),e},null,null)),(l()(),e["\u0275eld"](56,0,null,null,0,"i",[["class","fa fa-save mr-2"]],null,null,null,null,null)),(l()(),e["\u0275ted"](57,null,[" ",""])),e["\u0275pid"](131072,a.i,[a.j,e.ChangeDetectorRef])],function(l,n){var u=n.component,e=l(n,6,0,u.isLoadingProjects);l(n,5,0,"fa fa-refresh mr-2",e),l(n,20,0,u.temp);var t=l(n,32,0,!u.projectToCreate.Title);l(n,31,0,"form-control",t),l(n,35,0,u.projectToCreate.Title),l(n,39,0,!u.projectToCreate.Title),l(n,47,0,u.projectToCreate.Description)},function(l,n){var u=n.component;l(n,3,0,u.isLoadingProjects),l(n,7,0,e["\u0275unv"](n,7,0,e["\u0275nov"](n,8).transform("GENERAL.Refresh"))),l(n,14,0,e["\u0275unv"](n,14,0,e["\u0275nov"](n,15).transform("PROJECT.AddNewProject"))),l(n,28,0,e["\u0275unv"](n,28,0,e["\u0275nov"](n,29).transform("PROJECT.Name"))),l(n,30,0,e["\u0275nov"](n,37).ngClassUntouched,e["\u0275nov"](n,37).ngClassTouched,e["\u0275nov"](n,37).ngClassPristine,e["\u0275nov"](n,37).ngClassDirty,e["\u0275nov"](n,37).ngClassValid,e["\u0275nov"](n,37).ngClassInvalid,e["\u0275nov"](n,37).ngClassPending),l(n,42,0,e["\u0275unv"](n,42,0,e["\u0275nov"](n,43).transform("PROJECT.Description"))),l(n,44,0,e["\u0275nov"](n,49).ngClassUntouched,e["\u0275nov"](n,49).ngClassTouched,e["\u0275nov"](n,49).ngClassPristine,e["\u0275nov"](n,49).ngClassDirty,e["\u0275nov"](n,49).ngClassValid,e["\u0275nov"](n,49).ngClassInvalid,e["\u0275nov"](n,49).ngClassPending),l(n,53,0,e["\u0275unv"](n,53,0,e["\u0275nov"](n,54).transform("GENERAL.Close"))),l(n,55,0,!u.projectToCreate.Title),l(n,57,0,e["\u0275unv"](n,57,0,e["\u0275nov"](n,58).transform("GENERAL.Save")))})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-projects",[],null,null,null,h,f)),e["\u0275did"](1,114688,null,0,p,[g.c,c.a],null,null)],function(l,n){l(n,1,0)},null)}var b=e["\u0275ccf"]("app-projects",p,C,{},{},[]),j=u("9MYB"),R=function(){return function(){}}();u.d(n,"ProjectsModuleNgFactory",function(){return y});var y=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,d.l,d.l,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,d.k,d.k,[]),e["\u0275mpd"](1073742336,d.d,d.d,[]),e["\u0275mpd"](1073742336,i.o,i.o,[[2,i.u],[2,i.k]]),e["\u0275mpd"](1073742336,a.g,a.g,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,R,R,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,i.i,function(){return[[{path:"",component:p}]]},[])])})}}]);