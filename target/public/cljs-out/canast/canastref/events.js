// Compiled by ClojureScript 1.10.844 {}
goog.provide('canastref.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('canastref.db');
goog.require('canastref.spiel');
goog.require('canastref.spieler');
goog.require('canastref.drop_file_stream');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,canastref.db.default_db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"historie","historie",893875268),(function (p__20728,_){
var map__20729 = p__20728;
var map__20729__$1 = cljs.core.__destructure_map.call(null,map__20729);
var db = cljs.core.get.call(null,map__20729__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-hist.edn",new cljs.core.Keyword(null,"historie","historie",893875268))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911),(function (p__20730,_){
var map__20731 = p__20730;
var map__20731__$1 = cljs.core.__destructure_map.call(null,map__20731);
var db = cljs.core.get.call(null,map__20731__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-namen.edn",new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"welt","welt",-1673248721),(function (p__20732,_){
var map__20733 = p__20732;
var map__20733__$1 = cljs.core.__destructure_map.call(null,map__20733);
var db = cljs.core.get.call(null,map__20733__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_read_edn_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"welt","welt",-1673248721))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-welt","speichere-welt",-66606649),(function (p__20734,_){
var map__20735 = p__20734;
var map__20735__$1 = cljs.core.__destructure_map.call(null,map__20735);
var db = cljs.core.get.call(null,map__20735__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,db,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"speichere-historie","speichere-historie",-1643143332),(function (p__20736,p__20737){
var map__20738 = p__20736;
var map__20738__$1 = cljs.core.__destructure_map.call(null,map__20738);
var db = cljs.core.get.call(null,map__20738__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20739 = p__20737;
var _ = cljs.core.nth.call(null,vec__20739,(0),null);
var historie = cljs.core.nth.call(null,vec__20739,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_write_edn_to_dropbox.call(null,historie,"r-hist.edn",new cljs.core.Keyword(null,"historie-gespeichert?","historie-gespeichert?",576306150))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),(function (p__20742,_){
var map__20743 = p__20742;
var map__20743__$1 = cljs.core.__destructure_map.call(null,map__20743);
var db = cljs.core.get.call(null,map__20743__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_file_exists_on_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"spiel-beendet","spiel-beendet",939572612),(function (p__20744,p__20745){
var map__20746 = p__20744;
var map__20746__$1 = cljs.core.__destructure_map.call(null,map__20746);
var db = cljs.core.get.call(null,map__20746__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__20747 = p__20745;
var _ = cljs.core.nth.call(null,vec__20747,(0),null);
var historie = cljs.core.nth.call(null,vec__20747,(1),null);
var ___$1 = re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"speichere-historie","speichere-historie",-1643143332),historie], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),canastref.drop_file_stream.ajax_request_delete_file_from_dropbox.call(null,"r-welt.edn",new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637))], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-exists","process-exists",-1809363622),(function (db,p__20750){
var vec__20751 = p__20750;
var _ = cljs.core.nth.call(null,vec__20751,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20751,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__20751,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"gespeichertes-spiel?","gespeichertes-spiel?",147195637),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-deleted","process-deleted",-1653007737),(function (db,p__20754){
var vec__20755 = p__20754;
var _ = cljs.core.nth.call(null,vec__20755,(0),null);
var db_key = cljs.core.nth.call(null,vec__20755,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20755,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-written","process-written",-1697339618),(function (db,p__20758){
var vec__20759 = p__20758;
var _ = cljs.core.nth.call(null,vec__20759,(0),null);
var db_key = cljs.core.nth.call(null,vec__20759,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20759,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-resp","process-resp",1829942856),(function (db,p__20762){
var vec__20763 = p__20762;
var _ = cljs.core.nth.call(null,vec__20763,(0),null);
var db_key = cljs.core.nth.call(null,vec__20763,(1),null);
var item = cljs.core.nth.call(null,vec__20763,(2),null);
if(cljs.core._EQ_.call(null,db_key,new cljs.core.Keyword(null,"welt","welt",-1673248721))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,cljs.reader.read_string.call(null,item));
} else {
return cljs.core.assoc.call(null,db,db_key,cljs.reader.read_string.call(null,item),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-resp","bad-resp",-1733432202),(function (db,p__20766){
var vec__20767 = p__20766;
var _ = cljs.core.nth.call(null,vec__20767,(0),null);
var db_key = cljs.core.nth.call(null,vec__20767,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__20767,(2),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),db_key,false);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"resultat","resultat",1627423071),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db,p__20770){
var vec__20771 = p__20770;
var _ = cljs.core.nth.call(null,vec__20771,(0),null);
var tln = cljs.core.nth.call(null,vec__20771,(1),null);
var index = cljs.core.nth.call(null,vec__20771,(2),null);
var runde = cljs.core.nth.call(null,vec__20771,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index], null),tln),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"teilnehmer","teilnehmer",-1866934245),index,new cljs.core.Keyword(null,"summe","summe",-650249817)], null),canastref.spieler.zwischen_summe.call(null,new cljs.core.Keyword(null,"resultate","resultate",-649999987).cljs$core$IFn$_invoke$arity$1(tln),(runde + (1))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"schliesse-runde-ab","schliesse-runde-ab",-2019928989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
var spiel = canastref.spiel.schliesse_runde_ab.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"spiel","spiel",-831112206),spiel),new cljs.core.Keyword(null,"historie","historie",893875268),canastref.spiel.registriere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),canastref.spiel.sieger.call(null,spiel)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"korrigiere-ergebnis","korrigiere-ergebnis",-721888138),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (db){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"historie","historie",893875268),canastref.spiel.eliminiere_sieger.call(null,new cljs.core.Keyword(null,"historie","historie",893875268).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"sieger","sieger",-247971207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"spiel","spiel",-831112206),canastref.spiel.korrigiere.call(null,new cljs.core.Keyword(null,"spiel","spiel",-831112206).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"geber","geber",604746862),(function (db,p__20774){
var vec__20775 = p__20774;
var _ = cljs.core.nth.call(null,vec__20775,(0),null);
var geber = cljs.core.nth.call(null,vec__20775,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spiel","spiel",-831112206),new cljs.core.Keyword(null,"geber","geber",604746862)], null),geber);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"neues-spiel","neues-spiel",287296109),(function (db,p__20778){
var vec__20779 = p__20778;
var _ = cljs.core.nth.call(null,vec__20779,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20779,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"spiel","spiel",-831112206),canastref.spiel.neues_spiel.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-namen","spieler-namen",-1834217911)], null)))));
}));
