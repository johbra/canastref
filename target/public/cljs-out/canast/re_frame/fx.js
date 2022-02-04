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
var _STAR_current_trace_STAR__orig_val__21196 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21197 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21197);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21232 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21232)){
var new_db_21233 = temp__5753__auto___21232;
var fexpr__21198_21234 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21198_21234.cljs$core$IFn$_invoke$arity$1 ? fexpr__21198_21234.cljs$core$IFn$_invoke$arity$1(new_db_21233) : fexpr__21198_21234.call(null,new_db_21233));
} else {
}

var seq__21199 = cljs.core.seq(effects_without_db);
var chunk__21200 = null;
var count__21201 = (0);
var i__21202 = (0);
while(true){
if((i__21202 < count__21201)){
var vec__21209 = chunk__21200.cljs$core$IIndexed$_nth$arity$2(null,i__21202);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21209,(1),null);
var temp__5751__auto___21235 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21235)){
var effect_fn_21236 = temp__5751__auto___21235;
(effect_fn_21236.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21236.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21236.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21237 = seq__21199;
var G__21238 = chunk__21200;
var G__21239 = count__21201;
var G__21240 = (i__21202 + (1));
seq__21199 = G__21237;
chunk__21200 = G__21238;
count__21201 = G__21239;
i__21202 = G__21240;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21199);
if(temp__5753__auto__){
var seq__21199__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21199__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21199__$1);
var G__21241 = cljs.core.chunk_rest(seq__21199__$1);
var G__21242 = c__4591__auto__;
var G__21243 = cljs.core.count(c__4591__auto__);
var G__21244 = (0);
seq__21199 = G__21241;
chunk__21200 = G__21242;
count__21201 = G__21243;
i__21202 = G__21244;
continue;
} else {
var vec__21212 = cljs.core.first(seq__21199__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21212,(1),null);
var temp__5751__auto___21245 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21245)){
var effect_fn_21246 = temp__5751__auto___21245;
(effect_fn_21246.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21246.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21246.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21247 = cljs.core.next(seq__21199__$1);
var G__21248 = null;
var G__21249 = (0);
var G__21250 = (0);
seq__21199 = G__21247;
chunk__21200 = G__21248;
count__21201 = G__21249;
i__21202 = G__21250;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__15490__auto___21251 = re_frame.interop.now();
var duration__15491__auto___21252 = (end__15490__auto___21251 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__15491__auto___21252,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__15490__auto___21251);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21196);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21253 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21253)){
var new_db_21254 = temp__5753__auto___21253;
var fexpr__21215_21255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21215_21255.cljs$core$IFn$_invoke$arity$1 ? fexpr__21215_21255.cljs$core$IFn$_invoke$arity$1(new_db_21254) : fexpr__21215_21255.call(null,new_db_21254));
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
var temp__5751__auto___21256 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21256)){
var effect_fn_21257 = temp__5751__auto___21256;
(effect_fn_21257.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21257.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21257.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21258 = seq__21216;
var G__21259 = chunk__21217;
var G__21260 = count__21218;
var G__21261 = (i__21219 + (1));
seq__21216 = G__21258;
chunk__21217 = G__21259;
count__21218 = G__21260;
i__21219 = G__21261;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21216);
if(temp__5753__auto__){
var seq__21216__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21216__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21216__$1);
var G__21262 = cljs.core.chunk_rest(seq__21216__$1);
var G__21263 = c__4591__auto__;
var G__21264 = cljs.core.count(c__4591__auto__);
var G__21265 = (0);
seq__21216 = G__21262;
chunk__21217 = G__21263;
count__21218 = G__21264;
i__21219 = G__21265;
continue;
} else {
var vec__21229 = cljs.core.first(seq__21216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21229,(1),null);
var temp__5751__auto___21266 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21266)){
var effect_fn_21267 = temp__5751__auto___21266;
(effect_fn_21267.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21267.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21267.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21268 = cljs.core.next(seq__21216__$1);
var G__21269 = null;
var G__21270 = (0);
var G__21271 = (0);
seq__21216 = G__21268;
chunk__21217 = G__21269;
count__21218 = G__21270;
i__21219 = G__21271;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21272){
var map__21273 = p__21272;
var map__21273__$1 = cljs.core.__destructure_map(map__21273);
var effect = map__21273__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21273__$1,cljs.core.cst$kw$dispatch);
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
var seq__21274 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21275 = null;
var count__21276 = (0);
var i__21277 = (0);
while(true){
if((i__21277 < count__21276)){
var effect = chunk__21275.cljs$core$IIndexed$_nth$arity$2(null,i__21277);
re_frame.fx.dispatch_later(effect);


var G__21278 = seq__21274;
var G__21279 = chunk__21275;
var G__21280 = count__21276;
var G__21281 = (i__21277 + (1));
seq__21274 = G__21278;
chunk__21275 = G__21279;
count__21276 = G__21280;
i__21277 = G__21281;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21274);
if(temp__5753__auto__){
var seq__21274__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21274__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21274__$1);
var G__21282 = cljs.core.chunk_rest(seq__21274__$1);
var G__21283 = c__4591__auto__;
var G__21284 = cljs.core.count(c__4591__auto__);
var G__21285 = (0);
seq__21274 = G__21282;
chunk__21275 = G__21283;
count__21276 = G__21284;
i__21277 = G__21285;
continue;
} else {
var effect = cljs.core.first(seq__21274__$1);
re_frame.fx.dispatch_later(effect);


var G__21286 = cljs.core.next(seq__21274__$1);
var G__21287 = null;
var G__21288 = (0);
var G__21289 = (0);
seq__21274 = G__21286;
chunk__21275 = G__21287;
count__21276 = G__21288;
i__21277 = G__21289;
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
var seq__21290 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21291 = null;
var count__21292 = (0);
var i__21293 = (0);
while(true){
if((i__21293 < count__21292)){
var vec__21300 = chunk__21291.cljs$core$IIndexed$_nth$arity$2(null,i__21293);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21300,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21300,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21306 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21306)){
var effect_fn_21307 = temp__5751__auto___21306;
(effect_fn_21307.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21307.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21307.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21308 = seq__21290;
var G__21309 = chunk__21291;
var G__21310 = count__21292;
var G__21311 = (i__21293 + (1));
seq__21290 = G__21308;
chunk__21291 = G__21309;
count__21292 = G__21310;
i__21293 = G__21311;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21290);
if(temp__5753__auto__){
var seq__21290__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21290__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21290__$1);
var G__21312 = cljs.core.chunk_rest(seq__21290__$1);
var G__21313 = c__4591__auto__;
var G__21314 = cljs.core.count(c__4591__auto__);
var G__21315 = (0);
seq__21290 = G__21312;
chunk__21291 = G__21313;
count__21292 = G__21314;
i__21293 = G__21315;
continue;
} else {
var vec__21303 = cljs.core.first(seq__21290__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21303,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21303,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21316 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21316)){
var effect_fn_21317 = temp__5751__auto___21316;
(effect_fn_21317.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21317.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21317.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21318 = cljs.core.next(seq__21290__$1);
var G__21319 = null;
var G__21320 = (0);
var G__21321 = (0);
seq__21290 = G__21318;
chunk__21291 = G__21319;
count__21292 = G__21320;
i__21293 = G__21321;
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
var seq__21322 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21323 = null;
var count__21324 = (0);
var i__21325 = (0);
while(true){
if((i__21325 < count__21324)){
var event = chunk__21323.cljs$core$IIndexed$_nth$arity$2(null,i__21325);
re_frame.router.dispatch(event);


var G__21326 = seq__21322;
var G__21327 = chunk__21323;
var G__21328 = count__21324;
var G__21329 = (i__21325 + (1));
seq__21322 = G__21326;
chunk__21323 = G__21327;
count__21324 = G__21328;
i__21325 = G__21329;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21322);
if(temp__5753__auto__){
var seq__21322__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21322__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21322__$1);
var G__21330 = cljs.core.chunk_rest(seq__21322__$1);
var G__21331 = c__4591__auto__;
var G__21332 = cljs.core.count(c__4591__auto__);
var G__21333 = (0);
seq__21322 = G__21330;
chunk__21323 = G__21331;
count__21324 = G__21332;
i__21325 = G__21333;
continue;
} else {
var event = cljs.core.first(seq__21322__$1);
re_frame.router.dispatch(event);


var G__21334 = cljs.core.next(seq__21322__$1);
var G__21335 = null;
var G__21336 = (0);
var G__21337 = (0);
seq__21322 = G__21334;
chunk__21323 = G__21335;
count__21324 = G__21336;
i__21325 = G__21337;
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
var seq__21338 = cljs.core.seq(value);
var chunk__21339 = null;
var count__21340 = (0);
var i__21341 = (0);
while(true){
if((i__21341 < count__21340)){
var event = chunk__21339.cljs$core$IIndexed$_nth$arity$2(null,i__21341);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21342 = seq__21338;
var G__21343 = chunk__21339;
var G__21344 = count__21340;
var G__21345 = (i__21341 + (1));
seq__21338 = G__21342;
chunk__21339 = G__21343;
count__21340 = G__21344;
i__21341 = G__21345;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21338);
if(temp__5753__auto__){
var seq__21338__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21338__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21338__$1);
var G__21346 = cljs.core.chunk_rest(seq__21338__$1);
var G__21347 = c__4591__auto__;
var G__21348 = cljs.core.count(c__4591__auto__);
var G__21349 = (0);
seq__21338 = G__21346;
chunk__21339 = G__21347;
count__21340 = G__21348;
i__21341 = G__21349;
continue;
} else {
var event = cljs.core.first(seq__21338__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21350 = cljs.core.next(seq__21338__$1);
var G__21351 = null;
var G__21352 = (0);
var G__21353 = (0);
seq__21338 = G__21350;
chunk__21339 = G__21351;
count__21340 = G__21352;
i__21341 = G__21353;
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
