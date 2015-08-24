// Compiled by ClojureScript 0.0-3308 {}
goog.provide('tic_tac_toe.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tic_tac_toe.client.app_state !== 'undefined'){
} else {
tic_tac_toe.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-1","square-1",-1302973764),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-2","square-2",-1503323014),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-3","square-3",1224030131),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-4","square-4",848511095),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-5","square-5",128777165),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-6","square-6",-1547182268),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-7","square-7",713452150),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-8","square-8",1200515181),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-9","square-9",770953752),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null)], null),new cljs.core.Keyword(null,"number-to-match","number-to-match",813352071),(3),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),false,new cljs.core.Keyword(null,"game-tie?","game-tie?",-998596061),false,new cljs.core.Keyword(null,"game-winner","game-winner",1230884555),null,new cljs.core.Keyword(null,"round-number","round-number",-479882425),(1),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-player","current-player",-970625153),new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Pirates",new cljs.core.Keyword(null,"wins","wins",1850756412),(0),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"player-a","player-a",-580880926)], null)], null),new cljs.core.Keyword(null,"player-b","player-b",-1226474681),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Ninjas",new cljs.core.Keyword(null,"wins","wins",1850756412),(0),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"player-b","player-b",-1226474681),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"player-b","player-b",-1226474681)], null)], null)], null)], null));
}
tic_tac_toe.client.reset_board = (function tic_tac_toe$client$reset_board(data){
return om.core.transact_BANG_.call(null,data,(function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-1","square-1",-1302973764),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-2","square-2",-1503323014),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-3","square-3",1224030131),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-4","square-4",848511095),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-5","square-5",128777165),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-6","square-6",-1547182268),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-7","square-7",713452150),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-8","square-8",1200515181),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"square-state","square-state",159110272),new cljs.core.Keyword(null,"not-chosen","not-chosen",1828531046),new cljs.core.Keyword(null,"square-id","square-id",967597168),new cljs.core.Keyword(null,"square-9","square-9",770953752),new cljs.core.Keyword(null,"selected?","selected?",-742502788),false], null)], null),new cljs.core.Keyword(null,"number-to-match","number-to-match",813352071),(3),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),false,new cljs.core.Keyword(null,"game-tie?","game-tie?",-998596061),false,new cljs.core.Keyword(null,"game-winner","game-winner",1230884555),null,new cljs.core.Keyword(null,"round-number","round-number",-479882425),(1));
}));
});
tic_tac_toe.client.cell = (function tic_tac_toe$client$cell(cell__$1){
if(typeof tic_tac_toe.client.t24822 !== 'undefined'){
} else {

/**
* @constructor
*/
tic_tac_toe.client.t24822 = (function (cell,meta24823){
this.cell = cell;
this.meta24823 = meta24823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tic_tac_toe.client.t24822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24824,meta24823__$1){
var self__ = this;
var _24824__$1 = this;
return (new tic_tac_toe.client.t24822(self__.cell,meta24823__$1));
});

tic_tac_toe.client.t24822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24824){
var self__ = this;
var _24824__$1 = this;
return self__.meta24823;
});

tic_tac_toe.client.t24822.prototype.om$core$IRenderState$ = true;

tic_tac_toe.client.t24822.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "cell"},React.DOM.div({"id": [cljs.core.str(new cljs.core.Keyword(null,"square-id","square-id",967597168).cljs$core$IFn$_invoke$arity$1(self__.cell))].join(''), "className": [cljs.core.str("tile "),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"square-state","square-state",159110272).cljs$core$IFn$_invoke$arity$1(self__.cell))),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(self__.cell))?" selected":null))].join(''), "onClick": ((cljs.core.not.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(self__.cell)))?((function (this$__$1){
return (function (e){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"game-board-click","game-board-click",16382726).cljs$core$IFn$_invoke$arity$1(data),[cljs.core.str(new cljs.core.Keyword(null,"square-id","square-id",967597168).cljs$core$IFn$_invoke$arity$1(self__.cell))].join(''));
});})(this$__$1))
:null)}));
});

tic_tac_toe.client.t24822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta24823","meta24823",-710460545,null)], null);
});

tic_tac_toe.client.t24822.cljs$lang$type = true;

tic_tac_toe.client.t24822.cljs$lang$ctorStr = "tic-tac-toe.client/t24822";

