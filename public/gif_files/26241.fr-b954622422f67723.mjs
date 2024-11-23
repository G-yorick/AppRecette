"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[26241],{440929:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ShoppingModulePreviewImages_story",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"objects",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"236x")'}],type:"Pin",abstractKey:null}],storageKey:null}],type:"Story",abstractKey:null};n.hash="d06bcbcd23746aa04d9f42cb2af2084d";let l=n},870863:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(667294),l=i(883119),r=i(788388),o=i(297728),a=i(609073),s=i(597544),d=i(785893);function c(e){let t=(0,n.useRef)(null),i=t.current?.clientWidth??void 0,r={...e,width:i};return(0,d.jsx)(l.xu,{ref:t,children:(0,d.jsx)(s.Z,{largeSizeRep:(0,d.jsx)(a.default,{...r,contentVisibleItemCountOverride:3.5}),mediumSizeRep:(0,d.jsx)(a.default,{...r,contentVisibleItemCountOverride:3.5}),smallSizeRep:(0,d.jsx)(a.default,{...r,contentVisibleItemCountOverride:2.5})})})}function u(e){let{auxData:t,contentIds:i,story:n,slotIndex:s,viewParameter:u,viewType:_,...p}=e,h=(0,r.Z)({clientTrackingParams:n?.tracking_params,componentType:n?.display_options?.content_display?.component_type,contextLogData:{content_ids:i??n?.objects?.map(({type:e,id:t})=>`${e??""}:${t??""}`).join("|"),grid_index:s,story_id:n?.id,story_type:n?.story_type,total_object_count:n?.objects?.length,...t},impressionType:"Story",loggingId:n?.id,objectIdStr:n?.id,slotIndex:s,viewParameter:u,viewType:_}),{checkExperiment:x}=(0,o.F)(),g=n?.story_type==="recently_viewed"&&x("web_recently_viewed_responsive").anyEnabled,y={...p,initialSlotIndex:0,story:n,view:_,viewParameter:u};return n?(0,d.jsx)(l.xu,{ref:h,children:g?(0,d.jsx)(c,{...y,storyKey:{type:"deprecated",data:n}}):(0,d.jsx)(a.default,{...y,storyKey:{type:"deprecated",data:n}})}):null}},157114:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var n=i(616550),l=i(883119),r=i(703740),o=i(785893);function a({slotIndex:e,story:t}){return(0,o.jsx)(r.Z,{isInViewOrNext:!0,item:t.objects?.[0],slotIndex:e,story:t})}function s({story:e}){return(0,o.jsxs)(l.xu,{marginBottom:6,children:[(0,o.jsx)(l.xv,{align:"center",size:"500",weight:"bold",children:e.title?.format}),e.objects?.map((t,i)=>o.jsx(l.xu,{marginTop:4,children:o.jsx(r.Z,{component:14269,isInViewOrNext:!0,item:t,slotIndex:i,story:e,view:1,viewParameter:null})},i))]})}var d=i(870863),c=i(667294),u=i(989820),_=i(564893),p=i(480041),h=i(827106);let x=(0,i(179735).Z)(()=>Promise.all([i.e(97270),i.e(93041),i.e(88782),i.e(95813)]).then(i.bind(i,99773)),void 0,"app-www-video-VideoWrapper"),g={defaultOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function y({titleText:e,videoPin:t,videoPlaceholderImage:i}){return(0,o.jsx)(x,{aspectRatio:p.q4,captions:"",controls:!1,fallback:(0,o.jsx)(l.Ee,{alt:e||"",color:"rgb(111, 91, 77)",fit:"cover",naturalHeight:3,naturalWidth:2,src:i||t.metadata.thumbnail}),isAutoPlay:!0,loop:!0,onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:i||t.metadata.thumbnail,src:t.url,volume:0})}function m({buttonAction:e,buttonCustomization:t,buttonText:i,experience:n,hideCompleteButton:r,imageAlt:a,imageUrl:s,openNewTab:d,storyType:x,titleColor:m,titleText:v,titleTextCustomization:f,videoPin:b,videoPlaceholderImage:j}){let[w,S]=(0,c.useState)(!1),{experience_id:P,placement_id:k}=n||{},I=(0,u.oS)(k),z=(0,h.Z)({onVisibilityChanged:e=>{e&&n&&"viewed"!==n.status&&void 0!==k&&void 0!==P&&(n.status="viewed",I.viewExperience(k,P,!1,!0))}}),C=()=>{n&&I.completeExperience(k,P,!1,!0)},T=()=>{S(!0)},A=()=>{S(!1)},F="feed_card_video"===x?354:315,Z=(0,p.zn)(x),E=Z?_.f8:_.hm,R=Z?_.sH:_.HI,{color:M,fontSize:B,fontStyle:D,fontWeight:H,horizontalAlignment:O}=(0,p.Mf)(f||{},"web");return(0,o.jsxs)(l.xu,{ref:z,position:"relative",children:[(0,o.jsx)(l.xu,{onMouseEnter:T,onMouseLeave:A,children:(0,o.jsxs)(l.rU,{accessibilityLabel:v,href:e,onBlur:A,onClick:C,onFocus:T,target:d?"blank":null,underline:"none",children:[(0,o.jsxs)(l.xu,{dangerouslySetInlineStyle:{__style:{paddingBottom:`${F/236*100}%`,WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},overflow:"hidden",position:"relative",rounding:4,width:"100%",children:[(0,o.jsx)(l.xu,{height:"100%",position:"absolute",rounding:4,width:"100%",children:"feed_card_video"===x&&b?(0,o.jsx)(y,{titleText:v,videoPin:b,videoPlaceholderImage:j}):s&&(0,o.jsx)(l.Ee,{alt:a||"",color:"rgb(111, 91, 77)",fit:"cover",naturalHeight:4,naturalWidth:3,src:s})}),!Z&&(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:w?g.hoverOverlay:g.defaultOverlay},height:"100%",left:!0,position:"absolute",top:!0,width:"100%"}),(0,o.jsx)(E,{children:(0,o.jsx)(l.xv,{align:O,color:m,italic:"italics"===D,weight:H,children:(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{color:M??void 0,fontSize:B}},children:v})})})]}),!r&&Z&&(0,o.jsx)(R,{children:(0,o.jsx)(l.zx,{color:(0,p.pQ)(t),text:i})})]})}),!Z&&(0,o.jsx)(R,{children:(0,o.jsx)(l.ZP,{accessibilityLabel:i,color:"gray",fullWidth:!0,href:e,onClick:C,size:"lg",text:i})})]})}var v=i(545007),f=i(573706),b=i(801925);function j({experienceId:e,copy:{buttonText:t,subtitleText:i,titleText:r},path:a,pins:s,placementId:d}){let{logContextEvent:u}=(0,f.v)(),_=(0,v.I0)(),p=(0,n.k6)(),h=(0,b.Ig)(),x=(0,b.be)();(0,c.useEffect)(()=>{u({event_type:13,view_type:1,view_parameter:92,component:200,element:10551}),_(h(d,e,!1,!0))},[]);let g=(e,t)=>{let{height:i,url:n,width:r}=e.images.orig;return(0,o.jsx)(l.xu,{marginStart:0===t?0:2,children:(0,o.jsx)(l.zd,{height:72,rounding:2,width:48,children:(0,o.jsx)(l.Ee,{alt:"",color:"",fit:"cover",naturalHeight:i,naturalWidth:r,src:n})})},e.id)};return(0,o.jsxs)(l.kC,{alignItems:"stretch",dataTestId:"story-landing-page-card",direction:"column",flex:"grow",justifyContent:"start",children:[(0,o.jsx)(l.xu,{paddingY:1,children:(0,o.jsx)(l.X6,{align:"center",size:"400",children:r})}),(0,o.jsx)(l.xu,{paddingY:1,children:(0,o.jsx)(l.xv,{align:"center",children:i})}),(0,o.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:1,paddingY:2,children:s&&s.map((e,t)=>g(e,t))}),(0,o.jsx)(l.xu,{alignSelf:"center",paddingY:2,children:(0,o.jsx)(l.zx,{fullWidth:!0,onClick:()=>{_(x(d,e,!1,!0)),u({event_type:101,view_type:1,view_parameter:92,component:200,element:10551}),p.push(a)},size:"lg",text:t})})]})}var w=i(788388),S=i(135296),P=i(297728),k=i(296209),I=i(117428),z=i(868808),C=i(212515),T=i(453854);let A=e=>{if(!e)return 0;let t=114/(e.width??1);return Math.floor((e.height??1)*t)};function F({auxData:e,objects:t,text:i,url:n,viewParameterType:r,viewType:a}){let s=!i||!n||!t,{logContextEvent:d}=(0,f.v)(),u={aux_data:e,component:15111,view_parameter:r,view_type:a},_=(0,c.useMemo)(()=>{let e=t?.map(e=>e.cover_images?.[0]?.["236x"]).filter(Boolean).slice(0,9);return e?[{type:"spacer"},e[0],{type:"spacer"},...e.slice(1,9),e[0],e[1],e[2]]:[]},[t]);if(s)return null;let p=(()=>{let e=i.length>33?294:i.length>22?252:i.length>11?274:299;return Math.abs(e/2-(A(_[1])+12+A(_[6])/2))})();return(0,o.jsx)(C.Z,{log:u,children:(0,o.jsx)(T.q,{children:({hovered:e,onMouseEnter:t,onMouseLeave:r})=>(0,o.jsx)(l.rU,{accessibilityLabel:i,href:n,onBlur:r,onClick:()=>{d({...u,event_type:101})},onFocus:t,underline:"none",children:(0,o.jsxs)(l.xu,{dangerouslySetInlineStyle:{__style:{border:"2px solid #E9E9E9"}},height:i.length>33?420:354,onMouseEnter:t,onMouseLeave:r,overflow:"hidden",position:"relative",rounding:4,children:[(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{left:"-18%",top:`-${p}px`}},position:"absolute",width:"133%",zIndex:new l.Ry(-1),children:(0,o.jsx)(l.Rk,{gutterWidth:12,items:_,layout:"flexible",minCols:3,renderItem:({data:e})=>{if("spacer"===e.type)return(0,o.jsx)(l.xu,{height:19});if(!e)return null;let t=A(e);return(0,o.jsx)(l.zd,{height:t,rounding:2,wash:!0,width:"100%",children:(0,o.jsx)(l.xu,{height:t,width:"100%",children:(0,o.jsx)(l.Ee,{alt:"",color:e.dominant_color||"transparent",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:e.url||""})})})}})}),(0,o.jsx)(l.xu,{bottom:!0,position:"absolute",width:"100%",children:(0,o.jsx)(l.xu,{color:"default",paddingX:4,paddingY:8,children:(0,o.jsx)(l.xv,{color:"dark",lineClamp:3,size:"500",weight:"bold",children:i})})}),(0,o.jsx)(l.xu,{color:"dark",dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},height:"100%",opacity:e?.4:0,position:"absolute",top:!0})]})})})})}var Z=i(876594),E=i(637544),R=i(415787);let M=[Z.odg,Z.C9E,Z.sgC,Z.Uor,Z.jRv],B=Z.jRv,D={border:`1px solid ${Z.k95}`,height:110,width:80},H=e=>M[e.split("").map(e=>e.charCodeAt(0)).reduce((e,t)=>e+t,0)%M.length]??B;function O({auxData:e,objects:t,text:i,url:n,viewParameterType:r,viewType:a}){let s=!i||!n||!t||t.length<4,{logContextEvent:d}=(0,f.v)();if((0,c.useEffect)(()=>()=>{s&&(0,R.nP)("webapp.relatedQueryShopUpsell.missingRenderData",{tags:{uiVariant:"enabled_thumbnails",hasText:!!i,hasUrl:!!n,hasObjects:!!t,hasEnoughObjects:t?.length>=4}})},[s,t,i,n]),s)return null;let u={aux_data:e,component:15111,view_parameter:r,view_type:a},_=e=>({...u,aux_data:{...u.aux_data,cta_type:e},event_type:101}),p=t?.map((e,t)=>{let i=e.cover_images?.[0];return i?E.Z({imageSizeToImageMap:i,preferredSize:0===t?"564x":"170x"}):null}).filter(Boolean).slice(0,4),h=p[0],x=p.slice(1,4),g=H(i);return(0,o.jsx)(C.Z,{log:u,children:(0,o.jsx)(T.q,{children:({hovered:e,onMouseEnter:t,onMouseLeave:r})=>(0,o.jsx)(l.rU,{accessibilityLabel:i,href:n,onBlur:r,onFocus:t,underline:"none",children:(0,o.jsxs)(l.xu,{onMouseEnter:t,onMouseLeave:r,overflow:"hidden",paddingY:6,position:"relative",rounding:4,children:[(0,o.jsx)(l.xu,{height:300,left:!0,position:"absolute",right:!0,rounding:4,top:!0,zIndex:new l.Ry(-1),children:(0,o.jsx)(l.Ee,{alt:"",color:h?.dominant_color||"transparent",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:h?.url||"",children:(0,o.jsx)(l.zd,{height:"100%",rounding:4,wash:!0,width:"100%",children:(0,o.jsx)(l.xu,{height:"100%",rounding:4,width:"100%"})})})}),(0,o.jsx)(l.xu,{bottom:!0,dangerouslySetInlineStyle:{__style:{background:`linear-gradient(to bottom, transparent 0px, transparent
                    212px, ${g} 280px)`}},left:!0,position:"absolute",right:!0,rounding:4,top:!0,zIndex:new l.Ry(-1)}),(0,o.jsx)(l.iP,{onTap:()=>{d(_("main_image"))},tabIndex:-1,tapStyle:"none",children:(0,o.jsx)(l.xu,{height:200})}),(0,o.jsx)(l.xu,{marginEnd:-1,marginStart:-1,children:(0,o.jsx)(l.kC,{height:110,justifyContent:"center",children:(0,o.jsx)(l.kC,{gap:{column:0,row:2},justifyContent:"center",width:256,children:x.map(({url:e,dominant_color:t},i)=>(0,o.jsx)(l.iP,{onTap:()=>{d(_(`thumbnail_${i+1}`))},tabIndex:-1,tapStyle:"none",children:(0,o.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:D},overflow:"hidden",rounding:2,children:(0,o.jsx)(l.Ee,{alt:"",color:t||"transparent",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:e||"",children:(0,o.jsx)(l.zd,{height:D.height,wash:!0,width:D.width,children:(0,o.jsx)(l.xu,{height:D.height,width:D.width})})})})},e))})})}),(0,o.jsx)(l.iP,{onTap:()=>{d(_("text"))},tabIndex:-1,tapStyle:"none",children:(0,o.jsx)(l.xu,{marginEnd:4,marginStart:4,marginTop:6,children:(0,o.jsx)(l.xv,{color:"dark",lineClamp:4,size:"600",weight:"bold",children:i})})}),(0,o.jsx)(l.xu,{bottom:!0,color:"dark",dangerouslySetInlineStyle:{__style:{pointerEvents:"none"}},height:"100%",left:!0,opacity:e?.4:0,position:"absolute",right:!0,top:!0})]})})})})}let W={blended_modules_topic_pin_grid_article:14103,related_query_shop_upsell_search:15111,related_query_shop_upsell_closeup:15111},L={135:14269,136:14268};function N(e){let{checkExperiment:t}=(0,P.F)(),{search:i}=(0,n.TH)(),{component:r,isEggsUi:c,itemIdx:u,saveButtonOptions:_,story:h,surface:x,viewType:g,viewParameter:y}=e,{story_type:v,container_type:f}=h,b=(0,w.Z)({clientTrackingParams:h.tracking_params,componentType:v&&W[v]||"number"==typeof f&&L[f]||void 0,contextLogData:{content_ids:h?.objects?.map(({type:e,id:t})=>`${e??""}:${t??""}`).join("|"),story_id:h.id,story_type:h.story_type,total_object_count:h?.objects?.length,...h.aux_fields??{}},impressionType:"Story",loggingId:h.id,objectIdStr:h?.id,slotIndex:u,viewParameter:y,viewType:g});switch(h.container_type){case 41:let{copy:C,custom_properties:T,experience:A,objects:Z}=h;return(0,o.jsx)("div",{className:"Module","data-test-id":"story-card-container",children:(0,o.jsx)(j,{copy:(0,S.Z)(k.Z)(C),experienceId:A.experience_id,path:T?.path,pins:Z,placementId:A.placement_id})});case 66:{let{action:e,custom_properties:n,display_options:r,experience:a,objects:s,story_type:d,title:c}=h;if(!["related_query_shop_upsell_search","related_query_shop_upsell_closeup"].includes(d||""))return(0,o.jsx)("div",{ref:b,className:"Module",children:(0,o.jsx)(m,{buttonAction:e?.url,buttonCustomization:n.button_customization,buttonText:e?.text,experience:a,hideCompleteButton:n.hide_complete_button,imageAlt:n.image_alt,imageUrl:n.image,openNewTab:n.open_new_tab,storyType:d,titleColor:(0,p.h_)(n,r.title_text_color),titleText:c.format,titleTextCustomization:n.title_text_customization,videoPin:n.video_pin,videoPlaceholderImage:n.video_placeholder_image})});{let{anyEnabled:n,group:r}=t("related_query_shop_upsell_search"===d?"shopping_unit_search":"shopping_unit_closeup",{dangerouslySkipActivation:!0});if(!n)return null;let a=z.mB(i)?.q,_={auxData:{content_ids:(h.content_ids||[]).map(e=>`${s?.[0].type}:${e}`).join("|"),...a?{entered_query:a}:{},grid_index:u,story_id:h.id,story_index:u,story_type:d},objects:s,text:c?.format,url:e?.url,viewParameterType:y,viewType:g},p=(0,o.jsx)(l.xu,{ref:b,children:(0,o.jsx)(F,{..._})});if("related_query_shop_upsell_search"!==d)return p;if(r.startsWith("enabled_frontend_v_five")||r.startsWith("employees"))return(0,o.jsx)(l.xu,{ref:b,children:(0,o.jsx)(O,{..._})});if(r.startsWith("enabled_frontend_v_one"))return p;return null}}case 135:return(0,o.jsx)("div",{ref:b,className:"Module",children:(0,o.jsx)(s,{slotIndex:u,story:h})});case 136:return(0,o.jsx)("div",{ref:b,className:"Module",children:(0,o.jsx)(a,{slotIndex:u,story:h})});case 90:let E=2===h.display_options.content_display.pins_display;return(0,o.jsx)("div",{className:"Module",children:(0,o.jsx)(d.Z,{component:r,gutterWidth:E?8:void 0,isEggsUi:c,saveButtonOptions:_,slotIndex:u,story:h,styleOverrides:{headerMarginTop:5,headerMarginX:7,carouselPaddingX:18,carouselContainerMarginBottom:1,navigationFabOpacity:1,navigationFabSize:40},surface:x,viewParameter:y,viewType:g})});case 91:if(("blended_module_type_topics_board_recs"===h.story_type||"board_style_pivot"===h.story_type)&&h.objects[0].cover_images.length>=4){let e={item:{action:h.action,cover_images:h.objects[0].cover_images,dominant_colors:h.objects[0].dominant_colors,title:h.title,subtitle:h.subtitle,type:"explorearticle"},slotIndex:u,story:h,view:g,viewParameter:y};return(0,o.jsx)("div",{className:"Module",children:(0,o.jsx)(I.Z,{...e})})}return null;default:return null}}},501313:(e,t,i)=>{i.d(t,{Z:()=>x});var n=i(883119),l=i(645258),r=i(479110),o=i(144326),a=i(785893);function s(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-brand-filter",onClick:()=>{i(0),t([{key:"brands",value:""}])},text:e.bt("Supprimer les marques", "Remove brands", "AuthSearchPage.PinsNotFoundShoppingFilter.RemoveBrandsFilter", undefined, true)})}function d(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-brand-value-filter",onClick:()=>{i(0),t([{key:"brand_value",value:""}])},text:e.bt("Supprimer les valeurs de la marque", "Remove brand values", "AuthSearchPage.PinsNotFoundShoppingFilter.RemoveBrandValueFilter", undefined, true)})}function c(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-retailer-filter",onClick:()=>{i(0),t([{key:"domains",value:""}])},text:e.bt("Supprimer les détaillants", "Remove retailers", "AuthSearchPage.PinsNotFoundShoppingFilter.RemoveRetailerFilter", undefined, true)})}function u(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-on-sale-filter",onClick:()=>{i(0),t([{key:"on_sale",value:""}])},text:e.bt("Supprimer le filtre « En promotion »", "Remove on sale", "AuthSearchPage.PinsNotFoundShoppingFilter.RemoveOnSaleFilter", undefined, true)})}function _(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-price-range-filter",onClick:()=>{i(0),t([{key:"price_min",value:""},{key:"price_max",value:""}])},text:e.bt("Supprimer le prix", "Remove price", "AuthSearchPage.PinsNotFoundShoppingFilter.RemovePriceRangeFilter", undefined, true)})}function p(){let e=(0,o.ZP)(),t=(0,r.Z)(),i=(0,l.Z)();return(0,a.jsx)(n.zx,{dataTestId:"remove-all-filters",onClick:()=>{i(0),t(r.q.map(e=>({key:e,value:""})))},text:e.bt("Effacer tous les filtres", "Clear all filters", "AuthSearchPage.PinsNotFoundShoppingFilter.RemoveProductsFilter", undefined, true)})}var h=i(847881);function x(){let{brands:e,commerceOnly:t,domains:i,onSale:l,priceMax:r,brandValue:o}=(0,h.b)();return(0,a.jsxs)(n.kC,{alignItems:"center",direction:"column",gap:4,justifyContent:"center",children:[(0,a.jsxs)(n.kC,{gap:2,wrap:!0,children:[l&&(0,a.jsx)(u,{}),r&&(0,a.jsx)(_,{}),e&&(0,a.jsx)(s,{}),o&&(0,a.jsx)(d,{}),i&&(0,a.jsx)(c,{})]}),t&&(0,a.jsx)(p,{})]})}},26495:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(239763),l=i(14488),r=i(942052),o=i(799328),a=i(473599),s=i(832442),d=i(616550),c=i(297728),u=i(868808),_=i(383399),p=i(435881);function h(){let e=(0,n.Z)(),t=(0,l.Z)(),i=(0,r.Z)(),h=(0,o.Z)(),x=(0,a.Z)(),g=(0,s.Z)(),y=function(){let{checkExperiment:e}=(0,c.F)(),t=(0,d.TH)(),i=(0,_.Z)(),{isAuth:n}=i,l=n?i.country:"",{commerce_only:r}=(0,u.mB)(t.search);return!!r&&("US"===l||!!e("hundred_percent_product_load_i8n",{dangerouslySkipActivation:!0}).anyEnabled)}(),m=(0,p.Z)();return e||t||i||h||x||g||y||m}},500262:(e,t,i)=>{i.d(t,{Z:()=>v});var n=i(667294),l=i(883119),r=i(876594),o=i(144326),a=i(406850),s=i(785893);function d({anchor:e,children:t,color:i}){return(0,s.jsx)(l.xu,{ref:e,alignItems:"center",color:i,dangerouslySetInlineStyle:{__style:{paddingRight:"16px",borderRadius:"0 0 16px 16px",border:`1px solid ${r._VP}`}},direction:"row",display:"flex",justifyContent:"between",padding:1,position:"relative",children:t})}function c({anchor:e,children:t,color:i}){return(0,s.jsx)(l.xu,{ref:e,color:i,dangerouslySetInlineStyle:{__style:{background:"#F5F4EDCC",padding:"3px 6px"}},rounding:2,children:t})}function u({active:e,anchor:t,ctaText:i,hovered:r,onBlur:u,onFocus:_,onMouseDown:p,onMouseEnter:h,onMouseLeave:x,onMouseUp:g,onTap:y,story:m}){let v=(0,o.ZP)(),f=!!i,b=()=>(0,s.jsx)(l.JO,{accessibilityLabel:v.bt("Découvrez des produits à décorer avec ce look.", "Discover products to style with this look.", "ShoppingModulePopover.DropdownIcon", undefined, true),color:"default",icon:"arrow-down",size:f?10:12}),j=()=>(0,s.jsx)(a.Z,{imageOverlapMargin:f?-3:-4,imageRounding:f?2:3,imageSize:f?30:48,storyKey:{type:"deprecated",data:m}});return(0,s.jsx)(l.xu,{marginTop:f?2:0,children:(0,s.jsx)(l.iP,{onBlur:u,onFocus:_,onKeyDown:p,onMouseDown:p,onMouseEnter:h,onMouseLeave:x,onMouseUp:g,onTap:y,children:(0,s.jsx)(f?c:d,{anchor:t,color:e||r?"secondary":"default",children:f?(0,s.jsxs)(l.kC,{alignItems:"center",gap:3,justifyContent:"between",children:[i&&(0,s.jsx)(l.xv,{lineClamp:1,size:"100",children:i}),(0,s.jsxs)(l.kC,{alignItems:"center",children:[(0,s.jsx)(l.xu,{direction:"row",display:"flex",marginEnd:1,children:j()}),(0,s.jsx)(l.xu,{marginEnd:1,children:b()})]})]}):(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(l.xu,{direction:"row",display:"flex",marginEnd:2,children:j()}),b()]})})})})}function _({active:e,hovered:t,onBlur:i,onFocus:n,onMouseDown:r,onMouseEnter:d,onMouseLeave:c,onMouseUp:u,imageHeight:_,onTap:p,anchor:h,story:x}){let g=(0,o.ZP)();return(0,s.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{top:`${_-48-16}px`,userSelect:"none"}},left:!0,margin:"auto",position:"absolute",right:!0,width:"fit-content",children:(0,s.jsx)(l.iP,{onBlur:i,onFocus:n,onKeyDown:r,onMouseDown:r,onMouseEnter:d,onMouseLeave:c,onMouseUp:u,onTap:p,children:(0,s.jsxs)(l.xu,{ref:h,alignItems:"center",color:e||t?"secondary":"default",dangerouslySetInlineStyle:{__style:{paddingRight:"16px"}},direction:"row",display:"flex",justifyContent:"center",marginTop:-4,padding:1,position:"relative",rounding:3,children:[(0,s.jsx)(l.xu,{direction:"row",display:"flex",marginEnd:2,children:(0,s.jsx)(a.Z,{imageOverlapMargin:-4,storyKey:{type:"deprecated",data:x}})}),(0,s.jsx)(l.xu,{children:(0,s.jsx)(l.JO,{accessibilityLabel:g.bt("Découvrez des produits à décorer avec ce look.", "Discover products to style with this look.", "ShoppingModulePopover.DropdownIcon", undefined, true),color:"default",icon:"arrow-down",size:12})})]})})})}var p=i(870863),h=i(573706),x=i(512541),g=i(732222);function y({active:e,hovered:t,onBlur:i,onFocus:r,onMouseDown:a,onMouseEnter:d,onMouseLeave:c,onMouseUp:y,focused:m,auxData:v,componentType:f,imageHeight:b,story:j,viewParameter:w,viewType:S,entrypointUiType:P}){let{logContextEvent:k}=(0,h.v)(),I=(0,o.ZP)(),z=(0,n.useRef)(null),[C,T]=(0,n.useState)(!1);if(!j)return null;let A=j.title?.format||I.bt("Acheter le look", "Shop the look", "ShoppingModulePopover.Popover.Header", undefined, true),F=j.display_options?.content_display?.component_type,Z={...v,pin_id:j.closeup_id,story_id:j.id},E={active:e,anchor:z,focused:m,hovered:t,onBlur:i,onFocus:r,onMouseDown:a,onMouseEnter:d,onMouseLeave:c,onMouseUp:y,onTap:()=>{T(!C),k({aux_data:Z,component:f,element:13841,event_type:101,object_id_str:j.id,view_parameter:w,view_type:S}),k({aux_data:Z,component:F,event_type:13,object_id_str:j.id,view_parameter:w,view_type:S})},story:j};return(0,s.jsxs)(n.Fragment,{children:["block"===P&&(0,s.jsx)(u,{...E}),"block_cta"===P&&(0,s.jsx)(u,{...E,ctaText:A}),"floating_dropdown"===P&&(0,s.jsx)(_,{imageHeight:b,...E}),C&&(0,s.jsxs)(l.mh,{zIndex:g.k,children:[(0,s.jsx)(x.Z,{unsafeCSS:'div[id="shopTheLookPopover"] { border: unset }'}),(0,s.jsxs)(l.J2,{__overflow:"hidden",accessibilityLabel:I.bt("Une sélection d’Épingles Produit à décorer avec ce look.", "A selection of product Pins to style with this look.", "ShoppingModulePopover.Popover", undefined, true),anchor:z.current,id:"shopTheLookPopover",idealDirection:"down",onDismiss:()=>{T(!1),k({aux_data:Z,component:F,event_type:123,object_id_str:j.id,view_parameter:w,view_type:S})},role:"menu",size:396,children:[(0,s.jsx)(l.xu,{alignItems:"center",display:"flex",height:64,justifyContent:"center",padding:2,children:(0,s.jsx)(l.X6,{lineClamp:1,size:"300",children:A})}),(0,s.jsx)(l.xu,{marginBottom:0,children:(0,s.jsx)(p.Z,{auxData:v,carouselSlidersContextLogData:{...Z},disableHeader:!0,enablePageScrollOverride:!0,gutterWidth:8,hidePinBetterSaveDropdown:!0,itemWidth:148,itemWidthHeightRatio:1,saveButtonOptions:{type:"inline"},slotIndex:0,story:j,styleOverrides:{carouselContainerMarginBottom:0,carouselPaddingX:8,navigationFabOpacity:1,navigationFabSize:32,showModuleBorder:!1},surface:"VisualInspirationShoppingPin",viewParameter:w,viewType:S,width:396})})]})]})]})}var m=i(170183);function v({auxData:e,slotIndex:t,story:i,viewParameter:r,viewType:o}){let a=(0,n.useRef)(null),d=(0,m.Z)({viewType:o}),c="enabled_cta"===d,u="enabled"===d,_=i.objects?.filter(e=>"pin"===e.type),h=i.objects?.flatMap(e=>"story"===e.type?[e]:[]);if(!_||!_.length)return null;let x=i.display_options?.content_display?.item_width_height_ratio||1.38,g=null;if(h&&h.length>0){let t=({productStory:t,index:n,...l})=>(0,s.jsx)(y,{auxData:e,componentType:i.display_options?.content_display?.component_type,entrypointUiType:c?"block_cta":u?"block":"floating_dropdown",imageHeight:201*x,story:t,viewParameter:r,viewType:o,...l},`${t.closeup_id||n}-WaysToStylePopover`);g=h?.map((e,i)=>n=>t({productStory:e,index:i,...n}))}return(0,s.jsx)(l.xu,{ref:a,children:(0,s.jsx)(p.Z,{auxData:e,carouselSlidersContextLogData:{...e,story_id:i.id},contentIds:i.objects?.map(({type:e,id:t})=>`${e}:${t}`).join("|"),enablePageScrollOverride:!0,gutterWidth:8,initialSlideIndex:0,itemRepSiblingNodeFactories:g,itemWidth:201,itemWidthHeightRatio:x,resolution:"high-res",siblingNodeForcesHoverOnItemRep:!c&&!u,slotIndex:t,story:{...i,objects:_},styleOverrides:{carouselContainerMarginBottom:4,carouselPaddingX:16,headerMarginTop:4,headerMarginX:4,navigationFabOpacity:1,navigationFabSize:32,showModuleBorder:!0,showExtraSmallSubtitle:!0},surface:"VisualInspirationPin",viewParameter:r,viewType:o,width:a.current?.clientWidth??"100%"})})}},170183:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(297728);function l({viewType:e,dangerouslySkipActivation:t=!1}){let{checkExperiment:i}=(0,n.F)();if(!e)return null;let l=3===e?i("web_ways_to_style_ui_v2_closeup",{dangerouslySkipActivation:t}).group:i("web_ways_to_style_ui_v2_search",{dangerouslySkipActivation:t}).group;return l.startsWith("enabled_cta")||"employees"===l?"enabled_cta":!l.startsWith("enabled_cta")&&l.startsWith("enabled")?"enabled":null}},637544:(e,t,i)=>{i.d(t,{Z:()=>l});let n=["orig","736x","564x","474x","236x","170x"],l=({imageSizeToImageMap:e,preferredSize:t})=>{let i=e[t];if(i)return{height:i.height,url:i.url,width:i.width};let l=n.indexOf(t);if(l>=0)for(let t=l+1;t<n.length;t+=1){let i=e[n[t]];if(i)return{height:i.height,url:i.url,width:i.width}}return{height:e["236x"]?.height,url:e["236x"]?.url,width:e["236x"]?.width}}},406850:(e,t,i)=>{i.d(t,{$:()=>s,Z:()=>c}),i(167912);var n,l=i(883119),r=i(793874),o=i(47848),a=i(785893);let s=40,d=void 0!==n?n:n=i(440929);function c({imageOverlapMargin:e=0,storyKey:t,imageSize:i=38,imageRounding:n=2}){let s=(0,o.Z)(d,t),c=(s?.objects??[]).flatMap(e=>(!e.__typename||"Pin"===e.__typename)&&e.imageSpec_236x?.url?e.imageSpec_236x.url:[]).slice(0,3);if(0===c.length)return null;let u=i+2;return c.map((t,i)=>(0,a.jsx)(l.xu,{color:"default",dangerouslySetInlineStyle:{__style:{border:`1px solid ${(0,r.Yc)()?"black":"white"}`,borderRadius:`${"number"==typeof n?4*n:0}px`}},marginEnd:i===c.length-1?0:e,zIndex:new l.Ry(i),children:(0,a.jsx)(l.zd,{height:u,rounding:n,wash:!0,width:u,children:(0,a.jsx)(l.Ee,{alt:"",fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:t})})},t))}},732222:(e,t,i)=>{i.d(t,{k:()=>n});let n=new(i(883119)).Ry(700)},274722:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(883119),l=i(573706),r=i(937482),o=i(232715),a=i(784676),s=i(273398),d=i(12092),c=i(456387),u=i(144326),_=i(453854),p=i(785893);function h({currentlyAppliedFiltersParamTerm:e,filterId:t,filterOption:i,isUpsell:h,onClickApplyFilters:x,query:g,viewParameter:y,viewType:m}){let v,f,b;let j=(0,u.ZP)(),{logContextEvent:w}=(0,l.v)();if(i){let{display:e,image_urls:t,term:n}=i;if(!e||!t||!t[0])return null;v=e,f=t[0],b=n??""}else{if(!t)return null;let e=function(e,t){let i="",n="",l="";switch(e){case 5:i=t.bt("Coiffure protectrice", "Protective", "HairPatternFilters.label.protectiveStyles", undefined, true),n=s,l="hair_pattern_id:5";break;case 4:i=t.bt("Crépus", "Coily", "HairPatternFilters.label.coily", undefined, true),n=o,l="hair_pattern_id:4";break;case 3:i=t.bt("Bouclés", "Curly", "HairPatternFilters.label.curly", undefined, true),n=a,l="hair_pattern_id:3";break;case 2:i=t.bt("Ondulés", "Wavy", "HairPatternFilters.label.wavy", undefined, true),n=c,l="hair_pattern_id:2";break;case 1:i=t.bt("Lisses", "Straight", "HairPatternFilters.label.straight", undefined, true),n=d,l="hair_pattern_id:1";break;case 6:i=t.bt("Chauve / rasé", "Bald/Shaved", "HairPatternFilters.label.bald", undefined, true),n=r,l="hair_pattern_id:6"}return{displayLabel:i,image:n,term:l}}(t,j);v=e.displayLabel,f=e.image,b=e.term}let S=e===b,P=h?44:56,k=h?72:84,I=P+8,z=k+8;return(0,p.jsxs)(n.kC,{alignItems:"center",direction:"column",gap:{row:0,column:1},width:z,children:[(0,p.jsx)(_.q,{children:({hovered:t,onMouseEnter:i,onMouseLeave:l})=>(0,p.jsx)(n.kC,{alignItems:"center",height:I,justifyContent:"start",children:(0,p.jsx)(n.iP,{mouseCursor:"pointer",onMouseEnter:i,onMouseLeave:l,onTap:()=>(function(e){let{query:t,onClickApplyFilters:i,currentlyAppliedFiltersParamTerm:n,term:l,logContextEvent:r,viewParameter:o,viewType:a}=e,s=n===l?"":l;r({event_type:101,component:13864,element:1341,view_parameter:o,view_type:a,aux_data:{entered_query:t,filter_type:"hair_pattern",value:s}}),i(s)})({onClickApplyFilters:x,query:g,currentlyAppliedFiltersParamTerm:e,term:b,logContextEvent:w,viewParameter:y,viewType:m}),rounding:"pill",children:(0,p.jsx)(n.xu,{alignItems:"center",color:S||t?"selected":void 0,display:"flex",height:I,justifyContent:"center",rounding:"pill",width:z,children:(0,p.jsx)(n.xu,{alignItems:"center",color:"default",display:"flex",height:P+4,justifyContent:"center",rounding:"pill",width:k+4,children:(0,p.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:"#EFEFEF"}},height:P,minHeight:P,minWidth:k,overflow:"hidden",rounding:"pill",width:k,children:(0,p.jsx)(n.Ee,{alt:v,fit:"contain",naturalHeight:1,naturalWidth:1,src:f})})})})})})}),(0,p.jsx)(n.xv,{align:"center",size:"100",weight:"bold",children:v})]},"term")}},48901:(e,t,i)=>{i.d(t,{W:()=>d,Z:()=>u});var n=i(667294),l=i(883119),r=i(573706),o=i(989820),a=i(144326),s=i(785893);let d=[["skinTone1","skinTone2","skinTone3","skinTone4"],["skinTone5","skinTone6","skinTone7","skinTone8"],["skinTone9","skinTone10","skinTone11","skinTone12"],["skinTone13","skinTone14","skinTone15","skinTone16"]],c=[{display:"Range 1",swatch_hex_colors:["#F0E3DC","#F8D7D8","#F2D7BE","#F7C3AF"],term:"skin_color_bucket_id:1"},{display:"Range 2",swatch_hex_colors:["#DEBAB0","#E0999A","#DDA67C","#D98A64"],term:"skin_color_bucket_id:2"},{display:"Range 3",swatch_hex_colors:["#9A6B52","#A25847","#B37143","#BF6951"],term:"skin_color_bucket_id:3"},{display:"Range 4",swatch_hex_colors:["#683929","#34261F","#64281B","#4F2221"],term:"skin_color_bucket_id:4"}];function u({currentlyAppliedFiltersParamTerm:e,filterTones:t=c,onClickApplyFilters:i,query:u,showHeaderText:_=!0}){let{logContextEvent:p}=(0,r.v)(),h=(0,a.ZP)(),x=(0,n.useRef)(null),g=(0,n.useRef)(null),y=t=>{let n=e===t?"":t;p({event_type:101,component:47,element:10418,view_type:2,aux_data:{entered_query:u,filter_type:"skin_tone",value:n}}),g.current?.complete(),i(n)},m=e?h.bt("Quelques idées dans cette teinte de peau", "Some ideas in this skin tone range", "SkinToneFilters.copy.termSelected", undefined, true):h.bt("Sélectionnez une teinte de peau", "Pick a skin tone range", "SkinToneFilters.copy.noTermSelected", undefined, true);return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsxs)(l.kC,{alignItems:_?"center":"start",direction:"column",justifyContent:"start",children:[_&&(0,s.jsx)(l.xu,{marginBottom:2,children:(0,s.jsx)(l.xv,{color:"default",overflow:"normal",weight:"bold",children:m})}),(0,s.jsx)(l.xu,{ref:x,display:"flex",flex:"none",paddingX:1,children:t.map(({term:t,display:i},n)=>(0,s.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{padding:"0 2px"}},"data-test-id":"skin-tone-option",children:(0,s.jsx)(l.Fm,{color:d[n],onClick:()=>y(t),selected:e===t,size:"lg",text:i})},t))})]}),x&&(0,s.jsx)(o.mc,{anchor:x.current,experienceIds:[502978],idealDirection:"right",onExperienceMount:e=>{e.complete&&502978===e.experience_id&&(g.current=e)},placementId:29})]})}},808074:(e,t,i)=>{function n(e,t){return{type:"SEARCH_PIN_CLOSEUP_VIEWED",payload:{pinId:e,query:t}}}function l(e){return{type:"SEARCH_QUERY_STARTED",payload:{query:e}}}function r(e){return{type:"SEARCH_QUERY_INVALIDATED",payload:{query:e}}}i.d(t,{Y4:()=>n,g4:()=>l,sb:()=>r})},937482:e=>{e.exports="https://s.pinimg.com/webapp/dweb_baldShaved-ee40aed0.svg"},232715:e=>{e.exports="https://s.pinimg.com/webapp/dweb_coily-5e6c6da8.svg"},784676:e=>{e.exports="https://s.pinimg.com/webapp/dweb_curly-eda8fecc.svg"},273398:e=>{e.exports="https://s.pinimg.com/webapp/dweb_protective-18352326.svg"},12092:e=>{e.exports="https://s.pinimg.com/webapp/dweb_straight-580589bd.svg"},456387:e=>{e.exports="https://s.pinimg.com/webapp/dweb_wavy-b4d18e06.svg"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/26241.fr-b954622422f67723.mjs.map