// Compiled by ClojureScript 1.10.844 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.simple');
goog.require('ajax.xhrio');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__20698){
var vec__20699 = p__20698;
var success_QMARK_ = cljs.core.nth.call(null,vec__20699,(0),null);
var response = cljs.core.nth.call(null,vec__20699,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__20704){
var map__20705 = p__20704;
var map__20705__$1 = cljs.core.__destructure_map.call(null,map__20705);
var request = map__20705__$1;
var on_success = cljs.core.get.call(null,map__20705__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__20705__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__20702_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__20702_SHARP_));
}),(function (p1__20703_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__20703_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5751__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var on_request = temp__5751__auto__;
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__20706 = cljs.core.seq.call(null,seq_request_maps);
var chunk__20707 = null;
var count__20708 = (0);
var i__20709 = (0);
while(true){
if((i__20709 < count__20708)){
var request__$1 = cljs.core._nth.call(null,chunk__20707,i__20709);
var xhrio_20710 = ajax.simple.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));
day8.re_frame.http_fx.dispatch_on_request.call(null,request__$1,xhrio_20710);


var G__20711 = seq__20706;
var G__20712 = chunk__20707;
var G__20713 = count__20708;
var G__20714 = (i__20709 + (1));
seq__20706 = G__20711;
chunk__20707 = G__20712;
count__20708 = G__20713;
i__20709 = G__20714;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__20706);
if(temp__5753__auto__){
var seq__20706__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20706__$1)){
var c__4591__auto__ = cljs.core.chunk_first.call(null,seq__20706__$1);
var G__20715 = cljs.core.chunk_rest.call(null,seq__20706__$1);
var G__20716 = c__4591__auto__;
var G__20717 = cljs.core.count.call(null,c__4591__auto__);
var G__20718 = (0);
seq__20706 = G__20715;
chunk__20707 = G__20716;
count__20708 = G__20717;
i__20709 = G__20718;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__20706__$1);
var xhrio_20719 = ajax.simple.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));
day8.re_frame.http_fx.dispatch_on_request.call(null,request__$1,xhrio_20719);


var G__20720 = cljs.core.next.call(null,seq__20706__$1);
var G__20721 = null;
var G__20722 = (0);
var G__20723 = (0);
seq__20706 = G__20720;
chunk__20707 = G__20721;
count__20708 = G__20722;
i__20709 = G__20723;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);
