"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[524],{524:function(e,a,s){s.d(a,{Z:function(){return re}});var n=s(1413),i=s(3433),r=s(9439),t=s(2791),c=s(4420),l=s(838),d=s(6351),o="Card_card__p9wzB",_="Card_thumb__O-QoT",m="Card_image__KXII6",u="Card_content__tHczi",h="Card_header__JB9vN",x="Card_title__Zw-kE",j="Card_details__KhXqG",v="Card_rating__zrX06",f="Card_ratingBar__ZxESc",N="Card_locationBar__z2m4+",p="Card_icon__lEuiy",C="Card_iconFilled__kCj9H",g="Card_iconLocation__D+PIh",k="Card_info__TwdYW",w="Card_infoItem__ahNrV",D="Card_footer__wkzrf",Z="Card_price__Tr8C5",b="Card_priceBar__BKKPl",y="Card_iconHeart__Pexp4",B="Card_iconHeartFav__2cuSH",H="Card_addButton__8gx2X",S="Card_description__L0N9-",T=s(3439);var E=s.p+"static/media/ac.8c4fa90691be77f67845b470271c8593.svg",L=s(6975),R=s(3333),F=s(184),I=function(e){var a=e.gallery,s=e.name,n=e.price,i=e.rating,r=e.location,t=e.adults,I=e.transmission,M=e.tank,V=e.reviews,z=e.description,P=e.details,A=e._id,X=e.handleShowMore,q=(0,c.v9)(d.Tc),K=(0,c.I0)(),O=q.some((function(e){return e===A}))?"".concat(y," ").concat(B):"".concat(y);return(0,F.jsxs)("li",{className:o,children:[(0,F.jsx)("div",{className:_,children:(0,F.jsx)("img",{src:a[0],alt:s,className:m,loading:"lazy"})}),(0,F.jsxs)("div",{className:u,children:[(0,F.jsxs)("div",{className:h,children:[(0,F.jsx)("h2",{className:x,children:s}),(0,F.jsxs)("div",{className:Z,children:[(0,F.jsx)("div",{className:b,children:(0,R.T4)(n)}),(0,F.jsx)(L.Z,{className:H,onClick:function(){return K((0,l.j)(A))},whileClick:{scale:.5},children:(0,F.jsx)("svg",{className:O,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-heart")})})})]})]}),(0,F.jsxs)("div",{className:j,children:[(0,F.jsxs)("div",{className:v,children:[(0,F.jsx)("svg",{className:p,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-star")})}),(0,F.jsxs)("span",{className:f,children:[i," (",V.length," Reviews)"]})]}),(0,F.jsxs)("div",{className:N,children:[(0,F.jsx)("svg",{className:p,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-location")})}),(0,F.jsx)("span",{children:r})]})]}),(0,F.jsx)("p",{className:S,children:z}),(0,F.jsxs)("div",{className:k,children:[(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("svg",{className:C,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-adults")})}),(0,F.jsxs)("span",{children:[t," adults"]})]}),(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("svg",{className:g,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-transmission")})}),(0,F.jsx)("span",{children:I})]}),(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("svg",{className:C,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-petrol")})}),(0,F.jsx)("span",{children:M})]}),(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("svg",{className:g,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-kitchen")})}),(0,F.jsx)("span",{children:P.kitchen})]}),(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("svg",{className:g,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-beds")})}),(0,F.jsxs)("span",{children:[P.beds," beds"]})]}),P.airConditioner&&(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("img",{src:E,alt:"wind icon",className:p}),(0,F.jsx)("span",{children:"AC"})]})]}),(0,F.jsx)("div",{className:D,children:(0,F.jsx)(L.Z,{label:"Show more",onClick:function(){return X(A)}})})]})]})},M=s(4164),V="Modal_modalOverlay__E0GGw",z="Modal_modalContent__2Ple8",P="Modal_button__DLGyI",A="Modal_icon__N85zq",X=(0,t.forwardRef)((function(e,a){var s=e.children,n=(0,t.useRef)(),i=(0,t.useState)(!1),c=(0,r.Z)(i,2),l=c[0],d=c[1];(0,t.useImperativeHandle)(a,(function(){return{open:function(){d(!0),document.addEventListener("keydown",o)},close:function(){d(!1),document.removeEventListener("keydown",o)}}}));var o=(0,t.useCallback)((function(e){"Escape"===e.key&&a.current.close()}),[a]);return(0,t.useEffect)((function(){return function(){document.removeEventListener("keydown",o)}}),[o]),(0,M.createPortal)((0,F.jsx)(F.Fragment,{children:l&&(0,F.jsx)("div",{ref:n,className:V,onClick:function(e){e.target===n.current&&a.current.close()},children:(0,F.jsxs)("div",{className:z,children:[(0,F.jsx)("button",{className:P,onClick:function(){a.current.close()},children:(0,F.jsx)("svg",{className:A,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-close")})})}),s]})})}),document.getElementById("modal-root"))})),q={modalContent:"DetailedCard_modalContent__4tFWe",location:"DetailedCard_location__UVQ-B",images:"DetailedCard_images__7xrxM",image:"DetailedCard_image__TVqHM",tabs:"DetailedCard_tabs__pxNqi",tab:"DetailedCard_tab__wScaC",active:"DetailedCard_active__-0yC9",feature:"DetailedCard_feature__9wqkB",vehicleDetails:"DetailedCard_vehicleDetails__Bz92d",reviews:"DetailedCard_reviews__dX65A",review:"DetailedCard_review__DTIfJ",reviewHeader:"DetailedCard_reviewHeader__VXfaN",letter:"DetailedCard_letter__+c1zw",reviewAuthor:"DetailedCard_reviewAuthor__3yKRY",reviewRating:"DetailedCard_reviewRating__69od8",header:"DetailedCard_header__PLgVP",icon:"DetailedCard_icon__u4Deo",popIcon:"DetailedCard_popIcon__sgmly",ratingBar:"DetailedCard_ratingBar__HSPen",title:"DetailedCard_title__0s15q",details:"DetailedCard_details__Wv+zh",ratingLocation:"DetailedCard_ratingLocation__XBNbV",rating:"DetailedCard_rating__PyN23",locationBar:"DetailedCard_locationBar__Li6ag",price:"DetailedCard_price__SkUrl",gallery:"DetailedCard_gallery__0xRXy",descriptionBar:"DetailedCard_descriptionBar__miNtT",description:"DetailedCard_description__p-hQD",hidden:"DetailedCard_hidden__eaxNa",buttonMore:"DetailedCard_buttonMore__4u3oM",footer:"DetailedCard_footer__Owmqa",tabContent:"DetailedCard_tabContent__UsnSA",detailsTitle:"DetailedCard_detailsTitle__E5lVy",detailsList:"DetailedCard_detailsList__JnbsE",detailTitle:"DetailedCard_detailTitle__Y11FP",detailValue:"DetailedCard_detailValue__ORuxv",featuresList:"DetailedCard_featuresList__RQ3W1",featuresItem:"DetailedCard_featuresItem__M8mYz"},K=s(4942),O=s(9988),Q=s(9513),W=s.n(Q),Y=(s(8639),{formTitle:"BookingForm_formTitle__rmybQ",bookingForm:"BookingForm_bookingForm__efeBu",slogan:"BookingForm_slogan__voZ2M",error:"BookingForm_error__zuh2T",dateBar:"BookingForm_dateBar__O-g33",icon:"BookingForm_icon__l4V3g"}),G=s(5861),J=s(7757),U=s.n(J),$=s(5294),ee=s(2564),ae=function(){var e=(0,G.Z)(U().mark((function e(a){var s,n;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$.Z.post("/bookings",{details:a});case 3:return s=e.sent,n=s.data,(0,ee.Am)("Your booking has been registered."),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),(0,ee.Am)("Error. Please, try again later."),e.abrupt("return",console.error(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}(),se=s(6393),ne=function(){var e=(0,t.useState)(se.BK),a=(0,r.Z)(e,2),s=a[0],i=a[1],c=(0,t.useState)({}),l=(0,r.Z)(c,2),d=l[0],o=l[1],_=(0,t.useState)(null),m=(0,r.Z)(_,2),u=m[0],h=m[1],x=(0,t.useState)(!1),j=(0,r.Z)(x,2),v=j[0],f=j[1],N=(0,t.useRef)(),p=function(e){var a=e.target,r=a.name,t=a.value;o((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,K.Z)({},r,""))})),i((0,n.Z)((0,n.Z)({},s),{},(0,K.Z)({},r,t)))},C=v?{x:[-5,5,-5,5,-5,5,0],transition:{duration:.4}}:{};return(0,F.jsxs)("div",{className:Y.bookingForm,children:[(0,F.jsx)("h4",{className:Y.formTitle,children:"Book your campervan now"}),(0,F.jsx)("span",{className:Y.slogan,children:"Stay connected! We are always ready to help you."}),(0,F.jsxs)("form",{className:Y.form,ref:N,children:[(0,F.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:s.name,onChange:p}),d.name&&(0,F.jsx)(O.E.span,{className:Y.error,initial:{x:0},animate:C,children:d.name}),(0,F.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:s.email,onChange:p}),d.email&&(0,F.jsx)(O.E.span,{className:Y.error,initial:{x:0},animate:C,children:d.email}),(0,F.jsxs)("div",{className:Y.dateBar,children:[(0,F.jsx)(W(),{selected:u,name:"date",onChange:function(e){h(e),o((function(e){return(0,n.Z)((0,n.Z)({},e),{},{date:""})})),i((0,n.Z)((0,n.Z)({},s),{},{date:e}))},placeholderText:"Booking date"}),(0,F.jsx)("svg",{className:Y.icon,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-calendar")})})]}),d.date&&(0,F.jsx)(O.E.span,{className:Y.error,initial:{x:0},animate:C,children:d.date}),(0,F.jsx)("textarea",{name:"comment",placeholder:"Comment",rows:"4",onChange:p,value:s.comment}),d.comment&&(0,F.jsx)(O.E.span,{className:Y.error,initial:{x:0},animate:C,children:d.comment}),(0,F.jsx)(L.Z,{label:"Send",type:"submit",location:"sidebar",onClick:function(e){e.preventDefault();var a=(0,R.t4)((0,n.Z)((0,n.Z)({},s),{},{date:u}));o(a),0===Object.keys(a).length?(ae((0,n.Z)((0,n.Z)({},s),{},{date:u})),i(se.BK),h(null)):(f(!0),setTimeout((function(){return f(!1)}),500))}})]})]})},ie=function(e){var a=e.card,s=e.isDescriptionHidden,n=e.setDecriptionState,i=(0,t.useState)("features"),c=(0,r.Z)(i,2),l=c[0],d=c[1],o=(0,R.ab)(a.details),_=(0,R.re)(a);return(0,F.jsxs)("section",{className:q.modalContent,children:[(0,F.jsxs)("header",{className:q.header,children:[(0,F.jsx)("h2",{className:q.title,children:a.name}),(0,F.jsxs)("div",{className:q.ratingLocation,children:[(0,F.jsxs)("div",{className:q.rating,onClick:function(){d("reviews")},children:[(0,F.jsx)("svg",{className:q.icon,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-star")})}),(0,F.jsxs)("span",{className:q.ratingBar,children:[a.rating," (",a.reviews.length," Reviews)"]})]}),(0,F.jsxs)("div",{className:q.locationBar,children:[(0,F.jsx)("svg",{className:q.icon,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-location")})}),(0,F.jsx)("span",{children:a.location})]})]}),(0,F.jsx)("span",{className:q.price,children:(0,R.T4)(a.price)})]}),(0,F.jsx)("div",{className:q.gallery,children:a.gallery.map((function(e,a){return(0,F.jsx)("img",{src:e,className:q.image,alt:"Slide ".concat(a)},a)}))}),(0,F.jsxs)("div",{className:q.descriptionBar,children:[(0,F.jsx)("p",{className:s?q.description:"".concat(q.description," ").concat(q.hidden),children:a.description}),(0,F.jsx)("button",{onClick:function(){n((function(e){return!e}))},className:q.buttonMore,children:s?"Read less":"Read more"})]}),(0,F.jsxs)("nav",{className:q.tabs,children:[(0,F.jsx)("button",{className:"".concat(q.tab," ").concat("features"===l?q.active:""),onClick:function(){return d("features")},children:"Features"}),(0,F.jsx)("button",{className:"".concat(q.tab," ").concat("reviews"===l?q.active:""),onClick:function(){return d("reviews")},children:"Reviews"})]}),(0,F.jsxs)("div",{className:q.footer,children:[(0,F.jsxs)("div",{className:q.tabContent,children:["features"===l&&(0,F.jsxs)("div",{className:q.features,children:[(0,F.jsx)("ul",{className:q.featuresList,children:o&&o.map((function(e){return(0,F.jsxs)("li",{className:q.featuresItem,children:[(0,F.jsx)("svg",{className:q.popIcon,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-").concat(e.iconName)})}),(0,F.jsx)("span",{className:q.featuresValue,children:e.value}),(0,F.jsx)("span",{className:q.featuresName,children:e.name})]},e.name)}))}),(0,F.jsxs)("div",{className:q.vehicleDetails,children:[(0,F.jsx)("h4",{className:q.detailsTitle,children:"Vehicle details"}),(0,F.jsx)("ul",{className:q.detailsList,children:_.map((function(e,a){return(0,F.jsxs)("li",{children:[(0,F.jsx)("span",{className:q.detailTitle,children:e.name}),(0,F.jsx)("span",{className:q.detailValue,children:e.value})]},a)}))})]})]}),"reviews"===l&&(0,F.jsx)("div",{className:q.reviews,children:a.reviews.map((function(e,a){return(0,F.jsxs)("div",{className:q.review,children:[(0,F.jsxs)("div",{className:q.reviewHeader,children:[(0,F.jsx)("span",{className:q.letter,children:e.reviewer_name[0]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("h3",{className:q.reviewAuthor,children:e.reviewer_name}),(0,F.jsx)("span",{className:q.reviewRating,children:Array.from({length:e.reviewer_rating},(function(e,a){return(0,F.jsx)("svg",{className:q.icon,children:(0,F.jsx)("use",{xlinkHref:"".concat(T.Z,"#icon-star")})},a)}))})]})]}),(0,F.jsx)("p",{className:q.comment,children:e.comment})]},a)}))})]}),(0,F.jsx)(ne,{})]})]})},re=function(e){var a=e.cards,s=(0,t.useState)(null),c=(0,r.Z)(s,2),l=c[0],d=c[1],o=(0,t.useState)(!0),_=(0,r.Z)(o,2),m=_[0],u=_[1],h=(0,t.useRef)(),x=function(e){d(e),h.current.open(),u(!1)},j=(0,i.Z)(a).find((function(e){return e._id===l}));return(0,F.jsxs)(O.E.ul,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[a.map((function(e){return(0,t.createElement)(I,(0,n.Z)((0,n.Z)({},e),{},{key:e._id,handleShowMore:x}))})),(0,F.jsx)(X,{ref:h,children:j&&(0,F.jsx)(ie,{card:j,isDescriptionHidden:m,setDecriptionState:u})})]})}}}]);
//# sourceMappingURL=524.f152e456.chunk.js.map