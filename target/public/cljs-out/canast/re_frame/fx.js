// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__13597 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13598 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13598);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___13631 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___13631)){
var new_db_13632 = temp__5753__auto___13631;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_13632);
} else {
}

var seq__13599 = cljs.core.seq.call(null,effects_without_db);
var chunk__13600 = null;
var count__13601 = (0);
var i__13602 = (0);
while(true){
if((i__13602 < count__13601)){
var vec__13609 = cljs.core._nth.call(null,chunk__13600,i__13602);
var effect_key = cljs.core.nth.call(null,vec__13609,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13609,(1),null);
var temp__5751__auto___13633 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13633)){
var effect_fn_13634 = temp__5751__auto___13633;
effect_fn_13634.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13635 = seq__13599;
var G__13636 = chunk__13600;
var G__13637 = count__13601;
var G__13638 = (i__13602 + (1));
seq__13599 = G__13635;
chunk__13600 = G__13636;
count__13601 = G__13637;
i__13602 = G__13638;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13599);
if(temp__5753__auto__){
var seq__13599__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13599__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13599__$1);
var G__13639 = cljs.core.chunk_rest.call(null,seq__13599__$1);
var G__13640 = c__4591__auto__;
var G__13641 = cljs.core.count.call(null,c__4591__auto__);
var G__13642 = (0);
seq__13599 = G__13639;
chunk__13600 = G__13640;
count__13601 = G__13641;
i__13602 = G__13642;
continue;
} else {
var vec__13612 = cljs.core.first.call(null,seq__13599__$1);
var effect_key = cljs.core.nth.call(null,vec__13612,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13612,(1),null);
var temp__5751__auto___13643 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13643)){
var effect_fn_13644 = temp__5751__auto___13643;
effect_fn_13644.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13645 = cljs.core.next.call(null,seq__13599__$1);
var G__13646 = null;
var G__13647 = (0);
var G__13648 = (0);
seq__13599 = G__13645;
chunk__13600 = G__13646;
count__13601 = G__13647;
i__13602 = G__13648;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13395__auto___13649 = re_frame.interop.now.call(null);
var duration__13396__auto___13650 = (end__13395__auto___13649 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13396__auto___13650,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__13395__auto___13649);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13597);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___13651 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___13651)){
var new_db_13652 = temp__5753__auto___13651;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_13652);
} else {
}

