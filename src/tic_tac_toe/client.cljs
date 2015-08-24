(ns tic-tac-toe.client
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(defonce app-state
  (atom
    {:board [{:square-state :not-chosen :square-id :square-1 :selected? false}
             {:square-state :not-chosen :square-id :square-2 :selected? false}
             {:square-state :not-chosen :square-id :square-3 :selected? false}
             {:square-state :not-chosen :square-id :square-4 :selected? false}
             {:square-state :not-chosen :square-id :square-5 :selected? false}
             {:square-state :not-chosen :square-id :square-6 :selected? false}
             {:square-state :not-chosen :square-id :square-7 :selected? false}
             {:square-state :not-chosen :square-id :square-8 :selected? false}
             {:square-state :not-chosen :square-id :square-9 :selected? false}]
    :number-to-match 3
    :game-won? false
    :game-tie? false
    :game-winner nil
    :round-number 1
    :players {
              :current-player :player-a
              :player-a {:name "Pirates"
                         :wins 0
                         :square {:square-state :player-a :square-id :player-a}}
              :player-b {:name "Ninjas"
                         :wins 0
                         :square {:square-state :player-b :square-id :player-b}}
              }
    }))

(defn reset-board [data] 
  (om/transact! data (fn [state] (assoc state :board [{:square-state :not-chosen :square-id :square-1 :selected? false}
             {:square-state :not-chosen :square-id :square-2 :selected? false}
             {:square-state :not-chosen :square-id :square-3 :selected? false}
             {:square-state :not-chosen :square-id :square-4 :selected? false}
             {:square-state :not-chosen :square-id :square-5 :selected? false}
             {:square-state :not-chosen :square-id :square-6 :selected? false}
             {:square-state :not-chosen :square-id :square-7 :selected? false}
             {:square-state :not-chosen :square-id :square-8 :selected? false}
             {:square-state :not-chosen :square-id :square-9 :selected? false}]
    :number-to-match 3
    :game-won? false
    :game-tie? false
    :game-winner nil
    :round-number 1
    
    ))))



(defn cell [cell]
  (reify
    om/IRenderState
    (render-state [this data]
      (dom/div #js {:className "cell"}
        (dom/div #js {:id (str (:square-id cell)) 
                      :className (str "tile "
                                 (name (:square-state cell))
                                 (when (:selected? cell) " selected"))

                      :onClick (if-not (:selected? cell) (fn [e] (put! (:game-board-click data) (str (:square-id cell)))) nil)
                      })))))

(defn line [cells]
  (reify
    om/IRenderState
    (render-state [this data]
      (apply dom/div #js {:className "line"}
        (map (fn [tile] (om/build cell tile {:init-state data})) cells)))))

(comment "ToDo fix 'partition 3' so it uses number-to-match")
(defn board [cells]
  (reify
    om/IRenderState
    (render-state [this data]
      (apply dom/div #js {:className "board clearfix"}
        (map (fn [row] (om/build line row {:init-state data})) (partition 3 cells)))))) 

