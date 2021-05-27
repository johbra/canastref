// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.buttons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_com.util');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.validate');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('reagent.core');
re_com.buttons.button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-button-wrapper",cljs.core.cst$kw$impl,"[button]",cljs.core.cst$kw$notes,"Outer wrapper of the button, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-button-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-button",cljs.core.cst$kw$impl,"[:button]",cljs.core.cst$kw$notes,"The actual button."], null)], null):null);
re_com.buttons.button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.button_parts_desc)):null);
re_com.buttons.button_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.button_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Returns the markup for a basic button
 */
re_com.buttons.button = (function re_com$buttons$button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__16187__delegate = function (p__16185){
var map__16186 = p__16185;
var map__16186__$1 = cljs.core.__destructure_map(map__16186);
var args = map__16186__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$attr);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$src);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$debug_DASH_as);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16186__$1,cljs.core.cst$kw$class,"btn-default");
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16186__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.button_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,["rc-button btn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),style], 0)),cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_((function (){var and__4149__auto__ = on_click;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4149__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),label], null);
if(cljs.core.truth_(disabled_QMARK___$1)){
cljs.core.reset_BANG_(showing_QMARK_,false);
} else {
}

return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$class,["rc-button-wrapper display-inline-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,81], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-button-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null):the_button)], null);
}
};
var G__16187 = function (var_args){
var p__16185 = null;
if (arguments.length > 0) {
var G__16188__i = 0, G__16188__a = new Array(arguments.length -  0);
while (G__16188__i < G__16188__a.length) {G__16188__a[G__16188__i] = arguments[G__16188__i + 0]; ++G__16188__i;}
  p__16185 = new cljs.core.IndexedSeq(G__16188__a,0,null);
} 
return G__16187__delegate.call(this,p__16185);};
G__16187.cljs$lang$maxFixedArity = 0;
G__16187.cljs$lang$applyTo = (function (arglist__16189){
var p__16185 = cljs.core.seq(arglist__16189);
return G__16187__delegate(p__16185);
});
G__16187.cljs$core$IFn$_invoke$arity$variadic = G__16187__delegate;
return G__16187;
})()
;
});
re_com.buttons.md_circle_icon_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-md-circle-icon-button-wrapper",cljs.core.cst$kw$impl,"[md-circle-icon-button]",cljs.core.cst$kw$notes,"Outer wrapper of the button, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-md-circle-icon-button-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-md-circle-icon-button",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The actual button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$icon,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-md-circle-icon-button-icon",cljs.core.cst$kw$impl,"[:i]",cljs.core.cst$kw$notes,"The button icon."], null)], null):null);
re_com.buttons.md_circle_icon_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.md_circle_icon_button_parts_desc)):null);
re_com.buttons.md_circle_icon_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.button_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$emphasise_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.md_circle_icon_button_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * a circular button containing a material design icon
 */
re_com.buttons.md_circle_icon_button = (function re_com$buttons$md_circle_icon_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render__delegate = function (p__16190){
var map__16191 = p__16190;
var map__16191__$1 = cljs.core.__destructure_map(map__16191);
var args = map__16191__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16191__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$src);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16191__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.md_circle_icon_button_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["noselect rc-md-circle-icon-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16193 = size;
var G__16193__$1 = (((G__16193 instanceof cljs.core.Keyword))?G__16193.fqn:null);
switch (G__16193__$1) {
case "smaller":
return "rc-circle-smaller ";

break;
case "larger":
return "rc-circle-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-circle-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-circle-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_((function (){var and__4149__auto__ = on_click;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4149__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)," rc-md-circle-icon-button-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$attr], null))], 0))], null)], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["display-inline-flex rc-md-circle-icon-button-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,170], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-md-circle-icon-button-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null):the_button)], null);
}
};
var re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render = function (var_args){
var p__16190 = null;
if (arguments.length > 0) {
var G__16195__i = 0, G__16195__a = new Array(arguments.length -  0);
while (G__16195__i < G__16195__a.length) {G__16195__a[G__16195__i] = arguments[G__16195__i + 0]; ++G__16195__i;}
  p__16190 = new cljs.core.IndexedSeq(G__16195__a,0,null);
} 
return re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render__delegate.call(this,p__16190);};
re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render.cljs$lang$applyTo = (function (arglist__16196){
var p__16190 = cljs.core.seq(arglist__16196);
return re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render__delegate(p__16190);
});
re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render__delegate;
return re_com$buttons$md_circle_icon_button_$_md_circle_icon_button_render;
})()
;
});
re_com.buttons.md_icon_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-md-icon-button-wrapper",cljs.core.cst$kw$impl,"[md-icon-button]",cljs.core.cst$kw$notes,"Outer wrapper of the button, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-md-icon-button-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-md-icon-button",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The actual button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$icon,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-md-icon-button-icon",cljs.core.cst$kw$impl,"[:i]",cljs.core.cst$kw$notes,"The button icon."], null)], null):null);
re_com.buttons.md_icon_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.md_icon_button_parts_desc)):null);
re_com.buttons.md_icon_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$size,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$regular,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.button_size_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$emphasise_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.md_icon_button_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * a square button containing a material design icon
 */
