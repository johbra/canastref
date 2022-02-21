(ns canastref.db
  (:require [cljs-time.core :as t]))

(def default-db
  {:hist-aus-datei nil
   :historie nil
   :monatshistorie nil
   :monatsbilanz {1 "Meike"}
   :monat (t/month (t/now))
   :loading false
   :spieler-namen nil
   :spiel nil
   })
