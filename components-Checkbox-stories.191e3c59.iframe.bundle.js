/*! For license information please see components-Checkbox-stories.191e3c59.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkabtion_component_library=globalThis.webpackChunkabtion_component_library||[]).push([[979],{"./stories/components/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxWithLabel:()=>CheckboxWithLabel,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Checkbox=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Checkbox/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Checkbox.Z,options);Checkbox.Z&&Checkbox.Z.locals&&Checkbox.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Checkbox_Checkbox(props){const{className,...rest}=props,usedClassName=classnames_default()("Checkbox",className);return(0,jsx_runtime.jsx)("input",{type:"checkbox",className:usedClassName,...rest})}Checkbox_Checkbox.displayName="Checkbox";try{Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox_Checkbox.__docgenInfo,name:"Checkbox",path:"components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}const Checkbox_stories={title:"Components/🚧 Checkbox",component:Checkbox_Checkbox},Template=args=>(0,jsx_runtime.jsx)(Checkbox_Checkbox,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={checked:!1,disabled:!1};const CheckboxWithLabel=()=>(0,jsx_runtime.jsxs)("label",{children:[(0,jsx_runtime.jsx)(Checkbox_Checkbox,{className:"mr-2"}),(0,jsx_runtime.jsx)("span",{className:"select-none",children:"Checkbox label"})]});CheckboxWithLabel.displayName="CheckboxWithLabel",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Checkbox {...args} />",...Default.parameters?.docs?.source}}},CheckboxWithLabel.parameters={...CheckboxWithLabel.parameters,docs:{...CheckboxWithLabel.parameters?.docs,source:{originalSource:'(): JSX.Element => <label>\n    <Checkbox className="mr-2" />\n    <span className="select-none">Checkbox label</span>\n  </label>',...CheckboxWithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CheckboxWithLabel"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Checkbox/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'@layer components {.Checkbox {display:inline-flex;height:1rem;width:1rem;appearance:none;align-items:center;justify-content:center;border-radius:0.125rem;border-width:1px;border-color:var(--color-neutral-300);--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px\n}.Checkbox:enabled:hover {border-radius:4px\n}.Checkbox:focus {border-radius:4px;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-color:var(--color-primary-400);--tw-ring-offset-width:2px\n}.Checkbox::before {color:transparent;content:"✓"\n}.Checkbox:checked {border-radius:4px;border-style:none;background-color:var(--color-primary-500)\n}.Checkbox:checked::before {--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));content:"✓"\n}.Checkbox:disabled {cursor:not-allowed;-webkit-user-select:none;user-select:none;border-color:var(--color-neutral-200);background-color:var(--color-neutral-100)\n}.Checkbox:disabled:checked {background-color:var(--color-neutral-300)\n}\n}',"",{version:3,sources:["<no source>","webpack://./components/Checkbox/index.scss"],names:[],mappings:"AAAA,mBCAA,WAAA,mBAEE,CAFF,WAEE,CAFF,UAEE,CAFF,eAEE,CAFF,kBAEE,CAFF,sBAEE,CAFF,sBAEE,CAFF,gBAEE,CAFF,qCAEE,CAFF,iBAEE,CAFF,wDAEE,CAFF,6BAEE,CAFF;AAEE,CAEA,yBAAA;AACE,CAGF,iBAAA,iBACE,CADF,0GACE,CADF,wGACE,CADF,2FACE,CADF,wCACE,CADF;AACE,CAGF,mBAAA,iBACE,CAAA;AAAA,CAIF,mBAAA,iBACE,CADF,iBACE,CADF;AACE,CAEA,2BAAA,mBACE,CADF,+CACE,CAAA;AAAA,CAKJ,oBAAA,kBACE,CADF,wBACE,CADF,gBACE,CADF,qCACE,CADF;AACE,CAEA,4BAAA;AACE;CD9BN",sourcesContent:[null,'.Checkbox {\n  // @apply border border-transparent text-base leading-4 focus:ring-1 focus:outline-none shadow-sm;\n  @apply appearance-none inline-flex items-center justify-center w-4 h-4 bg-white border-neutral-300 border rounded-sm border-[1px] outline-none;\n\n  &:enabled:hover {\n    @apply rounded-[4px];\n  }\n\n  &:focus {\n    @apply ring-2 ring-offset-2 ring-primary-400 rounded-[4px];\n  }\n\n  &::before {\n    @apply text-transparent;\n    content: "✓";\n  }\n\n  &:checked {\n    @apply border-none bg-primary-500 rounded-[4px];\n\n    &::before {\n      @apply text-white;\n      content: "✓";\n    }\n  }\n\n  &:disabled {\n    @apply select-none border-neutral-200 bg-neutral-100 cursor-not-allowed;\n\n    &:checked {\n      @apply bg-neutral-300;\n    }\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);