(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(48)},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=n(5),l=n(50),s=n(52),u=n(51),m=n(49),d=(n(33),Object(i.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}})(function(e){var t=e.items,n=(e.numItems,e.total,t.reduce(function(e,t){return e+t.count},0)),a=t.reduce(function(e,t){return e+t.total},0);return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(m.a,{to:"/"},r.a.createElement("div",{className:"logo text-dark",href:"#"},"RollerStore")),r.a.createElement(m.a,{to:"/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),n," \u0448\u0442. (\u20bd ",a,")")))})),E=n(6),f=n(7),p=n(13),h=n(10),v=n(14),g=(n(35),function(e){var t=e.scooter,n=e.onAddedToCart,a=t.title,c=t.specifications,o=t.wheeldiameter,i=t.weight,l=t.price,s=t.coverImage;return r.a.createElement("div",{className:"scooter-list-item"},r.a.createElement("div",{className:"scooter-cover"},r.a.createElement("img",{src:s,alt:"cover"})),r.a.createElement("div",{className:"scooter-details"},r.a.createElement("span",{href:"#",className:"scooter-title"},a),r.a.createElement("div",{className:"scooter-author"},c),r.a.createElement("div",{className:"scooter-author"},o),r.a.createElement("div",{className:"scooter-author"},i),r.a.createElement("div",{className:"scooter-price"},l," \u0440\u0443\u0431."),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")))}),O=(n(37),function(){return r.a.createElement("div",null,"loading...")}),b=r.a.createContext(),C=b.Provider,T=b.Consumer,y=function(){return function(e){return function(t){return r.a.createElement(T,null,function(n){return r.a.createElement(e,Object.assign({},t,{datastoreService:n}))})}}},_=function(e){return{type:"SCOOTER_ADDED_TO_CART",payload:e}},A=function(e,t){return function(){t({type:"FETCH_DATA_REQUESTED"}),e.getData().then(function(e){return t(function(e){return{type:"FETCH_DATA_LOADED",payload:e}}(e))}).catch(function(e){return t({type:"FETCH_DATA_ERROR",payload:e})})}},D=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},R=(n(39),n(41),function(){return r.a.createElement("div",null,"Error!")}),N=function(e){var t=e.scooters,n=e.onAddedToCart;return r.a.createElement("ul",{className:"scooter-list row"},t.map(function(e){return r.a.createElement("li",{key:e.id,className:"col-sm-12 col-md-6 col-lg-6"},r.a.createElement(g,{scooter:e,onAddedToCart:function(){return n(e.id)}}))}))},j=function(e){function t(){return Object(E.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchApidata()}},{key:"render",value:function(){var e=this.props,t=e.scooters,n=e.loading,a=e.error,c=e.onAddedToCart;return a?r.a.createElement(R,null):n?r.a.createElement(O,null):r.a.createElement(N,{scooters:t,onAddedToCart:c})}}]),t}(a.Component),w=D(y(),Object(i.b)(function(e){var t=e.scooterList;return{scooters:t.scooters,loading:t.loading,error:t.error}},function(e,t){var n=t.datastoreService;return{fetchApidata:A(n,e),onAddedToCart:function(t){return e(_(t))}}}))(j),I=(n(43),{onIncrease:_,onDecrease:function(e){return{type:"SCOOTER_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_SCOOTERS_REMOVED_FROM_CART",payload:e}}}),S=Object(i.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},I)(function(e){var t=e.items,n=(e.total,e.onIncrease),a=e.onDecrease,c=e.onDelete,o=t.reduce(function(e,t){return e+t.total},0);return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",{className:"cart-table-headline"},"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0422\u043e\u0432\u0430\u0440"),r.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),r.a.createElement("th",null,"\u0426\u0435\u043d\u0430"),r.a.createElement("th",null,"\u0410\u043a\u0446\u0438\u044f"))),r.a.createElement("tbody",null,t.map(function(e,t){var o=e.id,i=e.title,l=e.count,s=e.total;return r.a.createElement("tr",{key:o},r.a.createElement("td",null,t+1),r.a.createElement("td",null,i),r.a.createElement("td",null,l),r.a.createElement("td",null,s,"\u0440\u0443\u0431."),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(o)},className:"btn btn-outline-danger btn-sm float-right"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return n(o)},className:"btn btn-outline-success btn-sm float-right"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return a(o)},className:"btn btn-outline-warning btn-sm float-right"},r.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),r.a.createElement("div",{className:"total"},"\u0412\u0441\u0435\u0433\u043e: ",o," \u20bd"))}),L=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(S,null))},k=function(){return r.a.createElement("div",null,"Cart Page")},F=(n(45),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(d,{numItems:1,total:1e4}),r.a.createElement(s.a,null,r.a.createElement(u.a,{path:"/",component:L,exact:!0}),r.a.createElement(u.a,{path:"/cart",component:k})))}),x=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(R,null):this.props.children}}]),t}(a.Component),M=function(){function e(){Object(E.a)(this,e),this.data=[{id:1,title:"\u0421\u0430\u043c\u043e\u043a\u0430\u0442 HELLO WOOD XL-1",specifications:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u0435\u0441: \u043f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d",wheeldiameter:"\u0434\u0438\u0430\u043c\u0435\u0442\u0440 \u043a\u043e\u043b\u0435\u0441 230 \u043c\u043c",weight:"4.8 \u043a\u0433",price:3910,coverImage:"https://avatars.mds.yandex.net/get-mpic/195452/img_id4391503519493651975/9hq"},{id:2,title:"\u0421\u0430\u043c\u043e\u043a\u0430\u0442 SHULZ 200 Pro",specifications:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u0435\u0441: \u043f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d",wheeldiameter:"\u0434\u0438\u0430\u043c\u0435\u0442\u0440 \u043a\u043e\u043b\u0435\u0441 200 \u043c\u043c",weight:"6.1 \u043a\u0433",price:7820,coverImage:"https://avatars.mds.yandex.net/get-mpic/364668/img_id7139315448179193599.jpeg/9hq"},{id:3,title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0430\u043c\u043e\u043a\u0430\u0442 KUGOO S3",specifications:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u0435\u0441: \u0440\u0435\u0437\u0438\u043d\u0430",wheeldiameter:"\u0434\u0438\u0430\u043c\u0435\u0442\u0440 \u043a\u043e\u043b\u0435\u0441 200 \u043c\u043c",weight:"12 \u043a\u0433",price:11500,coverImage:"https://avatars.mds.yandex.net/get-mpic/1362400/img_id2265701916596758660.jpeg/9hq"},{id:4,title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0430\u043c\u043e\u043a\u0430\u0442 KUGOO Light",specifications:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043a\u043e\u043b\u0435\u0441: \u043f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d",wheeldiameter:"\u0434\u0438\u0430\u043c\u0435\u0442\u0440 \u043a\u043e\u043b\u0435\u0441 200 \u043c\u043c",weight:"11 \u043a\u0433",price:13e3,coverImage:"https://avatars.mds.yandex.net/get-mpic/1525355/img_id7012046833082785579.jpeg/9hq"}]}return Object(f.a)(e,[{key:"getData",value:function(){var e=this;return new Promise(function(t){setTimeout(function(){t(e.data)},700)})}}]),e}(),H=n(9),U=function(e,t){if(void 0===e)return{scooters:[],loading:!0,error:null};switch(t.type){case"FETCH_DATA_REQUESTED":return{scooters:[],loading:!0,error:null};case"FETCH_DATA_ERROR":return{scooters:[],loading:!0,error:t.payload};case"FETCH_DATA_LOADED":return{scooters:t.payload,loading:!1,error:null};default:return e.scooterList}},q=n(8),P=function(e,t,n){return 0===t.count?[].concat(Object(q.a)(e.slice(0,n)),Object(q.a)(e.slice(n+1))):-1===n?[].concat(Object(q.a)(e),[t]):[].concat(Object(q.a)(e.slice(0,n)),[t],Object(q.a)(e.slice(n+1)))},V=function(e,t,n){var a=e.scooterList.scooters,r=e.shoppingCart.cartItems,c=a.find(function(e){return e.id===t}),o=r.findIndex(function(e){return e.id===t}),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,c=t.count,o=void 0===c?0:c,i=t.title,l=void 0===i?e.title:i,s=t.total;return{id:r,title:l,count:o+n,total:(void 0===s?0:s)+n*e.price}}(c,r[o],n);return{cartItems:P(r,i,o)}},G=function(e,t){if(void 0===e)return{cartItems:[]};switch(t.type){case"SCOOTER_ADDED_TO_CART":return V(e,t.payload,1);case"SCOOTER_REMOVED_FROM_CART":return V(e,t.payload,-1);case"ALL_SCOOTERS_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find(function(e){return e.id===t.payload});return V(e,t.payload,-n.count);default:return e.shoppingCart}},J=function(e,t){return{scooterList:U(e,t),shoppingCart:G(e,t)}},K=Object(H.b)(J),Q=new M;o.a.render(r.a.createElement(i.a,{store:K},r.a.createElement(x,null,r.a.createElement(C,{value:Q},r.a.createElement(l.a,null,r.a.createElement(F,null))))),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.fff878dc.chunk.js.map