(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{824:function(t,e,n){"use strict";n.r(e);n(276);var r=n(839),a=n.n(r),i=(n(103),n(96)),s=n.n(i),o=n(6),u=n.n(o),c=n(1),p=n.n(c),l=n(102),h=n(844),f=n.n(h),b=n(845),d=n(846),m=n(183),y=n(59);function v(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function s(t,e){try{var n=i[t](e),s=n.value}catch(t){return void a(t)}n.done?r(s):Promise.resolve(s).then(o,u)}function o(t){s("next",t)}function u(t){s("throw",t)}o()})}}g=v(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(m.a)(e.replace(/https:\/\/github.com\/(\w+)\/(\w+)(\/.*)?/,"https://api.github.com/repos/$1/$2/issues")));case 1:case"end":return t.stop()}},t,this)})),w=v(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(m.a)(e.replace(/https:\/\/github.com\/(\w+)(\/.*)?/,"https://api.github.com/users/$1")));case 1:case"end":return t.stop()}},t,this)}));var w,g,k=function(t){var e=t.owner,n=t.repo;return y.a.getRepoInfo({owner:e,repo:n})},x=n(855),_=n.n(x);function E(t){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var i=t.apply(e,n);function s(t,e){try{var n=i[t](e),s=n.value}catch(t){return void a(t)}n.done?r(s):Promise.resolve(s).then(o,u)}function o(t){s("next",t)}function u(t){s("throw",t)}o()})}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t){return(j=Object.getPrototypeOf||function(t){return t.__proto__})(t)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var C=function(t){function e(t){var n,r,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(a=j(e).call(this,t))||"object"!==E(a)&&"function"!==typeof a?R(r):a).state={loading:!1,list:[],user:void 0},n.onRefresh=n.onRefresh.bind(R(R(n))),n.subscribe=n.subscribe.bind(R(R(n))),n.unsubscribe=n.unsubscribe.bind(R(R(n))),n}var n,r,i,o,c,l;return n=e,(r=[{key:"componentDidMount",value:function(){this.onRefresh()}},{key:"componentWillUnmount",value:function(){this.setState({loading:!1,list:[]})}},{key:"onRefresh",value:(l=S(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.loading){t.next=2;break}return t.abrupt("return");case 2:return this.setState({loading:!0,list:[]}),t.next=5,k({owner:this.props.match.params.owner,repo:this.props.match.params.repo});case 5:if(e=t.sent,n=e.data,!0===this.state.loading){t.next=9;break}return t.abrupt("return");case 9:this.setState({loading:!1,list:n&&n.list,user:n&&n.user});case 10:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})},{key:"updateIssue",value:function(t){}},{key:"subscribe",value:(c=S(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.loading){t.next=2;break}return t.abrupt("return");case 2:return this.setState({loading:!0}),t.next=5,this.props.dispatch({type:"app/subscribe",payload:{owner:this.props.match.params.owner,repo:this.props.match.params.repo}});case 5:if(!0===this.state.loading){t.next=7;break}return t.abrupt("return");case 7:this.setState({loading:!1});case 8:case"end":return t.stop()}},t,this)})),function(){return c.apply(this,arguments)})},{key:"unsubscribe",value:(o=S(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.loading){t.next=2;break}return t.abrupt("return");case 2:return this.setState({loading:!0}),t.next=5,this.props.dispatch({type:"app/unsubscribe",payload:{owner:this.props.match.params.owner,repo:this.props.match.params.repo}});case 5:if(!0===this.state.loading){t.next=7;break}return t.abrupt("return");case 7:this.setState({loading:!1});case 8:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"isSubscribed",value:function(){if(!this.props.repos)return!1;var t=this.props.match.params;return-1!==this.props.repos.findIndex(function(e){return e.owner===t.owner&&e.repo===t.repo})}},{key:"render",value:function(){var t=this.state,e=t.user,n=t.list,r=this.isSubscribed();return p.a.createElement(p.a.Fragment,null,p.a.createElement(f.a,{logo:e&&p.a.createElement("img",{alt:"",src:e.avatarUrl}),title:"".concat(this.props.match.params.owner,"/").concat(this.props.match.params.repo),content:e&&p.a.createElement("div",null,p.a.createElement("div",null,e.name),p.a.createElement("div",null,e.bio)),action:p.a.createElement("div",{className:_.a.title},!r&&p.a.createElement(s.a,{disabled:this.state.loading,type:"primary",onClick:this.subscribe},"\u8ba2\u9605"),r&&p.a.createElement(s.a,{disabled:this.state.loading,type:"danger",onClick:this.unsubscribe},"\u9000\u8ba2"),p.a.createElement(s.a,{disabled:this.state.loading,onClick:this.onRefresh},"\u5237\u65b0")),breadcrumbList:[{title:null}]}),p.a.createElement(b.a,null,p.a.createElement(a.a,{bordered:!1},p.a.createElement(d.a,{list:n,loading:this.state.loading,updateIssue:this.updateIssue}))))}}])&&P(n.prototype,r),i&&P(n,i),function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");O(t.prototype,e&&e.prototype),e&&O(t,e)}(e,t),e}(p.a.PureComponent);e.default=Object(l.connect)(function(t){return{repos:t.app.repos}})(C)},855:function(t,e,n){t.exports={italic:"index_italic__2CVuJ",ellipsis:"index_ellipsis__2-cf5",ponter:"index_ponter__1ObD3",title:"index_title__11S5W"}}}]);
//# sourceMappingURL=6.1abf4e58.chunk.js.map