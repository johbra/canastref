(ns canastref.views
  (:require [re-frame.core :as rf]
            [reagent.core :as reagent]
            [canastref.subs]
            [canastref.events] 
            [canastref.spiel :as sp]
            [canastref.spieler :as s] 
            [re-com.core :refer [v-box h-box box gap button title alert-box
                                 scroller label input-text single-dropdown]]
            [cljs-time.local :as l]
            [cljs-time.core :as t]))
(def spielerbreite 85)

(def monatsnamen
  ["Jan" "Feb" "Mär" "Apr" "Mai" "Jun" "Jul" "Aug" "Sep" "Okt" "Nov" "Dez"])

(defn gewonnene-spiele
  [historie monatshistorie]
  (let [monat @(rf/subscribe [:monat])]
    [v-box :children
     [[gap :size "20px"]
      [box :child [:b "Gewonnene Spiele: "]]
      [h-box :gap "10px" :children
       [[box :child [:b (monatsnamen (dec monat))]]
        [v-box :children
         [[box :child (str (first (first monatshistorie)) ": "
                           (second (first monatshistorie)))]
          [box :child (str (first (second monatshistorie)) ": "
                           (second (second monatshistorie)))]]]]]
      [gap :size "10px"]
      [h-box :gap "10px" :children
       [[box :child [:b (t/year (l/local-now))]]
        [v-box :children
         [[box :child (str (first (first historie)) ": "
                           (second (first historie)))]
          [box :child (str (first (second historie)) ": "
                           (second (second historie)))]]]]]]]))

(defn monatsbilanz-tabelle
  [] 
  (let [monate @(rf/subscribe [:monatsbilanz])]
    [v-box :style {:font-size "12pt"} :children 
     [[gap :size "20px"]
      [h-box :style {:font-weight "bold"}
       :children [[box :size "70px" :child "Monat"]
                  [box :size "70px" :child "Sieger"]]]
      [v-box :children
       (into [] (for [m monate]
                  [h-box :height "20px"
                   :children [[box :size "70px" :child (monatsnamen (- (key m) 1))]
                              [box :size "70px" :child (val m)]]]))]]]))

