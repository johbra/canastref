// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.throbber');
goog.require('re_com.input_text');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__19590){
var map__19591 = p__19590;
var map__19591__$1 = cljs.core.__destructure_map.call(null,map__19591);
var args = map__19591__$1;
var on_change = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__19591__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__19592 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4160__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__19592,external_model_value);
} else {
return G__19592;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__19593,event){
var map__19594 = p__19593;
var map__19594__$1 = cljs.core.__destructure_map.call(null,map__19594);
var state = map__19594__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__19595 = event;
var G__19595__$1 = (((G__19595 instanceof cljs.core.Keyword))?G__19595.fqn:null);
switch (G__19595__$1) {
case "input-text-blurred":
var and__4149__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4149__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
if(cljs.core.not.call(null,rigid_QMARK___$1)){
var or__4160__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__4160__auto__){
return or__4160__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return false;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__19597,event){
var map__19598 = p__19597;
var map__19598__$1 = cljs.core.__destructure_map.call(null,map__19598);
var state = map__19598__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__19598__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__19599 = event;
var G__19599__$1 = (((G__19599 instanceof cljs.core.Keyword))?G__19599.fqn:null);
switch (G__19599__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__19601,new_value){
var map__19602 = p__19601;
var map__19602__$1 = cljs.core.__destructure_map.call(null,map__19602);
var state = map__19602__$1;
var on_change = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__19603,suggestion){
var map__19604 = p__19603;
var map__19604__$1 = cljs.core.__destructure_map.call(null,map__19604);
var state = map__19604__$1;
var suggestion_to_string = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__19605 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__19605,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__19605;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__19606,index){
var map__19607 = p__19606;
var map__19607__$1 = cljs.core.__destructure_map.call(null,map__19607);
var state = map__19607__$1;
var suggestions = cljs.core.get.call(null,map__19607__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__19608 = state;
var G__19608__$1 = cljs.core.assoc.call(null,G__19608,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__19608__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__19608__$1,suggestion):G__19608__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__19608__$2,suggestion);
} else {
return G__19608__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__19609,index){
var map__19610 = p__19609;
var map__19610__$1 = cljs.core.__destructure_map.call(null,map__19610);
var state = map__19610__$1;
var suggestions = cljs.core.get.call(null,map__19610__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__19611){
var map__19612 = p__19611;
var map__19612__$1 = cljs.core.__destructure_map.call(null,map__19612);
var state = map__19612__$1;
var suggestion_active_index = cljs.core.get.call(null,map__19612__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__19613 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__19613,suggestion_active_index);
} else {
return G__19613;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__19614){
var map__19615 = p__19614;
var map__19615__$1 = cljs.core.__destructure_map.call(null,map__19615);
var state = map__19615__$1;
var suggestions = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__19615__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__19616 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__19616,re_com.typeahead.wrap.call(null,((function (){var or__4160__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__19616;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__19617){
var map__19618 = p__19617;
var map__19618__$1 = cljs.core.__destructure_map.call(null,map__19618);
var state = map__19618__$1;
var suggestions = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__19618__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__19619 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__19619,re_com.typeahead.wrap.call(null,((function (){var or__4160__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__19619;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__19620 = state;
var G__19620__$1 = re_com.typeahead.clear_suggestions.call(null,G__19620)
;
var G__19620__$2 = cljs.core.assoc.call(null,G__19620__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__19620__$2,null);
} else {
return G__19620__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__19621){
var map__19622 = p__19621;
var map__19622__$1 = cljs.core.__destructure_map.call(null,map__19622);
var state = map__19622__$1;
var input_text = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__19622__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(((cljs.core.not.call(null,displaying_suggestion_QMARK_))?re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307)):false))){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5751__auto__ = data_source.call(null,text,(function (p1__19623_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__19623_SHARP_);
}));
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19641){
var state_val_19642 = (state_19641[(1)]);
if((state_val_19642 === (1))){
var state_19641__$1 = state_19641;
var statearr_19643_19657 = state_19641__$1;
(statearr_19643_19657[(2)] = null);

(statearr_19643_19657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19642 === (2))){
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19641__$1,(4),c_search);
} else {
if((state_val_19642 === (3))){
var inst_19639 = (state_19641[(2)]);
var state_19641__$1 = state_19641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19641__$1,inst_19639);
} else {
if((state_val_19642 === (4))){
var inst_19626 = (state_19641[(7)]);
var inst_19626__$1 = (state_19641[(2)]);
var inst_19627 = cljs.core.deref.call(null,state_atom);
var inst_19628 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_19627);
var inst_19629 = cljs.core._EQ_.call(null,"",inst_19626__$1);
var state_19641__$1 = (function (){var statearr_19644 = state_19641;
(statearr_19644[(7)] = inst_19626__$1);

(statearr_19644[(8)] = inst_19628);

return statearr_19644;
})();
if(inst_19629){
var statearr_19645_19658 = state_19641__$1;
(statearr_19645_19658[(1)] = (5));

} else {
var statearr_19646_19659 = state_19641__$1;
(statearr_19646_19659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19642 === (5))){
var inst_19628 = (state_19641[(8)]);
var inst_19631 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_19632 = re_com.typeahead.search_data_source_BANG_.call(null,inst_19628,state_atom,"");
var state_19641__$1 = (function (){var statearr_19647 = state_19641;
(statearr_19647[(9)] = inst_19631);

return statearr_19647;
})();
var statearr_19648_19660 = state_19641__$1;
(statearr_19648_19660[(2)] = inst_19632);

(statearr_19648_19660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19642 === (6))){
var inst_19626 = (state_19641[(7)]);
var inst_19628 = (state_19641[(8)]);
var inst_19634 = re_com.typeahead.search_data_source_BANG_.call(null,inst_19628,state_atom,inst_19626);
var state_19641__$1 = state_19641;
var statearr_19649_19661 = state_19641__$1;
(statearr_19649_19661[(2)] = inst_19634);

(statearr_19649_19661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19642 === (7))){
var inst_19636 = (state_19641[(2)]);
var state_19641__$1 = (function (){var statearr_19650 = state_19641;
(statearr_19650[(10)] = inst_19636);

return statearr_19650;
})();
var statearr_19651_19662 = state_19641__$1;
(statearr_19651_19662[(2)] = null);

(statearr_19651_19662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____0 = (function (){
var statearr_19652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19652[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__);

(statearr_19652[(1)] = (1));

return statearr_19652;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____1 = (function (state_19641){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19653){var ex__17603__auto__ = e19653;
var statearr_19654_19663 = state_19641;
(statearr_19654_19663[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19641[(4)]))){
var statearr_19655_19664 = state_19641;
(statearr_19655_19664[(1)] = cljs.core.first.call(null,(state_19641[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19665 = state_19641;
state_19641 = G__19665;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__ = function(state_19641){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____1.call(this,state_19641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19656 = f__17674__auto__.call(null);
(statearr_19656[(6)] = c__17673__auto__);

return statearr_19656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__19667 = cljs.core.deref.call(null,state_atom);
var map__19667__$1 = cljs.core.__destructure_map.call(null,map__19667);
var state = map__19667__$1;
var input_text = cljs.core.get.call(null,map__19667__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__19667__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,(function (p1__19666_SHARP_){
var G__19668 = p1__19666_SHARP_;
var G__19668__$1 = cljs.core.assoc.call(null,G__19668,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__19668__$1,new_text);
} else {
return G__19668__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__19669 = cljs.core._EQ_;
var expr__19670 = event.which;
if(cljs.core.truth_(pred__19669.call(null,goog.events.KeyCodes.UP,expr__19670))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__19669.call(null,goog.events.KeyCodes.DOWN,expr__19670))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__19669.call(null,goog.events.KeyCodes.ENTER,expr__19670))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__19669.call(null,goog.events.KeyCodes.ESC,expr__19670))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__19669.call(null,goog.events.KeyCodes.TAB,expr__19670))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),null,new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),null,new cljs.core.Keyword(null,"throbber","throbber",-1896677161),null], null), null)),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4777__auto__ = [];
var len__4771__auto___19690 = arguments.length;
var i__4772__auto___19691 = (0);
while(true){
if((i__4772__auto___19691 < len__4771__auto___19690)){
args__4777__auto__.push((arguments[i__4772__auto___19691]));

var G__19692 = (i__4772__auto___19691 + (1));
i__4772__auto___19691 = G__19692;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__19674){
var map__19675 = p__19674;
var map__19675__$1 = cljs.core.__destructure_map.call(null,map__19675);
var args = map__19675__$1;
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var map__19676 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__19676__$1 = cljs.core.__destructure_map.call(null,map__19676);
var state = map__19676__$1;
var c_search = cljs.core.get.call(null,map__19676__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__19676__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return (function() { 
var re_com$typeahead$typeahead_render__delegate = function (p__19677){
var map__19678 = p__19677;
var map__19678__$1 = cljs.core.__destructure_map.call(null,map__19678);
var args__$1 = map__19678__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var parts = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var src = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _rigid_QMARK_ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var debug_as = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var status = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__19678__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__4160__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1));
if(cljs.core.truth_(or__4160__auto____$1)){
return or__4160__auto____$1;
} else {
var map__19679 = cljs.core.deref.call(null,state_atom);
var map__19679__$1 = cljs.core.__destructure_map.call(null,map__19679);
var state__$1 = map__19679__$1;
var suggestions = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__19679__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__4160__auto____$2 = width;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__4160__auto____$2 = debug_as;
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null))),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.input_text.input_text,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),293], null)),new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4160__auto____$2 = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4160__auto____$2)){
return or__4160__auto____$2;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),312], null)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),315], null)),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestions-container ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestions-container","suggestions-container",-24757721),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),319], null)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.throbber.throbber,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),322], null)),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-throbber ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"throbber","throbber",-1896677161),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join('')], null)], null):null),(function (){var iter__4564__auto__ = (function re_com$typeahead$typeahead_render_$_iter__19680(s__19681){
return (new cljs.core.LazySeq(null,(function (){
var s__19681__$1 = s__19681;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__19681__$1);
if(temp__5753__auto__){
var s__19681__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19681__$2)){
var c__4562__auto__ = cljs.core.chunk_first.call(null,s__19681__$2);
var size__4563__auto__ = cljs.core.count.call(null,c__4562__auto__);
var b__19683 = cljs.core.chunk_buffer.call(null,size__4563__auto__);
if((function (){var i__19682 = (0);
while(true){
if((i__19682 < size__4563__auto__)){
var vec__19684 = cljs.core._nth.call(null,c__4562__auto__,i__19682);
var i = cljs.core.nth.call(null,vec__19684,(0),null);
var s = cljs.core.nth.call(null,vec__19684,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__19683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__19682,selected_QMARK_,vec__19684,i,s,c__4562__auto__,size__4563__auto__,b__19683,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__19682,selected_QMARK_,vec__19684,i,s,c__4562__auto__,size__4563__auto__,b__19683,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__19682,selected_QMARK_,vec__19684,i,s,c__4562__auto__,size__4563__auto__,b__19683,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args){
return (function (p1__19672_SHARP_){
p1__19672_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__19682,selected_QMARK_,vec__19684,i,s,c__4562__auto__,size__4563__auto__,b__19683,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__19693 = (i__19682 + (1));
i__19682 = G__19693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),re_com$typeahead$typeahead_render_$_iter__19680.call(null,cljs.core.chunk_rest.call(null,s__19681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19683),null);
}
} else {
var vec__19687 = cljs.core.first.call(null,s__19681__$2);
var i = cljs.core.nth.call(null,vec__19687,(0),null);
var s = cljs.core.nth.call(null,vec__19687,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jb/Documents/PRIVAT/canastapp/canastref/target/public/cljs-out/canast/re_com/typeahead.cljs",new cljs.core.Keyword(null,"line","line",212345235),329], null)),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"suggestion","suggestion",1624613388),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__19687,i,s,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__19687,i,s,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__19687,i,s,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args){
return (function (p1__19672_SHARP_){
p1__19672_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__19687,i,s,s__19681__$2,temp__5753__auto__,map__19679,map__19679__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,or__4160__auto____$1,map__19678,map__19678__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,parts,width,data_source,src,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,debug_as,status,class$,map__19676,map__19676__$1,state,c_search,c_input,state_atom,input_text_model,or__4160__auto__,map__19675,map__19675__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$typeahead_render_$_iter__19680.call(null,cljs.core.rest.call(null,s__19681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
}
};
var re_com$typeahead$typeahead_render = function (var_args){
var p__19677 = null;
if (arguments.length > 0) {
var G__19694__i = 0, G__19694__a = new Array(arguments.length -  0);
while (G__19694__i < G__19694__a.length) {G__19694__a[G__19694__i] = arguments[G__19694__i + 0]; ++G__19694__i;}
  p__19677 = new cljs.core.IndexedSeq(G__19694__a,0,null);
} 
return re_com$typeahead$typeahead_render__delegate.call(this,p__19677);};
re_com$typeahead$typeahead_render.cljs$lang$maxFixedArity = 0;
re_com$typeahead$typeahead_render.cljs$lang$applyTo = (function (arglist__19695){
var p__19677 = cljs.core.seq(arglist__19695);
return re_com$typeahead$typeahead_render__delegate(p__19677);
});
re_com$typeahead$typeahead_render.cljs$core$IFn$_invoke$arity$variadic = re_com$typeahead$typeahead_render__delegate;
return re_com$typeahead$typeahead_render;
})()
;
}
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq19673){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19673));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__17673__auto___19778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19747){
var state_val_19748 = (state_19747[(1)]);
if((state_val_19748 === (7))){
var inst_19701 = (state_19747[(2)]);
var state_19747__$1 = state_19747;
var statearr_19749_19779 = state_19747__$1;
(statearr_19749_19779[(2)] = inst_19701);

(statearr_19749_19779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (1))){
var inst_19696 = null;
var state_19747__$1 = (function (){var statearr_19750 = state_19747;
(statearr_19750[(7)] = inst_19696);

return statearr_19750;
})();
var statearr_19751_19780 = state_19747__$1;
(statearr_19751_19780[(2)] = null);

(statearr_19751_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (4))){
var state_19747__$1 = state_19747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19747__$1,(7),in$);
} else {
if((state_val_19748 === (15))){
var inst_19732 = (state_19747[(2)]);
var state_19747__$1 = (function (){var statearr_19752 = state_19747;
(statearr_19752[(8)] = inst_19732);

return statearr_19752;
})();
var statearr_19753_19781 = state_19747__$1;
(statearr_19753_19781[(2)] = null);

(statearr_19753_19781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (13))){
var inst_19720 = (state_19747[(9)]);
var inst_19734 = cljs.core._EQ_.call(null,inst_19720,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_19747__$1 = state_19747;
if(inst_19734){
var statearr_19754_19782 = state_19747__$1;
(statearr_19754_19782[(1)] = (16));

} else {
var statearr_19755_19783 = state_19747__$1;
(statearr_19755_19783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (6))){
var inst_19713 = (state_19747[(10)]);
var inst_19705 = (state_19747[(11)]);
var inst_19704 = (state_19747[(2)]);
var inst_19705__$1 = cljs.core.async.timeout.call(null,ms);
var inst_19713__$1 = in$;
var inst_19714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19715 = [inst_19713__$1,inst_19705__$1];
var inst_19716 = (new cljs.core.PersistentVector(null,2,(5),inst_19714,inst_19715,null));
var state_19747__$1 = (function (){var statearr_19756 = state_19747;
(statearr_19756[(10)] = inst_19713__$1);

(statearr_19756[(11)] = inst_19705__$1);

(statearr_19756[(12)] = inst_19704);

return statearr_19756;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_19747__$1,(8),inst_19716);
} else {
if((state_val_19748 === (17))){
var state_19747__$1 = state_19747;
var statearr_19757_19784 = state_19747__$1;
(statearr_19757_19784[(2)] = null);

(statearr_19757_19784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (3))){
var inst_19745 = (state_19747[(2)]);
var state_19747__$1 = state_19747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19747__$1,inst_19745);
} else {
if((state_val_19748 === (12))){
var inst_19704 = (state_19747[(12)]);
var state_19747__$1 = state_19747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19747__$1,(15),out,inst_19704);
} else {
if((state_val_19748 === (2))){
var inst_19696 = (state_19747[(7)]);
var inst_19698 = (inst_19696 == null);
var state_19747__$1 = state_19747;
if(cljs.core.truth_(inst_19698)){
var statearr_19758_19785 = state_19747__$1;
(statearr_19758_19785[(1)] = (4));

} else {
var statearr_19759_19786 = state_19747__$1;
(statearr_19759_19786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (11))){
var inst_19742 = (state_19747[(2)]);
var inst_19696 = inst_19742;
var state_19747__$1 = (function (){var statearr_19760 = state_19747;
(statearr_19760[(7)] = inst_19696);

return statearr_19760;
})();
var statearr_19761_19787 = state_19747__$1;
(statearr_19761_19787[(2)] = null);

(statearr_19761_19787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (9))){
var inst_19718 = (state_19747[(13)]);
var inst_19726 = cljs.core.nth.call(null,inst_19718,(0),null);
var inst_19727 = cljs.core.nth.call(null,inst_19718,(1),null);
var state_19747__$1 = (function (){var statearr_19762 = state_19747;
(statearr_19762[(14)] = inst_19727);

return statearr_19762;
})();
var statearr_19763_19788 = state_19747__$1;
(statearr_19763_19788[(2)] = inst_19726);

(statearr_19763_19788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (5))){
var inst_19696 = (state_19747[(7)]);
var state_19747__$1 = state_19747;
var statearr_19764_19789 = state_19747__$1;
(statearr_19764_19789[(2)] = inst_19696);

(statearr_19764_19789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (14))){
var inst_19740 = (state_19747[(2)]);
var state_19747__$1 = state_19747;
var statearr_19765_19790 = state_19747__$1;
(statearr_19765_19790[(2)] = inst_19740);

(statearr_19765_19790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (16))){
var inst_19719 = (state_19747[(15)]);
var state_19747__$1 = state_19747;
var statearr_19766_19791 = state_19747__$1;
(statearr_19766_19791[(2)] = inst_19719);

(statearr_19766_19791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (10))){
var inst_19705 = (state_19747[(11)]);
var inst_19720 = (state_19747[(9)]);
var inst_19729 = cljs.core._EQ_.call(null,inst_19720,inst_19705);
var state_19747__$1 = state_19747;
if(inst_19729){
var statearr_19767_19792 = state_19747__$1;
(statearr_19767_19792[(1)] = (12));

} else {
var statearr_19768_19793 = state_19747__$1;
(statearr_19768_19793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (18))){
var inst_19738 = (state_19747[(2)]);
var state_19747__$1 = state_19747;
var statearr_19769_19794 = state_19747__$1;
(statearr_19769_19794[(2)] = inst_19738);

(statearr_19769_19794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19748 === (8))){
var inst_19718 = (state_19747[(13)]);
var inst_19713 = (state_19747[(10)]);
var inst_19720 = (state_19747[(9)]);
var inst_19718__$1 = (state_19747[(2)]);
var inst_19719 = cljs.core.nth.call(null,inst_19718__$1,(0),null);
var inst_19720__$1 = cljs.core.nth.call(null,inst_19718__$1,(1),null);
var inst_19721 = cljs.core._EQ_.call(null,inst_19720__$1,inst_19713);
var state_19747__$1 = (function (){var statearr_19770 = state_19747;
(statearr_19770[(13)] = inst_19718__$1);

(statearr_19770[(15)] = inst_19719);

(statearr_19770[(9)] = inst_19720__$1);

return statearr_19770;
})();
if(inst_19721){
var statearr_19771_19795 = state_19747__$1;
(statearr_19771_19795[(1)] = (9));

} else {
var statearr_19772_19796 = state_19747__$1;
(statearr_19772_19796[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__17600__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__17600__auto____0 = (function (){
var statearr_19773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19773[(0)] = re_com$typeahead$debounce_$_state_machine__17600__auto__);

(statearr_19773[(1)] = (1));

return statearr_19773;
});
var re_com$typeahead$debounce_$_state_machine__17600__auto____1 = (function (state_19747){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19774){var ex__17603__auto__ = e19774;
var statearr_19775_19797 = state_19747;
(statearr_19775_19797[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19747[(4)]))){
var statearr_19776_19798 = state_19747;
(statearr_19776_19798[(1)] = cljs.core.first.call(null,(state_19747[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19799 = state_19747;
state_19747 = G__19799;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__17600__auto__ = function(state_19747){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__17600__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__17600__auto____1.call(this,state_19747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__17600__auto____0;
re_com$typeahead$debounce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__17600__auto____1;
return re_com$typeahead$debounce_$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19777 = f__17674__auto__.call(null);
(statearr_19777[(6)] = c__17673__auto___19778);

return statearr_19777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
});
