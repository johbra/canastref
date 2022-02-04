// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.tabs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('reagent.core');
re_com.tabs.horizontal_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:ul]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tab",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tab-anchor",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.horizontal_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.horizontal_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id | r/atom",cljs.core.cst$kw$description,"the unique identifier of the currently selected tab"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tabs,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of tabs | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"one element in the vector for each tab. Typically, each element is a map with :id and :label keys"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"unique-id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"called when user alters the selection. Passed the unique identifier of the selection"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$id,cljs.core.cst$kw$type,"tab -> anything",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$label,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its displayable label"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"CSS styles to add or override (aplies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$bold,"each individual tab"], null)," rather than the container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.horizontal_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
re_com.tabs.horizontal_tabs = (function re_com$tabs$horizontal_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20438 = arguments.length;
var i__4772__auto___20439 = (0);
while(true){
if((i__4772__auto___20439 < len__4771__auto___20438)){
args__4777__auto__.push((arguments[i__4772__auto___20439]));

var G__20440 = (i__4772__auto___20439 + (1));
i__4772__auto___20439 = G__20440;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.horizontal_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20432){
var map__20433 = p__20432;
var map__20433__$1 = cljs.core.__destructure_map(map__20433);
var args = map__20433__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20433__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$parts);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20433__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20433__$1,cljs.core.cst$kw$class);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.horizontal_tabs_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20430_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__20430_SHARP_) : id_fn.call(null,p1__20430_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__20430#] (= current (id-fn p1__20430#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["nav nav-tabs noselect rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4564__auto__ = (function re_com$tabs$iter__20434(s__20435){
return (new cljs.core.LazySeq(null,(function (){
var s__20435__$1 = s__20435;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20435__$1);
if(temp__5753__auto__){
var s__20435__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20435__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__20435__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__20437 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__20436 = (0);
while(true){
if((i__20436 < size__4563__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__20436);
cljs.core.chunk_append(b__20437,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__20436,id,label,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20437,s__20435__$2,temp__5753__auto__,current,tabs__$1,_,or__4160__auto__,map__20433,map__20433__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__20436,id,label,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20437,s__20435__$2,temp__5753__auto__,current,tabs__$1,_,or__4160__auto__,map__20433,map__20433__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})());

var G__20441 = (i__20436 + (1));
i__20436 = G__20441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20437),re_com$tabs$iter__20434(cljs.core.chunk_rest(s__20435__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20437),null);
}
} else {
var t = cljs.core.first(s__20435__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,[((selected_QMARK_)?"active rc-tab ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tab-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__20435__$2,temp__5753__auto__,current,tabs__$1,_,or__4160__auto__,map__20433,map__20433__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__20435__$2,temp__5753__auto__,current,tabs__$1,_,or__4160__auto__,map__20433,map__20433__$1,args,on_change,model,attr,label_fn,tabs,parts,id_fn,style,class$))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__20434(cljs.core.rest(s__20435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(tabs__$1);
})()], null);
}
}));

(re_com.tabs.horizontal_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_tabs.cljs$lang$applyTo = (function (seq20431){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20431));
}));

