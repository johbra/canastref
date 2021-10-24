// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__14189){
var map__14190 = p__14189;
var map__14190__$1 = cljs.core.__destructure_map.call(null,map__14190);
var args = map__14190__$1;
var src = cljs.core.get.call(null,map__14190__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__14190__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4160__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__4160__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__14191 = src;
var map__14191__$1 = cljs.core.__destructure_map.call(null,map__14191);
var file = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14191__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__14192 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__14192,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__14192;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__14194 = arguments.length;
switch (G__14194) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__14198_14218 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__14197_SHARP_,p2__14196_SHARP_){
return cljs.core.assoc.call(null,p2__14196_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__14197_SHARP_ + (1)));
}),stack));
var chunk__14199_14219 = null;
var count__14200_14220 = (0);
var i__14201_14221 = (0);
while(true){
if((i__14201_14221 < count__14200_14220)){
var map__14210_14222 = cljs.core._nth.call(null,chunk__14199_14219,i__14201_14221);
var map__14210_14223__$1 = cljs.core.__destructure_map.call(null,map__14210_14222);
var i_14224 = cljs.core.get.call(null,map__14210_14223__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_14225 = cljs.core.get.call(null,map__14210_14223__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_14226 = cljs.core.get.call(null,map__14210_14223__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_14227 = cljs.core.get.call(null,map__14210_14223__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_14228 = cljs.core.get.call(null,map__14210_14223__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_14226)){
if(cljs.core.truth_(src_14227)){
var vec__14211_14229 = clojure.string.split.call(null,src_14227,/:/);
var file_14230 = cljs.core.nth.call(null,vec__14211_14229,(0),null);
var line_14231 = cljs.core.nth.call(null,vec__14211_14229,(1),null);
if(cljs.core.truth_(args_14228)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14224),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14226)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14230),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14231),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14228,el_14225);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14224),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14226)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14230),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14231),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14225);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14224),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14226)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14228,el_14225);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14224),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14225);
}


var G__14232 = seq__14198_14218;
var G__14233 = chunk__14199_14219;
var G__14234 = count__14200_14220;
var G__14235 = (i__14201_14221 + (1));
seq__14198_14218 = G__14232;
chunk__14199_14219 = G__14233;
count__14200_14220 = G__14234;
i__14201_14221 = G__14235;
continue;
} else {
var temp__5753__auto___14236 = cljs.core.seq.call(null,seq__14198_14218);
if(temp__5753__auto___14236){
var seq__14198_14237__$1 = temp__5753__auto___14236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14198_14237__$1)){
var c__4591__auto___14238 = cljs.core.chunk_first.call(null,seq__14198_14237__$1);
var G__14239 = cljs.core.chunk_rest.call(null,seq__14198_14237__$1);
var G__14240 = c__4591__auto___14238;
var G__14241 = cljs.core.count.call(null,c__4591__auto___14238);
var G__14242 = (0);
seq__14198_14218 = G__14239;
chunk__14199_14219 = G__14240;
count__14200_14220 = G__14241;
i__14201_14221 = G__14242;
continue;
} else {
var map__14214_14243 = cljs.core.first.call(null,seq__14198_14237__$1);
var map__14214_14244__$1 = cljs.core.__destructure_map.call(null,map__14214_14243);
var i_14245 = cljs.core.get.call(null,map__14214_14244__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_14246 = cljs.core.get.call(null,map__14214_14244__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_14247 = cljs.core.get.call(null,map__14214_14244__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_14248 = cljs.core.get.call(null,map__14214_14244__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_14249 = cljs.core.get.call(null,map__14214_14244__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_14247)){
if(cljs.core.truth_(src_14248)){
var vec__14215_14250 = clojure.string.split.call(null,src_14248,/:/);
var file_14251 = cljs.core.nth.call(null,vec__14215_14250,(0),null);
var line_14252 = cljs.core.nth.call(null,vec__14215_14250,(1),null);
if(cljs.core.truth_(args_14249)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14245),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14247)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14251),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14252),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14249,el_14246);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14245),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14247)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14251),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14252),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14246);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14245),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14247)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14249,el_14246);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14245),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14246);
}


