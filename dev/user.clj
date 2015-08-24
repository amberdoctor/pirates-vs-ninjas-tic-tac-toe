(ns user
  (:require [reloaded.repl :refer [system reset stop]]
            [tic-tac-toe.system]))

(reloaded.repl/set-init! #'tic-tac-toe.system/create-system)
