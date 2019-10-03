(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,a){e.exports={BreadBottom:"Ingredient_BreadBottom__QV7AS",BreadTop:"Ingredient_BreadTop__IMnMu",Seeds1:"Ingredient_Seeds1__1sgaB",Seeds2:"Ingredient_Seeds2__2j7VZ",Meat:"Ingredient_Meat__3v3lZ",Cheese:"Ingredient_Cheese__1cEul",Salad:"Ingredient_Salad__XYw0h",Bacon:"Ingredient_Bacon__26VPG"}},,,,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL",DrawerToggle:"Toolbar_DrawerToggle__2bv2f"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__2qi0k",Label:"BuildControl_Label__16gz2",Less:"BuildControl_Less__2iEpQ",More:"BuildControl_More__3T0En"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__1twK-",load1:"Spinner_load1__1BXDX"}},,,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),i=(a(40),a(3)),c=a(4),s=a(6),u=a(5),d=a(7),m=function(e){return e.children},p=a(24),h=a.n(p),b=a(9),g=a.n(b),_=a(25),f=a.n(_),v=a(26),E=a.n(v),k=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:f.a,alt:"Burger-Builder"}))},w=a(11),y=a.n(w),O=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},B=a(27),S=a.n(B),C=function(){return r.a.createElement("ul",{className:S.a.NavigationItems},r.a.createElement(O,{link:"/",active:!0},"Burger Builder"),r.a.createElement(O,{link:"/"},"Checkout"))},L=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement("div",{className:g.a.DrawerToggle,onClick:e.open},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(C,null)))},N=a(8),j=a.n(N),D=a(28),I=a.n(D),M=function(e){return e.show?r.a.createElement("div",{className:I.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[j.a.SideDrawer,j.a.Close];return e.open&&(t=[j.a.SideDrawer,j.a.Open]),r.a.createElement(m,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:j.a.Logo},r.a.createElement(k,null)),r.a.createElement("nav",null,r.a.createElement(C,null))))},T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.closeSideDrawerHandler=function(){a.setState({showSideDrawer:!1})},a.openSideDrawerHandler=function(){a.setState({showSideDrawer:!0})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(L,{open:this.openSideDrawerHandler}),r.a.createElement(P,{open:this.state.showSideDrawer,closed:this.closeSideDrawerHandler}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(n.Component),x=a(29),H=a(34),A=a(30),X=a.n(A),q=a(2),R=a.n(q),F=function(e){var t=null;switch(e.type){case"bread-bottom":t=r.a.createElement("div",{className:R.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:R.a.BreadTop},r.a.createElement("div",{className:R.a.Seeds1}),r.a.createElement("div",{className:R.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:R.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:R.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:R.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:R.a.Bacon});break;default:t=null}return t},U=function(e){var t=Object.keys(e.ingredientList).map((function(t){return Object(H.a)(Array(e.ingredientList[t])).map((function(e,a){return r.a.createElement(F,{type:t,key:t+a})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add ingredients!")),r.a.createElement("div",{className:X.a.Burger},r.a.createElement(F,{type:"bread-top"}),t,r.a.createElement(F,{type:"bread-bottom"}))},V=a(12),W=a.n(V),Y=a(10),K=a.n(Y),Z=function(e){return r.a.createElement("div",{className:K.a.BuildControl},r.a.createElement("div",{className:K.a.Label},e.label),r.a.createElement("button",{className:K.a.Less,onClick:e.remove,disabled:e.disabled},"Less"),r.a.createElement("button",{className:K.a.More,onClick:e.added},"More"))},z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],J=function(e){return r.a.createElement("div",{className:W.a.BuildControls},r.a.createElement("p",null,"Total Price: ",r.a.createElement("strong",null,e.price)),z.map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){return e.addIngredient(t.type)},remove:function(){return e.removeIngredient(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:W.a.OrderButton,disabled:!e.disable,onClick:e.clicked},"ORDER NOW"))},Q=a(31),G=a.n(Q),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.clicked}),r.a.createElement("div",{className:G.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),ee=a(13),te=a.n(ee),ae=function(e){return r.a.createElement("button",{className:[te.a.Button,te.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ne=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients: "),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement(ae,{btnType:"Danger",clicked:e.cancelClicked},"CANCEL"),r.a.createElement(ae,{btnType:"Success",clicked:e.checkoutClicked},"CHECKOUT"))},re=a(32),oe=a.n(re),le=function(){return r.a.createElement("div",{className:oe.a.Loader},"Loading...")},ie=function(e,t){return function(a){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).state={error:null},e.errorCheckedHandler=function(){e.setState({error:null})},e.reqInterceptors=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),e.resInterceptors=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})})),e}return Object(d.a)(n,a),Object(c.a)(n,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptors),t.interceptors.response.eject(this.resInterceptors)}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement($,{show:this.state.error,clicked:this.errorCheckedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},ce=a(33),se=a.n(ce).a.create({baseURL:"https://react-burger-builder-bf401.firebaseio.com/"});function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me={salad:.5,bacon:1,cheese:.75,meat:2.5},pe=ie(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredientList:null,totalPrice:4,purchasable:!1,purchaseMode:!1,loading:!1,error:!1},a.purchaseModeHandler=function(){a.setState({purchaseMode:!0})},a.purchaseCancelHandler=function(){a.setState({purchaseMode:!1})},a.checkoutHandler=function(){a.setState({loading:!0});var e={customer:"Pray Vakta",customerPhNum:"4164014321",address:{stree:"123 Main st.",city:"Toronto",postalCode:"M1A2B3"},customerEmail:"prayvakta@email.com",deliveryMethod:"Pick-up",ingredients:a.state.ingredientList,price:a.state.totalPrice};se.post("/orders.json",e).then((function(e){a.setState({loading:!1,purchaseMode:!1})})).catch((function(e){a.setState({loading:!1,purchaseMode:!1})}))},a.ingredientAddedHandler=function(e){var t=a.state.ingredientList[e]+1,n=de({},a.state.ingredientList);n[e]=t;var r=me[e],o=a.state.totalPrice+r;a.setState({totalPrice:o,ingredientList:n}),a.purchasableHandler(n)},a.ingredientRemovedHandler=function(e){var t=a.state.ingredientList[e];if(!(t<1)){var n=t-1,r=de({},a.state.ingredientList);r[e]=n;var o=me[e],l=a.state.totalPrice-o;a.setState({totalPrice:l,ingredientList:r}),a.purchasableHandler(r)}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;se.get("https://react-burger-builder-bf401.firebaseio.com/ingredientList.json").then((function(t){e.setState({ingredientList:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"purchasableHandler",value:function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t})}},{key:"render",value:function(){var e=de({},this.state.ingredientList);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Could not load the ingredients!"):r.a.createElement(le,null);return this.state.ingredientList&&(n=r.a.createElement(m,null,r.a.createElement(U,{ingredientList:this.state.ingredientList}),r.a.createElement(J,{addIngredient:this.ingredientAddedHandler,removeIngredient:this.ingredientRemovedHandler,disabled:e,price:this.state.totalPrice.toFixed(2),disable:this.state.purchasable,clicked:this.purchaseModeHandler})),a=r.a.createElement(ne,{ingredients:this.state.ingredientList,price:this.state.totalPrice,cancelClicked:this.purchaseCancelHandler,checkoutClicked:this.checkoutHandler})),this.state.loading&&(a=r.a.createElement(le,null)),r.a.createElement(m,null,r.a.createElement($,{show:this.state.purchaseMode,clicked:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),se);var he=function(){return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[35,1,2]]]);
//# sourceMappingURL=main.28c9dee2.chunk.js.map