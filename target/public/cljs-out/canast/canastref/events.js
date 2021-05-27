// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('canastref.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('canastref.db');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('canastref.drop_file_stream');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (db){
return cljs.core.reset_BANG_(re_frame.db.app_db,canastref.db.default_db);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$historie,(function (p__21681,_){
var map__21682 = p__21681;
var map__21682__$1 = cljs.core.__destructure_map(map__21682);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21682__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-hist.edn",cljs.core.cst$kw$historie)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spieler_DASH_namen,(function (p__21683,_){
var map__21684 = p__21683;
var map__21684__$1 = cljs.core.__destructure_map(map__21684);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21684__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-namen.edn",cljs.core.cst$kw$spieler_DASH_namen)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spiel_DASH_typ,(function (p__21685,_){
var map__21686 = p__21685;
var map__21686__$1 = cljs.core.__destructure_map(map__21686);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21686__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-spieltyp.edn",cljs.core.cst$kw$spiel_DASH_typ)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$welt,(function (p__21687,_){
var map__21688 = p__21687;
var map__21688__$1 = cljs.core.__destructure_map(map__21688);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21688__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_read_edn_from_dropbox("r-welt.edn",cljs.core.cst$kw$welt)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_welt,(function (p__21689,_){
var map__21690 = p__21689;
var map__21690__$1 = cljs.core.__destructure_map(map__21690);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21690__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(db,"r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$speichere_DASH_historie,(function (p__21691,p__21692){
var map__21693 = p__21691;
var map__21693__$1 = cljs.core.__destructure_map(map__21693);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,cljs.core.cst$kw$db);
var vec__21694 = p__21692;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(0),null);
var historie = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21694,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_write_edn_to_dropbox(historie,"r-hist.edn",cljs.core.cst$kw$historie_DASH_gespeichert_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,(function (p__21697,_){
var map__21698 = p__21697;
var map__21698__$1 = cljs.core.__destructure_map(map__21698);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21698__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_file_exists_on_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spiel_DASH_beendet,(function (p__21699,p__21700){
var map__21701 = p__21699;
var map__21701__$1 = cljs.core.__destructure_map(map__21701);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21701__$1,cljs.core.cst$kw$db);
var vec__21702 = p__21700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21702,(0),null);
var historie = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21702,(1),null);
var ___$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$speichere_DASH_historie,historie], null));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,true),cljs.core.cst$kw$http_DASH_xhrio,canastref.drop_file_stream.ajax_request_delete_file_from_dropbox("r-welt.edn",cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_exists,(function (db,p__21705){
var vec__21706 = p__21705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21706,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21706,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21706,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),cljs.core.cst$kw$gespeichertes_DASH_spiel_QMARK_,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_deleted,(function (db,p__21709){
var vec__21710 = p__21709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21710,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_written,(function (db,p__21713){
var vec__21714 = p__21713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21714,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21714,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21714,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_resp,(function (db,p__21717){
var vec__21718 = p__21717;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21718,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db_key,cljs.core.cst$kw$welt)){
return cljs.core.reset_BANG_(re_frame.db.app_db,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(item));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,db_key,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$loading,false], 0));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_resp,(function (db,p__21721){
var vec__21722 = p__21721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(0),null);
var db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21722,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$loading,false),db_key,false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$resultat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__21725){
var vec__21726 = p__21725;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(0),null);
var tln = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(2),null);
var runde = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(3),null);
var res = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,tln,cljs.core.cst$kw$resultate], null));
var resultate = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,runde,val);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,tln,cljs.core.cst$kw$resultate], null),resultate),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$teilnehmer,tln,cljs.core.cst$kw$summe], null),canastref.spieler.zwischen_summe(resultate,(runde + (1))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$schliesse_DASH_runde_DASH_ab,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canastref.spiel.schliesse_runde_ab(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$spiel,spiel),cljs.core.cst$kw$historie,canastref.spiel.registriere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(spiel)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$korrigiere_DASH_ergebnis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$historie,canastref.spiel.eliminiere_sieger(cljs.core.cst$kw$historie.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$sieger.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db)))),cljs.core.cst$kw$spiel,canastref.spiel.korrigiere(cljs.core.cst$kw$spiel.cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$geber,(function (db,p__21729){
var vec__21730 = p__21729;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(0),null);
var geber = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21730,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spiel,cljs.core.cst$kw$geber], null),geber);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$neues_DASH_spiel,(function (db,p__21733){
var vec__21734 = p__21733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21734,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$spiel,canastref.spiel.neues_spiel(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spieler_DASH_namen], null)))));
}));