(defn players [players]
  (reify
    om/IRenderState
    (render-state [this data]
      (dom/div #js {:className "players" :id "players-section"}
        (dom/div #js {:className "current-player"} (str "Current Player: " (get-in players [(:current-player players) :name])))
        (dom/div #js {:className "player"} (str (get-in players [:player-a :name]) ": " (get-in players [:player-a :wins]) " wins"))
        (dom/div #js {:className "player-square"} (om/build cell (get-in players [:player-a :square]) {:init-state data}))
        (dom/div #js {:className "player"} (str (get-in players [:player-b :name])) ": " (get-in players [:player-b :wins]) " wins")
        (dom/div #js {:className "player-square"} (om/build cell (get-in players [:player-b :square]) {:init-state data}))
        (dom/div #js {:className "button-wrapper"}
          (dom/button #js {:className "game-reset"
                        :onClick (fn [e] (put! (:game-board-click data) "game-reset"))}
                        "Reset Game")) 
        ))))


(defn new-game-match? [click-id] (not (nil? (re-matches #"game-reset" click-id))))
(defn player-match? [click-id] (not (nil? (re-matches #":player-.*" click-id))))
(defn square-match? [click-id] (not (nil? (re-matches #":square-.*" click-id))))
(defn square-index [click-id] (dec (int (re-find #"\d" click-id))))
(defn square-selected? [data click-id] (get-in data [:board (square-index click-id) :selected?]))

(defn new-game [] )
(defn set-who-plays-first [] )

(defn process-square-selected [data click-id] 
  (let [current-player (get-in data [:players :current-player])
        list-index (square-index click-id)]
      (om/transact! data [:board list-index] (fn [state] (assoc state :square-state current-player :selected? true)))))

(defn get-line [data indexes]
  (for [indx indexes] (get-in data [:board indx :square-state])))

(comment "ToDo update this to work on more generic number set.")
(defn diagonal-check-for-win [data] 
  (let [current-player (get-in data [:players :current-player])
        diag-one (apply = current-player (get-line data [0 4 8]))
        diag-two (apply = current-player (get-line data [2 4 6]))]
    (or diag-one diag-two)))

(defn row-check-for-win [data] 
  (let [current-player (get-in data [:players :current-player])
        row-one (apply = current-player (get-line data [0 1 2]))
        row-two (apply = current-player (get-line data [3 4 5]))
        row-three (apply = current-player (get-line data [6 7 8]))]
    (or row-one row-two row-three)))

(defn column-check-for-win [data] 
  (let [current-player (get-in data [:players :current-player])
        col-one (apply = current-player (get-line data [0 3 6]))
        col-two (apply = current-player (get-line data [1 4 7]))
        col-three (apply = current-player (get-line data [2 5 8]))]
    (or col-one col-two col-three)))

(defn win? [data] 
  (or
    (diagonal-check-for-win data)
    (row-check-for-win data)
    (column-check-for-win data)
  ))

(defn tie? [data]
  (comment "logic note - used the square of number-to-match assuming for scaling that the number of square choices are equal to the square of the number required for a match")
  (and 
    (= (* (:number-to-match data) (:number-to-match data)) (:round-number data))
    (not(:game-won? data))))

(defn increment-round-number [data]
  (let [new-round-number (inc(:round-number data))]
  (om/transact! data (fn [state] (assoc state :round-number new-round-number)))))

(defn toggle-current-player [data]
  (let [new-current-player (if (= :player-a (get-in data [:players :current-player])) :player-b :player-a)]
  (om/transact! data [:players] (fn [state] (assoc state :current-player new-current-player)))
  ))

(defn set-up-next-round [data]
  (increment-round-number data)
  (toggle-current-player data)
)



(defn board-clicked [data click-id]
  (when (new-game-match? click-id)
    (reset-board data))
  (when (player-match? click-id)
    (.log js/console (str "Player Square Clicked " click-id))) ;ToDo Something Fancier (just not sure what)
  (if-not (:game-won? data)
    (if (square-match? click-id)
      (if-not (square-selected? data click-id) 
        (do
          (let [new-data @(process-square-selected data click-id)]
          (if (win? new-data)
            (do
              (let [current-player (get-in data [:players :current-player])]
              (om/transact! data (fn [state] (assoc state :game-won? true)))
              (om/transact! data (fn [state] (assoc state :game-winner current-player)))
              (om/transact! data [:players (get-in data [:players :current-player])] (fn [state] (assoc state :wins (inc (get-in data [:players current-player :wins])))))))
          (if (tie? new-data)
            (om/transact! data (fn [state] (assoc state :game-tie? true)))
            (set-up-next-round data)))
        ))))))

(defn set-board-listener!
  [{:keys [game-board-click]} data]
  (go 
    (let [click-id (<! game-board-click)]
      (board-clicked data click-id))))

(defn game [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:game-board-click (chan)})
    om/IRenderState
    (render-state [this channel-map]
      (set-board-listener! channel-map data)
      (dom/div #js {:className "game"} 
         (dom/div #js {:className "title"} "Pirates vs Ninjas Tic Tac Toe")
         (or 
           (when (:game-tie? data)
             (dom/div #js {:className "tie"} "Pirates vs Ninjas Tie!"))
           (when (:game-won? data)
             (dom/div #js {:className "win"} (str (get-in data [:players (:game-winner data) :name]) " Win!")))
           (dom/div #js {:className "round-number"} (str "Round Number: " (:round-number data))))
         (om/build players (:players data) {:init-state channel-map})
         (om/build board (:board data) {:init-state channel-map})))))

(om/root game app-state
  {:target (. js/document (getElementById "main"))})

