// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25747 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25747 = (function (fn_handler,f,meta25748){
this.fn_handler = fn_handler;
this.f = f;
this.meta25748 = meta25748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25749,meta25748__$1){
var self__ = this;
var _25749__$1 = this;
return (new cljs.core.async.t25747(self__.fn_handler,self__.f,meta25748__$1));
});

cljs.core.async.t25747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25749){
var self__ = this;
var _25749__$1 = this;
return self__.meta25748;
});

cljs.core.async.t25747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25748","meta25748",1886323080,null)], null);
});

cljs.core.async.t25747.cljs$lang$type = true;

cljs.core.async.t25747.cljs$lang$ctorStr = "cljs.core.async/t25747";

cljs.core.async.t25747.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t25747");
});

cljs.core.async.__GT_t25747 = (function cljs$core$async$fn_handler_$___GT_t25747(fn_handler__$1,f__$1,meta25748){
return (new cljs.core.async.t25747(fn_handler__$1,f__$1,meta25748));
});

}

return (new cljs.core.async.t25747(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25751 = buff;
if(G__25751){
var bit__17583__auto__ = null;
if(cljs.core.truth_((function (){var or__16909__auto__ = bit__17583__auto__;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return G__25751.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25751.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25751);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25751);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25753 = arguments.length;
switch (G__25753) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25756 = arguments.length;
switch (G__25756) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25758 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25758);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25758,ret){
return (function (){
return fn1.call(null,val_25758);
});})(val_25758,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25760 = arguments.length;
switch (G__25760) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17794__auto___25762 = n;
var x_25763 = (0);
while(true){
if((x_25763 < n__17794__auto___25762)){
(a[x_25763] = (0));

var G__25764 = (x_25763 + (1));
x_25763 = G__25764;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25765 = (i + (1));
i = G__25765;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25769 = (function (alt_flag,flag,meta25770){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25770 = meta25770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25771,meta25770__$1){
var self__ = this;
var _25771__$1 = this;
return (new cljs.core.async.t25769(self__.alt_flag,self__.flag,meta25770__$1));
});})(flag))
;

cljs.core.async.t25769.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25771){
var self__ = this;
var _25771__$1 = this;
return self__.meta25770;
});})(flag))
;

cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25769.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25770","meta25770",892903172,null)], null);
});})(flag))
;

cljs.core.async.t25769.cljs$lang$type = true;

cljs.core.async.t25769.cljs$lang$ctorStr = "cljs.core.async/t25769";

cljs.core.async.t25769.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t25769");
});})(flag))
;

cljs.core.async.__GT_t25769 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25769(alt_flag__$1,flag__$1,meta25770){
return (new cljs.core.async.t25769(alt_flag__$1,flag__$1,meta25770));
});})(flag))
;

}

return (new cljs.core.async.t25769(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25775 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25775 = (function (alt_handler,flag,cb,meta25776){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25776 = meta25776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25777,meta25776__$1){
var self__ = this;
var _25777__$1 = this;
return (new cljs.core.async.t25775(self__.alt_handler,self__.flag,self__.cb,meta25776__$1));
});

cljs.core.async.t25775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25777){
var self__ = this;
var _25777__$1 = this;
return self__.meta25776;
});

cljs.core.async.t25775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25776","meta25776",-1262819143,null)], null);
});

cljs.core.async.t25775.cljs$lang$type = true;

cljs.core.async.t25775.cljs$lang$ctorStr = "cljs.core.async/t25775";

cljs.core.async.t25775.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t25775");
});

cljs.core.async.__GT_t25775 = (function cljs$core$async$alt_handler_$___GT_t25775(alt_handler__$1,flag__$1,cb__$1,meta25776){
return (new cljs.core.async.t25775(alt_handler__$1,flag__$1,cb__$1,meta25776));
});

}