re_com.tabs.bar_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tabs-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$button,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tabs-btn",cljs.core.cst$kw$impl,"[:button]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.bar_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.bar_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20442_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parts,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__20442_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$type,"tab -> string | hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null),", returns its tooltip"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"[horizontal-bar-tabs only] relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$validate_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,true,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Validate ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null)," against ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":tabs"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.bar_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null)], 0)):null);
re_com.tabs.bar_tabs = (function re_com$tabs$bar_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20454 = arguments.length;
var i__4772__auto___20455 = (0);
while(true){
if((i__4772__auto___20455 < len__4771__auto___20454)){
args__4777__auto__.push((arguments[i__4772__auto___20455]));

var G__20456 = (i__4772__auto___20455 + (1));
i__4772__auto___20455 = G__20456;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20446){
var map__20447 = p__20446;
var map__20447__$1 = cljs.core.__destructure_map(map__20447);
var args = map__20447__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$parts);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$tooltip_DASH_fn);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$vertical_QMARK_);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20447__$1,cljs.core.cst$kw$tooltip_DASH_position);
var showing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__20457__delegate = function (p__20448){
var map__20449 = p__20448;
var map__20449__$1 = cljs.core.__destructure_map(map__20449);
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20449__$1,cljs.core.cst$kw$model);
var tabs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20449__$1,cljs.core.cst$kw$tabs);
var current = re_com.util.deref_or_value(model__$1);
var tabs__$2 = re_com.util.deref_or_value(tabs__$1);
var _ = (cljs.core.truth_((function (){var or__4160__auto__ = cljs.core.not(validate_QMARK_);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20443_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__20443_SHARP_) : id_fn.call(null,p1__20443_SHARP_)));
}),tabs__$2));
}
})())?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(or (not validate?) (not-empty (filter (fn* [p1__20443#] (= current (id-fn p1__20443#))) tabs)))"].join('')))})());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["noselect btn-group",(cljs.core.truth_(vertical_QMARK_)?"-vertical":null)," rc-tabs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0))], null),re_com.debug.__GT_attr(args),attr], 0))], null),(function (){var iter__4564__auto__ = (function re_com$tabs$iter__20450(s__20451){
return (new cljs.core.LazySeq(null,(function (){
var s__20451__$1 = s__20451;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20451__$1);
if(temp__5753__auto__){
var s__20451__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20451__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__20451__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__20453 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__20452 = (0);
while(true){
if((i__20452 < size__4563__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__20452);
cljs.core.chunk_append(b__20453,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,((function (i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (p1__20444_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__20444_SHARP_)){
return null;
} else {
return p1__20444_SHARP_;
}
});})(i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
);

return null;
});})(i__20452,id,label,tooltip,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$attr], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tabs.cljs",cljs.core.cst$kw$line,141], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto__ = tooltip_position;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (i__20452,id,label,tooltip,selected_QMARK_,the_button,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(i__20452,id,label,tooltip,selected_QMARK_,the_button,t,c__4562__auto__,size__4563__auto__,b__20453,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null);
} else {
return the_button;
}
})());

var G__20458 = (i__20452 + (1));
i__20452 = G__20458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20453),re_com$tabs$iter__20450(cljs.core.chunk_rest(s__20451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20453),null);
}
} else {
var t = cljs.core.first(s__20451__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var tooltip = (cljs.core.truth_(tooltip_fn)?(tooltip_fn.cljs$core$IFn$_invoke$arity$1 ? tooltip_fn.cljs$core$IFn$_invoke$arity$1(t) : tooltip_fn.call(null,t)):null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.cst$kw$class,["btn btn-default ",((selected_QMARK_)?"active ":null),"rc-tabs-btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
:null)], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.reset_BANG_(showing,id);

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing,(function (p1__20444_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__20444_SHARP_)){
return null;
} else {
return p1__20444_SHARP_;
}
}));

return null;
});})(id,label,tooltip,selected_QMARK_,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.cst$kw$attr], null))], 0)),label], null);
if(cljs.core.truth_(tooltip)){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tabs.cljs",cljs.core.cst$kw$line,141], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto__ = tooltip_position;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,reagent.core.track(((function (id,label,tooltip,selected_QMARK_,the_button,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.deref(showing));
});})(id,label,tooltip,selected_QMARK_,the_button,t,s__20451__$2,temp__5753__auto__,current,tabs__$2,_,map__20449,map__20449__$1,model__$1,tabs__$1,showing,map__20447,map__20447__$1,args,validate_QMARK_,on_change,model,attr,label_fn,tabs,parts,tooltip_fn,id_fn,style,class$,vertical_QMARK_,tooltip_position))
),cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-tabs-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null);
} else {
return the_button;
}
})(),re_com$tabs$iter__20450(cljs.core.rest(s__20451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(tabs__$2);
})());
};
var G__20457 = function (var_args){
var p__20448 = null;
if (arguments.length > 0) {
var G__20459__i = 0, G__20459__a = new Array(arguments.length -  0);
while (G__20459__i < G__20459__a.length) {G__20459__a[G__20459__i] = arguments[G__20459__i + 0]; ++G__20459__i;}
  p__20448 = new cljs.core.IndexedSeq(G__20459__a,0,null);
} 
return G__20457__delegate.call(this,p__20448);};
G__20457.cljs$lang$maxFixedArity = 0;
G__20457.cljs$lang$applyTo = (function (arglist__20460){
var p__20448 = cljs.core.seq(arglist__20460);
return G__20457__delegate(p__20448);
});
G__20457.cljs$core$IFn$_invoke$arity$variadic = G__20457__delegate;
return G__20457;
})()
;
}));

