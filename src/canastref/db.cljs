(ns canastref.db
  (:require [canastref.spiel :as sp]))

(def default-db
  {:spiel-typ ""
   :historie {}
   :loading false
   :spieler-namen []
   :spiel nil
   })

#_(def testspiel
    {:teilnehmer
     {"Meike" {:resultate [1 2 ],
               :summe 3,
               :gewonnene-spiele 0}
      "Hannes" {:resultate [10 20 ],
                :summe 30,
                :gewonnene-spiele 0}}
     :runde 2,
     :spiel-beendet? false,
     :sieger nil,
     :geber nil})
