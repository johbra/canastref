// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12896__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12897__i = 0, G__12897__a = new Array(arguments.length -  0);
while (G__12897__i < G__12897__a.length) {G__12897__a[G__12897__i] = arguments[G__12897__i + 0]; ++G__12897__i;}
  args = new cljs.core.IndexedSeq(G__12897__a,0,null);
} 
return G__12896__delegate.call(this,args);};
G__12896.cljs$lang$maxFixedArity = 0;
G__12896.cljs$lang$applyTo = (function (arglist__12898){
var args = cljs.core.seq(arglist__12898);
return G__12896__delegate(args);
});
G__12896.cljs$core$IFn$_invoke$arity$variadic = G__12896__delegate;
return G__12896;
})()
);

(o.error = (function() { 
var G__12899__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12900__i = 0, G__12900__a = new Array(arguments.length -  0);
while (G__12900__i < G__12900__a.length) {G__12900__a[G__12900__i] = arguments[G__12900__i + 0]; ++G__12900__i;}
  args = new cljs.core.IndexedSeq(G__12900__a,0,null);
} 
return G__12899__delegate.call(this,args);};
G__12899.cljs$lang$maxFixedArity = 0;
G__12899.cljs$lang$applyTo = (function (arglist__12901){
var args = cljs.core.seq(arglist__12901);
return G__12899__delegate(args);
});
G__12899.cljs$core$IFn$_invoke$arity$variadic = G__12899__delegate;
return G__12899;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
