(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(23),a=n.n(i),l=(n(45),n(46),n(4)),o=n(6),s=n(2),d=n(0),u=n(40),j=n(13),b=(n(47),n(3));var f=function(e){return Object(b.jsx)("div",{className:"menu-container",children:e.children})};n(49);var h=function(e,t){if(!t)return!0;var n=d.a.marks(e);return!!n&&!0===n[t]},p=function(e){var t=Object(j.e)();return Object(b.jsx)("button",{className:"mark-button",onClick:e.click,style:{color:h(t,e.format)?"black":"#aaa"},children:e.children})},O=n(16),x=n(17),m={Bold:Object(b.jsx)(O.a,{icon:x.a}),Code:Object(b.jsx)(O.a,{icon:x.b}),Image:Object(b.jsx)(O.a,{icon:x.c}),Italic:Object(b.jsx)(O.a,{icon:x.d}),OrderedList:Object(b.jsx)(O.a,{icon:x.e}),Quote:Object(b.jsx)(O.a,{icon:x.g}),Save:Object(b.jsx)(O.a,{icon:x.h}),Underline:Object(b.jsx)(O.a,{icon:x.i}),UnorderedList:Object(b.jsx)(O.a,{icon:x.f}),Video:Object(b.jsx)(O.a,{icon:x.j})},g=function(e){var t=e.attributes,n=e.children,c=e.element,r=Object(j.d)(),i=Object(j.c)();return Object(b.jsxs)("div",Object(o.a)(Object(o.a)({},t),{},{children:[Object(b.jsx)("div",{contentEditable:!1,children:Object(b.jsx)("img",{src:c.url,className:"image-style",style:{boxShadow:r&&i?"0 0 0 3px #B4D5FF":"none"}})}),n]}))},v=function(e){var t=e.attributes,n=e.children,c=e.element,r=Object(j.d)(),i=Object(j.c)();return Object(b.jsxs)("div",Object(o.a)(Object(o.a)({},t),{},{children:[Object(b.jsx)("div",{contentEditable:!1,children:Object(b.jsx)("iframe",{src:c.url,className:"iframe-style",style:{boxShadow:r&&i?"0 0 0 3px #B4D5FF":"none"},width:"560",height:"315",allowfullscreen:"true"})}),n]}))},k=function(e){var t=e.attributes,n=e.children;switch(e.element.type){case"block-quote":return Object(b.jsx)("blockquote",Object(o.a)(Object(o.a)({},t),{},{children:n}));case"bulleted-list":return Object(b.jsx)("ul",Object(o.a)(Object(o.a)({},t),{},{children:n}));case"code":return Object(b.jsx)("pre",Object(o.a)(Object(o.a)({},t),{},{children:Object(b.jsx)("code",{children:n})}));case"heading-one":return Object(b.jsx)("h1",Object(o.a)(Object(o.a)({},t),{},{children:n}));case"heading-two":return Object(b.jsx)("h2",Object(o.a)(Object(o.a)({},t),{},{children:n}));case"iframe":return Object(b.jsx)(v,Object(o.a)({},e));case"image":return Object(b.jsx)(g,Object(o.a)({},e));case"list-item":return Object(b.jsx)("li",Object(o.a)(Object(o.a)({},t),{},{children:n}));case"numbered-list":return Object(b.jsx)("ol",Object(o.a)(Object(o.a)({},t),{},{children:n}));default:return Object(b.jsx)("p",Object(o.a)(Object(o.a)({},t),{},{children:n}))}},y=function(e){var t=e.attributes,n=e.children,c=e.leaf;return c.bold&&(n=Object(b.jsx)("strong",{children:n})),c.code&&(n=Object(b.jsx)("code",{children:n})),c.italic&&(n=Object(b.jsx)("em",{children:n})),c.underline&&(n=Object(b.jsx)("u",{children:n})),Object(b.jsx)("span",Object(o.a)(Object(o.a)({},t),{},{children:n}))},w=function(e){if(!e)return!1;if(!N(e))return!1;var t=new URL(e).pathname.split(".").pop();return S.includes(t)},N=function(e){if(!e)return!1;return/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(e)},S=["ase","art","bmp","blp","cd5","cit","cpt","cr2","cut","dds","dib","djvu","egt","exif","gif","gpl","grf","icns","ico","iff","jng","jpeg","jpg","jfif","jp2","jps","lbm","max","miff","mng","msp","nitf","ota","pbm","pc1","pc2","pc3","pcf","pcx","pdn","pgm","PI1","PI2","PI3","pict","pct","pnm","pns","ppm","psb","psd","pdd","psp","px","pxm","pxr","qfx","raw","rle","sct","sgi","rgb","int","bw","tga","tiff","tif","vtf","xbm","xcf","xpm","3dv","amf","ai","awg","cgm","cdr","cmx","dxf","e2d","egt","eps","fs","gbr","odg","svg","stl","vrml","x3d","sxd","v2d","vnd","wmf","emf","art","xar","png","webp","jxr","hdp","wdp","cur","ecw","iff","lbm","liff","nrrd","pam","pcx","pgf","sgi","rgb","rgba","bw","int","inta","sid","ras","sun","tga"],C=["numbered-list","bulleted-list"];var D=function(e,t){var n=d.a.nodes(e,{match:function(e){return!d.a.isEditor(e)&&d.b.isElement(e)&&e.type===t}});return!!Object(s.a)(n,1)[0]},M=function(e,t){var n=D(e,t),c=C.includes(t);d.h.unwrapNodes(e,{match:function(e){return C.includes(!d.a.isEditor(e)&&d.b.isElement(e)&&e.type)},split:!0});var r={type:n?"paragraph":c?"list-item":t};if(d.h.setNodes(e,r),!n&&c){var i={type:t,children:[]};d.h.wrapNodes(e,i)}},A=function(e){var t=Object(j.e)();return Object(b.jsx)("button",{className:"mark-button",style:{color:D(t,e.format)?"black":"#aaa"},onClick:function(n){n.preventDefault(),M(t,e.format)},children:e.children})},B=n(7),I=n.n(B),U=n(37),T=function(){var e=Object(U.a)(I.a.mark((function e(t){var n,c,r,i,a,l;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Headers).append("Content-Type","application/json"),c="".concat("https://ar-cds.dtvlaweb.com/coverage/","Cds/Article"),r=JSON.stringify(t),i={method:"POST",headers:n,body:r,redirect:"follow"},console.log(r),e.next=8,fetch(c,i);case 8:return a=e.sent,e.next=11,a.json();case 11:return l=e.sent,e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var L=function(e){var t=Object(c.useState)(E(Object(u.a)(Object(j.f)(Object(d.i)()))),[]),n=Object(s.a)(t,1)[0],r=Object(c.useState)(q),i=Object(s.a)(r,2),a=i[0],l=i[1],h=Object(c.useCallback)((function(e){return Object(b.jsx)(k,Object(o.a)({},e))}),[]),O=Object(c.useCallback)((function(e){return Object(b.jsx)(y,Object(o.a)({},e))}),[]);return Object(b.jsxs)(j.b,{editor:n,value:a,onChange:function(e){return l(e)},children:[Object(b.jsxs)(f,{children:[Object(b.jsx)(p,{format:"bold",click:function(e){e.preventDefault(),P.toggleBoldMark(n)},children:m.Bold}),Object(b.jsx)(p,{format:"italic",click:function(e){e.preventDefault(),P.toggleItalicMark(n)},children:m.Italic}),Object(b.jsx)(p,{format:"underline",click:function(e){e.preventDefault(),P.toggleUnderlineMark(n)},children:m.Underline}),Object(b.jsx)(p,{click:function(e){var t=window.prompt("Enter the URL of the image:");!t||w(t)?F(n,t):alert("URL is not an image")},children:m.Image}),Object(b.jsx)(p,{click:function(e){var t=window.prompt("Enter the URL of the video:");!t||N(t)?R(n,t):alert("URL is not an url")},children:m.Video}),Object(b.jsx)(A,{format:"heading-one",children:"T"}),Object(b.jsx)(A,{format:"heading-two",children:"S"}),Object(b.jsx)(p,{click:function(e){e.preventDefault();var t=prompt("Seleccione el nombre del articulo");if(t){var n={country:"AR",name:t,cdsContent:"",content:a};console.log(n),T(n).then((function(e){console.log("data ok: ",e),alert("articulo guardado correctamente")})).catch((function(e){return alert("error: "+alert.toString())}))}else alert("no ingreso nombre")},children:m.Save})]}),Object(b.jsx)(j.a,{editor:n,renderElement:h,renderLeaf:O,onKeyDown:function(e){console.log(a);var t=JSON.stringify(a);if(localStorage.setItem("content",t),e.ctrlKey)switch(e.key){case"`":e.preventDefault(),P.toggleCodeBlock(n);break;case"b":e.preventDefault(),P.toggleBoldMark(n)}}})]})},E=function(e){var t=e.insertData,n=e.isVoid;return e.isVoid=function(e){return"image"===e.type||n(e)},e.insertData=function(n){var c=n.getData("text/plain"),r=n.files;if(r&&r.length>0){var i,a=Object(l.a)(r);try{var o=function(){var t=i.value,n=new FileReader,c=t.type.split("/");"image"===Object(s.a)(c,1)[0]&&(n.addEventListener("load",(function(){var t=n.result;F(e,t)})),n.readAsDataURL(t))};for(a.s();!(i=a.n()).done;)o()}catch(d){a.e(d)}finally{a.f()}}else w(c)?F(e,c):t(n)},e},F=function(e,t){var n={type:"image",url:t,children:[{text:""}]};d.h.insertNodes(e,n)},R=function(e,t){var n={type:"iframe",url:t,children:[{text:""}]};d.h.insertNodes(e,n)},P={isBoldMarkActive:function(e){var t=d.a.nodes(e,{match:function(e){return!0===e.bold},universal:!0});return!!Object(s.a)(t,1)[0]},isItalicMarkActive:function(e){var t=d.a.nodes(e,{match:function(e){return!0===e.italic},universal:!0});return!!Object(s.a)(t,1)[0]},isUnderlineMarkActive:function(e){var t=d.a.nodes(e,{match:function(e){return!0===e.underline},universal:!0});return!!Object(s.a)(t,1)[0]},isCodeBlockActive:function(e){var t=d.a.nodes(e,{match:function(e){return!0===e.code},universal:!0});return!!Object(s.a)(t,1)[0]},toggleBoldMark:function(e){var t=P.isBoldMarkActive(e);d.h.setNodes(e,{bold:!t||null},{match:function(e){return d.g.isText(e)},split:!0})},toggleItalicMark:function(e){var t=P.isItalicMarkActive(e);d.h.setNodes(e,{italic:!t||null},{match:function(e){return d.g.isText(e)},split:!0})},toggleUnderlineMark:function(e){var t=P.isUnderlineMarkActive(e);d.h.setNodes(e,{underline:!t||null},{match:function(e){return d.g.isText(e)},split:!0})},toggleCodeBlock:function(e){var t=P.isUnderlineMarkActive(e);d.h.setNodes(e,{code:!t||null},{match:function(e){return d.g.isText(e)},split:!0})}},q=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",underline:!0},{text:"!"}]},{type:"h2",children:[{text:"Titulo"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}],J=n(30),V=n(8);var z=function(){return Object(b.jsx)("div",{className:"App-container",children:Object(b.jsx)(J.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsx)(J.b,{to:"/",children:"Home"})})})}),Object(b.jsx)(V.c,{children:Object(b.jsxs)(V.a,{path:"/",children:[Object(b.jsx)("h1",{children:"Rich Text"}),Object(b.jsx)(L,{})]})})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),H()}},[[70,1,2]]]);
//# sourceMappingURL=main.f26a1def.chunk.js.map