re_com.buttons.md_icon_button = (function re_com$buttons$md_icon_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$md_icon_button_$_md_icon_button_render__delegate = function (p__16197){
var map__16198 = p__16197;
var map__16198__$1 = cljs.core.__destructure_map(map__16198);
var args = map__16198__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$attr);
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$emphasise_QMARK_);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16198__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$src);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$on_DASH_click);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$size);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16198__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.md_icon_button_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["noselect rc-md-icon-button ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16200 = size;
var G__16200__$1 = (((G__16200 instanceof cljs.core.Keyword))?G__16200.fqn:null);
switch (G__16200__$1) {
case "smaller":
return "rc-icon-smaller ";

break;
case "larger":
return "rc-icon-larger ";

break;
default:
return " ";

}
})()),(cljs.core.truth_(emphasise_QMARK_)?"rc-icon-emphasis ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_((function (){var and__4149__auto__ = on_click;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4149__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)," rc-md-icon-button-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$attr], null))], 0))], null)], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["display-inline-flex rc-md-icon-button-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,259], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-md-icon-button-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null):the_button)], null);
}
};
var re_com$buttons$md_icon_button_$_md_icon_button_render = function (var_args){
var p__16197 = null;
if (arguments.length > 0) {
var G__16202__i = 0, G__16202__a = new Array(arguments.length -  0);
while (G__16202__i < G__16202__a.length) {G__16202__a[G__16202__i] = arguments[G__16202__i + 0]; ++G__16202__i;}
  p__16197 = new cljs.core.IndexedSeq(G__16202__a,0,null);
} 
return re_com$buttons$md_icon_button_$_md_icon_button_render__delegate.call(this,p__16197);};
re_com$buttons$md_icon_button_$_md_icon_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$md_icon_button_$_md_icon_button_render.cljs$lang$applyTo = (function (arglist__16203){
var p__16197 = cljs.core.seq(arglist__16203);
return re_com$buttons$md_icon_button_$_md_icon_button_render__delegate(p__16197);
});
re_com$buttons$md_icon_button_$_md_icon_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$md_icon_button_$_md_icon_button_render__delegate;
return re_com$buttons$md_icon_button_$_md_icon_button_render;
})()
;
});
re_com.buttons.info_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-info-button-popover-anchor-wrapper",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Outer wrapper of the button, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-info-button",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The actual button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$icon,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-info-button-icon",cljs.core.cst$kw$impl,"[:svg]",cljs.core.cst$kw$notes,"The button icon."], null)], null):null);
re_com.buttons.info_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.info_button_parts_desc)):null);
re_com.buttons.info_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$info,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what's shown in the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$right_DASH_below,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"250px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"width in px"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the popover wrapper)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.info_button_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * A tiny light grey button, with an 'i' in it. Meant to be unobtrusive.
 *   When pressed, displays a popup assumedly containing helpful information.
 *   Primarily designed to be nestled against the label of an input field, explaining the purpose of that field.
 *   Create a very small "i" icon via SVG
 */
