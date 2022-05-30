// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,cljs.core.cst$kw$src,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$child,cljs.core.cst$kw$children,cljs.core.cst$kw$panel_DASH_1,cljs.core.cst$kw$panel_DASH_2,cljs.core.cst$kw$debug_DASH_as], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__13998){
var map__13999 = p__13998;
var map__13999__$1 = cljs.core.__destructure_map(map__13999);
var args = map__13999__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,cljs.core.cst$kw$src);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13999__$1,cljs.core.cst$kw$debug_DASH_as);
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4160__auto__ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4160__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(debug_as);
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

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attr,cljs.core.cst$kw$ref], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__14000 = src;
var map__14000__$1 = cljs.core.__destructure_map(map__14000);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14000__$1,cljs.core.cst$kw$line);
var G__14001 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,ref_fn,cljs.core.cst$kw$data_DASH_rc,rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14001,cljs.core.cst$kw$data_DASH_rc_DASH_src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__14001;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__14003 = arguments.length;
switch (G__14003) {
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
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$el,el,cljs.core.cst$kw$src,el.dataset.rcSrc,cljs.core.cst$kw$component,component,cljs.core.cst$kw$args,goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_width,"32px",cljs.core.cst$kw$min_DASH_height,"32px",cljs.core.cst$kw$font_DASH_size,"1.4em",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$vertical_DASH_align,"center",cljs.core.cst$kw$background,"#FF4136"], null);
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

var seq__14007_14027 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14006_SHARP_,p2__14005_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__14005_SHARP_,cljs.core.cst$kw$i,(p1__14006_SHARP_ + (1)));
}),stack));
var chunk__14008_14028 = null;
var count__14009_14029 = (0);
var i__14010_14030 = (0);
while(true){
if((i__14010_14030 < count__14009_14029)){
var map__14019_14031 = chunk__14008_14028.cljs$core$IIndexed$_nth$arity$2(null,i__14010_14030);
var map__14019_14032__$1 = cljs.core.__destructure_map(map__14019_14031);
var i_14033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019_14032__$1,cljs.core.cst$kw$i);
var el_14034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019_14032__$1,cljs.core.cst$kw$el);
var component_14035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019_14032__$1,cljs.core.cst$kw$component);
var src_14036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019_14032__$1,cljs.core.cst$kw$src);
var args_14037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019_14032__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14035)){
if(cljs.core.truth_(src_14036)){
var vec__14020_14038 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14036,/:/);
var file_14039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020_14038,(0),null);
var line_14040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020_14038,(1),null);
if(cljs.core.truth_(args_14037)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14033),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14035)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14039),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14040),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14037,el_14034);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14033),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14035)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14039),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14040),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14034);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14033),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14035)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14037,el_14034);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14033),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14034);
}


var G__14041 = seq__14007_14027;
var G__14042 = chunk__14008_14028;
var G__14043 = count__14009_14029;
var G__14044 = (i__14010_14030 + (1));
seq__14007_14027 = G__14041;
chunk__14008_14028 = G__14042;
count__14009_14029 = G__14043;
i__14010_14030 = G__14044;
continue;
} else {
var temp__5804__auto___14045 = cljs.core.seq(seq__14007_14027);
if(temp__5804__auto___14045){
var seq__14007_14046__$1 = temp__5804__auto___14045;
if(cljs.core.chunked_seq_QMARK_(seq__14007_14046__$1)){
var c__4591__auto___14047 = cljs.core.chunk_first(seq__14007_14046__$1);
var G__14048 = cljs.core.chunk_rest(seq__14007_14046__$1);
var G__14049 = c__4591__auto___14047;
var G__14050 = cljs.core.count(c__4591__auto___14047);
var G__14051 = (0);
seq__14007_14027 = G__14048;
chunk__14008_14028 = G__14049;
count__14009_14029 = G__14050;
i__14010_14030 = G__14051;
continue;
} else {
var map__14023_14052 = cljs.core.first(seq__14007_14046__$1);
var map__14023_14053__$1 = cljs.core.__destructure_map(map__14023_14052);
var i_14054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023_14053__$1,cljs.core.cst$kw$i);
var el_14055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023_14053__$1,cljs.core.cst$kw$el);
var component_14056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023_14053__$1,cljs.core.cst$kw$component);
var src_14057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023_14053__$1,cljs.core.cst$kw$src);
var args_14058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023_14053__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_(component_14056)){
if(cljs.core.truth_(src_14057)){
var vec__14024_14059 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_14057,/:/);
var file_14060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14024_14059,(0),null);
var line_14061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14024_14059,(1),null);
if(cljs.core.truth_(args_14058)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14054),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14056)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14060),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14061),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_14058,el_14055);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14054),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14056)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_14060),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_14061),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_14055);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14054),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_14056)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_14058,el_14055);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_14054),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_14055);
}


