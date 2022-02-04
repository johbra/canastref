// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('canastref.subs');
goog.require('canastref.events');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('re_com.core');
goog.require('cljs_time.local');
goog.require('cljs_time.core');
canastref.views.spielerbreite = (85);
canastref.views.monatsnamen = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","M\u00E4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"], null);
canastref.views.gewonnene_spiele = (function canastref$views$gewonnene_spiele(historie,monatshistorie){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,"Gewonnene Spiele: "], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,(function (){var G__21773 = (cljs_time.core.month(cljs_time.local.local_now()) - (1));
return (canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1 ? canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1(G__21773) : canastref.views.monatsnamen.call(null,G__21773));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(monatshistorie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(monatshistorie)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(monatshistorie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.second(monatshistorie)))].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b,cljs_time.core.year(cljs_time.local.local_now())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.first(historie)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.second(historie))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.second(historie)))].join('')], null)], null)], null)], null)], null)], null)], null);
});
canastref.views.monatsbilanz_tabelle = (function canastref$views$monatsbilanz_tabelle(){
var monate = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$monatsbilanz], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"12pt"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"20px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,"bold"], null),cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,"Monat"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,"Sieger"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4564__auto__ = (function canastref$views$monatsbilanz_tabelle_$_iter__21774(s__21775){
return (new cljs.core.LazySeq(null,(function (){
var s__21775__$1 = s__21775;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__21775__$1);
if(temp__5753__auto__){
var s__21775__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21775__$2)){
var c__4562__auto__ = cljs.core.chunk_first(s__21775__$2);
var size__4563__auto__ = cljs.core.count(c__4562__auto__);
var b__21777 = cljs.core.chunk_buffer(size__4563__auto__);
if((function (){var i__21776 = (0);
while(true){
if((i__21776 < size__4563__auto__)){
var m = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4562__auto__,i__21776);
cljs.core.chunk_append(b__21777,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,(function (){var G__21778 = (cljs.core.key(m) - (1));
return (canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1 ? canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1(G__21778) : canastref.views.monatsnamen.call(null,G__21778));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,cljs.core.val(m)], null)], null)], null));

var G__21780 = (i__21776 + (1));
i__21776 = G__21780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21777),canastref$views$monatsbilanz_tabelle_$_iter__21774(cljs.core.chunk_rest(s__21775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21777),null);
}
} else {
var m = cljs.core.first(s__21775__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,(function (){var G__21779 = (cljs.core.key(m) - (1));
return (canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1 ? canastref.views.monatsnamen.cljs$core$IFn$_invoke$arity$1(G__21779) : canastref.views.monatsnamen.call(null,G__21779));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$size,"70px",cljs.core.cst$kw$child,cljs.core.val(m)], null)], null)], null),canastref$views$monatsbilanz_tabelle_$_iter__21774(cljs.core.rest(s__21775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4564__auto__(monate);
})())], null)], null)], null);
});
canastref.views.menue = (function canastref$views$menue(){
var gespeichertes_spiel_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$label,"Neues Spiel",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$neues_DASH_spiel], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$class,"btn-primary",cljs.core.cst$kw$label,"Begonnenes Spiel fortsetzen",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$welt], null));
}),cljs.core.cst$kw$disabled_QMARK_,cljs.core.not(gespeichertes_spiel_QMARK_)], null)], null)], null);
});
canastref.views.fehlende_dateien_anzeigen = (function canastref$views$fehlende_dateien_anzeigen(historie,spieler_namen){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not(spieler_namen))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$body,"keine Spielernamen angegeben"], null):null),((cljs.core.not(historie))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.alert_box,cljs.core.cst$kw$body,"Historie fehlt"], null):null)], null)], null);
});
canastref.views.sum_strich = (function canastref$views$sum_strich(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,canastref.views.spielerbreite], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$line,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x1,"20",cljs.core.cst$kw$y1,"0",cljs.core.cst$kw$x2,canastref.views.spielerbreite,cljs.core.cst$kw$y2,"0",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stroke_DASH_width,"3",cljs.core.cst$kw$stroke,"black"], null)], null)], null)], null);
});
canastref.views.ergebnis_fuer = (function canastref$views$ergebnis_fuer(teilnehmer,runde){
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(runde)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spiel.resultat_in_runde(tln,(runde - (1))))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),teilnehmer)));
});
canastref.views.zwischensumme = (function canastref$views$zwischensumme(spiel,runde){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$height,"3px",cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$child,""], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(canastref.spiel.anzahl_teilnehmer(spiel),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.sum_strich], null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$child,""], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spieler.zwischen_summe(canastref.spieler.resultate(tln),runde))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),canastref.spiel.teilnehmer(spiel))))], null)], null);
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
canastref.views.ergebnis_tabelle = (function canastref$views$ergebnis_tabelle(spiel){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(canastref.views.ergebnis_fuer(canastref.spiel.teilnehmer(spiel),r),canastref.views.korrektur_knopf(r,canastref.spiel.runde(spiel)))], null),(((r > (1)))?canastref.views.zwischensumme(spiel,r):null))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(canastref.spiel.runde(spiel) + (1)))));
});
canastref.views.geber_anzeige = (function canastref$views$geber_anzeige(spiel,namen){
if(cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"50px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"10px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,(function (){var G__21781 = canastref.spiel.geber(spiel);
return (namen.cljs$core$IFn$_invoke$arity$1 ? namen.cljs$core$IFn$_invoke$arity$1(G__21781) : namen.call(null,G__21781));
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
canastref.views.ergebnis_eingabe = (function canastref$views$ergebnis_eingabe(spiel){
var runde = canastref.spiel.runde(spiel);
var alle_teilnehmer = canastref.spiel.teilnehmer(spiel);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tln){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,cljs.core.cst$kw$model,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(canastref.spieler.resultate(tln),runde))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(canastref.spieler.resultate(tln),runde):"")),cljs.core.cst$kw$on_DASH_change,(function (p1__21782_SHARP_){
var v = parseInt(p1__21782_SHARP_);
var index = alle_teilnehmer.indexOf(tln);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$resultat,canastref.spieler.neues_resultat(tln,v,runde),index,runde], null));
}),cljs.core.cst$kw$change_DASH_on_DASH_blur_QMARK_,true,cljs.core.cst$kw$validation_DASH_regex,/^[-+]?[0-9]*$/,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.views.spielerbreite),"px"].join(''),cljs.core.cst$kw$attr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"number"], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_right,"2px",cljs.core.cst$kw$background_DASH_color,"beige"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tln], null));
}),alle_teilnehmer));
});
canastref.views.naechste_runde = (function canastref$views$naechste_runde(namen,spiel){
var runde = canastref.spiel.runde(spiel);
var _ = ((cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel)))?re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_welt], null)):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$justify,cljs.core.cst$kw$end,cljs.core.cst$kw$child,cljs.core.str.cljs$core$IFn$_invoke$arity$1((runde + (1)))], null)], null),canastref.views.ergebnis_eingabe(spiel),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,cljs.core.cst$kw$label,"speichern",cljs.core.cst$kw$class,"button",cljs.core.cst$kw$on_DASH_click,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab], null));
})], null)], null),canastref.views.geber_anzeige(spiel,namen)], 0))], null);
});
canastref.views.geber_auswahl = (function canastref$views$geber_auswahl(namen){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$gap,"12px",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,cljs.core.cst$kw$label,"Geber festegen!"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,cljs.core.cst$kw$width,"6em",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"24px"], null),cljs.core.cst$kw$choices,cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"?",cljs.core.cst$kw$label,"?"], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (n){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,n,cljs.core.cst$kw$label,n], null);
}),namen)),cljs.core.cst$kw$model,"?",cljs.core.cst$kw$on_DASH_change,(function (p1__21783_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$geber,namen.indexOf(p1__21783_SHARP_)], null));
})], null)], null)], null);
});
canastref.views.spielablauf = (function canastref$views$spielablauf(namen,historie,monatshistorie,monatsbilanz){
var spiel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel], null)));
var _ = (cljs.core.truth_(canastref.spiel.spiel_beendet_QMARK_(spiel))?re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel_DASH_beendet,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [historie,monatshistorie,monatsbilanz], null)], null)):null);
if(cljs.core.truth_(spiel)){
if((!(canastref.spiel.geber_festgelegt_QMARK_(spiel)))){
return canastref.views.geber_auswahl(cljs.core.vec(namen));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"35px"], null),canastref.views.kopfzeile(namen),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.scroller,cljs.core.cst$kw$v_DASH_scroll,cljs.core.cst$kw$auto,cljs.core.cst$kw$height,"700px",cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$width,"800px",cljs.core.cst$kw$children,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(canastref.views.ergebnis_tabelle(spiel),((cljs.core.not(canastref.spiel.spiel_beendet_QMARK_(spiel)))?canastref.views.naechste_runde(namen,spiel):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$class,"gewinner",cljs.core.cst$kw$child,["Gewonnen hat: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(canastref.spieler.spieler_name(canastref.spiel.sieger(spiel)))].join('')], null)))], null)], null)], null)], null);
}
} else {
return null;
}
});
canastref.views.main_panel = (function canastref$views$main_panel(){
var historie = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$historie], null)));
var monatshistorie = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$monatshistorie], null)));
var monatsbilanz = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$monatsbilanz], null)));
var spieler_namen = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null)));
var fuehrende = canastref.spiel.fuehrende(monatshistorie);
if(cljs.core.truth_((function (){var and__4149__auto__ = historie;
if(cljs.core.truth_(and__4149__auto__)){
return spieler_namen;
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,cljs.core.cst$kw$label,"Canasta",cljs.core.cst$kw$level,cljs.core.cst$kw$level1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,cljs.core.cst$kw$size,"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,cljs.core.cst$kw$child,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.menue], null)], null),canastref.views.gewonnene_spiele(historie,monatshistorie),canastref.views.monatsbilanz_tabelle()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [canastref.views.spielablauf,spieler_namen,historie,monatshistorie,monatsbilanz], null)], null)], null);
} else {
return canastref.views.fehlende_dateien_anzeigen(historie,spieler_namen);
}
});
