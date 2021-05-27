(ns canastref.spiel
  (:require [canastref.spieler :as s]))

;; Konstruktoren

(defn ->Spiel []
  {:teilnehmer {} :runde 0 :spiel-beendet? false :sieger nil :geber nil})

;; Getter
(defn geber
  [spiel]
  (:geber spiel))

(defn runde
  [spiel]
  (:runde spiel))

(defn spiel-beendet?
  [spiel]
  (:spiel-beendet? spiel))

(defn sieger
  [spiel]
  (:sieger spiel))


;; diverse

(defn geber-festgelegt?
  [spiel]
  (not (nil? (:geber spiel))))

(defn neues-spiel 
  [sp-namen] 
  (assoc (->Spiel) :teilnehmer (into {} (map #(hash-map % (s/->Spieler)) sp-namen))))

(defn naechster-geber
  [index anzahl-spieler]
  (mod (inc index) anzahl-spieler ))

(defn vorheriger-geber
  [index anzahl-spieler]
  (if (= index 0) (dec anzahl-spieler) (dec index)))

(defn schliesse-runde-ab
  [spiel ]
  (let [teiln (:teilnehmer spiel)
        sieger (first (last (sort-by #(:summe (val %)) teiln)))
        geber (naechster-geber (:geber spiel) (count teiln))]
    (assoc spiel
           :runde (inc (:runde spiel))
           :sieger (when (>= (:summe (teiln sieger)) 5000) sieger)
           :spiel-beendet? (>= (:summe (teiln sieger)) 5000)
           :geber geber)))

(defn registriere-sieger
  [historie sieger]  
  (if sieger (update historie sieger inc) historie))

(defn eliminiere-sieger
  [historie sieger]  
  (if sieger (update historie sieger dec) historie))

(defn korrigiere
  [spiel]   
  (-> spiel
      (update :runde dec)
      (assoc :spiel-beendet? false 
             :sieger nil
             :geber (vorheriger-geber (:geber spiel) (count (:teilnehmer spiel))))))

(defn resultat-in-runde
  [spiel tln runde]
  (let [resultate (s/resultate (get (:teilnehmer spiel) tln))] 
    (if (>= runde (count resultate)) nil (resultate runde))))

