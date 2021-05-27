// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14622 = e.target.readyState;
var fexpr__14621 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__14621.cljs$core$IFn$_invoke$arity$1 ? fexpr__14621.cljs$core$IFn$_invoke$arity$1(G__14622) : fexpr__14621.call(null,G__14622));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14624,handler){
var map__14625 = p__14624;
var map__14625__$1 = cljs.core.__destructure_map(map__14625);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14625__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14625__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__14623_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14623_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___14642 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___14642)){
var response_type_14643 = temp__5753__auto___14642;
(this$__$1.responseType = cljs.core.name(response_type_14643));
} else {
}

var seq__14626_14644 = cljs.core.seq(headers);
var chunk__14627_14645 = null;
var count__14628_14646 = (0);
var i__14629_14647 = (0);
while(true){
if((i__14629_14647 < count__14628_14646)){
var vec__14636_14648 = chunk__14627_14645.cljs$core$IIndexed$_nth$arity$2(null,i__14629_14647);
var k_14649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636_14648,(0),null);
var v_14650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14636_14648,(1),null);
this$__$1.setRequestHeader(k_14649,v_14650);


var G__14651 = seq__14626_14644;
var G__14652 = chunk__14627_14645;
var G__14653 = count__14628_14646;
var G__14654 = (i__14629_14647 + (1));
seq__14626_14644 = G__14651;
chunk__14627_14645 = G__14652;
count__14628_14646 = G__14653;
i__14629_14647 = G__14654;
continue;
} else {
var temp__5753__auto___14655 = cljs.core.seq(seq__14626_14644);
if(temp__5753__auto___14655){
var seq__14626_14656__$1 = temp__5753__auto___14655;
if(cljs.core.chunked_seq_QMARK_(seq__14626_14656__$1)){
var c__4591__auto___14657 = cljs.core.chunk_first(seq__14626_14656__$1);
var G__14658 = cljs.core.chunk_rest(seq__14626_14656__$1);
var G__14659 = c__4591__auto___14657;
var G__14660 = cljs.core.count(c__4591__auto___14657);
var G__14661 = (0);
seq__14626_14644 = G__14658;
chunk__14627_14645 = G__14659;
count__14628_14646 = G__14660;
i__14629_14647 = G__14661;
continue;
} else {
var vec__14639_14662 = cljs.core.first(seq__14626_14656__$1);
var k_14663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639_14662,(0),null);
var v_14664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14639_14662,(1),null);
this$__$1.setRequestHeader(k_14663,v_14664);


var G__14665 = cljs.core.next(seq__14626_14656__$1);
var G__14666 = null;
var G__14667 = (0);
var G__14668 = (0);
seq__14626_14644 = G__14665;
chunk__14627_14645 = G__14666;
count__14628_14646 = G__14667;
i__14629_14647 = G__14668;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4160__auto__ = body;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
