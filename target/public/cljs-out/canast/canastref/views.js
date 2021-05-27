// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('canastref.subs');
goog.require('canastref.events');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('re_com.core');
canastref.views.spielerbreite = (75);
canastref.views.gewonnene_spiele = (function canastref$views$gewonnene_spiele(historie){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Gewonnene Spiele bisher: "], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(historie)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.second(historie)))].join('')], null)], null)], null);
});
canastref.views.menue = (function canastref$views$menue(gespeichertes_spiel_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$label,"Neues Spiel",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neues_DASH_spiel], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$label,"Begonnenes Spiel fortsetzen",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$welt], null));
}),cljs.core.cst$kw$disabled_QMARK_,cljs.core.not(gespeichertes_spiel_QMARK_)], null)], null)], null);
});
canastref.views.fehlende_dateien_anzeigen = (function canastref$views$fehlende_dateien_anzeigen(historie,spieler_namen,spiel_typ){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not(spieler_namen))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$body,"keine Spielernamen angegeben"], null):null),((cljs.core.not(historie))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$body,"Historie fehlt"], null):null),((cljs.core.not(spiel_typ))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$body,"Spieltyp fehlt"], null):null)], null)], null);
});
canastref.views.sum_strich = (function canastref$views$sum_strich(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,canastref.views.spielerbreite], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,"20",cljs.core.cst$kw$y1,"0",cljs.core.cst$kw$x2,canastref.views.spielerbreite,cljs.core.cst$kw$y2,"0",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke_DASH_width,"3",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
canastref.views.ergebnis_fuer = (function canastref$views$ergebnis_fuer(spiel,teilnehmer_namen,runde){
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(runde)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spiel.resultat_in_runde(spiel,tln,(runde - (1))))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),teilnehmer_namen)));
});
canastref.views.zwischensumme = (function canastref$views$zwischensumme(spiel,teilnehmer_namen,runde){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$height,"3px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$child,""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.sum_strich], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.sum_strich], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$child,""], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spieler.zwischen_summe(cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__21746 = cljs.core.cst$kw$teilnehmer.cljs$core$IFn$_invoke$arity$1(spiel);
return (fexpr__21746.cljs$core$IFn$_invoke$arity$1 ? fexpr__21746.cljs$core$IFn$_invoke$arity$1(tln) : fexpr__21746.call(null,tln));
})()),runde))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),teilnehmer_namen)))], null)], null);
});
canastref.views.korrektur_knopf = (function canastref$views$korrektur_knopf(runde,alle_runden){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(runde,alle_runden)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"korrigiere",cljs.core.cst$kw$class,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$korrigiere_DASH_ergebnis], null));
})], null)], null);
} else {
return null;
}
});
canastref.views.ergebnis_tabelle = (function canastref$views$ergebnis_tabelle(spiel,namen){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(canastref.views.ergebnis_fuer(spiel,namen,r),canastref.views.korrektur_knopf(r,canastref.spiel.runde(spiel)))], null),(((r > (1)))?canastref.views.zwischensumme(spiel,namen,r):null))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(canastref.spiel.runde(spiel) + (1)))));
});
canastref.views.geber_anzeige = (function canastref$views$geber_anzeige(spiel,namen){
if(cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"100px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,(function (){var G__21747 = canastref.spiel.geber(spiel);
return (namen.cljs$core$IFn$_invoke$arity$1 ? namen.cljs$core$IFn$_invoke$arity$1(G__21747) : namen.call(null,G__21747));
})()], null)," muss geben."], null)], null)], null);
} else {
return null;
}
});
canastref.views.kopfzeile = (function canastref$views$kopfzeile(namen){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"rTableHead",cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$child,"Rde."], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"rTableHead",cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$child,s], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,s], null));
}),namen)))], null);
});
canastref.views.ergebnis_eingabe = (function canastref$views$ergebnis_eingabe(namen,spiel){
var runde = canastref.spiel.runde(spiel);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$model,cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spiel.resultat_in_runde(spiel,tln,runde)),cljs.core.cst$kw$on_DASH_change,(function (p1__21748_SHARP_){
var val = parseInt(p1__21748_SHARP_);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resultat,tln,val,runde], null));
}),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,true,cljs.core.cst$kw$validation_DASH_regex,/^[-+]?[0-9]*$/,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$height,"24px",cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"number"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_right,"2px",cljs.core.cst$kw$background_DASH_color,"beige"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),namen));
});
canastref.views.naechste_runde = (function canastref$views$naechste_runde(namen,spiel){
var runde = canastref.spiel.runde(spiel);
var _ = ((cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel)))?re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_welt], null)):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,((cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel)))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1((runde + (1)))], null)], null),canastref.views.ergebnis_eingabe(namen,spiel),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab], null));
})], null)], null),canastref.views.geber_anzeige(spiel,namen)], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"gewinner",cljs.core.cst$kw$child,["Gewonnen hat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spiel.sieger(spiel))].join('')], null)], null))], null);
});
canastref.views.geber_auswahl = (function canastref$views$geber_auswahl(namen){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Geber festegen!"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$width,"6em",cljs.core.cst$kw$choices,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"?",cljs.core.cst$kw$label,"?"], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,n,cljs.core.cst$kw$label,n], null);
}),namen)),cljs.core.cst$kw$model,"?",cljs.core.cst$kw$on_DASH_change,(function (p1__21749_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geber,namen.indexOf(p1__21749_SHARP_)], null));
})], null)], null)], null);
});
canastref.views.spielablauf = (function canastref$views$spielablauf(namen){
var spiel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel], null)));
var historie = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$historie], null)));
var _ = (cljs.core.truth_(canastref.spiel.spiel_beendet_QMARK_(spiel))?re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel_DASH_beendet,historie], null)):null);
if(cljs.core.truth_(spiel)){
if((!(canastref.spiel.geber_festgelegt_QMARK_(spiel)))){
return canastref.views.geber_auswahl(namen);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.kopfzeile(namen),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$height,"400px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(canastref.views.ergebnis_tabelle(spiel,namen),canastref.views.naechste_runde(namen,spiel))], null)], null)], null)], null);
}
} else {
return null;
}
});
canastref.views.main_panel = (function canastref$views$main_panel(){
var spiel_typ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel_DASH_typ], null)));
var historie = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$historie], null)));
var spieler_namen = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null)));
var gespeichertes_spiel_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_], null)));
if(cljs.core.truth_((function (){var and__4149__auto__ = historie;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = spieler_namen;
if(cljs.core.truth_(and__4149__auto____$1)){
return spiel_typ;
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,spiel_typ,cljs.core.cst$kw$level,cljs.core.cst$kw$level1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.menue,gespeichertes_spiel_QMARK_], null)], null),canastref.views.gewonnene_spiele(historie)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.spielablauf,spieler_namen], null)], null)], null);
} else {
return canastref.views.fehlende_dateien_anzeigen(historie,spieler_namen,spiel_typ);
}
});
