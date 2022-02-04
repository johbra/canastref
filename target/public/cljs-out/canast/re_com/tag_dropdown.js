// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('re_com.tag_dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('reagent.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.validate');
goog.require('re_com.box');
goog.require('re_com.checkbox');
goog.require('re_com.selection_list');
goog.require('re_com.close_button');
goog.require('re_com.popover');
re_com.tag_dropdown.label_style = (function re_com$tag_dropdown$label_style(var_args){
var G__20943 = arguments.length;
switch (G__20943) {
case 2:
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$2 = (function (selected_QMARK_,as_exclusions_QMARK_){
return re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3(selected_QMARK_,as_exclusions_QMARK_,null);
}));

(re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$3 = (function (selected_QMARK_,as_exclusions_QMARK_,selected_color){
var base_style = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"1px",cljs.core.cst$kw$color,"#333"], null);
var base_style__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return as_exclusions_QMARK_;
} else {
return and__4149__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"line-through"], null)], 0)):base_style);
var base_style__$2 = (cljs.core.truth_((function (){var and__4149__auto__ = selected_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return selected_color;
} else {
return and__4149__auto__;
}
})())?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_style__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,selected_color], null)], 0)):base_style__$1);
return base_style__$2;
}));

(re_com.tag_dropdown.label_style.cljs$lang$maxFixedArity = 3);

re_com.tag_dropdown.check_clicked = (function re_com$tag_dropdown$check_clicked(selections,item_id,ticked_QMARK_,required_QMARK_){
var num_selected = cljs.core.count(selections);
var only_item = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num_selected))?cljs.core.first(selections):null);
if(cljs.core.truth_((function (){var and__4149__auto__ = required_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(only_item,item_id);
} else {
return and__4149__auto__;
}
})())){
return selections;
} else {
if(cljs.core.truth_(ticked_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selections,item_id);
}
}
});
re_com.tag_dropdown.as_checked = (function re_com$tag_dropdown$as_checked(item,id_fn,selections,on_change,disabled_QMARK_,label_fn,required_QMARK_,as_exclusions_QMARK_){
var item_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$class,"list-group-item ",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"4px 8px 4px 8px"], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(cljs.core.truth_(disabled_QMARK_)){
} else {
var G__20945_20946 = re_com.tag_dropdown.check_clicked(selections,item_id,cljs.core.not((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id))),required_QMARK_);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20945_20946) : on_change.call(null,G__20945_20946));
}

return null;
})], null),cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.checkbox.checkbox,cljs.core.cst$kw$model,(!(((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)) == null))),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.List.EMPTY;
}),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK_,cljs.core.cst$kw$label_DASH_style,re_com.tag_dropdown.label_style.cljs$core$IFn$_invoke$arity$2((selections.cljs$core$IFn$_invoke$arity$1 ? selections.cljs$core$IFn$_invoke$arity$1(item_id) : selections.call(null,item_id)),as_exclusions_QMARK_),cljs.core.cst$kw$label,(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null)], null);
});
re_com.tag_dropdown.text_tag = (function re_com$tag_dropdown$text_tag(){
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$tag_dropdown$text_tag_$_text_tag_render__delegate = function (p__20947){
var map__20948 = p__20947;
var map__20948__$1 = cljs.core.__destructure_map(map__20948);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_unselect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$on_DASH_unselect);
var hover_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$hover_DASH_style);
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$tooltip);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$attr);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20948__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var description_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$description_DASH_fn);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$parts);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20948__$1,cljs.core.cst$kw$id_DASH_fn,cljs.core.cst$kw$id);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$on_DASH_click);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$style);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$class);
var tag_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20948__$1,cljs.core.cst$kw$tag_DASH_data);
var tag_id = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : id_fn.call(null,tag_data));
var tag_id_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag_id);
var clickable_QMARK_ = (((!((on_click == null)))) && (cljs.core.not(disabled_QMARK_)));
var unselectable_QMARK_ = (((!((on_unselect == null)))) && (cljs.core.not(disabled_QMARK_)));
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tag_data),cljs.core.cst$kw$$placeholder$);
var border = ((placeholder_QMARK_)?"1px dashed #828282":null);
var tag_label = (label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : label_fn.call(null,tag_data));
var tag_description = (cljs.core.truth_(description_fn)?(description_fn.cljs$core$IFn$_invoke$arity$1 ? description_fn.cljs$core$IFn$_invoke$arity$1(tag_data) : description_fn.call(null,tag_data)):null);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,81], null)),cljs.core.cst$kw$class,["rc-tag-dropdown-tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$class], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$style], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$attr], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_id_kw,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$align,cljs.core.cst$kw$start,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,87], null)),cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$start,cljs.core.cst$kw$justify,((placeholder_QMARK_)?cljs.core.cst$kw$end:cljs.core.cst$kw$center),cljs.core.cst$kw$min_DASH_width,((placeholder_QMARK_)?cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(tag_data):null),cljs.core.cst$kw$padding,"0px 4px",cljs.core.cst$kw$margin,re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2),((placeholder_QMARK_)?(0):(6)),(2),(0)], 0)),cljs.core.cst$kw$class,["noselect rc-text-tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$color,"white",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$background_DASH_color.cljs$core$IFn$_invoke$arity$1(tag_data),cljs.core.cst$kw$cursor,((cljs.core.not(disabled_QMARK_))?"pointer":"default"),cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$border,border,cljs.core.cst$kw$border_DASH_radius,"3px"], null),(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.deref(over_QMARK_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__4149__auto__;
}
})())?hover_style:null),style], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,tooltip,cljs.core.cst$kw$on_DASH_click,(function (event){
if(((placeholder_QMARK_) && (cljs.core.not(disabled_QMARK_)))){
var G__20949_20952 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tag_data);
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__20949_20952) : on_click.call(null,G__20949_20952));
} else {
}

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_enter,(function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
})], null),attr], 0)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((placeholder_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,116], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"hsl(194, 61%, 85%)"], null),cljs.core.cst$kw$child,goog.string.unescapeEntities("&#9660;")], null):new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,120], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,((clickable_QMARK_)?"pointer":null)], null),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
if(clickable_QMARK_){
var G__20950_20953 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tag_data);
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__20950_20953) : on_click.call(null,G__20950_20953));
} else {
}

