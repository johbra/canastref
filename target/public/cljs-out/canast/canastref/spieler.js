// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.spieler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
canastref.spieler.__GT_Spieler = (function canastref$spieler$__GT_Spieler(name){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$resultate,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$summe,(0)], null);
});
canastref.spieler.resultate = (function canastref$spieler$resultate(sp){
return cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.summe = (function canastref$spieler$summe(sp){
return cljs.core.cst$kw$summe.cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.spieler_name = (function canastref$spieler$spieler_name(sp){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.zwischen_summe = (function canastref$spieler$zwischen_summe(resultate,runde){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(runde,resultate));
});
canastref.spieler.neues_resultat = (function canastref$spieler$neues_resultat(sp,v,runde){
return cljs.core.assoc_in(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resultate,runde], null),v);
});
canastref.spieler.null_resultat = (function canastref$spieler$null_resultat(runde,sp){
return cljs.core.assoc_in(sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resultate,runde], null),(0));
});