(defn menue
  []
  (let [gespeichertes-spiel? @(rf/subscribe [:gespeichertes-spiel?])]
    [v-box :children
     [[button
       :class "btn-primary"
       :label "Neues Spiel"
       :on-click #(rf/dispatch [:neues-spiel])]
      [gap :size "10px"]
      [button
       :class "btn-primary"
       :label "Begonnenes Spiel fortsetzen"
       :on-click #(rf/dispatch [:welt])
       :disabled? (not gespeichertes-spiel?)]]]))

(defn fehlende-dateien-anzeigen
  [historie spieler-namen] 
  [v-box :children
   [(when (not spieler-namen)
      [alert-box :body "keine Spielernamen angegeben"])
    (when (not historie)
      [alert-box :body "Historie fehlt"])]])

(defn sum-strich
  []
  [:svg { :width spielerbreite}
   [:line {:x1 "20" :y1 "0" :x2 spielerbreite :y2 "0"
           :style {:stroke-width "3" :stroke "black"}}]])

(defn ergebnis-fuer
  [teilnehmer runde]
  (cons [box :width "50px" :justify :end :child (str runde)]
        (doall
         (mapv
          (fn [tln]
            ^{:key tln}
            [box :width (str spielerbreite "px") :justify :end
             :child (str (sp/resultat-in-runde tln (dec runde)))])
          teilnehmer))))

(defn zwischensumme 
  [spiel runde]
  [[h-box :height "3px" :gap "10px"
    :children (cons [box  :width "50px" :child ""]
                    (repeat (sp/anzahl-teilnehmer spiel) [sum-strich]))]
   [h-box :gap "10px" :children
    (cons [box :width "50px" :child "" ]
          (doall
           (mapv
            (fn [tln]
              ^{:key tln} 
              [box  :width (str spielerbreite "px") :justify :end
               :child (str (s/zwischen-summe
                            (s/resultate tln) runde))])
            (sp/teilnehmer spiel))))]])

(defn korrektur-knopf
  [runde alle-runden]
  (when (= runde alle-runden)
    [[button :label "korrigiere" :class "button"
      :on-click #(rf/dispatch [:korrigiere-ergebnis])]]))

(defn ergebnis-tabelle
  [spiel] 
  (doall (mapv
          (fn [r]
            [v-box :children
             (cons [h-box :gap "10px"
                    :children (concat (ergebnis-fuer (sp/teilnehmer spiel) r)
                                      (korrektur-knopf r (sp/runde spiel)))]
                   (when (> r 1) (zwischensumme spiel r)))])
          (range 1 (inc (sp/runde spiel))))))

(defn geber-anzeige
  [spiel namen] 
  (when (not (sp/spiel-beendet? spiel))
    [[gap :size "50px"]
     [h-box :gap "10px":children
      [[box :child (namen (sp/geber spiel))] " muss geben."]]]))

(defn kopfzeile
  [namen]
  [h-box :gap "10px" :children
   (cons [box :class "rTableHead" :width "50px" :child "Rde."]
         (doall (mapv (fn [s]
                        ^{:key s} 
                        [box :class "rTableHead" :justify :end
                         :width (str spielerbreite "px") :child s]) namen)))])

(defn ergebnis-eingabe
  [spiel]
  (let [runde (sp/runde spiel)
        alle-teilnehmer (sp/teilnehmer spiel)]
    (doall
     (mapv
      (fn [tln]
        ^{:key tln} 
        [input-text
         :model (str (if (get (s/resultate tln) runde)
                       (get (s/resultate tln) runde)
                       ""))
         :on-change #(let [v (js/parseInt %)
                           index (.indexOf alle-teilnehmer tln)]
                       (rf/dispatch [:resultat
                                     (s/neues-resultat tln v runde) index runde]))
         :change-on-blur? true
         :validation-regex  #"^[-+]?[0-9]*$"
         :width (str spielerbreite "px")
         :attr {:type "number"}
         :style {:padding-right "2px" :background-color "beige"}])
      alle-teilnehmer))))

(defn naechste-runde
  [namen spiel]
  (let [runde (sp/runde spiel)
        _ (when (not (sp/spiel-beendet? spiel)) 
            (rf/dispatch [:speichere-welt]))] 
    [h-box :gap "12px" :children
     (concat [[box :width "50px" :justify :end  :child (str (inc runde))]]
             (ergebnis-eingabe spiel)
             [[button :label "speichern" :class "button"
               :on-click #(rf/dispatch [:schliesse-runde-ab])]]
             (geber-anzeige spiel namen))]))

(defn geber-auswahl
  [namen]
  [h-box :gap "12px" :children
   [[label :label "Geber festegen!"]
    [single-dropdown  :width "6em" :style {:font-size "24px"}
     :choices (cons {:id "?" :label "?"}
                    (mapv (fn [n] {:id n :label n}) namen))
     :model "?"
     :on-change #(rf/dispatch [:geber (.indexOf namen %)])]]])

(defn spielablauf
  [namen historie monatshistorie monatsbilanz]
  (let [spiel @(rf/subscribe [:spiel])
        _ (when (sp/spiel-beendet? spiel) 
            (rf/dispatch [:spiel-beendet [historie monatshistorie monatsbilanz]]))]
    (when spiel
      (if (not (sp/geber-festgelegt? spiel))
        (geber-auswahl (vec namen))
        [v-box :children
         [[gap :size "35px"]
          (kopfzeile namen)
          [scroller
           :v-scroll :auto
           :height  "700px"
           :child
           [v-box :width "800px" :children
            (conj (ergebnis-tabelle spiel)
                  (if (not (sp/spiel-beendet? spiel))
                    (naechste-runde namen spiel)
                    [box :class "gewinner"
                     :child (str "Gewonnen hat: "
                                 (s/spieler-name (sp/sieger spiel)))]))]]]]))))

(defn main-panel []
  (let [historie       @(rf/subscribe [:historie])
        monatshistorie @(rf/subscribe [:monatshistorie])
        monatsbilanz   @(rf/subscribe [:monatsbilanz])
        spieler-namen  @(rf/subscribe [:spieler-namen])
        ] 
    (if (and historie spieler-namen)
      [h-box :children
       [[v-box :children
         [[title :label "Canasta" :level :level1]
          [gap :size "10px"]
          [v-box :children
           [[box :child [menue]]           
            (gewonnene-spiele historie monatshistorie)
            (monatsbilanz-tabelle)]]]]
        [spielablauf spieler-namen historie monatshistorie monatsbilanz]]]
      (fehlende-dateien-anzeigen historie spieler-namen))))


