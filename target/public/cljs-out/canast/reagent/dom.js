// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16038 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16039 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16039);

try{var G__16040 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__16041 = container;
var G__16042 = (function (){
var _STAR_always_update_STAR__orig_val__16043 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16044 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16044);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16043);
}});
return reagent.dom.global$module$react_dom.render(G__16040,G__16041,G__16042);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16038);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__16046 = arguments.length;
switch (G__16046) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__16047 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__16051_16067 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__16052_16068 = null;
var count__16053_16069 = (0);
var i__16054_16070 = (0);
while(true){
if((i__16054_16070 < count__16053_16069)){
var vec__16061_16071 = chunk__16052_16068.cljs$core$IIndexed$_nth$arity$2(null,i__16054_16070);
var container_16072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16061_16071,(0),null);
var comp_16073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16061_16071,(1),null);
reagent.dom.re_render_component(comp_16073,container_16072);


var G__16074 = seq__16051_16067;
var G__16075 = chunk__16052_16068;
var G__16076 = count__16053_16069;
var G__16077 = (i__16054_16070 + (1));
seq__16051_16067 = G__16074;
chunk__16052_16068 = G__16075;
count__16053_16069 = G__16076;
i__16054_16070 = G__16077;
continue;
} else {
var temp__5804__auto___16078 = cljs.core.seq(seq__16051_16067);
if(temp__5804__auto___16078){
var seq__16051_16079__$1 = temp__5804__auto___16078;
if(cljs.core.chunked_seq_QMARK_(seq__16051_16079__$1)){
var c__4591__auto___16080 = cljs.core.chunk_first(seq__16051_16079__$1);
var G__16081 = cljs.core.chunk_rest(seq__16051_16079__$1);
var G__16082 = c__4591__auto___16080;
var G__16083 = cljs.core.count(c__4591__auto___16080);
var G__16084 = (0);
seq__16051_16067 = G__16081;
chunk__16052_16068 = G__16082;
count__16053_16069 = G__16083;
i__16054_16070 = G__16084;
continue;
} else {
var vec__16064_16085 = cljs.core.first(seq__16051_16079__$1);
var container_16086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064_16085,(0),null);
var comp_16087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16064_16085,(1),null);
reagent.dom.re_render_component(comp_16087,container_16086);


var G__16088 = cljs.core.next(seq__16051_16079__$1);
var G__16089 = null;
var G__16090 = (0);
var G__16091 = (0);
seq__16051_16067 = G__16088;
chunk__16052_16068 = G__16089;
count__16053_16069 = G__16090;
i__16054_16070 = G__16091;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
