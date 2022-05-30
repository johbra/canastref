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
goog.require('cljs_time.local');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_){
return cljs.core.reset_BANG_(re_frame.db.app_db,canastref.db.default_db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$historien,(function (p__21921,_){
var map__21922 = p__21921;
var map__21922__$1 = cljs.core.__destructure_map(map__21922);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21922__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-hist.edn",cljs.core.cst$kw$historien)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spieler_DASH_namen,(function (p__21923,_){
var map__21924 = p__21923;
var map__21924__$1 = cljs.core.__destructure_map(map__21924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21924__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-namen.edn",cljs.core.cst$kw$spieler_DASH_namen)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (p__21925,_){
var map__21926 = p__21925;
var map__21926__$1 = cljs.core.__destructure_map(map__21926);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-welt.edn",cljs.core.cst$kw$welt)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_welt,(function (p__21927,_){
var map__21928 = p__21927;
var map__21928__$1 = cljs.core.__destructure_map(map__21928);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21928__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(db,"r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_historien,(function (p__21929,p__21930){
var map__21931 = p__21929;
var map__21931__$1 = cljs.core.__destructure_map(map__21931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21931__$1,cljs.core.cst$kw$db);
var vec__21932 = p__21930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(historien,"r-hist.edn",cljs.core.cst$kw$historie_DASH_gespeichert_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,(function (p__21935,_){
var map__21936 = p__21935;
var map__21936__$1 = cljs.core.__destructure_map(map__21936);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_file_exists_on_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spiel_DASH_beendet,(function (p__21937,p__21938){
var map__21939 = p__21937;
var map__21939__$1 = cljs.core.__destructure_map(map__21939);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21939__$1,cljs.core.cst$kw$db);
var vec__21940 = p__21938;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(1),null);
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_historien,historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_delete_file_from_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_exists,(function (db,p__21943){
var vec__21944 = p__21943;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21944,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21944,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21944,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_deleted,(function (db,p__21947){
var vec__21948 = p__21947;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21948,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21948,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21948,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_written,(function (db,p__21951){
var vec__21952 = p__21951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21952,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_resp,(function (db,p__21955){
var vec__21956 = p__21955;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21956,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21956,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21956,(2),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_resp,(function (db,p__21959){
var vec__21960 = p__21959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21960,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$resultat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21963){
var vec__21964 = p__21963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(0),null);
var tln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(2),null);
var runde = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21964,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index,cljs.core.cst$kw$summe], null),canastref.spieler.zwischen_summe(cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canastref.spiel.schliesse_runde_ab(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$spiel,spiel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$historie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel)),cljs.core.cst$kw$monatshistorie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$korrigiere_DASH_ergebnis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$historie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$monatshistorie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))),cljs.core.cst$kw$spiel,canastref.spiel.korrigiere(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geber,(function (db,p__21967){
var vec__21968 = p__21967;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21968,(0),null);
var geber = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21968,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$geber], null),geber);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$neues_DASH_spiel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21971){
var vec__21972 = p__21971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21972,(1),null);
var laufender_monat = cljs_time.core.month(cljs_time.local.local_now());
var neuer_monat_QMARK_ = (laufender_monat > (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(cljs.core.cst$kw$monatsbilanz.cljs$core$IFn$_invoke$arity$1(db))) + (1)));
var monatsbilanz = ((neuer_monat_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$monatsbilanz.cljs$core$IFn$_invoke$arity$1(db),(laufender_monat - (1)),canastref.spiel.fuehrende(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db))):cljs.core.cst$kw$monatsbilanz.cljs$core$IFn$_invoke$arity$1(db));
var monatshistorie = ((neuer_monat_QMARK_)?medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (){
return (0);
}),cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db)):cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$monat,laufender_monat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$monatsbilanz,monatsbilanz,cljs.core.cst$kw$monatshistorie,monatshistorie,cljs.core.cst$kw$spiel,canastref.spiel.neues_spiel(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null))))], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$monatsbilanz,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21975){
var vec__21976 = p__21975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21976,(0),null);
var bilanz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21976,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$monatsbilanz,bilanz);
}));
