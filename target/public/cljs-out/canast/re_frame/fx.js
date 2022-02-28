// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21213 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21214 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21214);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21249 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21249)){
var new_db_21250 = temp__5753__auto___21249;
var fexpr__21215_21251 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21215_21251.cljs$core$IFn$_invoke$arity$1 ? fexpr__21215_21251.cljs$core$IFn$_invoke$arity$1(new_db_21250) : fexpr__21215_21251.call(null,new_db_21250));
} else {
}

var seq__21216 = cljs.core.seq(effects_without_db);
var chunk__21217 = null;
var count__21218 = (0);
var i__21219 = (0);
while(true){
if((i__21219 < count__21218)){
var vec__21226 = chunk__21217.cljs$core$IIndexed$_nth$arity$2(null,i__21219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21226,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21226,(1),null);
var temp__5751__auto___21252 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21252)){
var effect_fn_21253 = temp__5751__auto___21252;
(effect_fn_21253.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21253.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21253.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21254 = seq__21216;
var G__21255 = chunk__21217;
var G__21256 = count__21218;
var G__21257 = (i__21219 + (1));
seq__21216 = G__21254;
chunk__21217 = G__21255;
count__21218 = G__21256;
i__21219 = G__21257;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21216);
if(temp__5753__auto__){
var seq__21216__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21216__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21216__$1);
var G__21258 = cljs.core.chunk_rest(seq__21216__$1);
var G__21259 = c__4591__auto__;
var G__21260 = cljs.core.count(c__4591__auto__);
var G__21261 = (0);
seq__21216 = G__21258;
chunk__21217 = G__21259;
count__21218 = G__21260;
i__21219 = G__21261;
continue;
} else {
var vec__21229 = cljs.core.first(seq__21216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(1),null);
var temp__5751__auto___21262 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21262)){
var effect_fn_21263 = temp__5751__auto___21262;
(effect_fn_21263.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21263.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21263.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21264 = cljs.core.next(seq__21216__$1);
var G__21265 = null;
var G__21266 = (0);
var G__21267 = (0);
seq__21216 = G__21264;
chunk__21217 = G__21265;
count__21218 = G__21266;
i__21219 = G__21267;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__15490__auto___21268 = re_frame.interop.now();
var duration__15491__auto___21269 = (end__15490__auto___21268 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__15491__auto___21269,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__15490__auto___21268);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21213);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21270 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21270)){
var new_db_21271 = temp__5753__auto___21270;
var fexpr__21232_21272 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21232_21272.cljs$core$IFn$_invoke$arity$1 ? fexpr__21232_21272.cljs$core$IFn$_invoke$arity$1(new_db_21271) : fexpr__21232_21272.call(null,new_db_21271));
} else {
}

