/*! For license information please see components-Badge-stories.6875800e.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkabtion_component_library=globalThis.webpackChunkabtion_component_library||[]).push([[558],{"./stories/components/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Info:()=>Info,Neutral:()=>Neutral,Primary:()=>Primary,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Badge/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.Z,options);Badge.Z&&Badge.Z.locals&&Badge.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Badge_Badge(props){const{size,variant,text,...rest}=props,usedClassName=classnames_default()("Badge",{[`Badge--${size}`]:size,[`Badge--${variant}`]:variant});return(0,jsx_runtime.jsx)("div",{className:usedClassName,...rest,children:text})}Badge_Badge.displayName="Badge";try{Badge_Badge.displayName="Badge",Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"info"'},{value:'"primary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Badge/index.tsx#Badge"]={docgenInfo:Badge_Badge.__docgenInfo,name:"Badge",path:"components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}const Badge_stories={title:"Design System/Badge",component:Badge_Badge},Template=args=>(0,jsx_runtime.jsx)(Badge_Badge,{...args});Template.displayName="Template";const sharedProps={size:"lg",text:"Badge text"},Info=Template.bind({});Info.args={...sharedProps,variant:"info"};const Success=Template.bind({});Success.args={...sharedProps,variant:"success"};const Warning=Template.bind({});Warning.args={...sharedProps,variant:"warning"};const Danger=Template.bind({});Danger.args={...sharedProps,variant:"danger"};const Primary=Template.bind({});Primary.args={...sharedProps,variant:"primary"};const Neutral=Template.bind({});Neutral.args={...sharedProps,variant:"neutral"},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Danger.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Primary.parameters?.docs?.source}}},Neutral.parameters={...Neutral.parameters,docs:{...Neutral.parameters?.docs,source:{originalSource:"args => <Badge {...args} />",...Neutral.parameters?.docs?.source}}};const __namedExportsOrder=["Info","Success","Warning","Danger","Primary","Neutral"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./components/Badge/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@layer components {.Badge {margin-right:0.75rem;display:flex;width:max-content;border-radius:9999px\n}.Badge--neutral {--tw-bg-opacity:1;background-color:rgb(var(--color-neutral-200) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-neutral-800) / var(--tw-text-opacity))\n}.Badge--primary {--tw-bg-opacity:1;background-color:rgb(var(--color-primary-100) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-primary-800) / var(--tw-text-opacity))\n}.Badge--success {--tw-bg-opacity:1;background-color:rgb(var(--color-success-100) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-success-800) / var(--tw-text-opacity))\n}.Badge--danger {--tw-bg-opacity:1;background-color:rgb(var(--color-danger-100) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-danger-800) / var(--tw-text-opacity))\n}.Badge--warning {--tw-bg-opacity:1;background-color:rgb(var(--color-warning-100) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-warning-800) / var(--tw-text-opacity))\n}.Badge--info {--tw-bg-opacity:1;background-color:rgb(var(--color-info-100) / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(var(--color-info-800) / var(--tw-text-opacity))\n}.Badge--sm {font-size:0.75rem;line-height:1rem;padding:2px 10px\n}.Badge--lg {font-size:0.875rem;line-height:1.25rem;padding:2px 12px\n}\n}","",{version:3,sources:["<no source>","webpack://./components/Badge/index.scss"],names:[],mappings:"AAAA,mBCCE,QAAA,oBAAA,CAAA,YAAA,CAAA,iBAAA,CAAA;AAAA,CAIE,iBAAA,iBAAA,CAAA,qEAAA,CAAA,mBAAA,CAAA;AAAA,CAIA,iBAAA,iBAAA,CAAA,qEAAA,CAAA,mBAAA,CAAA;AAAA,CAIA,iBAAA,iBAAA,CAAA,qEAAA,CAAA,mBAAA,CAAA;AAAA,CAIA,gBAAA,iBAAA,CAAA,oEAAA,CAAA,mBAAA,CAAA;AAAA,CAIA,iBAAA,iBAAA,CAAA,qEAAA,CAAA,mBAAA,CAAA;AAAA,CAIA,cAAA,iBAAA,CAAA,kEAAA,CAAA,mBAAA,CAAA;AAAA,CAKA,YAAA,iBAAA,CAAA,gBAAA,CACA;AADA,CAKA,YAAA,kBAAA,CAAA,mBAAA,CACA;AADA;CDnCJ",sourcesContent:[null,".Badge {\n  @apply flex mr-3 w-max rounded-full;\n\n  // Colors\n  &--neutral {\n    @apply text-neutral-800 bg-neutral-200;\n  }\n\n  &--primary {\n    @apply text-primary-800 bg-primary-100;\n  }\n\n  &--success {\n    @apply text-success-800 bg-success-100;\n  }\n\n  &--danger {\n    @apply text-danger-800 bg-danger-100;\n  }\n\n  &--warning {\n    @apply text-warning-800 bg-warning-100;\n  }\n\n  &--info {\n    @apply text-info-800 bg-info-100;\n  }\n\n  // Sizes\n  &--sm {\n    @apply text-xs;\n    padding: 2px 10px;\n  }\n\n  &--lg {\n    @apply text-sm;\n    padding: 2px 12px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);