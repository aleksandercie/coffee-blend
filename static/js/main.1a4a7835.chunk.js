(this["webpackJsonprestaurant-page"]=this["webpackJsonprestaurant-page"]||[]).push([[3],{110:function(e,t,a){},113:function(e,t,a){},116:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),i=a.n(r),c=a(12),o=a(38),m=a(35),s=a(4);function u(){var e=Object(s.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var d=a(5),f=a(8),p=a(27),b="coffee",E="blend",v="/coffee-blend/",h=(a(81),function(){var e=b,t=E,a=v;return l.a.createElement(d.a,{customClass:"logo"},l.a.createElement(p.a,{link:a,customClass:"logo__name"},e,l.a.createElement(f.a,{variant:"span",customClass:"logo__name--secondary"},t)))}),g=a(11),_=a(7),y=a.n(_),C=(a(82),function(e){var t=e.navigation,a=e.variant,n=e.toggleMenu,r=y()("navigation",Object(g.a)({},"navigation--".concat(a),a));return l.a.createElement("nav",null,l.a.createElement("ul",{className:r},t.map((function(e,t){var a=e.name,r=e.url;return l.a.createElement("li",{className:"navigation__item",key:t,onClick:n},l.a.createElement(m.b,{to:r,className:"navigation__link"},a))}))))}),w=(a(83),function(e){var t=e.toggleMenu,a=e.isOpen,n=y()("hamburger",{"hamburger--active":a});return l.a.createElement("button",{onClick:t,className:n,alt:"menu-icon","aria-label":"menu-icon"},l.a.createElement("span",{className:"hamburger__bar"}),l.a.createElement("span",{className:"hamburger__bar"}),l.a.createElement("span",{className:"hamburger__bar"}))}),k=(a(84),function(e){var t=e.navigation,a=e.isOpen,n=e.toggleMenu,r=y()("mobile-menu",{"mobile-menu--active":a});return l.a.createElement(d.a,{customClass:r},l.a.createElement(C,{navigation:t,variant:"mobile",toggleMenu:n}))}),O=[{name:"home",url:"/coffee-blend/"},{name:"menu",url:"/coffee-blend/menu"},{name:"services",url:"/coffee-blend/services"},{name:"about",url:"/coffee-blend/about"},{name:"contact",url:"/coffee-blend/contact"}],S="scroll--prevent",N=(a(85),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=function(){return r(!a)};return Object(n.useEffect)((function(){if("undefined"!==typeof window){var e=window.document.body;console.error=function(){},a&&e.classList.add(S),!a&&e.classList.remove(S)}}),[a]),l.a.createElement("header",{className:"header"},l.a.createElement(h,null),l.a.createElement(C,{navigation:O,variant:"desktop"}),l.a.createElement(w,{toggleMenu:i,isOpen:a}),l.a.createElement(k,{navigation:O,isOpen:a,toggleMenu:i}))}),j=a(28),T=[{name:"map",description:"203 Fake St. Mountain View, San Francisco, California, USA"},{name:"phone",description:"+2 392 3929 210"},{name:"email",description:"info@yourdomain.com"},{name:"hours",description:"Monday-Friday: 8:00am - 9:00pm"}],F=(a(91),function(){return l.a.createElement(d.a,{customClass:"details"},T.map((function(e){var t=e.name,a=e.description;return l.a.createElement(d.a,{customClass:"detail",key:t},l.a.createElement(j.a,{name:t}),l.a.createElement(f.a,{variant:"p",customClass:"detail__description",color:"grey",type:"description"},a))})))}),A=(a(92),function(e){var t=e.content,a=t.description,n=t.socials.map((function(e){var t=e.name,a=e.link;return l.a.createElement(p.a,{link:a,key:t},l.a.createElement(j.a,{name:t}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"p",customClass:"footer__description",color:"grey",type:"description"},a),l.a.createElement(d.a,{customClass:"footer__socials"},n))}),D=a(25),x=[{title:"about us",type:"about",description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",socials:[{name:"facebook",url:"https://www.facebook.com/"},{name:"instagram",url:"https://www.instagram.com/"},{name:"twitter",url:"https://twitter.com/?lang=pl"}]},{title:"have a questions?",type:"questions"},{title:"Services",type:"services",links:[{name:"Suppliers",url:"/"},{name:"Delivery",url:"/"},{name:"Food",url:"/"}]}],z=(a(94),function(){return l.a.createElement("footer",{className:"footer"},x.map((function(e){var t=e.title,a=e.type;return l.a.createElement(d.a,{customClass:"footer__container",key:t},l.a.createElement(f.a,{variant:"h3",customClass:"footer__title"},t),"questions"===a&&l.a.createElement(F,null),"services"===a&&e.links.map((function(e){return l.a.createElement(D.a,{link:e.url,name:e.name,key:e.name,customClass:"footer__button"})})),"about"===a&&l.a.createElement(A,{content:e}))})))}),B=a(64),P=a.n(B),I=a(37),V=(a(110),function(e){var t=e.banner,a=e.slider,n=t.photo,r=t.title,i=t.buttons,c=t.subtitle,o=t.description,m=y()("banner__container",{"banner__container--slider":a}),s=c&&l.a.createElement(f.a,{variant:"p",customClass:"banner__subtitle",type:"subtitle"},t.subtitle),u=o&&l.a.createElement(f.a,{variant:"p",customClass:"banner__description"},t.description),p=i&&l.a.createElement(d.a,{customClass:"banner__buttons"},t.buttons.map((function(e){var t=e.name,a=e.url,n=e.variant;return l.a.createElement(D.a,{key:t,link:a,name:t,variant:n,tabIndex:!0})})));return l.a.createElement(d.a,{customClass:"banner",arriaHidden:!0},l.a.createElement(I.a,{image:n,alt:"slide",customClass:"banner__image"}),l.a.createElement(d.a,{customClass:m},s,l.a.createElement(f.a,{variant:"h1",customClass:"banner__title"},r),u,p))}),M=(a(111),a(112),a(113),function(e){var t=e.slides;return l.a.createElement(d.a,{customClass:"slider",variant:!0},l.a.createElement(P.a,Object.assign({},{dots:!0,infinite:!0,speed:500,autoplay:!0,slidesToShow:1,slidesToScroll:1,arrows:!1},{className:"slider__container"}),t.map((function(e,t){return l.a.createElement(V,{banner:e,index:t,key:t,slider:!0})}))))}),L=a(39),H=a(21),W=(a(160),function(){return l.a.createElement(d.a,{customClass:"intro",variant:!0},l.a.createElement(H.a,{option:"fade-right"},l.a.createElement(F,null)),l.a.createElement(L.default,{btnVariant:"appointment"}))}),q=[{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/bdt0vJ8/slide-1.webp"},{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/hmVmXdV/slide-2.webp"},{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/446yZPd/slide-3.webp"}],Y=[{name:"order",title:"EASY TO ORDER",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."},{name:"delivery",title:"FASTEST DELIVERY",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."},{name:"coffee",title:"QUALITY COFFEE",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."}],Z=[{name:"coffee",title:"100",description:"Coffee Branches"},{name:"coffee",title:"85",description:"Number of Awards"},{name:"coffee",title:"10567",description:"Happy Customer"},{name:"coffee",title:"900",description:"Staff"}],J=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,72))})),R=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,184))})),U=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,185))})),G=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,71))})),$=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,182))})),K=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,39))})),Q=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,186))})),X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M,{slides:q}),l.a.createElement(W,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(J,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(G,{info:Y,colorDescription:"black",colorTitle:"black"})),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(R,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(G,{info:Z,variant:"image",colorDescription:"grey",colorTitle:"twine"})),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(U,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement($,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(K,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(Q,null)))},ee="https://i.ibb.co/bdt0vJ8/slide-1.webp",te={title:"contact us",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},ae={title:"our menu",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},ne={title:"about us",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},le={title:"services",photo:ee,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},re=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,183))})),ie=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{banner:ae}),l.a.createElement(W,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(H.a,{option:"fade-up"},l.a.createElement(re,null))))},ce=a(71),oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{banner:le}),l.a.createElement(ce.default,{info:Y,colorDescription:"black",colorTitle:"black"}))},me=a(72),se=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,71))})),ue=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,182))})),de=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,184))})),fe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{banner:ne}),l.a.createElement(me.default,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(ue,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(de,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(se,{info:Z,variant:"image",colorDescription:"grey",colorTitle:"twine"})))},pe=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,186))})),be=function(){return l.a.createElement(d.a,{className:"contact-page"},l.a.createElement(V,{banner:te}),l.a.createElement(L.default,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(pe,null)))},Ee={email:"",name:"",phone:"",date:"",time:"",guest:""},ve=(a(163),function(){var e=Object(n.useState)(Ee),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement(u,null),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a.Provider,{value:[a,r]},l.a.createElement(N,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/coffee-blend/",element:l.a.createElement(X,null)}),l.a.createElement(s.a,{path:"/coffee-blend/menu",element:l.a.createElement(ie,null)}),l.a.createElement(s.a,{path:"/coffee-blend/services",element:l.a.createElement(oe,null)}),l.a.createElement(s.a,{path:"/coffee-blend/about",element:l.a.createElement(fe,null)}),l.a.createElement(s.a,{path:"/coffee-blend/contact",element:l.a.createElement(be,null)})),l.a.createElement(z,null))))}),he=function(e){e&&e instanceof Function&&a.e(8).then(a.bind(null,181)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),r(e),i(e)}))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ve,null)),document.getElementById("root")),he()},21:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(70),i=a.n(r);a(159);t.a=function(e){var t=e.children,a=e.option;return Object(n.useEffect)((function(){i.a.init({duration:1500})}),[]),l.a.createElement("div",{"data-aos":a},t)}},25:function(e,t,a){"use strict";var n=a(11),l=a(0),r=a.n(l),i=a(7),c=a.n(i),o=a(27);a(93);t.a=function(e){var t=e.customClass,a=e.name,l=e.link,i=e.variant,m=e.onClick,s=e.id,u=e.tabIndex,d=c()("button",t,Object(n.a)({},"button--".concat(i),i));return l?r.a.createElement(o.a,{customClass:d,link:l,alt:a,tabIndex:!0},a):r.a.createElement("button",{id:s,onClick:m,className:d,tabIndex:u&&-1},a)}},27:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=e.link,n=e.customClass,r=e.alt,i=e.tabIndex;return l.a.createElement("a",{href:a,className:n,alt:r,tabIndex:i&&-1},t)}},28:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(14),i=a(22),c=a(50);t.a=function(e){var t=e.name;return l.a.createElement(l.a.Fragment,null,"map"===t&&l.a.createElement(r.a,{icon:i.e}),"phone"===t&&l.a.createElement(r.a,{icon:i.f}),"email"===t&&l.a.createElement(r.a,{icon:i.c}),"hours"===t&&l.a.createElement(r.a,{icon:i.a}),"facebook"===t&&l.a.createElement(r.a,{icon:c.a}),"twitter"===t&&l.a.createElement(r.a,{icon:c.c}),"instagram"===t&&l.a.createElement(r.a,{icon:c.b}),"delivery"===t&&l.a.createElement(r.a,{icon:i.g}),"coffee"===t&&l.a.createElement(r.a,{icon:i.b}),"order"===t&&l.a.createElement(r.a,{icon:i.d}))}},37:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.image,a=e.alt,n=e.customClass;return l.a.createElement("img",{src:t,alt:a,className:n})}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),l=a.n(n).a.createContext()},39:function(e,t,a){"use strict";a.r(t);var n=a(12),l=a(0),r=a.n(l),i=a(38),c=a(7),o=a.n(c),m=a(24),s=a(5),u=a(8),d=a(25),f=(a(116),a(67)),p=a.n(f);a(117);t.default=function(e){var t=e.btnVariant,a=Object(l.useContext)(i.a),c=Object(n.a)(a,2),f=c[0],b=c[1],E=""!==f.email,v=o()("form__container",{"form__container--hide":E}),h=o()("form__success",{"form__success--active":E}),g=new Date;return r.a.createElement(s.a,{customClass:"form",role:"form"},r.a.createElement(u.a,{variant:"h2",customClass:"form__title"},E?"WE CAN'T WAIT FOR YOU":"BOOK A TABLE"),r.a.createElement(m.b,{initialValues:{email:"",name:"",phone:"",date:g,time:"",guest:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="This filed is required",e.name&&!/^([a-zA-Z ]){2,30}$/i.test(e.name)&&(t.name="Invalid name"),e.phone&&!/\d{9}/.test(e.phone)&&(t.phone="Invalid number e.g. 750200100"),e.date?e.date&&e.date<=g&&(t.date="Select a date from the coming days"):t.date="Select date appointment",e.time||(t.time="Select time appointment"),e.guest||(t.guest="Select your table"),t},onSubmit:function(e,t){t.setSubmitting;setTimeout((function(){b(e)}),400)}},(function(e){var a=e.values,n=e.errors,l=e.touched,i=e.handleChange,c=e.handleBlur,o=e.handleSubmit,u=e.isSubmitting,f=e.setFieldValue;return r.a.createElement("form",{onSubmit:o,className:v},r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"name",className:"form__label"},"Name",r.a.createElement(m.a,{type:"text",name:"name",onChange:i,onBlur:c,value:a.name,placeholder:"Name"})),r.a.createElement("span",{className:"form__validation"},n.name&&l.name&&n.name)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"email",className:"form__label"},"Email",r.a.createElement(m.a,{type:"email",name:"email",onChange:i,onBlur:c,value:a.email,placeholder:"Email"})),r.a.createElement("span",{className:"form__validation"},n.email&&l.email&&n.email)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"time",className:"form__label"},"Phone",r.a.createElement(m.a,{type:"tel",name:"phone",onChange:i,onBlur:c,value:a.phone,placeholder:"Number"})),r.a.createElement("span",{className:"form__validation"},n.phone&&l.phone&&n.phone)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"time",className:"form__label"},"Time",r.a.createElement(m.a,{component:"select",name:"time"},r.a.createElement("option",{value:"",disabled:!0},"Select time appointment"),r.a.createElement("option",{value:"12:00pm"},"12:00pm"),r.a.createElement("option",{value:"01:00pm"},"01:00pm"),r.a.createElement("option",{value:"02:00pm"},"02:00pm"),r.a.createElement("option",{value:"03:00pm"},"03:00pm"),r.a.createElement("option",{value:"06:00pm"},"06:00pm"),r.a.createElement("option",{value:"07:00pm"},"07:00pm"),r.a.createElement("option",{value:"08:00pm"},"08:00pm"),r.a.createElement("option",{value:"09:00pm"},"09:00pm"),r.a.createElement("option",{value:"10:00pm"},"10:00pm"))),r.a.createElement("span",{className:"form__validation"},n.time&&l.time&&n.time)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"guest",className:"form__label"},"Guest",r.a.createElement(m.a,{component:"select",name:"guest"},r.a.createElement("option",{value:"",disabled:!0},"Select table"),r.a.createElement("option",{value:"2"},"2 guests"),r.a.createElement("option",{value:"4"},"4 guests"),r.a.createElement("option",{value:"6"},"6 guests"),r.a.createElement("option",{value:"8"},"8 guests"))),r.a.createElement("span",{className:"form__validation"},n.guest&&l.guest&&n.guest)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"date",className:"form__label"},"Date",r.a.createElement(p.a,{selected:a.date,dateFormat:"d MMMM yyyy",className:"form-control",name:"startDate",onChange:function(e){return f("date",e)}})),r.a.createElement("span",{className:"form__validation"},n.date&&l.date&&n.date)),r.a.createElement(d.a,{name:"Appointment",type:"submit",disabled:u,variant:t||"primary",customClass:"form__button"}))})),r.a.createElement(s.a,{customClass:h},r.a.createElement(u.a,{variant:"p",customClass:"form__description"},E&&"Your table for ".concat(f.guest," quests will be ready ").concat(f.date.toLocaleDateString("en-GB")," at ").concat(f.time," ")),r.a.createElement(u.a,{variant:"p",customClass:"form__description",align:"center"},"See you!")))}},5:function(e,t,a){"use strict";var n=a(11),l=a(0),r=a.n(l),i=a(7),c=a.n(i);a(79);t.a=function(e){var t=e.customClass,a=e.children,l=e.variant,i=e.arriaHidden,o=e.role,m=l?"section":"div",s=c()(t,Object(n.a)({},"container--section",l));return r.a.createElement(m,{className:s,"aria-hidden":i,role:o},a)}},61:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(8);t.a=function(e){var t=e.info,a=e.align,n=t.title,i=t.subtitle,c=t.description;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"h2",type:"subtitle",align:a},i),l.a.createElement(r.a,{variant:"h2",type:"title",align:a},n),l.a.createElement(r.a,{variant:"p",type:"description",align:a},c))}},71:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(0),r=a.n(l),i=a(7),c=a.n(i),o=a(21),m=a(5),s=a(8),u=a(28);a(161);t.default=function(e){var t=e.info,a=e.variant,l=e.colorTitle,i=e.colorDescription,d=c()("info",Object(n.a)({},"info--".concat(a),a));return r.a.createElement(m.a,{customClass:d,variant:!0},t.map((function(e,t){var a,n=e.name,c=e.title,d=e.description;return r.a.createElement(o.a,{option:"fade-up",key:t},r.a.createElement(m.a,{customClass:"info__item"},r.a.createElement(m.a,{customClass:"info__icon"},(a=n,r.a.createElement(u.a,{name:a}))),r.a.createElement(s.a,{variant:"h2",customClass:"info__title",color:l},c),r.a.createElement(s.a,{variant:"p",customClass:"info__description",color:i,type:"description"},d)))})))}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),i=a(60),c=a(5),o=a(61),m=a(37),s={title:"Our Story",subtitle:"Discover",banner:"https://i.ibb.co/VqDVj1b/banner.webp",description:'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.'};a(162),t.default=Object(i.trackWindowScroll)((function(){var e=s.banner;return l.a.createElement(c.a,{customClass:"discover-story",variant:!0},l.a.createElement(r.a,{option:"fade-right"},l.a.createElement(m.a,{image:e,alt:"banner",customClass:"discover-story__image"})),l.a.createElement(c.a,{customClass:"discover-story__container"},l.a.createElement(o.a,{info:s,align:"left"})))}))},79:function(e,t,a){},8:function(e,t,a){"use strict";var n=a(11),l=a(0),r=a.n(l),i=a(7),c=a.n(i);a(80);t.a=function(e){var t,a=e.variant,l=e.customClass,i=e.type,o=e.children,m=e.align,s=e.color,u=a,d=c()(l,(t={},Object(n.a)(t,"typography--".concat(i),i),Object(n.a)(t,"typography--".concat(m),m),Object(n.a)(t,"typography--".concat(s),s),t));return r.a.createElement(u,{className:d},o)}},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[165,4,5]]]);
//# sourceMappingURL=main.1a4a7835.chunk.js.map