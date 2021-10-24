// Compiled by ClojureScript 1.10.844 {}
goog.provide('canastref.spiel');
goog.require('cljs.core');
goog.require('canastref.spieler');
canastref.spiel.__GT_Spiel = (function canastref$spiel$__GT_Spiel(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"runde","runde",-1618531444),(0),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),null], null);
});
canastref.spiel.geber = (function canastref$spiel$geber(spiel){
return new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.runde = (function canastref$spiel$runde(spiel){
return new cljs.core.Keyword(null,"runde","runde",-1618531444).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.teilnehmer = (function canastref$spiel$teilnehmer(spiel){
return new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.spiel_beendet_QMARK_ = (function canastref$spiel$spiel_beendet_QMARK_(spiel){
return new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.sieger = (function canastref$spiel$sieger(spiel){
return new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(spiel);
});
canastref.spiel.anzahl_teilnehmer = (function canastref$spiel$anzahl_teilnehmer(spiel){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245).cljs$core$IFn$_invoke$arity$1(spiel));
});
canastref.spiel.geber_festgelegt_QMARK_ = (function canastref$spiel$geber_festgelegt_QMARK_(spiel){
return (!((new cljs.core.Keyword(null,"geber","geber",604746862).cljs$core$IFn$_invoke$arity$1(spiel) == null)));
});
canastref.spiel.neues_spiel = (function canastref$spiel$neues_spiel(sp_namen){
return cljs.core.assoc.call(null,canastref.spiel.__GT_Spiel.call(null),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),cljs.core.mapv.call(null,(function (p1__20415_SHARP_){
return canastref.spieler.__GT_Spieler.call(null,p1__20415_SHARP_);
}),sp_namen));
});
canastref.spiel.naechster_geber = (function canastref$spiel$naechster_geber(index,anzahl_spieler){
return cljs.core.mod.call(null,(index + (1)),anzahl_spieler);
});
canastref.spiel.vorheriger_geber = (function canastref$spiel$vorheriger_geber(index,anzahl_spieler){
if(cljs.core._EQ_.call(null,index,(0))){
return (anzahl_spieler - (1));
} else {
return (index - (1));
}
});
canastref.spiel.ergaenze_standard_werte_in_resultaten = (function canastref$spiel$ergaenze_standard_werte_in_resultaten(teilnehmer,runde){
return cljs.core.mapv.call(null,(function (p1__20416_SHARP_){
if((cljs.core.get.call(null,canastref.spieler.resultate.call(null,p1__20416_SHARP_),runde) == null)){
return canastref.spieler.null_resultat.call(null,runde,p1__20416_SHARP_);
} else {
return p1__20416_SHARP_;
}
}),teilnehmer);
});
canastref.spiel.schliesse_runde_ab = (function canastref$spiel$schliesse_runde_ab(spiel){
var teiln = canastref.spiel.ergaenze_standard_werte_in_resultaten.call(null,canastref.spiel.teilnehmer.call(null,spiel),canastref.spiel.runde.call(null,spiel));
var sieger = cljs.core.last.call(null,cljs.core.sort_by.call(null,(function (p1__20417_SHARP_){
return canastref.spieler.summe.call(null,p1__20417_SHARP_);
}),teiln));
var geber = canastref.spiel.naechster_geber.call(null,canastref.spiel.geber.call(null,spiel),cljs.core.count.call(null,teiln));
return cljs.core.assoc.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),(canastref.spiel.runde.call(null,spiel) + (1)),new cljs.core.Keyword(null,"geber","geber",604746862),geber,new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),teiln,new cljs.core.Keyword(null,"sieger","sieger",-247971207),(((canastref.spieler.summe.call(null,sieger) >= (5000)))?sieger:null),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),(canastref.spieler.summe.call(null,sieger) >= (5000)));
});
canastref.spiel.registriere_sieger = (function canastref$spiel$registriere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.call(null,historie,canastref.spieler.spieler_name.call(null,sieger),cljs.core.inc);
} else {
return historie;
}
});
canastref.spiel.eliminiere_sieger = (function canastref$spiel$eliminiere_sieger(historie,sieger){
if(cljs.core.truth_(sieger)){
return cljs.core.update.call(null,historie,canastref.spieler.spieler_name.call(null,sieger),cljs.core.dec);
} else {
return historie;
}
});
canastref.spiel.korrigiere = (function canastref$spiel$korrigiere(spiel){
return cljs.core.assoc.call(null,cljs.core.update.call(null,spiel,new cljs.core.Keyword(null,"runde","runde",-1618531444),cljs.core.dec),new cljs.core.Keyword(null,"spiel-beendet?","spiel-beendet?",-1758455863),false,new cljs.core.Keyword(null,"sieger","sieger",-247971207),null,new cljs.core.Keyword(null,"geber","geber",604746862),canastref.spiel.vorheriger_geber.call(null,canastref.spiel.geber.call(null,spiel),cljs.core.count.call(null,canastref.spiel.teilnehmer.call(null,spiel))));
});
canastref.spiel.resultat_in_runde = (function canastref$spiel$resultat_in_runde(tln,runde){
var resultate = new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln);
if((runde >= cljs.core.count.call(null,resultate))){
return (0);
} else {
return resultate.call(null,runde);
}
});
