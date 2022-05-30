(ns canastref.db
  (:require [cljs-time.core :as t]
            [cljs-time.local :as l]))

(def default-db
  {:hist-aus-datei nil
   :historie nil
   :monatshistorie nil
   :monatsbilanz {1 "Meike"}
   :monat (t/month (l/local-now))
   :loading false
   :spieler-namen nil
   :spiel nil
   })