(re_com.tabs.bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.bar_tabs.cljs$lang$applyTo = (function (seq20445){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20445));
}));

re_com.tabs.horizontal_bar_tabs = (function re_com$tabs$horizontal_bar_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20464 = arguments.length;
var i__4772__auto___20465 = (0);
while(true){
if((i__4772__auto___20465 < len__4771__auto___20464)){
args__4777__auto__.push((arguments[i__4772__auto___20465]));

var G__20466 = (i__4772__auto___20465 + (1));
i__4772__auto___20465 = G__20466;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.horizontal_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20462){
var map__20463 = p__20462;
var map__20463__$1 = cljs.core.__destructure_map(map__20463);
var args = map__20463__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20463__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$parts);
var tooltip_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20463__$1,cljs.core.cst$kw$tooltip_DASH_fn,cljs.core.cst$kw$tooltip);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20463__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20463__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$tooltip_DASH_fn,tooltip_fn,cljs.core.cst$kw$tooltip_DASH_position,tooltip_position,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
}
}));

(re_com.tabs.horizontal_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_bar_tabs.cljs$lang$applyTo = (function (seq20461){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20461));
}));

re_com.tabs.vertical_bar_tabs = (function re_com$tabs$vertical_bar_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20470 = arguments.length;
var i__4772__auto___20471 = (0);
while(true){
if((i__4772__auto___20471 < len__4771__auto___20470)){
args__4777__auto__.push((arguments[i__4772__auto___20471]));

var G__20472 = (i__4772__auto___20471 + (1));
i__4772__auto___20471 = G__20472;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.vertical_bar_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20468){
var map__20469 = p__20468;
var map__20469__$1 = cljs.core.__destructure_map(map__20469);
var args = map__20469__$1;
var validate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$validate_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20469__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20469__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20469__$1,cljs.core.cst$kw$class);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.bar_tabs_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.tabs.bar_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as,cljs.core.cst$kw$validate_QMARK_,validate_QMARK_], 0));
}
}));

(re_com.tabs.vertical_bar_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_bar_tabs.cljs$lang$applyTo = (function (seq20467){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20467));
}));

