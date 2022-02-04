// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('canastref.db');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('canastref.drop_file_stream');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_){
return cljs.core.reset_BANG_(re_frame.db.app_db,canastref.db.default_db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$historien,(function (p__21694,_){
var map__21695 = p__21694;
var map__21695__$1 = cljs.core.__destructure_map(map__21695);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21695__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-hist.edn",cljs.core.cst$kw$historien)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spieler_DASH_namen,(function (p__21696,_){
var map__21697 = p__21696;
var map__21697__$1 = cljs.core.__destructure_map(map__21697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21697__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-namen.edn",cljs.core.cst$kw$spieler_DASH_namen)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (p__21698,_){
var map__21699 = p__21698;
var map__21699__$1 = cljs.core.__destructure_map(map__21699);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-welt.edn",cljs.core.cst$kw$welt)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_welt,(function (p__21700,_){
var map__21701 = p__21700;
var map__21701__$1 = cljs.core.__destructure_map(map__21701);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21701__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(db,"r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_historien,(function (p__21702,p__21703){
var map__21704 = p__21702;
var map__21704__$1 = cljs.core.__destructure_map(map__21704);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21704__$1,cljs.core.cst$kw$db);
var vec__21705 = p__21703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21705,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21705,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(historien,"r-hist.edn",cljs.core.cst$kw$historie_DASH_gespeichert_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,(function (p__21708,_){
var map__21709 = p__21708;
var map__21709__$1 = cljs.core.__destructure_map(map__21709);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21709__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_file_exists_on_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spiel_DASH_beendet,(function (p__21710,p__21711){
var map__21712 = p__21710;
var map__21712__$1 = cljs.core.__destructure_map(map__21712);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21712__$1,cljs.core.cst$kw$db);
var vec__21713 = p__21711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21713,(0),null);
var historien = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21713,(1),null);
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_historien,historien], null));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_delete_file_from_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_exists,(function (db,p__21716){
var vec__21717 = p__21716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21717,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_deleted,(function (db,p__21720){
var vec__21721 = p__21720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21721,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_written,(function (db,p__21724){
var vec__21725 = p__21724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21725,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_resp,(function (db,p__21728){
var vec__21729 = p__21728;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(2),null);
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_resp,(function (db,p__21732){
var vec__21733 = p__21732;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21733,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21733,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21733,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$resultat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21736){
var vec__21737 = p__21736;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(0),null);
var tln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(2),null);
var runde = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21737,(3),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,index,cljs.core.cst$kw$summe], null),canastref.spieler.zwischen_summe(cljs.core.cst$kw$resultate.cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canastref.spiel.schliesse_runde_ab(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$spiel,spiel),cljs.core.cst$kw$historie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel))),cljs.core.cst$kw$monatshistorie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger(spiel)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$korrigiere_DASH_ergebnis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$historie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db)))),cljs.core.cst$kw$monatshistorie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$monatshistorie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db)))),cljs.core.cst$kw$spiel,canastref.spiel.korrigiere(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geber,(function (db,p__21740){
var vec__21741 = p__21740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(0),null);
var geber = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21741,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$geber], null),geber);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$neues_DASH_spiel,(function (db,p__21744){
var vec__21745 = p__21744;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21745,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$spiel,canastref.spiel.neues_spiel(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$monatsbilanz,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21748){
var vec__21749 = p__21748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21749,(0),null);
var bilanz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21749,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$monatsbilanz,bilanz);
}));
