(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{71:function(n,t,e){"use strict";e.r(t),e.d(t,"SplitPicture",(function(){return f})),e.d(t,"default",(function(){return h}));var r=e(7),i=e.n(r),a=e(0),u=e.n(a),c=e(5);e(9);function o(){var n=i()(["\n  background-color: black;\n  width:60%;\n  ","\n  background-position:center;\n  background-size: cover;\n  @media (max-width: 750px) {\n    /* width:100vw; */\n    width:initial;\n    height:60vh\n    /* height:30vh; */\n  }\n"]);return o=function(){return n},n}function d(){var n=i()(["\n  max-width: 500px;\n  padding: 30px;\n  margin: auto;\n  @media (max-width: 750px) {\n    margin:0 auto 0 auto\n  }\n"]);return d=function(){return n},n}function g(){var n=i()(["\n  flex-direction: ",";\n  flex-direction: ",";\n  position: relative;\n  min-height: 80vh;\n  text-align: left;\n  color: grey;\n  display:flex;\n  @media (max-width: 750px) {\n    flex-direction: column;\n  }\n"]);return g=function(){return n},n}var l=Object(c.a)("div")(g(),(function(n){return n.pictureLeft?"row":"row-reverse"}),(function(n){return n.pictureRight?"row-reverse":"row"})),p=Object(c.a)("div")(d()),f=Object(c.a)("img")(o(),(function(n){return n.backgroundImage&&"background-image: url("+n.backgroundImage+");"}));function h(n){var t={pictureRight:n.pictureRight,pictureLeft:n.pictureLeft};return u.a.createElement(l,t,u.a.createElement(f,{id:"laptopStock",backgroundImage:n.backgroundImage}),u.a.createElement(p,null,n.children))}}}]);