var G__14062 = cljs.core.next(seq__14007_14046__$1);
var G__14063 = null;
var G__14064 = (0);
var G__14065 = (0);
seq__14007_14027 = G__14062;
chunk__14008_14028 = G__14063;
count__14009_14029 = G__14064;
i__14010_14030 = G__14065;
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
var seq__14066 = cljs.core.seq(problems);
var chunk__14067 = null;
var count__14068 = (0);
var i__14069 = (0);
while(true){
if((i__14069 < count__14068)){
var map__14074 = chunk__14067.cljs$core$IIndexed$_nth$arity$2(null,i__14069);
var map__14074__$1 = cljs.core.__destructure_map(map__14074);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14074__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14075_14078 = problem;
var G__14075_14079__$1 = (((G__14075_14078 instanceof cljs.core.Keyword))?G__14075_14078.fqn:null);
switch (G__14075_14079__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14081 = seq__14066;
var G__14082 = chunk__14067;
var G__14083 = count__14068;
var G__14084 = (i__14069 + (1));
seq__14066 = G__14081;
chunk__14067 = G__14082;
count__14068 = G__14083;
i__14069 = G__14084;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14066);
if(temp__5804__auto__){
var seq__14066__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14066__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__14066__$1);
var G__14085 = cljs.core.chunk_rest(seq__14066__$1);
var G__14086 = c__4591__auto__;
var G__14087 = cljs.core.count(c__4591__auto__);
var G__14088 = (0);
seq__14066 = G__14085;
chunk__14067 = G__14086;
count__14068 = G__14087;
i__14069 = G__14088;
continue;
} else {
var map__14076 = cljs.core.first(seq__14066__$1);
var map__14076__$1 = cljs.core.__destructure_map(map__14076);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,cljs.core.cst$kw$problem);
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,cljs.core.cst$kw$arg_DASH_name);
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,cljs.core.cst$kw$expected);
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,cljs.core.cst$kw$actual);
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14076__$1,cljs.core.cst$kw$validate_DASH_fn_DASH_result);
var G__14077_14089 = problem;
var G__14077_14090__$1 = (((G__14077_14089 instanceof cljs.core.Keyword))?G__14077_14089.fqn:null);
switch (G__14077_14090__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__14092 = cljs.core.next(seq__14066__$1);
var G__14093 = null;
var G__14094 = (0);
var G__14095 = (0);
seq__14066 = G__14092;
chunk__14067 = G__14093;
count__14068 = G__14094;
i__14069 = G__14095;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__14096){
var map__14097 = p__14096;
var map__14097__$1 = cljs.core.__destructure_map(map__14097);
var src = map__14097__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14097__$1,cljs.core.cst$kw$line);
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14103 = arguments.length;
var i__4772__auto___14104 = (0);
while(true){
if((i__4772__auto___14104 < len__4771__auto___14103)){
args__4777__auto__.push((arguments[i__4772__auto___14104]));

var G__14105 = (i__4772__auto___14104 + (1));
i__4772__auto___14104 = G__14105;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__14099){
var map__14100 = p__14099;
var map__14100__$1 = cljs.core.__destructure_map(map__14100);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14100__$1,cljs.core.cst$kw$problems);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14100__$1,cljs.core.cst$kw$component);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14100__$1,cljs.core.cst$kw$args);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"validate-args-error",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14106__delegate = function (p__14101){
var map__14102 = p__14101;
var map__14102__$1 = cljs.core.__destructure_map(map__14102);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,cljs.core.cst$kw$problems);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,cljs.core.cst$kw$component);
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14102__$1,cljs.core.cst$kw$args);
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(args__$1),cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,component__$1,cljs.core.cst$kw$args,args__$1], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$title,"re-com validation error. Look in the DevTools console.",cljs.core.cst$kw$style,re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__14106 = function (var_args){
var p__14101 = null;
if (arguments.length > 0) {
var G__14107__i = 0, G__14107__a = new Array(arguments.length -  0);
while (G__14107__i < G__14107__a.length) {G__14107__a[G__14107__i] = arguments[G__14107__i + 0]; ++G__14107__i;}
  p__14101 = new cljs.core.IndexedSeq(G__14107__a,0,null);
} 
return G__14106__delegate.call(this,p__14101);};
G__14106.cljs$lang$maxFixedArity = 0;
G__14106.cljs$lang$applyTo = (function (arglist__14108){
var p__14101 = cljs.core.seq(arglist__14108);
return G__14106__delegate(p__14101);
});
G__14106.cljs$core$IFn$_invoke$arity$variadic = G__14106__delegate;
return G__14106;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq14098){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14098));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4777__auto__ = [];
var len__4771__auto___14114 = arguments.length;
var i__4772__auto___14115 = (0);
while(true){
if((i__4772__auto___14115 < len__4771__auto___14114)){
args__4777__auto__.push((arguments[i__4772__auto___14115]));

var G__14116 = (i__4772__auto___14115 + (1));
i__4772__auto___14115 = G__14116;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__14110){
var map__14111 = p__14110;
var map__14111__$1 = cljs.core.__destructure_map(map__14111);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14111__$1,cljs.core.cst$kw$component);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14111__$1,cljs.core.cst$kw$src);
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_name,"stack-spy",cljs.core.cst$kw$component_DASH_did_DASH_mount,log_fn,cljs.core.cst$kw$component_DASH_did_DASH_update,log_fn,cljs.core.cst$kw$reagent_DASH_render,(function() { 
var G__14117__delegate = function (p__14112){
var map__14113 = p__14112;
var map__14113__$1 = cljs.core.__destructure_map(map__14113);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14113__$1,cljs.core.cst$kw$component);
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14113__$1,cljs.core.cst$kw$src);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,src__$1,cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref_fn], null)], null)),component__$1], null);
};
var G__14117 = function (var_args){
var p__14112 = null;
if (arguments.length > 0) {
var G__14118__i = 0, G__14118__a = new Array(arguments.length -  0);
while (G__14118__i < G__14118__a.length) {G__14118__a[G__14118__i] = arguments[G__14118__i + 0]; ++G__14118__i;}
  p__14112 = new cljs.core.IndexedSeq(G__14118__a,0,null);
} 
return G__14117__delegate.call(this,p__14112);};
G__14117.cljs$lang$maxFixedArity = 0;
G__14117.cljs$lang$applyTo = (function (arglist__14119){
var p__14112 = cljs.core.seq(arglist__14119);
return G__14117__delegate(p__14112);
});
G__14117.cljs$core$IFn$_invoke$arity$variadic = G__14117__delegate;
return G__14117;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq14109){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14109));
}));

