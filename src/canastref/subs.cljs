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
 :spieler-namen
 (fn [db] 
   (:spieler-namen db)))

(rf/reg-sub
 :spiel-typ
 (fn [db] 
   (:spiel-typ db)))

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

(rf/reg-sub
 :letztes-resultat
 (fn [db [_ tln]] 
   (prn tln) 0))
