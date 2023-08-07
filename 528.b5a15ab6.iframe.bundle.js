/*! For license information please see 528.b5a15ab6.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkabtion_design_system=globalThis.webpackChunkabtion_design_system||[]).push([[528],{"./node_modules/@remix-run/router/dist/router.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Action;__webpack_require__.d(__webpack_exports__,{Ep:()=>createPath,RQ:()=>joinPaths,WK:()=>isRouteErrorResponse,Zn:()=>stripBasename,Zq:()=>getPathContributingMatches,aU:()=>Action,cP:()=>parsePath,fp:()=>matchRoutes,kG:()=>invariant,pC:()=>resolveTo}),function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function createPath(_ref){let{pathname="/",search="",hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}var ResultType;function matchRoutes(routes,locationArg,basename){void 0===basename&&(basename="/");let pathname=stripBasename(("string"==typeof locationArg?parsePath(locationArg):locationArg).pathname||"/",basename);if(null==pathname)return null;let branches=flattenRoutes(routes);!function rankRouteBranches(branches){branches.sort(((a,b)=>a.score!==b.score?b.score-a.score:function compareIndexes(a,b){let siblings=a.length===b.length&&a.slice(0,-1).every(((n,i)=>n===b[i]));return siblings?a[a.length-1]-b[b.length-1]:0}(a.routesMeta.map((meta=>meta.childrenIndex)),b.routesMeta.map((meta=>meta.childrenIndex)))))}(branches);let matches=null;for(let i=0;null==matches&&i<branches.length;++i)matches=matchRouteBranch(branches[i],safelyDecodeURI(pathname));return matches}function flattenRoutes(routes,branches,parentsMeta,parentPath){void 0===branches&&(branches=[]),void 0===parentsMeta&&(parentsMeta=[]),void 0===parentPath&&(parentPath="");let flattenRoute=(route,index,relativePath)=>{let meta={relativePath:void 0===relativePath?route.path||"":relativePath,caseSensitive:!0===route.caseSensitive,childrenIndex:index,route};meta.relativePath.startsWith("/")&&(invariant(meta.relativePath.startsWith(parentPath),'Absolute route path "'+meta.relativePath+'" nested under path "'+parentPath+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),meta.relativePath=meta.relativePath.slice(parentPath.length));let path=joinPaths([parentPath,meta.relativePath]),routesMeta=parentsMeta.concat(meta);route.children&&route.children.length>0&&(invariant(!0!==route.index,'Index routes must not have child routes. Please remove all child routes from route path "'+path+'".'),flattenRoutes(route.children,branches,routesMeta,path)),(null!=route.path||route.index)&&branches.push({path,score:computeScore(path,route.index),routesMeta})};return routes.forEach(((route,index)=>{var _route$path;if(""!==route.path&&null!=(_route$path=route.path)&&_route$path.includes("?"))for(let exploded of explodeOptionalSegments(route.path))flattenRoute(route,index,exploded);else flattenRoute(route,index)})),branches}function explodeOptionalSegments(path){let segments=path.split("/");if(0===segments.length)return[];let[first,...rest]=segments,isOptional=first.endsWith("?"),required=first.replace(/\?$/,"");if(0===rest.length)return isOptional?[required,""]:[required];let restExploded=explodeOptionalSegments(rest.join("/")),result=[];return result.push(...restExploded.map((subpath=>""===subpath?required:[required,subpath].join("/")))),isOptional&&result.push(...restExploded),result.map((exploded=>path.startsWith("/")&&""===exploded?"/":exploded))}!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));const paramRe=/^:\w+$/,dynamicSegmentValue=3,indexRouteValue=2,emptySegmentValue=1,staticSegmentValue=10,splatPenalty=-2,isSplat=s=>"*"===s;function computeScore(path,index){let segments=path.split("/"),initialScore=segments.length;return segments.some(isSplat)&&(initialScore+=splatPenalty),index&&(initialScore+=indexRouteValue),segments.filter((s=>!isSplat(s))).reduce(((score,segment)=>score+(paramRe.test(segment)?dynamicSegmentValue:""===segment?emptySegmentValue:staticSegmentValue)),initialScore)}function matchRouteBranch(branch,pathname){let{routesMeta}=branch,matchedParams={},matchedPathname="/",matches=[];for(let i=0;i<routesMeta.length;++i){let meta=routesMeta[i],end=i===routesMeta.length-1,remainingPathname="/"===matchedPathname?pathname:pathname.slice(matchedPathname.length)||"/",match=matchPath({path:meta.relativePath,caseSensitive:meta.caseSensitive,end},remainingPathname);if(!match)return null;Object.assign(matchedParams,match.params);let route=meta.route;matches.push({params:matchedParams,pathname:joinPaths([matchedPathname,match.pathname]),pathnameBase:normalizePathname(joinPaths([matchedPathname,match.pathnameBase])),route}),"/"!==match.pathnameBase&&(matchedPathname=joinPaths([matchedPathname,match.pathnameBase]))}return matches}function matchPath(pattern,pathname){"string"==typeof pattern&&(pattern={path:pattern,caseSensitive:!1,end:!0});let[matcher,paramNames]=function compilePath(path,caseSensitive,end){void 0===caseSensitive&&(caseSensitive=!1);void 0===end&&(end=!0);warning("*"===path||!path.endsWith("*")||path.endsWith("/*"),'Route path "'+path+'" will be treated as if it were "'+path.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+path.replace(/\*$/,"/*")+'".');let paramNames=[],regexpSource="^"+path.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((_,paramName)=>(paramNames.push(paramName),"/([^\\/]+)")));path.endsWith("*")?(paramNames.push("*"),regexpSource+="*"===path||"/*"===path?"(.*)$":"(?:\\/(.+)|\\/*)$"):end?regexpSource+="\\/*$":""!==path&&"/"!==path&&(regexpSource+="(?:(?=\\/|$))");let matcher=new RegExp(regexpSource,caseSensitive?void 0:"i");return[matcher,paramNames]}(pattern.path,pattern.caseSensitive,pattern.end),match=pathname.match(matcher);if(!match)return null;let matchedPathname=match[0],pathnameBase=matchedPathname.replace(/(.)\/+$/,"$1"),captureGroups=match.slice(1);return{params:paramNames.reduce(((memo,paramName,index)=>{if("*"===paramName){let splatValue=captureGroups[index]||"";pathnameBase=matchedPathname.slice(0,matchedPathname.length-splatValue.length).replace(/(.)\/+$/,"$1")}return memo[paramName]=function safelyDecodeURIComponent(value,paramName){try{return decodeURIComponent(value)}catch(error){return warning(!1,'The value for the URL param "'+paramName+'" will not be decoded because the string "'+value+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+error+")."),value}}(captureGroups[index]||"",paramName),memo}),{}),pathname:matchedPathname,pathnameBase,pattern}}function safelyDecodeURI(value){try{return decodeURI(value)}catch(error){return warning(!1,'The URL path "'+value+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+error+")."),value}}function stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function warning(cond,message){if(!cond){"undefined"!=typeof console&&console.warn(message);try{throw new Error(message)}catch(e){}}}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizePathname=pathname=>pathname.replace(/\/+$/,"").replace(/^\/*/,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";Error;class ErrorResponse{constructor(status,statusText,data,internal){void 0===internal&&(internal=!1),this.status=status,this.statusText=statusText||"",this.internal=internal,data instanceof Error?(this.data=data.toString(),this.error=data):this.data=data}}function isRouteErrorResponse(e){return e instanceof ErrorResponse}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{rU:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];const Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function LinkWithRef(_ref4,ref){let{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset}=_ref4,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),href=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.oQ)(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative}=void 0===_temp?{}:_temp,navigate=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.s0)(),location=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.TH)(),path=(0,react_router__WEBPACK_IMPORTED_MODULE_1__.WU)(to,{relative});return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:(0,react_router__WEBPACK_IMPORTED_MODULE_2__.Ep)(location)===(0,react_router__WEBPACK_IMPORTED_MODULE_2__.Ep)(path);navigate(to,{replace,state,preventScrollReset,relative})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative])}(to,{replace,state,target,preventScrollReset,relative});return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_extends({},rest,{href,onClick:reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));var DataRouterHook,DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmitImpl="useSubmitImpl",DataRouterHook.UseFetcher="useFetcher"})(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(DataRouterStateHook||(DataRouterStateHook={}))},"./node_modules/react-router/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{AW:()=>Route,F0:()=>Router,TH:()=>useLocation,WU:()=>useResolvedPath,Z5:()=>Routes,oQ:()=>useHref,s0:()=>useNavigate});var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const is="function"==typeof Object.is?Object.is:function isPolyfill(x,y){return x===y&&(0!==x||1/x==1/y)||x!=x&&y!=y},{useState,useEffect,useLayoutEffect,useDebugValue}=react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2));function checkIfSnapshotChanged(inst){const latestGetSnapshot=inst.getSnapshot,prevValue=inst.value;try{const nextValue=latestGetSnapshot();return!is(prevValue,nextValue)}catch(error){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement,(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;const DataStaticRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const DataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const DataRouterStateContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const NavigationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const LocationContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);const RouteContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({outlet:null,matches:[]});const RouteErrorContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);function useHref(to,_temp){let{relative}=void 0===_temp?{}:_temp;useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1);let{basename,navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{hash,pathname,search}=useResolvedPath(to,{relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,pathname])),navigator.createHref({pathname:joinedPathname,search,hash})}function useInRouterContext(){return null!=react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext)}function useLocation(){return useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location}function useNavigate(){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1);let{basename,navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),{matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase))),activeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{activeRef.current=!0})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);"/"!==basename&&(path.pathname="/"===path.pathname?basename:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname])}function useResolvedPath(to,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{matches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),{pathname:locationPathname}=useLocation(),routePathnamesJson=JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zq)(matches).map((match=>match.pathnameBase)));return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.pC)(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}function DefaultErrorElement(){let error=function useRouteError(){var _state$errors;let error=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext),state=useDataRouterState(DataRouterStateHook.UseRouteError),route=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),thisRoute=route.matches[route.matches.length-1];if(error)return error;return route||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),!thisRoute.route.id&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),null==(_state$errors=state.errors)?void 0:_state$errors[thisRoute.route.id]}(),message=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.WK)(error)?error.status+" "+error.statusText:error instanceof Error?error.message:JSON.stringify(error),stack=error instanceof Error?error.stack:null,preStyles={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},codeStyles={padding:"2px 4px",backgroundColor:"rgba(200,200,200, 0.5)"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Unhandled Thrown Error!"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{style:{fontStyle:"italic"}},message),stack?react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:preStyles},stack):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"💿 Hey developer 👋"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{style:codeStyles},"errorElement")," props on ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",{style:codeStyles},"<Route>")))}class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.state={location:props.location,error:props.error}}static getDerivedStateFromError(error){return{error}}static getDerivedStateFromProps(props,state){return state.location!==props.location?{error:props.error,location:props.location}:{error:props.error||state.error,location:state.location}}componentDidCatch(error,errorInfo){console.error("React Router caught the following error during render",error,errorInfo)}render(){return this.state.error?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function RenderedRoute(_ref){let{routeContext,match,children}=_ref,dataStaticRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataStaticRouterContext);return dataStaticRouterContext&&match.route.errorElement&&(dataStaticRouterContext._deepestRenderedBoundaryId=match.route.id),react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider,{value:routeContext},children)}function _renderMatches(matches,parentMatches,dataRouterState){if(void 0===parentMatches&&(parentMatches=[]),null==matches){if(null==dataRouterState||!dataRouterState.errors)return null;matches=dataRouterState.matches}let renderedMatches=matches,errors=null==dataRouterState?void 0:dataRouterState.errors;if(null!=errors){let errorIndex=renderedMatches.findIndex((m=>m.route.id&&(null==errors?void 0:errors[m.route.id])));errorIndex>=0||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),renderedMatches=renderedMatches.slice(0,Math.min(renderedMatches.length,errorIndex+1))}return renderedMatches.reduceRight(((outlet,match,index)=>{let error=match.route.id?null==errors?void 0:errors[match.route.id]:null,errorElement=dataRouterState?match.route.errorElement||react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorElement,null):null,getChildren=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute,{match,routeContext:{outlet,matches:parentMatches.concat(renderedMatches.slice(0,index+1))}},error?errorElement:void 0!==match.route.element?match.route.element:outlet);return dataRouterState&&(match.route.errorElement||0===index)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary,{location:dataRouterState.location,component:errorElement,error,children:getChildren()}):getChildren()}),null)}var DataRouterHook,DataRouterStateHook;function useDataRouterState(hookName){let state=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);return state||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),state}!function(DataRouterHook){DataRouterHook.UseRevalidator="useRevalidator"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator"}(DataRouterStateHook||(DataRouterStateHook={}));function Route(_props){(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1)}function Router(_ref4){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop,navigator,static:staticProp=!1}=_ref4;useInRouterContext()&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({basename,navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,location=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{let trailingPathname=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Zn)(pathname,basename);return null==trailingPathname?null:{pathname:trailingPathname,search,hash,state,key}}),[basename,pathname,search,hash,state,key]);return null==location?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider,{value:navigationContext},react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{children,value:{location,navigationType}}))}function Routes(_ref5){let{children,location}=_ref5,dataRouterContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);return function useRoutes(routes,locationArg){useInRouterContext()||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1);let{navigator}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext),dataRouterStateContext=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext),{matches:parentMatches}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext),routeMatch=parentMatches[parentMatches.length-1],parentParams=routeMatch?routeMatch.params:{},parentPathnameBase=(routeMatch&&routeMatch.pathname,routeMatch?routeMatch.pathnameBase:"/");routeMatch&&routeMatch.route;let location,locationFromContext=useLocation();if(locationArg){var _parsedLocationArg$pa;let parsedLocationArg="string"==typeof locationArg?(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.cP)(locationArg):locationArg;"/"===parentPathnameBase||(null==(_parsedLocationArg$pa=parsedLocationArg.pathname)?void 0:_parsedLocationArg$pa.startsWith(parentPathnameBase))||(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),location=parsedLocationArg}else location=locationFromContext;let pathname=location.pathname||"/",remainingPathname="/"===parentPathnameBase?pathname:pathname.slice(parentPathnameBase.length)||"/",matches=(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.fp)(routes,{pathname:remainingPathname}),renderedMatches=_renderMatches(matches&&matches.map((match=>Object.assign({},match,{params:Object.assign({},parentParams,match.params),pathname:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([parentPathnameBase,navigator.encodeLocation?navigator.encodeLocation(match.pathname).pathname:match.pathname]),pathnameBase:"/"===match.pathnameBase?parentPathnameBase:(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.RQ)([parentPathnameBase,navigator.encodeLocation?navigator.encodeLocation(match.pathnameBase).pathname:match.pathnameBase])}))),parentMatches,dataRouterStateContext||void 0);return locationArg&&renderedMatches?react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider,{value:{location:_extends({pathname:"/",search:"",hash:"",state:null,key:"default"},location),navigationType:_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.aU.Pop}},renderedMatches):renderedMatches}(dataRouterContext&&!children?dataRouterContext.router.routes:createRoutesFromChildren(children),location)}var AwaitRenderStatus;!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise((()=>{}));react__WEBPACK_IMPORTED_MODULE_0__.Component;function createRoutesFromChildren(children,parentPath){void 0===parentPath&&(parentPath=[]);let routes=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,((element,index)=>{if(!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element))return;if(element.type===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)return void routes.push.apply(routes,createRoutesFromChildren(element.props.children,parentPath));element.type!==Route&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1),element.props.index&&element.props.children&&(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.kG)(!1);let treePath=[...parentPath,index],route={id:element.props.id||treePath.join("-"),caseSensitive:element.props.caseSensitive,element:element.props.element,index:element.props.index,path:element.props.path,loader:element.props.loader,action:element.props.action,errorElement:element.props.errorElement,hasErrorBoundary:null!=element.props.errorElement,shouldRevalidate:element.props.shouldRevalidate,handle:element.props.handle};element.props.children&&(route.children=createRoutesFromChildren(element.props.children,treePath)),routes.push(route)})),routes}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);