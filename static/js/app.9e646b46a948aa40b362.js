webpackJsonp([1],{"4fx/":function(t,s){},ATlX:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"main"}},[s("router-view")],1)},staticRenderFns:[]},r=e("VU/8")(null,i,!1,function(t){e("4fx/")},null,null).exports,a=e("/ocq"),c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column"},[s("div",{staticClass:"ui card one centered"},[this._m(0,!1,!1),this._v(" "),s("div",{staticClass:"extra content"},[s("div",{staticClass:"ui two buttons"},[s("router-link",{staticClass:"ui primary button",attrs:{to:"/game"}},[this._v("Play")]),this._v(" "),s("router-link",{staticClass:"ui primary button",attrs:{to:"/settings"}},[this._v("Settings")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[this._v("Who Wants To Be a Milionaire?")])])}]},o=e("VU/8")(null,c,!1,null,null,null).exports,u=e("NYxO"),l={computed:{count:function(){return this.$store.state.count}},methods:Object(u.c)(["increment","decrement"])},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column"},[e("div",{staticClass:"ui card one centered"},[e("div",{staticClass:"content"},[e("div",{staticClass:"header"},[t._v("Set number of Questions!")]),t._v(" "),e("div",{staticClass:"counter"},[t._v(t._s(t.count))])]),t._v(" "),e("div",{staticClass:"extra content"},[e("div",{staticClass:"ui two buttons"},[e("div",{staticClass:"ui primary button",on:{click:t.decrement}},[t._v("Less")]),t._v(" "),e("div",{staticClass:"ui primary button",on:{click:t.increment}},[t._v("More")])])])])])},staticRenderFns:[]},v=e("VU/8")(l,d,!1,function(t){e("lk2P")},null,null).exports,h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"ui fixed inverted menu"},[s("div",{staticClass:"ui container"},[s("router-link",{staticClass:"header item",attrs:{to:"/"}},[this._v("\n        Intro\n      ")]),this._v(" "),s("router-link",{staticClass:"header item",attrs:{to:{name:"game"}}},[this._v("\n        Game\n      ")]),this._v(" "),s("router-link",{staticClass:"header item",attrs:{to:{name:"settings"}}},[this._v("\n        Settings\n      ")])],1)]),this._v(" "),s("div",{staticClass:"ui text container grid"},[s("router-view")],1)])},staticRenderFns:[]},m=e("VU/8")(null,h,!1,null,null,null).exports,p=e("mtWM"),f=e.n(p),_={created:function(){var t=this;f()("https://yesno.wtf/api?force=no").then(function(s){return t.gif=s.data.image}).catch(function(t){return console.error(t)})},data:function(){return{gif:""}}},C={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column"},[s("div",{staticClass:"ui card one centered"},[this._m(0,!1,!1),this._v(" "),s("div",{staticClass:"image"},[s("img",{attrs:{src:this.gif}})]),this._v(" "),s("div",{staticClass:"extra content"},[s("div",{staticClass:"ui two buttons"},[s("router-link",{staticClass:"ui primary button",attrs:{to:"/game"}},[this._v("Play Again")]),this._v(" "),s("router-link",{staticClass:"ui primary button",attrs:{to:"/settings"}},[this._v("Settings")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[this._v("Wrong Answer!")])])}]},g=e("VU/8")(_,C,!1,null,null,null).exports,w=e("Dd8w"),b=e.n(w),x={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ten wide column"},[this.question?s("div",{staticClass:"ui card one centered"},[s("div",{staticClass:"content"},[s("div",{staticClass:"header",domProps:{innerHTML:this._s(this.question.question)}})]),this._v(" "),s("div",{staticClass:"extra content"},[s("div",{staticClass:"ui two buttons"},[s("div",{staticClass:"ui basic red button",on:{click:this.answer}},[this._v("\n          False\n        ")]),this._v(" "),s("div",{staticClass:"ui basic green button",on:{click:this.answer}},[this._v("\n          True\n        ")])])])]):this._e()])},staticRenderFns:[]},y=e("VU/8")({props:["question"],methods:{answer:function(t){var s=t.target.innerText;this.$emit("cardAnswer",s)}}},x,!1,function(t){e("ATlX")},"data-v-751d71e5",null).exports,$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"six wide column"},[e("div",{staticClass:"ui vertical steps"},t._l(t.length,function(s){return e("div",{staticClass:"step",class:{active:s===t.current+1,completed:s<t.current+1}},[e("i",{staticClass:"question icon"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v("\n          Question "+t._s(s)+"\n        ")]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n          Question for "+t._s(100*s)+" $\n        ")])])])}))])},staticRenderFns:[]},k=e("VU/8")({props:["length","current"]},$,!1,null,null,null).exports,q={created:function(){this.$store.dispatch("results")},data:function(){return{current:0}},computed:b()({question:function(){return this.$store.getters.question(this.current)}},Object(u.b)(["length","results","percent"])),watch:{current:function(t){t===this.length&&this.$router.push("/won")}},methods:{answer:function(t){t===this.question.correct_answer?this.current++:this.$router.push("/wrong")}},components:{Cards:y,Steps:k}},E={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"ui text container grid",staticStyle:{margin:"50px 0"}},[s("div",{staticClass:"row"},[s("progress-bar",{attrs:{percent:this.percent}})],1),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"ui mobile vertically reversed grid"},[s("Steps",{attrs:{length:this.length,current:this.current}}),this._v(" "),this.question?s("Cards",{attrs:{question:this.question},on:{cardAnswer:this.answer}}):s("div",{staticClass:"ui active inverted dimmer"},[s("div",{staticClass:"ui large text loader"},[this._v("Loading")])])],1)])])},staticRenderFns:[]},V=e("VU/8")(q,E,!1,null,null,null).exports,F={created:function(){var t=this;f()("https://yesno.wtf/api?force=yes").then(function(s){return t.gif=s.data.image}).catch(function(t){return console.error(t)})},data:function(){return{gif:""}}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"column"},[s("div",{staticClass:"ui card one centered"},[this._m(0,!1,!1),this._v(" "),s("div",{staticClass:"image"},[s("img",{attrs:{src:this.gif}})]),this._v(" "),s("div",{staticClass:"extra content"},[s("div",{staticClass:"ui two buttons"},[s("router-link",{staticClass:"ui primary button",attrs:{to:"/game"}},[this._v("Play Again")]),this._v(" "),s("router-link",{staticClass:"ui primary button",attrs:{to:"/settings"}},[this._v("Settings")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[this._v("You Won! Congratulations!")])])}]},R=e("VU/8")(F,A,!1,null,null,null).exports;n.default.use(a.a);var S=new a.a({routes:[{path:"/",name:"intro",component:o},{path:"/",name:"layout",component:m,children:[{path:"/game",name:"game",component:V},{path:"/won",name:"won",component:R},{path:"/wrong",name:"wrong",component:g},{path:"/settings",name:"settings",component:v}]}]});n.default.use(u.a);var U={results:function(t){var s=t.commit,e=t.getters;s("results",[]);var n="https://opentdb.com/api.php?amount="+e.count+"&type=boolean";f.a.get(n).then(function(t){return s("results",t.data.results)}).catch(function(t){return console.error(t)})}},P=new u.a.Store({state:{count:5,results:[]},actions:U,getters:{count:function(t){return t.count},results:function(t){return t.results},question:function(t){return function(s){return t.results[s]}},length:function(t){return t.results.length},percent:function(t,s){return s.length?t.current/s.length*100:0}},mutations:{increment:function(t){t.count++},decrement:function(t){t.count>1&&t.count--},results:function(t,s){t.results=s}}});n.default.component("progress-bar",{template:'\n  <div class="column">\n    <sui-progress v-bind:percent="percent" indicating></sui-progress>\n  </div>\n  ',props:["percent"]});var T=e("myK/"),W=e.n(T);e("kVq8");n.default.config.productionTip=!1,n.default.use(W.a),new n.default({store:P,router:S,el:"#app",template:"<App/>",components:{App:r}})},kVq8:function(t,s){},lk2P:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9e646b46a948aa40b362.js.map