tic_tac_toe.client.t24822.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"tic-tac-toe.client/t24822");
});

tic_tac_toe.client.__GT_t24822 = (function tic_tac_toe$client$cell_$___GT_t24822(cell__$2,meta24823){
return (new tic_tac_toe.client.t24822(cell__$2,meta24823));
});

}

return (new tic_tac_toe.client.t24822(cell__$1,cljs.core.PersistentArrayMap.EMPTY));
});
tic_tac_toe.client.line = (function tic_tac_toe$client$line(cells){
if(typeof tic_tac_toe.client.t24828 !== 'undefined'){
} else {

/**
* @constructor
*/
tic_tac_toe.client.t24828 = (function (line,cells,meta24829){
this.line = line;
this.cells = cells;
this.meta24829 = meta24829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tic_tac_toe.client.t24828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24830,meta24829__$1){
var self__ = this;
var _24830__$1 = this;
return (new tic_tac_toe.client.t24828(self__.line,self__.cells,meta24829__$1));
});

tic_tac_toe.client.t24828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24830){
var self__ = this;
var _24830__$1 = this;
return self__.meta24829;
});

tic_tac_toe.client.t24828.prototype.om$core$IRenderState$ = true;

tic_tac_toe.client.t24828.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "line"},cljs.core.map.call(null,((function (this$__$1){
return (function (tile){
return om.core.build.call(null,tic_tac_toe.client.cell,tile,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),data], null));
});})(this$__$1))
,self__.cells));
});

tic_tac_toe.client.t24828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null),new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"meta24829","meta24829",-28037363,null)], null);
});

tic_tac_toe.client.t24828.cljs$lang$type = true;

tic_tac_toe.client.t24828.cljs$lang$ctorStr = "tic-tac-toe.client/t24828";

tic_tac_toe.client.t24828.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"tic-tac-toe.client/t24828");
});

tic_tac_toe.client.__GT_t24828 = (function tic_tac_toe$client$line_$___GT_t24828(line__$1,cells__$1,meta24829){
return (new tic_tac_toe.client.t24828(line__$1,cells__$1,meta24829));
});

}

return (new tic_tac_toe.client.t24828(tic_tac_toe$client$line,cells,cljs.core.PersistentArrayMap.EMPTY));
});
tic_tac_toe.client.board = (function tic_tac_toe$client$board(cells){
if(typeof tic_tac_toe.client.t24834 !== 'undefined'){
} else {

/**
* @constructor
*/
tic_tac_toe.client.t24834 = (function (board,cells,meta24835){
this.board = board;
this.cells = cells;
this.meta24835 = meta24835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tic_tac_toe.client.t24834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24836,meta24835__$1){
var self__ = this;
var _24836__$1 = this;
return (new tic_tac_toe.client.t24834(self__.board,self__.cells,meta24835__$1));
});

tic_tac_toe.client.t24834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24836){
var self__ = this;
var _24836__$1 = this;
return self__.meta24835;
});

tic_tac_toe.client.t24834.prototype.om$core$IRenderState$ = true;

tic_tac_toe.client.t24834.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "board clearfix"},cljs.core.map.call(null,((function (this$__$1){
return (function (row){
return om.core.build.call(null,tic_tac_toe.client.line,row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),data], null));
});})(this$__$1))
,cljs.core.partition.call(null,(3),self__.cells)));
});

tic_tac_toe.client.t24834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"meta24835","meta24835",879724627,null)], null);
});

tic_tac_toe.client.t24834.cljs$lang$type = true;

tic_tac_toe.client.t24834.cljs$lang$ctorStr = "tic-tac-toe.client/t24834";

tic_tac_toe.client.t24834.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"tic-tac-toe.client/t24834");
});

tic_tac_toe.client.__GT_t24834 = (function tic_tac_toe$client$board_$___GT_t24834(board__$1,cells__$1,meta24835){
return (new tic_tac_toe.client.t24834(board__$1,cells__$1,meta24835));
});

}