var seq__13615 = cljs.core.seq.call(null,effects_without_db);
var chunk__13616 = null;
var count__13617 = (0);
var i__13618 = (0);
while(true){
if((i__13618 < count__13617)){
var vec__13625 = cljs.core._nth.call(null,chunk__13616,i__13618);
var effect_key = cljs.core.nth.call(null,vec__13625,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13625,(1),null);
var temp__5751__auto___13653 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13653)){
var effect_fn_13654 = temp__5751__auto___13653;
effect_fn_13654.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13655 = seq__13615;
var G__13656 = chunk__13616;
var G__13657 = count__13617;
var G__13658 = (i__13618 + (1));
seq__13615 = G__13655;
chunk__13616 = G__13656;
count__13617 = G__13657;
i__13618 = G__13658;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13615);
if(temp__5753__auto__){
var seq__13615__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13615__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13615__$1);
var G__13659 = cljs.core.chunk_rest.call(null,seq__13615__$1);
var G__13660 = c__4591__auto__;
var G__13661 = cljs.core.count.call(null,c__4591__auto__);
var G__13662 = (0);
seq__13615 = G__13659;
chunk__13616 = G__13660;
count__13617 = G__13661;
i__13618 = G__13662;
continue;
} else {
var vec__13628 = cljs.core.first.call(null,seq__13615__$1);
var effect_key = cljs.core.nth.call(null,vec__13628,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13628,(1),null);
var temp__5751__auto___13663 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13663)){
var effect_fn_13664 = temp__5751__auto___13663;
effect_fn_13664.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__13665 = cljs.core.next.call(null,seq__13615__$1);
var G__13666 = null;
var G__13667 = (0);
var G__13668 = (0);
seq__13615 = G__13665;
chunk__13616 = G__13666;
count__13617 = G__13667;
i__13618 = G__13668;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__13669){
var map__13670 = p__13669;
var map__13670__$1 = cljs.core.__destructure_map.call(null,map__13670);
var effect = map__13670__$1;
var ms = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__13670__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__13671 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13672 = null;
var count__13673 = (0);
var i__13674 = (0);
while(true){
if((i__13674 < count__13673)){
var effect = cljs.core._nth.call(null,chunk__13672,i__13674);
re_frame.fx.dispatch_later.call(null,effect);


var G__13675 = seq__13671;
var G__13676 = chunk__13672;
var G__13677 = count__13673;
var G__13678 = (i__13674 + (1));
seq__13671 = G__13675;
chunk__13672 = G__13676;
count__13673 = G__13677;
i__13674 = G__13678;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13671);
if(temp__5753__auto__){
var seq__13671__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13671__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13671__$1);
var G__13679 = cljs.core.chunk_rest.call(null,seq__13671__$1);
var G__13680 = c__4591__auto__;
var G__13681 = cljs.core.count.call(null,c__4591__auto__);
var G__13682 = (0);
seq__13671 = G__13679;
chunk__13672 = G__13680;
count__13673 = G__13681;
i__13674 = G__13682;
continue;
} else {
var effect = cljs.core.first.call(null,seq__13671__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__13683 = cljs.core.next.call(null,seq__13671__$1);
var G__13684 = null;
var G__13685 = (0);
var G__13686 = (0);
seq__13671 = G__13683;
chunk__13672 = G__13684;
count__13673 = G__13685;
i__13674 = G__13686;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__13687 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__13688 = null;
var count__13689 = (0);
var i__13690 = (0);
while(true){
if((i__13690 < count__13689)){
var vec__13697 = cljs.core._nth.call(null,chunk__13688,i__13690);
var effect_key = cljs.core.nth.call(null,vec__13697,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13697,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___13703 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13703)){
var effect_fn_13704 = temp__5751__auto___13703;
effect_fn_13704.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__13705 = seq__13687;
var G__13706 = chunk__13688;
var G__13707 = count__13689;
var G__13708 = (i__13690 + (1));
seq__13687 = G__13705;
chunk__13688 = G__13706;
count__13689 = G__13707;
i__13690 = G__13708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13687);
if(temp__5753__auto__){
var seq__13687__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13687__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13687__$1);
var G__13709 = cljs.core.chunk_rest.call(null,seq__13687__$1);
var G__13710 = c__4591__auto__;
var G__13711 = cljs.core.count.call(null,c__4591__auto__);
var G__13712 = (0);
seq__13687 = G__13709;
chunk__13688 = G__13710;
count__13689 = G__13711;
i__13690 = G__13712;
continue;
} else {
var vec__13700 = cljs.core.first.call(null,seq__13687__$1);
var effect_key = cljs.core.nth.call(null,vec__13700,(0),null);
var effect_value = cljs.core.nth.call(null,vec__13700,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5751__auto___13713 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___13713)){
var effect_fn_13714 = temp__5751__auto___13713;
effect_fn_13714.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__13715 = cljs.core.next.call(null,seq__13687__$1);
var G__13716 = null;
var G__13717 = (0);
var G__13718 = (0);
seq__13687 = G__13715;
chunk__13688 = G__13716;
count__13689 = G__13717;
i__13690 = G__13718;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__13719 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__13720 = null;
var count__13721 = (0);
var i__13722 = (0);
while(true){
if((i__13722 < count__13721)){
var event = cljs.core._nth.call(null,chunk__13720,i__13722);
re_frame.router.dispatch.call(null,event);


var G__13723 = seq__13719;
var G__13724 = chunk__13720;
var G__13725 = count__13721;
var G__13726 = (i__13722 + (1));
seq__13719 = G__13723;
chunk__13720 = G__13724;
count__13721 = G__13725;
i__13722 = G__13726;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13719);
if(temp__5753__auto__){
var seq__13719__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13719__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13719__$1);
var G__13727 = cljs.core.chunk_rest.call(null,seq__13719__$1);
var G__13728 = c__4591__auto__;
var G__13729 = cljs.core.count.call(null,c__4591__auto__);
var G__13730 = (0);
seq__13719 = G__13727;
chunk__13720 = G__13728;
count__13721 = G__13729;
i__13722 = G__13730;
continue;
} else {
var event = cljs.core.first.call(null,seq__13719__$1);
re_frame.router.dispatch.call(null,event);


var G__13731 = cljs.core.next.call(null,seq__13719__$1);
var G__13732 = null;
var G__13733 = (0);
var G__13734 = (0);
seq__13719 = G__13731;
chunk__13720 = G__13732;
count__13721 = G__13733;
i__13722 = G__13734;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__13735 = cljs.core.seq.call(null,value);
var chunk__13736 = null;
var count__13737 = (0);
var i__13738 = (0);
while(true){
if((i__13738 < count__13737)){
var event = cljs.core._nth.call(null,chunk__13736,i__13738);
clear_event.call(null,event);


var G__13739 = seq__13735;
var G__13740 = chunk__13736;
var G__13741 = count__13737;
var G__13742 = (i__13738 + (1));
seq__13735 = G__13739;
chunk__13736 = G__13740;
count__13737 = G__13741;
i__13738 = G__13742;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__13735);
if(temp__5753__auto__){
var seq__13735__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13735__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__13735__$1);
var G__13743 = cljs.core.chunk_rest.call(null,seq__13735__$1);
var G__13744 = c__4591__auto__;
var G__13745 = cljs.core.count.call(null,c__4591__auto__);
var G__13746 = (0);
seq__13735 = G__13743;
chunk__13736 = G__13744;
count__13737 = G__13745;
i__13738 = G__13746;
continue;
} else {
var event = cljs.core.first.call(null,seq__13735__$1);
clear_event.call(null,event);


var G__13747 = cljs.core.next.call(null,seq__13735__$1);
var G__13748 = null;
var G__13749 = (0);
var G__13750 = (0);
seq__13735 = G__13747;
chunk__13736 = G__13748;
count__13737 = G__13749;
i__13738 = G__13750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
