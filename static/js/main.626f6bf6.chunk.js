(this["webpackJsonprestaurant-page"]=this["webpackJsonprestaurant-page"]||[]).push([[3],[,,function(e,t,a){"use strict";var n=a(8),l=a(0),r=a.n(l),i=a(4),c=a.n(i);a(47);t.a=function(e){var t=e.customClass,a=e.children,l=e.variant,i=e.arriaHidden,o=e.role,m=l?"section":"div",s=c()(t,Object(n.a)({},"container--section",l));return r.a.createElement(m,{className:s,"aria-hidden":i,role:o},a)}},,,function(e,t,a){"use strict";var n=a(8),l=a(0),r=a.n(l),i=a(4),c=a.n(i);a(48);t.a=function(e){var t,a=e.variant,l=e.customClass,i=e.type,o=e.children,m=e.align,s=e.color,u=a,d=c()(l,(t={},Object(n.a)(t,"typography--".concat(i),i),Object(n.a)(t,"typography--".concat(m),m),Object(n.a)(t,"typography--".concat(s),s),t));return r.a.createElement(u,{className:d},o)}},,,,,,,,function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(40),i=a.n(r);a(85);t.a=function(e){var t=e.children,a=e.option;return Object(n.useEffect)((function(){i.a.init({duration:1500})}),[]),l.a.createElement("div",{"data-aos":a},t)}},,,,function(e,t,a){"use strict";var n=a(8),l=a(0),r=a.n(l),i=a(4),c=a.n(i),o=a(18);a(61);t.a=function(e){var t=e.customClass,a=e.name,l=e.link,i=e.variant,m=e.onClick,s=e.id,u=e.tabIndex,d=c()("button",t,Object(n.a)({},"button--".concat(i),i));return l?r.a.createElement(o.a,{customClass:d,link:l,alt:a,tabIndex:!0},a):r.a.createElement("button",{id:s,onClick:m,className:d,tabIndex:u&&-1},a)}},function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){var t=e.children,a=e.link,n=e.customClass,r=e.alt,i=e.tabIndex;return l.a.createElement("a",{href:a,className:n,alt:r,tabIndex:i&&-1},t)}},function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(10),i=a(14),c=a(29);t.a=function(e){var t=e.name;return l.a.createElement(l.a.Fragment,null,"map"===t&&l.a.createElement(r.a,{icon:i.e}),"phone"===t&&l.a.createElement(r.a,{icon:i.f}),"email"===t&&l.a.createElement(r.a,{icon:i.c}),"hours"===t&&l.a.createElement(r.a,{icon:i.a}),"facebook"===t&&l.a.createElement(r.a,{icon:c.a}),"twitter"===t&&l.a.createElement(r.a,{icon:c.c}),"instagram"===t&&l.a.createElement(r.a,{icon:c.b}),"delivery"===t&&l.a.createElement(r.a,{icon:i.g}),"coffee"===t&&l.a.createElement(r.a,{icon:i.b}),"order"===t&&l.a.createElement(r.a,{icon:i.d}))}},,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),l=a.n(n).a.createContext()},function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(0),r=a.n(l),i=a(24),c=a(4),o=a.n(c),m=a(15),s=a(2),u=a(5),d=a(17);a(84);t.default=function(e){var t=e.btnVariant,a=Object(l.useContext)(i.a),c=Object(n.a)(a,2),f=c[0],p=c[1],b=""!==f.email,E=o()("form__container",{"form__container--hide":b}),v=o()("form__success",{"form__success--active":b}),h=(new Date).toLocaleDateString("fr-CA");return r.a.createElement(s.a,{customClass:"form",role:"form"},r.a.createElement(u.a,{variant:"h2",customClass:"form__title"},b?"WE CAN'T WAIT FOR YOU":"BOOK A TABLE"),r.a.createElement(m.b,{initialValues:{email:"",name:"",phone:"",date:"",time:"",guest:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="This filed is required",e.name&&!/^([a-zA-Z ]){2,30}$/i.test(e.name)&&(t.name="Invalid name"),e.phone&&!/\d{9}/.test(e.phone)&&(t.phone="Invalid number e.g. 750200100"),e.date||(t.date="Select date appointment"),e.time||(t.time="Select time appointment"),e.guest||(t.guest="Select your table"),t},onSubmit:function(e,t){t.setSubmitting;setTimeout((function(){var t=e.date.split(/\D/g),a=[t[2],t[1],t[0]].join("-");e.date=a,p(e)}),400)}},(function(e){var a=e.values,n=e.errors,l=e.touched,i=e.handleChange,c=e.handleBlur,o=e.handleSubmit,u=e.isSubmitting;return r.a.createElement("form",{onSubmit:o,className:E},r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement(m.a,{type:"text",name:"name",onChange:i,onBlur:c,value:a.name,placeholder:"Name"}),r.a.createElement("span",{className:"form__validation"},n.name&&l.name&&n.name)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement(m.a,{type:"email",name:"email",onChange:i,onBlur:c,value:a.email,placeholder:"Email"}),r.a.createElement("span",{className:"form__validation"},n.email&&l.email&&n.email)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement(m.a,{type:"tel",name:"phone",onChange:i,onBlur:c,value:a.phone,placeholder:"Number"}),r.a.createElement("span",{className:"form__validation"},n.phone&&l.phone&&n.phone)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement(m.a,{type:"date",name:"date",onChange:i,onBlur:c,value:a.date,min:h,max:"2022-12-31"}),r.a.createElement("span",{className:"form__validation"},n.date&&l.date&&n.date)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"time",className:"form__label"},"time",r.a.createElement(m.a,{component:"select",name:"time"},r.a.createElement("option",{value:"",disabled:!0},"Select time appointment"),r.a.createElement("option",{value:"12:00pm"},"12:00pm"),r.a.createElement("option",{value:"01:00pm"},"01:00pm"),r.a.createElement("option",{value:"02:00pm"},"02:00pm"),r.a.createElement("option",{value:"03:00pm"},"03:00pm"),r.a.createElement("option",{value:"06:00pm"},"06:00pm"),r.a.createElement("option",{value:"07:00pm"},"07:00pm"),r.a.createElement("option",{value:"08:00pm"},"08:00pm"),r.a.createElement("option",{value:"09:00pm"},"09:00pm"),r.a.createElement("option",{value:"10:00pm"},"10:00pm"))),r.a.createElement("span",{className:"form__validation"},n.time&&l.time&&n.time)),r.a.createElement(s.a,{customClass:"form__input"},r.a.createElement("label",{name:"guest",className:"form__label"},"guest",r.a.createElement(m.a,{component:"select",name:"guest"},r.a.createElement("option",{value:"",disabled:!0},"Select table"),r.a.createElement("option",{value:"2"},"2 guests"),r.a.createElement("option",{value:"4"},"4 guests"),r.a.createElement("option",{value:"6"},"6 guests"),r.a.createElement("option",{value:"8"},"8 guests"))),r.a.createElement("span",{className:"form__validation"},n.guest&&l.guest&&n.guest)),r.a.createElement(d.a,{name:"Appointment",type:"submit",disabled:u,variant:t||"primary",customClass:"form__button"}))})),r.a.createElement(s.a,{customClass:v},r.a.createElement(u.a,{variant:"p",customClass:"form__description"},b&&"Your table for ".concat(f.guest," quests will be ready ").concat(f.date," at ").concat(f.time," ")),r.a.createElement(u.a,{variant:"p",customClass:"form__description",align:"center"},"See you!")))}},,,,,,,,function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(5);t.a=function(e){var t=e.info,a=e.align,n=t.title,i=t.subtitle,c=t.description;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{variant:"h2",type:"subtitle",align:a},i),l.a.createElement(r.a,{variant:"h2",type:"title",align:a},n),l.a.createElement(r.a,{variant:"p",type:"description",align:a},c))}},function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(23);a(88);t.a=function(e){var t=e.image,a=e.alt;return l.a.createElement(r.LazyLoadImage,{src:t,alt:a,effect:"blur"})}},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(0),r=a.n(l),i=a(4),c=a.n(i),o=a(13),m=a(2),s=a(5),u=a(19);a(87);t.default=function(e){var t=e.info,a=e.variant,l=e.colorTitle,i=e.colorDescription,d=c()("info",Object(n.a)({},"info--".concat(a),a));return r.a.createElement(m.a,{customClass:d,variant:!0},t.map((function(e,t){var a,n=e.name,c=e.title,d=e.description;return r.a.createElement(o.a,{option:"fade-up",key:t},r.a.createElement(m.a,{customClass:"info__item"},r.a.createElement(m.a,{customClass:"info__icon"},(a=n,r.a.createElement(u.a,{name:a}))),r.a.createElement(s.a,{variant:"h2",customClass:"info__title",color:l},c),r.a.createElement(s.a,{variant:"p",customClass:"info__description",color:i,type:"description"},d)))})))}},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),i=a(23),c=a(2),o=a(33),m=a(34),s={title:"Our Story",subtitle:"Discover",banner:"https://i.ibb.co/VqDVj1b/banner.webp",description:'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.'};a(89),t.default=Object(i.trackWindowScroll)((function(){var e=s.banner;return l.a.createElement(c.a,{customClass:"discover-story",variant:!0},l.a.createElement(r.a,{option:"fade-right"},l.a.createElement(m.a,{image:e,alt:"banner"})),l.a.createElement(c.a,{customClass:"discover-story__container"},l.a.createElement(o.a,{info:s,align:"left"})))}))},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),i=a.n(r),c=a(9),o=a(24),m=a(21),s=a(1);function u(){var e=Object(s.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var d=a(2),f=a(5),p=a(18),b="coffee",E="blend",v="/coffee-blend/",h=(a(49),function(){var e=b,t=E,a=v;return l.a.createElement(d.a,{customClass:"logo"},l.a.createElement(p.a,{link:a,customClass:"logo__name"},e,l.a.createElement(f.a,{variant:"span",customClass:"logo__name--secondary"},t)))}),g=a(8),_=a(4),y=a.n(_),C=(a(50),function(e){var t=e.navigation,a=e.variant,n=e.toggleMenu,r=y()("navigation",Object(g.a)({},"navigation--".concat(a),a));return l.a.createElement("nav",null,l.a.createElement("ul",{className:r},t.map((function(e,t){var a=e.name,r=e.url;return l.a.createElement("li",{className:"navigation__item",key:t,onClick:n},l.a.createElement(m.b,{to:r,className:"navigation__link"},a))}))))}),w=(a(51),function(e){var t=e.navigation,a=e.isOpen,n=e.toggleMenu,r=y()("mobile-menu",{"mobile-menu--active":a});return l.a.createElement(d.a,{customClass:r},l.a.createElement(C,{navigation:t,variant:"mobile",toggleMenu:n}))}),k=(a(52),function(e){var t=e.toggleMenu,a=e.isOpen,n=y()("hamburger",{"hamburger--active":a});return l.a.createElement("button",{onClick:t,className:n,alt:"menu-icon","aria-label":"menu-icon"},l.a.createElement("span",{className:"hamburger__bar"}),l.a.createElement("span",{className:"hamburger__bar"}),l.a.createElement("span",{className:"hamburger__bar"}))}),O=[{name:"home",url:"/coffee-blend/"},{name:"menu",url:"/coffee-blend/menu"},{name:"services",url:"/coffee-blend/services"},{name:"about",url:"/coffee-blend/about"},{name:"contact",url:"/coffee-blend/contact"}],S="scroll--prevent",j=(a(53),function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=function(){return r(!a)};return Object(n.useEffect)((function(){if("undefined"!==typeof window){var e=window.document.body;console.error=function(){},a&&e.classList.add(S),!a&&e.classList.remove(S)}}),[a]),l.a.createElement("header",{className:"header"},l.a.createElement(h,null),l.a.createElement(C,{navigation:O,variant:"desktop"}),l.a.createElement(k,{toggleMenu:i,isOpen:a}),l.a.createElement(w,{navigation:O,isOpen:a,toggleMenu:i}))}),N=a(19),T=[{name:"map",description:"203 Fake St. Mountain View, San Francisco, California, USA"},{name:"phone",description:"+2 392 3929 210"},{name:"email",description:"info@yourdomain.com"},{name:"hours",description:"Monday-Friday: 8:00am - 9:00pm"}],A=(a(59),function(){return l.a.createElement(d.a,{customClass:"details"},T.map((function(e){var t=e.name,a=e.description;return l.a.createElement(d.a,{customClass:"detail",key:t},l.a.createElement(N.a,{name:t}),l.a.createElement(f.a,{variant:"p",customClass:"detail__description",color:"grey",type:"description"},a))})))}),F=(a(60),function(e){var t=e.content,a=t.description,n=t.socials.map((function(e){var t=e.name,a=e.link;return l.a.createElement(p.a,{link:a,key:t},l.a.createElement(N.a,{name:t}))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{variant:"p",customClass:"footer__description",color:"grey",type:"description"},a),l.a.createElement(d.a,{customClass:"footer__socials"},n))}),x=a(17),z=[{title:"about us",type:"about",description:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",socials:[{name:"facebook",url:"https://www.facebook.com/"},{name:"instagram",url:"https://www.instagram.com/"},{name:"twitter",url:"https://twitter.com/?lang=pl"}]},{title:"have a questions?",type:"questions"},{title:"Services",type:"services",links:[{name:"Suppliers",url:"/"},{name:"Delivery",url:"/"},{name:"Food",url:"/"}]}],D=(a(62),function(){return l.a.createElement("footer",{className:"footer"},z.map((function(e){var t=e.title,a=e.type;return l.a.createElement(d.a,{customClass:"footer__container",key:t},l.a.createElement(f.a,{variant:"h3",customClass:"footer__title"},t),"questions"===a&&l.a.createElement(A,null),"services"===a&&e.links.map((function(e){return l.a.createElement(x.a,{link:e.url,name:e.name,key:e.name,customClass:"footer__button"})})),"about"===a&&l.a.createElement(F,{content:e}))})))}),B=a(37),I=a.n(B),P=function(e){var t=e.image,a=e.alt,n=e.customClass;return l.a.createElement("img",{src:t,alt:a,className:n})},L=(a(78),function(e){var t=e.banner,a=e.slider,n=t.photo,r=t.title,i=t.buttons,c=t.subtitle,o=t.description,m=y()("banner__container",{"banner__container--slider":a}),s=c&&l.a.createElement(f.a,{variant:"p",customClass:"banner__subtitle",type:"subtitle"},t.subtitle),u=o&&l.a.createElement(f.a,{variant:"p",customClass:"banner__description"},t.description),p=i&&l.a.createElement(d.a,{customClass:"banner__buttons"},t.buttons.map((function(e){var t=e.name,a=e.url,n=e.variant;return l.a.createElement(x.a,{key:t,link:a,name:t,variant:n,tabIndex:!0})})));return l.a.createElement(d.a,{customClass:"banner",arriaHidden:!0},l.a.createElement(P,{image:n,alt:"slide",customClass:"banner__image"}),l.a.createElement(d.a,{customClass:m},s,l.a.createElement(f.a,{variant:"h1",customClass:"banner__title"},r),u,p))}),V=(a(79),a(80),a(81),function(e){var t=e.slides;return l.a.createElement(d.a,{customClass:"slider",variant:!0},l.a.createElement(I.a,Object.assign({},{dots:!0,infinite:!0,speed:500,autoplay:!0,slidesToShow:1,slidesToScroll:1,arrows:!1},{className:"slider__container"}),t.map((function(e,t){return l.a.createElement(L,{banner:e,index:t,key:t,slider:!0})}))))}),M=a(25),H=a(13),W=(a(86),function(){return l.a.createElement(d.a,{customClass:"intro",variant:!0},l.a.createElement(H.a,{option:"fade-right"},l.a.createElement(A,null)),l.a.createElement(M.default,{btnVariant:"appointment"}))}),q=[{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/bdt0vJ8/slide-1.webp"},{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/hmVmXdV/slide-2.webp"},{title:"Amazing Taste & Beautiful Place",subtitle:"Welcome",description:"A small river named Duden flows by their place and supplies it with the necessary regelialia.",buttons:[{name:"Order Now",url:"/coffee-blend/contact",variant:"primary"},{name:"View menu",url:"/menu",variant:"secondary"}],photo:"https://i.ibb.co/446yZPd/slide-3.webp"}],Y=[{name:"order",title:"EASY TO ORDER",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."},{name:"delivery",title:"FASTEST DELIVERY",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."},{name:"coffee",title:"QUALITY COFFEE",description:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."}],Z=[{name:"coffee",title:"100",description:"Coffee Branches"},{name:"coffee",title:"85",description:"Number of Awards"},{name:"coffee",title:"10567",description:"Happy Customer"},{name:"coffee",title:"900",description:"Staff"}],J=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,42))})),R=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,104))})),U=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,105))})),$=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,41))})),K=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,102))})),Q=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,25))})),X=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,106))})),G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{slides:q}),l.a.createElement(W,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(J,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement($,{info:Y,colorDescription:"black",colorTitle:"black"})),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(R,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement($,{info:Z,variant:"image",colorDescription:"grey",colorTitle:"twine"})),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(U,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(K,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(Q,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(X,null)))},ee="https://i.ibb.co/bdt0vJ8/slide-1.webp",te={title:"contact us",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},ae={title:"our menu",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},ne={title:"about us",photo:ee,subtitle:null,description:null,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},le={title:"services",photo:ee,buttons:[{name:"Home",url:"/coffee-blend/",variant:"banner"}]},re=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,103))})),ie=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{banner:ae}),l.a.createElement(W,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(H.a,{option:"fade-up"},l.a.createElement(re,null))))},ce=a(41),oe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{banner:le}),l.a.createElement(ce.default,{info:Y,colorDescription:"black",colorTitle:"black"}))},me=a(42),se=Object(n.lazy)((function(){return Promise.resolve().then(a.bind(null,41))})),ue=Object(n.lazy)((function(){return a.e(0).then(a.bind(null,102))})),de=Object(n.lazy)((function(){return a.e(1).then(a.bind(null,104))})),fe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{banner:ne}),l.a.createElement(me.default,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(ue,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(de,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(se,{info:Z,variant:"image",colorDescription:"grey",colorTitle:"twine"})))},pe=Object(n.lazy)((function(){return a.e(2).then(a.bind(null,106))})),be=function(){return l.a.createElement(d.a,{className:"contact-page"},l.a.createElement(L,{banner:te}),l.a.createElement(M.default,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null)},l.a.createElement(pe,null)))},Ee={email:"",name:"",phone:"",date:"",time:"",guest:""},ve=(a(90),function(){var e=Object(n.useState)(Ee),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(m.a,null,l.a.createElement(u,null),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a.Provider,{value:[a,r]},l.a.createElement(j,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/coffee-blend/",element:l.a.createElement(G,null)}),l.a.createElement(s.a,{path:"/coffee-blend/menu",element:l.a.createElement(ie,null)}),l.a.createElement(s.a,{path:"/coffee-blend/services",element:l.a.createElement(oe,null)}),l.a.createElement(s.a,{path:"/coffee-blend/about",element:l.a.createElement(fe,null)}),l.a.createElement(s.a,{path:"/coffee-blend/contact",element:l.a.createElement(be,null)})),l.a.createElement(D,null))))}),he=function(e){e&&e instanceof Function&&a.e(8).then(a.bind(null,101)).then((function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),l(e),r(e),i(e)}))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ve,null)),document.getElementById("root")),he()}],[[91,4,5]]]);
//# sourceMappingURL=main.626f6bf6.chunk.js.map