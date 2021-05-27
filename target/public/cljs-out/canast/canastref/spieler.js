// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.spieler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
canastref.spieler.__GT_Spieler = (function canastref$spieler$__GT_Spieler(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$resultate,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$summe,(0)], null);
});
canastref.spieler.resultate = (function canastref$spieler$resultate(sp){
return cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.zwischen_summe = (function canastref$spieler$zwischen_summe(resultate,runde){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(runde,resultate));
});
