(this.webpackJsonpzenbit=this.webpackJsonpzenbit||[]).push([[0],{10:function(t,e,a){t.exports={header:"Header_header__13SPX",cartIcon:"Header_cartIcon__3h0jp",cartIconHolder:"Header_cartIconHolder__k3wgv",menu:"Header_menu__UO5dh",cartLink:"Header_cartLink__1vajs",logo:"Header_logo__U-gXW"}},11:function(t,e,a){t.exports={itemImage:"Products_itemImage__S2iZL",productList:"Products_productList__1EcPI",productItem:"Products_productItem__vUrTX",addButtonHolder:"Products_addButtonHolder__1bOph"}},15:function(t,e,a){t.exports={sidebar:"Sidebar_sidebar__1qEn2",button:"Sidebar_button__2zKMn",link:"Sidebar_link__2iAgq",circle:"Sidebar_circle__2Pcgd"}},26:function(t,e,a){t.exports=a.p+"static/media/cart.dabff55d.png"},27:function(t,e,a){t.exports=a.p+"static/media/logo.6d888b3a.png"},29:function(t,e,a){t.exports=a(41)},34:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=a(1),u=(a(34),a(7)),l=a(9),d=a.n(l),s=function(t){var e=t.increaseProductCount,a=t.decreaseProductCount,n=t.deleteFromCart,c=t.clearCart,o=t.inCart,i=t.totalPrice;return r.a.createElement("div",{className:d.a.cart},o.length?o.map((function(t){return r.a.createElement("div",{key:t.id,className:d.a.productItem},r.a.createElement("img",{src:t.image,alt:"item",className:d.a.itemImage}),r.a.createElement("div",{className:d.a.infoHolder},r.a.createElement("span",null,t.name),r.a.createElement("span",null,t.price,"$"),r.a.createElement("div",{className:d.a.buttonHolder},r.a.createElement("button",{disabled:1===o.find((function(e){return e.id===t.id})).count,onClick:function(){a(t)}},"-"),t.count,r.a.createElement("button",{onClick:function(){e(t)}},"+"),r.a.createElement("button",{onClick:function(){n(t)}},"Delete"))))})):"Cart is empty",o.length?r.a.createElement("button",{onClick:function(){c()}},"Clear Cart"):null,o.length?r.a.createElement("div",null,"Total price: ",i," $"):null,o.length?r.a.createElement("button",{onClick:function(){alert(JSON.stringify(o))}},"Checkout"):null)},m={increaseProductCount:function(t){return{type:"INCREASE_PRODUCT_COUNT",product:t}},decreaseProductCount:function(t){return{type:"DECREASE_PRODUCT_COUNT",product:t}},deleteFromCart:function(t){return{type:"DELETE_PRODUCT_FROM_CART",product:t}},clearCart:function(){return{type:"CLEAR_CART"}}},p=Object(u.b)((function(t){return{inCart:t.cart.inCart,totalPrice:t.cart.totalPrice}}),m)((function(t){return r.a.createElement(s,t)})),_=a(8),C=a(26),E=a.n(C),g=a(10),b=a.n(g),f=a(27),O=a.n(f),N=Object(u.b)((function(t){return{totalCount:t.cart.totalCount}}))((function(t){var e=t.totalCount;return r.a.createElement("div",{className:b.a.header},r.a.createElement("img",{src:O.a,alt:"logo",className:b.a.logo}),r.a.createElement("li",{className:b.a.cartIconHolder},r.a.createElement(_.b,{to:"/cart",className:b.a.cartLink},r.a.createElement("img",{src:E.a,alt:"cart",className:b.a.cartIcon})),r.a.createElement("span",null,e)))})),P=a(11),h=a.n(P),v=a(17),T=(a(40),function(t){var e=t.addToCart,a=t.products;return r.a.createElement("ul",{className:h.a.productList},a.map((function(t){return r.a.createElement("li",{key:t.id,className:h.a.productItem},r.a.createElement("img",{src:t.image,alt:"product",className:h.a.itemImage}),r.a.createElement("span",null,t.name),r.a.createElement("span",null,t.price," $ "),r.a.createElement("div",{className:h.a.addButtonHolder},r.a.createElement("button",{className:h.a.buyButton,onClick:function(){e(t),Object(v.c)("".concat(t.name," was added"),{className:"toast",position:"bottom-right",autoClose:500,hideProgressBar:!0,closeOnClick:!1,pauseOnHover:!0,draggable:!0,progress:0,transition:v.a})}},"Add to cart"),r.a.createElement(v.b,{position:"top-right",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!1,limit:1})))})))}),k={addToCart:function(t){return{type:"ADD_PRODUCT_TO_CART",product:t}}},I=Object(u.b)((function(t){return{products:t.products.products}}),k)((function(t){return r.a.createElement(T,t)})),R=a(15),j=a.n(R),D=function(){return r.a.createElement("ul",{className:j.a.sidebar},r.a.createElement("li",null,r.a.createElement(_.b,{to:"/products",className:j.a.button},r.a.createElement("div",{className:j.a.circle}),r.a.createElement("span",{className:j.a.link},"Products"))))},H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapperMenu"},r.a.createElement(N,null)),r.a.createElement("div",{className:"wrapperContent"},r.a.createElement(D,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:I,exact:!0}),r.a.createElement(i.a,{path:"/cart",component:p}),r.a.createElement(i.a,{path:"/products",component:I}))))},U=a(13),S=a(28),A=a(5),y={inCart:[],totalPrice:0,totalCount:0},L={products:[{id:1,name:"Siemens S65",price:370,image:"https://sidex.ru/images_offers/634/634918/siemens_s65_2.jpg"},{id:2,name:"Nokia N91",price:1e3,image:"https://icons.iconarchive.com/icons/mastermattie/nokia-n/256/N91-icon.png"},{id:3,name:"Nokia N82",price:480,image:"https://wp-seven.ru/wp-content/uploads/2013/07/Nokia-N82.png"},{id:4,name:"Nokia N97",price:610,image:"https://i1.foxtrot.com.ua/product/MediumImages/5717847_0.jpg"},{id:5,name:"LG Optimus G",price:200,image:"https://otziv-otziv.ru/assets/cache/images/product/7/64/otzyvy-lg-optimus-g-600x600-87f.jpg"},{id:6,name:"Xiaomi Mi 5",price:330,image:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/13/goods_img_big-v1/20181113170433_91075.jpg"}]},w=Object(U.b)({cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_PRODUCT_TO_CART":return Object(A.a)({},t,{inCart:t.inCart.some((function(t){return t.id===e.product.id}))?t.inCart.map((function(t){return t.id===e.product.id?Object(A.a)({},t,{count:t.count+1}):t})):[].concat(Object(S.a)(t.inCart),[Object(A.a)({},e.product,{count:1})]),totalPrice:t.totalPrice+e.product.price,totalCount:t.totalCount+1});case"INCREASE_PRODUCT_COUNT":return Object(A.a)({},t,{inCart:t.inCart.map((function(t){return t.id===e.product.id?Object(A.a)({},t,{count:t.count+1}):t})),totalPrice:t.totalPrice+e.product.price,totalCount:t.totalCount+1});case"DECREASE_PRODUCT_COUNT":return Object(A.a)({},t,{inCart:t.inCart.map((function(t){return t.id===e.product.id?Object(A.a)({},t,{count:t.count-1}):t})),totalPrice:t.totalPrice-e.product.price,totalCount:t.totalCount-1});case"DELETE_PRODUCT_FROM_CART":return Object(A.a)({},t,{inCart:t.inCart.filter((function(t){return t.id!==e.product.id})),totalPrice:t.totalPrice-e.product.price*e.product.count,totalCount:t.totalCount-e.product.count});case"CLEAR_CART":return Object(A.a)({},t,{inCart:[],totalPrice:0,totalCount:0});default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;return e.type,t}}),x=Object(U.c)(w,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(u.a,{store:x},r.a.createElement(_.a,null,r.a.createElement(H,null))),document.getElementById("root"))},9:function(t,e,a){t.exports={productItem:"Cart_productItem__aGUQ7",itemImage:"Cart_itemImage__1-3qC",cart:"Cart_cart__2mIqR",infoHolder:"Cart_infoHolder__1BoEk",buttonHolder:"Cart_buttonHolder__2KKoU"}}},[[29,1,2]]]);
//# sourceMappingURL=main.776da179.chunk.js.map