re_com.buttons.info_button = (function re_com$buttons$info_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$info_button_$_info_button_render__delegate = function (p__16204){
var map__16205 = p__16204;
var map__16205__$1 = cljs.core.__destructure_map(map__16205);
var args = map__16205__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$disabled_QMARK_);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$attr);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$parts);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$src);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$debug_DASH_as);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$class);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$info);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.info_button_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$label,info,cljs.core.cst$kw$status,cljs.core.cst$kw$info,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$right_DASH_below;
}
})(),cljs.core.cst$kw$width,(function (){var or__4160__auto____$1 = width;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return "250px";
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$on_DASH_cancel,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
}),cljs.core.cst$kw$class,["rc-info-button-popover-anchor-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$anchor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["noselect rc-info-button ",(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.not(disabled_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);
} else {
}

return null;
})], null),attr], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"11",cljs.core.cst$kw$height,"11",cljs.core.cst$kw$class,["rc-info-button-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$attr], null))], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"5.5",cljs.core.cst$kw$r,"5.5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,"5.5",cljs.core.cst$kw$cy,"2.5",cljs.core.cst$kw$r,"1.4",cljs.core.cst$kw$fill,"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x1,"5.5",cljs.core.cst$kw$y1,"5.2",cljs.core.cst$kw$x2,"5.5",cljs.core.cst$kw$y2,"9.7",cljs.core.cst$kw$stroke,"white",cljs.core.cst$kw$stroke_DASH_width,"2.5"], null)], null)], null)], null)], null);
}
};
var re_com$buttons$info_button_$_info_button_render = function (var_args){
var p__16204 = null;
if (arguments.length > 0) {
var G__16206__i = 0, G__16206__a = new Array(arguments.length -  0);
while (G__16206__i < G__16206__a.length) {G__16206__a[G__16206__i] = arguments[G__16206__i + 0]; ++G__16206__i;}
  p__16204 = new cljs.core.IndexedSeq(G__16206__a,0,null);
} 
return re_com$buttons$info_button_$_info_button_render__delegate.call(this,p__16204);};
re_com$buttons$info_button_$_info_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$info_button_$_info_button_render.cljs$lang$applyTo = (function (arglist__16207){
var p__16204 = cljs.core.seq(arglist__16207);
return re_com$buttons$info_button_$_info_button_render__delegate(p__16204);
});
re_com$buttons$info_button_$_info_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$info_button_$_info_button_render__delegate;
return re_com$buttons$info_button_$_info_button_render;
})()
;
});
re_com.buttons.row_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-row-button-wrapper",cljs.core.cst$kw$impl,"[row-button]",cljs.core.cst$kw$notes,"Outer wrapper of the row button, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-row-button-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-row-button",cljs.core.cst$kw$impl,"[:div]",cljs.core.cst$kw$notes,"The actual button."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$icon,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-row-button-icon",cljs.core.cst$kw$impl,"[:i]",cljs.core.cst$kw$notes,"The button icon."], null)], null):null);
re_com.buttons.row_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.row_button_parts_desc)):null);
re_com.buttons.row_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$md_DASH_icon_DASH_name,cljs.core.cst$kw$required,true,cljs.core.cst$kw$default,"zmdi-plus",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"true if the mouse is hovering over the row"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.row_button_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * a small button containing a material design icon
 */
