webpackJsonp([1],{"4RqZ":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=a("zL8q"),s=a.n(i),r=(a("tvR6"),a("Dd8w")),o=a.n(r),c=a("NYxO"),l={name:"itemInput",props:{prefix:String,addNewItem:Function},data:function(){return{form:{id:"",title:"",price:null},rules:{id:[{required:!0,message:"ID不能为空",trigger:"blur"},{type:"number",length:17,message:"长度为1到17个数字！",trigger:"blur"}],title:[{required:!0,message:"名称不能为空",trigger:"blur"},{type:"string",length:20,message:"长度不能超过20个字符！",trigger:"blur"}],price:[{required:!0,message:"价格不能为空",trigger:"blur"},{type:"number",length:10,message:"长度为1到10个数字！",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e,a){if(e){var n={id:t.prefix+t.form.id,title:t.form.title,price:t.form.price};t.addNewItem({type:"addNewItem",item:n}),t.form={id:"",title:"",price:null}}else alert(a+"校验失败")})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"form",staticClass:"demo-form-inline",attrs:{model:e.form,inline:!0,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{staticStyle:{width:"178px"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",e._n(t))},expression:"form.id"}},[a("template",{slot:"prefix"},[e._v(e._s(e.prefix))])],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"title"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",e._n(t))},expression:"form.price"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("添加")])],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(l,u,!1,null,null,null).exports,d={name:"ItemList",data:function(){return{}},props:{requestData:Function,tableData:Array},methods:{getdata:function(){this.requestData()}}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-button",{attrs:{id:"databutton",type:"primary"},on:{click:this.getdata}},[this._v("获取数据")]),this._v(" "),t("el-table",{attrs:{data:this.tableData}},[t("el-table-column",{attrs:{prop:"id",label:"ID"}}),this._v(" "),t("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),this._v(" "),t("el-table-column",{attrs:{prop:"price",label:"价格"}})],1)],1)},staticRenderFns:[]};var h=a("VU/8")(d,p,!1,function(e){a("r1gy")},"data-v-5befa1d0",null).exports,f={name:"clothes",data:function(){return{activeNames:["1","2"]}},components:{ItemInput:m,ItemList:h},methods:o()({},Object(c.d)("clothes",["addExistItem","addNewItem"]),Object(c.b)("clothes",["requestClothes"])),computed:o()({},Object(c.e)("clothes",{existItems:"existItems"}))},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-collapse",{attrs:{accordion:!1},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"添加商品",name:"1"}},[a("ItemInput",{attrs:{prefix:"cl",addNewItem:this.addNewItem}})],1),e._v(" "),a("el-collapse-item",{attrs:{title:"已有商品",name:"2"}},[a("ItemList",{attrs:{tableData:this.existItems,requestData:this.requestClothes}})],1)],1)],1)},staticRenderFns:[]},g=a("VU/8")(f,v,!1,null,null,null).exports,b={name:"fruit",data:function(){return{activeNames:["1","2"]}},components:{ItemInput:m,ItemList:h},methods:o()({},Object(c.d)("fruit",["addExistItem","addNewItem"]),Object(c.b)("fruit",["requestFruit"])),computed:o()({},Object(c.e)("fruit",{existItems:"existItems"}))},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-collapse",{attrs:{accordion:!1},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"添加商品",name:"1"}},[a("ItemInput",{attrs:{prefix:"fr",addNewItem:this.addNewItem}})],1),e._v(" "),a("el-collapse-item",{attrs:{title:"已有商品",name:"2"}},[a("ItemList",{attrs:{tableData:this.existItems,requestData:this.requestFruit}})],1)],1)],1)},staticRenderFns:[]},I=a("VU/8")(b,x,!1,null,null,null).exports,_={name:"movie",data:function(){return{activeNames:["1","2"]}},components:{ItemInput:m,ItemList:h},methods:o()({},Object(c.d)("movie",["addExistItem","addNewItem"]),Object(c.b)("movie",["requestMovies"])),computed:o()({},Object(c.e)("movie",{existItems:"existItems"}))},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-collapse",{attrs:{accordion:!1},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"添加商品",name:"1"}},[a("ItemInput",{attrs:{prefix:"mov",addNewItem:e.addNewItem}})],1),e._v(" "),a("el-collapse-item",{attrs:{title:"已有商品",name:"2"}},[a("ItemList",{attrs:{tableData:e.existItems,requestData:e.requestMovies}})],1)],1)],1)},staticRenderFns:[]},y=a("VU/8")(_,w,!1,null,null,null).exports,N={name:"confirm",computed:o()({},Object(c.e)({newMovies:function(e){return e.movie.newItems},newClothes:function(e){return e.clothes.newItems},newFruit:function(e){return e.fruit.newItems}})),methods:o()({},Object(c.b)("clothes",["addNewClothes"]),Object(c.b)("movie",["addNewMovie"]),Object(c.b)("fruit",["addNewFruit"]))},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("新增电影")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.addNewMovie}},[e._v("确认添加/修改")])],1),e._v(" "),a("el-table",{attrs:{data:e.newMovies}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("新增服饰")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.addNewClothes}},[e._v("确认添加/修改")])],1),e._v(" "),a("el-table",{attrs:{data:e.newClothes}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("新增水果")]),e._v(" "),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.addNewFruit}},[e._v("确认添加/修改")])],1),e._v(" "),a("el-table",{attrs:{data:e.newFruit}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"价格"}})],1)],1)],1)},staticRenderFns:[]},q=a("VU/8")(N,S,!1,null,null,null).exports,j=[{title:"电影",path:"/movie",name:"movie",key:"0"},{title:"水果",path:"/fruit",name:"fruit",key:"1"},{title:"服饰",path:"/clothes",name:"clothes",key:"2"},{title:"本次新增",path:"/confirm",name:"confirm",key:"3"}],C={name:"navbar",methods:{handleSelect:function(e,t){this.$router.push(t[1]?{name:""+t[1]}:{path:"/"})}},computed:o()({},Object(c.e)({activeIndex:"xActiveIndex"}),Object(c.c)(["addedAmount"]))},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.activeIndex,"text-color":"#000000","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"main"}},[a("span",[e._v("主页")])]),e._v(" "),a("el-submenu",{attrs:{index:"edit"}},[a("template",{slot:"title"},[e._v("管理界面")]),e._v(" "),a("el-menu-item",{attrs:{index:"movie"}},[a("span",[e._v("电影")])]),e._v(" "),a("el-menu-item",{attrs:{index:"fruit"}},[a("span",[e._v("水果")])]),e._v(" "),a("el-menu-item",{attrs:{index:"clothes"}},[a("span",[e._v("服饰")])]),e._v(" "),a("el-menu-item",{attrs:{index:"confirm"}},[a("el-badge",{staticClass:"item",attrs:{id:"badge",value:this.addedAmount,max:999}},[e._v("本次新增")])],1)],2)],1)],1)},staticRenderFns:[]};var O={name:"App",components:{Nav:a("VU/8")(C,E,!1,function(e){a("4RqZ")},"data-v-275d550a",null).exports}},k={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",[this._v("后台管理系统")]),this._v(" "),t("el-container",[t("el-aside",{staticClass:"menu",attrs:{width:"200px"}},[t("Nav")],1),this._v(" "),t("el-main",[t("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var $=a("VU/8")(O,k,!1,function(e){a("fvfT")},null,null).exports,F=a("/ocq"),A=a("mvHQ"),L=a.n(A),M={name:"MainPage",data:function(){return{userName:"",userPassword:"",hasLogged:!1}},methods:o()({login:function(){var e=this;fetch("http://localhost:3000/login",{body:L()({username:this.userName,password:this.userPassword}),cache:"no-cache",headers:{"content-type":"application/json"},method:"post",mode:"cors",referrer:"no-referrer",redirect:"follow"}).then(function(e){return e.json()}).then(function(t){sessionStorage.setItem("currentUser",t),e.changeLogginStatu(!0),e.log(e.logginStatu)}).catch(function(e){return console.log(e)})},logout:function(){sessionStorage.removeItem("currentUser"),this.changeLogginStatu(!1),this.log(this.logginStatu)}},Object(c.d)(["changeLogginStatu"]),{log:function(e){this.hasLogged=e}}),computed:o()({},Object(c.e)(["logginStatu"])),mounted:function(){this.log(this.logginStatu)}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainpage"},[e.hasLogged?a("div",{staticClass:"logged"},[e._v("\n    欢迎使用\n    "),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.logout}},[e._v("登出")])],1):a("div",{staticClass:"login"},[a("span",{staticClass:"head"},[e._v("登陆")]),e._v(" "),a("form",[a("label",{staticClass:"lab"},[e._v("用户名：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"admin"},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),e._v(" "),a("br"),e._v(" "),a("label",{staticClass:"lab"},[e._v("密码：")]),e._v(" "),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"password",placeholder:"admin"},model:{value:e.userPassword,callback:function(t){e.userPassword=t},expression:"userPassword"}}),e._v(" "),a("div",{staticClass:"denglu"},[a("el-button",{staticClass:"leftmar",attrs:{size:"medium",type:"primary"},on:{click:e.login}},[e._v("登陆")])],1)],1)])])},staticRenderFns:[]};var R=a("VU/8")(M,D,!1,function(e){a("xM3Y")},"data-v-4b1ec564",null).exports,U={name:"Tabs",methods:{currentindex:function(e){this.$store.commit({type:"changeindex",item:e}),this.$router.push(e)},remove:function(e){var t=this.activeMenu.findIndex(function(t){return t.name==e});1==this.activeMenu.length?(this.$store.commit({type:"changeindex",item:"main"}),this.$router.push({name:"main"})):this.$store.commit({type:"changeindex",item:0==t?this.activeMenu[t+1].name:this.activeMenu[t-1].name}),this.$store.commit({type:"openpage",behavior:"remove",item:e})}},computed:o()({},Object(c.e)({activeIndex:"xActiveIndex",activeMenu:function(e){var t=e.openedPage,a=[];for(var n in t)a.push(j.find(function(e){return e.name==t[n]}));return a}}))},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-tabs",{attrs:{value:this.activeIndex,type:"card",closable:""},on:{input:this.currentindex,"tab-remove":this.remove}},this._l(this.activeMenu,function(e){return t("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}})})),this._v(" "),t("router-view")],1)},staticRenderFns:[]},V=a("VU/8")(U,P,!1,null,null,null).exports,z=function(e){return e.map(function(e){var t=[];for(var a in e)t.push(e[a]);return t})},T={namespaced:!0,state:{existItems:[],newItems:[],requestStatu:null},mutations:{addExistItem:function(e,t){var a=t.item;e.existItems=[],e.existItems=a},addNewItem:function(e,t){var a=e.newItems,n=t.item;a.every(function(e){return e.id!=n.id&&e.title!=n.title})?e.newItems.push(n):alert("已添加")},removeNewItems:function(e,t){e.newItems=[]},changeStatu:function(e,t){e.requestStatu=t.statu}},actions:{requestMovies:function(e,t){var a=e.commit;a({type:"changeStatu",statu:"onRequest"}),fetch("http://localhost:3000/api/get/movie").then(function(e){return e.json()}).then(function(e){a({type:"addExistItem",item:e}),a({type:"changeStatu",statu:"success"})}).catch(function(e){a({type:"changeStatu",statu:e})})},addNewMovie:function(e){var t=e.commit,a=e.state;t({type:"changeStatu",statu:"onAdding"});var n=z(a.newItems);fetch("http://localhost:3000/api/add/movie",{body:L()(n),cache:"no-cache",headers:{"content-type":"application/json"},method:"post",mode:"cors",referrer:"no-referrer",redirect:"follow"}).then(function(e){t({type:"changeStatu",statu:"success"}),t("removeNewItems"),console.log("成功")}).catch(function(e){return console.log(e)})}}},H={namespaced:!0,state:{existItems:[],newItems:[],requestStatu:null},mutations:{addExistItem:function(e,t){var a=t.item;e.existItems=[],e.existItems=a},addNewItem:function(e,t){var a=e.newItems,n=t.item;a.every(function(e){return e.id!=n.id&&e.title!=n.title})?e.newItems.push(n):alert("已添加")},removeNewItems:function(e,t){e.newItems=[]},changeStatu:function(e,t){e.requestStatu=t.statu}},actions:{requestFruit:function(e,t){var a=e.commit;a({type:"changeStatu",statu:"onRequest"}),fetch("http://localhost:3000/api/get/fruit").then(function(e){return e.json()}).then(function(e){a({type:"addExistItem",item:e}),a({type:"changeStatu",statu:"success"})}).catch(function(e){a({type:"changeStatu",statu:e})})},addNewFruit:function(e){var t=e.commit,a=e.state;t({type:"changeStatu",statu:"onAdding"});var n=z(a.newItems);fetch("http://localhost:3000/api/add/fruit",{body:L()(n),cache:"no-cache",headers:{"content-type":"application/json"},method:"post",mode:"cors",referrer:"no-referrer",redirect:"follow"}).then(function(e){t({type:"changeStatu",statu:"success"}),t("removeNewItems"),console.log("成功")}).catch(function(e){return console.log(e)})}}},Y={namespaced:!0,state:{existItems:[],newItems:[],requestStatu:null},mutations:{addExistItem:function(e,t){var a=t.item;e.existItems=[],e.existItems=a},addNewItem:function(e,t){var a=e.newItems,n=t.item;a.every(function(e){return e.id!=n.id&&e.title!=n.title})?e.newItems.push(n):alert("已添加")},removeNewItems:function(e){e.newItems=[]},changeStatu:function(e,t){e.requestStatu=t.statu}},actions:{requestClothes:function(e,t){var a=e.commit;a({type:"changeStatu",statu:"onRequest"}),fetch("http://localhost:3000/api/get/clothes").then(function(e){return e.json()}).then(function(e){a({type:"addExistItem",item:e}),a({type:"changeStatu",statu:"success"})}).catch(function(e){a({type:"changeStatu",statu:e})})},addNewClothes:function(e){var t=e.commit,a=e.state;t({type:"changeStatu",statu:"onAdding"});var n=z(a.newItems);fetch("http://localhost:3000/api/add/clothes",{body:L()(n),cache:"no-cache",headers:{"content-type":"application/json"},method:"post",mode:"cors",referrer:"no-referrer",redirect:"follow"}).then(function(e){t({type:"changeStatu",statu:"success"}),t("removeNewItems"),console.log("成功")}).catch(function(e){return console.log(e)})}}};n.default.use(c.a);var Z=new c.a.Store({state:{openedPage:[],xActiveIndex:"main",logginStatu:!1},mutations:{openpage:function(e,t){var a=t.behavior,n=t.item,i=e.openedPage;"add"==a?-1==i.indexOf(n)&&i.push(n):"remove"==a&&-1!==i.indexOf(n)&&(e.openedPage=i.filter(function(e){return e!==n}))},changeindex:function(e,t){e.xActiveIndex=t.item},changeLogginStatu:function(e,t){e.logginStatu=t}},getters:{addedAmount:function(e){return e.movie.newItems.length+e.fruit.newItems.length+e.clothes.newItems.length}},modules:{movie:T,fruit:H,clothes:Y}});n.default.use(F.a);var J=new F.a({routes:[{path:"/",name:"main",component:R},{path:"/edit",component:V,children:[{path:"movie",name:"movie",component:y,meta:{requiresAuth:!0},beforeEnter:function(e,t,a){Z.commit({type:"openpage",behavior:"add",item:e.name}),Z.commit({type:"changeindex",item:e.name}),a()}},{path:"fruit",name:"fruit",component:I,meta:{requiresAuth:!0},beforeEnter:function(e,t,a){Z.commit({type:"openpage",behavior:"add",item:e.name}),Z.commit({type:"changeindex",item:e.name}),a()}},{path:"clothes",name:"clothes",component:g,meta:{requiresAuth:!0},beforeEnter:function(e,t,a){Z.commit({type:"openpage",behavior:"add",item:e.name}),Z.commit({type:"changeindex",item:e.name}),a()}},{path:"confirm",name:"confirm",component:q,meta:{requiresAuth:!0},beforeEnter:function(e,t,a){Z.commit({type:"openpage",behavior:"add",item:e.name}),Z.commit({type:"changeindex",item:e.name}),a()}}]},{path:"*",name:"nothing",component:{template:"<div>Nothing here</div>"}}]});J.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?sessionStorage.currentUser?(Z.commit("changeLogginStatu",!0),a()):(Z.commit("changeLogginStatu",!1),alert("请登陆"),a({path:"/"})):sessionStorage.currentUser?(Z.commit("changeLogginStatu",!0),a()):a()});var Q=J;n.default.use(s.a,{size:"small"}),n.default.config.productionTip=!1,new n.default({el:"#app",store:Z,router:Q,components:{App:$},template:"<App/>"})},fvfT:function(e,t){},r1gy:function(e,t){},tvR6:function(e,t){},xM3Y:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.809ee47b0c59020af287.js.map