// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__15512){
var map__15513 = p__15512;
var map__15513__$1 = cljs.core.__destructure_map(map__15513);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15513__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4160__auto__ = child_of;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__15514_15538 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__15515_15539 = null;
var count__15516_15540 = (0);
var i__15517_15541 = (0);
while(true){
if((i__15517_15541 < count__15516_15540)){
var vec__15528_15542 = chunk__15515_15539.cljs$core$IIndexed$_nth$arity$2(null,i__15517_15541);
var k_15543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528_15542,(0),null);
var cb_15544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528_15542,(1),null);
try{var G__15532_15545 = cljs.core.deref(re_frame.trace.traces);
(cb_15544.cljs$core$IFn$_invoke$arity$1 ? cb_15544.cljs$core$IFn$_invoke$arity$1(G__15532_15545) : cb_15544.call(null,G__15532_15545));
}catch (e15531){var e_15546 = e15531;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15543,"while storing",cljs.core.deref(re_frame.trace.traces),e_15546], 0));
}

var G__15547 = seq__15514_15538;
var G__15548 = chunk__15515_15539;
var G__15549 = count__15516_15540;
var G__15550 = (i__15517_15541 + (1));
seq__15514_15538 = G__15547;
chunk__15515_15539 = G__15548;
count__15516_15540 = G__15549;
i__15517_15541 = G__15550;
continue;
} else {
var temp__5804__auto___15551 = cljs.core.seq(seq__15514_15538);
if(temp__5804__auto___15551){
var seq__15514_15552__$1 = temp__5804__auto___15551;
if(cljs.core.chunked_seq_QMARK_(seq__15514_15552__$1)){
var c__4591__auto___15553 = cljs.core.chunk_first(seq__15514_15552__$1);
var G__15554 = cljs.core.chunk_rest(seq__15514_15552__$1);
var G__15555 = c__4591__auto___15553;
var G__15556 = cljs.core.count(c__4591__auto___15553);
var G__15557 = (0);
seq__15514_15538 = G__15554;
chunk__15515_15539 = G__15555;
count__15516_15540 = G__15556;
i__15517_15541 = G__15557;
continue;
} else {
var vec__15533_15558 = cljs.core.first(seq__15514_15552__$1);
var k_15559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533_15558,(0),null);
var cb_15560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533_15558,(1),null);
try{var G__15537_15561 = cljs.core.deref(re_frame.trace.traces);
(cb_15560.cljs$core$IFn$_invoke$arity$1 ? cb_15560.cljs$core$IFn$_invoke$arity$1(G__15537_15561) : cb_15560.call(null,G__15537_15561));
}catch (e15536){var e_15562 = e15536;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_15559,"while storing",cljs.core.deref(re_frame.trace.traces),e_15562], 0));
}

var G__15563 = cljs.core.next(seq__15514_15552__$1);
var G__15564 = null;
var G__15565 = (0);
var G__15566 = (0);
seq__15514_15538 = G__15563;
chunk__15515_15539 = G__15564;
count__15516_15540 = G__15565;
i__15517_15541 = G__15566;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
