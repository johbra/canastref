(ns canastref.subs  
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :name
 (fn [db]
   (:name db)))

(rf/reg-sub
 :historie
 (fn [db] 
   (:historie db)))

(rf/reg-sub
 :monatshistorie
 (fn [db] 
   (:monatshistorie db)))

(rf/reg-sub
 :monatsbilanz
 (fn [db] 
   (:monatsbilanz db)))

(rf/reg-sub
 :monat
 (fn [db] 
   (:monat db)))

(rf/reg-sub
 :spieler-namen
 (fn [db] 
   (:spieler-namen db)))

(rf/reg-sub
 :testspiel
 (fn [db] 
   (:spiel db)))

(rf/reg-sub
 :gespeichertes-spiel?
 (fn [db] 
   (:gespeichertes-spiel? db)))

(rf/reg-sub
 :spiel
 (fn [db] 
   (:spiel db)))

(rf/reg-sub
 :teilnehmer
 (fn [db] 
   (:teilnehmer (:spiel db))))

(rf/reg-sub
 :runde
 (fn [db] 
   (:runde (:spiel db))))

#_(rf/reg-sub
   :letztes-resultat
   (fn [db [_ tln]] 
     (prn tln) 0))