var seq__21233 = cljs.core.seq(effects_without_db);
var chunk__21234 = null;
var count__21235 = (0);
var i__21236 = (0);
while(true){
if((i__21236 < count__21235)){
var vec__21243 = chunk__21234.cljs$core$IIndexed$_nth$arity$2(null,i__21236);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21243,(1),null);
var temp__5751__auto___21273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21273)){
var effect_fn_21274 = temp__5751__auto___21273;
(effect_fn_21274.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21274.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21274.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21275 = seq__21233;
var G__21276 = chunk__21234;
var G__21277 = count__21235;
var G__21278 = (i__21236 + (1));
seq__21233 = G__21275;
chunk__21234 = G__21276;
count__21235 = G__21277;
i__21236 = G__21278;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21233);
if(temp__5753__auto__){
var seq__21233__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21233__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21233__$1);
var G__21279 = cljs.core.chunk_rest(seq__21233__$1);
var G__21280 = c__4591__auto__;
var G__21281 = cljs.core.count(c__4591__auto__);
var G__21282 = (0);
seq__21233 = G__21279;
chunk__21234 = G__21280;
count__21235 = G__21281;
i__21236 = G__21282;
continue;
} else {
var vec__21246 = cljs.core.first(seq__21233__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21246,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21246,(1),null);
var temp__5751__auto___21283 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21283)){
var effect_fn_21284 = temp__5751__auto___21283;
(effect_fn_21284.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21284.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21284.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21285 = cljs.core.next(seq__21233__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__21233 = G__21285;
chunk__21234 = G__21286;
count__21235 = G__21287;
i__21236 = G__21288;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21289){
var map__21290 = p__21289;
var map__21290__$1 = cljs.core.__destructure_map(map__21290);
var effect = map__21290__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21291 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21292 = null;
var count__21293 = (0);
var i__21294 = (0);
while(true){
if((i__21294 < count__21293)){
var effect = chunk__21292.cljs$core$IIndexed$_nth$arity$2(null,i__21294);
re_frame.fx.dispatch_later(effect);


var G__21295 = seq__21291;
var G__21296 = chunk__21292;
var G__21297 = count__21293;
var G__21298 = (i__21294 + (1));
seq__21291 = G__21295;
chunk__21292 = G__21296;
count__21293 = G__21297;
i__21294 = G__21298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21291);
if(temp__5753__auto__){
var seq__21291__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21291__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21291__$1);
var G__21299 = cljs.core.chunk_rest(seq__21291__$1);
var G__21300 = c__4591__auto__;
var G__21301 = cljs.core.count(c__4591__auto__);
var G__21302 = (0);
seq__21291 = G__21299;
chunk__21292 = G__21300;
count__21293 = G__21301;
i__21294 = G__21302;
continue;
} else {
var effect = cljs.core.first(seq__21291__$1);
re_frame.fx.dispatch_later(effect);


var G__21303 = cljs.core.next(seq__21291__$1);
var G__21304 = null;
var G__21305 = (0);
var G__21306 = (0);
seq__21291 = G__21303;
chunk__21292 = G__21304;
count__21293 = G__21305;
i__21294 = G__21306;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$fx,(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21307 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21308 = null;
var count__21309 = (0);
var i__21310 = (0);
while(true){
if((i__21310 < count__21309)){
var vec__21317 = chunk__21308.cljs$core$IIndexed$_nth$arity$2(null,i__21310);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21317,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21317,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21323 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21323)){
var effect_fn_21324 = temp__5751__auto___21323;
(effect_fn_21324.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21324.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21324.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21325 = seq__21307;
var G__21326 = chunk__21308;
var G__21327 = count__21309;
var G__21328 = (i__21310 + (1));
seq__21307 = G__21325;
chunk__21308 = G__21326;
count__21309 = G__21327;
i__21310 = G__21328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21307);
if(temp__5753__auto__){
var seq__21307__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21307__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21307__$1);
var G__21329 = cljs.core.chunk_rest(seq__21307__$1);
var G__21330 = c__4591__auto__;
var G__21331 = cljs.core.count(c__4591__auto__);
var G__21332 = (0);
seq__21307 = G__21329;
chunk__21308 = G__21330;
count__21309 = G__21331;
i__21310 = G__21332;
continue;
} else {
var vec__21320 = cljs.core.first(seq__21307__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21320,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21320,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21333 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21333)){
var effect_fn_21334 = temp__5751__auto___21333;
(effect_fn_21334.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21334.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21334.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21335 = cljs.core.next(seq__21307__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__21307 = G__21335;
chunk__21308 = G__21336;
count__21309 = G__21337;
i__21310 = G__21338;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21339 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21340 = null;
var count__21341 = (0);
var i__21342 = (0);
while(true){
if((i__21342 < count__21341)){
var event = chunk__21340.cljs$core$IIndexed$_nth$arity$2(null,i__21342);
re_frame.router.dispatch(event);


var G__21343 = seq__21339;
var G__21344 = chunk__21340;
var G__21345 = count__21341;
var G__21346 = (i__21342 + (1));
seq__21339 = G__21343;
chunk__21340 = G__21344;
count__21341 = G__21345;
i__21342 = G__21346;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21339);
if(temp__5753__auto__){
var seq__21339__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21339__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21339__$1);
var G__21347 = cljs.core.chunk_rest(seq__21339__$1);
var G__21348 = c__4591__auto__;
var G__21349 = cljs.core.count(c__4591__auto__);
var G__21350 = (0);
seq__21339 = G__21347;
chunk__21340 = G__21348;
count__21341 = G__21349;
i__21342 = G__21350;
continue;
} else {
var event = cljs.core.first(seq__21339__$1);
re_frame.router.dispatch(event);


var G__21351 = cljs.core.next(seq__21339__$1);
var G__21352 = null;
var G__21353 = (0);
var G__21354 = (0);
seq__21339 = G__21351;
chunk__21340 = G__21352;
count__21341 = G__21353;
i__21342 = G__21354;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21355 = cljs.core.seq(value);
var chunk__21356 = null;
var count__21357 = (0);
var i__21358 = (0);
while(true){
if((i__21358 < count__21357)){
var event = chunk__21356.cljs$core$IIndexed$_nth$arity$2(null,i__21358);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21359 = seq__21355;
var G__21360 = chunk__21356;
var G__21361 = count__21357;
var G__21362 = (i__21358 + (1));
seq__21355 = G__21359;
chunk__21356 = G__21360;
count__21357 = G__21361;
i__21358 = G__21362;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21355);
if(temp__5753__auto__){
var seq__21355__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21355__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21355__$1);
var G__21363 = cljs.core.chunk_rest(seq__21355__$1);
var G__21364 = c__4591__auto__;
var G__21365 = cljs.core.count(c__4591__auto__);
var G__21366 = (0);
seq__21355 = G__21363;
chunk__21356 = G__21364;
count__21357 = G__21365;
i__21358 = G__21366;
continue;
} else {
var event = cljs.core.first(seq__21355__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21367 = cljs.core.next(seq__21355__$1);
var G__21368 = null;
var G__21369 = (0);
var G__21370 = (0);
seq__21355 = G__21367;
chunk__21356 = G__21368;
count__21357 = G__21369;
i__21358 = G__21370;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