return null;
})], null),cljs.core.cst$kw$child,(function (){var or__4160__auto__ = tag_label;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return "???";
}
})()], null)),((((unselectable_QMARK_) && ((!(placeholder_QMARK_)))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,129], null)),cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,132], null)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_left,"4px",cljs.core.cst$kw$margin_DASH_right,"3px"], null),cljs.core.cst$kw$child,"|"], null),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,137], null)),cljs.core.cst$kw$color,"white",cljs.core.cst$kw$hover_DASH_color,"#ccc",cljs.core.cst$kw$div_DASH_size,(13),cljs.core.cst$kw$font_DASH_size,(13),cljs.core.cst$kw$top_DASH_offset,(1),cljs.core.cst$kw$on_DASH_click,(function (){
if(unselectable_QMARK_){
var G__20951 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tag_data);
return (on_unselect.cljs$core$IFn$_invoke$arity$1 ? on_unselect.cljs$core$IFn$_invoke$arity$1(G__20951) : on_unselect.call(null,G__20951));
} else {
return null;
}
})], null)], null)], null):null)], null)], null),(cljs.core.truth_(tag_description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#586069"], null)], null),tag_description], null):null)], null)], null);
};
var re_com$tag_dropdown$text_tag_$_text_tag_render = function (var_args){
var p__20947 = null;
if (arguments.length > 0) {
var G__20954__i = 0, G__20954__a = new Array(arguments.length -  0);
while (G__20954__i < G__20954__a.length) {G__20954__a[G__20954__i] = arguments[G__20954__i + 0]; ++G__20954__i;}
  p__20947 = new cljs.core.IndexedSeq(G__20954__a,0,null);
} 
return re_com$tag_dropdown$text_tag_$_text_tag_render__delegate.call(this,p__20947);};
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$lang$maxFixedArity = 0;
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$lang$applyTo = (function (arglist__20955){
var p__20947 = cljs.core.seq(arglist__20955);
return re_com$tag_dropdown$text_tag_$_text_tag_render__delegate(p__20947);
});
re_com$tag_dropdown$text_tag_$_text_tag_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tag_dropdown$text_tag_$_text_tag_render__delegate;
return re_com$tag_dropdown$text_tag_$_text_tag_render;
})()
;
});
re_com.tag_dropdown.tag_dropdown_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$popover_DASH_anchor_DASH_wrapper,cljs.core.cst$kw$level,(0),cljs.core.cst$kw$class,"rc-tag-dropdown-popover-anchor-wrapper",cljs.core.cst$kw$impl,"[popover-anchor-wrapper]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$main,cljs.core.cst$kw$level,(1),cljs.core.cst$kw$class,"rc-tag-dropdown",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$tags,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tag-dropdown-tags",cljs.core.cst$kw$impl,"[h-box]"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$tag,cljs.core.cst$kw$level,(3),cljs.core.cst$kw$class,"rc-tag-dropdown-tag",cljs.core.cst$kw$impl,"[h-box]",cljs.core.cst$kw$notes,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each individual tag can be independently targeted with the keyword of its ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$selection_DASH_list,cljs.core.cst$kw$level,(2),cljs.core.cst$kw$class,"rc-tag-dropdown-selection-list",cljs.core.cst$kw$impl,"[selection-list]"], null)], null):null);
re_com.tag_dropdown.tag_dropdown_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,re_com.tag_dropdown.tag_dropdown_parts_desc)):null);
re_com.tag_dropdown.tag_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$choices,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"vector of maps | r/atom",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.vector_of_maps_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Each map represents a choice. Values corresponding to id, label, short label and tag background color are extracted by the functions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":id"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":short-label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":background-color"], null),". See below."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$model,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"a set of ids | r/atom",cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The set of the ids for currently selected choices. If nil or empty, see ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":placeholder"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$placeholder,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"Background text shown when there's no selection."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$required,true,cljs.core.cst$kw$type,"id -> nil",cljs.core.cst$kw$validate_DASH_fn,cljs.core.fn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"This function is called whenever the selection changes. Called with one argument, the set of selected ids. See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":model"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$disabled_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$required_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean | r/atom",cljs.core.cst$kw$description,"when true, at least one item must be selected."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$unselect_DASH_buttons_QMARK_,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,false,cljs.core.cst$kw$type,"boolean",cljs.core.cst$kw$description,"When true, \"X\" buttons will be added to the display of selected tags (on the right), allowing the user to directly unselect them."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,":label",cljs.core.cst$kw$type,"map -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function which can turn a choice into a displayable label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$description_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,":description",cljs.core.cst$kw$type,"map -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function which can turn a choice into a displayable description. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$abbrev_DASH_fn,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"choice -> hiccup",cljs.core.cst$kw$validate_DASH_fn,cljs.core.ifn_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"A function which can turn a choice into an abbreviated label. Will be called for each element in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":choices"], null),". Given one argument, a choice map, it returns a string or hiccup."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$abbrev_DASH_threshold,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"number",cljs.core.cst$kw$validate_DASH_fn,cljs.core.number_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"The text displayed for selected choices is obtained via either ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"abbrev-fn"], null),". When the total number of characters displayed is less than this argument then ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," will be used, otherwise ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"abbrev-fn"], null),". You should set this value taking into account the width of this component. If not set, only ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":label-fn"], null)," is used."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"the CSS min-width, like \"100px\" or \"20em\". This is the natural display width of the Component. It prevents the width from becoming smaller than the value specified, yet allows growth horizontally if sufficient choices are selected up to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":max-width"], null)," or unbounded growth if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":max-width"], null)," is not provided."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the CSS max-width, like \"100px\" or \"20em\". It prevents the width from becoming larger than the value specified. If sufficient choices are selected to go beyond the maximum then some choices will be hidden by overflow."], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$name,cljs.core.cst$kw$height,cljs.core.cst$kw$required,false,cljs.core.cst$kw$default,"25px",cljs.core.cst$kw$type,"string",cljs.core.cst$kw$validate_DASH_fn,cljs.core.string_QMARK_,cljs.core.cst$kw$description,"the specific height of the component"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$style,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$parts,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,re_com.validate.parts_QMARK_(re_com.tag_dropdown.tag_dropdown_parts),cljs.core.cst$kw$description,"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$src,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,cljs.core.cst$kw$debug_DASH_as,cljs.core.cst$kw$required,false,cljs.core.cst$kw$type,"map",cljs.core.cst$kw$validate_DASH_fn,cljs.core.map_QMARK_,cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,":args"], null),"."], null)], null)], null):null);
re_com.tag_dropdown.tag_dropdown = (function re_com$tag_dropdown$tag_dropdown(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20965 = arguments.length;
var i__4772__auto___20966 = (0);
while(true){
if((i__4772__auto___20966 < len__4771__auto___20965)){
args__4777__auto__.push((arguments[i__4772__auto___20966]));

var G__20967 = (i__4772__auto___20966 + (1));
i__4772__auto___20966 = G__20967;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.tag_dropdown.tag_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.tag_dropdown.tag_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__20959){
var map__20960 = p__20959;
var map__20960__$1 = cljs.core.__destructure_map(map__20960);
var args = map__20960__$1;
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tag_dropdown.tag_dropdown_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var re_com$tag_dropdown$tag_dropdown_render__delegate = function (p__20961){
var map__20962 = p__20961;
var map__20962__$1 = cljs.core.__destructure_map(map__20962);
var args__$1 = map__20962__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$disabled_QMARK_);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$on_DASH_change);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20962__$1,cljs.core.cst$kw$height,"25px");
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$model);
var min_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$min_DASH_width);
var label_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20962__$1,cljs.core.cst$kw$label_DASH_fn,cljs.core.cst$kw$label);
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$required_QMARK_);
var description_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20962__$1,cljs.core.cst$kw$description_DASH_fn,cljs.core.cst$kw$description);
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$placeholder);
var abbrev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$abbrev_DASH_fn);
var abbrev_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$abbrev_DASH_threshold);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$parts);
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$max_DASH_width);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$src);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$choices);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$style);
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$debug_DASH_as);
var unselect_buttons_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20962__$1,cljs.core.cst$kw$unselect_DASH_buttons_QMARK_);
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.tag_dropdown.tag_dropdown_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var choices__$1 = re_com.util.deref_or_value(choices);
var model__$1 = re_com.util.deref_or_value(model);
var abbrev_threshold__$1 = re_com.util.deref_or_value(abbrev_threshold);
var required_QMARK___$1 = re_com.util.deref_or_value(required_QMARK_);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var unselect_buttons_QMARK___$1 = re_com.util.deref_or_value(unselect_buttons_QMARK_);
var choices_num_chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,choice){
if(cljs.core.contains_QMARK_(model__$1,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(choice))){
return (n + cljs.core.count((label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(choice) : label_fn.call(null,choice))));
} else {
return n;
}
}),(0),choices__$1);
var abbrev_QMARK_ = (((choices_num_chars >= abbrev_threshold__$1)) && (typeof abbrev_threshold__$1 === 'number') && (cljs.core.fn_QMARK_(abbrev_fn)));
var placeholder_tag = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tag_dropdown.text_tag,cljs.core.cst$kw$tag_DASH_data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,cljs.core.cst$kw$$placeholder$,cljs.core.cst$kw$label,"",cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$width,((abbrev_QMARK_)?"20px":"40px")], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(showing_QMARK_,true);
}),cljs.core.cst$kw$tooltip,"Click to select tags",cljs.core.cst$kw$hover_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#eee"], null)], null);
var tag_list_body = new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.selection_list.selection_list,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,224], null)),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK___$1,cljs.core.cst$kw$required_QMARK_,required_QMARK___$1,cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$list_DASH_group_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F3F6F7"], null)], null)], null),cljs.core.cst$kw$choices,choices__$1,cljs.core.cst$kw$hide_DASH_border_QMARK_,true,cljs.core.cst$kw$label_DASH_fn,(function (tag){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tag_dropdown.text_tag,cljs.core.cst$kw$label_DASH_fn,label_fn,cljs.core.cst$kw$description_DASH_fn,description_fn,cljs.core.cst$kw$tag_DASH_data,tag,cljs.core.cst$kw$style,style], null);
}),cljs.core.cst$kw$item_DASH_renderer,re_com.tag_dropdown.as_checked,cljs.core.cst$kw$model,model__$1,cljs.core.cst$kw$on_DASH_change,(function (p1__20956_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__20956_SHARP_) : on_change.call(null,p1__20956_SHARP_));
}),cljs.core.cst$kw$multi_DASH_select_QMARK_,true], null);
var tag_main = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,241], null)),cljs.core.cst$kw$min_DASH_width,min_width,cljs.core.cst$kw$max_DASH_width,max_width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$align,cljs.core.cst$kw$center,cljs.core.cst$kw$padding,"0px 6px",cljs.core.cst$kw$class,["rc-tag-dropdown ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background_DASH_color,(cljs.core.truth_(disabled_QMARK___$1)?"#EEE":"white"),cljs.core.cst$kw$color,"#BBB",cljs.core.cst$kw$border,"1px solid lightgrey",cljs.core.cst$kw$border_DASH_radius,"2px",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$cursor,(cljs.core.truth_(disabled_QMARK___$1)?"default":"pointer")], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,cljs.core.cst$kw$style], null))], 0)),cljs.core.cst$kw$attr,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,((cljs.core.not(disabled_QMARK___$1))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (event){
cljs.core.reset_BANG_(showing_QMARK_,true);

return null;
})], null):null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,cljs.core.cst$kw$attr], null))], 0)),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,259], null)),cljs.core.cst$kw$class,["rc-tag-dropdown-tags ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tags,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$size,"1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tag){
if(cljs.core.contains_QMARK_(model__$1,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(tag))){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.tag_dropdown.text_tag,cljs.core.cst$kw$label_DASH_fn,((abbrev_QMARK_)?abbrev_fn:label_fn),cljs.core.cst$kw$tag_DASH_data,tag,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.cst$kw$disabled_QMARK_,disabled_QMARK___$1,cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(showing_QMARK_,true);
}),cljs.core.cst$kw$on_DASH_unselect,(cljs.core.truth_((function (){var and__4149__auto__ = unselect_buttons_QMARK___$1;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(model__$1)))?required_QMARK___$1:false));
} else {
return and__4149__auto__;
}
})())?(function (p1__20957_SHARP_){
var G__20963 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(model__$1,p1__20957_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20963) : on_change.call(null,G__20963));
}):null),cljs.core.cst$kw$hover_DASH_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,"0.8"], null),cljs.core.cst$kw$style,style,cljs.core.cst$kw$parts,parts], null);
} else {
return null;
}
}),choices__$1),((cljs.core.not(disabled_QMARK___$1))?placeholder_tag:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,280], null)),cljs.core.cst$kw$size,"20px"], null),(((cljs.core.count(model__$1) === (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,284], null)),cljs.core.cst$kw$child,(cljs.core.truth_(placeholder)?placeholder:"")], null):null)], 0))], null),(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not_empty(model__$1);
if(cljs.core.truth_(and__4149__auto__)){
return ((cljs.core.not(disabled_QMARK___$1)) && (cljs.core.not(required_QMARK___$1)));
} else {
return and__4149__auto__;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.close_button.close_button,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,289], null)),cljs.core.cst$kw$parts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$wrapper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"5px"], null)], null)], null),cljs.core.cst$kw$on_DASH_click,(function (){
var G__20964 = cljs.core.PersistentHashSet.EMPTY;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__20964) : on_change.call(null,G__20964));
})], null):null)], null)], null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,cljs.core.cst$kw$src,src,cljs.core.cst$kw$debug_DASH_as,(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component,re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),cljs.core.cst$kw$args,args__$1], null);
}
})(),cljs.core.cst$kw$class,["rc-tag-dropdown-popover-anchor-wrapper ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$popover_DASH_anchor_DASH_wrapper,cljs.core.cst$kw$class], null)))].join(''),cljs.core.cst$kw$showing_QMARK_,showing_QMARK_,cljs.core.cst$kw$position,cljs.core.cst$kw$below_DASH_center,cljs.core.cst$kw$anchor,tag_main,cljs.core.cst$kw$popover,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,cljs.core.cst$kw$src,(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/tag_dropdown.cljs",cljs.core.cst$kw$line,300], null)),cljs.core.cst$kw$arrow_DASH_length,(0),cljs.core.cst$kw$arrow_DASH_width,(0),cljs.core.cst$kw$arrow_DASH_gap,(1),cljs.core.cst$kw$no_DASH_clip_QMARK_,true,cljs.core.cst$kw$on_DASH_cancel,(function (){
return cljs.core.reset_BANG_(showing_QMARK_,false);
}),cljs.core.cst$kw$padding,"19px 19px",cljs.core.cst$kw$body,tag_list_body], null)], null);
}
};
var re_com$tag_dropdown$tag_dropdown_render = function (var_args){
var p__20961 = null;
if (arguments.length > 0) {
var G__20968__i = 0, G__20968__a = new Array(arguments.length -  0);
while (G__20968__i < G__20968__a.length) {G__20968__a[G__20968__i] = arguments[G__20968__i + 0]; ++G__20968__i;}
  p__20961 = new cljs.core.IndexedSeq(G__20968__a,0,null);
} 
return re_com$tag_dropdown$tag_dropdown_render__delegate.call(this,p__20961);};
re_com$tag_dropdown$tag_dropdown_render.cljs$lang$maxFixedArity = 0;
re_com$tag_dropdown$tag_dropdown_render.cljs$lang$applyTo = (function (arglist__20969){
var p__20961 = cljs.core.seq(arglist__20969);
return re_com$tag_dropdown$tag_dropdown_render__delegate(p__20961);
});
re_com$tag_dropdown$tag_dropdown_render.cljs$core$IFn$_invoke$arity$variadic = re_com$tag_dropdown$tag_dropdown_render__delegate;
return re_com$tag_dropdown$tag_dropdown_render;
})()
;
}
}));

(re_com.tag_dropdown.tag_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.tag_dropdown.tag_dropdown.cljs$lang$applyTo = (function (seq20958){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20958));
}));

