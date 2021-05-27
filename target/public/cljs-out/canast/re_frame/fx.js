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
var _STAR_current_trace_STAR__orig_val__21195 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21196 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21196);

try{try{var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21231 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21231)){
var new_db_21232 = temp__5753__auto___21231;
var fexpr__21197_21233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21197_21233.cljs$core$IFn$_invoke$arity$1 ? fexpr__21197_21233.cljs$core$IFn$_invoke$arity$1(new_db_21232) : fexpr__21197_21233.call(null,new_db_21232));
} else {
}

var seq__21198 = cljs.core.seq(effects_without_db);
var chunk__21199 = null;
var count__21200 = (0);
var i__21201 = (0);
while(true){
if((i__21201 < count__21200)){
var vec__21208 = chunk__21199.cljs$core$IIndexed$_nth$arity$2(null,i__21201);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21208,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21208,(1),null);
var temp__5751__auto___21234 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21234)){
var effect_fn_21235 = temp__5751__auto___21234;
(effect_fn_21235.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21235.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21235.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21236 = seq__21198;
var G__21237 = chunk__21199;
var G__21238 = count__21200;
var G__21239 = (i__21201 + (1));
seq__21198 = G__21236;
chunk__21199 = G__21237;
count__21200 = G__21238;
i__21201 = G__21239;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21198);
if(temp__5753__auto__){
var seq__21198__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21198__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21198__$1);
var G__21240 = cljs.core.chunk_rest(seq__21198__$1);
var G__21241 = c__4591__auto__;
var G__21242 = cljs.core.count(c__4591__auto__);
var G__21243 = (0);
seq__21198 = G__21240;
chunk__21199 = G__21241;
count__21200 = G__21242;
i__21201 = G__21243;
continue;
} else {
var vec__21211 = cljs.core.first(seq__21198__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21211,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21211,(1),null);
var temp__5751__auto___21244 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21244)){
var effect_fn_21245 = temp__5751__auto___21244;
(effect_fn_21245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21245.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21246 = cljs.core.next(seq__21198__$1);
var G__21247 = null;
var G__21248 = (0);
var G__21249 = (0);
seq__21198 = G__21246;
chunk__21199 = G__21247;
count__21200 = G__21248;
i__21201 = G__21249;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__15490__auto___21250 = re_frame.interop.now();
var duration__15491__auto___21251 = (end__15490__auto___21250 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__15491__auto___21251,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__15490__auto___21250);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21195);
}} else {
var effects = cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,cljs.core.cst$kw$db);
var temp__5753__auto___21252 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21252)){
var new_db_21253 = temp__5753__auto___21252;
var fexpr__21214_21254 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,cljs.core.cst$kw$db,false);
(fexpr__21214_21254.cljs$core$IFn$_invoke$arity$1 ? fexpr__21214_21254.cljs$core$IFn$_invoke$arity$1(new_db_21253) : fexpr__21214_21254.call(null,new_db_21253));
} else {
}

