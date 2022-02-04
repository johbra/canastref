// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.alert');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.box');
goog.require('re_com.buttons');
goog.require('re_com.close_button');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.validate');
re_com.alert.alert_box_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-alert-box",cljs.core.cst$kw$impl,"[alert-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$heading,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-alert-heading",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$h4,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-alert-h4",cljs.core.cst$kw$impl,"[:h4]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$close_DASH_button,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-alert-close-button",cljs.core.cst$kw$impl,"[close-button]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-alert-body",cljs.core.cst$kw$impl,"[h-box]"], null)], null):null);
re_com.alert.alert_box_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.alert.alert_box_parts_desc)):null);
re_com.alert.alert_box_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$id,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"anything",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$info,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.alert_type_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$heading,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"displayed as a larger heading. One of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":heading"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":body"], null)," should be provided"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$body,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"displayed within the body of the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"15px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$closeable_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)," of the alert to close"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.alert.alert_box_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Displays one alert box. A close button allows the message to be removed
 */
re_com.alert.alert_box = (function re_com$alert$alert_box(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20504 = arguments.length;
var i__4772__auto___20505 = (0);
while(true){
if((i__4772__auto___20505 < len__4771__auto___20504)){
args__4777__auto__.push((arguments[i__4772__auto___20505]));

var G__20506 = (i__4772__auto___20505 + (1));
i__4772__auto___20505 = G__20506;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__20501){
var map__20502 = p__20501;
var map__20502__$1 = cljs.core.__destructure_map(map__20502);
var args = map__20502__$1;
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$closeable_QMARK_);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$body);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$attr);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$heading);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$on_DASH_close);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20502__$1,cljs.core.cst$kw$alert_DASH_type,cljs.core.cst$kw$info);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$parts);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$style);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$id);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$class);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20502__$1,cljs.core.cst$kw$padding);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.alert.alert_box_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var close_alert = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,54], null)),cljs.core.cst$kw$class,["rc-alert-close-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_button,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_button,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$close_DASH_button,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$on_DASH_click,(function (){
return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
}),cljs.core.cst$kw$div_DASH_size,(20),cljs.core.cst$kw$font_DASH_size,(20)], null);
var alert_class = (function (){var G__20503 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$none,"",cljs.core.cst$kw$info,"alert-success",cljs.core.cst$kw$warning,"alert-warning",cljs.core.cst$kw$danger,"alert-danger"], null);
return (alert_type.cljs$core$IFn$_invoke$arity$1 ? alert_type.cljs$core$IFn$_invoke$arity$1(G__20503) : alert_type.call(null,G__20503));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-alert alert fade in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alert_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,padding], null),style], 0))], null),re_com.debug.__GT_attr(args),attr], 0)),(cljs.core.truth_(heading)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,74], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$class,["rc-alert-heading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$heading,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,(cljs.core.truth_(body)?"10px":"0px")], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$heading,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$heading,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["rc-alert-h4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"0px"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$style], null))], 0))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$attr], null))], 0)),heading], null),(cljs.core.truth_((function (){var and__4149__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return on_close;
} else {
return and__4149__auto__;
}
})())?close_alert:null)], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,92], null)),cljs.core.cst$kw$justify,cljs.core.cst$kw$between,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$class,["rc-alert-body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,body], null),(cljs.core.truth_(((cljs.core.not(heading))?(function (){var and__4149__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return on_close;
} else {
return and__4149__auto__;
}
})():false))?close_alert:null)], null)], null):null)], null);
}
}));

(re_com.alert.alert_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.alert.alert_box.cljs$lang$applyTo = (function (seq20500){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20500));
}));

