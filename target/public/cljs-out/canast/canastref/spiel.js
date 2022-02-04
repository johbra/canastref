// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.spiel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('canastref.spieler');
canastref.spiel.__GT_Spiel = (function canastref$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$teilnehmer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$runde,(0),cljs.core.cst$kw$spiel_DASH_beendet_QMARK_,false,cljs.core.cst$kw$sieger,null,cljs.core.cst$kw$geber,null], null);
});
canastref.spiel.geber = (function canastref$spiel$geber(spiel){
return cljs.core.cst$kw$geber.cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.runde = (function canastref$spiel$runde(spiel){
return cljs.core.cst$kw$runde.cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.teilnehmer = (function canastref$spiel$teilnehmer(spiel){
return cljs.core.cst$kw$teilnehmer.cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.spiel_beendet_QMARK_ = (function canastref$spiel$spiel_beendet_QMARK_(spiel){
return cljs.core.cst$kw$spiel_DASH_beendet_QMARK_.cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.sieger = (function canastref$spiel$sieger(spiel){
return cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.anzahl_teilnehmer = (function canastref$spiel$anzahl_teilnehmer(spiel){
return cljs.core.count(cljs.core.cst$kw$teilnehmer.cljs$core$IFn$_invoke$arity$1(spiel));
});
canastref.spiel.geber_festgelegt_QMARK_ = (function canastref$spiel$geber_festgelegt_QMARK_(spiel){
return (!((cljs.core.cst$kw$geber.cljs$core$IFn$_invoke$arity$1(spiel) == null)));
});
canastref.spiel.neues_spiel = (function canastref$spiel$neues_spiel(sp_namen){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(canastref.spiel.__GT_Spiel(),cljs.core.cst$kw$teilnehmer,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21139_SHARP_){
return canastref.spieler.__GT_Spieler(p1__21139_SHARP_);
}),sp_namen));
});
canastref.spiel.naechster_geber = (function canastref$spiel$naechster_geber(index,anzahl_spieler){
return cljs.core.mod((index + (1)),anzahl_spieler);
});
canastref.spiel.vorheriger_geber = (function canastref$spiel$vorheriger_geber(index,anzahl_spieler){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))){
return (anzahl_spieler - (1));
} else {
return (index - (1));
}
});
canastref.spiel.ergaenze_standard_werte_in_resultaten = (function canastref$spiel$ergaenze_standard_werte_in_resultaten(teilnehmer,runde){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__21140_SHARP_){
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(canastref.spieler.resultate(p1__21140_SHARP_),runde) == null)){
return canastref.spieler.null_resultat(runde,p1__21140_SHARP_);
} else {
return p1__21140_SHARP_;
}
}),teilnehmer);
});
canastref.spiel.schliesse_runde_ab = (function canastref$spiel$schliesse_runde_ab(spiel){
var teiln = canastref.spiel.ergaenze_standard_werte_in_resultaten(canastref.spiel.teilnehmer(spiel),canastref.spiel.runde(spiel));
var sieger = cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__21141_SHARP_){
return canastref.spieler.summe(p1__21141_SHARP_);
}),teiln));
var geber = canastref.spiel.naechster_geber(canastref.spiel.geber(spiel),cljs.core.count(teiln));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(spiel,cljs.core.cst$kw$runde,(canastref.spiel.runde(spiel) + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$geber,geber,cljs.core.cst$kw$teilnehmer,teiln,cljs.core.cst$kw$sieger,(((canastref.spieler.summe(sieger) >= (5000)))?sieger:null),cljs.core.cst$kw$spiel_DASH_beendet_QMARK_,(canastref.spieler.summe(sieger) >= (5000))], 0));
});
canastref.spiel.registriere_sieger = (function canastref$spiel$registriere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(historie,canastref.spieler.spieler_name(sieger),cljs.core.inc);
} else {
return historie;
}
});
canastref.spiel.eliminiere_sieger = (function canastref$spiel$eliminiere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(historie,canastref.spieler.spieler_name(sieger),cljs.core.dec);
} else {
return historie;
}
});
canastref.spiel.korrigiere = (function canastref$spiel$korrigiere(spiel){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spiel,cljs.core.cst$kw$runde,cljs.core.dec),cljs.core.cst$kw$spiel_DASH_beendet_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sieger,null,cljs.core.cst$kw$geber,canastref.spiel.vorheriger_geber(canastref.spiel.geber(spiel),cljs.core.count(canastref.spiel.teilnehmer(spiel)))], 0));
});
canastref.spiel.resultat_in_runde = (function canastref$spiel$resultat_in_runde(tln,runde){
var resultate = cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(tln);
if((runde >= cljs.core.count(resultate))){
return (0);
} else {
return (resultate.cljs$core$IFn$_invoke$arity$1 ? resultate.cljs$core$IFn$_invoke$arity$1(runde) : resultate.call(null,runde));
}
});
canastref.spiel.fuehrende = (function canastref$spiel$fuehrende(monatshistorie){
if(cljs.core.empty_QMARK_(monatshistorie)){
return "";
} else {
return cljs.core.key(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,monatshistorie));
}
});
