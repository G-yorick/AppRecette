"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73583],{373583:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var n=i(667294),a=i(545007),o=i(883119),r=i(876594),s=i(252071),l=i(785893);let c="cubic-bezier(0, 0, 0.58, 1)",p={loaded:{opacity:1,transitionDuration:"0.20s",transitionTimingFunction:c,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"},fade:{opacity:.1,transitionDuration:"0.30s",transitionTimingFunction:c,transitionProperty:"transform, opacity",transform:"translate(0, 5px)",transformOrigin:"center"}};function d({reactionLabel:e,handleHideConfirmation:t}){let[i,a]=(0,n.useState)("loaded"),r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=null,i=null;return r.current=requestAnimationFrame(()=>{e=setTimeout(()=>a("fade"),1e3),i=setTimeout(()=>t(),1300)}),function(){clearTimeout(e),clearTimeout(i)}},[]),(0,l.jsx)(o.xu,{alignItems:"center",display:"flex",justifyContent:"center",position:"relative",children:(0,l.jsx)(o.xu,{ref:r,alignItems:"center",color:"selected",dangerouslySetInlineStyle:{__style:{...p[i],whiteSpace:"nowrap"}},display:"flex",height:20,justifyContent:"center",paddingX:2,paddingY:1,position:"absolute",rounding:"pill",zIndex:new o.Ry(2),children:(0,l.jsx)(o.xv,{color:"inverse",overflow:"normal",size:"100",weight:"bold",children:e})})})}var h=i(144326),u=i(512541),g=i(104778),m=i(115642);let y={icon:{backgroundRepeat:"no-repeat",backgroundSize:"cover"},loading:{opacity:0,transitionDuration:"0.25s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1) translateZ(0) translateY(25px)",transformOrigin:"bottom"},loaded:{opacity:1,transitionDuration:"0.2s",transitionTimingFunction:"ease-out",transitionProperty:"transform, opacity",transform:"scaleX(1) scaleY(1)",transformOrigin:"bottom"},clicked:{transition:"transform 0.2s ease-out",transform:"translateY(-30px) scaleX(1.6) scaleY(1.6)",transformOrigin:"bottom",position:"relative",zIndex:1},flying:{transition:"transform 0.2s ease-out",transformOrigin:"bottom"},label:{transition:"transform 0.2s ease-out",transform:"scale(0.625)",transformOrigin:"bottom",whiteSpace:"nowrap"},fading:{opacity:0,transition:"opacity 0.2s ease-out"}},f={boxShadow:"0 9px 26px rgba(0, 0, 0, 0.4)"};function b({reactionButtonRect:e,handleReactionTrayClick:t,shouldShowReactionTrayUp:i}){let a=(0,h.ZP)(),r=(0,n.useRef)(null),[s,c]=(0,n.useState)("loading"),[p,d]=(0,n.useState)(""),[b,x]=(0,n.useState)(),{closeupWithinMasonryEnabled:_}=(0,m.x4)(),[v,S]=(0,n.useState)(!1),[w,k]=(0,n.useState)(!1),[R,T]=(0,n.useState)({}),[j]=(0,n.useState)(e),[C,A]=(0,n.useState)(-150),I=(0,n.useRef)(),E=(0,n.useRef)({}),O=r.current?.getBoundingClientRect();(0,n.useEffect)(()=>{O?.right>(window.innerWidth||document.documentElement?.clientWidth)&&(-276!==C?k(!0):k(!1),A(-276))},[O?.right,C,_]);let P=()=>{S(!0);let e={...R};g.Jg.forEach(t=>{E.current[t]&&(!e[t]||w)&&(e[t]=E.current[t].getBoundingClientRect())}),Object.keys(e).length===g.Jg.length&&T(e)},z=()=>{let e={...b};g.Jg.forEach(t=>{let i=R[t],{left:n,top:a}=j,{left:o,top:r}=i;e[t]={translateX:n-o+-8,translateY:a-r+9}}),x(e)};(0,n.useEffect)(()=>{"loading"===s&&(I.current=requestAnimationFrame(()=>c("loaded"))),P(),!b&&v&&z()},[v,C,e]);let B=()=>{"clicked"===s&&p&&(c("flying"),setTimeout(()=>{t(p)},750))},D=g.Jg.map((e,t)=>{let{staticAsset:i,animatedAsset:n,label:r,htmlStyle:c,animationStyle:d}=(0,g.fW)(e,a),h={loadedStyle:{transitionDelay:`${.08*t}s`,...y[s]},clickedStyle:{...p===e?y.clicked:y.loaded},flyingStyle:{...b&&p===e?{transform:`translateZ(0) translateX(${b[e].translateX}px) translateY(${b[e].translateY}px) scaleX(0.6) scaleY(0.6) `,...y[s]}:y.fading}},m={};return"loading"===s||"loaded"===s?m={...h.loadedStyle}:"clicked"===s?m={...h.clickedStyle}:"flying"===s&&(m={...h.flyingStyle}),(0,l.jsx)(o.xu,{alignSelf:"center",display:"flex",justifyContent:"between",children:(0,l.jsxs)(o.xu,{ref:t=>{E.current[e]=t},alignItems:"center",dangerouslySetInlineStyle:{__style:{...m}},display:"flex",justifyContent:"center",maxHeight:40,maxWidth:40,overflow:"visible",position:"relative",children:[p!==e&&(0,l.jsx)(o.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,l.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{backgroundImage:`url(${i})`,backgroundPosiiton:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},height:40,width:40})}),(0,l.jsxs)(o.xu,{alignItems:"center",direction:"column",display:"flex",justifyContent:"center",position:"relative",children:[(0,l.jsx)(u.Z,{unsafeCSS:c}),p===e&&"clicked"===s&&(0,l.jsx)(o.xu,{alignItems:"center",color:"selected",dangerouslySetInlineStyle:{__style:y.label},display:"flex",height:20,justifyContent:"center",paddingX:2,paddingY:1,rounding:"pill",children:(0,l.jsx)(o.xv,{color:"inverse",overflow:"normal",size:"100",weight:"bold",children:r})}),(0,l.jsx)("div",{onClick:B,onKeyDown:B,role:"presentation",children:(0,l.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{...y.icon,...p===e&&"clicked"===s?{animation:d}:{},backgroundImage:`url(${n})`}},display:"flex",height:40,justifyContent:"center",width:40})})]})]})},t)}),H=e=>{let t;return v&&g.Jg.forEach(i=>{let n=R[i];if(n&&n.left&&n.right){let{left:a,right:o}=n;e>=a&&e<=o&&(t=i)}}),t||null};return(0,l.jsx)(o.xu,{ref:r,alignItems:"center",dangerouslySetInlineStyle:{__style:{marginLeft:_?void 0:C,marginTop:!_&&i?-(80+j.height):0}},display:"flex",justifyContent:"center",position:_?void 0:"absolute",children:(0,l.jsx)(o.xu,{alignItems:"center",color:"flying"===s?"transparent":"default",dangerouslySetInlineStyle:{__style:{..._||"flying"===s?{}:f}},display:"flex",height:80,justifyContent:"center",onMouseMove:e=>{let{clientX:t}=e;if(r.current){let e=_?t-r.current.getBoundingClientRect().left:t;if("flying"!==s){let t=H(e);t!==p&&d(t),c("clicked")}}},rounding:"pill",width:300,children:(0,l.jsx)(o.xu,{alignItems:"center",display:"flex",justifyContent:"around",paddingX:5,width:"100%",children:D})})})}var x=i(573706),_=i(803611),v=i(989820),S=i(297728),w=i(383399),k=i(501912),R=i(801621),T=i(590045),j=i(512969);function C(e,t,i){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let A="rgba(0,0,0,0.06)";class I extends n.PureComponent{constructor(...e){super(...e),C(this,"state",{isConfirmationShowing:!1,isHoveringOverTray:!1,isReactionTrayShowing:!1,reactionButtonRect:null,active:!1}),C(this,"reactionButtonRef",(0,n.createRef)()),C(this,"trayOpenTimer",null),C(this,"trayCloseTimer",null),C(this,"isHoveringOverButton",!1),C(this,"handleExperienceMount",e=>{e&&e.complete&&(501977===e.experience_id||501995===e.experience_id)&&(this.tooltipExperience=e)}),C(this,"handleReactForAuthViewer",(e=7)=>{let{clientTrackingParams:t,pinId:i,pinUpdateReactionCount:n,reactionByMe:a}=this.props,o={pin_id:i,reaction_type:e,client_tracking_params:t,...this.props.orbacSubjectId?{orbac_subject_id:this.props.orbacSubjectId}:Object.freeze({})};a&&n(i,!1,a),n(i,!0,e),s.Z.create("ReactionsResource",o).callUpdate()}),C(this,"handleUnreactForAuthViewer",()=>{let{clientTrackingParams:e,pinId:t}=this.props,i={pin_id:t,client_tracking_params:e,...this.props.orbacSubjectId?{orbac_subject_id:this.props.orbacSubjectId}:Object.freeze({})};s.Z.create("ReactionsResource",i).callDelete()}),C(this,"setReactionButtonRect",()=>{if(this.reactionButtonRef.current&&this.reactionButtonRef.current instanceof HTMLElement){let e=this.reactionButtonRef.current.getBoundingClientRect();this.setState({reactionButtonRect:e})}}),C(this,"openTrayWithDelay",()=>{let{handleReactionTrayHover:e}=this.props;setTimeout(()=>{this.isHoveringOverButton&&(this.setState({isReactionTrayShowing:!0}),e&&e(!0),this.tooltipExperience&&this.tooltipExperience.complete&&this.tooltipExperience.complete())},1e3)}),C(this,"closeTray",()=>{let{handleReactionTrayHover:e}=this.props;this.setState({isReactionTrayShowing:!1}),e&&e(!1)}),C(this,"startTrayCloseTimer",()=>{this.trayCloseTimer&&clearTimeout(this.trayCloseTimer),this.trayCloseTimer=setTimeout(()=>{let{isHoveringOverTray:e}=this.state;e||this.isHoveringOverButton||this.closeTray()},300)}),C(this,"handleOnHoverTray",()=>{this.setState({isHoveringOverTray:!0})}),C(this,"handleExitTrayWithDelay",()=>{this.setState({isHoveringOverTray:!1}),this.startTrayCloseTimer()}),C(this,"handleClickButton",()=>{let{clientTrackingParams:e,requireAuth:t,component:i,pinId:n,pinUpdateReactionCount:a,reactionByMe:o,viewParameter:r,viewType:s,logContextEvent:l}=this.props;o?(a(n,!1,o),t?t():this.handleUnreactForAuthViewer()):this.setReaction("love"),this.closeTray(),l({event_type:101,view_type:s||3,view_parameter:r||139,...i?{component:i}:Object.freeze({}),element:11354,object_id_str:n,clientTrackingParams:e})}),C(this,"setReaction",e=>{let{requireAuth:t,i18n:i}=this.props;t?t():this.handleReactForAuthViewer((0,g.fW)(e,i).type),this.handleShowConfirmation()}),C(this,"handleShowConfirmation",()=>{this.setState({isConfirmationShowing:!0})}),C(this,"handleHideConfirmation",()=>{this.setState({isConfirmationShowing:!1},this.startTrayCloseTimer)})}componentDidMount(){this.setReactionButtonRect(),window.addEventListener("mouseover",this.setReactionButtonRect)}componentWillUnmount(){this.trayOpenTimer&&clearTimeout(this.trayOpenTimer),this.trayCloseTimer&&clearTimeout(this.trayCloseTimer),window.removeEventListener("mouseover",this.setReactionButtonRect)}render(){let{isReactionTrayShowing:e,reactionButtonRect:t,isConfirmationShowing:i}=this.state,{iconColor:n="darkGray",idealDirection:a,inCommentFooterRedesignExp:s,reactionByMe:c,shouldShowReactionTrayUp:p=!1,showBackground:h,showTooltip:u,reactionButtonSize:m,reactionIconSize:y,closeupWithinMasonryEnabled:f}=this.props,x="darkGray"===n?{hovered:{backgroundColor:"rgb(226, 226, 226)"},active:{backgroundColor:"rgb(218, 218, 218)"},iconOnly:{backgroundColor:"rgb(255,255,255)"}}:{hovered:{backgroundColor:A},active:{backgroundColor:A},iconOnly:{backgroundColor:"rgba(255,255,255,0.0)"}},_=c?g.GY[c]:"default",{staticAsset:S,label:w}=(0,g.fW)(_,this.props.i18n,n),k=e&&!!t&&!!t.left&&!!t.top&&(0,l.jsx)(b,{handleReactionTrayClick:this.setReaction,reactionButtonRect:t,shouldShowReactionTrayUp:p}),R={7:r.H3M,1:r.jRv,13:r.ePR,11:r.RfW,5:r.Uor};return(0,l.jsxs)(o.xu,{position:"relative",children:[(0,l.jsx)(o.u,{inline:!0,text:this.props.i18n.bt("Réagir", "React", "Closeup.ReactionPicker.Icon", undefined, true),zIndex:new o.Ry(2),children:(0,l.jsx)(o.iP,{ref:this.reactionButtonRef,accessibilityLabel:"reaction",dataTestId:"react-button",onBlur:()=>{this.setState({active:!1})},onMouseEnter:()=>{this.isHoveringOverButton=!0,this.setState({active:!0}),this.props.checkExperiment("ce_dweb_pin_reaction_simplification").anyEnabled||this.openTrayWithDelay()},onMouseLeave:()=>{this.isHoveringOverButton=!1,this.setState({active:!1}),this.startTrayCloseTimer()},onTap:this.handleClickButton,rounding:"circle",children:(0,l.jsx)(o.xu,{color:h?"secondary":s&&!f?"default":"transparent",dangerouslySetInlineStyle:{__style:s?{...this.state.active?{backgroundColor:"#E9E9E9"}:{}}:{...this.state.active?x.active:{},backgroundColor:c?R[c]:void 0}},rounding:"circle",children:(0,l.jsx)(o.kC,{alignItems:"center",justifyContent:"center",minHeight:m,minWidth:m,children:(0,l.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosiiton:"center",backgroundImage:`url(${S})`}},display:"flex",height:y,justifyContent:"center",width:y})})})})}),u&&!e&&!i&&(0,l.jsx)(v.mc,{anchor:this.reactionButtonRef.current,experienceIds:[501977,501995],flyoutSize:"sm",idealDirection:"down",onExperienceMount:this.handleExperienceMount,placementId:12}),e&&!!t&&!!t.left&&!!t.top&&(0,l.jsx)(o.kC,{alignItems:"center",justifyContent:"center",children:(0,l.jsx)(o.Le,{top:0,children:(0,l.jsx)(o.iP,{onMouseEnter:this.handleOnHoverTray,onMouseLeave:this.handleExitTrayWithDelay,onTap:this.handleExitTrayWithDelay,children:f?(0,l.jsx)(o.mh,{zIndex:new o.Ry(T.rv),children:(0,l.jsx)(o.J2,{__overflow:"visible",anchor:this.reactionButtonRef.current,idealDirection:a,onDismiss:this.closeTray,positionRelativeToAnchor:!1,size:"xl",children:k})}):k})})}),!f&&i&&!!c&&w&&(0,l.jsx)(d,{handleHideConfirmation:this.handleHideConfirmation,reactionLabel:w})]})}}function E(e){let{logContextEvent:t}=(0,x.v)(),i=(0,h.ZP)(),n=(0,_.Z)(),o=(0,k.Z)(),r=(0,w.Z)(),s=(0,R.lJ)(r,o),c=(0,a.I0)(),{closeupWithinMasonryEnabled:p}=(0,m.x4)(),{checkExperiment:d}=(0,S.F)();return(0,l.jsx)(I,{...e,checkExperiment:d,closeupWithinMasonryEnabled:p,i18n:i,logContextEvent:t,orbacSubjectId:s,pinUpdateReactionCount:(e,t,i)=>c((0,j.fA)(e,t,i)),requireAuth:n})}C(I,"defaultProps",{reactionButtonSize:44,reactionIconSize:24})},104778:(e,t,i)=>{i.d(t,{GY:()=>v,Jg:()=>_,fW:()=>S});var n=i(184508),a=i(147916),o=i(167361),r=i(697031),s=i(404247),l=i(836866),c=i(620668),p=i(86119),d=i(753873),h=i(873774),u=i(479197),g=i(110099),m=i(244892),y=i(485846),f=i(461471),b=i(662502),x=i(239784);let _=["goodIdea","love","thanks","wow","haha"],v={7:"goodIdea",1:"love",13:"thanks",11:"wow",5:"haha"},S=(e,t,i="darkGray")=>{let _={default:{staticAsset:"white"===i?u:h},goodIdea:{staticAsset:o,animatedAsset:n,gridAsset:a,label:t.bt("Bonne idée !", "Good idea", "Reaction label to tell a creator that their pin is a good idea", undefined, true),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:7},haha:{staticAsset:l,animatedAsset:r,gridAsset:s,label:t.bt("Haha", "Haha", "Reaction label to tell a creator that the pinner laughed because of their pin", undefined, true),htmlStyle:`
    @keyframes play60 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -2400px 0px;
        }
    }
    `,animationStyle:"play60 2000ms steps(60) infinite forwards",type:5},love:{staticAsset:d,animatedAsset:c,gridAsset:p,label:t.bt("J’adore", "Love", "Reaction label to tell a creator that the pinner loved their pin", undefined, true),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:1},thanks:{staticAsset:y,animatedAsset:g,gridAsset:m,label:t.bt("Merci", "Thanks", "Reaction label to tell a creator thank you", undefined, true),htmlStyle:`
    @keyframes play60 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -2400px 0px;
        }
    }
    `,animationStyle:"play60 2000ms steps(60) infinite forwards",type:13},wow:{staticAsset:x,animatedAsset:f,gridAsset:b,label:t.bt("Waouh !", "Wow", "Reaction label to tell a creator that the pinner was wowed by their pin", undefined, true),htmlStyle:`
    @keyframes play90 {
        0% {
        background-position: 0px 0px;
        }
        100% {
        background-position: -3600px 0px;
        }
    }
    `,animationStyle:"play90 3000ms steps(90) infinite forwards",type:11}};return _[e]||_.default}},512969:(e,t,i)=>{i.d(t,{G3:()=>d,Gy:()=>p,Ps:()=>l,fA:()=>h,xQ:()=>c});var n=i(782677),a=i(252071),o=i(338623),r=i(517989);function s(e,t,i){return{type:"UPDATE_PIN_REACTION_COUNT",payload:{increment:t,reactionType:i,pinId:e}}}function l(e,t){return s(e,!1,t)}function c(e,t){return s(e,!0,t)}let p=(e,t,i,s,l)=>c=>{let p={pin_id:e,user_id:s,reaction_type:t,reaction_pin_id:i,action_type:"reaction",client_tracking_parameters:l},d="ReactionsResource";return a.Z.create(d,p).callUpdate().then(e=>{let t=(0,n.Fv)(e.resource_response.data,r.Z[d]);c((0,o.XM)(d,p,e,t))})},d=(e,t,i,s)=>l=>{let c={pin_id:e,user_id:i,reaction_pin_id:t,action_type:"unreaction",client_tracking_parameters:s},p="ReactionsResource";return a.Z.create(p,c).callDelete().then(e=>{let t=(0,n.Fv)(e.resource_response.data,r.Z[p]);l((0,o.XM)(p,c,e,t))})};function h(e,t,i){return{type:"PIN_UPDATE_REACTION_COUNT",payload:{id:e,increment:t,reactionType:i}}}},184508:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaAnimated-5de05cb7.svg"},147916:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaGrid-e3e37a7f.svg"},167361:e=>{e.exports="https://s.pinimg.com/webapp/goodIdeaStatic-855554b0.svg"},697031:e=>{e.exports="https://s.pinimg.com/webapp/hahaAnimated-df9cb2fa.svg"},404247:e=>{e.exports="https://s.pinimg.com/webapp/hahaGrid-7945c718.svg"},836866:e=>{e.exports="https://s.pinimg.com/webapp/hahaStatic-28ee6e1e.svg"},620668:e=>{e.exports="https://s.pinimg.com/webapp/loveAnimated-ccd5b808.svg"},86119:e=>{e.exports="https://s.pinimg.com/webapp/loveGrid-1ec7b8e4.svg"},753873:e=>{e.exports="https://s.pinimg.com/webapp/loveStatic-31fc2a99.svg"},873774:e=>{e.exports="https://s.pinimg.com/webapp/reactionHeartOutline-24ab75a6.svg"},479197:e=>{e.exports="https://s.pinimg.com/webapp/reactionHeartOutlineWhite-61cdbdb7.svg"},110099:e=>{e.exports="https://s.pinimg.com/webapp/thanksAnimated-6831daf3.svg"},244892:e=>{e.exports="https://s.pinimg.com/webapp/thanksGrid-b3cf8b93.svg"},485846:e=>{e.exports="https://s.pinimg.com/webapp/thanksStatic-51f19932.svg"},461471:e=>{e.exports="https://s.pinimg.com/webapp/wowAnimated-b776449f.svg"},662502:e=>{e.exports="https://s.pinimg.com/webapp/wowGrid-9e62e75a.svg"},239784:e=>{e.exports="https://s.pinimg.com/webapp/wowStatic-d966adbd.svg"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73583.fr-2a0bae0cd3ab359c.mjs.map