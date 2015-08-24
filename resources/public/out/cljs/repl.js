// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29383_29395 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29384_29396 = null;
var count__29385_29397 = (0);
var i__29386_29398 = (0);
while(true){
if((i__29386_29398 < count__29385_29397)){
var f_29399 = cljs.core._nth.call(null,chunk__29384_29396,i__29386_29398);
cljs.core.println.call(null,"  ",f_29399);

var G__29400 = seq__29383_29395;
var G__29401 = chunk__29384_29396;
var G__29402 = count__29385_29397;
var G__29403 = (i__29386_29398 + (1));
seq__29383_29395 = G__29400;
chunk__29384_29396 = G__29401;
count__29385_29397 = G__29402;
i__29386_29398 = G__29403;
continue;
} else {
var temp__4425__auto___29404 = cljs.core.seq.call(null,seq__29383_29395);
if(temp__4425__auto___29404){
var seq__29383_29405__$1 = temp__4425__auto___29404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29383_29405__$1)){
var c__17694__auto___29406 = cljs.core.chunk_first.call(null,seq__29383_29405__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29383_29405__$1);
var G__29408 = c__17694__auto___29406;
var G__29409 = cljs.core.count.call(null,c__17694__auto___29406);
var G__29410 = (0);
seq__29383_29395 = G__29407;
chunk__29384_29396 = G__29408;
count__29385_29397 = G__29409;
i__29386_29398 = G__29410;
continue;
} else {
var f_29411 = cljs.core.first.call(null,seq__29383_29405__$1);
cljs.core.println.call(null,"  ",f_29411);

var G__29412 = cljs.core.next.call(null,seq__29383_29405__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__29383_29395 = G__29412;
chunk__29384_29396 = G__29413;
count__29385_29397 = G__29414;
i__29386_29398 = G__29415;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29416 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16909__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29416);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29416)))?cljs.core.second.call(null,arglists_29416):arglists_29416));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29388 = null;
var count__29389 = (0);
var i__29390 = (0);
while(true){
if((i__29390 < count__29389)){
var vec__29391 = cljs.core._nth.call(null,chunk__29388,i__29390);
var name = cljs.core.nth.call(null,vec__29391,(0),null);
var map__29392 = cljs.core.nth.call(null,vec__29391,(1),null);
var map__29392__$1 = ((cljs.core.seq_QMARK_.call(null,map__29392))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);
var doc = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29417 = seq__29387;
var G__29418 = chunk__29388;
var G__29419 = count__29389;
var G__29420 = (i__29390 + (1));
seq__29387 = G__29417;
chunk__29388 = G__29418;
count__29389 = G__29419;
i__29390 = G__29420;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29387);
if(temp__4425__auto__){
var seq__29387__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29387__$1)){
var c__17694__auto__ = cljs.core.chunk_first.call(null,seq__29387__$1);
var G__29421 = cljs.core.chunk_rest.call(null,seq__29387__$1);
var G__29422 = c__17694__auto__;
var G__29423 = cljs.core.count.call(null,c__17694__auto__);
var G__29424 = (0);
seq__29387 = G__29421;
chunk__29388 = G__29422;
count__29389 = G__29423;
i__29390 = G__29424;
continue;
} else {
var vec__29393 = cljs.core.first.call(null,seq__29387__$1);
var name = cljs.core.nth.call(null,vec__29393,(0),null);
var map__29394 = cljs.core.nth.call(null,vec__29393,(1),null);
var map__29394__$1 = ((cljs.core.seq_QMARK_.call(null,map__29394))?cljs.core.apply.call(null,cljs.core.hash_map,map__29394):map__29394);
var doc = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29394__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29425 = cljs.core.next.call(null,seq__29387__$1);
var G__29426 = null;
var G__29427 = (0);
var G__29428 = (0);
seq__29387 = G__29425;
chunk__29388 = G__29426;
count__29389 = G__29427;
i__29390 = G__29428;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map