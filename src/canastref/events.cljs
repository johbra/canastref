(ns canastref.events 
  (:require [re-frame.core :as rf] 
            [canastref.db :as db]
            [canastref.spiel :as sp]
            [canastref.spieler :as s]
            [canastref.drop-file-stream :as df] 
            #_[canastref.db :refer [default-db ]]))

(rf/reg-event-db
 :initialize
 (fn [db]
   (reset! re-frame.db/app-db db/default-db)))


(rf/reg-event-fx
 :historie
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-hist.edn" :historie)}))

(rf/reg-event-fx
 :spieler-namen
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-namen.edn" :spieler-namen)}))

(rf/reg-event-fx
 :spiel-typ
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-spieltyp.edn" :spiel-typ)}))

(rf/reg-event-fx
 :welt
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-read-edn-from-dropbox
                 "r-welt.edn" :welt)}))

(rf/reg-event-fx
 :speichere-welt
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-write-edn-to-dropbox
                 db "r-welt.edn" :gespeichertes-spiel?)}))

(rf/reg-event-fx
 :speichere-historie
 (fn [{:keys [db]} [_ historie]] 
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-write-edn-to-dropbox
                 historie "r-hist.edn" :historie-gespeichert?)}))

(rf/reg-event-fx
 :gespeichertes-spiel?
 (fn [{:keys [db]} _]
   {:db         (assoc db :loading true)  
    :http-xhrio (df/ajax-request-file-exists-on-dropbox
                 "r-welt.edn" :gespeichertes-spiel?)}))

(rf/reg-event-fx
 :spiel-beendet
 (fn [{:keys [db]} [_ historie]]
   (let [_ (rf/dispatch [:speichere-historie historie])]
     {:db         (assoc db :loading true)  
      :http-xhrio (df/ajax-request-delete-file-from-dropbox
                   "r-welt.edn" :gespeichertes-spiel?)})))


(rf/reg-event-db
 :process-exists
 (fn [db [_ _ _]]
   (-> db
       (assoc :loading false)
       (assoc :gespeichertes-spiel? true))))

(rf/reg-event-db
 :process-deleted
 (fn [db [_ db-key _]]
   (-> db
       (assoc :loading false)
       (assoc db-key false))))

(rf/reg-event-db
 :process-written
 (fn [db [_ db-key _]]
   (-> db
       (assoc :loading false)
       (assoc db-key true))))

(rf/reg-event-db
 :process-resp
 (fn [db [_ db-key item]]
   (if (= db-key :welt)
     (reset! re-frame.db/app-db (cljs.reader/read-string  item))
     (assoc db
            db-key (cljs.reader/read-string  item)
            :loading false))))

(rf/reg-event-db
 :bad-resp
 (fn [db [_ db-key _ ]] 
   (-> db
       (assoc :loading false )
       (assoc db-key false))))

(rf/reg-event-db
 :resultat
 [re-frame.core/debug]
 (fn [db [_ tln val runde]]
   (let [res (get-in db [:spiel :teilnehmer tln :resultate])
         resultate (assoc res runde val)]
     (-> db
         (assoc-in [:spiel :teilnehmer tln :resultate] resultate)
         (assoc-in  [:spiel :teilnehmer tln :summe]
                    (s/zwischen-summe resultate (inc runde)))))))

(rf/reg-event-db
 :schliesse-runde-ab
 [re-frame.core/debug]
 (fn [db]
   (let [spiel (sp/schliesse-runde-ab (:spiel db))]
     (-> db
         (assoc :spiel spiel)
         (assoc :historie (sp/registriere-sieger (:historie db) (:sieger spiel)))))))

(rf/reg-event-db
 :korrigiere-ergebnis
 [re-frame.core/debug]
 (fn [db]
   (-> db
       (assoc :historie (sp/eliminiere-sieger (:historie db) (:sieger (:spiel db))))
       (assoc :spiel (sp/korrigiere (:spiel db))))))

(rf/reg-event-db
 :geber
 (fn [db [_  geber]] 
   (assoc-in db [:spiel :geber] geber)))

#_(rf/reg-event-db
   :testspiel
   (fn [db [_ _]] 
     (assoc db :spiel db/testspiel)))

(rf/reg-event-db
 :neues-spiel
 (fn [db [_ _]] 
   (assoc db :spiel (sp/neues-spiel @(rf/subscribe [:spieler-namen])))))
