// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21145){
var vec__21146 = p__21145;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21146,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21146,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f)),cljs.core.cst$kw$fmt_SLASH_formatter))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),(function (p1__21144_SHARP_){
return cljs_time.core.to_default_time_zone(p1__21144_SHARP_);
})):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now();
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

var cljs_time$local$ILocalCoerce$to_local_date_time$dyn_21149 = (function (obj){
var x__4463__auto__ = (((obj == null))?null:obj);
var m__4464__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4464__auto__.call(null,obj));
} else {
var m__4461__auto__ = (cljs_time.local.to_local_date_time["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4461__auto__.call(null,obj));
} else {
throw cljs.core.missing_protocol("ILocalCoerce.to-local-date-time",obj);
}
}
});
/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
return cljs_time$local$ILocalCoerce$to_local_date_time$dyn_21149(obj);
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time(cljs_time.coerce.to_date_time(obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first((function (){var iter__4564__auto__ = (function cljs_time$local$from_local_string_$_iter__21150(s__21151){
return (new cljs.core.LazySeq(null,(function (){
var s__21151__$1 = s__21151;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21151__$1);
if(temp__5804__auto__){
var s__21151__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21151__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__21151__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__21153 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__21152 = (0);
while(true){
if((i__21152 < size__4563__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__21152);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21154){if((e21154 instanceof Error)){
var _ = e21154;
return null;
} else {
throw e21154;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__21153,d);

var G__21156 = (i__21152 + (1));
i__21152 = G__21156;
continue;
} else {
var G__21157 = (i__21152 + (1));
i__21152 = G__21157;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21153),cljs_time$local$from_local_string_$_iter__21150(cljs.core.chunk_rest(s__21151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21153),null);
}
} else {
var f = cljs.core.first(s__21151__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21155){if((e21155 instanceof Error)){
var _ = e21155;
return null;
} else {
throw e21155;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$local$from_local_string_$_iter__21150(cljs.core.rest(s__21151__$2)));
} else {
var G__21158 = cljs.core.rest(s__21151__$2);
s__21151__$1 = G__21158;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(cljs.core.vals(cljs_time.local._STAR_local_formatters_STAR_));
})());
});
goog.object.set(cljs_time.local.ILocalCoerce,"null",true);

goog.object.set(cljs_time.local.to_local_date_time,"null",(function (_){
return null;
}));

(Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(cljs_time.coerce.to_date_time(date__$1));
}));

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(date_time__$1);
}));

goog.object.set(cljs_time.local.ILocalCoerce,"number",true);

goog.object.set(cljs_time.local.to_local_date_time,"number",(function (long$){
return cljs_time.local.as_local_date_time_from_time_zone(long$);
}));

goog.object.set(cljs_time.local.ILocalCoerce,"string",true);

goog.object.set(cljs_time.local.to_local_date_time,"string",(function (string){
return cljs_time.local.from_local_string(string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__5804__auto__ = cljs_time.local.to_local_date_time(obj);
if(cljs.core.truth_(temp__5804__auto__)){
var dt = temp__5804__auto__;
var temp__5804__auto____$1 = (format_key.cljs$core$IFn$_invoke$arity$1 ? format_key.cljs$core$IFn$_invoke$arity$1(cljs_time.local._STAR_local_formatters_STAR_) : format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_));
if(cljs.core.truth_(temp__5804__auto____$1)){
var fmt = temp__5804__auto____$1;
return cljs_time.format.unparse(fmt,dt);
} else {
return null;
}
} else {
return null;
}
});