return (new tic_tac_toe.client.t24834(tic_tac_toe$client$board,cells,cljs.core.PersistentArrayMap.EMPTY));
});
tic_tac_toe.client.players = (function tic_tac_toe$client$players(players__$1){
if(typeof tic_tac_toe.client.t24840 !== 'undefined'){
} else {

/**
* @constructor
*/
tic_tac_toe.client.t24840 = (function (players,meta24841){
this.players = players;
this.meta24841 = meta24841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tic_tac_toe.client.t24840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24842,meta24841__$1){
var self__ = this;
var _24842__$1 = this;
return (new tic_tac_toe.client.t24840(self__.players,meta24841__$1));
});

tic_tac_toe.client.t24840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24842){
var self__ = this;
var _24842__$1 = this;
return self__.meta24841;
});

tic_tac_toe.client.t24840.prototype.om$core$IRenderState$ = true;

tic_tac_toe.client.t24840.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,data){
var self__ = this;
var this$__$1 = this;
return React.DOM.div({"className": "players", "id": "players-section"},React.DOM.div({"className": "current-player"},[cljs.core.str("Current Player: "),cljs.core.str(cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-player","current-player",-970625153).cljs$core$IFn$_invoke$arity$1(self__.players),new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join('')),React.DOM.div({"className": "player"},[cljs.core.str(cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.Keyword(null,"name","name",1843675177)], null))),cljs.core.str(": "),cljs.core.str(cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.Keyword(null,"wins","wins",1850756412)], null))),cljs.core.str(" wins")].join('')),React.DOM.div({"className": "player-square"},om.core.build.call(null,tic_tac_toe.client.cell,cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-a","player-a",-580880926),new cljs.core.Keyword(null,"square","square",812434677)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),data], null))),React.DOM.div({"className": "player"},[cljs.core.str(cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-b","player-b",-1226474681),new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join(''),": ",cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-b","player-b",-1226474681),new cljs.core.Keyword(null,"wins","wins",1850756412)], null))," wins"),React.DOM.div({"className": "player-square"},om.core.build.call(null,tic_tac_toe.client.cell,cljs.core.get_in.call(null,self__.players,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-b","player-b",-1226474681),new cljs.core.Keyword(null,"square","square",812434677)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),data], null))),React.DOM.div({"className": "button-wrapper"},React.DOM.button({"className": "game-reset", "onClick": ((function (this$__$1){
return (function (e){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"game-board-click","game-board-click",16382726).cljs$core$IFn$_invoke$arity$1(data),"game-reset");
});})(this$__$1))
},"Reset Game")));
});

tic_tac_toe.client.t24840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"players","players",278976958,null),new cljs.core.Symbol(null,"meta24841","meta24841",911305008,null)], null);
});

tic_tac_toe.client.t24840.cljs$lang$type = true;

tic_tac_toe.client.t24840.cljs$lang$ctorStr = "tic-tac-toe.client/t24840";

tic_tac_toe.client.t24840.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"tic-tac-toe.client/t24840");
});

tic_tac_toe.client.__GT_t24840 = (function tic_tac_toe$client$players_$___GT_t24840(players__$2,meta24841){
return (new tic_tac_toe.client.t24840(players__$2,meta24841));
});

}

