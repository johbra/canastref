// Compiled by ClojureScript 1.10.844 {}
goog.provide('canastref.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('canastref.views');
goog.require('canastref.events');
canastref.core.main = (function canastref$core$main(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historie","historie",893875268)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637)], null));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('canastref.core.main', canastref.core.main);
canastref.core.re_render = (function canastref$core$re_render(){
return canastref.core.main.call(null);
});
if((typeof canastref !== 'undefined') && (typeof canastref.core !== 'undefined') && (typeof canastref.core.start_up !== 'undefined')){
} else {
canastref.core.start_up = (function (){
canastref.core.main.call(null);

console.log(cljs.core.deref.call(null,re_frame.db.app_db));

return true;
})()
;
}
