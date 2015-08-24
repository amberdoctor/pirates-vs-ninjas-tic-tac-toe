(ns tic-tac-toe.web
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [resources]]))

(defn index [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "Hello from Pirates and Ninja Tic Tac Toe.  Head to /game.html to play." })

(defroutes app
  (GET "/" [] index)
  (resources "/"))
