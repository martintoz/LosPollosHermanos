(this.webpackJsonplospolloshermanos=this.webpackJsonplospolloshermanos||[]).push([[0],{38:function(n,e,t){"use strict";t.r(e);var i,r=t(1),o=t(17),a=t.n(o),s=t(7),c=t(2),l=t(3),d=l.b.div(i||(i=Object(c.a)(["\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  align-items:center;\n\n  .ytEmbed {\n    width: 50vw;\n    height: 28vw;\n  }\n  div {\n    padding: 5vw;\n  }\n  @media screen and (max-width: 750px) {\n    grid-template-rows: 3fr 2fr;\n    grid-template-columns: auto;\n    .ytEmbed {\n    width: 100vw;\n    height: 56vw;\n  }\n  }\n"]))),u=t(0);var m,b,h=function(){return Object(u.jsxs)(d,{id:"aboutus",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"About us"}),'Los Pollos Hermanos is a fast-growing casual family restaurant founded by Gus Fring and his business partner Max Arciniega. Together, the "chicken brothers" made a name for themselves and their small-town eatery by using authentic flavors and spices to make the tastiest chicken south of the border. Since then, Los Pollos Hermanos has opened our doors in the United States, serving families just like yours. And we look forward to continued growth!']}),Object(u.jsx)("iframe",{className:"ytEmbed",src:"https://www.youtube.com/embed/VSXn5_opwIk?controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})},p="#fddb00",j="#ffff53",g="#d2102a",f="#980001",x="#6aace6",v="#27437c",w="#F0F0F0",O="#151515",y=Object(l.a)(m||(m=Object(c.a)(["\n*{\n  margin: 0;\n  \n}\nbody{\n  overflow-x: hidden;\n  background-color:",";\n  font-family: 'Open Sans', sans-serif;\n}\nh1, h2, h3, h4, h5, h6{\n  font-family: 'Luckiest Guy', cursive;\n  letter-spacing:3px;\n  padding:5px 0;\n  color: ",";\n}\nh2{\n  font-size: 3em;\n}\na{\n  text-decoration:none;\n  color:",";\n  &:hover{\n    color:",";\n    transition: all 300ms ease;\n  }\n}\nul{\n    list-style: none;\n\n    padding-inline-start:0;\n}\n\n@media screen and (max-width: 750px) {\n    h2{\n      font-size:2em;\n    }\n  }\n"])),j,g,g,f),k=l.b.div(b||(b=Object(c.a)(["\n  background-color: ",";\n  border-top: 4px solid ",";\n  min-height: 5vh;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  gap:50px;\n  img {\n      width:20%;\n      padding-top:2vh;\n      min-width:15rem;\n  }\n  div{\n    text-align:center;\n    p{\n      font-size:1em;\n      a{\n      font-size:1em;\n    }}\n    a{\n      font-size:0.8em;\n    }\n  }\n"])),p,g);var z,N=function(){return Object(u.jsx)(k,{children:Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["Made by ",Object(u.jsx)("a",{href:"https://github.com/martintoz",children:"Martin Tozer"})," "]})})})},C=l.b.div(z||(z=Object(c.a)(["\n.quote {\n      overflow-x: visible;\n      position: relative;\n      border: 5px solid ",";\n      background-color: ",";\n      color: ",';\n      padding: 2vw;\n      margin:2vw;\n      grid-area: quote;\n      place-self: center center;\n      font-family: "Playfair Display", serif;\n      font-style: italic;\n      font-size: 1.5rem;\n      span {\n        font-style: normal;\n        color: ',";\n      }\n      .openQuote,\n      .closeQuote {\n        color: ",";\n        font-size: 10rem;\n        font-weight: bold;\n        position: absolute;\n        line-height:0.1;\n        margin:0;\n        padding:0;\n      }\n      .openQuote {\n        top: 15px;\n        left:-50px;\n      }\n      .closeQuote{\n        bottom:-35px;\n        right:-15px;\n        .openQuote,\n      .closeQuote{\n        font-size:6rem;\n      }\n      }\n    }\n    @media screen and (max-width: 750px) {\n      .quote{\n\n      font-size: 1.2rem;\n      }\n  }\n"])),v,x,w,p,f);var T,M=function(n){var e=n.quotationMarks,t=n.text,i=n.author;return Object(u.jsx)(C,{children:Object(u.jsxs)("div",{className:"quote",children:[e?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"openQuote",children:"\u201c"}),Object(u.jsx)("div",{className:"closeQuote",children:"\u201d"})]}):Object(u.jsx)(u.Fragment,{}),t,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:i})]})})},E=l.b.div(T||(T=Object(c.a)(["\n  padding-top: ","vh;\n  height: ","vh;\n  background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 35%,\n      ",' 45%\n    ),\n    url("https://pbs.twimg.com/media/C9GXksjV0AE5LJI.jpg:large");\n  background-repeat: no-repeat;\n  background-position: -15%;\n  background-size: contain;\n  display: flex;\n  .mainContainer {\n    overflow-x: visible;\n    justify-self: center;\n    padding: 5vw;\n    display: grid;\n    grid-template-columns: 2fr 3fr 1fr;\n    grid-template-rows: auto;\n    grid-template-areas: ". quote tasteTheFamily";\n    justify-content: center;\n    align-items: center;\n    .tasteTheFamily {\n      grid-area: tasteTheFamily;\n      img {\n        height: 10vw;\n      }\n      p {\n        width: 80%;\n        margin: auto;\n      }\n    }\n    .quoteContainer {\n      grid-area: quote;\n    }\n    .logo {\n      display: none;\n      width: 20vw;\n      height: 20vw;\n      place-self: center end;\n    }\n  }\n  @media screen and (max-width: 1150px) {\n    background: url("https://pbs.twimg.com/media/C9GXksjV0AE5LJI.jpg:large");\n    background-position: 50%;\n    background-size: cover;\n    .mainContainer {\n      grid-template-columns: 2fr 3fr;\n      grid-template-areas: ". quote";\n      .logo,\n      .tasteTheFamily {\n        display: none;\n      }\n    }\n  }\n  @media screen and (max-width: 750px) {\n    background-position: 40%;\n    .mainContainer {\n      grid-template-columns: auto;\n      grid-template-rows:2fr 3fr;\n      grid-template-areas: ".""quote";\n    }\n  }\n'])),10,90,j);var F,L=function(){return Object(u.jsx)(E,{id:"header",children:Object(u.jsxs)("div",{className:"mainContainer",children:[Object(u.jsxs)("div",{className:"tasteTheFamily",children:[Object(u.jsx)("img",{src:"https://user-images.githubusercontent.com/74660801/115553523-ca2e3580-a2ad-11eb-94b6-67a4f9aff148.png",alt:"tasteTheFamily"}),Object(u.jsx)("p",{children:"Chicken so fresh you will always come back for more."})]}),Object(u.jsx)("div",{className:"quoteContainer",children:Object(u.jsx)(M,{quotationMarks:!0,text:"The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",author:'Gustavo "Gus" Fring - Owner'})}),Object(u.jsx)("img",{className:"logo",src:"https://i.pinimg.com/originals/fa/76/ba/fa76bad19f70119ca8fe070e23698071.png",alt:"logoLosPollos"})]})})},I=l.b.div(F||(F=Object(c.a)(["\n  nav {\n    background-color: ",";\n    width: 100vw;\n    min-height: ","vh;\n    border-bottom: 4px solid ",";\n    position: fixed;\n    z-index: 99;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto;\n    align-items: center;\n    ul {\n      text-transform: uppercase;\n      justify-self: end;\n      margin-right: 5vw;\n      gap: 2vw;\n      display: flex;\n      a:hover {\n        text-decoration: underline;\n      }\n      .menuIcon, .menuResponsive {\n        display: none;\n      }\n    }\n    .banner {\n      padding-left: 2vw;\n      width: 70%;\n    }\n  }\n  @media screen and (max-width: 750px) {\n    nav {\n      grid-template-columns: 3fr 1fr;\n      ul {\n        li{\n        display:none;}\n        .menuIcon {\n          display: block;\n          .icon {\n            border: none;\n            background-color: transparent;\n            font-size:2em;\n          }\n        }\n      }\n    }\n  }\n        .menuResponsive{\n          display:none;\n          height: 100vh;\n          width: 70vw;\n          background-color:",";\n          position: fixed;\n          right:-70vw;\n          z-index:98;\n          transition: all 300ms ease;\n          backdrop-filter: blur(3px);\n          padding-top:","vh;\n          h2{\n            padding:5vh 0 2vh 2vh;\n          }\n          ul{\n            width:100%;\n            display:flex;\n            flex-direction:column;\n            align-items:center;\n            li{\n              width:80%;\n              font-size:1.5rem;\n            }\n          }\n        }\n        .menuResponsiveOn{\n          display:flex;\n          flex-direction:column;\n          /* background: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 30%, "," 30%); */\n          right:0;\n          /* width: 100vw; */\n          transition: all 300ms ease;\n        }\n"])),p,10,g,p,10,p),P=t(5);var S,q=function(){var n=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=n.getBoundingClientRect().top+window.pageYOffset,i=-92;e&&(i=-61),window.scrollTo({top:t+i,behavior:"smooth"})},e=function(){var n=document.getElementById("responsiveMenu");"menuResponsive"===n.className?n.className+=" menuResponsiveOn":n.className="menuResponsive"};return Object(u.jsxs)(I,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(P.a,{to:"/#header",scroll:function(e){return n(e)},children:Object(u.jsx)("img",{className:"banner",src:"https://user-images.githubusercontent.com/74660801/115701899-92d08f00-a368-11eb-93bc-6e02970795f5.png",alt:"bannerLosPollos"})}),Object(u.jsxs)("ul",{className:"menuList",children:[Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#news",scroll:function(e){return n(e)},children:"News"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#subscribe",scroll:function(e){return n(e)},children:"Subscribe"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#promo",scroll:function(e){return n(e)},children:"Promos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#aboutus",scroll:function(e){return n(e)},children:"About us"})}),Object(u.jsx)("div",{className:"menuIcon",children:Object(u.jsx)("button",{className:"icon",onClick:e,children:Object(u.jsx)("i",{className:"fas fa-bars"})})})]})]}),Object(u.jsxs)("div",{id:"responsiveMenu",className:"menuResponsive",children:[Object(u.jsx)("h2",{children:"Menu"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#news",onClick:e,scroll:function(e){return n(e,!0)},children:"News"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#subscribe",onClick:e,scroll:function(e){return n(e,!0)},children:"Subscribe"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#promo",onClick:e,scroll:function(e){return n(e,!0)},children:"Promos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(P.a,{to:"/#aboutus",onClick:e,scroll:function(e){return n(e,!0)},children:"About us"})})]})]})]})},A=l.b.div(S||(S=Object(c.a)(['\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 35%, black 95%),\n    url("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-alcala-c-turismo-madrid.jpg_604889389.jpg");\n  background-position: 50% 70%;\n  background-repeat: no-repeat;\n  min-height: 25vh;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  color: ',";\n  padding: 5vw;\n  p {\n    text-shadow: 2px 2px ",";\n  }\n  .fas {\n    font-size: 5rem;\n  }\n  h2{\n    span{\n      color:",'\n    }\n  }\n  @media screen and (max-width: 750px) {\n    background: linear-gradient(to top, rgba(255, 255, 255, 0) 35%, black 95%),\n    url("https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-alcala-c-turismo-madrid.jpg_604889389.jpg");\n    background-position: 40% 80%;\n    align-items: center;\n    .fas {\n      font-size: 3rem;\n    }\n  }\n'])),w,O,p);var R,B=function(){return Object(u.jsxs)(A,{id:"news",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["We are ",Object(u.jsx)("span",{children:"landing"})," in Spain!"]}),Object(u.jsx)("p",{children:"A new Los Pollos Hermanos restaurant is opening soon at Puerta de Alcal\xe1, Madrid."})]}),Object(u.jsx)("a",{href:"https://goo.gl/maps/8R56rkZRvj1bjcXZ7",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("i",{className:"fas fa-map-marked-alt"})})]})},Q=l.b.div(R||(R=Object(c.a)(["\n  p {\n    font-size: 2.5rem;\n    font-weight: bold;\n  }\n  #countdown {\n    display: flex;\n    div {\n      display: flex;\n      flex-direction: column;\n      font-size: 3rem;\n      font-weight: bold;\n      border: 5px solid ",";\n      border-right: none;\n      width: 8vw;\n      height: 8vw;\n      color: ",";\n      background-color: ",";\n      align-items: center;\n      justify-content: center;\n      &:last-of-type {\n        border-right: 5px solid ",";\n      }\n      p {\n        font-size: 1rem;\n        text-shadow: none;\n      }\n    }\n  }\n  @media screen and (max-width: 750px) {\n    p {\n      font-size: 2rem;\n    }\n    #countdown {\n      div {\n        font-size: 2rem;\n        width: 20vw;\n        height: 20vw;\n        p {\n        font-size: 0.8rem;\n      }\n      }\n    }\n  }\n"])),g,O,p,g);var D,G=function(n){var e=n.date,t=new Date(e).getTime(),i=setInterval((function(){var n=(new Date).getTime(),e=t-n,r=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3);document.getElementById("countdown").innerHTML='<div className="days">'.concat(r,'<p>days</p></div> \n    <div className="hours">').concat(o,'<p>hours</p></div> \n    <div className="minutes">').concat(a,'<p>minutes</p></div> \n    <div className="seconds">').concat(s,"<p>seconds</p></div>"),e<0&&(clearInterval(i),document.getElementById("countdown").innerHTML="EXPIRED")}),1e3);return Object(u.jsxs)(Q,{children:[Object(u.jsx)("p",{children:"Promo available for:"}),Object(u.jsx)("div",{id:"countdown"})]})},H=l.b.div(D||(D=Object(c.a)(['\n  background: linear-gradient(to left, rgba(255, 255, 255, 0) 35%, black 95%),\n    url("https://dude.it/statics/img/works/47_Netflix/EVENT/2.jpg");\n  background-repeat: no-repeat;\n  background-position: 50% 90%;\n  background-size: cover;\n  height: 60vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: ',";\n  padding: 5vw;\n  p {\n    text-shadow: 2px 2px ",';\n  }\n  .fas {\n    font-size: 5rem;\n  }\n  @media screen and (max-width: 750px) {\n    background: linear-gradient(to top, rgba(255, 255, 255, 0) 35%, black 95%),\n      url("https://dude.it/statics/img/works/47_Netflix/EVENT/2.jpg");\n      background-position: 50% 80%;\n    align-items: center;\n    flex-direction:column;\n    justify-content: space-around;\n    .fas {\n      font-size: 3rem;\n    }\n  }\n'])),w,O);var _,V=function(){return Object(u.jsxs)(H,{id:"promo",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Free Drink!"}),Object(u.jsx)("p",{children:"Order any Los Pollos menu and your drink is on us."})]}),Object(u.jsx)(G,{date:"May 3, 2022 00:00:00"})]})},X=t(10),J=t(9),Y=t(22),Z=l.b.div(_||(_=Object(c.a)(["\n  min-height: 20vh;\n  padding: 5vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  form {\n    margin-top: 3vh;\n    display: flex;\n    flex-direction: column;\n    width: 25%;\n    gap: 1vw;\n    padding: 2vw;\n    border: 2px solid ",";\n    background-color: ",";\n    border-radius: 3px;\n    button {\n      width: 50%;\n      align-self: center;\n      border: 2px solid ",";\n      background-color: ",";\n      color: ",";\n      border-radius: 3px;\n        height:5vh;\n      &:disabled {\n        opacity: 0.65;\n        cursor: not-allowed;\n      }\n      &:hover:enabled {\n        transform: scale(1.1);\n        transition: all 300ms ease;\n      }\n    }\n  }\n  @media screen and (max-width: 750px) {\n    form {\n      width: 80%;\n    }\n  }\n"])),g,p,v,x,w),U=t(21),W=t.n(U);var $=function(){var n=Object(r.useState)({email:"",error:!0}),e=Object(Y.a)(n,2),t=e[0],i=e[1];return Object(u.jsxs)(Z,{id:"subscribe",children:[Object(u.jsx)("h2",{children:"Subscribe to our newsletter"}),Object(u.jsx)("p",{children:"Receive our latest promos, news, discounts, and more!"}),Object(u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),W.a.fire({icon:"success",title:"Your email address was registered.",showConfirmButton:!1,timer:1500})},children:[Object(u.jsx)("input",{type:"email",name:"email",onChange:function(n){var e=n.target,r=e.name,o=e.value;i(Object(J.a)(Object(J.a)({},t),{},Object(X.a)({},r,o))),"email"===r&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(o).toLowerCase())&&i(Object(J.a)(Object(J.a)({},t),{},{error:!1}))},placeholder:"email@address.com"}),Object(u.jsx)("button",{type:"submit",disabled:t.error,children:"Submit"})]})]})};var K=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(y,{}),Object(u.jsx)(q,{}),Object(u.jsx)(L,{}),Object(u.jsx)(B,{}),Object(u.jsx)($,{}),Object(u.jsx)(V,{}),Object(u.jsx)(h,{}),Object(u.jsx)(N,{})]})};a.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(K,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c5d96fe4.chunk.js.map