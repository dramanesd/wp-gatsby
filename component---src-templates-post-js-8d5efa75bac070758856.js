(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(156),l=a.n(o),d=a(154),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.wordpressPost,t=e.featured_media.localFile.childImageSharp.resolutions;console.log(t);var a="",r="";return null!==e.acf&&(""!==e.acf.facebook&&(a="<h3>Facebook</h3> "+e.acf.facebook),""!==e.acf.twitter&&(r="<h3>Twitter</h3> "+e.acf.twitter)),s.a.createElement(d.a,null,s.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),t&&s.a.createElement("div",null,s.a.createElement(l.a,{resolutions:t}),s.a.createElement("img",{src:t.src,alt:"Feature Image"})),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))},t}(n.Component);t.default=u;var c="2201172718"},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(151);var d=i.a.createContext({}),u=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby - Wordpress"}},allWordpressWpApiMenusMenusItems:{edges:[{node:{id:"0e61e768-2db9-5357-bb3a-211e538aa060",name:"Main menu",items:[{title:"Sample Page",url:"/sample-page",object_slug:"sample-page"},{title:"Home Page",url:"/",object_slug:"hame-page"},{title:"Hello",url:"/post/hello-world",object_slug:"hello-2"}]}}]}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},154:function(e,t,a){"use strict";var r=a(152),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(150),d=function(e){var t=e.siteTitle;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var u=d,c=a(7),f=a.n(c),p=a(33),h=a.n(p),g=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items;return console.log(e),n.a.createElement("div",null,n.a.createElement("h1",null,"Main Menu"),n.a.createElement("ul",null,e.map(function(e){return n.a.createElement("li",{key:e.object_slug},n.a.createElement(h.a,{to:e.url},e.title))})))},t}(i.Component),m=(a(155),function(e){var t=e.children;e.data;return n.a.createElement(l.b,{query:"1854380685",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.a.createElement(g,{menu:e}),n.a.createElement("main",null,t),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:r})});m.propTypes={children:o.a.node.isRequired};t.a=m},156:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(74)),l=r(a(75)),d=r(a(0)),u=r(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+r+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+i+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.nativeLazyLoadSupported,f=e.loading,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),h={};return c&&(h.loading=f),d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t},h,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(r=!0,o=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var u=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:n,hasNoScript:u,seenBefore:l,nativeLazyLoadSupported:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,E=e.itemProp,w=(e.critical,c(this.props).loading);var L=this.state.nativeLazyLoadSupported,I=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:I?1:0,transition:R?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,M={transitionDelay:v+"ms"},O=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&M,o,f),W={title:t,alt:this.state.isVisible?"":a,style:O,className:p};if(h){var _=h;return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&M)}),_.base64&&d.default.createElement(y,(0,l.default)({src:_.base64},W)),_.tracedSVG&&d.default.createElement(y,(0,l.default)({src:_.tracedSVG},W)),this.state.isVisible&&d.default.createElement("picture",null,_.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:w},_))}}))}if(g){var j=g,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},R&&M)}),j.base64&&d.default.createElement(y,(0,l.default)({src:j.base64},W)),j.tracedSVG&&d.default.createElement(y,(0,l.default)({src:j.tracedSVG},W)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:w},j))}}))}return null},t}(d.default.Component);b.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-templates-post-js-8d5efa75bac070758856.js.map