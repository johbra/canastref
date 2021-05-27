// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('canastref.views');
goog.require('canastref.events');
canastref.core.main = (function canastref$core$main(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel_DASH_typ], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$historie], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.main_panel], null),document.getElementById("app"));
});
goog.exportSymbol('canastref.core.main', canastref.core.main);
canastref.core.re_render = (function canastref$core$re_render(){
return canastref.core.main();
});
if((typeof canastref !== 'undefined') && (typeof canastref.core !== 'undefined') && (typeof canastref.core.start_up !== 'undefined')){
} else {
canastref.core.start_up = (function (){
canastref.core.main();

console.log(cljs.core.deref(re_frame.db.app_db));

return true;
})()
;
}
