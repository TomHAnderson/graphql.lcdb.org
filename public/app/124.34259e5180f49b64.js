"use strict";(self.webpackChunklcdb=self.webpackChunklcdb||[]).push([[124],{1124:function(Lt,C,u){u.r(C),u.d(C,{GuestLayoutModule:function(){return yt}});var h=u(3144),m=u(5671),g=u(2619),d=u(9808),l=u(2382),L=u(520),x=u(2340),t=u(8003),A=function(){var e=function(){function r(n){(0,m.Z)(this,r),this.http=n}return(0,h.Z)(r,[{key:"query",value:function(a){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.http.post(x.N.graphQLServer+"/graphql",{query:a,variables:o,operationName:i},{headers:new L.WM({accept:"application/json","content-type":"application/json"})})}}]),r}();return e.\u0275fac=function(n){return new(n||e)(t.LFG(L.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),b=u(9841),Q=function(r){return{year:r}};function S(e,r){if(1&e&&(t.TgZ(0,"a",18),t._uU(1,"Sources"),t.qZA()),2&e){var n=t.oxw(2);t.MGl("routerLink","/sources/",n.graphQL.data.artist.id,""),t.Q6J("queryParams",t.VKq(2,Q,n.year))}}function P(e,r){if(1&e){var n=t.EpF();t.TgZ(0,"a",20),t.NdJ("click",function(){t.CHM(n);var i=t.oxw(3);return i.showSets=!i.showSets}),t._uU(1),t.qZA()}if(2&e){var a=r.$implicit;t.xp6(1),t.hij("",a.node.artistGroup.title," Artist Group")}}function U(e,r){if(1&e&&(t.ynx(0),t.YNc(1,P,2,1,"a",19),t.BQk()),2&e){var n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.graphQL.data.artist.artistToArtistGroups.edges)}}var O=function(r){return{"year-link-active":r}};function J(e,r){if(1&e&&(t.TgZ(0,"a",21),t._uU(1),t.qZA()),2&e){var n=r.$implicit,a=t.oxw(2);t.MGl("routerLink","/artist/",a.graphQL.data.artist.id,""),t.Q6J("ngClass",t.VKq(4,O,n===a.year))("queryParams",t.VKq(6,Q,n)),t.xp6(1),t.Oqu(1939===n?"unknown":n)}}function M(e,r){if(1&e&&(t.TgZ(0,"a",24),t._uU(1),t.qZA()),2&e){var n=r.$implicit;t.MGl("routerLink","/source/",n.node.id,""),t.Q6J("title",n.node.comments),t.xp6(1),t.hij(" ",n.node.id," ")}}function I(e,r){if(1&e&&(t.TgZ(0,"tr")(1,"td",25)(2,"div",26)(3,"div",2)(4,"div",27)(5,"b"),t._uU(6,"Set 1"),t.qZA(),t._UZ(7,"br"),t._uU(8),t.qZA(),t.TgZ(9,"div",27)(10,"b"),t._uU(11,"Set 2"),t.qZA(),t._UZ(12,"br"),t._uU(13),t.qZA(),t.TgZ(14,"div",27)(15,"b"),t._uU(16,"Set 3"),t.qZA(),t._UZ(17,"br"),t._uU(18),t.qZA(),t.TgZ(19,"div",27)(20,"b"),t._uU(21,"Comment"),t.qZA(),t._UZ(22,"br"),t._uU(23),t.qZA()()()()()),2&e){var n=t.oxw().$implicit;t.xp6(8),t.hij(" ",n.node.set1," "),t.xp6(5),t.hij(" ",n.node.set2," "),t.xp6(5),t.hij(" ",n.node.set3," "),t.xp6(5),t.hij(" ",n.node.comment," ")}}function N(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"tr")(2,"td")(3,"a",22),t._uU(4),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t.YNc(12,M,2,3,"a",23),t.qZA()(),t.YNc(13,I,24,4,"tr",9),t.BQk()),2&e){var n=r.$implicit,a=t.oxw(2);t.xp6(3),t.MGl("routerLink","/performance/",n.node.id,""),t.xp6(1),t.hij(" ",a.formatPerformanceDate(n.node.date,n.node.year)," "),t.xp6(2),t.Oqu(n.node.venue),t.xp6(2),t.Oqu(n.node.city),t.xp6(2),t.Oqu(n.node.state),t.xp6(2),t.Q6J("ngForOf",n.node.sources.edges),t.xp6(1),t.Q6J("ngIf",a.showSets)}}function F(e,r){if(1&e){var n=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"p",7),t._uU(3),t._UZ(4,"br"),t.YNc(5,S,2,4,"a",8),t.YNc(6,U,2,1,"ng-container",9),t.TgZ(7,"a",10),t.NdJ("click",function(){t.CHM(n);var i=t.oxw();return i.showSets=!i.showSets}),t._uU(8,"Show Sets"),t.qZA()(),t.TgZ(9,"p",11),t.YNc(10,J,2,8,"a",12),t.qZA()(),t.TgZ(11,"div",13)(12,"div",13)(13,"div",14)(14,"table",15)(15,"thead",16)(16,"th"),t._uU(17," Date "),t.qZA(),t.TgZ(18,"th"),t._uU(19," Venue "),t.qZA(),t.TgZ(20,"th"),t._uU(21," City "),t.qZA(),t.TgZ(22,"th"),t._uU(23," State "),t.qZA(),t.TgZ(24,"th"),t._uU(25," Sources "),t.qZA()(),t.TgZ(26,"tbody"),t.YNc(27,N,14,7,"ng-container",17),t.qZA()()()()()()}if(2&e){var a=t.oxw();t.xp6(3),t.hij(" Performances for ",a.graphQL.data.artist.name," "),t.xp6(2),t.Q6J("ngIf",a.graphQL.data.sourceCount),t.xp6(1),t.Q6J("ngIf",a.graphQL.data.artist.artistToArtistGroups.edges),t.xp6(4),t.Q6J("ngForOf",a.graphQL.data.years),t.xp6(17),t.Q6J("ngForOf",a.graphQL.data.artist.performances.edges)}}var w=function(){var e=function(){function r(n,a,o){var i=this;(0,m.Z)(this,r),this.route=n,this.guestGraphQLService=a,this.router=o,this.query='\n    query Artist($id: Int!, $year: Int = 2022) {\n      years: artistYears(id: $id)\n\n      sourceCount(id: $id)\n\n      artist (id: $id) {\n        id\n        name\n        artistToArtistGroups {\n          edges {\n            node {\n              artistGroup {\n                title\n              }\n            }\n          }\n        }\n        performances (filter: {year: $year date_sort: "ASC"}) {\n          edges {\n            node {\n              id\n              date\n              year\n              venue\n              city\n              state\n              set1\n              set2\n              set3\n              comment\n              sources {\n                edges {\n                  node {\n                    id\n                    comments\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ',this.latestYearQuery="\n    query Artist($id: Int!) {\n      artistLatestYear(id: $id)\n    }\n  ",this.artistId=0,this.graphQL=null,this.years=[],this.showSets=!1,(0,b.a)(this.route.params,this.route.queryParams,function(s,c){return Object.assign(Object.assign({},s),c)}).subscribe(function(s){s.year?i.guestGraphQLService.query(i.query,{id:Number(s.id),year:Number(s.year)}).subscribe(function(c){i.graphQL=c,i.year=Number(s.year)}):i.guestGraphQLService.query(i.latestYearQuery,{id:Number(s.id)}).subscribe(function(c){i.router.navigate(["/artist/"+s.id],{queryParams:{year:c.data.artistLatestYear}})})})}return(0,h.Z)(r,[{key:"formatPerformanceDate",value:function(a,o){return o+"-"+a.slice(0,2)+"-"+a.slice(3,5)}},{key:"ngOnInit",value:function(){}}]),r}();return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz),t.Y36(A),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-artist"]],decls:5,vars:1,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header","card-header-warning"],[1,"card-title","h3"],["class","btn btn-success btn-sm",3,"routerLink","queryParams",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-info","btn-sm",3,"click"],[1,"card-category"],["class","year-link",3,"ngClass","routerLink","queryParams",4,"ngFor","ngForOf"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped"],[1,"text-primary"],[4,"ngFor","ngForOf"],[1,"btn","btn-success","btn-sm",3,"routerLink","queryParams"],["class","btn btn-success btn-sm",3,"click",4,"ngFor","ngForOf"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"year-link",3,"ngClass","routerLink","queryParams"],[3,"routerLink"],["class","source-link",3,"title","routerLink",4,"ngFor","ngForOf"],[1,"source-link",3,"title","routerLink"],["colspan","5"],[1,"container"],[1,"col-md-3"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,F,28,5,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",a.graphQL))},directives:[d.O5,g.yS,d.sg,d.mk],styles:[".year-link[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n\n.year-link-active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.source-link[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}"]}),e}(),q=function(r){return{"alphabet-active":r}},T=function(){return["/artists"]},G=function(r){return{chr:r}};function Y(e,r){if(1&e&&(t.TgZ(0,"a",15),t._uU(1),t.qZA()),2&e){var n=r.index,a=t.oxw();t.Q6J("ngClass",t.VKq(4,q,a.chr===a.getAlphabetLetter(n,!1)))("routerLink",t.DdM(6,T))("queryParams",t.VKq(7,G,a.getAlphabetLetter(n,!1))),t.xp6(1),t.hij(" ",a.getAlphabetLetter(n,!0)," ")}}var Z=function(r,n){return{chr:r,page:n}};function $(e,r){if(1&e&&(t.TgZ(0,"a",16),t._uU(1," < PREV "),t.qZA()),2&e){var n=t.oxw(2);t.Q6J("queryParams",t.WLB(1,Z,n.chr,n.page-1))}}var j=function(r){return{"pagination-link-active":r}};function D(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"a",22),t._uU(2),t.qZA(),t.BQk()),2&e){var n=r.$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("queryParams",t.WLB(3,Z,a.chr,n))("ngClass",t.VKq(6,j,n===a.page)),t.xp6(1),t.hij(" ",n," ")}}function V(e,r){if(1&e&&(t.TgZ(0,"a",16),t._uU(1," NEXT > "),t.qZA()),2&e){var n=t.oxw(2);t.Q6J("queryParams",t.WLB(1,Z,n.chr,n.page+1))}}var H=function(r){return{chr:r,page:1}};function B(e,r){if(1&e){var n=t.EpF();t.TgZ(0,"p",8)(1,"a",16),t._uU(2," |< FIRST "),t.qZA(),t.YNc(3,$,2,4,"a",17),t.YNc(4,D,3,8,"ng-container",18),t.YNc(5,V,2,4,"a",17),t.TgZ(6,"a",16),t._uU(7," LAST |> "),t.qZA(),t._uU(8," Jump to page "),t.TgZ(9,"input",19),t.NdJ("change",function(){return t.CHM(n),t.oxw().jumpToPage()})("ngModelChange",function(i){return t.CHM(n),t.oxw().pageJump=i}),t.qZA(),t._uU(10),t._UZ(11,"br"),t.TgZ(12,"span",20)(13,"a",21),t._uU(14),t.qZA(),t._uU(15," to "),t.TgZ(16,"a",21),t._uU(17),t.qZA()()()}if(2&e){var a=t.oxw();t.xp6(1),t.Q6J("queryParams",t.VKq(12,H,a.chr)),t.xp6(2),t.Q6J("ngIf",a.graphQLArtists.data.artists.pageInfo.hasPreviousPage),t.xp6(1),t.Q6J("ngForOf",a.pages),t.xp6(1),t.Q6J("ngIf",a.graphQLArtists.data.artists.pageInfo.hasNextPage),t.xp6(1),t.Q6J("queryParams",t.WLB(14,Z,a.chr,a.maxPage)),t.xp6(3),t.s9C("max",a.maxPage),t.Q6J("ngModel",a.pageJump),t.xp6(1),t.hij(" of ",a.maxPage," "),t.xp6(3),t.MGl("routerLink","/artist/",a.graphQLArtists.data.artists.edges[0].node.id,""),t.xp6(1),t.hij(" ",a.graphQLArtists.data.artists.edges[0].node.name," "),t.xp6(2),t.MGl("routerLink","/artist/",a.graphQLArtists.data.artists.edges[a.graphQLArtists.data.artists.edges.length-1].node.id,""),t.xp6(1),t.hij(" ",a.graphQLArtists.data.artists.edges[a.graphQLArtists.data.artists.edges.length-1].node.name," ")}}function K(e,r){1&e&&(t.TgZ(0,"div",23)(1,"div",24)(2,"div",2)(3,"div",3),t._uU(4," No results found "),t.qZA()()()())}function z(e,r){if(1&e&&(t.TgZ(0,"a",27),t._uU(1),t.qZA()),2&e){var n=r.$implicit;t.MGl("routerLink","/artist/",n.node.id,""),t.xp6(1),t.hij("",n.node.name," ")}}function E(e,r){if(1&e&&(t.TgZ(0,"a",27),t._uU(1),t.qZA()),2&e){var n=r.$implicit;t.MGl("routerLink","/artist/",n.node.id,""),t.xp6(1),t.hij("",n.node.name," ")}}function W(e,r){if(1&e&&(t.TgZ(0,"a",27),t._uU(1),t.qZA()),2&e){var n=r.$implicit;t.MGl("routerLink","/artist/",n.node.id,""),t.xp6(1),t.hij("",n.node.name," ")}}function X(e,r){if(1&e&&(t.TgZ(0,"div",23)(1,"div",24)(2,"div",2)(3,"div",25),t.YNc(4,z,2,2,"a",26),t.qZA(),t.TgZ(5,"div",25),t.YNc(6,E,2,2,"a",26),t.qZA(),t.TgZ(7,"div",25),t.YNc(8,W,2,2,"a",26),t.qZA()()()()),2&e){var n=t.oxw();t.xp6(4),t.Q6J("ngForOf",n.column(1)),t.xp6(2),t.Q6J("ngForOf",n.column(2)),t.xp6(2),t.Q6J("ngForOf",n.column(3))}}var R=function(){return{chr:"top100"}},tt=function(){return[]},nt=function(){return{chr:"other"}},et=function(){var e=function(){function r(n,a,o){var i=this;(0,m.Z)(this,r),this.activatedRoute=n,this.guestGraphQLService=a,this.router=o,this.query='\n    query ArtistList($chr: String = "a", $after: String = "LTE=") {\n      artists (filter: { name_sort: "ASC", name_startswith: $chr, _after: $after }) {\n        totalCount\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  ',this.top100query='\n    {\n      artists (filter: { name_sort: "ASC", top100: true }) {\n        totalCount\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n    ',this.otherQuery='\n    query ArtistList($after: String = "LTE=") {\n      artists (filter: { name_sort: "ASC", _after: $after }) {\n        totalCount\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  ',this.filterQuery='\n    query ArtistList($filter: String = "a", $after: String = "LTE=") {\n      artists (filter: { name_sort: "ASC", name_contains: $filter, _after: $after }) {\n        totalCount\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n        }\n        edges {\n          cursor\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  ',this.chr="top100",this.page=1,this.pages=[],this.maxPage=1,this.pageJump=1,this.filterString="",this.activatedRoute.queryParamMap.subscribe(function(p){i.graphQLArtists=null,p.get("chr")&&(i.chr=p.get("chr")),i.page=p.get("page")?Number(p.get("page")):1,p.get("filterString")?(i.chr="filter",i.filterString=p.get("filterString")):i.filterString="",i.pageJump=i.page;var s={},c="";switch(i.chr){case"filter":s.filter=i.filterString,s.after=btoa(String(300*(i.page-1)-1)),c=i.filterQuery;break;case"top100":c=i.top100query;break;case"other":s._artists_other=!0,s.after=btoa(String(300*(i.page-1)-1)),c=i.otherQuery;break;default:s.chr=i.chr,s.after=btoa(String(300*(i.page-1)-1)),c=i.query}i.guestGraphQLService.query(c,s).subscribe(function(y){i.graphQLArtists=y,i.pages=[];for(var v=i.page;v>=i.page-2;v--)v&&v>0&&i.pages.push(v);for(var _=i.page+1;_<=i.page+4;_++)300*Math.ceil(y.data.artists.totalCount/300)-300*_>=0&&!i.pages.includes(_)&&i.pages.length<5&&i.pages.push(_);for(var f=i.page;f>5&&(300*Math.ceil(y.data.artists.totalCount/300)-300*f>=0&&f>=1&&!i.pages.includes(f)&&i.pages.length<5&&i.pages.push(f),5!==i.pages.length);f--);i.maxPage=Math.ceil(y.data.artists.totalCount/300),i.pages.sort(function(Tt,Ct){return Tt-Ct})})})}return(0,h.Z)(r,[{key:"ngOnInit",value:function(){}},{key:"jumpToPage",value:function(){this.pageJump>this.maxPage&&(this.pageJump=this.maxPage),this.pageJump<1&&(this.pageJump=1),this.router.navigate(["/artists"],{queryParams:{chr:this.chr,page:this.pageJump,filterString:this.filterString}})}},{key:"filter",value:function(){this.router.navigate(["/artists"],{queryParams:{chr:"filter",filterString:this.filterString}})}},{key:"column",value:function(a){var i=Math.ceil(this.graphQLArtists.data.artists.edges.length/3);switch(a){case 1:return this.graphQLArtists.data.artists.edges.slice(0,i);case 2:return this.graphQLArtists.data.artists.edges.slice(i,2*i);case 3:return this.graphQLArtists.data.artists.edges.slice(2*i)}}},{key:"getAlphabetLetter",value:function(a){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o?65:97;return String.fromCharCode(a+i)}}]),r}();return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz),t.Y36(A),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-artists"]],decls:22,vars:20,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-warning"],[1,"card-title"],[1,"h3"],[1,"card-category"],[1,"alphabet",3,"routerLink","queryParams","ngClass"],["class","alphabet",3,"ngClass","routerLink","queryParams",4,"ngFor","ngForOf"],[1,"alphabet-link"],["type","text",2,"width","15em",3,"ngModel","change","ngModelChange"],["class","card-category",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"alphabet",3,"ngClass","routerLink","queryParams"],["routerLink","/artists",1,"pagination-link",3,"queryParams"],["routerLink","/artists","class","pagination-link",3,"queryParams",4,"ngIf"],[4,"ngFor","ngForOf"],["type","number","min","1",2,"width","3em",3,"max","ngModel","change","ngModelChange"],[1,"pagination-link"],[3,"routerLink"],["routerLink","/artists",1,"pagination-link",3,"queryParams","ngClass"],[1,"card-body"],[1,"container"],[1,"col-md-4"],["style","display: block",3,"routerLink",4,"ngFor","ngForOf"],[2,"display","block",3,"routerLink"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"p",6)(7,"span",7),t._uU(8,"Artists"),t.qZA()(),t.TgZ(9,"p",8)(10,"a",9),t._uU(11," top 100 "),t.qZA(),t.YNc(12,Y,2,9,"a",10),t.TgZ(13,"a",9),t._uU(14," other "),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"span",11),t._uU(17," Filter "),t.TgZ(18,"input",12),t.NdJ("change",function(){return a.filter()})("ngModelChange",function(i){return a.filterString=i}),t.qZA()()(),t.YNc(19,B,18,17,"p",13),t.qZA(),t.YNc(20,K,5,0,"div",14),t.YNc(21,X,9,3,"div",14),t.qZA()()()()()),2&n&&(t.xp6(10),t.Q6J("routerLink",t.DdM(11,T))("queryParams",t.DdM(12,R))("ngClass",t.VKq(13,q,"top100"===a.chr)),t.xp6(2),t.Q6J("ngForOf",t.DdM(15,tt).constructor(26)),t.xp6(1),t.Q6J("routerLink",t.DdM(16,T))("queryParams",t.DdM(17,nt))("ngClass",t.VKq(18,q,"other"===a.chr)),t.xp6(5),t.Q6J("ngModel",a.filterString),t.xp6(1),t.Q6J("ngIf",a.graphQLArtists&&(a.graphQLArtists.data.artists.pageInfo.hasNextPage||a.graphQLArtists.data.artists.pageInfo.hasPreviousPage)),t.xp6(1),t.Q6J("ngIf",a.graphQLArtists&&!a.graphQLArtists.data.artists.totalCount),t.xp6(1),t.Q6J("ngIf",a.graphQLArtists&&a.graphQLArtists.data.artists.totalCount))},directives:[g.yS,d.mk,d.sg,l.Fj,l.JJ,l.On,d.O5,l.qQ,l.Fd,l.wV],styles:[".alphabet[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n\n.alphabet-active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.pagination-link[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n\n.pagination-link-active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}"]}),e}();function it(e,r){if(1&e){var n=t.EpF();t.TgZ(0,"a",18),t.NdJ("click",function(){t.CHM(n);var i=t.oxw(3);return i.showSets=!i.showSets}),t._uU(1),t.qZA()}if(2&e){var a=r.$implicit;t.xp6(1),t.hij("",a.node.artistGroup.title," Artist Group")}}function st(e,r){if(1&e&&(t.ynx(0),t.YNc(1,it,2,1,"a",17),t.BQk()),2&e){var n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.graphQL.data.artist.artistToArtistGroups.edges)}}var ot=function(r){return{"year-link-active":r}},k=function(r){return{year:r}};function ut(e,r){if(1&e&&(t.TgZ(0,"a",19),t._uU(1),t.qZA()),2&e){var n=r.$implicit,a=t.oxw(2);t.MGl("routerLink","/sources/",a.graphQL.data.artist.id,""),t.Q6J("ngClass",t.VKq(4,ot,n===a.year))("queryParams",t.VKq(6,k,n)),t.xp6(1),t.Oqu(1939===n?"unknown":n)}}function ct(e,r){if(1&e&&(t.TgZ(0,"a",23),t._uU(1),t.qZA()),2&e){var n=t.oxw().$implicit;t.MGl("href","https://archive.org/details/",n.node.archiveIdentifier,"",t.LSH),t.xp6(1),t.hij(" ",n.node.archiveIdentifier," ")}}function pt(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"tr")(2,"td")(3,"a",20),t._uU(4),t.qZA()(),t.TgZ(5,"td")(6,"a",20),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t.YNc(15,ct,2,2,"a",21),t.qZA()(),t.TgZ(16,"tr"),t._UZ(17,"td",22),t.qZA(),t.BQk()),2&e){var n=r.$implicit,a=t.oxw(2);t.xp6(3),t.MGl("routerLink","/source/",n.node.id,""),t.xp6(1),t.hij(" ",n.node.id," "),t.xp6(2),t.MGl("routerLink","/performance/",n.node.performance.id,""),t.xp6(1),t.hij(" ",a.formatPerformanceDate(n.node.performance.date,n.node.performance.year)," "),t.xp6(2),t.Oqu(n.node.performance.venue),t.xp6(2),t.Oqu(n.node.performance.city),t.xp6(2),t.Oqu(n.node.performance.state),t.xp6(2),t.Q6J("ngIf",n.node.archiveIdentifier),t.xp6(2),t.Q6J("innerHTML",n.node.comments,t.oJD)}}function gt(e,r){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6)(2,"p",7),t._uU(3),t._UZ(4,"br"),t.TgZ(5,"a",8),t._uU(6,"Performances"),t.qZA(),t.YNc(7,st,2,1,"ng-container",9),t.qZA(),t.TgZ(8,"p",10),t.YNc(9,ut,2,8,"a",11),t.qZA()(),t.TgZ(10,"div",12)(11,"div",12)(12,"div",13)(13,"table",14)(14,"thead",15)(15,"th"),t._uU(16," SHNID "),t.qZA(),t.TgZ(17,"th"),t._uU(18," Date "),t.qZA(),t.TgZ(19,"th"),t._uU(20," Venue "),t.qZA(),t.TgZ(21,"th"),t._uU(22," City "),t.qZA(),t.TgZ(23,"th"),t._uU(24," State "),t.qZA(),t.TgZ(25,"th"),t._uU(26," Archive Identifier "),t.qZA()(),t.TgZ(27,"tbody"),t.YNc(28,pt,18,9,"ng-container",16),t.qZA()()()()()()),2&e){var n=t.oxw();t.xp6(3),t.hij(" Sources for ",n.graphQL.data.artist.name," "),t.xp6(2),t.MGl("routerLink","/artist/",n.graphQL.data.artist.id,""),t.Q6J("queryParams",t.VKq(6,k,n.year)),t.xp6(2),t.Q6J("ngIf",n.graphQL.data.artist.artistToArtistGroups.edges),t.xp6(2),t.Q6J("ngForOf",n.graphQL.data.years),t.xp6(19),t.Q6J("ngForOf",n.graphQL.data.sources.edges)}}var lt=[{path:"",redirectTo:"home",pathMatch:"full"},{component:function(){var e=function(){function r(){(0,m.Z)(this,r)}return(0,h.Z)(r,[{key:"ngOnInit",value:function(){}}]),r}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:17,vars:0,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-warning"],[1,"card-title"],[1,"card-body"],["href","https://etreedb.org"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),t._uU(7," Welcome to the Live Concert Database [LCDB]. "),t.qZA()(),t.TgZ(8,"div",7)(9,"p"),t._uU(10," This website will replace "),t.TgZ(11,"a",8),t._uU(12,"etreedb.org"),t.qZA(),t._uU(13," in time. While this process is taking place this website will use the exact same database as "),t.TgZ(14,"a",8),t._uU(15,"etreedb.org"),t.qZA(),t._uU(16," so all changes on each site will be reflected in each other. "),t.qZA()()()()()()())},styles:[""]}),e}(),path:"home"},{component:et,path:"artists"},{component:w,path:"artist/:id"},{component:function(){var e=function(){function r(){(0,m.Z)(this,r)}return(0,h.Z)(r,[{key:"ngOnInit",value:function(){}}]),r}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-source-artists"]],decls:2,vars:0,template:function(n,a){1&n&&(t.TgZ(0,"p"),t._uU(1,"source-artists works!"),t.qZA())},styles:[""]}),e}(),path:"source-artists"},{component:function(){var e=function(){function r(n,a,o){var i=this;(0,m.Z)(this,r),this.route=n,this.guestGraphQLService=a,this.router=o,this.query="\n    query Sources($id: Int!) {\n      years: sourceYears(id: $id)\n\n      artist (id: $id) {\n        id\n        name\n        artistToArtistGroups {\n          edges {\n            node {\n              artistGroup {\n                title\n              }\n            }\n          }\n        }\n      }\n\n      sources {\n        edges {\n          node {\n            id\n            createdAt\n            updatedAt\n\n            circdate\n            shndiskcount\n            wavdiskcount\n            archiveIdentifier\n\n            comments\n            textdoc\n\n            mediaSize\n            mediaSizeUncompressed\n\n            performance {\n              id\n              date\n              year\n              venue\n              city\n              state\n              artist {\n                id\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  ",this.latestYearQuery="\n    query SourceLatestYear($id: Int!) {\n      sourceLatestYear(id: $id)\n    }\n  ",this.artistId=0,this.graphQL=null,this.years=[],this.showSets=!1,(0,b.a)(this.route.params,this.route.queryParams,function(s,c){return Object.assign(Object.assign({},s),c)}).subscribe(function(s){s.year?i.guestGraphQLService.query(i.query,{id:Number(s.id),year:Number(s.year)}).subscribe(function(c){i.graphQL=c,i.year=Number(s.year)}):i.guestGraphQLService.query(i.latestYearQuery,{id:Number(s.id)}).subscribe(function(c){i.router.navigate(["/sources/"+s.id],{queryParams:{year:c.data.sourceLatestYear}})})})}return(0,h.Z)(r,[{key:"formatPerformanceDate",value:function(a,o){return o+"-"+a.slice(0,2)+"-"+a.slice(3,5)}},{key:"ngOnInit",value:function(){}}]),r}();return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz),t.Y36(A),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sources"]],decls:5,vars:1,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header","card-header-warning"],[1,"card-title","h3"],[1,"btn","btn-success","btn-sm",3,"routerLink","queryParams"],[4,"ngIf"],[1,"card-category"],["class","year-link",3,"ngClass","routerLink","queryParams",4,"ngFor","ngForOf"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-double-striped"],[1,"text-primary"],[4,"ngFor","ngForOf"],["class","btn btn-success btn-sm",3,"click",4,"ngFor","ngForOf"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"year-link",3,"ngClass","routerLink","queryParams"],[3,"routerLink"],[3,"href",4,"ngIf"],["colspan","6",3,"innerHTML"],[3,"href"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,gt,29,8,"div",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",a.graphQL))},directives:[d.O5,g.yS,d.sg,d.mk],styles:[".year-link[_ngcontent-%COMP%] {\n  padding-right: 1em;\n}\n\n.year-link-active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.table-double-striped[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4n+1), .table-double-striped[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4n+2) {\n  background: #f9f9f9;\n}"]}),e}(),path:"sources/:id"}],ht=u(7423),mt=u(7531),ft=u(508),vt=u(7322),_t=u(9772),Zt=u(4107),yt=function(){var e=(0,h.Z)(function r(){(0,m.Z)(this,r)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,g.Bz.forChild(lt),l.u5,l.UX,ht.ot,ft.si,vt.lN,mt.c,Zt.LD,_t.AV]]}),e}()}}]);