var G__14253 = cljs.core.next.call(null,seq__14198_14237__$1);
var G__14254 = null;
var G__14255 = (0);
var G__14256 = (0);
seq__14198_14218 = G__14253;
chunk__14199_14219 = G__14254;
count__14200_14220 = G__14255;
i__14201_14221 = G__14256;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__14257 = cljs.core.seq.call(null,problems);
var chunk__14258 = null;
var count__14259 = (0);
var i__14260 = (0);
while(true){
if((i__14260 < count__14259)){
var map__14265 = cljs.core._nth.call(null,chunk__14258,i__14260);
var map__14265__$1 = cljs.core.__destructure_map.call(null,map__14265);
var problem = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__14265__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__14266_14269 = problem;
var G__14266_14270__$1 = (((G__14266_14269 instanceof cljs.core.Keyword))?G__14266_14269.fqn:null);
switch (G__14266_14270__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14272 = seq__14257;
var G__14273 = chunk__14258;
var G__14274 = count__14259;
var G__14275 = (i__14260 + (1));
seq__14257 = G__14272;
chunk__14258 = G__14273;
count__14259 = G__14274;
i__14260 = G__14275;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__14257);
if(temp__5753__auto__){
var seq__14257__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14257__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__14257__$1);
var G__14276 = cljs.core.chunk_rest.call(null,seq__14257__$1);
var G__14277 = c__4591__auto__;
var G__14278 = cljs.core.count.call(null,c__4591__auto__);
var G__14279 = (0);
seq__14257 = G__14276;
chunk__14258 = G__14277;
count__14259 = G__14278;
i__14260 = G__14279;
continue;
} else {
var map__14267 = cljs.core.first.call(null,seq__14257__$1);
var map__14267__$1 = cljs.core.__destructure_map.call(null,map__14267);
var problem = cljs.core.get.call(null,map__14267__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__14267__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__14267__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__14267__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__14267__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__14268_14280 = problem;
var G__14268_14281__$1 = (((G__14268_14280 instanceof cljs.core.Keyword))?G__14268_14280.fqn:null);
switch (G__14268_14281__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14283 = cljs.core.next.call(null,seq__14257__$1);
var G__14284 = null;
var G__14285 = (0);
var G__14286 = (0);
seq__14257 = G__14283;
chunk__14258 = G__14284;
count__14259 = G__14285;
i__14260 = G__14286;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__14287){
var map__14288 = p__14287;
var map__14288__$1 = cljs.core.__destructure_map.call(null,map__14288);
var src = map__14288__$1;
var file = cljs.core.get.call(null,map__14288__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__14288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14294 = arguments.length;
var i__4772__auto___14295 = (0);
while(true){
if((i__4772__auto___14295 < len__4771__auto___14294)){
args__4777__auto__.push((arguments[i__4772__auto___14295]));

var G__14296 = (i__4772__auto___14295 + (1));
i__4772__auto___14295 = G__14296;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__14290){
var map__14291 = p__14290;
var map__14291__$1 = cljs.core.__destructure_map.call(null,map__14291);
var problems = cljs.core.get.call(null,map__14291__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__14291__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__14291__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__14297__delegate = function (p__14292){
var map__14293 = p__14292;
var map__14293__$1 = cljs.core.__destructure_map.call(null,map__14293);
var problems__$1 = cljs.core.get.call(null,map__14293__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__14293__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__14293__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__14297 = function (var_args){
var p__14292 = null;
if (arguments.length > 0) {
var G__14298__i = 0, G__14298__a = new Array(arguments.length -  0);
while (G__14298__i < G__14298__a.length) {G__14298__a[G__14298__i] = arguments[G__14298__i + 0]; ++G__14298__i;}
  p__14292 = new cljs.core.IndexedSeq(G__14298__a,0,null);
} 
return G__14297__delegate.call(this,p__14292);};
G__14297.cljs$lang$maxFixedArity = 0;
G__14297.cljs$lang$applyTo = (function (arglist__14299){
var p__14292 = cljs.core.seq(arglist__14299);
return G__14297__delegate(p__14292);
});
G__14297.cljs$core$IFn$_invoke$arity$variadic = G__14297__delegate;
return G__14297;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq14289){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14289));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14305 = arguments.length;
var i__4772__auto___14306 = (0);
while(true){
if((i__4772__auto___14306 < len__4771__auto___14305)){
args__4777__auto__.push((arguments[i__4772__auto___14306]));

var G__14307 = (i__4772__auto___14306 + (1));
i__4772__auto___14306 = G__14307;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__14301){
var map__14302 = p__14301;
var map__14302__$1 = cljs.core.__destructure_map.call(null,map__14302);
var component = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__14308__delegate = function (p__14303){
var map__14304 = p__14303;
var map__14304__$1 = cljs.core.__destructure_map.call(null,map__14304);
var component__$1 = cljs.core.get.call(null,map__14304__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__14304__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__14308 = function (var_args){
var p__14303 = null;
if (arguments.length > 0) {
var G__14309__i = 0, G__14309__a = new Array(arguments.length -  0);
while (G__14309__i < G__14309__a.length) {G__14309__a[G__14309__i] = arguments[G__14309__i + 0]; ++G__14309__i;}
  p__14303 = new cljs.core.IndexedSeq(G__14309__a,0,null);
} 
return G__14308__delegate.call(this,p__14303);};
G__14308.cljs$lang$maxFixedArity = 0;
G__14308.cljs$lang$applyTo = (function (arglist__14310){
var p__14303 = cljs.core.seq(arglist__14310);
return G__14308__delegate(p__14303);
});
G__14308.cljs$core$IFn$_invoke$arity$variadic = G__14308__delegate;
return G__14308;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq14300){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14300));
}));