return (new tic_tac_toe.client.t24840(players__$1,cljs.core.PersistentArrayMap.EMPTY));
});
tic_tac_toe.client.new_game_match_QMARK_ = (function tic_tac_toe$client$new_game_match_QMARK_(click_id){
return !((cljs.core.re_matches.call(null,/game-reset/,click_id) == null));
});
tic_tac_toe.client.player_match_QMARK_ = (function tic_tac_toe$client$player_match_QMARK_(click_id){
return !((cljs.core.re_matches.call(null,/:player-.*/,click_id) == null));
});
tic_tac_toe.client.square_match_QMARK_ = (function tic_tac_toe$client$square_match_QMARK_(click_id){
return !((cljs.core.re_matches.call(null,/:square-.*/,click_id) == null));
});
tic_tac_toe.client.square_index = (function tic_tac_toe$client$square_index(click_id){
return ((cljs.core.re_find.call(null,/\d/,click_id) | (0)) - (1));
});
tic_tac_toe.client.square_selected_QMARK_ = (function tic_tac_toe$client$square_selected_QMARK_(data,click_id){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.client.square_index.call(null,click_id),new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null));
});
tic_tac_toe.client.new_game = (function tic_tac_toe$client$new_game(){
return null;
});
tic_tac_toe.client.set_who_plays_first = (function tic_tac_toe$client$set_who_plays_first(){
return null;
});
tic_tac_toe.client.process_square_selected = (function tic_tac_toe$client$process_square_selected(data,click_id){
var current_player = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null));
var list_index = tic_tac_toe.client.square_index.call(null,click_id);
return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),list_index], null),((function (current_player,list_index){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"square-state","square-state",159110272),current_player,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
});})(current_player,list_index))
);
});
tic_tac_toe.client.get_line = (function tic_tac_toe$client$get_line(data,indexes){
var iter__17663__auto__ = (function tic_tac_toe$client$get_line_$_iter__24847(s__24848){
return (new cljs.core.LazySeq(null,(function (){
var s__24848__$1 = s__24848;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24848__$1);
if(temp__4425__auto__){
var s__24848__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24848__$2)){
var c__17661__auto__ = cljs.core.chunk_first.call(null,s__24848__$2);
var size__17662__auto__ = cljs.core.count.call(null,c__17661__auto__);
var b__24850 = cljs.core.chunk_buffer.call(null,size__17662__auto__);
if((function (){var i__24849 = (0);
while(true){
if((i__24849 < size__17662__auto__)){
var indx = cljs.core._nth.call(null,c__17661__auto__,i__24849);
cljs.core.chunk_append.call(null,b__24850,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),indx,new cljs.core.Keyword(null,"square-state","square-state",159110272)], null)));

var G__24851 = (i__24849 + (1));
i__24849 = G__24851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24850),tic_tac_toe$client$get_line_$_iter__24847.call(null,cljs.core.chunk_rest.call(null,s__24848__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24850),null);
}
} else {
var indx = cljs.core.first.call(null,s__24848__$2);
return cljs.core.cons.call(null,cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),indx,new cljs.core.Keyword(null,"square-state","square-state",159110272)], null)),tic_tac_toe$client$get_line_$_iter__24847.call(null,cljs.core.rest.call(null,s__24848__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17663__auto__.call(null,indexes);
});
tic_tac_toe.client.diagonal_check_for_win = (function tic_tac_toe$client$diagonal_check_for_win(data){
var current_player = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null));
var diag_one = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null)));
var diag_two = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)));
var or__16909__auto__ = diag_one;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return diag_two;
}
});
tic_tac_toe.client.row_check_for_win = (function tic_tac_toe$client$row_check_for_win(data){
var current_player = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null));
var row_one = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null)));
var row_two = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null)));
var row_three = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null)));
var or__16909__auto__ = row_one;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = row_two;
if(cljs.core.truth_(or__16909__auto____$1)){
return or__16909__auto____$1;
} else {
return row_three;
}
}
});
tic_tac_toe.client.column_check_for_win = (function tic_tac_toe$client$column_check_for_win(data){
var current_player = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null));
var col_one = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null)));
var col_two = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null)));
var col_three = cljs.core.apply.call(null,cljs.core._EQ_,current_player,tic_tac_toe.client.get_line.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null)));
var or__16909__auto__ = col_one;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = col_two;
if(cljs.core.truth_(or__16909__auto____$1)){
return or__16909__auto____$1;
} else {
return col_three;
}
}
});
tic_tac_toe.client.win_QMARK_ = (function tic_tac_toe$client$win_QMARK_(data){
var or__16909__auto__ = tic_tac_toe.client.diagonal_check_for_win.call(null,data);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = tic_tac_toe.client.row_check_for_win.call(null,data);
if(cljs.core.truth_(or__16909__auto____$1)){
return or__16909__auto____$1;
} else {
return tic_tac_toe.client.column_check_for_win.call(null,data);
}
}
});
tic_tac_toe.client.tie_QMARK_ = (function tic_tac_toe$client$tie_QMARK_(data){

return (cljs.core._EQ_.call(null,(new cljs.core.Keyword(null,"number-to-match","number-to-match",813352071).cljs$core$IFn$_invoke$arity$1(data) * new cljs.core.Keyword(null,"number-to-match","number-to-match",813352071).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"round-number","round-number",-479882425).cljs$core$IFn$_invoke$arity$1(data))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835).cljs$core$IFn$_invoke$arity$1(data)));
});
tic_tac_toe.client.increment_round_number = (function tic_tac_toe$client$increment_round_number(data){
var new_round_number = (new cljs.core.Keyword(null,"round-number","round-number",-479882425).cljs$core$IFn$_invoke$arity$1(data) + (1));
return om.core.transact_BANG_.call(null,data,((function (new_round_number){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"round-number","round-number",-479882425),new_round_number);
});})(new_round_number))
);
});
tic_tac_toe.client.toggle_current_player = (function tic_tac_toe$client$toggle_current_player(data){
var new_current_player = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"player-a","player-a",-580880926),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null))))?new cljs.core.Keyword(null,"player-b","player-b",-1226474681):new cljs.core.Keyword(null,"player-a","player-a",-580880926));
return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569)], null),((function (new_current_player){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-player","current-player",-970625153),new_current_player);
});})(new_current_player))
);
});
tic_tac_toe.client.set_up_next_round = (function tic_tac_toe$client$set_up_next_round(data){
tic_tac_toe.client.increment_round_number.call(null,data);

return tic_tac_toe.client.toggle_current_player.call(null,data);
});
tic_tac_toe.client.board_clicked = (function tic_tac_toe$client$board_clicked(data,click_id){
if(cljs.core.truth_(tic_tac_toe.client.new_game_match_QMARK_.call(null,click_id))){
tic_tac_toe.client.reset_board.call(null,data);
} else {
}

if(cljs.core.truth_(tic_tac_toe.client.player_match_QMARK_.call(null,click_id))){
console.log([cljs.core.str("Player Square Clicked "),cljs.core.str(click_id)].join(''));
} else {
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835).cljs$core$IFn$_invoke$arity$1(data))){
if(cljs.core.truth_(tic_tac_toe.client.square_match_QMARK_.call(null,click_id))){
if(cljs.core.not.call(null,tic_tac_toe.client.square_selected_QMARK_.call(null,data,click_id))){
var new_data = cljs.core.deref.call(null,tic_tac_toe.client.process_square_selected.call(null,data,click_id));
if(cljs.core.truth_(tic_tac_toe.client.win_QMARK_.call(null,new_data))){
var current_player = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null));
om.core.transact_BANG_.call(null,data,((function (current_player,new_data){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),true);
});})(current_player,new_data))
);