re_com.tabs.pill_tabs_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tabs",cljs.core.cst$kw$impl,"[:ul]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," is supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :wrapper"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," arguments."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tab,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tabs-pill",cljs.core.cst$kw$impl,"[:li]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$anchor,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tabs-anchor",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":attr"], null)," are supported in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":parts :anchor"], null),". Otherwise, use top level ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null)," argument."], null)], null)], null):null);
re_com.tabs.pill_tabs_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tabs.horizontal_tabs_parts_desc)):null);
re_com.tabs.pill_tabs_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20473_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parts,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(p1__20473_SHARP_));
}),re_com.tabs.horizontal_tabs_args_desc)),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tabs.pill_tabs_parts),cljs.core.cst$kw$description,"See Parts section below."], null)):null);
re_com.tabs.pill_tabs = (function re_com$tabs$pill_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20482 = arguments.length;
var i__4772__auto___20483 = (0);
while(true){
if((i__4772__auto___20483 < len__4771__auto___20482)){
args__4777__auto__.push((arguments[i__4772__auto___20483]));

var G__20484 = (i__4772__auto___20483 + (1));
i__4772__auto___20483 = G__20484;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20476){
var map__20477 = p__20476;
var map__20477__$1 = cljs.core.__destructure_map(map__20477);
var args = map__20477__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$label_DASH_fn);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$id_DASH_fn);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$class);
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20477__$1,cljs.core.cst$kw$vertical_QMARK_);
var current = re_com.util.deref_or_value(model);
var tabs__$1 = re_com.util.deref_or_value(tabs);
var _ = (cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20474_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__20474_SHARP_) : id_fn.call(null,p1__20474_SHARP_)));
}),tabs__$1)))?null:(function(){throw (new Error(["Assert failed: ","model not found in tabs vector","\n","(not-empty (filter (fn* [p1__20474#] (= current (id-fn p1__20474#))) tabs))"].join('')))})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs noselect nav nav-pills",(cljs.core.truth_(vertical_QMARK_)?" nav-stacked":null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$role,"tabslist"], null),re_com.debug.__GT_attr(args),attr], 0)),(function (){var iter__4564__auto__ = (function re_com$tabs$iter__20478(s__20479){
return (new cljs.core.LazySeq(null,(function (){
var s__20479__$1 = s__20479;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20479__$1);
if(temp__5753__auto__){
var s__20479__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20479__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__20479__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__20481 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__20480 = (0);
while(true){
if((i__20480 < size__4563__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__20480);
cljs.core.chunk_append(b__20481,(function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (i__20480,id,label,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20481,s__20479__$2,temp__5753__auto__,current,tabs__$1,_,map__20477,map__20477__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(i__20480,id,label,selected_QMARK_,t,c__4562__auto__,size__4563__auto__,b__20481,s__20479__$2,temp__5753__auto__,current,tabs__$1,_,map__20477,map__20477__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})());

var G__20485 = (i__20480 + (1));
i__20480 = G__20485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20481),re_com$tabs$iter__20478(cljs.core.chunk_rest(s__20479__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20481),null);
}
} else {
var t = cljs.core.first(s__20479__$2);
return cljs.core.cons((function (){var id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(t) : id_fn.call(null,t));
var label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(t) : label_fn.call(null,t));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-pill ",((selected_QMARK_)?"active ":""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tab,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-tabs-anchor ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,"pointer"], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(cljs.core.truth_(on_change)?((function (id,label,selected_QMARK_,t,s__20479__$2,temp__5753__auto__,current,tabs__$1,_,map__20477,map__20477__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_){
return (function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
});})(id,label,selected_QMARK_,t,s__20479__$2,temp__5753__auto__,current,tabs__$1,_,map__20477,map__20477__$1,args,on_change,model,attr,label_fn,tabs,parts,src,id_fn,style,class$,vertical_QMARK_))
:null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$anchor,cljs.core.cst$kw$attr], null))], 0)),label], null)], null);
})(),re_com$tabs$iter__20478(cljs.core.rest(s__20479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(tabs__$1);
})()], null);
}));

(re_com.tabs.pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.pill_tabs.cljs$lang$applyTo = (function (seq20475){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20475));
}));

re_com.tabs.horizontal_pill_tabs = (function re_com$tabs$horizontal_pill_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20489 = arguments.length;
var i__4772__auto___20490 = (0);
while(true){
if((i__4772__auto___20490 < len__4771__auto___20489)){
args__4777__auto__.push((arguments[i__4772__auto___20490]));

var G__20491 = (i__4772__auto___20490 + (1));
i__4772__auto___20490 = G__20491;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.horizontal_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20487){
var map__20488 = p__20487;
var map__20488__$1 = cljs.core.__destructure_map(map__20488);
var args = map__20488__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20488__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20488__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20488__$1,cljs.core.cst$kw$class);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,false,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as], 0));
}
}));

(re_com.tabs.horizontal_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.horizontal_pill_tabs.cljs$lang$applyTo = (function (seq20486){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20486));
}));

re_com.tabs.vertical_pill_tabs = (function re_com$tabs$vertical_pill_tabs(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20495 = arguments.length;
var i__4772__auto___20496 = (0);
while(true){
if((i__4772__auto___20496 < len__4771__auto___20495)){
args__4777__auto__.push((arguments[i__4772__auto___20496]));

var G__20497 = (i__4772__auto___20496 + (1));
i__4772__auto___20496 = G__20497;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tabs.vertical_pill_tabs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20493){
var map__20494 = p__20493;
var map__20494__$1 = cljs.core.__destructure_map(map__20494);
var args = map__20494__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$on_DASH_change);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$model);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20494__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$tabs);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$src);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20494__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,cljs.core.cst$kw$class);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tabs.pill_tabs_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return re_com.tabs.pill_tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$model,model,cljs.core.cst$kw$tabs,tabs,cljs.core.cst$kw$on_DASH_change,on_change,cljs.core.cst$kw$id_DASH_fn,id_fn,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$vertical_QMARK_,true,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$parts,parts,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,debug_as], 0));
}
}));

(re_com.tabs.vertical_pill_tabs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tabs.vertical_pill_tabs.cljs$lang$applyTo = (function (seq20492){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20492));
}));