re_com.buttons.row_button = (function re_com$buttons$row_button(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$row_button_$_row_button_render__delegate = function (p__16208){
var map__16209 = p__16208;
var map__16209__$1 = cljs.core.__destructure_map(map__16209);
var args = map__16209__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$attr);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16209__$1,cljs.core.cst$kw$md_DASH_icon_DASH_name,"zmdi-plus");
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$src);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$tooltip_DASH_position);
var mouse_over_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16209__$1,cljs.core.cst$kw$mouse_DASH_over_DASH_row_QMARK_);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.row_button_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["noselect rc-row-button ",(cljs.core.truth_(mouse_over_row_QMARK_)?"rc-row-mouse-over-row ":null),(cljs.core.truth_(disabled_QMARK_)?"rc-row-disabled ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_((function (){var and__4149__auto__ = on_click;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4149__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,["zmdi zmdi-hc-fw-rc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(md_icon_name)," rc-row-button-icon ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$icon,cljs.core.cst$kw$attr], null))], 0))], null)], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["display-inline-flex rc-row-button-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,415], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-row-button-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null):the_button)], null);
}
};
var re_com$buttons$row_button_$_row_button_render = function (var_args){
var p__16208 = null;
if (arguments.length > 0) {
var G__16210__i = 0, G__16210__a = new Array(arguments.length -  0);
while (G__16210__i < G__16210__a.length) {G__16210__a[G__16210__i] = arguments[G__16210__i + 0]; ++G__16210__i;}
  p__16208 = new cljs.core.IndexedSeq(G__16210__a,0,null);
} 
return re_com$buttons$row_button_$_row_button_render__delegate.call(this,p__16208);};
re_com$buttons$row_button_$_row_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$row_button_$_row_button_render.cljs$lang$applyTo = (function (arglist__16211){
var p__16208 = cljs.core.seq(arglist__16211);
return re_com$buttons$row_button_$_row_button_render__delegate(p__16208);
});
re_com$buttons$row_button_$_row_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$row_button_$_row_button_render__delegate;
return re_com$buttons$row_button_$_row_button_render;
})()
;
});
re_com.buttons.hyperlink_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-hyperlink-wrapper",cljs.core.cst$kw$impl,"[hyperlink]",cljs.core.cst$kw$notes,"Outer wrapper of the hyperlink, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-hyperlink-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$container,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-hyperlink-container",cljs.core.cst$kw$impl,"[box]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-hyperlink",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,"The anchor."], null)], null):null);
re_com.buttons.hyperlink_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.hyperlink_parts_desc)):null);
re_com.buttons.hyperlink_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label/hiccup for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_click,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"-> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.hyperlink_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink = (function re_com$buttons$hyperlink(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$hyperlink_$_hyperlink_render__delegate = function (p__16212){
var map__16213 = p__16212;
var map__16213__$1 = cljs.core.__destructure_map(map__16213);
var args = map__16213__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$disabled_QMARK_);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$attr);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$src);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$debug_DASH_as);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16213__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var label__$1 = re_com.util.deref_or_value(label);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,470], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["rc-hyperlink-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$container,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["noselect rc-hyperlink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"default":"pointer"),cljs.core.cst$kw$pointer_DASH_events,(cljs.core.truth_(disabled_QMARK___$1)?"none":null),cljs.core.cst$kw$color,(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style], 0)),cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_((function (){var and__4149__auto__ = on_click;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__4149__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),label__$1], null)], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["display-inline-flex rc-hyperlink-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null)),cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,499], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-hyperlink-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null)),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null))], null):the_button)], null);
}
};
var re_com$buttons$hyperlink_$_hyperlink_render = function (var_args){
var p__16212 = null;
if (arguments.length > 0) {
var G__16214__i = 0, G__16214__a = new Array(arguments.length -  0);
while (G__16214__i < G__16214__a.length) {G__16214__a[G__16214__i] = arguments[G__16214__i + 0]; ++G__16214__i;}
  p__16212 = new cljs.core.IndexedSeq(G__16214__a,0,null);
} 
return re_com$buttons$hyperlink_$_hyperlink_render__delegate.call(this,p__16212);};
re_com$buttons$hyperlink_$_hyperlink_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$hyperlink_$_hyperlink_render.cljs$lang$applyTo = (function (arglist__16215){
var p__16212 = cljs.core.seq(arglist__16215);
return re_com$buttons$hyperlink_$_hyperlink_render__delegate(p__16212);
});
re_com$buttons$hyperlink_$_hyperlink_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$hyperlink_$_hyperlink_render__delegate;
return re_com$buttons$hyperlink_$_hyperlink_render;
})()
;
});
re_com.buttons.hyperlink_href_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-hyperlink-href-wrapper",cljs.core.cst$kw$impl,"[hyperlink-href]",cljs.core.cst$kw$notes,"Outer wrapper of the hyperlink-href, tooltip (if any), everything."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-hyperlink-href-tooltip",cljs.core.cst$kw$impl,"[popover-tooltip]",cljs.core.cst$kw$notes,"Tooltip, if enabled."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$legacy,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-hyperlink-href",cljs.core.cst$kw$impl,"[:a]",cljs.core.cst$kw$notes,"The anchor."], null)], null):null);
re_com.buttons.hyperlink_href_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.buttons.hyperlink_href_parts_desc)):null);
re_com.buttons.hyperlink_href_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$label,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | hiccup | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"label/hiccup for the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$href,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"if specified, the link target URL"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$target,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"_self",cljs.core.cst$kw$type,"string | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_atom_QMARK_,cljs.core.cst$kw$description,"one of \"_self\" or \"_blank\""], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string | hiccup",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.string_or_hiccup_QMARK_,cljs.core.cst$kw$description,"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$tooltip_DASH_position,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$type,"keyword",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.position_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$class,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"CSS style map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.css_style_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$attr,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"HTML attr map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.html_attr_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.buttons.hyperlink_href_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink_href = (function re_com$buttons$hyperlink_href(){
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$buttons$hyperlink_href_$_hyperlink_href_render__delegate = function (p__16216){
var map__16217 = p__16216;
var map__16217__$1 = cljs.core.__destructure_map(map__16217);
var args = map__16217__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$target);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$disabled_QMARK_);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$href);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$attr);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$parts);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$src);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$debug_DASH_as);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$label);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$class);
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,cljs.core.cst$kw$tooltip_DASH_position);
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_href_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.truth_(tooltip)){
} else {
cljs.core.reset_BANG_(showing_QMARK_,false);
}