return (new cljs.core.async.t25775(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25778_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25778_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25779_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25779_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16909__auto__ = wport;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25780 = (i + (1));
i = G__25780;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16909__auto__ = ret;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16897__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16897__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16897__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__17949__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17949__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25783){
var map__25784 = p__25783;
var map__25784__$1 = ((cljs.core.seq_QMARK_.call(null,map__25784))?cljs.core.apply.call(null,cljs.core.hash_map,map__25784):map__25784);
var opts = map__25784__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25781){
var G__25782 = cljs.core.first.call(null,seq25781);
var seq25781__$1 = cljs.core.next.call(null,seq25781);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25782,seq25781__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25786 = arguments.length;
switch (G__25786) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20800__auto___25835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___25835){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___25835){
return (function (state_25810){
var state_val_25811 = (state_25810[(1)]);
if((state_val_25811 === (7))){
var inst_25806 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25812_25836 = state_25810__$1;
(statearr_25812_25836[(2)] = inst_25806);

(statearr_25812_25836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (1))){
var state_25810__$1 = state_25810;
var statearr_25813_25837 = state_25810__$1;
(statearr_25813_25837[(2)] = null);

(statearr_25813_25837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (4))){
var inst_25789 = (state_25810[(7)]);
var inst_25789__$1 = (state_25810[(2)]);
var inst_25790 = (inst_25789__$1 == null);
var state_25810__$1 = (function (){var statearr_25814 = state_25810;
(statearr_25814[(7)] = inst_25789__$1);

return statearr_25814;
})();
if(cljs.core.truth_(inst_25790)){
var statearr_25815_25838 = state_25810__$1;
(statearr_25815_25838[(1)] = (5));

} else {
var statearr_25816_25839 = state_25810__$1;
(statearr_25816_25839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (13))){
var state_25810__$1 = state_25810;
var statearr_25817_25840 = state_25810__$1;
(statearr_25817_25840[(2)] = null);

(statearr_25817_25840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (6))){
var inst_25789 = (state_25810[(7)]);
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25810__$1,(11),to,inst_25789);
} else {
if((state_val_25811 === (3))){
var inst_25808 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25810__$1,inst_25808);
} else {
if((state_val_25811 === (12))){
var state_25810__$1 = state_25810;
var statearr_25818_25841 = state_25810__$1;
(statearr_25818_25841[(2)] = null);

(statearr_25818_25841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (2))){
var state_25810__$1 = state_25810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25810__$1,(4),from);
} else {
if((state_val_25811 === (11))){
var inst_25799 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
if(cljs.core.truth_(inst_25799)){
var statearr_25819_25842 = state_25810__$1;
(statearr_25819_25842[(1)] = (12));

} else {
var statearr_25820_25843 = state_25810__$1;
(statearr_25820_25843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (9))){
var state_25810__$1 = state_25810;
var statearr_25821_25844 = state_25810__$1;
(statearr_25821_25844[(2)] = null);

(statearr_25821_25844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (5))){
var state_25810__$1 = state_25810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25822_25845 = state_25810__$1;
(statearr_25822_25845[(1)] = (8));

} else {
var statearr_25823_25846 = state_25810__$1;
(statearr_25823_25846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (14))){
var inst_25804 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25824_25847 = state_25810__$1;
(statearr_25824_25847[(2)] = inst_25804);

(statearr_25824_25847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (10))){
var inst_25796 = (state_25810[(2)]);
var state_25810__$1 = state_25810;
var statearr_25825_25848 = state_25810__$1;
(statearr_25825_25848[(2)] = inst_25796);

(statearr_25825_25848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25811 === (8))){
var inst_25793 = cljs.core.async.close_BANG_.call(null,to);
var state_25810__$1 = state_25810;
var statearr_25826_25849 = state_25810__$1;
(statearr_25826_25849[(2)] = inst_25793);

(statearr_25826_25849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___25835))
;
return ((function (switch__20738__auto__,c__20800__auto___25835){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_25810){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_25810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__20742__auto__ = e25831;
var statearr_25832_25850 = state_25810;
(statearr_25832_25850[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25851 = state_25810;
state_25810 = G__25851;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_25810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_25810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___25835))
})();
var state__20802__auto__ = (function (){var statearr_25833 = f__20801__auto__.call(null);
(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___25835);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___25835))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26035){
var vec__26036 = p__26035;
var v = cljs.core.nth.call(null,vec__26036,(0),null);
var p = cljs.core.nth.call(null,vec__26036,(1),null);
var job = vec__26036;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20800__auto___26218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results){
return (function (state_26041){
var state_val_26042 = (state_26041[(1)]);
if((state_val_26042 === (1))){
var state_26041__$1 = state_26041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26041__$1,(2),res,v);
} else {
if((state_val_26042 === (2))){
var inst_26038 = (state_26041[(2)]);
var inst_26039 = cljs.core.async.close_BANG_.call(null,res);
var state_26041__$1 = (function (){var statearr_26043 = state_26041;
(statearr_26043[(7)] = inst_26038);

return statearr_26043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26041__$1,inst_26039);
} else {
return null;
}
}
});})(c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results))
;
return ((function (switch__20738__auto__,c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_26047 = [null,null,null,null,null,null,null,null];
(statearr_26047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__);

(statearr_26047[(1)] = (1));

return statearr_26047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1 = (function (state_26041){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26048){if((e26048 instanceof Object)){
var ex__20742__auto__ = e26048;
var statearr_26049_26219 = state_26041;
(statearr_26049_26219[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26220 = state_26041;
state_26041 = G__26220;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = function(state_26041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1.call(this,state_26041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results))
})();
var state__20802__auto__ = (function (){var statearr_26050 = f__20801__auto__.call(null);
(statearr_26050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26218);

return statearr_26050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___26218,res,vec__26036,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26051){
var vec__26052 = p__26051;
var v = cljs.core.nth.call(null,vec__26052,(0),null);
var p = cljs.core.nth.call(null,vec__26052,(1),null);
var job = vec__26052;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17794__auto___26221 = n;
var __26222 = (0);
while(true){
if((__26222 < n__17794__auto___26221)){
var G__26053_26223 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26053_26223) {
case "compute":
var c__20800__auto___26225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26222,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (__26222,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function (state_26066){
var state_val_26067 = (state_26066[(1)]);
if((state_val_26067 === (1))){
var state_26066__$1 = state_26066;
var statearr_26068_26226 = state_26066__$1;
(statearr_26068_26226[(2)] = null);

(statearr_26068_26226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26067 === (2))){
var state_26066__$1 = state_26066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26066__$1,(4),jobs);
} else {
if((state_val_26067 === (3))){
var inst_26064 = (state_26066[(2)]);
var state_26066__$1 = state_26066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26066__$1,inst_26064);
} else {
if((state_val_26067 === (4))){
var inst_26056 = (state_26066[(2)]);
var inst_26057 = process.call(null,inst_26056);
var state_26066__$1 = state_26066;
if(cljs.core.truth_(inst_26057)){
var statearr_26069_26227 = state_26066__$1;
(statearr_26069_26227[(1)] = (5));

} else {
var statearr_26070_26228 = state_26066__$1;
(statearr_26070_26228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26067 === (5))){
var state_26066__$1 = state_26066;
var statearr_26071_26229 = state_26066__$1;
(statearr_26071_26229[(2)] = null);

(statearr_26071_26229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26067 === (6))){
var state_26066__$1 = state_26066;
var statearr_26072_26230 = state_26066__$1;
(statearr_26072_26230[(2)] = null);

(statearr_26072_26230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26067 === (7))){
var inst_26062 = (state_26066[(2)]);
var state_26066__$1 = state_26066;
var statearr_26073_26231 = state_26066__$1;
(statearr_26073_26231[(2)] = inst_26062);

(statearr_26073_26231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26222,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
;
return ((function (__26222,switch__20738__auto__,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null];
(statearr_26077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1 = (function (state_26066){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__20742__auto__ = e26078;
var statearr_26079_26232 = state_26066;
(statearr_26079_26232[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26233 = state_26066;
state_26066 = G__26233;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = function(state_26066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1.call(this,state_26066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__;
})()
;})(__26222,switch__20738__auto__,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
})();
var state__20802__auto__ = (function (){var statearr_26080 = f__20801__auto__.call(null);
(statearr_26080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26225);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(__26222,c__20800__auto___26225,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
);


break;
case "async":
var c__20800__auto___26234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26222,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (__26222,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function (state_26093){
var state_val_26094 = (state_26093[(1)]);
if((state_val_26094 === (1))){
var state_26093__$1 = state_26093;
var statearr_26095_26235 = state_26093__$1;
(statearr_26095_26235[(2)] = null);

(statearr_26095_26235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (2))){
var state_26093__$1 = state_26093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26093__$1,(4),jobs);
} else {
if((state_val_26094 === (3))){
var inst_26091 = (state_26093[(2)]);
var state_26093__$1 = state_26093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26093__$1,inst_26091);
} else {
if((state_val_26094 === (4))){
var inst_26083 = (state_26093[(2)]);
var inst_26084 = async.call(null,inst_26083);
var state_26093__$1 = state_26093;
if(cljs.core.truth_(inst_26084)){
var statearr_26096_26236 = state_26093__$1;
(statearr_26096_26236[(1)] = (5));

} else {
var statearr_26097_26237 = state_26093__$1;
(statearr_26097_26237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (5))){
var state_26093__$1 = state_26093;
var statearr_26098_26238 = state_26093__$1;
(statearr_26098_26238[(2)] = null);

(statearr_26098_26238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (6))){
var state_26093__$1 = state_26093;
var statearr_26099_26239 = state_26093__$1;
(statearr_26099_26239[(2)] = null);

(statearr_26099_26239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (7))){
var inst_26089 = (state_26093[(2)]);
var state_26093__$1 = state_26093;
var statearr_26100_26240 = state_26093__$1;
(statearr_26100_26240[(2)] = inst_26089);

(statearr_26100_26240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__26222,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
;
return ((function (__26222,switch__20738__auto__,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_26104 = [null,null,null,null,null,null,null];
(statearr_26104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__);

(statearr_26104[(1)] = (1));

return statearr_26104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1 = (function (state_26093){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26105){if((e26105 instanceof Object)){
var ex__20742__auto__ = e26105;
var statearr_26106_26241 = state_26093;
(statearr_26106_26241[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26242 = state_26093;
state_26093 = G__26242;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = function(state_26093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1.call(this,state_26093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__;
})()
;})(__26222,switch__20738__auto__,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
})();
var state__20802__auto__ = (function (){var statearr_26107 = f__20801__auto__.call(null);
(statearr_26107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26234);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(__26222,c__20800__auto___26234,G__26053_26223,n__17794__auto___26221,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26243 = (__26222 + (1));
__26222 = G__26243;
continue;
} else {
}
break;
}

var c__20800__auto___26244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___26244,jobs,results,process,async){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___26244,jobs,results,process,async){
return (function (state_26129){
var state_val_26130 = (state_26129[(1)]);
if((state_val_26130 === (1))){
var state_26129__$1 = state_26129;
var statearr_26131_26245 = state_26129__$1;
(statearr_26131_26245[(2)] = null);

(statearr_26131_26245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (2))){
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26129__$1,(4),from);
} else {
if((state_val_26130 === (3))){
var inst_26127 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26129__$1,inst_26127);
} else {
if((state_val_26130 === (4))){
var inst_26110 = (state_26129[(7)]);
var inst_26110__$1 = (state_26129[(2)]);
var inst_26111 = (inst_26110__$1 == null);
var state_26129__$1 = (function (){var statearr_26132 = state_26129;
(statearr_26132[(7)] = inst_26110__$1);

return statearr_26132;
})();
if(cljs.core.truth_(inst_26111)){
var statearr_26133_26246 = state_26129__$1;
(statearr_26133_26246[(1)] = (5));

} else {
var statearr_26134_26247 = state_26129__$1;
(statearr_26134_26247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (5))){
var inst_26113 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26129__$1 = state_26129;
var statearr_26135_26248 = state_26129__$1;
(statearr_26135_26248[(2)] = inst_26113);

(statearr_26135_26248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (6))){
var inst_26115 = (state_26129[(8)]);
var inst_26110 = (state_26129[(7)]);
var inst_26115__$1 = cljs.core.async.chan.call(null,(1));
var inst_26116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26117 = [inst_26110,inst_26115__$1];
var inst_26118 = (new cljs.core.PersistentVector(null,2,(5),inst_26116,inst_26117,null));
var state_26129__$1 = (function (){var statearr_26136 = state_26129;
(statearr_26136[(8)] = inst_26115__$1);

return statearr_26136;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26129__$1,(8),jobs,inst_26118);
} else {
if((state_val_26130 === (7))){
var inst_26125 = (state_26129[(2)]);
var state_26129__$1 = state_26129;
var statearr_26137_26249 = state_26129__$1;
(statearr_26137_26249[(2)] = inst_26125);

(statearr_26137_26249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26130 === (8))){
var inst_26115 = (state_26129[(8)]);
var inst_26120 = (state_26129[(2)]);
var state_26129__$1 = (function (){var statearr_26138 = state_26129;
(statearr_26138[(9)] = inst_26120);

return statearr_26138;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26129__$1,(9),results,inst_26115);
} else {
if((state_val_26130 === (9))){
var inst_26122 = (state_26129[(2)]);
var state_26129__$1 = (function (){var statearr_26139 = state_26129;
(statearr_26139[(10)] = inst_26122);

return statearr_26139;
})();
var statearr_26140_26250 = state_26129__$1;
(statearr_26140_26250[(2)] = null);

(statearr_26140_26250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___26244,jobs,results,process,async))
;
return ((function (switch__20738__auto__,c__20800__auto___26244,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_26144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__);

(statearr_26144[(1)] = (1));

return statearr_26144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1 = (function (state_26129){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26145){if((e26145 instanceof Object)){
var ex__20742__auto__ = e26145;
var statearr_26146_26251 = state_26129;
(statearr_26146_26251[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26252 = state_26129;
state_26129 = G__26252;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = function(state_26129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1.call(this,state_26129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___26244,jobs,results,process,async))
})();
var state__20802__auto__ = (function (){var statearr_26147 = f__20801__auto__.call(null);
(statearr_26147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26244);

return statearr_26147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___26244,jobs,results,process,async))
);


var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__,jobs,results,process,async){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__,jobs,results,process,async){
return (function (state_26185){
var state_val_26186 = (state_26185[(1)]);
if((state_val_26186 === (7))){
var inst_26181 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26187_26253 = state_26185__$1;
(statearr_26187_26253[(2)] = inst_26181);

(statearr_26187_26253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (20))){
var state_26185__$1 = state_26185;
var statearr_26188_26254 = state_26185__$1;
(statearr_26188_26254[(2)] = null);

(statearr_26188_26254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (1))){
var state_26185__$1 = state_26185;
var statearr_26189_26255 = state_26185__$1;
(statearr_26189_26255[(2)] = null);

(statearr_26189_26255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (4))){
var inst_26150 = (state_26185[(7)]);
var inst_26150__$1 = (state_26185[(2)]);
var inst_26151 = (inst_26150__$1 == null);
var state_26185__$1 = (function (){var statearr_26190 = state_26185;
(statearr_26190[(7)] = inst_26150__$1);

return statearr_26190;
})();
if(cljs.core.truth_(inst_26151)){
var statearr_26191_26256 = state_26185__$1;
(statearr_26191_26256[(1)] = (5));

} else {
var statearr_26192_26257 = state_26185__$1;
(statearr_26192_26257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (15))){
var inst_26163 = (state_26185[(8)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26185__$1,(18),to,inst_26163);
} else {
if((state_val_26186 === (21))){
var inst_26176 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26193_26258 = state_26185__$1;
(statearr_26193_26258[(2)] = inst_26176);

(statearr_26193_26258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (13))){
var inst_26178 = (state_26185[(2)]);
var state_26185__$1 = (function (){var statearr_26194 = state_26185;
(statearr_26194[(9)] = inst_26178);

return statearr_26194;
})();
var statearr_26195_26259 = state_26185__$1;
(statearr_26195_26259[(2)] = null);

(statearr_26195_26259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (6))){
var inst_26150 = (state_26185[(7)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26185__$1,(11),inst_26150);
} else {
if((state_val_26186 === (17))){
var inst_26171 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
if(cljs.core.truth_(inst_26171)){
var statearr_26196_26260 = state_26185__$1;
(statearr_26196_26260[(1)] = (19));

} else {
var statearr_26197_26261 = state_26185__$1;
(statearr_26197_26261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (3))){
var inst_26183 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26185__$1,inst_26183);
} else {
if((state_val_26186 === (12))){
var inst_26160 = (state_26185[(10)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26185__$1,(14),inst_26160);
} else {
if((state_val_26186 === (2))){
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26185__$1,(4),results);
} else {
if((state_val_26186 === (19))){
var state_26185__$1 = state_26185;
var statearr_26198_26262 = state_26185__$1;
(statearr_26198_26262[(2)] = null);

(statearr_26198_26262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (11))){
var inst_26160 = (state_26185[(2)]);
var state_26185__$1 = (function (){var statearr_26199 = state_26185;
(statearr_26199[(10)] = inst_26160);

return statearr_26199;
})();
var statearr_26200_26263 = state_26185__$1;
(statearr_26200_26263[(2)] = null);

(statearr_26200_26263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (9))){
var state_26185__$1 = state_26185;
var statearr_26201_26264 = state_26185__$1;
(statearr_26201_26264[(2)] = null);

(statearr_26201_26264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (5))){
var state_26185__$1 = state_26185;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26202_26265 = state_26185__$1;
(statearr_26202_26265[(1)] = (8));

} else {
var statearr_26203_26266 = state_26185__$1;
(statearr_26203_26266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (14))){
var inst_26165 = (state_26185[(11)]);
var inst_26163 = (state_26185[(8)]);
var inst_26163__$1 = (state_26185[(2)]);
var inst_26164 = (inst_26163__$1 == null);
var inst_26165__$1 = cljs.core.not.call(null,inst_26164);
var state_26185__$1 = (function (){var statearr_26204 = state_26185;
(statearr_26204[(11)] = inst_26165__$1);

(statearr_26204[(8)] = inst_26163__$1);

return statearr_26204;
})();
if(inst_26165__$1){
var statearr_26205_26267 = state_26185__$1;
(statearr_26205_26267[(1)] = (15));

} else {
var statearr_26206_26268 = state_26185__$1;
(statearr_26206_26268[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (16))){
var inst_26165 = (state_26185[(11)]);
var state_26185__$1 = state_26185;
var statearr_26207_26269 = state_26185__$1;
(statearr_26207_26269[(2)] = inst_26165);

(statearr_26207_26269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (10))){
var inst_26157 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26208_26270 = state_26185__$1;
(statearr_26208_26270[(2)] = inst_26157);

(statearr_26208_26270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (18))){
var inst_26168 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26209_26271 = state_26185__$1;
(statearr_26209_26271[(2)] = inst_26168);

(statearr_26209_26271[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26186 === (8))){
var inst_26154 = cljs.core.async.close_BANG_.call(null,to);
var state_26185__$1 = state_26185;
var statearr_26210_26272 = state_26185__$1;
(statearr_26210_26272[(2)] = inst_26154);

(statearr_26210_26272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto__,jobs,results,process,async))
;
return ((function (switch__20738__auto__,c__20800__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_26214 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__);

(statearr_26214[(1)] = (1));

return statearr_26214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1 = (function (state_26185){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26215){if((e26215 instanceof Object)){
var ex__20742__auto__ = e26215;
var statearr_26216_26273 = state_26185;
(statearr_26216_26273[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26274 = state_26185;
state_26185 = G__26274;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__ = function(state_26185){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1.call(this,state_26185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__,jobs,results,process,async))
})();
var state__20802__auto__ = (function (){var statearr_26217 = f__20801__auto__.call(null);
(statearr_26217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_26217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__,jobs,results,process,async))
);

return c__20800__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26276 = arguments.length;
switch (G__26276) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26279 = arguments.length;
switch (G__26279) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26282 = arguments.length;
switch (G__26282) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20800__auto___26334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___26334,tc,fc){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___26334,tc,fc){
return (function (state_26308){
var state_val_26309 = (state_26308[(1)]);
if((state_val_26309 === (7))){
var inst_26304 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26310_26335 = state_26308__$1;
(statearr_26310_26335[(2)] = inst_26304);

(statearr_26310_26335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (1))){
var state_26308__$1 = state_26308;
var statearr_26311_26336 = state_26308__$1;
(statearr_26311_26336[(2)] = null);

(statearr_26311_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (4))){
var inst_26285 = (state_26308[(7)]);
var inst_26285__$1 = (state_26308[(2)]);
var inst_26286 = (inst_26285__$1 == null);
var state_26308__$1 = (function (){var statearr_26312 = state_26308;
(statearr_26312[(7)] = inst_26285__$1);

return statearr_26312;
})();
if(cljs.core.truth_(inst_26286)){
var statearr_26313_26337 = state_26308__$1;
(statearr_26313_26337[(1)] = (5));

} else {
var statearr_26314_26338 = state_26308__$1;
(statearr_26314_26338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (13))){
var state_26308__$1 = state_26308;
var statearr_26315_26339 = state_26308__$1;
(statearr_26315_26339[(2)] = null);

(statearr_26315_26339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (6))){
var inst_26285 = (state_26308[(7)]);
var inst_26291 = p.call(null,inst_26285);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26291)){
var statearr_26316_26340 = state_26308__$1;
(statearr_26316_26340[(1)] = (9));

} else {
var statearr_26317_26341 = state_26308__$1;
(statearr_26317_26341[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (3))){
var inst_26306 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else {
if((state_val_26309 === (12))){
var state_26308__$1 = state_26308;
var statearr_26318_26342 = state_26308__$1;
(statearr_26318_26342[(2)] = null);

(statearr_26318_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (2))){
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26308__$1,(4),ch);
} else {
if((state_val_26309 === (11))){
var inst_26285 = (state_26308[(7)]);
var inst_26295 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26308__$1,(8),inst_26295,inst_26285);
} else {
if((state_val_26309 === (9))){
var state_26308__$1 = state_26308;
var statearr_26319_26343 = state_26308__$1;
(statearr_26319_26343[(2)] = tc);

(statearr_26319_26343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (5))){
var inst_26288 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26289 = cljs.core.async.close_BANG_.call(null,fc);
var state_26308__$1 = (function (){var statearr_26320 = state_26308;
(statearr_26320[(8)] = inst_26288);

return statearr_26320;
})();
var statearr_26321_26344 = state_26308__$1;
(statearr_26321_26344[(2)] = inst_26289);

(statearr_26321_26344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (14))){
var inst_26302 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26322_26345 = state_26308__$1;
(statearr_26322_26345[(2)] = inst_26302);

(statearr_26322_26345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (10))){
var state_26308__$1 = state_26308;
var statearr_26323_26346 = state_26308__$1;
(statearr_26323_26346[(2)] = fc);

(statearr_26323_26346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (8))){
var inst_26297 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
if(cljs.core.truth_(inst_26297)){
var statearr_26324_26347 = state_26308__$1;
(statearr_26324_26347[(1)] = (12));

} else {
var statearr_26325_26348 = state_26308__$1;
(statearr_26325_26348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___26334,tc,fc))
;
return ((function (switch__20738__auto__,c__20800__auto___26334,tc,fc){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_26329 = [null,null,null,null,null,null,null,null,null];
(statearr_26329[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_26329[(1)] = (1));

return statearr_26329;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_26308){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26330){if((e26330 instanceof Object)){
var ex__20742__auto__ = e26330;
var statearr_26331_26349 = state_26308;
(statearr_26331_26349[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26350 = state_26308;
state_26308 = G__26350;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___26334,tc,fc))
})();
var state__20802__auto__ = (function (){var statearr_26332 = f__20801__auto__.call(null);
(statearr_26332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26334);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___26334,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_26397){
var state_val_26398 = (state_26397[(1)]);
if((state_val_26398 === (1))){
var inst_26383 = init;
var state_26397__$1 = (function (){var statearr_26399 = state_26397;
(statearr_26399[(7)] = inst_26383);

return statearr_26399;
})();
var statearr_26400_26415 = state_26397__$1;
(statearr_26400_26415[(2)] = null);

(statearr_26400_26415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (2))){
var state_26397__$1 = state_26397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26397__$1,(4),ch);
} else {
if((state_val_26398 === (3))){
var inst_26395 = (state_26397[(2)]);
var state_26397__$1 = state_26397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26397__$1,inst_26395);
} else {
if((state_val_26398 === (4))){
var inst_26386 = (state_26397[(8)]);
var inst_26386__$1 = (state_26397[(2)]);
var inst_26387 = (inst_26386__$1 == null);
var state_26397__$1 = (function (){var statearr_26401 = state_26397;
(statearr_26401[(8)] = inst_26386__$1);

return statearr_26401;
})();
if(cljs.core.truth_(inst_26387)){
var statearr_26402_26416 = state_26397__$1;
(statearr_26402_26416[(1)] = (5));

} else {
var statearr_26403_26417 = state_26397__$1;
(statearr_26403_26417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (5))){
var inst_26383 = (state_26397[(7)]);
var state_26397__$1 = state_26397;
var statearr_26404_26418 = state_26397__$1;
(statearr_26404_26418[(2)] = inst_26383);

(statearr_26404_26418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (6))){
var inst_26386 = (state_26397[(8)]);
var inst_26383 = (state_26397[(7)]);
var inst_26390 = f.call(null,inst_26383,inst_26386);
var inst_26383__$1 = inst_26390;
var state_26397__$1 = (function (){var statearr_26405 = state_26397;
(statearr_26405[(7)] = inst_26383__$1);

return statearr_26405;
})();
var statearr_26406_26419 = state_26397__$1;
(statearr_26406_26419[(2)] = null);

(statearr_26406_26419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26398 === (7))){
var inst_26393 = (state_26397[(2)]);
var state_26397__$1 = state_26397;
var statearr_26407_26420 = state_26397__$1;
(statearr_26407_26420[(2)] = inst_26393);

(statearr_26407_26420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20739__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20739__auto____0 = (function (){
var statearr_26411 = [null,null,null,null,null,null,null,null,null];
(statearr_26411[(0)] = cljs$core$async$reduce_$_state_machine__20739__auto__);

(statearr_26411[(1)] = (1));

return statearr_26411;
});
var cljs$core$async$reduce_$_state_machine__20739__auto____1 = (function (state_26397){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26412){if((e26412 instanceof Object)){
var ex__20742__auto__ = e26412;
var statearr_26413_26421 = state_26397;
(statearr_26413_26421[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26422 = state_26397;
state_26397 = G__26422;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20739__auto__ = function(state_26397){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20739__auto____1.call(this,state_26397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20739__auto____0;
cljs$core$async$reduce_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20739__auto____1;
return cljs$core$async$reduce_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_26414 = f__20801__auto__.call(null);
(statearr_26414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_26414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26424 = arguments.length;
switch (G__26424) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_26449){
var state_val_26450 = (state_26449[(1)]);
if((state_val_26450 === (7))){
var inst_26431 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26451_26475 = state_26449__$1;
(statearr_26451_26475[(2)] = inst_26431);

(statearr_26451_26475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (1))){
var inst_26425 = cljs.core.seq.call(null,coll);
var inst_26426 = inst_26425;
var state_26449__$1 = (function (){var statearr_26452 = state_26449;
(statearr_26452[(7)] = inst_26426);

return statearr_26452;
})();
var statearr_26453_26476 = state_26449__$1;
(statearr_26453_26476[(2)] = null);

(statearr_26453_26476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (4))){
var inst_26426 = (state_26449[(7)]);
var inst_26429 = cljs.core.first.call(null,inst_26426);
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26449__$1,(7),ch,inst_26429);
} else {
if((state_val_26450 === (13))){
var inst_26443 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26454_26477 = state_26449__$1;
(statearr_26454_26477[(2)] = inst_26443);

(statearr_26454_26477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (6))){
var inst_26434 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26434)){
var statearr_26455_26478 = state_26449__$1;
(statearr_26455_26478[(1)] = (8));

} else {
var statearr_26456_26479 = state_26449__$1;
(statearr_26456_26479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (3))){
var inst_26447 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26449__$1,inst_26447);
} else {
if((state_val_26450 === (12))){
var state_26449__$1 = state_26449;
var statearr_26457_26480 = state_26449__$1;
(statearr_26457_26480[(2)] = null);

(statearr_26457_26480[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (2))){
var inst_26426 = (state_26449[(7)]);
var state_26449__$1 = state_26449;
if(cljs.core.truth_(inst_26426)){
var statearr_26458_26481 = state_26449__$1;
(statearr_26458_26481[(1)] = (4));

} else {
var statearr_26459_26482 = state_26449__$1;
(statearr_26459_26482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (11))){
var inst_26440 = cljs.core.async.close_BANG_.call(null,ch);
var state_26449__$1 = state_26449;
var statearr_26460_26483 = state_26449__$1;
(statearr_26460_26483[(2)] = inst_26440);

(statearr_26460_26483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (9))){
var state_26449__$1 = state_26449;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26461_26484 = state_26449__$1;
(statearr_26461_26484[(1)] = (11));

} else {
var statearr_26462_26485 = state_26449__$1;
(statearr_26462_26485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (5))){
var inst_26426 = (state_26449[(7)]);
var state_26449__$1 = state_26449;
var statearr_26463_26486 = state_26449__$1;
(statearr_26463_26486[(2)] = inst_26426);

(statearr_26463_26486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (10))){
var inst_26445 = (state_26449[(2)]);
var state_26449__$1 = state_26449;
var statearr_26464_26487 = state_26449__$1;
(statearr_26464_26487[(2)] = inst_26445);

(statearr_26464_26487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26450 === (8))){
var inst_26426 = (state_26449[(7)]);
var inst_26436 = cljs.core.next.call(null,inst_26426);
var inst_26426__$1 = inst_26436;
var state_26449__$1 = (function (){var statearr_26465 = state_26449;
(statearr_26465[(7)] = inst_26426__$1);

return statearr_26465;
})();
var statearr_26466_26488 = state_26449__$1;
(statearr_26466_26488[(2)] = null);

(statearr_26466_26488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_26470 = [null,null,null,null,null,null,null,null];
(statearr_26470[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_26470[(1)] = (1));

return statearr_26470;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_26449){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26471){if((e26471 instanceof Object)){
var ex__20742__auto__ = e26471;
var statearr_26472_26489 = state_26449;
(statearr_26472_26489[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26490 = state_26449;
state_26449 = G__26490;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_26449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_26449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_26473 = f__20801__auto__.call(null);
(statearr_26473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_26473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26492 = {};
return obj26492;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16897__auto__ = _;
if(and__16897__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16897__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17545__auto__ = (((_ == null))?null:_);
return (function (){var or__16909__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26494 = {};
return obj26494;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26716 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26716 = (function (mult,ch,cs,meta26717){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26717 = meta26717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26718,meta26717__$1){
var self__ = this;
var _26718__$1 = this;
return (new cljs.core.async.t26716(self__.mult,self__.ch,self__.cs,meta26717__$1));
});})(cs))
;

cljs.core.async.t26716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26718){
var self__ = this;
var _26718__$1 = this;
return self__.meta26717;
});})(cs))
;

cljs.core.async.t26716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26716.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26716.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26716.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26716.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26716.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26717","meta26717",1239265369,null)], null);
});})(cs))
;

cljs.core.async.t26716.cljs$lang$type = true;

cljs.core.async.t26716.cljs$lang$ctorStr = "cljs.core.async/t26716";

cljs.core.async.t26716.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t26716");
});})(cs))
;

cljs.core.async.__GT_t26716 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26716(mult__$1,ch__$1,cs__$1,meta26717){
return (new cljs.core.async.t26716(mult__$1,ch__$1,cs__$1,meta26717));
});})(cs))
;

}

return (new cljs.core.async.t26716(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20800__auto___26937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___26937,cs,m,dchan,dctr,done){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___26937,cs,m,dchan,dctr,done){
return (function (state_26849){
var state_val_26850 = (state_26849[(1)]);
if((state_val_26850 === (7))){
var inst_26845 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26851_26938 = state_26849__$1;
(statearr_26851_26938[(2)] = inst_26845);

(statearr_26851_26938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (20))){
var inst_26750 = (state_26849[(7)]);
var inst_26760 = cljs.core.first.call(null,inst_26750);
var inst_26761 = cljs.core.nth.call(null,inst_26760,(0),null);
var inst_26762 = cljs.core.nth.call(null,inst_26760,(1),null);
var state_26849__$1 = (function (){var statearr_26852 = state_26849;
(statearr_26852[(8)] = inst_26761);

return statearr_26852;
})();
if(cljs.core.truth_(inst_26762)){
var statearr_26853_26939 = state_26849__$1;
(statearr_26853_26939[(1)] = (22));

} else {
var statearr_26854_26940 = state_26849__$1;
(statearr_26854_26940[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (27))){
var inst_26797 = (state_26849[(9)]);
var inst_26792 = (state_26849[(10)]);
var inst_26790 = (state_26849[(11)]);
var inst_26721 = (state_26849[(12)]);
var inst_26797__$1 = cljs.core._nth.call(null,inst_26790,inst_26792);
var inst_26798 = cljs.core.async.put_BANG_.call(null,inst_26797__$1,inst_26721,done);
var state_26849__$1 = (function (){var statearr_26855 = state_26849;
(statearr_26855[(9)] = inst_26797__$1);

return statearr_26855;
})();
if(cljs.core.truth_(inst_26798)){
var statearr_26856_26941 = state_26849__$1;
(statearr_26856_26941[(1)] = (30));

} else {
var statearr_26857_26942 = state_26849__$1;
(statearr_26857_26942[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (1))){
var state_26849__$1 = state_26849;
var statearr_26858_26943 = state_26849__$1;
(statearr_26858_26943[(2)] = null);

(statearr_26858_26943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (24))){
var inst_26750 = (state_26849[(7)]);
var inst_26767 = (state_26849[(2)]);
var inst_26768 = cljs.core.next.call(null,inst_26750);
var inst_26730 = inst_26768;
var inst_26731 = null;
var inst_26732 = (0);
var inst_26733 = (0);
var state_26849__$1 = (function (){var statearr_26859 = state_26849;
(statearr_26859[(13)] = inst_26731);

(statearr_26859[(14)] = inst_26767);

(statearr_26859[(15)] = inst_26733);

(statearr_26859[(16)] = inst_26732);

(statearr_26859[(17)] = inst_26730);

return statearr_26859;
})();
var statearr_26860_26944 = state_26849__$1;
(statearr_26860_26944[(2)] = null);

(statearr_26860_26944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (39))){
var state_26849__$1 = state_26849;
var statearr_26864_26945 = state_26849__$1;
(statearr_26864_26945[(2)] = null);

(statearr_26864_26945[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (4))){
var inst_26721 = (state_26849[(12)]);
var inst_26721__$1 = (state_26849[(2)]);
var inst_26722 = (inst_26721__$1 == null);
var state_26849__$1 = (function (){var statearr_26865 = state_26849;
(statearr_26865[(12)] = inst_26721__$1);

return statearr_26865;
})();
if(cljs.core.truth_(inst_26722)){
var statearr_26866_26946 = state_26849__$1;
(statearr_26866_26946[(1)] = (5));

} else {
var statearr_26867_26947 = state_26849__$1;
(statearr_26867_26947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (15))){
var inst_26731 = (state_26849[(13)]);
var inst_26733 = (state_26849[(15)]);
var inst_26732 = (state_26849[(16)]);
var inst_26730 = (state_26849[(17)]);
var inst_26746 = (state_26849[(2)]);
var inst_26747 = (inst_26733 + (1));
var tmp26861 = inst_26731;
var tmp26862 = inst_26732;
var tmp26863 = inst_26730;
var inst_26730__$1 = tmp26863;
var inst_26731__$1 = tmp26861;
var inst_26732__$1 = tmp26862;
var inst_26733__$1 = inst_26747;
var state_26849__$1 = (function (){var statearr_26868 = state_26849;
(statearr_26868[(13)] = inst_26731__$1);

(statearr_26868[(15)] = inst_26733__$1);

(statearr_26868[(18)] = inst_26746);

(statearr_26868[(16)] = inst_26732__$1);

(statearr_26868[(17)] = inst_26730__$1);

return statearr_26868;
})();
var statearr_26869_26948 = state_26849__$1;
(statearr_26869_26948[(2)] = null);

(statearr_26869_26948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (21))){
var inst_26771 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26873_26949 = state_26849__$1;
(statearr_26873_26949[(2)] = inst_26771);

(statearr_26873_26949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (31))){
var inst_26797 = (state_26849[(9)]);
var inst_26801 = done.call(null,null);
var inst_26802 = cljs.core.async.untap_STAR_.call(null,m,inst_26797);
var state_26849__$1 = (function (){var statearr_26874 = state_26849;
(statearr_26874[(19)] = inst_26801);

return statearr_26874;
})();
var statearr_26875_26950 = state_26849__$1;
(statearr_26875_26950[(2)] = inst_26802);

(statearr_26875_26950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (32))){
var inst_26789 = (state_26849[(20)]);
var inst_26792 = (state_26849[(10)]);
var inst_26790 = (state_26849[(11)]);
var inst_26791 = (state_26849[(21)]);
var inst_26804 = (state_26849[(2)]);
var inst_26805 = (inst_26792 + (1));
var tmp26870 = inst_26789;
var tmp26871 = inst_26790;
var tmp26872 = inst_26791;
var inst_26789__$1 = tmp26870;
var inst_26790__$1 = tmp26871;
var inst_26791__$1 = tmp26872;
var inst_26792__$1 = inst_26805;
var state_26849__$1 = (function (){var statearr_26876 = state_26849;
(statearr_26876[(20)] = inst_26789__$1);

(statearr_26876[(10)] = inst_26792__$1);

(statearr_26876[(22)] = inst_26804);

(statearr_26876[(11)] = inst_26790__$1);

(statearr_26876[(21)] = inst_26791__$1);

return statearr_26876;
})();
var statearr_26877_26951 = state_26849__$1;
(statearr_26877_26951[(2)] = null);

(statearr_26877_26951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (40))){
var inst_26817 = (state_26849[(23)]);
var inst_26821 = done.call(null,null);
var inst_26822 = cljs.core.async.untap_STAR_.call(null,m,inst_26817);
var state_26849__$1 = (function (){var statearr_26878 = state_26849;
(statearr_26878[(24)] = inst_26821);

return statearr_26878;
})();
var statearr_26879_26952 = state_26849__$1;
(statearr_26879_26952[(2)] = inst_26822);

(statearr_26879_26952[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (33))){
var inst_26808 = (state_26849[(25)]);
var inst_26810 = cljs.core.chunked_seq_QMARK_.call(null,inst_26808);
var state_26849__$1 = state_26849;
if(inst_26810){
var statearr_26880_26953 = state_26849__$1;
(statearr_26880_26953[(1)] = (36));

} else {
var statearr_26881_26954 = state_26849__$1;
(statearr_26881_26954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (13))){
var inst_26740 = (state_26849[(26)]);
var inst_26743 = cljs.core.async.close_BANG_.call(null,inst_26740);
var state_26849__$1 = state_26849;
var statearr_26882_26955 = state_26849__$1;
(statearr_26882_26955[(2)] = inst_26743);

(statearr_26882_26955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (22))){
var inst_26761 = (state_26849[(8)]);
var inst_26764 = cljs.core.async.close_BANG_.call(null,inst_26761);
var state_26849__$1 = state_26849;
var statearr_26883_26956 = state_26849__$1;
(statearr_26883_26956[(2)] = inst_26764);

(statearr_26883_26956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (36))){
var inst_26808 = (state_26849[(25)]);
var inst_26812 = cljs.core.chunk_first.call(null,inst_26808);
var inst_26813 = cljs.core.chunk_rest.call(null,inst_26808);
var inst_26814 = cljs.core.count.call(null,inst_26812);
var inst_26789 = inst_26813;
var inst_26790 = inst_26812;
var inst_26791 = inst_26814;
var inst_26792 = (0);
var state_26849__$1 = (function (){var statearr_26884 = state_26849;
(statearr_26884[(20)] = inst_26789);

(statearr_26884[(10)] = inst_26792);

(statearr_26884[(11)] = inst_26790);

(statearr_26884[(21)] = inst_26791);

return statearr_26884;
})();
var statearr_26885_26957 = state_26849__$1;
(statearr_26885_26957[(2)] = null);

(statearr_26885_26957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (41))){
var inst_26808 = (state_26849[(25)]);
var inst_26824 = (state_26849[(2)]);
var inst_26825 = cljs.core.next.call(null,inst_26808);
var inst_26789 = inst_26825;
var inst_26790 = null;
var inst_26791 = (0);
var inst_26792 = (0);
var state_26849__$1 = (function (){var statearr_26886 = state_26849;
(statearr_26886[(20)] = inst_26789);

(statearr_26886[(10)] = inst_26792);

(statearr_26886[(11)] = inst_26790);

(statearr_26886[(21)] = inst_26791);

(statearr_26886[(27)] = inst_26824);

return statearr_26886;
})();
var statearr_26887_26958 = state_26849__$1;
(statearr_26887_26958[(2)] = null);

(statearr_26887_26958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (43))){
var state_26849__$1 = state_26849;
var statearr_26888_26959 = state_26849__$1;
(statearr_26888_26959[(2)] = null);

(statearr_26888_26959[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (29))){
var inst_26833 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26889_26960 = state_26849__$1;
(statearr_26889_26960[(2)] = inst_26833);

(statearr_26889_26960[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (44))){
var inst_26842 = (state_26849[(2)]);
var state_26849__$1 = (function (){var statearr_26890 = state_26849;
(statearr_26890[(28)] = inst_26842);

return statearr_26890;
})();
var statearr_26891_26961 = state_26849__$1;
(statearr_26891_26961[(2)] = null);

(statearr_26891_26961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (6))){
var inst_26781 = (state_26849[(29)]);
var inst_26780 = cljs.core.deref.call(null,cs);
var inst_26781__$1 = cljs.core.keys.call(null,inst_26780);
var inst_26782 = cljs.core.count.call(null,inst_26781__$1);
var inst_26783 = cljs.core.reset_BANG_.call(null,dctr,inst_26782);
var inst_26788 = cljs.core.seq.call(null,inst_26781__$1);
var inst_26789 = inst_26788;
var inst_26790 = null;
var inst_26791 = (0);
var inst_26792 = (0);
var state_26849__$1 = (function (){var statearr_26892 = state_26849;
(statearr_26892[(20)] = inst_26789);

(statearr_26892[(30)] = inst_26783);

(statearr_26892[(10)] = inst_26792);

(statearr_26892[(29)] = inst_26781__$1);

(statearr_26892[(11)] = inst_26790);

(statearr_26892[(21)] = inst_26791);

return statearr_26892;
})();
var statearr_26893_26962 = state_26849__$1;
(statearr_26893_26962[(2)] = null);

(statearr_26893_26962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (28))){
var inst_26789 = (state_26849[(20)]);
var inst_26808 = (state_26849[(25)]);
var inst_26808__$1 = cljs.core.seq.call(null,inst_26789);
var state_26849__$1 = (function (){var statearr_26894 = state_26849;
(statearr_26894[(25)] = inst_26808__$1);

return statearr_26894;
})();
if(inst_26808__$1){
var statearr_26895_26963 = state_26849__$1;
(statearr_26895_26963[(1)] = (33));

} else {
var statearr_26896_26964 = state_26849__$1;
(statearr_26896_26964[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (25))){
var inst_26792 = (state_26849[(10)]);
var inst_26791 = (state_26849[(21)]);
var inst_26794 = (inst_26792 < inst_26791);
var inst_26795 = inst_26794;
var state_26849__$1 = state_26849;
if(cljs.core.truth_(inst_26795)){
var statearr_26897_26965 = state_26849__$1;
(statearr_26897_26965[(1)] = (27));

} else {
var statearr_26898_26966 = state_26849__$1;
(statearr_26898_26966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (34))){
var state_26849__$1 = state_26849;
var statearr_26899_26967 = state_26849__$1;
(statearr_26899_26967[(2)] = null);

(statearr_26899_26967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (17))){
var state_26849__$1 = state_26849;
var statearr_26900_26968 = state_26849__$1;
(statearr_26900_26968[(2)] = null);

(statearr_26900_26968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (3))){
var inst_26847 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26849__$1,inst_26847);
} else {
if((state_val_26850 === (12))){
var inst_26776 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26901_26969 = state_26849__$1;
(statearr_26901_26969[(2)] = inst_26776);

(statearr_26901_26969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (2))){
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26849__$1,(4),ch);
} else {
if((state_val_26850 === (23))){
var state_26849__$1 = state_26849;
var statearr_26902_26970 = state_26849__$1;
(statearr_26902_26970[(2)] = null);

(statearr_26902_26970[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (35))){
var inst_26831 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26903_26971 = state_26849__$1;
(statearr_26903_26971[(2)] = inst_26831);

(statearr_26903_26971[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (19))){
var inst_26750 = (state_26849[(7)]);
var inst_26754 = cljs.core.chunk_first.call(null,inst_26750);
var inst_26755 = cljs.core.chunk_rest.call(null,inst_26750);
var inst_26756 = cljs.core.count.call(null,inst_26754);
var inst_26730 = inst_26755;
var inst_26731 = inst_26754;
var inst_26732 = inst_26756;
var inst_26733 = (0);
var state_26849__$1 = (function (){var statearr_26904 = state_26849;
(statearr_26904[(13)] = inst_26731);

(statearr_26904[(15)] = inst_26733);

(statearr_26904[(16)] = inst_26732);

(statearr_26904[(17)] = inst_26730);

return statearr_26904;
})();
var statearr_26905_26972 = state_26849__$1;
(statearr_26905_26972[(2)] = null);

(statearr_26905_26972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (11))){
var inst_26750 = (state_26849[(7)]);
var inst_26730 = (state_26849[(17)]);
var inst_26750__$1 = cljs.core.seq.call(null,inst_26730);
var state_26849__$1 = (function (){var statearr_26906 = state_26849;
(statearr_26906[(7)] = inst_26750__$1);

return statearr_26906;
})();
if(inst_26750__$1){
var statearr_26907_26973 = state_26849__$1;
(statearr_26907_26973[(1)] = (16));

} else {
var statearr_26908_26974 = state_26849__$1;
(statearr_26908_26974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (9))){
var inst_26778 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26909_26975 = state_26849__$1;
(statearr_26909_26975[(2)] = inst_26778);

(statearr_26909_26975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (5))){
var inst_26728 = cljs.core.deref.call(null,cs);
var inst_26729 = cljs.core.seq.call(null,inst_26728);
var inst_26730 = inst_26729;
var inst_26731 = null;
var inst_26732 = (0);
var inst_26733 = (0);
var state_26849__$1 = (function (){var statearr_26910 = state_26849;
(statearr_26910[(13)] = inst_26731);

(statearr_26910[(15)] = inst_26733);

(statearr_26910[(16)] = inst_26732);

(statearr_26910[(17)] = inst_26730);

return statearr_26910;
})();
var statearr_26911_26976 = state_26849__$1;
(statearr_26911_26976[(2)] = null);

(statearr_26911_26976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (14))){
var state_26849__$1 = state_26849;
var statearr_26912_26977 = state_26849__$1;
(statearr_26912_26977[(2)] = null);

(statearr_26912_26977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (45))){
var inst_26839 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26913_26978 = state_26849__$1;
(statearr_26913_26978[(2)] = inst_26839);

(statearr_26913_26978[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (26))){
var inst_26781 = (state_26849[(29)]);
var inst_26835 = (state_26849[(2)]);
var inst_26836 = cljs.core.seq.call(null,inst_26781);
var state_26849__$1 = (function (){var statearr_26914 = state_26849;
(statearr_26914[(31)] = inst_26835);

return statearr_26914;
})();
if(inst_26836){
var statearr_26915_26979 = state_26849__$1;
(statearr_26915_26979[(1)] = (42));

} else {
var statearr_26916_26980 = state_26849__$1;
(statearr_26916_26980[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (16))){
var inst_26750 = (state_26849[(7)]);
var inst_26752 = cljs.core.chunked_seq_QMARK_.call(null,inst_26750);
var state_26849__$1 = state_26849;
if(inst_26752){
var statearr_26917_26981 = state_26849__$1;
(statearr_26917_26981[(1)] = (19));

} else {
var statearr_26918_26982 = state_26849__$1;
(statearr_26918_26982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (38))){
var inst_26828 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26919_26983 = state_26849__$1;
(statearr_26919_26983[(2)] = inst_26828);

(statearr_26919_26983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (30))){
var state_26849__$1 = state_26849;
var statearr_26920_26984 = state_26849__$1;
(statearr_26920_26984[(2)] = null);

(statearr_26920_26984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (10))){
var inst_26731 = (state_26849[(13)]);
var inst_26733 = (state_26849[(15)]);
var inst_26739 = cljs.core._nth.call(null,inst_26731,inst_26733);
var inst_26740 = cljs.core.nth.call(null,inst_26739,(0),null);
var inst_26741 = cljs.core.nth.call(null,inst_26739,(1),null);
var state_26849__$1 = (function (){var statearr_26921 = state_26849;
(statearr_26921[(26)] = inst_26740);

return statearr_26921;
})();
if(cljs.core.truth_(inst_26741)){
var statearr_26922_26985 = state_26849__$1;
(statearr_26922_26985[(1)] = (13));

} else {
var statearr_26923_26986 = state_26849__$1;
(statearr_26923_26986[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (18))){
var inst_26774 = (state_26849[(2)]);
var state_26849__$1 = state_26849;
var statearr_26924_26987 = state_26849__$1;
(statearr_26924_26987[(2)] = inst_26774);

(statearr_26924_26987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (42))){
var state_26849__$1 = state_26849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26849__$1,(45),dchan);
} else {
if((state_val_26850 === (37))){
var inst_26721 = (state_26849[(12)]);
var inst_26808 = (state_26849[(25)]);
var inst_26817 = (state_26849[(23)]);
var inst_26817__$1 = cljs.core.first.call(null,inst_26808);
var inst_26818 = cljs.core.async.put_BANG_.call(null,inst_26817__$1,inst_26721,done);
var state_26849__$1 = (function (){var statearr_26925 = state_26849;
(statearr_26925[(23)] = inst_26817__$1);

return statearr_26925;
})();
if(cljs.core.truth_(inst_26818)){
var statearr_26926_26988 = state_26849__$1;
(statearr_26926_26988[(1)] = (39));

} else {
var statearr_26927_26989 = state_26849__$1;
(statearr_26927_26989[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26850 === (8))){
var inst_26733 = (state_26849[(15)]);
var inst_26732 = (state_26849[(16)]);
var inst_26735 = (inst_26733 < inst_26732);
var inst_26736 = inst_26735;
var state_26849__$1 = state_26849;
if(cljs.core.truth_(inst_26736)){
var statearr_26928_26990 = state_26849__$1;
(statearr_26928_26990[(1)] = (10));

} else {
var statearr_26929_26991 = state_26849__$1;
(statearr_26929_26991[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___26937,cs,m,dchan,dctr,done))
;
return ((function (switch__20738__auto__,c__20800__auto___26937,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20739__auto__ = null;
var cljs$core$async$mult_$_state_machine__20739__auto____0 = (function (){
var statearr_26933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26933[(0)] = cljs$core$async$mult_$_state_machine__20739__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var cljs$core$async$mult_$_state_machine__20739__auto____1 = (function (state_26849){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_26849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object)){
var ex__20742__auto__ = e26934;
var statearr_26935_26992 = state_26849;
(statearr_26935_26992[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26993 = state_26849;
state_26849 = G__26993;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20739__auto__ = function(state_26849){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20739__auto____1.call(this,state_26849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20739__auto____0;
cljs$core$async$mult_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20739__auto____1;
return cljs$core$async$mult_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___26937,cs,m,dchan,dctr,done))
})();
var state__20802__auto__ = (function (){var statearr_26936 = f__20801__auto__.call(null);
(statearr_26936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___26937);

return statearr_26936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___26937,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26995 = arguments.length;
switch (G__26995) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26998 = {};
return obj26998;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16897__auto__ = m;
if(and__16897__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17545__auto__ = (((m == null))?null:m);
return (function (){var or__16909__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17949__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17949__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27003){
var map__27004 = p__27003;
var map__27004__$1 = ((cljs.core.seq_QMARK_.call(null,map__27004))?cljs.core.apply.call(null,cljs.core.hash_map,map__27004):map__27004);
var opts = map__27004__$1;
var statearr_27005_27008 = state;
(statearr_27005_27008[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27004,map__27004__$1,opts){
return (function (val){
var statearr_27006_27009 = state;
(statearr_27006_27009[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27004,map__27004__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27007_27010 = state;
(statearr_27007_27010[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26999){
var G__27000 = cljs.core.first.call(null,seq26999);
var seq26999__$1 = cljs.core.next.call(null,seq26999);
var G__27001 = cljs.core.first.call(null,seq26999__$1);
var seq26999__$2 = cljs.core.next.call(null,seq26999__$1);
var G__27002 = cljs.core.first.call(null,seq26999__$2);
var seq26999__$3 = cljs.core.next.call(null,seq26999__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27000,G__27001,G__27002,seq26999__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27130 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27130 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27131){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27131 = meta27131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27132,meta27131__$1){
var self__ = this;
var _27132__$1 = this;
return (new cljs.core.async.t27130(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27131__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27132){
var self__ = this;
var _27132__$1 = this;
return self__.meta27131;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27130.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27131","meta27131",1660109521,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27130.cljs$lang$type = true;

cljs.core.async.t27130.cljs$lang$ctorStr = "cljs.core.async/t27130";

cljs.core.async.t27130.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27130");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27130 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27130(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27131){
return (new cljs.core.async.t27130(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27131));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27130(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20800__auto___27249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27202){
var state_val_27203 = (state_27202[(1)]);
if((state_val_27203 === (7))){
var inst_27146 = (state_27202[(7)]);
var inst_27151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27146);
var state_27202__$1 = state_27202;
var statearr_27204_27250 = state_27202__$1;
(statearr_27204_27250[(2)] = inst_27151);

(statearr_27204_27250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (20))){
var inst_27161 = (state_27202[(8)]);
var state_27202__$1 = state_27202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27202__$1,(23),out,inst_27161);
} else {
if((state_val_27203 === (1))){
var inst_27136 = (state_27202[(9)]);
var inst_27136__$1 = calc_state.call(null);
var inst_27137 = cljs.core.seq_QMARK_.call(null,inst_27136__$1);
var state_27202__$1 = (function (){var statearr_27205 = state_27202;
(statearr_27205[(9)] = inst_27136__$1);

return statearr_27205;
})();
if(inst_27137){
var statearr_27206_27251 = state_27202__$1;
(statearr_27206_27251[(1)] = (2));

} else {
var statearr_27207_27252 = state_27202__$1;
(statearr_27207_27252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (24))){
var inst_27154 = (state_27202[(10)]);
var inst_27146 = inst_27154;
var state_27202__$1 = (function (){var statearr_27208 = state_27202;
(statearr_27208[(7)] = inst_27146);

return statearr_27208;
})();
var statearr_27209_27253 = state_27202__$1;
(statearr_27209_27253[(2)] = null);

(statearr_27209_27253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (4))){
var inst_27136 = (state_27202[(9)]);
var inst_27142 = (state_27202[(2)]);
var inst_27143 = cljs.core.get.call(null,inst_27142,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27144 = cljs.core.get.call(null,inst_27142,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27145 = cljs.core.get.call(null,inst_27142,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27146 = inst_27136;
var state_27202__$1 = (function (){var statearr_27210 = state_27202;
(statearr_27210[(11)] = inst_27144);

(statearr_27210[(7)] = inst_27146);

(statearr_27210[(12)] = inst_27143);

(statearr_27210[(13)] = inst_27145);

return statearr_27210;
})();
var statearr_27211_27254 = state_27202__$1;
(statearr_27211_27254[(2)] = null);

(statearr_27211_27254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (15))){
var state_27202__$1 = state_27202;
var statearr_27212_27255 = state_27202__$1;
(statearr_27212_27255[(2)] = null);

(statearr_27212_27255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (21))){
var inst_27154 = (state_27202[(10)]);
var inst_27146 = inst_27154;
var state_27202__$1 = (function (){var statearr_27213 = state_27202;
(statearr_27213[(7)] = inst_27146);

return statearr_27213;
})();
var statearr_27214_27256 = state_27202__$1;
(statearr_27214_27256[(2)] = null);

(statearr_27214_27256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (13))){
var inst_27198 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
var statearr_27215_27257 = state_27202__$1;
(statearr_27215_27257[(2)] = inst_27198);

(statearr_27215_27257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (22))){
var inst_27196 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
var statearr_27216_27258 = state_27202__$1;
(statearr_27216_27258[(2)] = inst_27196);

(statearr_27216_27258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (6))){
var inst_27200 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27202__$1,inst_27200);
} else {
if((state_val_27203 === (25))){
var state_27202__$1 = state_27202;
var statearr_27217_27259 = state_27202__$1;
(statearr_27217_27259[(2)] = null);

(statearr_27217_27259[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (17))){
var inst_27176 = (state_27202[(14)]);
var state_27202__$1 = state_27202;
var statearr_27218_27260 = state_27202__$1;
(statearr_27218_27260[(2)] = inst_27176);

(statearr_27218_27260[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (3))){
var inst_27136 = (state_27202[(9)]);
var state_27202__$1 = state_27202;
var statearr_27219_27261 = state_27202__$1;
(statearr_27219_27261[(2)] = inst_27136);

(statearr_27219_27261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (12))){
var inst_27155 = (state_27202[(15)]);
var inst_27162 = (state_27202[(16)]);
var inst_27176 = (state_27202[(14)]);
var inst_27176__$1 = inst_27155.call(null,inst_27162);
var state_27202__$1 = (function (){var statearr_27220 = state_27202;
(statearr_27220[(14)] = inst_27176__$1);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27176__$1)){
var statearr_27221_27262 = state_27202__$1;
(statearr_27221_27262[(1)] = (17));

} else {
var statearr_27222_27263 = state_27202__$1;
(statearr_27222_27263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (2))){
var inst_27136 = (state_27202[(9)]);
var inst_27139 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27136);
var state_27202__$1 = state_27202;
var statearr_27223_27264 = state_27202__$1;
(statearr_27223_27264[(2)] = inst_27139);

(statearr_27223_27264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (23))){
var inst_27187 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
if(cljs.core.truth_(inst_27187)){
var statearr_27224_27265 = state_27202__$1;
(statearr_27224_27265[(1)] = (24));

} else {
var statearr_27225_27266 = state_27202__$1;
(statearr_27225_27266[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (19))){
var inst_27184 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
if(cljs.core.truth_(inst_27184)){
var statearr_27226_27267 = state_27202__$1;
(statearr_27226_27267[(1)] = (20));

} else {
var statearr_27227_27268 = state_27202__$1;
(statearr_27227_27268[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (11))){
var inst_27161 = (state_27202[(8)]);
var inst_27167 = (inst_27161 == null);
var state_27202__$1 = state_27202;
if(cljs.core.truth_(inst_27167)){
var statearr_27228_27269 = state_27202__$1;
(statearr_27228_27269[(1)] = (14));

} else {
var statearr_27229_27270 = state_27202__$1;
(statearr_27229_27270[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (9))){
var inst_27154 = (state_27202[(10)]);
var inst_27154__$1 = (state_27202[(2)]);
var inst_27155 = cljs.core.get.call(null,inst_27154__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27156 = cljs.core.get.call(null,inst_27154__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27157 = cljs.core.get.call(null,inst_27154__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27202__$1 = (function (){var statearr_27230 = state_27202;
(statearr_27230[(15)] = inst_27155);

(statearr_27230[(10)] = inst_27154__$1);

(statearr_27230[(17)] = inst_27156);

return statearr_27230;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27202__$1,(10),inst_27157);
} else {
if((state_val_27203 === (5))){
var inst_27146 = (state_27202[(7)]);
var inst_27149 = cljs.core.seq_QMARK_.call(null,inst_27146);
var state_27202__$1 = state_27202;
if(inst_27149){
var statearr_27231_27271 = state_27202__$1;
(statearr_27231_27271[(1)] = (7));

} else {
var statearr_27232_27272 = state_27202__$1;
(statearr_27232_27272[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (14))){
var inst_27162 = (state_27202[(16)]);
var inst_27169 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27162);
var state_27202__$1 = state_27202;
var statearr_27233_27273 = state_27202__$1;
(statearr_27233_27273[(2)] = inst_27169);

(statearr_27233_27273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (26))){
var inst_27192 = (state_27202[(2)]);
var state_27202__$1 = state_27202;
var statearr_27234_27274 = state_27202__$1;
(statearr_27234_27274[(2)] = inst_27192);

(statearr_27234_27274[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (16))){
var inst_27172 = (state_27202[(2)]);
var inst_27173 = calc_state.call(null);
var inst_27146 = inst_27173;
var state_27202__$1 = (function (){var statearr_27235 = state_27202;
(statearr_27235[(7)] = inst_27146);

(statearr_27235[(18)] = inst_27172);

return statearr_27235;
})();
var statearr_27236_27275 = state_27202__$1;
(statearr_27236_27275[(2)] = null);

(statearr_27236_27275[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (10))){
var inst_27162 = (state_27202[(16)]);
var inst_27161 = (state_27202[(8)]);
var inst_27160 = (state_27202[(2)]);
var inst_27161__$1 = cljs.core.nth.call(null,inst_27160,(0),null);
var inst_27162__$1 = cljs.core.nth.call(null,inst_27160,(1),null);
var inst_27163 = (inst_27161__$1 == null);
var inst_27164 = cljs.core._EQ_.call(null,inst_27162__$1,change);
var inst_27165 = (inst_27163) || (inst_27164);
var state_27202__$1 = (function (){var statearr_27237 = state_27202;
(statearr_27237[(16)] = inst_27162__$1);

(statearr_27237[(8)] = inst_27161__$1);

return statearr_27237;
})();
if(cljs.core.truth_(inst_27165)){
var statearr_27238_27276 = state_27202__$1;
(statearr_27238_27276[(1)] = (11));

} else {
var statearr_27239_27277 = state_27202__$1;
(statearr_27239_27277[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (18))){
var inst_27155 = (state_27202[(15)]);
var inst_27162 = (state_27202[(16)]);
var inst_27156 = (state_27202[(17)]);
var inst_27179 = cljs.core.empty_QMARK_.call(null,inst_27155);
var inst_27180 = inst_27156.call(null,inst_27162);
var inst_27181 = cljs.core.not.call(null,inst_27180);
var inst_27182 = (inst_27179) && (inst_27181);
var state_27202__$1 = state_27202;
var statearr_27240_27278 = state_27202__$1;
(statearr_27240_27278[(2)] = inst_27182);

(statearr_27240_27278[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27203 === (8))){
var inst_27146 = (state_27202[(7)]);
var state_27202__$1 = state_27202;
var statearr_27241_27279 = state_27202__$1;
(statearr_27241_27279[(2)] = inst_27146);

(statearr_27241_27279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20738__auto__,c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20739__auto__ = null;
var cljs$core$async$mix_$_state_machine__20739__auto____0 = (function (){
var statearr_27245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27245[(0)] = cljs$core$async$mix_$_state_machine__20739__auto__);

(statearr_27245[(1)] = (1));

return statearr_27245;
});
var cljs$core$async$mix_$_state_machine__20739__auto____1 = (function (state_27202){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27246){if((e27246 instanceof Object)){
var ex__20742__auto__ = e27246;
var statearr_27247_27280 = state_27202;
(statearr_27247_27280[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27281 = state_27202;
state_27202 = G__27281;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20739__auto__ = function(state_27202){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20739__auto____1.call(this,state_27202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20739__auto____0;
cljs$core$async$mix_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20739__auto____1;
return cljs$core$async$mix_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20802__auto__ = (function (){var statearr_27248 = f__20801__auto__.call(null);
(statearr_27248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27249);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27249,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27283 = {};
return obj27283;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16897__auto__ = p;
if(and__16897__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16897__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17545__auto__ = (((p == null))?null:p);
return (function (){var or__16909__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16897__auto__ = p;
if(and__16897__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16897__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17545__auto__ = (((p == null))?null:p);
return (function (){var or__16909__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27285 = arguments.length;
switch (G__27285) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__16897__auto__ = p;
if(and__16897__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16897__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17545__auto__ = (((p == null))?null:p);
return (function (){var or__16909__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16897__auto__ = p;
if(and__16897__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16897__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17545__auto__ = (((p == null))?null:p);
return (function (){var or__16909__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17545__auto__)]);
if(or__16909__auto__){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16909__auto____$1){
return or__16909__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27289 = arguments.length;
switch (G__27289) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16909__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16909__auto__,mults){
return (function (p1__27287_SHARP_){
if(cljs.core.truth_(p1__27287_SHARP_.call(null,topic))){
return p1__27287_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27287_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16909__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27290 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27291){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27291 = meta27291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27292,meta27291__$1){
var self__ = this;
var _27292__$1 = this;
return (new cljs.core.async.t27290(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27291__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27292){
var self__ = this;
var _27292__$1 = this;
return self__.meta27291;
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27290.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27290.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27290.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27291","meta27291",1539030475,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27290.cljs$lang$type = true;

cljs.core.async.t27290.cljs$lang$ctorStr = "cljs.core.async/t27290";

cljs.core.async.t27290.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27290");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27290 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27291){
return (new cljs.core.async.t27290(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27291));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27290(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20800__auto___27413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27413,mults,ensure_mult,p){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27413,mults,ensure_mult,p){
return (function (state_27364){
var state_val_27365 = (state_27364[(1)]);
if((state_val_27365 === (7))){
var inst_27360 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27366_27414 = state_27364__$1;
(statearr_27366_27414[(2)] = inst_27360);

(statearr_27366_27414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (20))){
var state_27364__$1 = state_27364;
var statearr_27367_27415 = state_27364__$1;
(statearr_27367_27415[(2)] = null);

(statearr_27367_27415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (1))){
var state_27364__$1 = state_27364;
var statearr_27368_27416 = state_27364__$1;
(statearr_27368_27416[(2)] = null);

(statearr_27368_27416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (24))){
var inst_27343 = (state_27364[(7)]);
var inst_27352 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27343);
var state_27364__$1 = state_27364;
var statearr_27369_27417 = state_27364__$1;
(statearr_27369_27417[(2)] = inst_27352);

(statearr_27369_27417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (4))){
var inst_27295 = (state_27364[(8)]);
var inst_27295__$1 = (state_27364[(2)]);
var inst_27296 = (inst_27295__$1 == null);
var state_27364__$1 = (function (){var statearr_27370 = state_27364;
(statearr_27370[(8)] = inst_27295__$1);

return statearr_27370;
})();
if(cljs.core.truth_(inst_27296)){
var statearr_27371_27418 = state_27364__$1;
(statearr_27371_27418[(1)] = (5));

} else {
var statearr_27372_27419 = state_27364__$1;
(statearr_27372_27419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (15))){
var inst_27337 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27373_27420 = state_27364__$1;
(statearr_27373_27420[(2)] = inst_27337);

(statearr_27373_27420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (21))){
var inst_27357 = (state_27364[(2)]);
var state_27364__$1 = (function (){var statearr_27374 = state_27364;
(statearr_27374[(9)] = inst_27357);

return statearr_27374;
})();
var statearr_27375_27421 = state_27364__$1;
(statearr_27375_27421[(2)] = null);

(statearr_27375_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (13))){
var inst_27319 = (state_27364[(10)]);
var inst_27321 = cljs.core.chunked_seq_QMARK_.call(null,inst_27319);
var state_27364__$1 = state_27364;
if(inst_27321){
var statearr_27376_27422 = state_27364__$1;
(statearr_27376_27422[(1)] = (16));

} else {
var statearr_27377_27423 = state_27364__$1;
(statearr_27377_27423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (22))){
var inst_27349 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27349)){
var statearr_27378_27424 = state_27364__$1;
(statearr_27378_27424[(1)] = (23));

} else {
var statearr_27379_27425 = state_27364__$1;
(statearr_27379_27425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (6))){
var inst_27295 = (state_27364[(8)]);
var inst_27345 = (state_27364[(11)]);
var inst_27343 = (state_27364[(7)]);
var inst_27343__$1 = topic_fn.call(null,inst_27295);
var inst_27344 = cljs.core.deref.call(null,mults);
var inst_27345__$1 = cljs.core.get.call(null,inst_27344,inst_27343__$1);
var state_27364__$1 = (function (){var statearr_27380 = state_27364;
(statearr_27380[(11)] = inst_27345__$1);

(statearr_27380[(7)] = inst_27343__$1);

return statearr_27380;
})();
if(cljs.core.truth_(inst_27345__$1)){
var statearr_27381_27426 = state_27364__$1;
(statearr_27381_27426[(1)] = (19));

} else {
var statearr_27382_27427 = state_27364__$1;
(statearr_27382_27427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (25))){
var inst_27354 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27383_27428 = state_27364__$1;
(statearr_27383_27428[(2)] = inst_27354);

(statearr_27383_27428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (17))){
var inst_27319 = (state_27364[(10)]);
var inst_27328 = cljs.core.first.call(null,inst_27319);
var inst_27329 = cljs.core.async.muxch_STAR_.call(null,inst_27328);
var inst_27330 = cljs.core.async.close_BANG_.call(null,inst_27329);
var inst_27331 = cljs.core.next.call(null,inst_27319);
var inst_27305 = inst_27331;
var inst_27306 = null;
var inst_27307 = (0);
var inst_27308 = (0);
var state_27364__$1 = (function (){var statearr_27384 = state_27364;
(statearr_27384[(12)] = inst_27308);

(statearr_27384[(13)] = inst_27307);

(statearr_27384[(14)] = inst_27330);

(statearr_27384[(15)] = inst_27306);

(statearr_27384[(16)] = inst_27305);

return statearr_27384;
})();
var statearr_27385_27429 = state_27364__$1;
(statearr_27385_27429[(2)] = null);

(statearr_27385_27429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (3))){
var inst_27362 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27364__$1,inst_27362);
} else {
if((state_val_27365 === (12))){
var inst_27339 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27386_27430 = state_27364__$1;
(statearr_27386_27430[(2)] = inst_27339);

(statearr_27386_27430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (2))){
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27364__$1,(4),ch);
} else {
if((state_val_27365 === (23))){
var state_27364__$1 = state_27364;
var statearr_27387_27431 = state_27364__$1;
(statearr_27387_27431[(2)] = null);

(statearr_27387_27431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (19))){
var inst_27295 = (state_27364[(8)]);
var inst_27345 = (state_27364[(11)]);
var inst_27347 = cljs.core.async.muxch_STAR_.call(null,inst_27345);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27364__$1,(22),inst_27347,inst_27295);
} else {
if((state_val_27365 === (11))){
var inst_27319 = (state_27364[(10)]);
var inst_27305 = (state_27364[(16)]);
var inst_27319__$1 = cljs.core.seq.call(null,inst_27305);
var state_27364__$1 = (function (){var statearr_27388 = state_27364;
(statearr_27388[(10)] = inst_27319__$1);

return statearr_27388;
})();
if(inst_27319__$1){
var statearr_27389_27432 = state_27364__$1;
(statearr_27389_27432[(1)] = (13));

} else {
var statearr_27390_27433 = state_27364__$1;
(statearr_27390_27433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (9))){
var inst_27341 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27391_27434 = state_27364__$1;
(statearr_27391_27434[(2)] = inst_27341);

(statearr_27391_27434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (5))){
var inst_27302 = cljs.core.deref.call(null,mults);
var inst_27303 = cljs.core.vals.call(null,inst_27302);
var inst_27304 = cljs.core.seq.call(null,inst_27303);
var inst_27305 = inst_27304;
var inst_27306 = null;
var inst_27307 = (0);
var inst_27308 = (0);
var state_27364__$1 = (function (){var statearr_27392 = state_27364;
(statearr_27392[(12)] = inst_27308);

(statearr_27392[(13)] = inst_27307);

(statearr_27392[(15)] = inst_27306);

(statearr_27392[(16)] = inst_27305);

return statearr_27392;
})();
var statearr_27393_27435 = state_27364__$1;
(statearr_27393_27435[(2)] = null);

(statearr_27393_27435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (14))){
var state_27364__$1 = state_27364;
var statearr_27397_27436 = state_27364__$1;
(statearr_27397_27436[(2)] = null);

(statearr_27397_27436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (16))){
var inst_27319 = (state_27364[(10)]);
var inst_27323 = cljs.core.chunk_first.call(null,inst_27319);
var inst_27324 = cljs.core.chunk_rest.call(null,inst_27319);
var inst_27325 = cljs.core.count.call(null,inst_27323);
var inst_27305 = inst_27324;
var inst_27306 = inst_27323;
var inst_27307 = inst_27325;
var inst_27308 = (0);
var state_27364__$1 = (function (){var statearr_27398 = state_27364;
(statearr_27398[(12)] = inst_27308);

(statearr_27398[(13)] = inst_27307);

(statearr_27398[(15)] = inst_27306);

(statearr_27398[(16)] = inst_27305);

return statearr_27398;
})();
var statearr_27399_27437 = state_27364__$1;
(statearr_27399_27437[(2)] = null);

(statearr_27399_27437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (10))){
var inst_27308 = (state_27364[(12)]);
var inst_27307 = (state_27364[(13)]);
var inst_27306 = (state_27364[(15)]);
var inst_27305 = (state_27364[(16)]);
var inst_27313 = cljs.core._nth.call(null,inst_27306,inst_27308);
var inst_27314 = cljs.core.async.muxch_STAR_.call(null,inst_27313);
var inst_27315 = cljs.core.async.close_BANG_.call(null,inst_27314);
var inst_27316 = (inst_27308 + (1));
var tmp27394 = inst_27307;
var tmp27395 = inst_27306;
var tmp27396 = inst_27305;
var inst_27305__$1 = tmp27396;
var inst_27306__$1 = tmp27395;
var inst_27307__$1 = tmp27394;
var inst_27308__$1 = inst_27316;
var state_27364__$1 = (function (){var statearr_27400 = state_27364;
(statearr_27400[(12)] = inst_27308__$1);

(statearr_27400[(13)] = inst_27307__$1);

(statearr_27400[(17)] = inst_27315);

(statearr_27400[(15)] = inst_27306__$1);

(statearr_27400[(16)] = inst_27305__$1);

return statearr_27400;
})();
var statearr_27401_27438 = state_27364__$1;
(statearr_27401_27438[(2)] = null);

(statearr_27401_27438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (18))){
var inst_27334 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27402_27439 = state_27364__$1;
(statearr_27402_27439[(2)] = inst_27334);

(statearr_27402_27439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (8))){
var inst_27308 = (state_27364[(12)]);
var inst_27307 = (state_27364[(13)]);
var inst_27310 = (inst_27308 < inst_27307);
var inst_27311 = inst_27310;
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27311)){
var statearr_27403_27440 = state_27364__$1;
(statearr_27403_27440[(1)] = (10));

} else {
var statearr_27404_27441 = state_27364__$1;
(statearr_27404_27441[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27413,mults,ensure_mult,p))
;
return ((function (switch__20738__auto__,c__20800__auto___27413,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_27364){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__20742__auto__ = e27409;
var statearr_27410_27442 = state_27364;
(statearr_27410_27442[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27443 = state_27364;
state_27364 = G__27443;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_27364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_27364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27413,mults,ensure_mult,p))
})();
var state__20802__auto__ = (function (){var statearr_27411 = f__20801__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27413);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27413,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27445 = arguments.length;
switch (G__27445) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27448 = arguments.length;
switch (G__27448) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27451 = arguments.length;
switch (G__27451) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20800__auto___27521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (7))){
var state_27490__$1 = state_27490;
var statearr_27492_27522 = state_27490__$1;
(statearr_27492_27522[(2)] = null);

(statearr_27492_27522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (1))){
var state_27490__$1 = state_27490;
var statearr_27493_27523 = state_27490__$1;
(statearr_27493_27523[(2)] = null);

(statearr_27493_27523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (4))){
var inst_27454 = (state_27490[(7)]);
var inst_27456 = (inst_27454 < cnt);
var state_27490__$1 = state_27490;
if(cljs.core.truth_(inst_27456)){
var statearr_27494_27524 = state_27490__$1;
(statearr_27494_27524[(1)] = (6));

} else {
var statearr_27495_27525 = state_27490__$1;
(statearr_27495_27525[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (15))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27496_27526 = state_27490__$1;
(statearr_27496_27526[(2)] = inst_27486);

(statearr_27496_27526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (13))){
var inst_27479 = cljs.core.async.close_BANG_.call(null,out);
var state_27490__$1 = state_27490;
var statearr_27497_27527 = state_27490__$1;
(statearr_27497_27527[(2)] = inst_27479);

(statearr_27497_27527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (6))){
var state_27490__$1 = state_27490;
var statearr_27498_27528 = state_27490__$1;
(statearr_27498_27528[(2)] = null);

(statearr_27498_27528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (12))){
var inst_27476 = (state_27490[(8)]);
var inst_27476__$1 = (state_27490[(2)]);
var inst_27477 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27476__$1);
var state_27490__$1 = (function (){var statearr_27499 = state_27490;
(statearr_27499[(8)] = inst_27476__$1);

return statearr_27499;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27500_27529 = state_27490__$1;
(statearr_27500_27529[(1)] = (13));

} else {
var statearr_27501_27530 = state_27490__$1;
(statearr_27501_27530[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (2))){
var inst_27453 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27454 = (0);
var state_27490__$1 = (function (){var statearr_27502 = state_27490;
(statearr_27502[(9)] = inst_27453);

(statearr_27502[(7)] = inst_27454);

return statearr_27502;
})();
var statearr_27503_27531 = state_27490__$1;
(statearr_27503_27531[(2)] = null);

(statearr_27503_27531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (11))){
var inst_27454 = (state_27490[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27490,(10),Object,null,(9));
var inst_27463 = chs__$1.call(null,inst_27454);
var inst_27464 = done.call(null,inst_27454);
var inst_27465 = cljs.core.async.take_BANG_.call(null,inst_27463,inst_27464);
var state_27490__$1 = state_27490;
var statearr_27504_27532 = state_27490__$1;
(statearr_27504_27532[(2)] = inst_27465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (9))){
var inst_27454 = (state_27490[(7)]);
var inst_27467 = (state_27490[(2)]);
var inst_27468 = (inst_27454 + (1));
var inst_27454__$1 = inst_27468;
var state_27490__$1 = (function (){var statearr_27505 = state_27490;
(statearr_27505[(10)] = inst_27467);

(statearr_27505[(7)] = inst_27454__$1);

return statearr_27505;
})();
var statearr_27506_27533 = state_27490__$1;
(statearr_27506_27533[(2)] = null);

(statearr_27506_27533[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (5))){
var inst_27474 = (state_27490[(2)]);
var state_27490__$1 = (function (){var statearr_27507 = state_27490;
(statearr_27507[(11)] = inst_27474);

return statearr_27507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27490__$1,(12),dchan);
} else {
if((state_val_27491 === (14))){
var inst_27476 = (state_27490[(8)]);
var inst_27481 = cljs.core.apply.call(null,f,inst_27476);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27490__$1,(16),out,inst_27481);
} else {
if((state_val_27491 === (16))){
var inst_27483 = (state_27490[(2)]);
var state_27490__$1 = (function (){var statearr_27508 = state_27490;
(statearr_27508[(12)] = inst_27483);

return statearr_27508;
})();
var statearr_27509_27534 = state_27490__$1;
(statearr_27509_27534[(2)] = null);

(statearr_27509_27534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (10))){
var inst_27458 = (state_27490[(2)]);
var inst_27459 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27490__$1 = (function (){var statearr_27510 = state_27490;
(statearr_27510[(13)] = inst_27458);

return statearr_27510;
})();
var statearr_27511_27535 = state_27490__$1;
(statearr_27511_27535[(2)] = inst_27459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (8))){
var inst_27472 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27512_27536 = state_27490__$1;
(statearr_27512_27536[(2)] = inst_27472);

(statearr_27512_27536[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20738__auto__,c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_27516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27516[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_27516[(1)] = (1));

return statearr_27516;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_27490){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27517){if((e27517 instanceof Object)){
var ex__20742__auto__ = e27517;
var statearr_27518_27537 = state_27490;
(statearr_27518_27537[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27538 = state_27490;
state_27490 = G__27538;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20802__auto__ = (function (){var statearr_27519 = f__20801__auto__.call(null);
(statearr_27519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27521);

return statearr_27519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27521,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27541 = arguments.length;
switch (G__27541) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___27596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27596,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27596,out){
return (function (state_27571){
var state_val_27572 = (state_27571[(1)]);
if((state_val_27572 === (7))){
var inst_27551 = (state_27571[(7)]);
var inst_27550 = (state_27571[(8)]);
var inst_27550__$1 = (state_27571[(2)]);
var inst_27551__$1 = cljs.core.nth.call(null,inst_27550__$1,(0),null);
var inst_27552 = cljs.core.nth.call(null,inst_27550__$1,(1),null);
var inst_27553 = (inst_27551__$1 == null);
var state_27571__$1 = (function (){var statearr_27573 = state_27571;
(statearr_27573[(7)] = inst_27551__$1);

(statearr_27573[(9)] = inst_27552);

(statearr_27573[(8)] = inst_27550__$1);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27553)){
var statearr_27574_27597 = state_27571__$1;
(statearr_27574_27597[(1)] = (8));

} else {
var statearr_27575_27598 = state_27571__$1;
(statearr_27575_27598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (1))){
var inst_27542 = cljs.core.vec.call(null,chs);
var inst_27543 = inst_27542;
var state_27571__$1 = (function (){var statearr_27576 = state_27571;
(statearr_27576[(10)] = inst_27543);

return statearr_27576;
})();
var statearr_27577_27599 = state_27571__$1;
(statearr_27577_27599[(2)] = null);

(statearr_27577_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (4))){
var inst_27543 = (state_27571[(10)]);
var state_27571__$1 = state_27571;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27571__$1,(7),inst_27543);
} else {
if((state_val_27572 === (6))){
var inst_27567 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27578_27600 = state_27571__$1;
(statearr_27578_27600[(2)] = inst_27567);

(statearr_27578_27600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (3))){
var inst_27569 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27571__$1,inst_27569);
} else {
if((state_val_27572 === (2))){
var inst_27543 = (state_27571[(10)]);
var inst_27545 = cljs.core.count.call(null,inst_27543);
var inst_27546 = (inst_27545 > (0));
var state_27571__$1 = state_27571;
if(cljs.core.truth_(inst_27546)){
var statearr_27580_27601 = state_27571__$1;
(statearr_27580_27601[(1)] = (4));

} else {
var statearr_27581_27602 = state_27571__$1;
(statearr_27581_27602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (11))){
var inst_27543 = (state_27571[(10)]);
var inst_27560 = (state_27571[(2)]);
var tmp27579 = inst_27543;
var inst_27543__$1 = tmp27579;
var state_27571__$1 = (function (){var statearr_27582 = state_27571;
(statearr_27582[(10)] = inst_27543__$1);

(statearr_27582[(11)] = inst_27560);

return statearr_27582;
})();
var statearr_27583_27603 = state_27571__$1;
(statearr_27583_27603[(2)] = null);

(statearr_27583_27603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (9))){
var inst_27551 = (state_27571[(7)]);
var state_27571__$1 = state_27571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27571__$1,(11),out,inst_27551);
} else {
if((state_val_27572 === (5))){
var inst_27565 = cljs.core.async.close_BANG_.call(null,out);
var state_27571__$1 = state_27571;
var statearr_27584_27604 = state_27571__$1;
(statearr_27584_27604[(2)] = inst_27565);

(statearr_27584_27604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (10))){
var inst_27563 = (state_27571[(2)]);
var state_27571__$1 = state_27571;
var statearr_27585_27605 = state_27571__$1;
(statearr_27585_27605[(2)] = inst_27563);

(statearr_27585_27605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27572 === (8))){
var inst_27551 = (state_27571[(7)]);
var inst_27552 = (state_27571[(9)]);
var inst_27543 = (state_27571[(10)]);
var inst_27550 = (state_27571[(8)]);
var inst_27555 = (function (){var cs = inst_27543;
var vec__27548 = inst_27550;
var v = inst_27551;
var c = inst_27552;
return ((function (cs,vec__27548,v,c,inst_27551,inst_27552,inst_27543,inst_27550,state_val_27572,c__20800__auto___27596,out){
return (function (p1__27539_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27539_SHARP_);
});
;})(cs,vec__27548,v,c,inst_27551,inst_27552,inst_27543,inst_27550,state_val_27572,c__20800__auto___27596,out))
})();
var inst_27556 = cljs.core.filterv.call(null,inst_27555,inst_27543);
var inst_27543__$1 = inst_27556;
var state_27571__$1 = (function (){var statearr_27586 = state_27571;
(statearr_27586[(10)] = inst_27543__$1);

return statearr_27586;
})();
var statearr_27587_27606 = state_27571__$1;
(statearr_27587_27606[(2)] = null);

(statearr_27587_27606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27596,out))
;
return ((function (switch__20738__auto__,c__20800__auto___27596,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_27571){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__20742__auto__ = e27592;
var statearr_27593_27607 = state_27571;
(statearr_27593_27607[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27608 = state_27571;
state_27571 = G__27608;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_27571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_27571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27596,out))
})();
var state__20802__auto__ = (function (){var statearr_27594 = f__20801__auto__.call(null);
(statearr_27594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27596);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27596,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27610 = arguments.length;
switch (G__27610) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___27658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27658,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27658,out){
return (function (state_27634){
var state_val_27635 = (state_27634[(1)]);
if((state_val_27635 === (7))){
var inst_27616 = (state_27634[(7)]);
var inst_27616__$1 = (state_27634[(2)]);
var inst_27617 = (inst_27616__$1 == null);
var inst_27618 = cljs.core.not.call(null,inst_27617);
var state_27634__$1 = (function (){var statearr_27636 = state_27634;
(statearr_27636[(7)] = inst_27616__$1);

return statearr_27636;
})();
if(inst_27618){
var statearr_27637_27659 = state_27634__$1;
(statearr_27637_27659[(1)] = (8));

} else {
var statearr_27638_27660 = state_27634__$1;
(statearr_27638_27660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (1))){
var inst_27611 = (0);
var state_27634__$1 = (function (){var statearr_27639 = state_27634;
(statearr_27639[(8)] = inst_27611);

return statearr_27639;
})();
var statearr_27640_27661 = state_27634__$1;
(statearr_27640_27661[(2)] = null);

(statearr_27640_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (4))){
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27634__$1,(7),ch);
} else {
if((state_val_27635 === (6))){
var inst_27629 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27641_27662 = state_27634__$1;
(statearr_27641_27662[(2)] = inst_27629);

(statearr_27641_27662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (3))){
var inst_27631 = (state_27634[(2)]);
var inst_27632 = cljs.core.async.close_BANG_.call(null,out);
var state_27634__$1 = (function (){var statearr_27642 = state_27634;
(statearr_27642[(9)] = inst_27631);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27634__$1,inst_27632);
} else {
if((state_val_27635 === (2))){
var inst_27611 = (state_27634[(8)]);
var inst_27613 = (inst_27611 < n);
var state_27634__$1 = state_27634;
if(cljs.core.truth_(inst_27613)){
var statearr_27643_27663 = state_27634__$1;
(statearr_27643_27663[(1)] = (4));

} else {
var statearr_27644_27664 = state_27634__$1;
(statearr_27644_27664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (11))){
var inst_27611 = (state_27634[(8)]);
var inst_27621 = (state_27634[(2)]);
var inst_27622 = (inst_27611 + (1));
var inst_27611__$1 = inst_27622;
var state_27634__$1 = (function (){var statearr_27645 = state_27634;
(statearr_27645[(10)] = inst_27621);

(statearr_27645[(8)] = inst_27611__$1);

return statearr_27645;
})();
var statearr_27646_27665 = state_27634__$1;
(statearr_27646_27665[(2)] = null);

(statearr_27646_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (9))){
var state_27634__$1 = state_27634;
var statearr_27647_27666 = state_27634__$1;
(statearr_27647_27666[(2)] = null);

(statearr_27647_27666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (5))){
var state_27634__$1 = state_27634;
var statearr_27648_27667 = state_27634__$1;
(statearr_27648_27667[(2)] = null);

(statearr_27648_27667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (10))){
var inst_27626 = (state_27634[(2)]);
var state_27634__$1 = state_27634;
var statearr_27649_27668 = state_27634__$1;
(statearr_27649_27668[(2)] = inst_27626);

(statearr_27649_27668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27635 === (8))){
var inst_27616 = (state_27634[(7)]);
var state_27634__$1 = state_27634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27634__$1,(11),out,inst_27616);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27658,out))
;
return ((function (switch__20738__auto__,c__20800__auto___27658,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_27653 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27653[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_27653[(1)] = (1));

return statearr_27653;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_27634){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27654){if((e27654 instanceof Object)){
var ex__20742__auto__ = e27654;
var statearr_27655_27669 = state_27634;
(statearr_27655_27669[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27670 = state_27634;
state_27634 = G__27670;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_27634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_27634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27658,out))
})();
var state__20802__auto__ = (function (){var statearr_27656 = f__20801__auto__.call(null);
(statearr_27656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27658);

return statearr_27656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27658,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27678 = (function (map_LT_,f,ch,meta27679){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27679 = meta27679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27680,meta27679__$1){
var self__ = this;
var _27680__$1 = this;
return (new cljs.core.async.t27678(self__.map_LT_,self__.f,self__.ch,meta27679__$1));
});

cljs.core.async.t27678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27680){
var self__ = this;
var _27680__$1 = this;
return self__.meta27679;
});

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27681 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27681 = (function (map_LT_,f,ch,meta27679,_,fn1,meta27682){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27679 = meta27679;
this._ = _;
this.fn1 = fn1;
this.meta27682 = meta27682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27683,meta27682__$1){
var self__ = this;
var _27683__$1 = this;
return (new cljs.core.async.t27681(self__.map_LT_,self__.f,self__.ch,self__.meta27679,self__._,self__.fn1,meta27682__$1));
});})(___$1))
;

cljs.core.async.t27681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27683){
var self__ = this;
var _27683__$1 = this;
return self__.meta27682;
});})(___$1))
;

cljs.core.async.t27681.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27671_SHARP_){
return f1.call(null,(((p1__27671_SHARP_ == null))?null:self__.f.call(null,p1__27671_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27679","meta27679",963268858,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27682","meta27682",-1760933544,null)], null);
});})(___$1))
;

cljs.core.async.t27681.cljs$lang$type = true;

cljs.core.async.t27681.cljs$lang$ctorStr = "cljs.core.async/t27681";

cljs.core.async.t27681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27681");
});})(___$1))
;

cljs.core.async.__GT_t27681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27681(map_LT___$1,f__$1,ch__$1,meta27679__$1,___$2,fn1__$1,meta27682){
return (new cljs.core.async.t27681(map_LT___$1,f__$1,ch__$1,meta27679__$1,___$2,fn1__$1,meta27682));
});})(___$1))
;

}

return (new cljs.core.async.t27681(self__.map_LT_,self__.f,self__.ch,self__.meta27679,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16897__auto__ = ret;
if(cljs.core.truth_(and__16897__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16897__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27679","meta27679",963268858,null)], null);
});

cljs.core.async.t27678.cljs$lang$type = true;

cljs.core.async.t27678.cljs$lang$ctorStr = "cljs.core.async/t27678";

cljs.core.async.t27678.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27678");
});

cljs.core.async.__GT_t27678 = (function cljs$core$async$map_LT__$___GT_t27678(map_LT___$1,f__$1,ch__$1,meta27679){
return (new cljs.core.async.t27678(map_LT___$1,f__$1,ch__$1,meta27679));
});

}

return (new cljs.core.async.t27678(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27687 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27687 = (function (map_GT_,f,ch,meta27688){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27688 = meta27688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27689,meta27688__$1){
var self__ = this;
var _27689__$1 = this;
return (new cljs.core.async.t27687(self__.map_GT_,self__.f,self__.ch,meta27688__$1));
});

cljs.core.async.t27687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27689){
var self__ = this;
var _27689__$1 = this;
return self__.meta27688;
});

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27688","meta27688",-1032678364,null)], null);
});

cljs.core.async.t27687.cljs$lang$type = true;

cljs.core.async.t27687.cljs$lang$ctorStr = "cljs.core.async/t27687";

cljs.core.async.t27687.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27687");
});

cljs.core.async.__GT_t27687 = (function cljs$core$async$map_GT__$___GT_t27687(map_GT___$1,f__$1,ch__$1,meta27688){
return (new cljs.core.async.t27687(map_GT___$1,f__$1,ch__$1,meta27688));
});

}

return (new cljs.core.async.t27687(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27693 = (function (filter_GT_,p,ch,meta27694){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27694 = meta27694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27695,meta27694__$1){
var self__ = this;
var _27695__$1 = this;
return (new cljs.core.async.t27693(self__.filter_GT_,self__.p,self__.ch,meta27694__$1));
});

cljs.core.async.t27693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27695){
var self__ = this;
var _27695__$1 = this;
return self__.meta27694;
});

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27694","meta27694",-726828395,null)], null);
});

cljs.core.async.t27693.cljs$lang$type = true;

cljs.core.async.t27693.cljs$lang$ctorStr = "cljs.core.async/t27693";

cljs.core.async.t27693.cljs$lang$ctorPrWriter = (function (this__17488__auto__,writer__17489__auto__,opt__17490__auto__){
return cljs.core._write.call(null,writer__17489__auto__,"cljs.core.async/t27693");
});

cljs.core.async.__GT_t27693 = (function cljs$core$async$filter_GT__$___GT_t27693(filter_GT___$1,p__$1,ch__$1,meta27694){
return (new cljs.core.async.t27693(filter_GT___$1,p__$1,ch__$1,meta27694));
});

}

return (new cljs.core.async.t27693(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27697 = arguments.length;
switch (G__27697) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___27740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___27740,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___27740,out){
return (function (state_27718){
var state_val_27719 = (state_27718[(1)]);
if((state_val_27719 === (7))){
var inst_27714 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
var statearr_27720_27741 = state_27718__$1;
(statearr_27720_27741[(2)] = inst_27714);

(statearr_27720_27741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (1))){
var state_27718__$1 = state_27718;
var statearr_27721_27742 = state_27718__$1;
(statearr_27721_27742[(2)] = null);

(statearr_27721_27742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (4))){
var inst_27700 = (state_27718[(7)]);
var inst_27700__$1 = (state_27718[(2)]);
var inst_27701 = (inst_27700__$1 == null);
var state_27718__$1 = (function (){var statearr_27722 = state_27718;
(statearr_27722[(7)] = inst_27700__$1);

return statearr_27722;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27723_27743 = state_27718__$1;
(statearr_27723_27743[(1)] = (5));

} else {
var statearr_27724_27744 = state_27718__$1;
(statearr_27724_27744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (6))){
var inst_27700 = (state_27718[(7)]);
var inst_27705 = p.call(null,inst_27700);
var state_27718__$1 = state_27718;
if(cljs.core.truth_(inst_27705)){
var statearr_27725_27745 = state_27718__$1;
(statearr_27725_27745[(1)] = (8));

} else {
var statearr_27726_27746 = state_27718__$1;
(statearr_27726_27746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (3))){
var inst_27716 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27718__$1,inst_27716);
} else {
if((state_val_27719 === (2))){
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27718__$1,(4),ch);
} else {
if((state_val_27719 === (11))){
var inst_27708 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
var statearr_27727_27747 = state_27718__$1;
(statearr_27727_27747[(2)] = inst_27708);

(statearr_27727_27747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (9))){
var state_27718__$1 = state_27718;
var statearr_27728_27748 = state_27718__$1;
(statearr_27728_27748[(2)] = null);

(statearr_27728_27748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (5))){
var inst_27703 = cljs.core.async.close_BANG_.call(null,out);
var state_27718__$1 = state_27718;
var statearr_27729_27749 = state_27718__$1;
(statearr_27729_27749[(2)] = inst_27703);

(statearr_27729_27749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (10))){
var inst_27711 = (state_27718[(2)]);
var state_27718__$1 = (function (){var statearr_27730 = state_27718;
(statearr_27730[(8)] = inst_27711);

return statearr_27730;
})();
var statearr_27731_27750 = state_27718__$1;
(statearr_27731_27750[(2)] = null);

(statearr_27731_27750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (8))){
var inst_27700 = (state_27718[(7)]);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27718__$1,(11),out,inst_27700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___27740,out))
;
return ((function (switch__20738__auto__,c__20800__auto___27740,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_27735 = [null,null,null,null,null,null,null,null,null];
(statearr_27735[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_27735[(1)] = (1));

return statearr_27735;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_27718){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27736){if((e27736 instanceof Object)){
var ex__20742__auto__ = e27736;
var statearr_27737_27751 = state_27718;
(statearr_27737_27751[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27752 = state_27718;
state_27718 = G__27752;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___27740,out))
})();
var state__20802__auto__ = (function (){var statearr_27738 = f__20801__auto__.call(null);
(statearr_27738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___27740);

return statearr_27738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___27740,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27754 = arguments.length;
switch (G__27754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_27921){
var state_val_27922 = (state_27921[(1)]);
if((state_val_27922 === (7))){
var inst_27917 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27923_27964 = state_27921__$1;
(statearr_27923_27964[(2)] = inst_27917);

(statearr_27923_27964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (20))){
var inst_27887 = (state_27921[(7)]);
var inst_27898 = (state_27921[(2)]);
var inst_27899 = cljs.core.next.call(null,inst_27887);
var inst_27873 = inst_27899;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27921__$1 = (function (){var statearr_27924 = state_27921;
(statearr_27924[(8)] = inst_27874);

(statearr_27924[(9)] = inst_27898);

(statearr_27924[(10)] = inst_27875);

(statearr_27924[(11)] = inst_27873);

(statearr_27924[(12)] = inst_27876);

return statearr_27924;
})();
var statearr_27925_27965 = state_27921__$1;
(statearr_27925_27965[(2)] = null);

(statearr_27925_27965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (1))){
var state_27921__$1 = state_27921;
var statearr_27926_27966 = state_27921__$1;
(statearr_27926_27966[(2)] = null);

(statearr_27926_27966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (4))){
var inst_27862 = (state_27921[(13)]);
var inst_27862__$1 = (state_27921[(2)]);
var inst_27863 = (inst_27862__$1 == null);
var state_27921__$1 = (function (){var statearr_27927 = state_27921;
(statearr_27927[(13)] = inst_27862__$1);

return statearr_27927;
})();
if(cljs.core.truth_(inst_27863)){
var statearr_27928_27967 = state_27921__$1;
(statearr_27928_27967[(1)] = (5));

} else {
var statearr_27929_27968 = state_27921__$1;
(statearr_27929_27968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (15))){
var state_27921__$1 = state_27921;
var statearr_27933_27969 = state_27921__$1;
(statearr_27933_27969[(2)] = null);

(statearr_27933_27969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (21))){
var state_27921__$1 = state_27921;
var statearr_27934_27970 = state_27921__$1;
(statearr_27934_27970[(2)] = null);

(statearr_27934_27970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (13))){
var inst_27874 = (state_27921[(8)]);
var inst_27875 = (state_27921[(10)]);
var inst_27873 = (state_27921[(11)]);
var inst_27876 = (state_27921[(12)]);
var inst_27883 = (state_27921[(2)]);
var inst_27884 = (inst_27876 + (1));
var tmp27930 = inst_27874;
var tmp27931 = inst_27875;
var tmp27932 = inst_27873;
var inst_27873__$1 = tmp27932;
var inst_27874__$1 = tmp27930;
var inst_27875__$1 = tmp27931;
var inst_27876__$1 = inst_27884;
var state_27921__$1 = (function (){var statearr_27935 = state_27921;
(statearr_27935[(8)] = inst_27874__$1);

(statearr_27935[(14)] = inst_27883);

(statearr_27935[(10)] = inst_27875__$1);

(statearr_27935[(11)] = inst_27873__$1);

(statearr_27935[(12)] = inst_27876__$1);

return statearr_27935;
})();
var statearr_27936_27971 = state_27921__$1;
(statearr_27936_27971[(2)] = null);

(statearr_27936_27971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (22))){
var state_27921__$1 = state_27921;
var statearr_27937_27972 = state_27921__$1;
(statearr_27937_27972[(2)] = null);

(statearr_27937_27972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (6))){
var inst_27862 = (state_27921[(13)]);
var inst_27871 = f.call(null,inst_27862);
var inst_27872 = cljs.core.seq.call(null,inst_27871);
var inst_27873 = inst_27872;
var inst_27874 = null;
var inst_27875 = (0);
var inst_27876 = (0);
var state_27921__$1 = (function (){var statearr_27938 = state_27921;
(statearr_27938[(8)] = inst_27874);

(statearr_27938[(10)] = inst_27875);

(statearr_27938[(11)] = inst_27873);

(statearr_27938[(12)] = inst_27876);

return statearr_27938;
})();
var statearr_27939_27973 = state_27921__$1;
(statearr_27939_27973[(2)] = null);

(statearr_27939_27973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (17))){
var inst_27887 = (state_27921[(7)]);
var inst_27891 = cljs.core.chunk_first.call(null,inst_27887);
var inst_27892 = cljs.core.chunk_rest.call(null,inst_27887);
var inst_27893 = cljs.core.count.call(null,inst_27891);
var inst_27873 = inst_27892;
var inst_27874 = inst_27891;
var inst_27875 = inst_27893;
var inst_27876 = (0);
var state_27921__$1 = (function (){var statearr_27940 = state_27921;
(statearr_27940[(8)] = inst_27874);

(statearr_27940[(10)] = inst_27875);

(statearr_27940[(11)] = inst_27873);

(statearr_27940[(12)] = inst_27876);

return statearr_27940;
})();
var statearr_27941_27974 = state_27921__$1;
(statearr_27941_27974[(2)] = null);

(statearr_27941_27974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (3))){
var inst_27919 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27921__$1,inst_27919);
} else {
if((state_val_27922 === (12))){
var inst_27907 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27942_27975 = state_27921__$1;
(statearr_27942_27975[(2)] = inst_27907);

(statearr_27942_27975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (2))){
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27921__$1,(4),in$);
} else {
if((state_val_27922 === (23))){
var inst_27915 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27943_27976 = state_27921__$1;
(statearr_27943_27976[(2)] = inst_27915);

(statearr_27943_27976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (19))){
var inst_27902 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27944_27977 = state_27921__$1;
(statearr_27944_27977[(2)] = inst_27902);

(statearr_27944_27977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (11))){
var inst_27887 = (state_27921[(7)]);
var inst_27873 = (state_27921[(11)]);
var inst_27887__$1 = cljs.core.seq.call(null,inst_27873);
var state_27921__$1 = (function (){var statearr_27945 = state_27921;
(statearr_27945[(7)] = inst_27887__$1);

return statearr_27945;
})();
if(inst_27887__$1){
var statearr_27946_27978 = state_27921__$1;
(statearr_27946_27978[(1)] = (14));

} else {
var statearr_27947_27979 = state_27921__$1;
(statearr_27947_27979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (9))){
var inst_27909 = (state_27921[(2)]);
var inst_27910 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27921__$1 = (function (){var statearr_27948 = state_27921;
(statearr_27948[(15)] = inst_27909);

return statearr_27948;
})();
if(cljs.core.truth_(inst_27910)){
var statearr_27949_27980 = state_27921__$1;
(statearr_27949_27980[(1)] = (21));

} else {
var statearr_27950_27981 = state_27921__$1;
(statearr_27950_27981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (5))){
var inst_27865 = cljs.core.async.close_BANG_.call(null,out);
var state_27921__$1 = state_27921;
var statearr_27951_27982 = state_27921__$1;
(statearr_27951_27982[(2)] = inst_27865);

(statearr_27951_27982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (14))){
var inst_27887 = (state_27921[(7)]);
var inst_27889 = cljs.core.chunked_seq_QMARK_.call(null,inst_27887);
var state_27921__$1 = state_27921;
if(inst_27889){
var statearr_27952_27983 = state_27921__$1;
(statearr_27952_27983[(1)] = (17));

} else {
var statearr_27953_27984 = state_27921__$1;
(statearr_27953_27984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (16))){
var inst_27905 = (state_27921[(2)]);
var state_27921__$1 = state_27921;
var statearr_27954_27985 = state_27921__$1;
(statearr_27954_27985[(2)] = inst_27905);

(statearr_27954_27985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27922 === (10))){
var inst_27874 = (state_27921[(8)]);
var inst_27876 = (state_27921[(12)]);
var inst_27881 = cljs.core._nth.call(null,inst_27874,inst_27876);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27921__$1,(13),out,inst_27881);
} else {
if((state_val_27922 === (18))){
var inst_27887 = (state_27921[(7)]);
var inst_27896 = cljs.core.first.call(null,inst_27887);
var state_27921__$1 = state_27921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27921__$1,(20),out,inst_27896);
} else {
if((state_val_27922 === (8))){
var inst_27875 = (state_27921[(10)]);
var inst_27876 = (state_27921[(12)]);
var inst_27878 = (inst_27876 < inst_27875);
var inst_27879 = inst_27878;
var state_27921__$1 = state_27921;
if(cljs.core.truth_(inst_27879)){
var statearr_27955_27986 = state_27921__$1;
(statearr_27955_27986[(1)] = (10));

} else {
var statearr_27956_27987 = state_27921__$1;
(statearr_27956_27987[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____0 = (function (){
var statearr_27960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27960[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__);

(statearr_27960[(1)] = (1));

return statearr_27960;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____1 = (function (state_27921){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_27921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e27961){if((e27961 instanceof Object)){
var ex__20742__auto__ = e27961;
var statearr_27962_27988 = state_27921;
(statearr_27962_27988[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27989 = state_27921;
state_27921 = G__27989;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__ = function(state_27921){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____1.call(this,state_27921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20739__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_27963 = f__20801__auto__.call(null);
(statearr_27963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_27963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27991 = arguments.length;
switch (G__27991) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27994 = arguments.length;
switch (G__27994) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27997 = arguments.length;
switch (G__27997) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___28047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___28047,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___28047,out){
return (function (state_28021){
var state_val_28022 = (state_28021[(1)]);
if((state_val_28022 === (7))){
var inst_28016 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28023_28048 = state_28021__$1;
(statearr_28023_28048[(2)] = inst_28016);

(statearr_28023_28048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (1))){
var inst_27998 = null;
var state_28021__$1 = (function (){var statearr_28024 = state_28021;
(statearr_28024[(7)] = inst_27998);

return statearr_28024;
})();
var statearr_28025_28049 = state_28021__$1;
(statearr_28025_28049[(2)] = null);

(statearr_28025_28049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (4))){
var inst_28001 = (state_28021[(8)]);
var inst_28001__$1 = (state_28021[(2)]);
var inst_28002 = (inst_28001__$1 == null);
var inst_28003 = cljs.core.not.call(null,inst_28002);
var state_28021__$1 = (function (){var statearr_28026 = state_28021;
(statearr_28026[(8)] = inst_28001__$1);

return statearr_28026;
})();
if(inst_28003){
var statearr_28027_28050 = state_28021__$1;
(statearr_28027_28050[(1)] = (5));

} else {
var statearr_28028_28051 = state_28021__$1;
(statearr_28028_28051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (6))){
var state_28021__$1 = state_28021;
var statearr_28029_28052 = state_28021__$1;
(statearr_28029_28052[(2)] = null);

(statearr_28029_28052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (3))){
var inst_28018 = (state_28021[(2)]);
var inst_28019 = cljs.core.async.close_BANG_.call(null,out);
var state_28021__$1 = (function (){var statearr_28030 = state_28021;
(statearr_28030[(9)] = inst_28018);

return statearr_28030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28021__$1,inst_28019);
} else {
if((state_val_28022 === (2))){
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28021__$1,(4),ch);
} else {
if((state_val_28022 === (11))){
var inst_28001 = (state_28021[(8)]);
var inst_28010 = (state_28021[(2)]);
var inst_27998 = inst_28001;
var state_28021__$1 = (function (){var statearr_28031 = state_28021;
(statearr_28031[(7)] = inst_27998);

(statearr_28031[(10)] = inst_28010);

return statearr_28031;
})();
var statearr_28032_28053 = state_28021__$1;
(statearr_28032_28053[(2)] = null);

(statearr_28032_28053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (9))){
var inst_28001 = (state_28021[(8)]);
var state_28021__$1 = state_28021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28021__$1,(11),out,inst_28001);
} else {
if((state_val_28022 === (5))){
var inst_27998 = (state_28021[(7)]);
var inst_28001 = (state_28021[(8)]);
var inst_28005 = cljs.core._EQ_.call(null,inst_28001,inst_27998);
var state_28021__$1 = state_28021;
if(inst_28005){
var statearr_28034_28054 = state_28021__$1;
(statearr_28034_28054[(1)] = (8));

} else {
var statearr_28035_28055 = state_28021__$1;
(statearr_28035_28055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (10))){
var inst_28013 = (state_28021[(2)]);
var state_28021__$1 = state_28021;
var statearr_28036_28056 = state_28021__$1;
(statearr_28036_28056[(2)] = inst_28013);

(statearr_28036_28056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28022 === (8))){
var inst_27998 = (state_28021[(7)]);
var tmp28033 = inst_27998;
var inst_27998__$1 = tmp28033;
var state_28021__$1 = (function (){var statearr_28037 = state_28021;
(statearr_28037[(7)] = inst_27998__$1);

return statearr_28037;
})();
var statearr_28038_28057 = state_28021__$1;
(statearr_28038_28057[(2)] = null);

(statearr_28038_28057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___28047,out))
;
return ((function (switch__20738__auto__,c__20800__auto___28047,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_28042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28042[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_28042[(1)] = (1));

return statearr_28042;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_28021){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28043){if((e28043 instanceof Object)){
var ex__20742__auto__ = e28043;
var statearr_28044_28058 = state_28021;
(statearr_28044_28058[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28059 = state_28021;
state_28021 = G__28059;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_28021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_28021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___28047,out))
})();
var state__20802__auto__ = (function (){var statearr_28045 = f__20801__auto__.call(null);
(statearr_28045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___28047);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___28047,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28061 = arguments.length;
switch (G__28061) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___28130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___28130,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___28130,out){
return (function (state_28099){
var state_val_28100 = (state_28099[(1)]);
if((state_val_28100 === (7))){
var inst_28095 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28101_28131 = state_28099__$1;
(statearr_28101_28131[(2)] = inst_28095);

(statearr_28101_28131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (1))){
var inst_28062 = (new Array(n));
var inst_28063 = inst_28062;
var inst_28064 = (0);
var state_28099__$1 = (function (){var statearr_28102 = state_28099;
(statearr_28102[(7)] = inst_28064);

(statearr_28102[(8)] = inst_28063);

return statearr_28102;
})();
var statearr_28103_28132 = state_28099__$1;
(statearr_28103_28132[(2)] = null);

(statearr_28103_28132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (4))){
var inst_28067 = (state_28099[(9)]);
var inst_28067__$1 = (state_28099[(2)]);
var inst_28068 = (inst_28067__$1 == null);
var inst_28069 = cljs.core.not.call(null,inst_28068);
var state_28099__$1 = (function (){var statearr_28104 = state_28099;
(statearr_28104[(9)] = inst_28067__$1);

return statearr_28104;
})();
if(inst_28069){
var statearr_28105_28133 = state_28099__$1;
(statearr_28105_28133[(1)] = (5));

} else {
var statearr_28106_28134 = state_28099__$1;
(statearr_28106_28134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (15))){
var inst_28089 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28107_28135 = state_28099__$1;
(statearr_28107_28135[(2)] = inst_28089);

(statearr_28107_28135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (13))){
var state_28099__$1 = state_28099;
var statearr_28108_28136 = state_28099__$1;
(statearr_28108_28136[(2)] = null);

(statearr_28108_28136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (6))){
var inst_28064 = (state_28099[(7)]);
var inst_28085 = (inst_28064 > (0));
var state_28099__$1 = state_28099;
if(cljs.core.truth_(inst_28085)){
var statearr_28109_28137 = state_28099__$1;
(statearr_28109_28137[(1)] = (12));

} else {
var statearr_28110_28138 = state_28099__$1;
(statearr_28110_28138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (3))){
var inst_28097 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28099__$1,inst_28097);
} else {
if((state_val_28100 === (12))){
var inst_28063 = (state_28099[(8)]);
var inst_28087 = cljs.core.vec.call(null,inst_28063);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28099__$1,(15),out,inst_28087);
} else {
if((state_val_28100 === (2))){
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28099__$1,(4),ch);
} else {
if((state_val_28100 === (11))){
var inst_28079 = (state_28099[(2)]);
var inst_28080 = (new Array(n));
var inst_28063 = inst_28080;
var inst_28064 = (0);
var state_28099__$1 = (function (){var statearr_28111 = state_28099;
(statearr_28111[(10)] = inst_28079);

(statearr_28111[(7)] = inst_28064);

(statearr_28111[(8)] = inst_28063);

return statearr_28111;
})();
var statearr_28112_28139 = state_28099__$1;
(statearr_28112_28139[(2)] = null);

(statearr_28112_28139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (9))){
var inst_28063 = (state_28099[(8)]);
var inst_28077 = cljs.core.vec.call(null,inst_28063);
var state_28099__$1 = state_28099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28099__$1,(11),out,inst_28077);
} else {
if((state_val_28100 === (5))){
var inst_28067 = (state_28099[(9)]);
var inst_28064 = (state_28099[(7)]);
var inst_28072 = (state_28099[(11)]);
var inst_28063 = (state_28099[(8)]);
var inst_28071 = (inst_28063[inst_28064] = inst_28067);
var inst_28072__$1 = (inst_28064 + (1));
var inst_28073 = (inst_28072__$1 < n);
var state_28099__$1 = (function (){var statearr_28113 = state_28099;
(statearr_28113[(12)] = inst_28071);

(statearr_28113[(11)] = inst_28072__$1);

return statearr_28113;
})();
if(cljs.core.truth_(inst_28073)){
var statearr_28114_28140 = state_28099__$1;
(statearr_28114_28140[(1)] = (8));

} else {
var statearr_28115_28141 = state_28099__$1;
(statearr_28115_28141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (14))){
var inst_28092 = (state_28099[(2)]);
var inst_28093 = cljs.core.async.close_BANG_.call(null,out);
var state_28099__$1 = (function (){var statearr_28117 = state_28099;
(statearr_28117[(13)] = inst_28092);

return statearr_28117;
})();
var statearr_28118_28142 = state_28099__$1;
(statearr_28118_28142[(2)] = inst_28093);

(statearr_28118_28142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (10))){
var inst_28083 = (state_28099[(2)]);
var state_28099__$1 = state_28099;
var statearr_28119_28143 = state_28099__$1;
(statearr_28119_28143[(2)] = inst_28083);

(statearr_28119_28143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28100 === (8))){
var inst_28072 = (state_28099[(11)]);
var inst_28063 = (state_28099[(8)]);
var tmp28116 = inst_28063;
var inst_28063__$1 = tmp28116;
var inst_28064 = inst_28072;
var state_28099__$1 = (function (){var statearr_28120 = state_28099;
(statearr_28120[(7)] = inst_28064);

(statearr_28120[(8)] = inst_28063__$1);

return statearr_28120;
})();
var statearr_28121_28144 = state_28099__$1;
(statearr_28121_28144[(2)] = null);

(statearr_28121_28144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___28130,out))
;
return ((function (switch__20738__auto__,c__20800__auto___28130,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_28125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28125[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_28125[(1)] = (1));

return statearr_28125;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_28099){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28126){if((e28126 instanceof Object)){
var ex__20742__auto__ = e28126;
var statearr_28127_28145 = state_28099;
(statearr_28127_28145[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28146 = state_28099;
state_28099 = G__28146;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_28099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_28099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___28130,out))
})();
var state__20802__auto__ = (function (){var statearr_28128 = f__20801__auto__.call(null);
(statearr_28128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___28130);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___28130,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28148 = arguments.length;
switch (G__28148) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20800__auto___28221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___28221,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___28221,out){
return (function (state_28190){
var state_val_28191 = (state_28190[(1)]);
if((state_val_28191 === (7))){
var inst_28186 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
var statearr_28192_28222 = state_28190__$1;
(statearr_28192_28222[(2)] = inst_28186);

(statearr_28192_28222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (1))){
var inst_28149 = [];
var inst_28150 = inst_28149;
var inst_28151 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28190__$1 = (function (){var statearr_28193 = state_28190;
(statearr_28193[(7)] = inst_28151);

(statearr_28193[(8)] = inst_28150);

return statearr_28193;
})();
var statearr_28194_28223 = state_28190__$1;
(statearr_28194_28223[(2)] = null);

(statearr_28194_28223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (4))){
var inst_28154 = (state_28190[(9)]);
var inst_28154__$1 = (state_28190[(2)]);
var inst_28155 = (inst_28154__$1 == null);
var inst_28156 = cljs.core.not.call(null,inst_28155);
var state_28190__$1 = (function (){var statearr_28195 = state_28190;
(statearr_28195[(9)] = inst_28154__$1);

return statearr_28195;
})();
if(inst_28156){
var statearr_28196_28224 = state_28190__$1;
(statearr_28196_28224[(1)] = (5));

} else {
var statearr_28197_28225 = state_28190__$1;
(statearr_28197_28225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (15))){
var inst_28180 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
var statearr_28198_28226 = state_28190__$1;
(statearr_28198_28226[(2)] = inst_28180);

(statearr_28198_28226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (13))){
var state_28190__$1 = state_28190;
var statearr_28199_28227 = state_28190__$1;
(statearr_28199_28227[(2)] = null);

(statearr_28199_28227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (6))){
var inst_28150 = (state_28190[(8)]);
var inst_28175 = inst_28150.length;
var inst_28176 = (inst_28175 > (0));
var state_28190__$1 = state_28190;
if(cljs.core.truth_(inst_28176)){
var statearr_28200_28228 = state_28190__$1;
(statearr_28200_28228[(1)] = (12));

} else {
var statearr_28201_28229 = state_28190__$1;
(statearr_28201_28229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (3))){
var inst_28188 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28190__$1,inst_28188);
} else {
if((state_val_28191 === (12))){
var inst_28150 = (state_28190[(8)]);
var inst_28178 = cljs.core.vec.call(null,inst_28150);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28190__$1,(15),out,inst_28178);
} else {
if((state_val_28191 === (2))){
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28190__$1,(4),ch);
} else {
if((state_val_28191 === (11))){
var inst_28154 = (state_28190[(9)]);
var inst_28158 = (state_28190[(10)]);
var inst_28168 = (state_28190[(2)]);
var inst_28169 = [];
var inst_28170 = inst_28169.push(inst_28154);
var inst_28150 = inst_28169;
var inst_28151 = inst_28158;
var state_28190__$1 = (function (){var statearr_28202 = state_28190;
(statearr_28202[(7)] = inst_28151);

(statearr_28202[(8)] = inst_28150);

(statearr_28202[(11)] = inst_28170);

(statearr_28202[(12)] = inst_28168);

return statearr_28202;
})();
var statearr_28203_28230 = state_28190__$1;
(statearr_28203_28230[(2)] = null);

(statearr_28203_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (9))){
var inst_28150 = (state_28190[(8)]);
var inst_28166 = cljs.core.vec.call(null,inst_28150);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28190__$1,(11),out,inst_28166);
} else {
if((state_val_28191 === (5))){
var inst_28154 = (state_28190[(9)]);
var inst_28151 = (state_28190[(7)]);
var inst_28158 = (state_28190[(10)]);
var inst_28158__$1 = f.call(null,inst_28154);
var inst_28159 = cljs.core._EQ_.call(null,inst_28158__$1,inst_28151);
var inst_28160 = cljs.core.keyword_identical_QMARK_.call(null,inst_28151,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28161 = (inst_28159) || (inst_28160);
var state_28190__$1 = (function (){var statearr_28204 = state_28190;
(statearr_28204[(10)] = inst_28158__$1);

return statearr_28204;
})();
if(cljs.core.truth_(inst_28161)){
var statearr_28205_28231 = state_28190__$1;
(statearr_28205_28231[(1)] = (8));

} else {
var statearr_28206_28232 = state_28190__$1;
(statearr_28206_28232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (14))){
var inst_28183 = (state_28190[(2)]);
var inst_28184 = cljs.core.async.close_BANG_.call(null,out);
var state_28190__$1 = (function (){var statearr_28208 = state_28190;
(statearr_28208[(13)] = inst_28183);

return statearr_28208;
})();
var statearr_28209_28233 = state_28190__$1;
(statearr_28209_28233[(2)] = inst_28184);

(statearr_28209_28233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (10))){
var inst_28173 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
var statearr_28210_28234 = state_28190__$1;
(statearr_28210_28234[(2)] = inst_28173);

(statearr_28210_28234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (8))){
var inst_28154 = (state_28190[(9)]);
var inst_28150 = (state_28190[(8)]);
var inst_28158 = (state_28190[(10)]);
var inst_28163 = inst_28150.push(inst_28154);
var tmp28207 = inst_28150;
var inst_28150__$1 = tmp28207;
var inst_28151 = inst_28158;
var state_28190__$1 = (function (){var statearr_28211 = state_28190;
(statearr_28211[(7)] = inst_28151);

(statearr_28211[(8)] = inst_28150__$1);

(statearr_28211[(14)] = inst_28163);

return statearr_28211;
})();
var statearr_28212_28235 = state_28190__$1;
(statearr_28212_28235[(2)] = null);

(statearr_28212_28235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20800__auto___28221,out))
;
return ((function (switch__20738__auto__,c__20800__auto___28221,out){
return (function() {
var cljs$core$async$state_machine__20739__auto__ = null;
var cljs$core$async$state_machine__20739__auto____0 = (function (){
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = cljs$core$async$state_machine__20739__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var cljs$core$async$state_machine__20739__auto____1 = (function (state_28190){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__20742__auto__ = e28217;
var statearr_28218_28236 = state_28190;
(statearr_28218_28236[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28237 = state_28190;
state_28190 = G__28237;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
cljs$core$async$state_machine__20739__auto__ = function(state_28190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20739__auto____1.call(this,state_28190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20739__auto____0;
cljs$core$async$state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20739__auto____1;
return cljs$core$async$state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___28221,out))
})();
var state__20802__auto__ = (function (){var statearr_28219 = f__20801__auto__.call(null);
(statearr_28219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___28221);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___28221,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map