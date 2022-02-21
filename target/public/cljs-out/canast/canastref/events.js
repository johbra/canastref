// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('canastref.db');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('canastref.drop_file_stream');
goog.require('medley.core');
goog.require('cljs_time.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_){
return cljs.core.reset_BANG_(re_frame.db.app_db,canastref.db.default_db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$historien,(function (p__21904,_){
var map__21905 = p__21904;
var map__21905__$1 = cljs.core.__destructure_map(map__21905);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-hist.edn",cljs.core.cst$kw$historien)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spieler_DASH_namen,(function (p__21906,_){
var map__21907 = p__21906;
var map__21907__$1 = cljs.core.__destructure_map(map__21907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21907__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-namen.edn",cljs.core.cst$kw$spieler_DASH_namen)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (p__21908,_){
var map__21909 = p__21908;
var map__21909__$1 = cljs.core.__destructure_map(map__21909);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21909__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-welt.edn",cljs.core.cst$kw$welt)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_welt,(function (p__21910,_){
var map__21911 = p__21910;
var map__21911__$1 = cljs.core.__destructure_map(map__21911);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21911__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(db,"r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_historien,(function (p__21912,p__21913){
var map__21914 = p__21912;
var map__21914__$1 = cljs.core.__destructure_map(map__21914);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21914__$1,cljs.core.cst$kw$db);
var vec__21915 = p__21913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(historien,"r-hist.edn",cljs.core.cst$kw$historie_DASH_gespeichert_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,(function (p__21918,_){
var map__21919 = p__21918;
var map__21919__$1 = cljs.core.__destructure_map(map__21919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21919__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_file_exists_on_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spiel_DASH_beendet,(function (p__21920,p__21921){
var map__21922 = p__21920;
var map__21922__$1 = cljs.core.__destructure_map(map__21922);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21922__$1,cljs.core.cst$kw$db);
var vec__21923 = p__21921;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21923,(1),null);
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_historien,historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_delete_file_from_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_exists,(function (db,p__21926){
var vec__21927 = p__21926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_deleted,(function (db,p__21930){
var vec__21931 = p__21930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21931,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21931,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21931,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_written,(function (db,p__21934){
var vec__21935 = p__21934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21935,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_resp,(function (db,p__21938){
var vec__21939 = p__21938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939,(2),null);
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db_key,cljs.core.cst$kw$welt)){
return cljs.core.reset_BANG_(re_frame.db.app_db,data);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db_key,cljs.core.cst$kw$historien)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$hist_DASH_aus_DASH_datei,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$historie,(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1((0)) : data.call(null,(0))),cljs.core.cst$kw$monatshistorie,(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1((1)) : data.call(null,(1))),cljs.core.cst$kw$monatsbilanz,(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1((2)) : data.call(null,(2))),cljs.core.cst$kw$loading,false], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,db_key,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$loading,false], 0));

}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_resp,(function (db,p__21942){
var vec__21943 = p__21942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21943,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21943,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21943,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$resultat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21946){
var vec__21947 = p__21946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(0),null);
var tln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(2),null);
var runde = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21947,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index,cljs.core.cst$kw$summe], null),canastref.spieler.zwischen_summe(cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canastref.spiel.schliesse_runde_ab(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$spiel,spiel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$historie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel)),cljs.core.cst$kw$monatshistorie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$korrigiere_DASH_ergebnis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$historie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$monatshistorie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))),cljs.core.cst$kw$spiel,canastref.spiel.korrigiere(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geber,(function (db,p__21950){
var vec__21951 = p__21950;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(0),null);
var geber = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$geber], null),geber);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$neues_DASH_spiel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21954){
var vec__21955 = p__21954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21955,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21955,(1),null);
var laufender_monat = cljs.core.cst$kw$monat.cljs$core$IFn$_invoke$arity$1(db);
var neuer_monat_QMARK_ = (laufender_monat < cljs_time.core.month(cljs_time.core.now()));
var monatsbilanz = ((neuer_monat_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$monatsbilanz.cljs$core$IFn$_invoke$arity$1(db),laufender_monat,canastref.spiel.fuehrende(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db))):cljs.core.cst$kw$monatsbilanz.cljs$core$IFn$_invoke$arity$1(db));
var monatshistorie = ((neuer_monat_QMARK_)?medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (){
return (0);
}),cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db)):cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db));
var ___$2 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([monatshistorie], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$monat,(laufender_monat + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$monatsbilanz,monatsbilanz,cljs.core.cst$kw$monatshistorie,monatshistorie,cljs.core.cst$kw$spiel,canastref.spiel.neues_spiel(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null))))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$monatsbilanz,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21958){
var vec__21959 = p__21958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21959,(0),null);
var bilanz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21959,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$monatsbilanz,bilanz);
}));