re_com.alert.alert_list_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-alert-list-wrapper",cljs.core.cst$kw$impl,"[alert-list]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-alert-list",cljs.core.cst$kw$impl,"[border]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$scroller,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-alert-list-scroller",cljs.core.cst$kw$impl,"[scroller]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$v_DASH_box,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-alert-list-v-box",cljs.core.cst$kw$impl,"[v-box]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-alert-box",cljs.core.cst$kw$impl,"[alert-box]",cljs.core.cst$kw$name_DASH_label,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":alert-class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":alert-style"], null)," arguments instead."], null)], null)], null):null);
re_com.alert.alert_list_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.alert.alert_list_parts_desc)):null);
re_com.alert.alert_list_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alerts,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_close,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,":id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$padding,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"4px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$border_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"1px solid lightgrey",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to each alert-box component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$alert_DASH_style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles (applies to each alert-box component)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.alert.alert_list_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Displays a list of alert-box components in a v-box. Sample alerts object:
 *   [{:id 2
 *     :alert-type :warning
 *     :heading "Heading"
 *     :body "Body"
 *     :padding "8px"
 *     :closeable? true}
 *    {:id 1
 *     :alert-type :info
 *     :heading "Heading"
 *     :body "Body"}]
 */
re_com.alert.alert_list = (function re_com$alert$alert_list(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20516 = arguments.length;
var i__4772__auto___20517 = (0);
while(true){
if((i__4772__auto___20517 < len__4771__auto___20516)){
args__4777__auto__.push((arguments[i__4772__auto___20517]));

var G__20518 = (i__4772__auto___20517 + (1));
i__4772__auto___20517 = G__20518;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__20508){
var map__20509 = p__20508;
var map__20509__$1 = cljs.core.__destructure_map(map__20509);
var args = map__20509__$1;
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$attr);
var border_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$border_DASH_style);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$max_DASH_height);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$on_DASH_close);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$src);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$style);
var alert_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$alert_DASH_style);
var alert_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$alert_DASH_class);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$class);
var alerts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,cljs.core.cst$kw$alerts);
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20509__$1,cljs.core.cst$kw$padding,"4px");
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.alert.alert_list_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var alerts__$1 = re_com.util.deref_or_value(alerts);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$class,["rc-alert-list-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,160], null)),cljs.core.cst$kw$class,["rc-alert-list ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$attr,attr,cljs.core.cst$kw$padding,padding,cljs.core.cst$kw$border,border_style,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.scroller,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,167], null)),cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$class,["rc-alert-list-scroller ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroller,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_height,max_height], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroller,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scroller,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,174], null)),cljs.core.cst$kw$size,"auto",cljs.core.cst$kw$class,["rc-alert-list-v-box ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_box,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_box,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v_DASH_box,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__4564__auto__ = (function re_com$alert$iter__20510(s__20511){
return (new cljs.core.LazySeq(null,(function (){
var s__20511__$1 = s__20511;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__20511__$1);
if(temp__5753__auto__){
var s__20511__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20511__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__20511__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__20513 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__20512 = (0);
while(true){
if((i__20512 < size__4563__auto__)){
var alert = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__20512);
cljs.core.chunk_append(b__20513,(function (){var map__20514 = alert;
var map__20514__$1 = cljs.core.__destructure_map(map__20514);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,182], null)),cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close,cljs.core.cst$kw$class,alert_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alert_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(alert)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})());

var G__20519 = (i__20512 + (1));
i__20512 = G__20519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20513),re_com$alert$iter__20510(cljs.core.chunk_rest(s__20511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20513),null);
}
} else {
var alert = cljs.core.first(s__20511__$2);
return cljs.core.cons((function (){var map__20515 = alert;
var map__20515__$1 = cljs.core.__destructure_map(map__20515);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$id);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$alert_DASH_type);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$heading);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$body);
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$padding);
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,cljs.core.cst$kw$closeable_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/alert.cljs",cljs.core.cst$kw$line,182], null)),cljs.core.cst$kw$id,id,cljs.core.cst$kw$alert_DASH_type,alert_type,cljs.core.cst$kw$heading,heading,cljs.core.cst$kw$body,body,cljs.core.cst$kw$padding,padding__$1,cljs.core.cst$kw$closeable_QMARK_,closeable_QMARK_,cljs.core.cst$kw$on_DASH_close,on_close,cljs.core.cst$kw$class,alert_class,cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alert_style,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(alert)], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
})(),re_com$alert$iter__20510(cljs.core.rest(s__20511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(alerts__$1);
})()], null)], null)], null)], null)], null);
}
}));

(re_com.alert.alert_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.alert.alert_list.cljs$lang$applyTo = (function (seq20507){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20507));
}));

