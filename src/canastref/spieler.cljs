(ns canastref.spieler)

(defn ->Spieler [name]
  {:name name
   :resultate []
   :summe 0 })

(defn resultate
  [sp]
  (:resultate sp))

(defn summe
  [sp]
  (:summe sp))

(defn spieler-name
  [sp]
  (:name sp))

(defn zwischen-summe
  [resultate runde]
  (reduce + (take runde resultate)))

(defn neues-resultat
  [sp v runde]
  (assoc-in sp [:resultate runde] v))

(defn null-resultat
  [runde sp]
  (assoc-in sp [:resultate runde] 0))
