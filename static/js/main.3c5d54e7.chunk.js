(this["webpackJsonppixi-svg-visualization"]=this["webpackJsonppixi-svg-visualization"]||[]).push([[0],{121:function(e,t,n){e.exports=n(137)},136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(41),o=n.n(r),c=n(10),l=n(9),s=n(11);function u(){var e=Object(c.a)(["\n\twidth: 50px;\n"]);return u=function(){return e},e}function d(){var e=Object(c.a)(["\n\tposition: relative;\n"]);return d=function(){return e},e}function h(){var e=Object(c.a)(["\n\tflex-direction: column;\n"]);return h=function(){return e},e}function f(){var e=Object(c.a)(["\n\tflex-direction: row;\n"]);return f=function(){return e},e}function p(){var e=Object(c.a)(["\n\tflex: 1;\n\tdisplay: flex;\n"]);return p=function(){return e},e}var m,v=s.b.div(p()),b=(Object(s.b)(v)(f()),Object(s.b)(v)(h())),g=Object(s.b)(b)(d());s.b.div(u());!function(e){e.age="age",e.posted="posted"}(m||(m={}));var y;m.age,m.age,m.posted;!function(e){e.coat="coat",e.gender="gender",e.size="size"}(y||(y={}));var x,j,O,w,E=[{key:y.coat,text:y.coat},{key:y.gender,text:y.gender},{key:y.size,text:y.size}];!function(e){e.Senior="Senior",e.Adult="Adult",e.Young="Young",e.Baby="Baby"}(x||(x={})),function(e){e.Curly="Curly",e.Long="Long",e.Medium="Medium",e.Short="Short",e.Wire="Wire",e.Hairless="Hairless",e.Unknown="Unknown"}(j||(j={})),function(e){e.Male="Male",e.Female="Female",e.Unknown="Unknown"}(O||(O={})),function(e){e.Small="Small",e.Medium="Medium",e.Large="Large",e.ExtraLarge="Extra Large"}(w||(w={}));var S=[j.Curly,j.Long,j.Medium,j.Short,j.Wire,j.Hairless,j.Unknown],M=[O.Male,O.Female,O.Unknown],k=[w.Small,w.Medium,w.Large,w.ExtraLarge],T=y.coat;function C(){var e=Object(c.a)(["\n\tmargin: 0;\n\tmargin-top: 8px;\n\theight: 100px;\n"]);return C=function(){return e},e}function z(){var e=Object(c.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]);return z=function(){return e},e}var F=Object(a.memo)((function(){return i.a.createElement(A,null,i.a.createElement(D,{src:"/pixi-svg-visualization/dog.svg",alt:"puppy"}))})),A=s.b.div(z()),D=s.b.img(C());function L(){var e=Object(c.a)(["\n\tdisplay: block;\n"]);return L=function(){return e},e}function P(){var e=Object(c.a)(["\n\tmargin-left: 100px;\n\tdisplay: flex;\n"]);return P=function(){return e},e}var R=Object(a.memo)((function(){return i.a.createElement(G,null,i.a.createElement(F,null),i.a.createElement(W,null,i.a.createElement("h1",null," \u2764 All the Dogs "),i.a.createElement("p",null,"All the posts on PetFinder on Sept 29th 2019 plotted based on approximate age of the dog. Data gather by The Pudding for the essay:"," ",i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://pudding.cool/2019/10/shelters",style:{color:"#F683BA"}},"Finding Forever Homes"))))})),G=s.b.div(P()),W=s.b.div(L()),I=Object(a.memo)((function(){return i.a.createElement("span",null,"Icons made by"," ",i.a.createElement("a",{href:"https://www.flaticon.com/authors/eucalyp",title:"Eucalyp"},"Eucalyp"),"and",i.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"freepik"},"Freepik")," ","from"," ",i.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))})),H=n(166);function N(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];t&&clearTimeout(t);var o=this;t=setTimeout((function(){var n;t=null,(n=e).call.apply(n,[o].concat(i))}),n)}}function V(){var e=Object(c.a)(["\n\tmargin-left: 10px;\n\tdisplay: inline-table;\n"]);return V=function(){return e},e}var B={dropdown:{maxWidth:150},root:{display:"inline-table"},title:{fontFamily:"'Gaegu', cursive",fontSize:18},label:{fontFamily:"'Gaegu', cursive"},dropdownOptionText:{fontFamily:"'Gaegu', cursive",fontSize:18}},K=Object(a.memo)((function(e){var t=e.selectedOption,n=e.onDropDrownChange,a=e.options,r=e.label;return i.a.createElement(U,null,i.a.createElement(H.a,{label:r||"",onChange:N(n),selectedKey:t,options:a,styles:B}))})),U=s.b.div(V()),_=n(171);function Y(){var e=Object(c.a)(["\n\tmargin-left: 10px;\n\tdisplay: inline-table;\n"]);return Y=function(){return e},e}var q,J={slideBox:{maxWidth:300},root:{display:"inline-table",fontFamily:"'Gaegu', cursive"},titleLabel:{fontFamily:"'Gaegu', cursive"}},Q=Object(a.memo)((function(e){var t=e.sliderOnChange,n=e.sliderValue,a=e.sliderSettings;return i.a.createElement(X,null,i.a.createElement(_.a,{label:"Adjust node count",min:a.min,max:a.max,step:1e3,showValue:!0,snapToStep:!0,value:n,onChange:t,styles:J}))})),X=s.b.div(Y()),Z=n(168);!function(e){e.SVG="SVG",e.Canvas="Canvas",e.WebGL="WebGL"}(q||(q={}));var $={width:32,height:32},ee="".concat("/pixi-svg-visualization","/cocker-sp-outline.svg"),te="".concat("/pixi-svg-visualization","/cocker-sp.svg"),ne=[{key:q.SVG,text:q.SVG,imageSrc:ee,selectedImageSrc:te,imageSize:$},{key:q.Canvas,text:q.Canvas,imageSrc:ee,selectedImageSrc:te,imageSize:$},{key:q.WebGL,text:q.WebGL,imageSrc:ee,selectedImageSrc:te,imageSize:$}];function ae(){var e=Object(c.a)(["\n\tmargin-left: 10px;\n\tdisplay: inline-table;\n"]);return ae=function(){return e},e}var ie=Object(a.memo)((function(e){var t=e.selectedRender,n=e.onChange;return a.createElement(re,null,a.createElement(Z.a,{selectedKey:t,options:ne,onChange:n,label:"Renderer"}))})),re=s.b.div(ae());function oe(){var e=Object(c.a)(["\n\tdisplay: 'inline-flex';\n\tmargin-left: 100px;\n"]);return oe=function(){return e},e}var ce=Object(a.memo)((function(e){var t=e.yAxisFilter,n=e.onYDropDrownChange,a=e.onSliderChange,r=e.sliderSettings,o=e.selectedMax,c=e.selectedRender,l=e.onRendererChange;return i.a.createElement(le,null,i.a.createElement(K,{selectedOption:t,onDropDrownChange:n,options:E,label:"group dogs by:"}),i.a.createElement(Q,{sliderOnChange:a,sliderSettings:r,sliderValue:o}),i.a.createElement(ie,{selectedRender:c,onChange:l}))})),le=s.b.div(oe()),se=n(78),ue=n(93);var de={position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"},he=Object(a.memo)((function(e){var t=e.sizedRef,n=e.onResize,r=e.children,o=e.className,c=e.style,s=Object(a.useRef)(null),u=Object(a.useMemo)((function(){return t||s}),[s,t]),d=function(e){var t=Object(a.useState)(),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){if(e&&e.current){var t=e.current.getBoundingClientRect(),n={width:Math.floor(t.width),height:Math.floor(t.height)};r(n);var a=new ue.a((function(e){var t=e[0];if(t){var a={width:Math.floor(t.contentRect.width),height:Math.floor(t.contentRect.height)};a.width===n.width&&a.height===n.height||(n=a,r(a))}}));return a.observe(e.current),function(){a.disconnect()}}}),[e]),i}(u);Object(a.useEffect)((function(){u&&d&&n&&n(d)}),[u,d,n]);var h=Object(a.useMemo)((function(){return Object(se.a)(Object(se.a)({},de),c||{})}),[c]);return i.a.createElement("div",{className:o,ref:u,style:h},r)}));he.displayName="SizedToParent";var fe=100,pe=100,me=10,ve=40;function be(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1];return[Object(a.useCallback)((function(e){return i(e)}),[i]),n]}var ge=n(164);var ye=n(99);function xe(e){return"\n\t<h2>".concat(e.name.toUpperCase(),"</h2>\n\t<img src=").concat("/pixi-svg-visualization"+e.imgSrc,' style="width: 100px;"> </img>\n\tAge: ').concat(Math.round(e.age),"<br />Posted: ").concat(new Date(e.posted).toDateString(),"\n\t<br /> State: ").concat(e.state,"\n\t")}function je(e,t){var n,i=(n=e,Object(a.useCallback)((function(e){if(e&&n){var t=e[0],a=e[1];n&&(n.style.left="".concat(t+150,"px"),n.style.top="".concat(a-10,"px"),n.style.visibility="visible")}}),[n]));return[Object(a.useCallback)((function(n,a){if(e){var r=t&&t[n]?xe(t[n]):"";e.style.padding="2px",e.innerHTML=r,e.style.backgroundColor="#f1f1f1",e.style.border="1px solid #767676",e.style.color="black",e.style.fontSize="14px",e.style.fontSize="14px",e.style.visibility="visible",i(a)}}),[e,i,t]),Object(a.useCallback)((function(){e&&(e.style.visibility="hidden")}),[e])]}var Oe=Object(ye.a)().duration(1e3);function we(e){var t=e.element,n=e.data,i=e.showData,r=e.tooltip,o=e.details,c=function(e){return Object(a.useMemo)((function(){return e?Object(ge.a)(e):null}),[e])}(t),s=je(r,o),u=Object(l.a)(s,2),d=u[0],h=u[1];Object(a.useLayoutEffect)((function(){null!==c&&n.length>0&&i&&c.selectAll(".dog-nodes").data(n,(function(e){return e.id})).join((function(e){return e.append("circle").attr("class","dog-nodes").attr("cx",(function(e){return e.x})).attr("cy",0).attr("r",2).attr("aria-label",(function(e){return"".concat(e.yFilter,"-").concat(e.x)})).call((function(e){return e.interrupt().transition(Oe).attr("cy",(function(e){return e.y}))})).style("fill",(function(e){return e.color})).style("opacity",.8).style("stroke-width",1).style("stroke",(function(e){return e.color})).attr("stroke-opacity",1)}),(function(e){return e.call((function(e){return e.interrupt().transition(Oe).style("fill",(function(e){return e.color})).attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).style("stroke-width",1).style("stroke",(function(e){return e.color})).style("stroke-opacity",1)}))}),(function(e){return e.call((function(e){return e.remove()}))})).on("mouseover",(function(e){Object(ge.a)(this).attr("r",4),d(e.id,[e.x,e.y])})).on("mouseout",(function(e){Object(ge.a)(this).attr("r",2),h()}))}),[c,n,r,h,d,o,i])}var Ee=n(76);var Se=Object(a.memo)((function(e){var t=e.data,n=e.width,r=e.height,o=e.tooltip,c=e.vpHeight,s=e.vpWidth,u=e.yScale,d=e.xScale,h=e.showData,f=e.details,p=be(),m=Object(l.a)(p,2),v=m[0],b=m[1],g=be(),y=Object(l.a)(g,2),x=y[0],j=y[1],O=be(),w=Object(l.a)(O,2),E=w[0],S=w[1],M=be(),k=Object(l.a)(M,2),T=k[0],C=k[1];return function(e,t,n){Object(a.useEffect)((function(){e&&Object(ge.a)(e).attr("width",t).attr("height",n)}),[e,t,n])}(b,n,r),function(e,t,n){Object(a.useEffect)((function(){e&&null!==e&&Object(ge.a)(e).call(Object(Ee.a)(n)).attr("transform","translate(0, ".concat(t,")")).selectAll("text").style("font-family","'Gaegu', cursive").style("font-size","20px")}),[e,t,n])}(j,c,d),function(e,t){Object(a.useEffect)((function(){e&&null!==e&&Object(ge.a)(e).call(Object(Ee.b)(t)).selectAll("text").style("font-family","'Gaegu', cursive").style("font-size","20px")}),[e,t])}(S,u),we({element:C,data:t,tooltip:o,details:f,showData:h}),i.a.createElement("div",{style:{position:"absolute",zIndex:1}},i.a.createElement("svg",{ref:v,width:n,height:r,role:"img"},i.a.createElement("title",null," Dog Posts on Petfinder API"),i.a.createElement("desc",{id:"desc"}," ","Show increasing number of dog post based on user selection on one given day"),i.a.createElement("g",{className:"viewport",transform:"translate(".concat(fe,",").concat(me,")")},i.a.createElement("g",{className:"yscale",ref:E,"aria-label":"yscale"}),i.a.createElement("g",{className:"xscale",ref:x,"aria-label":"xscale"}),i.a.createElement("g",{className:"plotarea",width:s,height:c,"aria-label":"plotarea"},i.a.createElement("g",{ref:T,className:"beeswarm"})))))}));function Me(){var e=Object(c.a)(["\n\tz-index: 3;\n\tposition: absolute;\n\tvisibility: hidden;\n"]);return Me=function(){return e},e}function ke(){var e=Object(c.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n"]);return ke=function(){return e},e}var Te=Object(a.memo)((function(e){var t=e.data,n=e.width,a=e.height,r=e.vpHeight,o=e.vpWidth,c=e.yScale,s=e.xScale,u=e.details,d=be(),h=Object(l.a)(d,2),f=h[0],p=h[1];return i.a.createElement(Ce,null,i.a.createElement(Se,{width:n,height:a,vpHeight:r,vpWidth:o,data:t,tooltip:p,yScale:c,xScale:s,details:u,showData:!0}),i.a.createElement(ze,{ref:f,className:"tooltip-svg-ref"}))})),Ce=s.b.div(ke()),ze=s.b.div(Me());var Fe=n(167),Ae=n(172);var De=n(47);function Le(e){var t=e.data,n=e.yScale,i=e.vpHeight,r=e.vpWidth,o=e.yAxisFilter,c=e.selectedMax,l=Object(a.useMemo)((function(){return t.reduce((function(e,t){var a=t.pos.find((function(e){return e.yFilter===o}));if(a){var c=a.y*i+n.bandwidth()/2,l=a.x*r;e.push(Object.assign({},{x:l,y:c,color:a.color,hex:a.hex,id:t.id,yFilter:a.yFilter}))}return e}),[])}),[r,i,t,o,n]),s=Object(a.useMemo)((function(){return function(e,t,n){var a,i={},r=0,o=2*t,c=0,l=!0,s=Object(De.a)(e);try{for(s.s();!(a=s.n()).done;){var u=a.value;r=Math.floor(u.x/o),i[r]||(i[r]=[]),i[r].push(u)}}catch(y){s.e(y)}finally{s.f()}var d=[];for(var h in i){var f=i[h];c=0;var p=0,m=0;l=!0;var v,b=Object(De.a)(f);try{for(b.s();!(v=b.n()).done;){var g=v.value;m=Math.max(m,g.x),l?(c+=0===c?0:t,c=Math.min(c,n/2),g.y=g.y-c,c+=t,p=0===p?t:p,l=!1):(p+=t,p=Math.min(p,n/2),g.y=g.y+p,p+=t,l=!0),d.push(g)}}catch(y){b.e(y)}finally{b.f()}}return d}(l,2,n.bandwidth())}),[l,n]);return Object(a.useMemo)((function(){return s.slice(0,c)}),[s,c])}var Pe=n(63),Re=n(64),Ge=n(24),We=n(165),Ie=function(){function e(t){Object(Pe.a)(this,e),this.toolTipElement=void 0,this.dogMap={},this.toolTipElement=t}return Object(Re.a)(e,[{key:"setTooltipElement",value:function(e){this.toolTipElement=e}},{key:"setDogMap",value:function(e){e&&(this.dogMap=e)}},{key:"updateTooltipPositioner",value:function(e){var t=this.toolTipElement;if(e&&t){var n=e[0],a=e[1];t&&(t.style.left="".concat(n+150,"px"),t.style.top="".concat(a-10,"px"),t.style.visibility="visible")}}},{key:"showToolTip",value:function(e,t){var n=this.toolTipElement;if(n){var a=this.dogMap[e]?xe(this.dogMap[e]):"";n.style.padding="2px",n.innerHTML=a,n.style.backgroundColor="#f1f1f1",n.style.border="1px solid #767676",n.style.color="black",n.style.fontSize="14px",n.style.visibility="visible",this.updateTooltipPositioner(t)}}},{key:"hideTooltip",value:function(){var e=this.toolTipElement;e&&(e.style.visibility="hidden")}}]),e}(),He=(n(84),n(15),function(){function e(t,n,a,i){var r=this;Object(Pe.a)(this,e),this.pixiElement=void 0,this.renderer=void 0,this.circleTexture=void 0,this.nodesStage=void 0,this.stage=void 0,this.dimensions=void 0,this.spriteKeys=new Set([]),this.tweenedScale=1,this.ToolTipManagerInstance=void 0,this.rendererType=void 0,this.spriteMap={},this.resize=function(e,t){r.dimensions.height=t,r.dimensions.width=e,r.renderer&&r.renderer.resize(e,t)},this.dimensions=a,this.pixiElement=t,this.ToolTipManagerInstance=new Ie(n),this.rendererType=i,this.renderer=this.setRenderer(i,a);var o=(new Ge.c).beginFill(16777215).lineStyle(0).drawCircle(0,0,100).endFill();this.circleTexture=this.renderer.generateTexture(o,Ge.f.NEAREST,a.width/a.height),this.pixiElement.appendChild(this.renderer.view),this.nodesStage=new Ge.b,this.stage=new Ge.b,this.stage.addChild(this.nodesStage),this.stage.transform.position.y=me,this.stage.transform.position.x=fe}return Object(Re.a)(e,[{key:"setRenderer",value:function(e,t){var n=Ge.h({width:t.width,height:t.height,antialias:!0,transparent:!0,forceCanvas:e===q.Canvas}),a=n.type===Ge.e.CANVAS?"CANVAS":"WEBGL";return console.log("pixiRenderer flavor: ".concat(a)),n}},{key:"getRendererType",value:function(){return this.rendererType}},{key:"setTooltipElement",value:function(e){this.ToolTipManagerInstance&&this.ToolTipManagerInstance.setTooltipElement(e)}},{key:"setTooltipDetails",value:function(e){this.ToolTipManagerInstance&&this.ToolTipManagerInstance.setDogMap(e)}},{key:"updateChart",value:function(e){this.updateTransition(e)}},{key:"remove",value:function(){this.renderer&&(this.spriteKeys=new Set([]),this.spriteMap={},this.stage.destroy({children:!0}),this.pixiElement.removeChild(this.renderer.view),this.renderer.destroy(!0),this.renderer=null)}},{key:"enter",value:function(e){var t=this;e&&(e.forEach((function(e){var n=new Ge.g(t.circleTexture),a={x:e.x-2,y:e.y-2,hex:e.hex,node:e};t.mapSpriteProps(n,a,2);var i="".concat(e.id);n.name=i,t.spriteMap[i]={sprite:n,_data:a},n.interactive=!0,n.interactiveChildren=!0,n.on("mouseover",(function(e){return t.handleMouseover(e,i)})),n.on("mouseout",(function(e){return t.handleMouseout(e,i)})),t.spriteKeys.add(i),t.nodesStage.addChild(n)})),this.renderPixi())}},{key:"handleMouseover",value:function(e,t){if(e.stopPropagation(),this.spriteMap[t]&&this.ToolTipManagerInstance){var n=this.spriteMap[t],a=n.sprite,i=n._data,r=[i.x,i.y];this.ToolTipManagerInstance.showToolTip(i.node.id,r);a.height=20,a.width=20,a.tint=parseInt("#2e78ce".replace("#",""),16)}this.renderPixi(),e.stopPropagation()}},{key:"handleMouseout",value:function(e,t){if(e.stopPropagation(),this.ToolTipManagerInstance&&this.ToolTipManagerInstance.hideTooltip(),this.spriteMap[t]){var n=this.spriteMap[t],a=n.sprite,i=n._data.hex;i&&(a.tint=i),a.height=4,a.width=4}this.renderPixi()}},{key:"mapSpriteProps",value:function(e,t,n){e.x=t.x,e.y=t.y,e.width=2*n,e.height=2*n,e.alpha=1,e.tint=t.hex}},{key:"updateTransition",value:function(e){var t=this;if(Object.keys(this.spriteMap).length>0){var n,a=this.tweenedScale;requestAnimationFrame((function i(){void 0===n&&(n=Date.now());var r=Date.now()-n,o=Math.max(0,Math.min(r/1e3,1)),c=Object(We.a)(o),l=a+(1-a)*c,s=t.spriteKeys,u=[];e.forEach((function(e){var n="".concat(e.id);if(t.spriteMap[n]){var a=t.spriteMap[n],i=a.sprite,r=a._data,d={x:e.x-2,y:e.y-2,hex:e.hex,node:e},h=r;s.delete(n),i.visible=!0,t.mapSpriteProps(i,d,2);var f=c*(d.x-h.x)+h.x,p=c*(d.y-h.y)+h.y;i.x=f-2,i.y=(p-2)*l,o>=1&&(t.spriteMap[n]._data=d)}else o>=1&&u.push(e)})),o>=1&&(s.forEach((function(e){t.spriteMap[e].sprite.visible=!1})),u.length>0&&t.enter(u)),t.tweenedScale=l,t.renderPixi(),o<1&&requestAnimationFrame(i)}))}else this.enter(e)}},{key:"renderPixi",value:function(){this.renderer&&this.renderer.render(this.stage)}}]),e}());function Ne(){var e=Object(c.a)(["\n\tz-index: 2;\n\tposition: absolute;\n"]);return Ne=function(){return e},e}function Ve(){var e=Object(c.a)(["\n\tz-index: 3;\n\tposition: absolute;\n\tvisibility: hidden;\n\tmax-width: 100px;\n"]);return Ve=function(){return e},e}function Be(){var e=Object(c.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n"]);return Be=function(){return e},e}var Ke=Object(a.memo)((function(e){var t=e.data,n=e.width,r=e.height,o=e.vpWidth,c=e.vpHeight,s=e.renderer,u=e.xScale,d=e.yScale,h=e.details,f=Object(a.useRef)(null),p=be(),m=Object(l.a)(p,2),v=m[0],b=m[1];return function(e){var t=e.data,n=e.pixiInstance,i=e.renderer;Object(a.useEffect)((function(){n&&n.getRendererType()===i&&n.updateChart(t)}),[t,n,i])}({data:t,pixiInstance:function(e){var t=e.width,n=e.height,i=e.toolTipElement,r=e.containerElement,o=e.renderer,c=e.details,s=Object(a.useState)(),u=Object(l.a)(s,2),d=u[0],h=u[1],f=Object(a.useMemo)((function(){return d&&d.resize(t,n),{width:t,height:n}}),[t,n,d]);Object(a.useMemo)((function(){d&&null!==i&&d.setTooltipElement(i)}),[i,d]),Object(a.useMemo)((function(){d&&d.setTooltipDetails(c)}),[c,d]);var p=Object(a.useCallback)((function(e){if(!e&&null!==r){var t=new He(r,i,f,o);h(t)}}),[r,i,f,o]);return Object(a.useEffect)((function(){d?d.getRendererType()!==o&&(d.remove(),p()):p(d)}),[d,o,p]),d}({width:n,height:r,toolTipElement:f.current,containerElement:b,renderer:s,details:h}),renderer:s}),i.a.createElement(Ue,null,i.a.createElement(Se,{data:[],width:n,vpHeight:c,vpWidth:o,height:r,xScale:u,yScale:d,showData:!1}),i.a.createElement(Ye,{ref:v,className:"canvas-ref"}),i.a.createElement(_e,{ref:f,className:"tooltip-ref"}))})),Ue=s.b.div(Be()),_e=s.b.div(Ve()),Ye=s.b.div(Ne());function qe(){var e=Object(c.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: relative;\n\tdisplay: inline-flex;\n"]);return qe=function(){return e},e}var Je=Object(a.memo)((function(e){var t,n,r=e.data,o=e.width,c=e.height,s=e.yAxisFilter,u=e.renderer,d=e.selectedMax,h=e.details,f=function(e,t){return[Object(a.useMemo)((function(){return e-fe-pe}),[e]),Object(a.useMemo)((function(){return t-me-ve}),[t])]}(o,c),p=Object(l.a)(f,2),m=p[0],v=p[1],b=(t=s,Object(a.useMemo)((function(){switch(t){case y.coat:return S;case y.gender:return M;case y.size:return k;default:return[]}}),[t])),g=function(e,t){var n=Object(l.a)(e,2),i=n[0],r=n[1];return Object(a.useMemo)((function(){return Object(Fe.a)().domain([i,r]).range([0,t])}),[i,r,t])}((n=h,Object(a.useMemo)((function(){return n?[0,Object.keys(n).reduce((function(e,t){var a=n[t];return a.age>e&&(e=a.age),e}),0)]:[0,0]}),[n])),m),x=function(e,t){return Object(a.useMemo)((function(){return Object(Ae.a)().domain(e).range([t,me])}),[t,e])}(b,v),j=Le({data:r,yScale:x,vpHeight:v,vpWidth:m,yAxisFilter:s,selectedMax:d}),O=Object(a.useMemo)((function(){return u===q.SVG?i.a.createElement(Te,{width:o,vpHeight:v,vpWidth:m,height:c,data:j,yScale:x,xScale:g,details:h}):i.a.createElement(Ke,{width:o,vpHeight:v,vpWidth:m,height:c,data:j,renderer:u,yScale:x,xScale:g,details:h})}),[o,c,v,m,j,u,x,h,g]);return i.a.createElement(Qe,null,O)})),Qe=s.b.div(qe());function Xe(){var e=Object(c.a)(["\n\tposition: relative;\n\tdisplay: block;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(c.a)(["\n\tposition: relative;\n\tflex: 1;\n\tmargin-top: 50px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(c.a)(["\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tmin-height: 400px;\n"]);return $e=function(){return e},e}var et={overflowY:"hidden"},tt=Object(a.memo)((function(e){var t=e.data,n=e.details,r=Object(a.useState)(void 0),o=Object(l.a)(r,2),c=o[0],s=o[1],u=Object(a.useCallback)((function(e){var t=e.width,n=e.height;s({width:t,height:n})}),[s]),d=function(){var e=Object(a.useState)(q.WebGL),t=Object(l.a)(e,2),n=t[0],i=t[1];return[n,Object(a.useCallback)((function(e,t){t&&i(t.key)}),[i])]}(),h=Object(l.a)(d,2),f=h[0],p=h[1],m=function(){var e=Object(a.useState)(T),t=Object(l.a)(e,2),n=t[0],i=t[1];return[n,Object(a.useCallback)((function(e,t){if(t){var n=t.key;i(n)}}),[i])]}(),v=Object(l.a)(m,2),b=v[0],g=v[1],y=function(e){var t=Object(a.useState)(e.length),n=Object(l.a)(t,2),i=n[0],r=n[1];return{selectedMax:i,sliderSettings:Object(a.useMemo)((function(){return{min:500,max:e.length}}),[e]),onSliderChange:Object(a.useCallback)((function(e){r(e)}),[r])}}(t),x=y.selectedMax,j=y.sliderSettings,O=y.onSliderChange;return i.a.createElement(nt,null,i.a.createElement(it,null,i.a.createElement(R,null),i.a.createElement(ce,{yAxisFilter:b,onSliderChange:O,selectedMax:x,sliderSettings:j,onYDropDrownChange:g,selectedRender:f,onRendererChange:p})),i.a.createElement(at,null,i.a.createElement(he,{style:et,onResize:u},c?i.a.createElement(Je,{width:c.width,height:c.height,data:t,yAxisFilter:b,renderer:f,details:n,selectedMax:x}):i.a.createElement(i.a.Fragment,null))),i.a.createElement(I,null))})),nt=Object(s.b)(g)($e()),at=s.b.div(Ze()),it=s.b.div(Xe()),rt=n(48),ot=n.n(rt),ct=n(74);function lt(){var e=Object(c.a)(["\n\tposition: relative;\n\tdisplay: block;\n\tfont-family: 'Gaegu', cursive;\n\tmargin-left: 40%;\n\tmargin-top: 20%;\n"]);return lt=function(){return e},e}function st(){var e=Object(c.a)(["\n\tdisplay: flex;\n\tflex: 1;\n\theight: 100%;\n\twidth: 100%;\n\tfont-family: 'Gaegu', cursive;\n"]);return st=function(){return e},e}var ut=Object(a.memo)((function(){var e=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(),o=Object(l.a)(r,2),c=o[0],s=o[1];return Object(a.useMemo)(Object(ct.a)(ot.a.mark((function e(){var t;return ot.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=8;break}return e.next=3,fetch("https://raw.githubusercontent.com/ahoak/pixi-svg-visualization/main/data/dog-data.json");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,console.log(t),i(t);case 8:case"end":return e.stop()}}),e)}))),[n]),Object(a.useMemo)(Object(ct.a)(ot.a.mark((function e(){var t;return ot.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=7;break}return e.next=3,fetch("https://raw.githubusercontent.com/ahoak/pixi-svg-visualization/main/data/dog-map.json");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)}))),[c]),[n,c]}(),t=Object(l.a)(e,2),n=t[0],r=t[1];return n?i.a.createElement(dt,null,i.a.createElement(tt,{data:n,details:r})," "):i.a.createElement(ht,null,i.a.createElement("iframe",{src:"https://giphy.com/embed/gfl7CKcgs6exW",width:"480",height:"384",frameBorder:"0",className:"giphy-embed",allowFullScreen:!1,title:"talking dog"}),i.a.createElement("h1",null,"loading data... please hold \u2764 \u2764 \u2764"))})),dt=s.b.div(st()),ht=s.b.div(lt()),ft=(n(136),n(103)),pt=Object(ft.p)({defaultFontStyle:{fontFamily:"'Gaegu', cursive",fontSize:"20px"},palette:{themePrimary:"#f683ba",themeLighterAlt:"#0a0507",themeLighter:"#27151e",themeLight:"#492738",themeTertiary:"#934e6f",themeSecondary:"#d772a3",themeDarkAlt:"#f68ec0",themeDark:"#f79fca",themeDarker:"#f9b8d7",neutralLighterAlt:"#000000",neutralLighter:"#000000",neutralLight:"#000000",neutralQuaternaryAlt:"#000000",neutralQuaternary:"#000000",neutralTertiaryAlt:"#b30474",neutralTertiary:"#c8c8c8",neutralSecondary:"#d0d0d0",neutralPrimaryAlt:"#dadada",neutralPrimary:"#ffffff",neutralDark:"#f4f4f4",black:"#f8f8f8",white:"#000000"}});function mt(){var e=Object(c.a)(["\n\thtml {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tmax-height: 100%;\n\t\tmax-width: 100%;\n\t\tdisplay: flex;\n\t}\n  body {\n\t\tdisplay: flex;\n\t\tflex: 1;\n\t\tmargin: 0;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\toverscroll-behavior: none;\n\t\tmax-height: 100%;\n\t\tmax-width: 100%;\n\t}\n\t#root {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tmax-height: 100%;\n\t\tmax-width: 100%;\n\t\theight: 100%;\n\t\twidth: 100%;\n\t\tbackground: black;\n\t\tcolor: white;\n\t}\n"]);return mt=function(){return e},e}Object(ft.x)(pt);var vt=Object(a.memo)((function(){return i.a.createElement(a.StrictMode,null,i.a.createElement(bt,null),i.a.createElement(ut,null))})),bt=Object(s.a)(mt());o.a.render(i.a.createElement(vt,null),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.3c5d54e7.chunk.js.map