// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('ajax.formats');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.interceptors');
goog.require('ajax.util');
goog.require('ajax.protocols');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var G__14608 = arguments.length;
switch (G__14608) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
}));

(ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
}));

(ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1);

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.util.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
/**
 * Converts one of a number of types to a response format.
 * Note that it processes `[text format]` the same as `format`,
 * which makes it easier to work with detection vectors such as
 * `default-formats`.
 * 
 * It also supports providing formats as raw functions. I don't 
 * know if anyone has ever used this.
 */
ajax.formats.get_format = (function ajax$formats$get_format(request,format_entry){
if((((format_entry == null)) || (cljs.core.map_QMARK_(format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
var G__14610 = request;
var G__14611 = cljs.core.second(format_entry);
return (ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 ? ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(G__14610,G__14611) : ajax.formats.get_format.call(null,G__14610,G__14611));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(content_type,accept){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});
ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries(request,format_entry);
return cljs.core.some((function (p1__14612_SHARP_){
return ajax.formats.content_type_matches(content_type,p1__14612_SHARP_);
}),accept);
});
ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__14613){
var map__14614 = p__14613;
var map__14614__$1 = cljs.core.__destructure_map(map__14614);
var request = map__14614__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$response_DASH_format);
var content_type = ajax.util.get_content_type(response);
var accepted_format_QMARK_ = (function ajax$formats$get_default_format_$_accepted_format_QMARK_(format_entry){
return ajax.formats.detect_content_type(content_type,request,format_entry);
});
return ajax.formats.get_format(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(accepted_format_QMARK_,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(request){
return (function ajax$formats$detect_response_format_read_$_detect_response_format(response){
var format = ajax.formats.get_default_format(response,request);
var fexpr__14615 = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__14615.cljs$core$IFn$_invoke$arity$1 ? fexpr__14615.cljs$core$IFn$_invoke$arity$1(response) : fexpr__14615.call(null,response));
});
});
ajax.formats.accept_header = (function ajax$formats$accept_header(p__14617){
var map__14618 = p__14617;
var map__14618__$1 = cljs.core.__destructure_map(map__14618);
var request = map__14618__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14618__$1,cljs.core.cst$kw$response_DASH_format);
var formats = ((cljs.core.vector_QMARK_(response_format))?response_format:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__14616_SHARP_){
return ajax.formats.get_accept_entries(request,p1__14616_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formats], 0));
});
/**
 * NB This version of the response format doesn't have a zero
 *   arity version. This is because it would involve pulling
 *   in every dependency. Instead, core.cljc adds it in.
 */
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){
var accept = ajax.formats.accept_header(opts);
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.formats.detect_response_format_read(opts),cljs.core.cst$kw$format,["(from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),")"].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});
