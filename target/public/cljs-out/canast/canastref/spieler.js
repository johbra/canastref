// Compiled by ClojureScript 1.10.844 {}
goog.provide('canastref.spieler');
goog.require('cljs.core');
canastref.spieler.__GT_Spieler = (function canastref$spieler$__GT_Spieler(name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"resultate","resultate",-649999987),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"summe","summe",-650249817),(0)], null);
});
canastref.spieler.resultate = (function canastref$spieler$resultate(sp){
return new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.summe = (function canastref$spieler$summe(sp){
return new cljs.core.Keyword(null,"summe","summe",-650249817).cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.spieler_name = (function canastref$spieler$spieler_name(sp){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(sp);
});
canastref.spieler.zwischen_summe = (function canastref$spieler$zwischen_summe(resultate,runde){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.take.call(null,runde,resultate));
});
canastref.spieler.neues_resultat = (function canastref$spieler$neues_resultat(sp,v,runde){
return cljs.core.assoc_in.call(null,sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resultate","resultate",-649999987),runde], null),v);
});
canastref.spieler.null_resultat = (function canastref$spieler$null_resultat(runde,sp){
return cljs.core.assoc_in.call(null,sp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resultate","resultate",-649999987),runde], null),(0));
});
