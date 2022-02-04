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

(defn teilnehmer
  [spiel]
  (:teilnehmer spiel))

(defn spiel-beendet?
  [spiel]
  (:spiel-beendet? spiel))

(defn sieger
  [spiel]
  (:sieger spiel))


;; diverse

(defn anzahl-teilnehmer
  [spiel]
  (count (:teilnehmer spiel)))

(defn geber-festgelegt?
  [spiel]
  (not (nil? (:geber spiel))))

(defn neues-spiel 
  [sp-namen] 
  (assoc (->Spiel) :teilnehmer (mapv #(s/->Spieler %) sp-namen)))

(defn naechster-geber
  [index anzahl-spieler]
  (mod (inc index) anzahl-spieler ))

(defn vorheriger-geber
  [index anzahl-spieler]
  (if (= index 0) (dec anzahl-spieler) (dec index)))

(defn ergaenze-standard-werte-in-resultaten
  [teilnehmer runde]
  (mapv #(if (nil? (get (s/resultate %) runde))
           (s/null-resultat runde %)
           %)
        teilnehmer))

(defn schliesse-runde-ab
  [spiel]
  (let [teiln (ergaenze-standard-werte-in-resultaten (teilnehmer spiel) (runde spiel))
        sieger (last (sort-by #(s/summe %) teiln))
        geber (naechster-geber (geber spiel) (count teiln))]
    (assoc spiel
           :runde (inc (runde spiel))
           :geber geber
           :teilnehmer teiln
           :sieger (when (>= (s/summe sieger) 5000) sieger)
           :spiel-beendet? (>= (s/summe sieger) 5000)
           )))

(defn registriere-sieger
  [historie sieger]  
  (if sieger (update historie (s/spieler-name sieger) inc) historie))

(defn eliminiere-sieger
  [historie sieger]  
  (if sieger (update historie (s/spieler-name sieger) dec) historie))

(defn korrigiere
  [spiel]   
  (-> spiel
      (update :runde dec)
      (assoc :spiel-beendet? false 
             :sieger nil
             :geber (vorheriger-geber (geber spiel) (count (teilnehmer spiel))))))

(defn resultat-in-runde
  [tln runde]
  (let [resultate (:resultate tln)]
    (if (>= runde (count resultate)) 0 (resultate runde))))

(defn fuehrende
  [monatshistorie]
  #_(println "fuehrende: " historie)
  (if (empty? monatshistorie)
    ""
    (key (apply max-key val monatshistorie))))

