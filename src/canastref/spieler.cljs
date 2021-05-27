(ns canastref.spieler)

(defn ->Spieler []
  {:resultate [] :summe 0 })

(defn resultate
  [sp]
  (:resultate sp))
(defn zwischen-summe
  [resultate runde]
  (reduce + (take runde resultate)))






