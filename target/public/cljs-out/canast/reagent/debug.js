// Compiled by ClojureScript 1.10.844 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12359__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12360__i = 0, G__12360__a = new Array(arguments.length -  0);
while (G__12360__i < G__12360__a.length) {G__12360__a[G__12360__i] = arguments[G__12360__i + 0]; ++G__12360__i;}
  args = new cljs.core.IndexedSeq(G__12360__a,0,null);
} 
return G__12359__delegate.call(this,args);};
G__12359.cljs$lang$maxFixedArity = 0;
G__12359.cljs$lang$applyTo = (function (arglist__12361){
var args = cljs.core.seq(arglist__12361);
return G__12359__delegate(args);
});
G__12359.cljs$core$IFn$_invoke$arity$variadic = G__12359__delegate;
return G__12359;
})()
);

(o.error = (function() { 
var G__12362__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12363__i = 0, G__12363__a = new Array(arguments.length -  0);
while (G__12363__i < G__12363__a.length) {G__12363__a[G__12363__i] = arguments[G__12363__i + 0]; ++G__12363__i;}
  args = new cljs.core.IndexedSeq(G__12363__a,0,null);
} 
return G__12362__delegate.call(this,args);};
G__12362.cljs$lang$maxFixedArity = 0;
G__12362.cljs$lang$applyTo = (function (arglist__12364){
var args = cljs.core.seq(arglist__12364);
return G__12362__delegate(args);
});
G__12362.cljs$core$IFn$_invoke$arity$variadic = G__12362__delegate;
return G__12362;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
