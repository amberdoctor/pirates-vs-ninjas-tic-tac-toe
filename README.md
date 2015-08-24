# Tic Tac Toe

Pirates vs Ninjas Tic Tac Toe


How to Start:
In the terminal, navigate to the tic_tac_toe_game base folder.
Enter the below commands into the terminal:
$ lein cljsbuild once
$ lein run
Wait for the server start message. Should look something like: "Started server on localhost:9009"
Open Chrome webbrowser
Enter the url: "localhost:9009/game.html"  (port number may change: use the port from the start message)






Developer Notes:

Running with Figwheel:
In first terminal tab, navigate to the tic_tac_toe_game base folder. Enter the below command.
$ lein run
Wait for the server start message. Should look something like: "Started server on localhost:9009"
In second terminal tab, navigate to the tic_tac_toe_game base folder. Enter the below command.
$ lein do clean, figwheel;
Wait for the prompt to appear.  Should look something like: "cljs.user=>"
Open Chrome webbrowser
Enter the url: "localhost:9009/game.html"  (port number may change: use the port from the start message)

Browser Compatibility:
This application's testing has been limited (due to time constraints) to Chrome version 43.0.2357.130 (64-bit). 

Warning Message:
There is currently a warning from the event handler.  I believe this warning is part of the Om framework wrapper around React being out of sync.  Warning: "Warning: Returning `false` from an event handler is deprecated and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(), as appropriate."