var label__$1 = re_com.util.deref_or_value(label);
var href__$1 = re_com.util.deref_or_value(href);
var target__$1 = re_com.util.deref_or_value(target);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var the_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["rc-hyperlink-href noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"default":"pointer"),cljs.core.cst$kw$pointer_DASH_events,(cljs.core.truth_(disabled_QMARK___$1)?"none":null),cljs.core.cst$kw$color,(cljs.core.truth_(disabled_QMARK___$1)?"grey":null)], null),style], 0)),cljs.core.cst$kw$target,target__$1], null),((cljs.core.not(disabled_QMARK___$1))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,href__$1], null):null),(cljs.core.truth_(tooltip)?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_out,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,false);

return null;
})], null):null),attr], 0)),label__$1], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$1 = debug_as;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args], null);
}
})(),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$class,["rc-hyperlink-href-wrapper display-inline-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wrapper,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$child,(cljs.core.truth_(tooltip)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_tooltip,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/buttons.cljs",cljs.core.cst$kw$line,585], null)),cljs.core.cst$kw$label,tooltip,cljs.core.cst$kw$position,(function (){var or__4160__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
return cljs.core.cst$kw$below_DASH_center;
}
})(),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$anchor,the_button,cljs.core.cst$kw$class,["rc-hyperlink-href-tooltip ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$style], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$attr,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tooltip,cljs.core.cst$kw$attr], null),cljs.core.PersistentArrayMap.EMPTY)], null):the_button)], null);
}
};
var re_com$buttons$hyperlink_href_$_hyperlink_href_render = function (var_args){
var p__16216 = null;
if (arguments.length > 0) {
var G__16218__i = 0, G__16218__a = new Array(arguments.length -  0);
while (G__16218__i < G__16218__a.length) {G__16218__a[G__16218__i] = arguments[G__16218__i + 0]; ++G__16218__i;}
  p__16216 = new cljs.core.IndexedSeq(G__16218__a,0,null);
} 
return re_com$buttons$hyperlink_href_$_hyperlink_href_render__delegate.call(this,p__16216);};
re_com$buttons$hyperlink_href_$_hyperlink_href_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$hyperlink_href_$_hyperlink_href_render.cljs$lang$applyTo = (function (arglist__16219){
var p__16216 = cljs.core.seq(arglist__16219);
return re_com$buttons$hyperlink_href_$_hyperlink_href_render__delegate(p__16216);
});
re_com$buttons$hyperlink_href_$_hyperlink_href_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$hyperlink_href_$_hyperlink_href_render__delegate;
return re_com$buttons$hyperlink_href_$_hyperlink_href_render;
})()
;
});