om.core.transact_BANG_.call(null,data,((function (current_player,new_data){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-winner","game-winner",1230884555),current_player);
});})(current_player,new_data))
);

return om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"current-player","current-player",-970625153)], null))], null),((function (current_player,new_data){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"wins","wins",1850756412),(cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),current_player,new cljs.core.Keyword(null,"wins","wins",1850756412)], null)) + (1)));
});})(current_player,new_data))
);
} else {
if(cljs.core.truth_(tic_tac_toe.client.tie_QMARK_.call(null,new_data))){
return om.core.transact_BANG_.call(null,data,((function (new_data){
return (function (state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-tie?","game-tie?",-998596061),true);
});})(new_data))
);
} else {
return tic_tac_toe.client.set_up_next_round.call(null,data);
}
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
tic_tac_toe.client.set_board_listener_BANG_ = (function tic_tac_toe$client$set_board_listener_BANG_(p__24852,data){
var map__24867 = p__24852;
var map__24867__$1 = ((cljs.core.seq_QMARK_.call(null,map__24867))?cljs.core.apply.call(null,cljs.core.hash_map,map__24867):map__24867);
var game_board_click = cljs.core.get.call(null,map__24867__$1,new cljs.core.Keyword(null,"game-board-click","game-board-click",16382726));
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__,map__24867,map__24867__$1,game_board_click){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__,map__24867,map__24867__$1,game_board_click){
return (function (state_24872){
var state_val_24873 = (state_24872[(1)]);
if((state_val_24873 === (1))){
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24872__$1,(2),game_board_click);
} else {
if((state_val_24873 === (2))){
var inst_24869 = (state_24872[(2)]);
var inst_24870 = tic_tac_toe.client.board_clicked.call(null,data,inst_24869);
var state_24872__$1 = state_24872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24872__$1,inst_24870);
} else {
return null;
}
}
});})(c__20800__auto__,map__24867,map__24867__$1,game_board_click))
;
return ((function (switch__20738__auto__,c__20800__auto__,map__24867,map__24867__$1,game_board_click){
return (function() {
var tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__ = null;
var tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____0 = (function (){
var statearr_24877 = [null,null,null,null,null,null,null];
(statearr_24877[(0)] = tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__);

(statearr_24877[(1)] = (1));

return statearr_24877;
});
var tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____1 = (function (state_24872){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_24872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e24878){if((e24878 instanceof Object)){
var ex__20742__auto__ = e24878;
var statearr_24879_24881 = state_24872;
(statearr_24879_24881[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24882 = state_24872;
state_24872 = G__24882;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__ = function(state_24872){
switch(arguments.length){
case 0:
return tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____0.call(this);
case 1:
return tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____1.call(this,state_24872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____0;
tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto____1;
return tic_tac_toe$client$set_board_listener_BANG__$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__,map__24867,map__24867__$1,game_board_click))
})();
var state__20802__auto__ = (function (){var statearr_24880 = f__20801__auto__.call(null);
(statearr_24880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_24880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__,map__24867,map__24867__$1,game_board_click))
);

return c__20800__auto__;
});
tic_tac_toe.client.game = (function tic_tac_toe$client$game(data,owner){
if(typeof tic_tac_toe.client.t24886 !== 'undefined'){
} else {

/**
* @constructor
*/
tic_tac_toe.client.t24886 = (function (game,data,owner,meta24887){
this.game = game;
this.data = data;
this.owner = owner;
this.meta24887 = meta24887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tic_tac_toe.client.t24886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24888,meta24887__$1){
var self__ = this;
var _24888__$1 = this;
return (new tic_tac_toe.client.t24886(self__.game,self__.data,self__.owner,meta24887__$1));
});

tic_tac_toe.client.t24886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24888){
var self__ = this;
var _24888__$1 = this;
return self__.meta24887;
});

tic_tac_toe.client.t24886.prototype.om$core$IInitState$ = true;

tic_tac_toe.client.t24886.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-board-click","game-board-click",16382726),cljs.core.async.chan.call(null)], null);
});

tic_tac_toe.client.t24886.prototype.om$core$IRenderState$ = true;

tic_tac_toe.client.t24886.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,channel_map){
var self__ = this;
var this$__$1 = this;
tic_tac_toe.client.set_board_listener_BANG_.call(null,channel_map,self__.data);

return React.DOM.div({"className": "game"},React.DOM.div({"className": "title"},"Pirates vs Ninjas Tic Tac Toe"),(function (){var or__16909__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"game-tie?","game-tie?",-998596061).cljs$core$IFn$_invoke$arity$1(self__.data))?React.DOM.div({"className": "tie"},"Pirates vs Ninjas Tie!"):null);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835).cljs$core$IFn$_invoke$arity$1(self__.data))?React.DOM.div({"className": "win"},[cljs.core.str(cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.Keyword(null,"game-winner","game-winner",1230884555).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.Keyword(null,"name","name",1843675177)], null))),cljs.core.str(" Win!")].join('')):null);
if(cljs.core.truth_(or__16909__auto____$1)){
return or__16909__auto____$1;
} else {
return React.DOM.div({"className": "round-number"},[cljs.core.str("Round Number: "),cljs.core.str(new cljs.core.Keyword(null,"round-number","round-number",-479882425).cljs$core$IFn$_invoke$arity$1(self__.data))].join(''));
}
}
})(),om.core.build.call(null,tic_tac_toe.client.players,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),channel_map], null)),om.core.build.call(null,tic_tac_toe.client.board,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),channel_map], null)));
});

tic_tac_toe.client.t24886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta24887","meta24887",-434950392,null)], null);
});

tic_tac_toe.client.t24886.cljs$lang$type = true;

tic_tac_toe.client.t24886.cljs$lang$ctorStr = "tic-tac-toe.client/t24886";

tic_tac_toe.client.t24886.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"tic-tac-toe.client/t24886");
});

tic_tac_toe.client.__GT_t24886 = (function tic_tac_toe$client$game_$___GT_t24886(game__$1,data__$1,owner__$1,meta24887){
return (new tic_tac_toe.client.t24886(game__$1,data__$1,owner__$1,meta24887));
});

}

return (new tic_tac_toe.client.t24886(tic_tac_toe$client$game,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,tic_tac_toe.client.game,tic_tac_toe.client.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));

//# sourceMappingURL=client.js.map