var seq__21215 = cljs.core.seq(effects_without_db);
var chunk__21216 = null;
var count__21217 = (0);
var i__21218 = (0);
while(true){
if((i__21218 < count__21217)){
var vec__21225 = chunk__21216.cljs$core$IIndexed$_nth$arity$2(null,i__21218);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21225,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21225,(1),null);
var temp__5751__auto___21255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21255)){
var effect_fn_21256 = temp__5751__auto___21255;
(effect_fn_21256.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21256.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21256.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21257 = seq__21215;
var G__21258 = chunk__21216;
var G__21259 = count__21217;
var G__21260 = (i__21218 + (1));
seq__21215 = G__21257;
chunk__21216 = G__21258;
count__21217 = G__21259;
i__21218 = G__21260;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21215);
if(temp__5753__auto__){
var seq__21215__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21215__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21215__$1);
var G__21261 = cljs.core.chunk_rest(seq__21215__$1);
var G__21262 = c__4591__auto__;
var G__21263 = cljs.core.count(c__4591__auto__);
var G__21264 = (0);
seq__21215 = G__21261;
chunk__21216 = G__21262;
count__21217 = G__21263;
i__21218 = G__21264;
continue;
} else {
var vec__21228 = cljs.core.first(seq__21215__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21228,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21228,(1),null);
var temp__5751__auto___21265 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21265)){
var effect_fn_21266 = temp__5751__auto___21265;
(effect_fn_21266.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21266.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21266.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21267 = cljs.core.next(seq__21215__$1);
var G__21268 = null;
var G__21269 = (0);
var G__21270 = (0);
seq__21215 = G__21267;
chunk__21216 = G__21268;
count__21217 = G__21269;
i__21218 = G__21270;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21271){
var map__21272 = p__21271;
var map__21272__$1 = cljs.core.__destructure_map(map__21272);
var effect = map__21272__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21272__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21272__$1,cljs.core.cst$kw$dispatch);
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
var seq__21273 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21274 = null;
var count__21275 = (0);
var i__21276 = (0);
while(true){
if((i__21276 < count__21275)){
var effect = chunk__21274.cljs$core$IIndexed$_nth$arity$2(null,i__21276);
re_frame.fx.dispatch_later(effect);


var G__21277 = seq__21273;
var G__21278 = chunk__21274;
var G__21279 = count__21275;
var G__21280 = (i__21276 + (1));
seq__21273 = G__21277;
chunk__21274 = G__21278;
count__21275 = G__21279;
i__21276 = G__21280;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21273);
if(temp__5753__auto__){
var seq__21273__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21273__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21273__$1);
var G__21281 = cljs.core.chunk_rest(seq__21273__$1);
var G__21282 = c__4591__auto__;
var G__21283 = cljs.core.count(c__4591__auto__);
var G__21284 = (0);
seq__21273 = G__21281;
chunk__21274 = G__21282;
count__21275 = G__21283;
i__21276 = G__21284;
continue;
} else {
var effect = cljs.core.first(seq__21273__$1);
re_frame.fx.dispatch_later(effect);


var G__21285 = cljs.core.next(seq__21273__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__21273 = G__21285;
chunk__21274 = G__21286;
count__21275 = G__21287;
i__21276 = G__21288;
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
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21289 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21290 = null;
var count__21291 = (0);
var i__21292 = (0);
while(true){
if((i__21292 < count__21291)){
var vec__21299 = chunk__21290.cljs$core$IIndexed$_nth$arity$2(null,i__21292);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21299,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21299,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21305 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21305)){
var effect_fn_21306 = temp__5751__auto___21305;
(effect_fn_21306.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21306.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21306.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21307 = seq__21289;
var G__21308 = chunk__21290;
var G__21309 = count__21291;
var G__21310 = (i__21292 + (1));
seq__21289 = G__21307;
chunk__21290 = G__21308;
count__21291 = G__21309;
i__21292 = G__21310;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21289);
if(temp__5753__auto__){
var seq__21289__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21289__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21289__$1);
var G__21311 = cljs.core.chunk_rest(seq__21289__$1);
var G__21312 = c__4591__auto__;
var G__21313 = cljs.core.count(c__4591__auto__);
var G__21314 = (0);
seq__21289 = G__21311;
chunk__21290 = G__21312;
count__21291 = G__21313;
i__21292 = G__21314;
continue;
} else {
var vec__21302 = cljs.core.first(seq__21289__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21302,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db,effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21315 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21315)){
var effect_fn_21316 = temp__5751__auto___21315;
(effect_fn_21316.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21316.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21316.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21317 = cljs.core.next(seq__21289__$1);
var G__21318 = null;
var G__21319 = (0);
var G__21320 = (0);
seq__21289 = G__21317;
chunk__21290 = G__21318;
count__21291 = G__21319;
i__21292 = G__21320;
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
var seq__21321 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21322 = null;
var count__21323 = (0);
var i__21324 = (0);
while(true){
if((i__21324 < count__21323)){
var event = chunk__21322.cljs$core$IIndexed$_nth$arity$2(null,i__21324);
re_frame.router.dispatch(event);


var G__21325 = seq__21321;
var G__21326 = chunk__21322;
var G__21327 = count__21323;
var G__21328 = (i__21324 + (1));
seq__21321 = G__21325;
chunk__21322 = G__21326;
count__21323 = G__21327;
i__21324 = G__21328;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21321);
if(temp__5753__auto__){
var seq__21321__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21321__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21321__$1);
var G__21329 = cljs.core.chunk_rest(seq__21321__$1);
var G__21330 = c__4591__auto__;
var G__21331 = cljs.core.count(c__4591__auto__);
var G__21332 = (0);
seq__21321 = G__21329;
chunk__21322 = G__21330;
count__21323 = G__21331;
i__21324 = G__21332;
continue;
} else {
var event = cljs.core.first(seq__21321__$1);
re_frame.router.dispatch(event);


var G__21333 = cljs.core.next(seq__21321__$1);
var G__21334 = null;
var G__21335 = (0);
var G__21336 = (0);
seq__21321 = G__21333;
chunk__21322 = G__21334;
count__21323 = G__21335;
i__21324 = G__21336;
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
var seq__21337 = cljs.core.seq(value);
var chunk__21338 = null;
var count__21339 = (0);
var i__21340 = (0);
while(true){
if((i__21340 < count__21339)){
var event = chunk__21338.cljs$core$IIndexed$_nth$arity$2(null,i__21340);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21341 = seq__21337;
var G__21342 = chunk__21338;
var G__21343 = count__21339;
var G__21344 = (i__21340 + (1));
seq__21337 = G__21341;
chunk__21338 = G__21342;
count__21339 = G__21343;
i__21340 = G__21344;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21337);
if(temp__5753__auto__){
var seq__21337__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21337__$1)){
var c__4591__auto__ = cljs.core.chunk_first(seq__21337__$1);
var G__21345 = cljs.core.chunk_rest(seq__21337__$1);
var G__21346 = c__4591__auto__;
var G__21347 = cljs.core.count(c__4591__auto__);
var G__21348 = (0);
seq__21337 = G__21345;
chunk__21338 = G__21346;
count__21339 = G__21347;
i__21340 = G__21348;
continue;
} else {
var event = cljs.core.first(seq__21337__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21349 = cljs.core.next(seq__21337__$1);
var G__21350 = null;
var G__21351 = (0);
var G__21352 = (0);
seq__21337 = G__21349;
chunk__21338 = G__21350;
count__21339 = G__21351;
i__21340 = G__21352;
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
