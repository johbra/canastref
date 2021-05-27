// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18355 = arguments.length;
switch (G__18355) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18356 = (function (f,blockable,meta18357){
this.f = f;
this.blockable = blockable;
this.meta18357 = meta18357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18358,meta18357__$1){
var self__ = this;
var _18358__$1 = this;
return (new cljs.core.async.t_cljs$core$async18356(self__.f,self__.blockable,meta18357__$1));
}));

(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18358){
var self__ = this;
var _18358__$1 = this;
return self__.meta18357;
}));

(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta18357], null);
}));

(cljs.core.async.t_cljs$core$async18356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18356");

(cljs.core.async.t_cljs$core$async18356.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async18356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18356.
 */
cljs.core.async.__GT_t_cljs$core$async18356 = (function cljs$core$async$__GT_t_cljs$core$async18356(f__$1,blockable__$1,meta18357){
return (new cljs.core.async.t_cljs$core$async18356(f__$1,blockable__$1,meta18357));
});

}

return (new cljs.core.async.t_cljs$core$async18356(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18362 = arguments.length;
switch (G__18362) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18365 = arguments.length;
switch (G__18365) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18368 = arguments.length;
switch (G__18368) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18370 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18370) : fn1.call(null,val_18370));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18370) : fn1.call(null,val_18370));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18372 = arguments.length;
switch (G__18372) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___18374 = n;
var x_18375 = (0);
while(true){
if((x_18375 < n__4648__auto___18374)){
(a[x_18375] = x_18375);

var G__18376 = (x_18375 + (1));
x_18375 = G__18376;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18377 = (function (flag,meta18378){
this.flag = flag;
this.meta18378 = meta18378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18379,meta18378__$1){
var self__ = this;
var _18379__$1 = this;
return (new cljs.core.async.t_cljs$core$async18377(self__.flag,meta18378__$1));
}));

(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18379){
var self__ = this;
var _18379__$1 = this;
return self__.meta18378;
}));

(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta18378], null);
}));

(cljs.core.async.t_cljs$core$async18377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18377");

(cljs.core.async.t_cljs$core$async18377.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async18377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18377.
 */
cljs.core.async.__GT_t_cljs$core$async18377 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async18377(flag__$1,meta18378){
return (new cljs.core.async.t_cljs$core$async18377(flag__$1,meta18378));
});

}

return (new cljs.core.async.t_cljs$core$async18377(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18380 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18380 = (function (flag,cb,meta18381){
this.flag = flag;
this.cb = cb;
this.meta18381 = meta18381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18382,meta18381__$1){
var self__ = this;
var _18382__$1 = this;
return (new cljs.core.async.t_cljs$core$async18380(self__.flag,self__.cb,meta18381__$1));
}));

(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18382){
var self__ = this;
var _18382__$1 = this;
return self__.meta18381;
}));

(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta18381], null);
}));

(cljs.core.async.t_cljs$core$async18380.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18380");

(cljs.core.async.t_cljs$core$async18380.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async18380");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18380.
 */
cljs.core.async.__GT_t_cljs$core$async18380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async18380(flag__$1,cb__$1,meta18381){
return (new cljs.core.async.t_cljs$core$async18380(flag__$1,cb__$1,meta18381));
});

}

return (new cljs.core.async.t_cljs$core$async18380(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18383_SHARP_){
var G__18385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18383_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18385) : fret.call(null,G__18385));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18384_SHARP_){
var G__18386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18384_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18386) : fret.call(null,G__18386));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18387 = (i + (1));
i = G__18387;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4160__auto__ = ret;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5753__auto__ = (function (){var and__4149__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4149__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___18392 = arguments.length;
var i__4772__auto___18393 = (0);
while(true){
if((i__4772__auto___18393 < len__4771__auto___18392)){
args__4777__auto__.push((arguments[i__4772__auto___18393]));

var G__18394 = (i__4772__auto___18393 + (1));
i__4772__auto___18393 = G__18394;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18390){
var map__18391 = p__18390;
var map__18391__$1 = cljs.core.__destructure_map(map__18391);
var opts = map__18391__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18388){
var G__18389 = cljs.core.first(seq18388);
var seq18388__$1 = cljs.core.next(seq18388);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18389,seq18388__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18396 = arguments.length;
switch (G__18396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18295__auto___18443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (7))){
var inst_18416 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18422_18444 = state_18420__$1;
(statearr_18422_18444[(2)] = inst_18416);

(statearr_18422_18444[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (1))){
var state_18420__$1 = state_18420;
var statearr_18423_18445 = state_18420__$1;
(statearr_18423_18445[(2)] = null);

(statearr_18423_18445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (4))){
var inst_18399 = (state_18420[(7)]);
var inst_18399__$1 = (state_18420[(2)]);
var inst_18400 = (inst_18399__$1 == null);
var state_18420__$1 = (function (){var statearr_18424 = state_18420;
(statearr_18424[(7)] = inst_18399__$1);

return statearr_18424;
})();
if(cljs.core.truth_(inst_18400)){
var statearr_18425_18446 = state_18420__$1;
(statearr_18425_18446[(1)] = (5));

} else {
var statearr_18426_18447 = state_18420__$1;
(statearr_18426_18447[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (13))){
var state_18420__$1 = state_18420;
var statearr_18427_18448 = state_18420__$1;
(statearr_18427_18448[(2)] = null);

(statearr_18427_18448[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (6))){
var inst_18399 = (state_18420[(7)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18420__$1,(11),to,inst_18399);
} else {
if((state_val_18421 === (3))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18420__$1,inst_18418);
} else {
if((state_val_18421 === (12))){
var state_18420__$1 = state_18420;
var statearr_18428_18449 = state_18420__$1;
(statearr_18428_18449[(2)] = null);

(statearr_18428_18449[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (2))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18420__$1,(4),from);
} else {
if((state_val_18421 === (11))){
var inst_18409 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
if(cljs.core.truth_(inst_18409)){
var statearr_18429_18450 = state_18420__$1;
(statearr_18429_18450[(1)] = (12));

} else {
var statearr_18430_18451 = state_18420__$1;
(statearr_18430_18451[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (9))){
var state_18420__$1 = state_18420;
var statearr_18431_18452 = state_18420__$1;
(statearr_18431_18452[(2)] = null);

(statearr_18431_18452[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (5))){
var state_18420__$1 = state_18420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18432_18453 = state_18420__$1;
(statearr_18432_18453[(1)] = (8));

} else {
var statearr_18433_18454 = state_18420__$1;
(statearr_18433_18454[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (14))){
var inst_18414 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18434_18455 = state_18420__$1;
(statearr_18434_18455[(2)] = inst_18414);

(statearr_18434_18455[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (10))){
var inst_18406 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18435_18456 = state_18420__$1;
(statearr_18435_18456[(2)] = inst_18406);

(statearr_18435_18456[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18421 === (8))){
var inst_18403 = cljs.core.async.close_BANG_(to);
var state_18420__$1 = state_18420;
var statearr_18436_18457 = state_18420__$1;
(statearr_18436_18457[(2)] = inst_18403);

(statearr_18436_18457[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_18437 = [null,null,null,null,null,null,null,null];
(statearr_18437[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_18437[(1)] = (1));

return statearr_18437;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_18420){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18420);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18438){var ex__18224__auto__ = e18438;
var statearr_18439_18458 = state_18420;
(statearr_18439_18458[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18420[(4)]))){
var statearr_18440_18459 = state_18420;
(statearr_18440_18459[(1)] = cljs.core.first((state_18420[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18460 = state_18420;
state_18420 = G__18460;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18441 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18441[(6)] = c__18295__auto___18443);

return statearr_18441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__18461){
var vec__18462 = p__18461;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18462,(1),null);
var job = vec__18462;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18295__auto___18638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18469){
var state_val_18470 = (state_18469[(1)]);
if((state_val_18470 === (1))){
var state_18469__$1 = state_18469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18469__$1,(2),res,v);
} else {
if((state_val_18470 === (2))){
var inst_18466 = (state_18469[(2)]);
var inst_18467 = cljs.core.async.close_BANG_(res);
var state_18469__$1 = (function (){var statearr_18471 = state_18469;
(statearr_18471[(7)] = inst_18466);

return statearr_18471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18469__$1,inst_18467);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_18472 = [null,null,null,null,null,null,null,null];
(statearr_18472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__);

(statearr_18472[(1)] = (1));

return statearr_18472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1 = (function (state_18469){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18469);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18473){var ex__18224__auto__ = e18473;
var statearr_18474_18639 = state_18469;
(statearr_18474_18639[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18469[(4)]))){
var statearr_18475_18640 = state_18469;
(statearr_18475_18640[(1)] = cljs.core.first((state_18469[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18641 = state_18469;
state_18469 = G__18641;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = function(state_18469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1.call(this,state_18469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18476 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18476[(6)] = c__18295__auto___18638);

return statearr_18476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18477){
var vec__18478 = p__18477;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18478,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18478,(1),null);
var job = vec__18478;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4648__auto___18642 = n;
var __18643 = (0);
while(true){
if((__18643 < n__4648__auto___18642)){
var G__18481_18644 = type;
var G__18481_18645__$1 = (((G__18481_18644 instanceof cljs.core.Keyword))?G__18481_18644.fqn:null);
switch (G__18481_18645__$1) {
case "compute":
var c__18295__auto___18647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18643,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = ((function (__18643,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function (state_18494){
var state_val_18495 = (state_18494[(1)]);
if((state_val_18495 === (1))){
var state_18494__$1 = state_18494;
var statearr_18496_18648 = state_18494__$1;
(statearr_18496_18648[(2)] = null);

(statearr_18496_18648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18495 === (2))){
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18494__$1,(4),jobs);
} else {
if((state_val_18495 === (3))){
var inst_18492 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18494__$1,inst_18492);
} else {
if((state_val_18495 === (4))){
var inst_18484 = (state_18494[(2)]);
var inst_18485 = process(inst_18484);
var state_18494__$1 = state_18494;
if(cljs.core.truth_(inst_18485)){
var statearr_18497_18649 = state_18494__$1;
(statearr_18497_18649[(1)] = (5));

} else {
var statearr_18498_18650 = state_18494__$1;
(statearr_18498_18650[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18495 === (5))){
var state_18494__$1 = state_18494;
var statearr_18499_18651 = state_18494__$1;
(statearr_18499_18651[(2)] = null);

(statearr_18499_18651[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18495 === (6))){
var state_18494__$1 = state_18494;
var statearr_18500_18652 = state_18494__$1;
(statearr_18500_18652[(2)] = null);

(statearr_18500_18652[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18495 === (7))){
var inst_18490 = (state_18494[(2)]);
var state_18494__$1 = state_18494;
var statearr_18501_18653 = state_18494__$1;
(statearr_18501_18653[(2)] = inst_18490);

(statearr_18501_18653[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18643,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
;
return ((function (__18643,switch__18220__auto__,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_18502 = [null,null,null,null,null,null,null];
(statearr_18502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__);

(statearr_18502[(1)] = (1));

return statearr_18502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1 = (function (state_18494){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18494);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18503){var ex__18224__auto__ = e18503;
var statearr_18504_18654 = state_18494;
(statearr_18504_18654[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18494[(4)]))){
var statearr_18505_18655 = state_18494;
(statearr_18505_18655[(1)] = cljs.core.first((state_18494[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18656 = state_18494;
state_18494 = G__18656;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = function(state_18494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1.call(this,state_18494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__;
})()
;})(__18643,switch__18220__auto__,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
})();
var state__18297__auto__ = (function (){var statearr_18506 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18506[(6)] = c__18295__auto___18647);

return statearr_18506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
});})(__18643,c__18295__auto___18647,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
);


break;
case "async":
var c__18295__auto___18657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18643,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = ((function (__18643,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function (state_18519){
var state_val_18520 = (state_18519[(1)]);
if((state_val_18520 === (1))){
var state_18519__$1 = state_18519;
var statearr_18521_18658 = state_18519__$1;
(statearr_18521_18658[(2)] = null);

(statearr_18521_18658[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18520 === (2))){
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18519__$1,(4),jobs);
} else {
if((state_val_18520 === (3))){
var inst_18517 = (state_18519[(2)]);
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18519__$1,inst_18517);
} else {
if((state_val_18520 === (4))){
var inst_18509 = (state_18519[(2)]);
var inst_18510 = async(inst_18509);
var state_18519__$1 = state_18519;
if(cljs.core.truth_(inst_18510)){
var statearr_18522_18659 = state_18519__$1;
(statearr_18522_18659[(1)] = (5));

} else {
var statearr_18523_18660 = state_18519__$1;
(statearr_18523_18660[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18520 === (5))){
var state_18519__$1 = state_18519;
var statearr_18524_18661 = state_18519__$1;
(statearr_18524_18661[(2)] = null);

(statearr_18524_18661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18520 === (6))){
var state_18519__$1 = state_18519;
var statearr_18525_18662 = state_18519__$1;
(statearr_18525_18662[(2)] = null);

(statearr_18525_18662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18520 === (7))){
var inst_18515 = (state_18519[(2)]);
var state_18519__$1 = state_18519;
var statearr_18526_18663 = state_18519__$1;
(statearr_18526_18663[(2)] = inst_18515);

(statearr_18526_18663[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__18643,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
;
return ((function (__18643,switch__18220__auto__,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_18527 = [null,null,null,null,null,null,null];
(statearr_18527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__);

(statearr_18527[(1)] = (1));

return statearr_18527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1 = (function (state_18519){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18519);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18528){var ex__18224__auto__ = e18528;
var statearr_18529_18664 = state_18519;
(statearr_18529_18664[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18519[(4)]))){
var statearr_18530_18665 = state_18519;
(statearr_18530_18665[(1)] = cljs.core.first((state_18519[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18666 = state_18519;
state_18519 = G__18666;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = function(state_18519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1.call(this,state_18519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__;
})()
;})(__18643,switch__18220__auto__,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
})();
var state__18297__auto__ = (function (){var statearr_18531 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18531[(6)] = c__18295__auto___18657);

return statearr_18531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
});})(__18643,c__18295__auto___18657,G__18481_18644,G__18481_18645__$1,n__4648__auto___18642,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18481_18645__$1)].join('')));

}

var G__18667 = (__18643 + (1));
__18643 = G__18667;
continue;
} else {
}
break;
}

var c__18295__auto___18668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18553){
var state_val_18554 = (state_18553[(1)]);
if((state_val_18554 === (7))){
var inst_18549 = (state_18553[(2)]);
var state_18553__$1 = state_18553;
var statearr_18555_18669 = state_18553__$1;
(statearr_18555_18669[(2)] = inst_18549);

(statearr_18555_18669[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18554 === (1))){
var state_18553__$1 = state_18553;
var statearr_18556_18670 = state_18553__$1;
(statearr_18556_18670[(2)] = null);

(statearr_18556_18670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18554 === (4))){
var inst_18534 = (state_18553[(7)]);
var inst_18534__$1 = (state_18553[(2)]);
var inst_18535 = (inst_18534__$1 == null);
var state_18553__$1 = (function (){var statearr_18557 = state_18553;
(statearr_18557[(7)] = inst_18534__$1);

return statearr_18557;
})();
if(cljs.core.truth_(inst_18535)){
var statearr_18558_18671 = state_18553__$1;
(statearr_18558_18671[(1)] = (5));

} else {
var statearr_18559_18672 = state_18553__$1;
(statearr_18559_18672[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18554 === (6))){
var inst_18534 = (state_18553[(7)]);
var inst_18539 = (state_18553[(8)]);
var inst_18539__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18540 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18541 = [inst_18534,inst_18539__$1];
var inst_18542 = (new cljs.core.PersistentVector(null,2,(5),inst_18540,inst_18541,null));
var state_18553__$1 = (function (){var statearr_18560 = state_18553;
(statearr_18560[(8)] = inst_18539__$1);

return statearr_18560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18553__$1,(8),jobs,inst_18542);
} else {
if((state_val_18554 === (3))){
var inst_18551 = (state_18553[(2)]);
var state_18553__$1 = state_18553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18553__$1,inst_18551);
} else {
if((state_val_18554 === (2))){
var state_18553__$1 = state_18553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18553__$1,(4),from);
} else {
if((state_val_18554 === (9))){
var inst_18546 = (state_18553[(2)]);
var state_18553__$1 = (function (){var statearr_18561 = state_18553;
(statearr_18561[(9)] = inst_18546);

return statearr_18561;
})();
var statearr_18562_18673 = state_18553__$1;
(statearr_18562_18673[(2)] = null);

(statearr_18562_18673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18554 === (5))){
var inst_18537 = cljs.core.async.close_BANG_(jobs);
var state_18553__$1 = state_18553;
var statearr_18563_18674 = state_18553__$1;
(statearr_18563_18674[(2)] = inst_18537);

(statearr_18563_18674[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18554 === (8))){
var inst_18539 = (state_18553[(8)]);
var inst_18544 = (state_18553[(2)]);
var state_18553__$1 = (function (){var statearr_18564 = state_18553;
(statearr_18564[(10)] = inst_18544);

return statearr_18564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18553__$1,(9),results,inst_18539);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_18565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__);

(statearr_18565[(1)] = (1));

return statearr_18565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1 = (function (state_18553){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18553);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18566){var ex__18224__auto__ = e18566;
var statearr_18567_18675 = state_18553;
(statearr_18567_18675[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18553[(4)]))){
var statearr_18568_18676 = state_18553;
(statearr_18568_18676[(1)] = cljs.core.first((state_18553[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18677 = state_18553;
state_18553 = G__18677;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = function(state_18553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1.call(this,state_18553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18569 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18569[(6)] = c__18295__auto___18668);

return statearr_18569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


var c__18295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18607){
var state_val_18608 = (state_18607[(1)]);
if((state_val_18608 === (7))){
var inst_18603 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18609_18678 = state_18607__$1;
(statearr_18609_18678[(2)] = inst_18603);

(statearr_18609_18678[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (20))){
var state_18607__$1 = state_18607;
var statearr_18610_18679 = state_18607__$1;
(statearr_18610_18679[(2)] = null);

(statearr_18610_18679[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (1))){
var state_18607__$1 = state_18607;
var statearr_18611_18680 = state_18607__$1;
(statearr_18611_18680[(2)] = null);

(statearr_18611_18680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (4))){
var inst_18572 = (state_18607[(7)]);
var inst_18572__$1 = (state_18607[(2)]);
var inst_18573 = (inst_18572__$1 == null);
var state_18607__$1 = (function (){var statearr_18612 = state_18607;
(statearr_18612[(7)] = inst_18572__$1);

return statearr_18612;
})();
if(cljs.core.truth_(inst_18573)){
var statearr_18613_18681 = state_18607__$1;
(statearr_18613_18681[(1)] = (5));

} else {
var statearr_18614_18682 = state_18607__$1;
(statearr_18614_18682[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (15))){
var inst_18585 = (state_18607[(8)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18607__$1,(18),to,inst_18585);
} else {
if((state_val_18608 === (21))){
var inst_18598 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18615_18683 = state_18607__$1;
(statearr_18615_18683[(2)] = inst_18598);

(statearr_18615_18683[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (13))){
var inst_18600 = (state_18607[(2)]);
var state_18607__$1 = (function (){var statearr_18616 = state_18607;
(statearr_18616[(9)] = inst_18600);

return statearr_18616;
})();
var statearr_18617_18684 = state_18607__$1;
(statearr_18617_18684[(2)] = null);

(statearr_18617_18684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (6))){
var inst_18572 = (state_18607[(7)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18607__$1,(11),inst_18572);
} else {
if((state_val_18608 === (17))){
var inst_18593 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
if(cljs.core.truth_(inst_18593)){
var statearr_18618_18685 = state_18607__$1;
(statearr_18618_18685[(1)] = (19));

} else {
var statearr_18619_18686 = state_18607__$1;
(statearr_18619_18686[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (3))){
var inst_18605 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18607__$1,inst_18605);
} else {
if((state_val_18608 === (12))){
var inst_18582 = (state_18607[(10)]);
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18607__$1,(14),inst_18582);
} else {
if((state_val_18608 === (2))){
var state_18607__$1 = state_18607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18607__$1,(4),results);
} else {
if((state_val_18608 === (19))){
var state_18607__$1 = state_18607;
var statearr_18620_18687 = state_18607__$1;
(statearr_18620_18687[(2)] = null);

(statearr_18620_18687[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (11))){
var inst_18582 = (state_18607[(2)]);
var state_18607__$1 = (function (){var statearr_18621 = state_18607;
(statearr_18621[(10)] = inst_18582);

return statearr_18621;
})();
var statearr_18622_18688 = state_18607__$1;
(statearr_18622_18688[(2)] = null);

(statearr_18622_18688[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (9))){
var state_18607__$1 = state_18607;
var statearr_18623_18689 = state_18607__$1;
(statearr_18623_18689[(2)] = null);

(statearr_18623_18689[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (5))){
var state_18607__$1 = state_18607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18624_18690 = state_18607__$1;
(statearr_18624_18690[(1)] = (8));

} else {
var statearr_18625_18691 = state_18607__$1;
(statearr_18625_18691[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (14))){
var inst_18585 = (state_18607[(8)]);
var inst_18585__$1 = (state_18607[(2)]);
var inst_18586 = (inst_18585__$1 == null);
var inst_18587 = cljs.core.not(inst_18586);
var state_18607__$1 = (function (){var statearr_18626 = state_18607;
(statearr_18626[(8)] = inst_18585__$1);

return statearr_18626;
})();
if(inst_18587){
var statearr_18627_18692 = state_18607__$1;
(statearr_18627_18692[(1)] = (15));

} else {
var statearr_18628_18693 = state_18607__$1;
(statearr_18628_18693[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (16))){
var state_18607__$1 = state_18607;
var statearr_18629_18694 = state_18607__$1;
(statearr_18629_18694[(2)] = false);

(statearr_18629_18694[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (10))){
var inst_18579 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18630_18695 = state_18607__$1;
(statearr_18630_18695[(2)] = inst_18579);

(statearr_18630_18695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (18))){
var inst_18590 = (state_18607[(2)]);
var state_18607__$1 = state_18607;
var statearr_18631_18696 = state_18607__$1;
(statearr_18631_18696[(2)] = inst_18590);

(statearr_18631_18696[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18608 === (8))){
var inst_18576 = cljs.core.async.close_BANG_(to);
var state_18607__$1 = state_18607;
var statearr_18632_18697 = state_18607__$1;
(statearr_18632_18697[(2)] = inst_18576);

(statearr_18632_18697[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_18633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__);

(statearr_18633[(1)] = (1));

return statearr_18633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1 = (function (state_18607){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18607);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18634){var ex__18224__auto__ = e18634;
var statearr_18635_18698 = state_18607;
(statearr_18635_18698[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18607[(4)]))){
var statearr_18636_18699 = state_18607;
(statearr_18636_18699[(1)] = cljs.core.first((state_18607[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18700 = state_18607;
state_18607 = G__18700;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__ = function(state_18607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1.call(this,state_18607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18637 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18637[(6)] = c__18295__auto__);

return statearr_18637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));

return c__18295__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18702 = arguments.length;
switch (G__18702) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18705 = arguments.length;
switch (G__18705) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18708 = arguments.length;
switch (G__18708) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18295__auto___18758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18734){
var state_val_18735 = (state_18734[(1)]);
if((state_val_18735 === (7))){
var inst_18730 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18736_18759 = state_18734__$1;
(statearr_18736_18759[(2)] = inst_18730);

(statearr_18736_18759[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (1))){
var state_18734__$1 = state_18734;
var statearr_18737_18760 = state_18734__$1;
(statearr_18737_18760[(2)] = null);

(statearr_18737_18760[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (4))){
var inst_18711 = (state_18734[(7)]);
var inst_18711__$1 = (state_18734[(2)]);
var inst_18712 = (inst_18711__$1 == null);
var state_18734__$1 = (function (){var statearr_18738 = state_18734;
(statearr_18738[(7)] = inst_18711__$1);

return statearr_18738;
})();
if(cljs.core.truth_(inst_18712)){
var statearr_18739_18761 = state_18734__$1;
(statearr_18739_18761[(1)] = (5));

} else {
var statearr_18740_18762 = state_18734__$1;
(statearr_18740_18762[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (13))){
var state_18734__$1 = state_18734;
var statearr_18741_18763 = state_18734__$1;
(statearr_18741_18763[(2)] = null);

(statearr_18741_18763[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (6))){
var inst_18711 = (state_18734[(7)]);
var inst_18717 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18711) : p.call(null,inst_18711));
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18717)){
var statearr_18742_18764 = state_18734__$1;
(statearr_18742_18764[(1)] = (9));

} else {
var statearr_18743_18765 = state_18734__$1;
(statearr_18743_18765[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (3))){
var inst_18732 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18734__$1,inst_18732);
} else {
if((state_val_18735 === (12))){
var state_18734__$1 = state_18734;
var statearr_18744_18766 = state_18734__$1;
(statearr_18744_18766[(2)] = null);

(statearr_18744_18766[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (2))){
var state_18734__$1 = state_18734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18734__$1,(4),ch);
} else {
if((state_val_18735 === (11))){
var inst_18711 = (state_18734[(7)]);
var inst_18721 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18734__$1,(8),inst_18721,inst_18711);
} else {
if((state_val_18735 === (9))){
var state_18734__$1 = state_18734;
var statearr_18745_18767 = state_18734__$1;
(statearr_18745_18767[(2)] = tc);

(statearr_18745_18767[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (5))){
var inst_18714 = cljs.core.async.close_BANG_(tc);
var inst_18715 = cljs.core.async.close_BANG_(fc);
var state_18734__$1 = (function (){var statearr_18746 = state_18734;
(statearr_18746[(8)] = inst_18714);

return statearr_18746;
})();
var statearr_18747_18768 = state_18734__$1;
(statearr_18747_18768[(2)] = inst_18715);

(statearr_18747_18768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (14))){
var inst_18728 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
var statearr_18748_18769 = state_18734__$1;
(statearr_18748_18769[(2)] = inst_18728);

(statearr_18748_18769[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (10))){
var state_18734__$1 = state_18734;
var statearr_18749_18770 = state_18734__$1;
(statearr_18749_18770[(2)] = fc);

(statearr_18749_18770[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18735 === (8))){
var inst_18723 = (state_18734[(2)]);
var state_18734__$1 = state_18734;
if(cljs.core.truth_(inst_18723)){
var statearr_18750_18771 = state_18734__$1;
(statearr_18750_18771[(1)] = (12));

} else {
var statearr_18751_18772 = state_18734__$1;
(statearr_18751_18772[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_18752 = [null,null,null,null,null,null,null,null,null];
(statearr_18752[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_18752[(1)] = (1));

return statearr_18752;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_18734){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18734);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18753){var ex__18224__auto__ = e18753;
var statearr_18754_18773 = state_18734;
(statearr_18754_18773[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18734[(4)]))){
var statearr_18755_18774 = state_18734;
(statearr_18755_18774[(1)] = cljs.core.first((state_18734[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18775 = state_18734;
state_18734 = G__18775;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_18734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_18734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18756 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18756[(6)] = c__18295__auto___18758);

return statearr_18756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18797){
var state_val_18798 = (state_18797[(1)]);
if((state_val_18798 === (7))){
var inst_18793 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18799_18818 = state_18797__$1;
(statearr_18799_18818[(2)] = inst_18793);

(statearr_18799_18818[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (1))){
var inst_18776 = init;
var inst_18777 = inst_18776;
var state_18797__$1 = (function (){var statearr_18800 = state_18797;
(statearr_18800[(7)] = inst_18777);

return statearr_18800;
})();
var statearr_18801_18819 = state_18797__$1;
(statearr_18801_18819[(2)] = null);

(statearr_18801_18819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (4))){
var inst_18780 = (state_18797[(8)]);
var inst_18780__$1 = (state_18797[(2)]);
var inst_18781 = (inst_18780__$1 == null);
var state_18797__$1 = (function (){var statearr_18802 = state_18797;
(statearr_18802[(8)] = inst_18780__$1);

return statearr_18802;
})();
if(cljs.core.truth_(inst_18781)){
var statearr_18803_18820 = state_18797__$1;
(statearr_18803_18820[(1)] = (5));

} else {
var statearr_18804_18821 = state_18797__$1;
(statearr_18804_18821[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (6))){
var inst_18777 = (state_18797[(7)]);
var inst_18780 = (state_18797[(8)]);
var inst_18784 = (state_18797[(9)]);
var inst_18784__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18777,inst_18780) : f.call(null,inst_18777,inst_18780));
var inst_18785 = cljs.core.reduced_QMARK_(inst_18784__$1);
var state_18797__$1 = (function (){var statearr_18805 = state_18797;
(statearr_18805[(9)] = inst_18784__$1);

return statearr_18805;
})();
if(inst_18785){
var statearr_18806_18822 = state_18797__$1;
(statearr_18806_18822[(1)] = (8));

} else {
var statearr_18807_18823 = state_18797__$1;
(statearr_18807_18823[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (3))){
var inst_18795 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18797__$1,inst_18795);
} else {
if((state_val_18798 === (2))){
var state_18797__$1 = state_18797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18797__$1,(4),ch);
} else {
if((state_val_18798 === (9))){
var inst_18784 = (state_18797[(9)]);
var inst_18777 = inst_18784;
var state_18797__$1 = (function (){var statearr_18808 = state_18797;
(statearr_18808[(7)] = inst_18777);

return statearr_18808;
})();
var statearr_18809_18824 = state_18797__$1;
(statearr_18809_18824[(2)] = null);

(statearr_18809_18824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (5))){
var inst_18777 = (state_18797[(7)]);
var state_18797__$1 = state_18797;
var statearr_18810_18825 = state_18797__$1;
(statearr_18810_18825[(2)] = inst_18777);

(statearr_18810_18825[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (10))){
var inst_18791 = (state_18797[(2)]);
var state_18797__$1 = state_18797;
var statearr_18811_18826 = state_18797__$1;
(statearr_18811_18826[(2)] = inst_18791);

(statearr_18811_18826[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18798 === (8))){
var inst_18784 = (state_18797[(9)]);
var inst_18787 = cljs.core.deref(inst_18784);
var state_18797__$1 = state_18797;
var statearr_18812_18827 = state_18797__$1;
(statearr_18812_18827[(2)] = inst_18787);

(statearr_18812_18827[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18221__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18221__auto____0 = (function (){
var statearr_18813 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18813[(0)] = cljs$core$async$reduce_$_state_machine__18221__auto__);

(statearr_18813[(1)] = (1));

return statearr_18813;
});
var cljs$core$async$reduce_$_state_machine__18221__auto____1 = (function (state_18797){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18797);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18814){var ex__18224__auto__ = e18814;
var statearr_18815_18828 = state_18797;
(statearr_18815_18828[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18797[(4)]))){
var statearr_18816_18829 = state_18797;
(statearr_18816_18829[(1)] = cljs.core.first((state_18797[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18830 = state_18797;
state_18797 = G__18830;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18221__auto__ = function(state_18797){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18221__auto____1.call(this,state_18797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18221__auto____0;
cljs$core$async$reduce_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18221__auto____1;
return cljs$core$async$reduce_$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18817 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18817[(6)] = c__18295__auto__);

return statearr_18817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));

return c__18295__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18836){
var state_val_18837 = (state_18836[(1)]);
if((state_val_18837 === (1))){
var inst_18831 = cljs.core.async.reduce(f__$1,init,ch);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(2),inst_18831);
} else {
if((state_val_18837 === (2))){
var inst_18833 = (state_18836[(2)]);
var inst_18834 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18833) : f__$1.call(null,inst_18833));
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18836__$1,inst_18834);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18221__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18221__auto____0 = (function (){
var statearr_18838 = [null,null,null,null,null,null,null];
(statearr_18838[(0)] = cljs$core$async$transduce_$_state_machine__18221__auto__);

(statearr_18838[(1)] = (1));

return statearr_18838;
});
var cljs$core$async$transduce_$_state_machine__18221__auto____1 = (function (state_18836){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18836);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18839){var ex__18224__auto__ = e18839;
var statearr_18840_18843 = state_18836;
(statearr_18840_18843[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18836[(4)]))){
var statearr_18841_18844 = state_18836;
(statearr_18841_18844[(1)] = cljs.core.first((state_18836[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18845 = state_18836;
state_18836 = G__18845;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18221__auto__ = function(state_18836){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18221__auto____1.call(this,state_18836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18221__auto____0;
cljs$core$async$transduce_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18221__auto____1;
return cljs$core$async$transduce_$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18842 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18842[(6)] = c__18295__auto__);

return statearr_18842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));

return c__18295__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18847 = arguments.length;
switch (G__18847) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_18872){
var state_val_18873 = (state_18872[(1)]);
if((state_val_18873 === (7))){
var inst_18854 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18874_18896 = state_18872__$1;
(statearr_18874_18896[(2)] = inst_18854);

(statearr_18874_18896[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (1))){
var inst_18848 = cljs.core.seq(coll);
var inst_18849 = inst_18848;
var state_18872__$1 = (function (){var statearr_18875 = state_18872;
(statearr_18875[(7)] = inst_18849);

return statearr_18875;
})();
var statearr_18876_18897 = state_18872__$1;
(statearr_18876_18897[(2)] = null);

(statearr_18876_18897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (4))){
var inst_18849 = (state_18872[(7)]);
var inst_18852 = cljs.core.first(inst_18849);
var state_18872__$1 = state_18872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18872__$1,(7),ch,inst_18852);
} else {
if((state_val_18873 === (13))){
var inst_18866 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18877_18898 = state_18872__$1;
(statearr_18877_18898[(2)] = inst_18866);

(statearr_18877_18898[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (6))){
var inst_18857 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
if(cljs.core.truth_(inst_18857)){
var statearr_18878_18899 = state_18872__$1;
(statearr_18878_18899[(1)] = (8));

} else {
var statearr_18879_18900 = state_18872__$1;
(statearr_18879_18900[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (3))){
var inst_18870 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18872__$1,inst_18870);
} else {
if((state_val_18873 === (12))){
var state_18872__$1 = state_18872;
var statearr_18880_18901 = state_18872__$1;
(statearr_18880_18901[(2)] = null);

(statearr_18880_18901[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (2))){
var inst_18849 = (state_18872[(7)]);
var state_18872__$1 = state_18872;
if(cljs.core.truth_(inst_18849)){
var statearr_18881_18902 = state_18872__$1;
(statearr_18881_18902[(1)] = (4));

} else {
var statearr_18882_18903 = state_18872__$1;
(statearr_18882_18903[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (11))){
var inst_18863 = cljs.core.async.close_BANG_(ch);
var state_18872__$1 = state_18872;
var statearr_18883_18904 = state_18872__$1;
(statearr_18883_18904[(2)] = inst_18863);

(statearr_18883_18904[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (9))){
var state_18872__$1 = state_18872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18884_18905 = state_18872__$1;
(statearr_18884_18905[(1)] = (11));

} else {
var statearr_18885_18906 = state_18872__$1;
(statearr_18885_18906[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (5))){
var inst_18849 = (state_18872[(7)]);
var state_18872__$1 = state_18872;
var statearr_18886_18907 = state_18872__$1;
(statearr_18886_18907[(2)] = inst_18849);

(statearr_18886_18907[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (10))){
var inst_18868 = (state_18872[(2)]);
var state_18872__$1 = state_18872;
var statearr_18887_18908 = state_18872__$1;
(statearr_18887_18908[(2)] = inst_18868);

(statearr_18887_18908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18873 === (8))){
var inst_18849 = (state_18872[(7)]);
var inst_18859 = cljs.core.next(inst_18849);
var inst_18849__$1 = inst_18859;
var state_18872__$1 = (function (){var statearr_18888 = state_18872;
(statearr_18888[(7)] = inst_18849__$1);

return statearr_18888;
})();
var statearr_18889_18909 = state_18872__$1;
(statearr_18889_18909[(2)] = null);

(statearr_18889_18909[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_18872){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_18872);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e18891){var ex__18224__auto__ = e18891;
var statearr_18892_18910 = state_18872;
(statearr_18892_18910[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_18872[(4)]))){
var statearr_18893_18911 = state_18872;
(statearr_18893_18911[(1)] = cljs.core.first((state_18872[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__18912 = state_18872;
state_18872 = G__18912;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_18872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_18872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_18894 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_18894[(6)] = c__18295__auto__);

return statearr_18894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));

return c__18295__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18914 = arguments.length;
switch (G__18914) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18916 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4464__auto__.call(null,_));
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4461__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18916(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18917 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4464__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4461__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18917(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18918 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18918(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18919 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18919(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18920 = (function (ch,cs,meta18921){
this.ch = ch;
this.cs = cs;
this.meta18921 = meta18921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18922,meta18921__$1){
var self__ = this;
var _18922__$1 = this;
return (new cljs.core.async.t_cljs$core$async18920(self__.ch,self__.cs,meta18921__$1));
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18922){
var self__ = this;
var _18922__$1 = this;
return self__.meta18921;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18920.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta18921], null);
}));

(cljs.core.async.t_cljs$core$async18920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18920");

(cljs.core.async.t_cljs$core$async18920.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async18920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18920.
 */
cljs.core.async.__GT_t_cljs$core$async18920 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18920(ch__$1,cs__$1,meta18921){
return (new cljs.core.async.t_cljs$core$async18920(ch__$1,cs__$1,meta18921));
});

}

return (new cljs.core.async.t_cljs$core$async18920(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18295__auto___19139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19055){
var state_val_19056 = (state_19055[(1)]);
if((state_val_19056 === (7))){
var inst_19051 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19057_19140 = state_19055__$1;
(statearr_19057_19140[(2)] = inst_19051);

(statearr_19057_19140[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (20))){
var inst_18956 = (state_19055[(7)]);
var inst_18968 = cljs.core.first(inst_18956);
var inst_18969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18968,(0),null);
var inst_18970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18968,(1),null);
var state_19055__$1 = (function (){var statearr_19058 = state_19055;
(statearr_19058[(8)] = inst_18969);

return statearr_19058;
})();
if(cljs.core.truth_(inst_18970)){
var statearr_19059_19141 = state_19055__$1;
(statearr_19059_19141[(1)] = (22));

} else {
var statearr_19060_19142 = state_19055__$1;
(statearr_19060_19142[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (27))){
var inst_19005 = (state_19055[(9)]);
var inst_19000 = (state_19055[(10)]);
var inst_18925 = (state_19055[(11)]);
var inst_18998 = (state_19055[(12)]);
var inst_19005__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18998,inst_19000);
var inst_19006 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19005__$1,inst_18925,done);
var state_19055__$1 = (function (){var statearr_19061 = state_19055;
(statearr_19061[(9)] = inst_19005__$1);

return statearr_19061;
})();
if(cljs.core.truth_(inst_19006)){
var statearr_19062_19143 = state_19055__$1;
(statearr_19062_19143[(1)] = (30));

} else {
var statearr_19063_19144 = state_19055__$1;
(statearr_19063_19144[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (1))){
var state_19055__$1 = state_19055;
var statearr_19064_19145 = state_19055__$1;
(statearr_19064_19145[(2)] = null);

(statearr_19064_19145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (24))){
var inst_18956 = (state_19055[(7)]);
var inst_18975 = (state_19055[(2)]);
var inst_18976 = cljs.core.next(inst_18956);
var inst_18934 = inst_18976;
var inst_18935 = null;
var inst_18936 = (0);
var inst_18937 = (0);
var state_19055__$1 = (function (){var statearr_19065 = state_19055;
(statearr_19065[(13)] = inst_18936);

(statearr_19065[(14)] = inst_18937);

(statearr_19065[(15)] = inst_18975);

(statearr_19065[(16)] = inst_18935);

(statearr_19065[(17)] = inst_18934);

return statearr_19065;
})();
var statearr_19066_19146 = state_19055__$1;
(statearr_19066_19146[(2)] = null);

(statearr_19066_19146[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (39))){
var state_19055__$1 = state_19055;
var statearr_19070_19147 = state_19055__$1;
(statearr_19070_19147[(2)] = null);

(statearr_19070_19147[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (4))){
var inst_18925 = (state_19055[(11)]);
var inst_18925__$1 = (state_19055[(2)]);
var inst_18926 = (inst_18925__$1 == null);
var state_19055__$1 = (function (){var statearr_19071 = state_19055;
(statearr_19071[(11)] = inst_18925__$1);

return statearr_19071;
})();
if(cljs.core.truth_(inst_18926)){
var statearr_19072_19148 = state_19055__$1;
(statearr_19072_19148[(1)] = (5));

} else {
var statearr_19073_19149 = state_19055__$1;
(statearr_19073_19149[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (15))){
var inst_18936 = (state_19055[(13)]);
var inst_18937 = (state_19055[(14)]);
var inst_18935 = (state_19055[(16)]);
var inst_18934 = (state_19055[(17)]);
var inst_18952 = (state_19055[(2)]);
var inst_18953 = (inst_18937 + (1));
var tmp19067 = inst_18936;
var tmp19068 = inst_18935;
var tmp19069 = inst_18934;
var inst_18934__$1 = tmp19069;
var inst_18935__$1 = tmp19068;
var inst_18936__$1 = tmp19067;
var inst_18937__$1 = inst_18953;
var state_19055__$1 = (function (){var statearr_19074 = state_19055;
(statearr_19074[(13)] = inst_18936__$1);

(statearr_19074[(14)] = inst_18937__$1);

(statearr_19074[(16)] = inst_18935__$1);

(statearr_19074[(17)] = inst_18934__$1);

(statearr_19074[(18)] = inst_18952);

return statearr_19074;
})();
var statearr_19075_19150 = state_19055__$1;
(statearr_19075_19150[(2)] = null);

(statearr_19075_19150[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (21))){
var inst_18979 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19079_19151 = state_19055__$1;
(statearr_19079_19151[(2)] = inst_18979);

(statearr_19079_19151[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (31))){
var inst_19005 = (state_19055[(9)]);
var inst_19009 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19005);
var state_19055__$1 = state_19055;
var statearr_19080_19152 = state_19055__$1;
(statearr_19080_19152[(2)] = inst_19009);

(statearr_19080_19152[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (32))){
var inst_19000 = (state_19055[(10)]);
var inst_18999 = (state_19055[(19)]);
var inst_18997 = (state_19055[(20)]);
var inst_18998 = (state_19055[(12)]);
var inst_19011 = (state_19055[(2)]);
var inst_19012 = (inst_19000 + (1));
var tmp19076 = inst_18999;
var tmp19077 = inst_18997;
var tmp19078 = inst_18998;
var inst_18997__$1 = tmp19077;
var inst_18998__$1 = tmp19078;
var inst_18999__$1 = tmp19076;
var inst_19000__$1 = inst_19012;
var state_19055__$1 = (function (){var statearr_19081 = state_19055;
(statearr_19081[(10)] = inst_19000__$1);

(statearr_19081[(19)] = inst_18999__$1);

(statearr_19081[(21)] = inst_19011);

(statearr_19081[(20)] = inst_18997__$1);

(statearr_19081[(12)] = inst_18998__$1);

return statearr_19081;
})();
var statearr_19082_19153 = state_19055__$1;
(statearr_19082_19153[(2)] = null);

(statearr_19082_19153[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (40))){
var inst_19024 = (state_19055[(22)]);
var inst_19028 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19024);
var state_19055__$1 = state_19055;
var statearr_19083_19154 = state_19055__$1;
(statearr_19083_19154[(2)] = inst_19028);

(statearr_19083_19154[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (33))){
var inst_19015 = (state_19055[(23)]);
var inst_19017 = cljs.core.chunked_seq_QMARK_(inst_19015);
var state_19055__$1 = state_19055;
if(inst_19017){
var statearr_19084_19155 = state_19055__$1;
(statearr_19084_19155[(1)] = (36));

} else {
var statearr_19085_19156 = state_19055__$1;
(statearr_19085_19156[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (13))){
var inst_18946 = (state_19055[(24)]);
var inst_18949 = cljs.core.async.close_BANG_(inst_18946);
var state_19055__$1 = state_19055;
var statearr_19086_19157 = state_19055__$1;
(statearr_19086_19157[(2)] = inst_18949);

(statearr_19086_19157[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (22))){
var inst_18969 = (state_19055[(8)]);
var inst_18972 = cljs.core.async.close_BANG_(inst_18969);
var state_19055__$1 = state_19055;
var statearr_19087_19158 = state_19055__$1;
(statearr_19087_19158[(2)] = inst_18972);

(statearr_19087_19158[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (36))){
var inst_19015 = (state_19055[(23)]);
var inst_19019 = cljs.core.chunk_first(inst_19015);
var inst_19020 = cljs.core.chunk_rest(inst_19015);
var inst_19021 = cljs.core.count(inst_19019);
var inst_18997 = inst_19020;
var inst_18998 = inst_19019;
var inst_18999 = inst_19021;
var inst_19000 = (0);
var state_19055__$1 = (function (){var statearr_19088 = state_19055;
(statearr_19088[(10)] = inst_19000);

(statearr_19088[(19)] = inst_18999);

(statearr_19088[(20)] = inst_18997);

(statearr_19088[(12)] = inst_18998);

return statearr_19088;
})();
var statearr_19089_19159 = state_19055__$1;
(statearr_19089_19159[(2)] = null);

(statearr_19089_19159[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (41))){
var inst_19015 = (state_19055[(23)]);
var inst_19030 = (state_19055[(2)]);
var inst_19031 = cljs.core.next(inst_19015);
var inst_18997 = inst_19031;
var inst_18998 = null;
var inst_18999 = (0);
var inst_19000 = (0);
var state_19055__$1 = (function (){var statearr_19090 = state_19055;
(statearr_19090[(10)] = inst_19000);

(statearr_19090[(19)] = inst_18999);

(statearr_19090[(20)] = inst_18997);

(statearr_19090[(25)] = inst_19030);

(statearr_19090[(12)] = inst_18998);

return statearr_19090;
})();
var statearr_19091_19160 = state_19055__$1;
(statearr_19091_19160[(2)] = null);

(statearr_19091_19160[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (43))){
var state_19055__$1 = state_19055;
var statearr_19092_19161 = state_19055__$1;
(statearr_19092_19161[(2)] = null);

(statearr_19092_19161[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (29))){
var inst_19039 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19093_19162 = state_19055__$1;
(statearr_19093_19162[(2)] = inst_19039);

(statearr_19093_19162[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (44))){
var inst_19048 = (state_19055[(2)]);
var state_19055__$1 = (function (){var statearr_19094 = state_19055;
(statearr_19094[(26)] = inst_19048);

return statearr_19094;
})();
var statearr_19095_19163 = state_19055__$1;
(statearr_19095_19163[(2)] = null);

(statearr_19095_19163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (6))){
var inst_18989 = (state_19055[(27)]);
var inst_18988 = cljs.core.deref(cs);
var inst_18989__$1 = cljs.core.keys(inst_18988);
var inst_18990 = cljs.core.count(inst_18989__$1);
var inst_18991 = cljs.core.reset_BANG_(dctr,inst_18990);
var inst_18996 = cljs.core.seq(inst_18989__$1);
var inst_18997 = inst_18996;
var inst_18998 = null;
var inst_18999 = (0);
var inst_19000 = (0);
var state_19055__$1 = (function (){var statearr_19096 = state_19055;
(statearr_19096[(10)] = inst_19000);

(statearr_19096[(19)] = inst_18999);

(statearr_19096[(27)] = inst_18989__$1);

(statearr_19096[(20)] = inst_18997);

(statearr_19096[(28)] = inst_18991);

(statearr_19096[(12)] = inst_18998);

return statearr_19096;
})();
var statearr_19097_19164 = state_19055__$1;
(statearr_19097_19164[(2)] = null);

(statearr_19097_19164[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (28))){
var inst_19015 = (state_19055[(23)]);
var inst_18997 = (state_19055[(20)]);
var inst_19015__$1 = cljs.core.seq(inst_18997);
var state_19055__$1 = (function (){var statearr_19098 = state_19055;
(statearr_19098[(23)] = inst_19015__$1);

return statearr_19098;
})();
if(inst_19015__$1){
var statearr_19099_19165 = state_19055__$1;
(statearr_19099_19165[(1)] = (33));

} else {
var statearr_19100_19166 = state_19055__$1;
(statearr_19100_19166[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (25))){
var inst_19000 = (state_19055[(10)]);
var inst_18999 = (state_19055[(19)]);
var inst_19002 = (inst_19000 < inst_18999);
var inst_19003 = inst_19002;
var state_19055__$1 = state_19055;
if(cljs.core.truth_(inst_19003)){
var statearr_19101_19167 = state_19055__$1;
(statearr_19101_19167[(1)] = (27));

} else {
var statearr_19102_19168 = state_19055__$1;
(statearr_19102_19168[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (34))){
var state_19055__$1 = state_19055;
var statearr_19103_19169 = state_19055__$1;
(statearr_19103_19169[(2)] = null);

(statearr_19103_19169[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (17))){
var state_19055__$1 = state_19055;
var statearr_19104_19170 = state_19055__$1;
(statearr_19104_19170[(2)] = null);

(statearr_19104_19170[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (3))){
var inst_19053 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19055__$1,inst_19053);
} else {
if((state_val_19056 === (12))){
var inst_18984 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19105_19171 = state_19055__$1;
(statearr_19105_19171[(2)] = inst_18984);

(statearr_19105_19171[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (2))){
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19055__$1,(4),ch);
} else {
if((state_val_19056 === (23))){
var state_19055__$1 = state_19055;
var statearr_19106_19172 = state_19055__$1;
(statearr_19106_19172[(2)] = null);

(statearr_19106_19172[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (35))){
var inst_19037 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19107_19173 = state_19055__$1;
(statearr_19107_19173[(2)] = inst_19037);

(statearr_19107_19173[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (19))){
var inst_18956 = (state_19055[(7)]);
var inst_18960 = cljs.core.chunk_first(inst_18956);
var inst_18961 = cljs.core.chunk_rest(inst_18956);
var inst_18962 = cljs.core.count(inst_18960);
var inst_18934 = inst_18961;
var inst_18935 = inst_18960;
var inst_18936 = inst_18962;
var inst_18937 = (0);
var state_19055__$1 = (function (){var statearr_19108 = state_19055;
(statearr_19108[(13)] = inst_18936);

(statearr_19108[(14)] = inst_18937);

(statearr_19108[(16)] = inst_18935);

(statearr_19108[(17)] = inst_18934);

return statearr_19108;
})();
var statearr_19109_19174 = state_19055__$1;
(statearr_19109_19174[(2)] = null);

(statearr_19109_19174[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (11))){
var inst_18934 = (state_19055[(17)]);
var inst_18956 = (state_19055[(7)]);
var inst_18956__$1 = cljs.core.seq(inst_18934);
var state_19055__$1 = (function (){var statearr_19110 = state_19055;
(statearr_19110[(7)] = inst_18956__$1);

return statearr_19110;
})();
if(inst_18956__$1){
var statearr_19111_19175 = state_19055__$1;
(statearr_19111_19175[(1)] = (16));

} else {
var statearr_19112_19176 = state_19055__$1;
(statearr_19112_19176[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (9))){
var inst_18986 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19113_19177 = state_19055__$1;
(statearr_19113_19177[(2)] = inst_18986);

(statearr_19113_19177[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (5))){
var inst_18932 = cljs.core.deref(cs);
var inst_18933 = cljs.core.seq(inst_18932);
var inst_18934 = inst_18933;
var inst_18935 = null;
var inst_18936 = (0);
var inst_18937 = (0);
var state_19055__$1 = (function (){var statearr_19114 = state_19055;
(statearr_19114[(13)] = inst_18936);

(statearr_19114[(14)] = inst_18937);

(statearr_19114[(16)] = inst_18935);

(statearr_19114[(17)] = inst_18934);

return statearr_19114;
})();
var statearr_19115_19178 = state_19055__$1;
(statearr_19115_19178[(2)] = null);

(statearr_19115_19178[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (14))){
var state_19055__$1 = state_19055;
var statearr_19116_19179 = state_19055__$1;
(statearr_19116_19179[(2)] = null);

(statearr_19116_19179[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (45))){
var inst_19045 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19117_19180 = state_19055__$1;
(statearr_19117_19180[(2)] = inst_19045);

(statearr_19117_19180[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (26))){
var inst_18989 = (state_19055[(27)]);
var inst_19041 = (state_19055[(2)]);
var inst_19042 = cljs.core.seq(inst_18989);
var state_19055__$1 = (function (){var statearr_19118 = state_19055;
(statearr_19118[(29)] = inst_19041);

return statearr_19118;
})();
if(inst_19042){
var statearr_19119_19181 = state_19055__$1;
(statearr_19119_19181[(1)] = (42));

} else {
var statearr_19120_19182 = state_19055__$1;
(statearr_19120_19182[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (16))){
var inst_18956 = (state_19055[(7)]);
var inst_18958 = cljs.core.chunked_seq_QMARK_(inst_18956);
var state_19055__$1 = state_19055;
if(inst_18958){
var statearr_19121_19183 = state_19055__$1;
(statearr_19121_19183[(1)] = (19));

} else {
var statearr_19122_19184 = state_19055__$1;
(statearr_19122_19184[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (38))){
var inst_19034 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19123_19185 = state_19055__$1;
(statearr_19123_19185[(2)] = inst_19034);

(statearr_19123_19185[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (30))){
var state_19055__$1 = state_19055;
var statearr_19124_19186 = state_19055__$1;
(statearr_19124_19186[(2)] = null);

(statearr_19124_19186[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (10))){
var inst_18937 = (state_19055[(14)]);
var inst_18935 = (state_19055[(16)]);
var inst_18945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18935,inst_18937);
var inst_18946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18945,(0),null);
var inst_18947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18945,(1),null);
var state_19055__$1 = (function (){var statearr_19125 = state_19055;
(statearr_19125[(24)] = inst_18946);

return statearr_19125;
})();
if(cljs.core.truth_(inst_18947)){
var statearr_19126_19187 = state_19055__$1;
(statearr_19126_19187[(1)] = (13));

} else {
var statearr_19127_19188 = state_19055__$1;
(statearr_19127_19188[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (18))){
var inst_18982 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19128_19189 = state_19055__$1;
(statearr_19128_19189[(2)] = inst_18982);

(statearr_19128_19189[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (42))){
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19055__$1,(45),dchan);
} else {
if((state_val_19056 === (37))){
var inst_19015 = (state_19055[(23)]);
var inst_18925 = (state_19055[(11)]);
var inst_19024 = (state_19055[(22)]);
var inst_19024__$1 = cljs.core.first(inst_19015);
var inst_19025 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19024__$1,inst_18925,done);
var state_19055__$1 = (function (){var statearr_19129 = state_19055;
(statearr_19129[(22)] = inst_19024__$1);

return statearr_19129;
})();
if(cljs.core.truth_(inst_19025)){
var statearr_19130_19190 = state_19055__$1;
(statearr_19130_19190[(1)] = (39));

} else {
var statearr_19131_19191 = state_19055__$1;
(statearr_19131_19191[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (8))){
var inst_18936 = (state_19055[(13)]);
var inst_18937 = (state_19055[(14)]);
var inst_18939 = (inst_18937 < inst_18936);
var inst_18940 = inst_18939;
var state_19055__$1 = state_19055;
if(cljs.core.truth_(inst_18940)){
var statearr_19132_19192 = state_19055__$1;
(statearr_19132_19192[(1)] = (10));

} else {
var statearr_19133_19193 = state_19055__$1;
(statearr_19133_19193[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__18221__auto__ = null;
var cljs$core$async$mult_$_state_machine__18221__auto____0 = (function (){
var statearr_19134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19134[(0)] = cljs$core$async$mult_$_state_machine__18221__auto__);

(statearr_19134[(1)] = (1));

return statearr_19134;
});
var cljs$core$async$mult_$_state_machine__18221__auto____1 = (function (state_19055){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19055);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19135){var ex__18224__auto__ = e19135;
var statearr_19136_19194 = state_19055;
(statearr_19136_19194[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19055[(4)]))){
var statearr_19137_19195 = state_19055;
(statearr_19137_19195[(1)] = cljs.core.first((state_19055[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19196 = state_19055;
state_19055 = G__19196;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18221__auto__ = function(state_19055){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18221__auto____1.call(this,state_19055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18221__auto____0;
cljs$core$async$mult_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18221__auto____1;
return cljs$core$async$mult_$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19138 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19138[(6)] = c__18295__auto___19139);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19198 = arguments.length;
switch (G__19198) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19200 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19200(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19201 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4464__auto__.call(null,m,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4461__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19201(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19202 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4464__auto__.call(null,m));
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4461__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19202(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19203 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4464__auto__.call(null,m,state_map));
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4461__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19203(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19204 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4464__auto__.call(null,m,mode));
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4461__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19204(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___19214 = arguments.length;
var i__4772__auto___19215 = (0);
while(true){
if((i__4772__auto___19215 < len__4771__auto___19214)){
args__4777__auto__.push((arguments[i__4772__auto___19215]));

var G__19216 = (i__4772__auto___19215 + (1));
i__4772__auto___19215 = G__19216;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19209){
var map__19210 = p__19209;
var map__19210__$1 = cljs.core.__destructure_map(map__19210);
var opts = map__19210__$1;
var statearr_19211_19217 = state;
(statearr_19211_19217[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19212_19218 = state;
(statearr_19212_19218[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_19213_19219 = state;
(statearr_19213_19219[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19205){
var G__19206 = cljs.core.first(seq19205);
var seq19205__$1 = cljs.core.next(seq19205);
var G__19207 = cljs.core.first(seq19205__$1);
var seq19205__$2 = cljs.core.next(seq19205__$1);
var G__19208 = cljs.core.first(seq19205__$2);
var seq19205__$3 = cljs.core.next(seq19205__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19206,G__19207,G__19208,seq19205__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19220 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19220 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19221){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19221 = meta19221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19222,meta19221__$1){
var self__ = this;
var _19222__$1 = this;
return (new cljs.core.async.t_cljs$core$async19220(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19221__$1));
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19222){
var self__ = this;
var _19222__$1 = this;
return self__.meta19221;
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19220.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta19221], null);
}));

(cljs.core.async.t_cljs$core$async19220.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19220");

(cljs.core.async.t_cljs$core$async19220.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19220");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19220.
 */
cljs.core.async.__GT_t_cljs$core$async19220 = (function cljs$core$async$mix_$___GT_t_cljs$core$async19220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19221){
return (new cljs.core.async.t_cljs$core$async19220(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19221));
});

}

return (new cljs.core.async.t_cljs$core$async19220(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18295__auto___19320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19284){
var state_val_19285 = (state_19284[(1)]);
if((state_val_19285 === (7))){
var inst_19280 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19286_19321 = state_19284__$1;
(statearr_19286_19321[(2)] = inst_19280);

(statearr_19286_19321[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (20))){
var inst_19274 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19287_19322 = state_19284__$1;
(statearr_19287_19322[(2)] = inst_19274);

(statearr_19287_19322[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (1))){
var inst_19226 = calc_state();
var inst_19227 = cljs.core.__destructure_map(inst_19226);
var inst_19228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19227,cljs.core.cst$kw$solos);
var inst_19229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19227,cljs.core.cst$kw$mutes);
var inst_19230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19227,cljs.core.cst$kw$reads);
var inst_19231 = inst_19226;
var state_19284__$1 = (function (){var statearr_19288 = state_19284;
(statearr_19288[(7)] = inst_19228);

(statearr_19288[(8)] = inst_19230);

(statearr_19288[(9)] = inst_19231);

(statearr_19288[(10)] = inst_19229);

return statearr_19288;
})();
var statearr_19289_19323 = state_19284__$1;
(statearr_19289_19323[(2)] = null);

(statearr_19289_19323[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (4))){
var inst_19243 = (state_19284[(11)]);
var inst_19244 = (state_19284[(12)]);
var inst_19242 = (state_19284[(2)]);
var inst_19243__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19242,(0),null);
var inst_19244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19242,(1),null);
var inst_19245 = (inst_19243__$1 == null);
var inst_19246 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19244__$1,change);
var inst_19247 = ((inst_19245) || (inst_19246));
var state_19284__$1 = (function (){var statearr_19290 = state_19284;
(statearr_19290[(11)] = inst_19243__$1);

(statearr_19290[(12)] = inst_19244__$1);

return statearr_19290;
})();
if(cljs.core.truth_(inst_19247)){
var statearr_19291_19324 = state_19284__$1;
(statearr_19291_19324[(1)] = (5));

} else {
var statearr_19292_19325 = state_19284__$1;
(statearr_19292_19325[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (15))){
var inst_19234 = (state_19284[(13)]);
var inst_19231 = inst_19234;
var state_19284__$1 = (function (){var statearr_19293 = state_19284;
(statearr_19293[(9)] = inst_19231);

return statearr_19293;
})();
var statearr_19294_19326 = state_19284__$1;
(statearr_19294_19326[(2)] = null);

(statearr_19294_19326[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (13))){
var inst_19266 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
if(cljs.core.truth_(inst_19266)){
var statearr_19295_19327 = state_19284__$1;
(statearr_19295_19327[(1)] = (14));

} else {
var statearr_19296_19328 = state_19284__$1;
(statearr_19296_19328[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (6))){
var inst_19258 = (state_19284[(14)]);
var inst_19235 = (state_19284[(15)]);
var inst_19244 = (state_19284[(12)]);
var inst_19258__$1 = (inst_19235.cljs$core$IFn$_invoke$arity$1 ? inst_19235.cljs$core$IFn$_invoke$arity$1(inst_19244) : inst_19235.call(null,inst_19244));
var state_19284__$1 = (function (){var statearr_19297 = state_19284;
(statearr_19297[(14)] = inst_19258__$1);

return statearr_19297;
})();
if(cljs.core.truth_(inst_19258__$1)){
var statearr_19298_19329 = state_19284__$1;
(statearr_19298_19329[(1)] = (11));

} else {
var statearr_19299_19330 = state_19284__$1;
(statearr_19299_19330[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (17))){
var inst_19269 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
if(cljs.core.truth_(inst_19269)){
var statearr_19300_19331 = state_19284__$1;
(statearr_19300_19331[(1)] = (18));

} else {
var statearr_19301_19332 = state_19284__$1;
(statearr_19301_19332[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (3))){
var inst_19282 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19284__$1,inst_19282);
} else {
if((state_val_19285 === (12))){
var inst_19236 = (state_19284[(16)]);
var inst_19235 = (state_19284[(15)]);
var inst_19244 = (state_19284[(12)]);
var inst_19261 = cljs.core.empty_QMARK_(inst_19235);
var inst_19262 = (inst_19236.cljs$core$IFn$_invoke$arity$1 ? inst_19236.cljs$core$IFn$_invoke$arity$1(inst_19244) : inst_19236.call(null,inst_19244));
var inst_19263 = cljs.core.not(inst_19262);
var inst_19264 = ((inst_19261) && (inst_19263));
var state_19284__$1 = state_19284;
var statearr_19302_19333 = state_19284__$1;
(statearr_19302_19333[(2)] = inst_19264);

(statearr_19302_19333[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (2))){
var inst_19231 = (state_19284[(9)]);
var inst_19234 = (state_19284[(13)]);
var inst_19234__$1 = cljs.core.__destructure_map(inst_19231);
var inst_19235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234__$1,cljs.core.cst$kw$solos);
var inst_19236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234__$1,cljs.core.cst$kw$mutes);
var inst_19237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19234__$1,cljs.core.cst$kw$reads);
var state_19284__$1 = (function (){var statearr_19303 = state_19284;
(statearr_19303[(16)] = inst_19236);

(statearr_19303[(15)] = inst_19235);

(statearr_19303[(13)] = inst_19234__$1);

return statearr_19303;
})();
return cljs.core.async.ioc_alts_BANG_(state_19284__$1,(4),inst_19237);
} else {
if((state_val_19285 === (19))){
var state_19284__$1 = state_19284;
var statearr_19304_19334 = state_19284__$1;
(statearr_19304_19334[(2)] = null);

(statearr_19304_19334[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (11))){
var inst_19258 = (state_19284[(14)]);
var state_19284__$1 = state_19284;
var statearr_19305_19335 = state_19284__$1;
(statearr_19305_19335[(2)] = inst_19258);

(statearr_19305_19335[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (9))){
var state_19284__$1 = state_19284;
var statearr_19306_19336 = state_19284__$1;
(statearr_19306_19336[(2)] = null);

(statearr_19306_19336[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (5))){
var inst_19243 = (state_19284[(11)]);
var inst_19249 = (inst_19243 == null);
var state_19284__$1 = state_19284;
if(cljs.core.truth_(inst_19249)){
var statearr_19307_19337 = state_19284__$1;
(statearr_19307_19337[(1)] = (8));

} else {
var statearr_19308_19338 = state_19284__$1;
(statearr_19308_19338[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (14))){
var inst_19243 = (state_19284[(11)]);
var state_19284__$1 = state_19284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19284__$1,(17),out,inst_19243);
} else {
if((state_val_19285 === (16))){
var inst_19278 = (state_19284[(2)]);
var state_19284__$1 = state_19284;
var statearr_19309_19339 = state_19284__$1;
(statearr_19309_19339[(2)] = inst_19278);

(statearr_19309_19339[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (10))){
var inst_19254 = (state_19284[(2)]);
var inst_19255 = calc_state();
var inst_19231 = inst_19255;
var state_19284__$1 = (function (){var statearr_19310 = state_19284;
(statearr_19310[(17)] = inst_19254);

(statearr_19310[(9)] = inst_19231);

return statearr_19310;
})();
var statearr_19311_19340 = state_19284__$1;
(statearr_19311_19340[(2)] = null);

(statearr_19311_19340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (18))){
var inst_19234 = (state_19284[(13)]);
var inst_19231 = inst_19234;
var state_19284__$1 = (function (){var statearr_19312 = state_19284;
(statearr_19312[(9)] = inst_19231);

return statearr_19312;
})();
var statearr_19313_19341 = state_19284__$1;
(statearr_19313_19341[(2)] = null);

(statearr_19313_19341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19285 === (8))){
var inst_19244 = (state_19284[(12)]);
var inst_19251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19244);
var state_19284__$1 = state_19284;
var statearr_19314_19342 = state_19284__$1;
(statearr_19314_19342[(2)] = inst_19251);

(statearr_19314_19342[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__18221__auto__ = null;
var cljs$core$async$mix_$_state_machine__18221__auto____0 = (function (){
var statearr_19315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19315[(0)] = cljs$core$async$mix_$_state_machine__18221__auto__);

(statearr_19315[(1)] = (1));

return statearr_19315;
});
var cljs$core$async$mix_$_state_machine__18221__auto____1 = (function (state_19284){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19284);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19316){var ex__18224__auto__ = e19316;
var statearr_19317_19343 = state_19284;
(statearr_19317_19343[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19284[(4)]))){
var statearr_19318_19344 = state_19284;
(statearr_19318_19344[(1)] = cljs.core.first((state_19284[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19345 = state_19284;
state_19284 = G__19345;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18221__auto__ = function(state_19284){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18221__auto____1.call(this,state_19284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18221__auto____0;
cljs$core$async$mix_$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18221__auto____1;
return cljs$core$async$mix_$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19319 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19319[(6)] = c__18295__auto___19320);

return statearr_19319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19348 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4464__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4461__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19348(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19349 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4464__auto__.call(null,p,v,ch));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4461__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19349(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19350 = (function() {
var G__19351 = null;
var G__19351__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4464__auto__.call(null,p));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4461__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19351__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return (m__4464__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4464__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4464__auto__.call(null,p,v));
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return (m__4461__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4461__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4461__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19351 = function(p,v){
switch(arguments.length){
case 1:
return G__19351__1.call(this,p);
case 2:
return G__19351__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19351.cljs$core$IFn$_invoke$arity$1 = G__19351__1;
G__19351.cljs$core$IFn$_invoke$arity$2 = G__19351__2;
return G__19351;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19347 = arguments.length;
switch (G__19347) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19350.cljs$core$IFn$_invoke$arity$1(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19350.cljs$core$IFn$_invoke$arity$2(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19355 = arguments.length;
switch (G__19355) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19353_SHARP_){
if(cljs.core.truth_((p1__19353_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19353_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19353_SHARP_.call(null,topic)))){
return p1__19353_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19353_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19356 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19357){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19357 = meta19357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19358,meta19357__$1){
var self__ = this;
var _19358__$1 = this;
return (new cljs.core.async.t_cljs$core$async19356(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19357__$1));
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19358){
var self__ = this;
var _19358__$1 = this;
return self__.meta19357;
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19356.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta19357], null);
}));

(cljs.core.async.t_cljs$core$async19356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19356");

(cljs.core.async.t_cljs$core$async19356.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19356.
 */
cljs.core.async.__GT_t_cljs$core$async19356 = (function cljs$core$async$__GT_t_cljs$core$async19356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19357){
return (new cljs.core.async.t_cljs$core$async19356(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta19357));
});

}

return (new cljs.core.async.t_cljs$core$async19356(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18295__auto___19477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19430){
var state_val_19431 = (state_19430[(1)]);
if((state_val_19431 === (7))){
var inst_19426 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19432_19478 = state_19430__$1;
(statearr_19432_19478[(2)] = inst_19426);

(statearr_19432_19478[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (20))){
var state_19430__$1 = state_19430;
var statearr_19433_19479 = state_19430__$1;
(statearr_19433_19479[(2)] = null);

(statearr_19433_19479[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (1))){
var state_19430__$1 = state_19430;
var statearr_19434_19480 = state_19430__$1;
(statearr_19434_19480[(2)] = null);

(statearr_19434_19480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (24))){
var inst_19409 = (state_19430[(7)]);
var inst_19418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19409);
var state_19430__$1 = state_19430;
var statearr_19435_19481 = state_19430__$1;
(statearr_19435_19481[(2)] = inst_19418);

(statearr_19435_19481[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (4))){
var inst_19361 = (state_19430[(8)]);
var inst_19361__$1 = (state_19430[(2)]);
var inst_19362 = (inst_19361__$1 == null);
var state_19430__$1 = (function (){var statearr_19436 = state_19430;
(statearr_19436[(8)] = inst_19361__$1);

return statearr_19436;
})();
if(cljs.core.truth_(inst_19362)){
var statearr_19437_19482 = state_19430__$1;
(statearr_19437_19482[(1)] = (5));

} else {
var statearr_19438_19483 = state_19430__$1;
(statearr_19438_19483[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (15))){
var inst_19403 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19439_19484 = state_19430__$1;
(statearr_19439_19484[(2)] = inst_19403);

(statearr_19439_19484[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (21))){
var inst_19423 = (state_19430[(2)]);
var state_19430__$1 = (function (){var statearr_19440 = state_19430;
(statearr_19440[(9)] = inst_19423);

return statearr_19440;
})();
var statearr_19441_19485 = state_19430__$1;
(statearr_19441_19485[(2)] = null);

(statearr_19441_19485[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (13))){
var inst_19385 = (state_19430[(10)]);
var inst_19387 = cljs.core.chunked_seq_QMARK_(inst_19385);
var state_19430__$1 = state_19430;
if(inst_19387){
var statearr_19442_19486 = state_19430__$1;
(statearr_19442_19486[(1)] = (16));

} else {
var statearr_19443_19487 = state_19430__$1;
(statearr_19443_19487[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (22))){
var inst_19415 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
if(cljs.core.truth_(inst_19415)){
var statearr_19444_19488 = state_19430__$1;
(statearr_19444_19488[(1)] = (23));

} else {
var statearr_19445_19489 = state_19430__$1;
(statearr_19445_19489[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (6))){
var inst_19409 = (state_19430[(7)]);
var inst_19361 = (state_19430[(8)]);
var inst_19411 = (state_19430[(11)]);
var inst_19409__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19361) : topic_fn.call(null,inst_19361));
var inst_19410 = cljs.core.deref(mults);
var inst_19411__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19410,inst_19409__$1);
var state_19430__$1 = (function (){var statearr_19446 = state_19430;
(statearr_19446[(7)] = inst_19409__$1);

(statearr_19446[(11)] = inst_19411__$1);

return statearr_19446;
})();
if(cljs.core.truth_(inst_19411__$1)){
var statearr_19447_19490 = state_19430__$1;
(statearr_19447_19490[(1)] = (19));

} else {
var statearr_19448_19491 = state_19430__$1;
(statearr_19448_19491[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (25))){
var inst_19420 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19449_19492 = state_19430__$1;
(statearr_19449_19492[(2)] = inst_19420);

(statearr_19449_19492[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (17))){
var inst_19385 = (state_19430[(10)]);
var inst_19394 = cljs.core.first(inst_19385);
var inst_19395 = cljs.core.async.muxch_STAR_(inst_19394);
var inst_19396 = cljs.core.async.close_BANG_(inst_19395);
var inst_19397 = cljs.core.next(inst_19385);
var inst_19371 = inst_19397;
var inst_19372 = null;
var inst_19373 = (0);
var inst_19374 = (0);
var state_19430__$1 = (function (){var statearr_19450 = state_19430;
(statearr_19450[(12)] = inst_19372);

(statearr_19450[(13)] = inst_19374);

(statearr_19450[(14)] = inst_19371);

(statearr_19450[(15)] = inst_19373);

(statearr_19450[(16)] = inst_19396);

return statearr_19450;
})();
var statearr_19451_19493 = state_19430__$1;
(statearr_19451_19493[(2)] = null);

(statearr_19451_19493[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (3))){
var inst_19428 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19430__$1,inst_19428);
} else {
if((state_val_19431 === (12))){
var inst_19405 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19452_19494 = state_19430__$1;
(statearr_19452_19494[(2)] = inst_19405);

(statearr_19452_19494[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (2))){
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19430__$1,(4),ch);
} else {
if((state_val_19431 === (23))){
var state_19430__$1 = state_19430;
var statearr_19453_19495 = state_19430__$1;
(statearr_19453_19495[(2)] = null);

(statearr_19453_19495[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (19))){
var inst_19361 = (state_19430[(8)]);
var inst_19411 = (state_19430[(11)]);
var inst_19413 = cljs.core.async.muxch_STAR_(inst_19411);
var state_19430__$1 = state_19430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19430__$1,(22),inst_19413,inst_19361);
} else {
if((state_val_19431 === (11))){
var inst_19371 = (state_19430[(14)]);
var inst_19385 = (state_19430[(10)]);
var inst_19385__$1 = cljs.core.seq(inst_19371);
var state_19430__$1 = (function (){var statearr_19454 = state_19430;
(statearr_19454[(10)] = inst_19385__$1);

return statearr_19454;
})();
if(inst_19385__$1){
var statearr_19455_19496 = state_19430__$1;
(statearr_19455_19496[(1)] = (13));

} else {
var statearr_19456_19497 = state_19430__$1;
(statearr_19456_19497[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (9))){
var inst_19407 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19457_19498 = state_19430__$1;
(statearr_19457_19498[(2)] = inst_19407);

(statearr_19457_19498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (5))){
var inst_19368 = cljs.core.deref(mults);
var inst_19369 = cljs.core.vals(inst_19368);
var inst_19370 = cljs.core.seq(inst_19369);
var inst_19371 = inst_19370;
var inst_19372 = null;
var inst_19373 = (0);
var inst_19374 = (0);
var state_19430__$1 = (function (){var statearr_19458 = state_19430;
(statearr_19458[(12)] = inst_19372);

(statearr_19458[(13)] = inst_19374);

(statearr_19458[(14)] = inst_19371);

(statearr_19458[(15)] = inst_19373);

return statearr_19458;
})();
var statearr_19459_19499 = state_19430__$1;
(statearr_19459_19499[(2)] = null);

(statearr_19459_19499[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (14))){
var state_19430__$1 = state_19430;
var statearr_19463_19500 = state_19430__$1;
(statearr_19463_19500[(2)] = null);

(statearr_19463_19500[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (16))){
var inst_19385 = (state_19430[(10)]);
var inst_19389 = cljs.core.chunk_first(inst_19385);
var inst_19390 = cljs.core.chunk_rest(inst_19385);
var inst_19391 = cljs.core.count(inst_19389);
var inst_19371 = inst_19390;
var inst_19372 = inst_19389;
var inst_19373 = inst_19391;
var inst_19374 = (0);
var state_19430__$1 = (function (){var statearr_19464 = state_19430;
(statearr_19464[(12)] = inst_19372);

(statearr_19464[(13)] = inst_19374);

(statearr_19464[(14)] = inst_19371);

(statearr_19464[(15)] = inst_19373);

return statearr_19464;
})();
var statearr_19465_19501 = state_19430__$1;
(statearr_19465_19501[(2)] = null);

(statearr_19465_19501[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (10))){
var inst_19372 = (state_19430[(12)]);
var inst_19374 = (state_19430[(13)]);
var inst_19371 = (state_19430[(14)]);
var inst_19373 = (state_19430[(15)]);
var inst_19379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19372,inst_19374);
var inst_19380 = cljs.core.async.muxch_STAR_(inst_19379);
var inst_19381 = cljs.core.async.close_BANG_(inst_19380);
var inst_19382 = (inst_19374 + (1));
var tmp19460 = inst_19372;
var tmp19461 = inst_19371;
var tmp19462 = inst_19373;
var inst_19371__$1 = tmp19461;
var inst_19372__$1 = tmp19460;
var inst_19373__$1 = tmp19462;
var inst_19374__$1 = inst_19382;
var state_19430__$1 = (function (){var statearr_19466 = state_19430;
(statearr_19466[(12)] = inst_19372__$1);

(statearr_19466[(13)] = inst_19374__$1);

(statearr_19466[(14)] = inst_19371__$1);

(statearr_19466[(17)] = inst_19381);

(statearr_19466[(15)] = inst_19373__$1);

return statearr_19466;
})();
var statearr_19467_19502 = state_19430__$1;
(statearr_19467_19502[(2)] = null);

(statearr_19467_19502[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (18))){
var inst_19400 = (state_19430[(2)]);
var state_19430__$1 = state_19430;
var statearr_19468_19503 = state_19430__$1;
(statearr_19468_19503[(2)] = inst_19400);

(statearr_19468_19503[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19431 === (8))){
var inst_19374 = (state_19430[(13)]);
var inst_19373 = (state_19430[(15)]);
var inst_19376 = (inst_19374 < inst_19373);
var inst_19377 = inst_19376;
var state_19430__$1 = state_19430;
if(cljs.core.truth_(inst_19377)){
var statearr_19469_19504 = state_19430__$1;
(statearr_19469_19504[(1)] = (10));

} else {
var statearr_19470_19505 = state_19430__$1;
(statearr_19470_19505[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19471[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19471[(1)] = (1));

return statearr_19471;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19430){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19430);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19472){var ex__18224__auto__ = e19472;
var statearr_19473_19506 = state_19430;
(statearr_19473_19506[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19430[(4)]))){
var statearr_19474_19507 = state_19430;
(statearr_19474_19507[(1)] = cljs.core.first((state_19430[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19508 = state_19430;
state_19430 = G__19508;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19475 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19475[(6)] = c__18295__auto___19477);

return statearr_19475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19510 = arguments.length;
switch (G__19510) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19513 = arguments.length;
switch (G__19513) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19516 = arguments.length;
switch (G__19516) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__18295__auto___19594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19559){
var state_val_19560 = (state_19559[(1)]);
if((state_val_19560 === (7))){
var state_19559__$1 = state_19559;
var statearr_19561_19595 = state_19559__$1;
(statearr_19561_19595[(2)] = null);

(statearr_19561_19595[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (1))){
var state_19559__$1 = state_19559;
var statearr_19562_19596 = state_19559__$1;
(statearr_19562_19596[(2)] = null);

(statearr_19562_19596[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (4))){
var inst_19519 = (state_19559[(7)]);
var inst_19520 = (state_19559[(8)]);
var inst_19522 = (inst_19520 < inst_19519);
var state_19559__$1 = state_19559;
if(cljs.core.truth_(inst_19522)){
var statearr_19563_19597 = state_19559__$1;
(statearr_19563_19597[(1)] = (6));

} else {
var statearr_19564_19598 = state_19559__$1;
(statearr_19564_19598[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (15))){
var inst_19545 = (state_19559[(9)]);
var inst_19550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19545);
var state_19559__$1 = state_19559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19559__$1,(17),out,inst_19550);
} else {
if((state_val_19560 === (13))){
var inst_19545 = (state_19559[(9)]);
var inst_19545__$1 = (state_19559[(2)]);
var inst_19546 = cljs.core.some(cljs.core.nil_QMARK_,inst_19545__$1);
var state_19559__$1 = (function (){var statearr_19565 = state_19559;
(statearr_19565[(9)] = inst_19545__$1);

return statearr_19565;
})();
if(cljs.core.truth_(inst_19546)){
var statearr_19566_19599 = state_19559__$1;
(statearr_19566_19599[(1)] = (14));

} else {
var statearr_19567_19600 = state_19559__$1;
(statearr_19567_19600[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (6))){
var state_19559__$1 = state_19559;
var statearr_19568_19601 = state_19559__$1;
(statearr_19568_19601[(2)] = null);

(statearr_19568_19601[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (17))){
var inst_19552 = (state_19559[(2)]);
var state_19559__$1 = (function (){var statearr_19570 = state_19559;
(statearr_19570[(10)] = inst_19552);

return statearr_19570;
})();
var statearr_19571_19602 = state_19559__$1;
(statearr_19571_19602[(2)] = null);

(statearr_19571_19602[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (3))){
var inst_19557 = (state_19559[(2)]);
var state_19559__$1 = state_19559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19559__$1,inst_19557);
} else {
if((state_val_19560 === (12))){
var _ = (function (){var statearr_19572 = state_19559;
(statearr_19572[(4)] = cljs.core.rest((state_19559[(4)])));

return statearr_19572;
})();
var state_19559__$1 = state_19559;
var ex19569 = (state_19559__$1[(2)]);
var statearr_19573_19603 = state_19559__$1;
(statearr_19573_19603[(5)] = ex19569);


if((ex19569 instanceof Object)){
var statearr_19574_19604 = state_19559__$1;
(statearr_19574_19604[(1)] = (11));

(statearr_19574_19604[(5)] = null);

} else {
throw ex19569;

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (2))){
var inst_19518 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19519 = cnt;
var inst_19520 = (0);
var state_19559__$1 = (function (){var statearr_19575 = state_19559;
(statearr_19575[(7)] = inst_19519);

(statearr_19575[(8)] = inst_19520);

(statearr_19575[(11)] = inst_19518);

return statearr_19575;
})();
var statearr_19576_19605 = state_19559__$1;
(statearr_19576_19605[(2)] = null);

(statearr_19576_19605[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (11))){
var inst_19524 = (state_19559[(2)]);
var inst_19525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19559__$1 = (function (){var statearr_19577 = state_19559;
(statearr_19577[(12)] = inst_19524);

return statearr_19577;
})();
var statearr_19578_19606 = state_19559__$1;
(statearr_19578_19606[(2)] = inst_19525);

(statearr_19578_19606[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (9))){
var inst_19520 = (state_19559[(8)]);
var _ = (function (){var statearr_19579 = state_19559;
(statearr_19579[(4)] = cljs.core.cons((12),(state_19559[(4)])));

return statearr_19579;
})();
var inst_19531 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19520) : chs__$1.call(null,inst_19520));
var inst_19532 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19520) : done.call(null,inst_19520));
var inst_19533 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19531,inst_19532);
var ___$1 = (function (){var statearr_19580 = state_19559;
(statearr_19580[(4)] = cljs.core.rest((state_19559[(4)])));

return statearr_19580;
})();
var state_19559__$1 = state_19559;
var statearr_19581_19607 = state_19559__$1;
(statearr_19581_19607[(2)] = inst_19533);

(statearr_19581_19607[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (5))){
var inst_19543 = (state_19559[(2)]);
var state_19559__$1 = (function (){var statearr_19582 = state_19559;
(statearr_19582[(13)] = inst_19543);

return statearr_19582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19559__$1,(13),dchan);
} else {
if((state_val_19560 === (14))){
var inst_19548 = cljs.core.async.close_BANG_(out);
var state_19559__$1 = state_19559;
var statearr_19583_19608 = state_19559__$1;
(statearr_19583_19608[(2)] = inst_19548);

(statearr_19583_19608[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (16))){
var inst_19555 = (state_19559[(2)]);
var state_19559__$1 = state_19559;
var statearr_19584_19609 = state_19559__$1;
(statearr_19584_19609[(2)] = inst_19555);

(statearr_19584_19609[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (10))){
var inst_19520 = (state_19559[(8)]);
var inst_19536 = (state_19559[(2)]);
var inst_19537 = (inst_19520 + (1));
var inst_19520__$1 = inst_19537;
var state_19559__$1 = (function (){var statearr_19585 = state_19559;
(statearr_19585[(8)] = inst_19520__$1);

(statearr_19585[(14)] = inst_19536);

return statearr_19585;
})();
var statearr_19586_19610 = state_19559__$1;
(statearr_19586_19610[(2)] = null);

(statearr_19586_19610[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19560 === (8))){
var inst_19541 = (state_19559[(2)]);
var state_19559__$1 = state_19559;
var statearr_19587_19611 = state_19559__$1;
(statearr_19587_19611[(2)] = inst_19541);

(statearr_19587_19611[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19588[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19588[(1)] = (1));

return statearr_19588;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19559){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19559);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19589){var ex__18224__auto__ = e19589;
var statearr_19590_19612 = state_19559;
(statearr_19590_19612[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19559[(4)]))){
var statearr_19591_19613 = state_19559;
(statearr_19591_19613[(1)] = cljs.core.first((state_19559[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19614 = state_19559;
state_19559 = G__19614;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19592 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19592[(6)] = c__18295__auto___19594);

return statearr_19592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19617 = arguments.length;
switch (G__19617) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___19672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19649){
var state_val_19650 = (state_19649[(1)]);
if((state_val_19650 === (7))){
var inst_19629 = (state_19649[(7)]);
var inst_19628 = (state_19649[(8)]);
var inst_19628__$1 = (state_19649[(2)]);
var inst_19629__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19628__$1,(0),null);
var inst_19630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19628__$1,(1),null);
var inst_19631 = (inst_19629__$1 == null);
var state_19649__$1 = (function (){var statearr_19651 = state_19649;
(statearr_19651[(7)] = inst_19629__$1);

(statearr_19651[(9)] = inst_19630);

(statearr_19651[(8)] = inst_19628__$1);

return statearr_19651;
})();
if(cljs.core.truth_(inst_19631)){
var statearr_19652_19673 = state_19649__$1;
(statearr_19652_19673[(1)] = (8));

} else {
var statearr_19653_19674 = state_19649__$1;
(statearr_19653_19674[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (1))){
var inst_19618 = cljs.core.vec(chs);
var inst_19619 = inst_19618;
var state_19649__$1 = (function (){var statearr_19654 = state_19649;
(statearr_19654[(10)] = inst_19619);

return statearr_19654;
})();
var statearr_19655_19675 = state_19649__$1;
(statearr_19655_19675[(2)] = null);

(statearr_19655_19675[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (4))){
var inst_19619 = (state_19649[(10)]);
var state_19649__$1 = state_19649;
return cljs.core.async.ioc_alts_BANG_(state_19649__$1,(7),inst_19619);
} else {
if((state_val_19650 === (6))){
var inst_19645 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19656_19676 = state_19649__$1;
(statearr_19656_19676[(2)] = inst_19645);

(statearr_19656_19676[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (3))){
var inst_19647 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19649__$1,inst_19647);
} else {
if((state_val_19650 === (2))){
var inst_19619 = (state_19649[(10)]);
var inst_19621 = cljs.core.count(inst_19619);
var inst_19622 = (inst_19621 > (0));
var state_19649__$1 = state_19649;
if(cljs.core.truth_(inst_19622)){
var statearr_19658_19677 = state_19649__$1;
(statearr_19658_19677[(1)] = (4));

} else {
var statearr_19659_19678 = state_19649__$1;
(statearr_19659_19678[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (11))){
var inst_19619 = (state_19649[(10)]);
var inst_19638 = (state_19649[(2)]);
var tmp19657 = inst_19619;
var inst_19619__$1 = tmp19657;
var state_19649__$1 = (function (){var statearr_19660 = state_19649;
(statearr_19660[(11)] = inst_19638);

(statearr_19660[(10)] = inst_19619__$1);

return statearr_19660;
})();
var statearr_19661_19679 = state_19649__$1;
(statearr_19661_19679[(2)] = null);

(statearr_19661_19679[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (9))){
var inst_19629 = (state_19649[(7)]);
var state_19649__$1 = state_19649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19649__$1,(11),out,inst_19629);
} else {
if((state_val_19650 === (5))){
var inst_19643 = cljs.core.async.close_BANG_(out);
var state_19649__$1 = state_19649;
var statearr_19662_19680 = state_19649__$1;
(statearr_19662_19680[(2)] = inst_19643);

(statearr_19662_19680[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (10))){
var inst_19641 = (state_19649[(2)]);
var state_19649__$1 = state_19649;
var statearr_19663_19681 = state_19649__$1;
(statearr_19663_19681[(2)] = inst_19641);

(statearr_19663_19681[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19650 === (8))){
var inst_19629 = (state_19649[(7)]);
var inst_19619 = (state_19649[(10)]);
var inst_19630 = (state_19649[(9)]);
var inst_19628 = (state_19649[(8)]);
var inst_19633 = (function (){var cs = inst_19619;
var vec__19624 = inst_19628;
var v = inst_19629;
var c = inst_19630;
return (function (p1__19615_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19615_SHARP_);
});
})();
var inst_19634 = cljs.core.filterv(inst_19633,inst_19619);
var inst_19619__$1 = inst_19634;
var state_19649__$1 = (function (){var statearr_19664 = state_19649;
(statearr_19664[(10)] = inst_19619__$1);

return statearr_19664;
})();
var statearr_19665_19682 = state_19649__$1;
(statearr_19665_19682[(2)] = null);

(statearr_19665_19682[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19666 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19666[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19666[(1)] = (1));

return statearr_19666;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19649){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19649);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19667){var ex__18224__auto__ = e19667;
var statearr_19668_19683 = state_19649;
(statearr_19668_19683[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19649[(4)]))){
var statearr_19669_19684 = state_19649;
(statearr_19669_19684[(1)] = cljs.core.first((state_19649[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19685 = state_19649;
state_19649 = G__19685;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19670 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19670[(6)] = c__18295__auto___19672);

return statearr_19670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19687 = arguments.length;
switch (G__19687) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___19733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19711){
var state_val_19712 = (state_19711[(1)]);
if((state_val_19712 === (7))){
var inst_19693 = (state_19711[(7)]);
var inst_19693__$1 = (state_19711[(2)]);
var inst_19694 = (inst_19693__$1 == null);
var inst_19695 = cljs.core.not(inst_19694);
var state_19711__$1 = (function (){var statearr_19713 = state_19711;
(statearr_19713[(7)] = inst_19693__$1);

return statearr_19713;
})();
if(inst_19695){
var statearr_19714_19734 = state_19711__$1;
(statearr_19714_19734[(1)] = (8));

} else {
var statearr_19715_19735 = state_19711__$1;
(statearr_19715_19735[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (1))){
var inst_19688 = (0);
var state_19711__$1 = (function (){var statearr_19716 = state_19711;
(statearr_19716[(8)] = inst_19688);

return statearr_19716;
})();
var statearr_19717_19736 = state_19711__$1;
(statearr_19717_19736[(2)] = null);

(statearr_19717_19736[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (4))){
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19711__$1,(7),ch);
} else {
if((state_val_19712 === (6))){
var inst_19706 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
var statearr_19718_19737 = state_19711__$1;
(statearr_19718_19737[(2)] = inst_19706);

(statearr_19718_19737[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (3))){
var inst_19708 = (state_19711[(2)]);
var inst_19709 = cljs.core.async.close_BANG_(out);
var state_19711__$1 = (function (){var statearr_19719 = state_19711;
(statearr_19719[(9)] = inst_19708);

return statearr_19719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19711__$1,inst_19709);
} else {
if((state_val_19712 === (2))){
var inst_19688 = (state_19711[(8)]);
var inst_19690 = (inst_19688 < n);
var state_19711__$1 = state_19711;
if(cljs.core.truth_(inst_19690)){
var statearr_19720_19738 = state_19711__$1;
(statearr_19720_19738[(1)] = (4));

} else {
var statearr_19721_19739 = state_19711__$1;
(statearr_19721_19739[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (11))){
var inst_19688 = (state_19711[(8)]);
var inst_19698 = (state_19711[(2)]);
var inst_19699 = (inst_19688 + (1));
var inst_19688__$1 = inst_19699;
var state_19711__$1 = (function (){var statearr_19722 = state_19711;
(statearr_19722[(8)] = inst_19688__$1);

(statearr_19722[(10)] = inst_19698);

return statearr_19722;
})();
var statearr_19723_19740 = state_19711__$1;
(statearr_19723_19740[(2)] = null);

(statearr_19723_19740[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (9))){
var state_19711__$1 = state_19711;
var statearr_19724_19741 = state_19711__$1;
(statearr_19724_19741[(2)] = null);

(statearr_19724_19741[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (5))){
var state_19711__$1 = state_19711;
var statearr_19725_19742 = state_19711__$1;
(statearr_19725_19742[(2)] = null);

(statearr_19725_19742[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (10))){
var inst_19703 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
var statearr_19726_19743 = state_19711__$1;
(statearr_19726_19743[(2)] = inst_19703);

(statearr_19726_19743[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19712 === (8))){
var inst_19693 = (state_19711[(7)]);
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19711__$1,(11),out,inst_19693);
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19727[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19727[(1)] = (1));

return statearr_19727;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19711){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19711);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19728){var ex__18224__auto__ = e19728;
var statearr_19729_19744 = state_19711;
(statearr_19729_19744[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19711[(4)]))){
var statearr_19730_19745 = state_19711;
(statearr_19730_19745[(1)] = cljs.core.first((state_19711[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19746 = state_19711;
state_19711 = G__19746;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19731 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19731[(6)] = c__18295__auto___19733);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19748 = (function (f,ch,meta19749){
this.f = f;
this.ch = ch;
this.meta19749 = meta19749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19750,meta19749__$1){
var self__ = this;
var _19750__$1 = this;
return (new cljs.core.async.t_cljs$core$async19748(self__.f,self__.ch,meta19749__$1));
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19750){
var self__ = this;
var _19750__$1 = this;
return self__.meta19749;
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19751 = (function (f,ch,meta19749,_,fn1,meta19752){
this.f = f;
this.ch = ch;
this.meta19749 = meta19749;
this._ = _;
this.fn1 = fn1;
this.meta19752 = meta19752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19753,meta19752__$1){
var self__ = this;
var _19753__$1 = this;
return (new cljs.core.async.t_cljs$core$async19751(self__.f,self__.ch,self__.meta19749,self__._,self__.fn1,meta19752__$1));
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19753){
var self__ = this;
var _19753__$1 = this;
return self__.meta19752;
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19751.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19747_SHARP_){
var G__19754 = (((p1__19747_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19747_SHARP_) : self__.f.call(null,p1__19747_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19754) : f1.call(null,G__19754));
});
}));

(cljs.core.async.t_cljs$core$async19751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19749,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async19748], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta19752], null);
}));

(cljs.core.async.t_cljs$core$async19751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19751");

(cljs.core.async.t_cljs$core$async19751.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19751.
 */
cljs.core.async.__GT_t_cljs$core$async19751 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19751(f__$1,ch__$1,meta19749__$1,___$2,fn1__$1,meta19752){
return (new cljs.core.async.t_cljs$core$async19751(f__$1,ch__$1,meta19749__$1,___$2,fn1__$1,meta19752));
});

}

return (new cljs.core.async.t_cljs$core$async19751(self__.f,self__.ch,self__.meta19749,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19755 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19755) : self__.f.call(null,G__19755));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19749], null);
}));

(cljs.core.async.t_cljs$core$async19748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19748");

(cljs.core.async.t_cljs$core$async19748.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19748.
 */
cljs.core.async.__GT_t_cljs$core$async19748 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19748(f__$1,ch__$1,meta19749){
return (new cljs.core.async.t_cljs$core$async19748(f__$1,ch__$1,meta19749));
});

}

return (new cljs.core.async.t_cljs$core$async19748(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19756 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19756 = (function (f,ch,meta19757){
this.f = f;
this.ch = ch;
this.meta19757 = meta19757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19758,meta19757__$1){
var self__ = this;
var _19758__$1 = this;
return (new cljs.core.async.t_cljs$core$async19756(self__.f,self__.ch,meta19757__$1));
}));

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19758){
var self__ = this;
var _19758__$1 = this;
return self__.meta19757;
}));

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19757], null);
}));

(cljs.core.async.t_cljs$core$async19756.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19756");

(cljs.core.async.t_cljs$core$async19756.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19756");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19756.
 */
cljs.core.async.__GT_t_cljs$core$async19756 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19756(f__$1,ch__$1,meta19757){
return (new cljs.core.async.t_cljs$core$async19756(f__$1,ch__$1,meta19757));
});

}

return (new cljs.core.async.t_cljs$core$async19756(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19759 = (function (p,ch,meta19760){
this.p = p;
this.ch = ch;
this.meta19760 = meta19760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19761,meta19760__$1){
var self__ = this;
var _19761__$1 = this;
return (new cljs.core.async.t_cljs$core$async19759(self__.p,self__.ch,meta19760__$1));
}));

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19761){
var self__ = this;
var _19761__$1 = this;
return self__.meta19760;
}));

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta19760], null);
}));

(cljs.core.async.t_cljs$core$async19759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19759");

(cljs.core.async.t_cljs$core$async19759.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write(writer__4405__auto__,"cljs.core.async/t_cljs$core$async19759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19759.
 */
cljs.core.async.__GT_t_cljs$core$async19759 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19759(p__$1,ch__$1,meta19760){
return (new cljs.core.async.t_cljs$core$async19759(p__$1,ch__$1,meta19760));
});

}

return (new cljs.core.async.t_cljs$core$async19759(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19763 = arguments.length;
switch (G__19763) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___19804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19784){
var state_val_19785 = (state_19784[(1)]);
if((state_val_19785 === (7))){
var inst_19780 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19786_19805 = state_19784__$1;
(statearr_19786_19805[(2)] = inst_19780);

(statearr_19786_19805[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (1))){
var state_19784__$1 = state_19784;
var statearr_19787_19806 = state_19784__$1;
(statearr_19787_19806[(2)] = null);

(statearr_19787_19806[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (4))){
var inst_19766 = (state_19784[(7)]);
var inst_19766__$1 = (state_19784[(2)]);
var inst_19767 = (inst_19766__$1 == null);
var state_19784__$1 = (function (){var statearr_19788 = state_19784;
(statearr_19788[(7)] = inst_19766__$1);

return statearr_19788;
})();
if(cljs.core.truth_(inst_19767)){
var statearr_19789_19807 = state_19784__$1;
(statearr_19789_19807[(1)] = (5));

} else {
var statearr_19790_19808 = state_19784__$1;
(statearr_19790_19808[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (6))){
var inst_19766 = (state_19784[(7)]);
var inst_19771 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19766) : p.call(null,inst_19766));
var state_19784__$1 = state_19784;
if(cljs.core.truth_(inst_19771)){
var statearr_19791_19809 = state_19784__$1;
(statearr_19791_19809[(1)] = (8));

} else {
var statearr_19792_19810 = state_19784__$1;
(statearr_19792_19810[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (3))){
var inst_19782 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19784__$1,inst_19782);
} else {
if((state_val_19785 === (2))){
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19784__$1,(4),ch);
} else {
if((state_val_19785 === (11))){
var inst_19774 = (state_19784[(2)]);
var state_19784__$1 = state_19784;
var statearr_19793_19811 = state_19784__$1;
(statearr_19793_19811[(2)] = inst_19774);

(statearr_19793_19811[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (9))){
var state_19784__$1 = state_19784;
var statearr_19794_19812 = state_19784__$1;
(statearr_19794_19812[(2)] = null);

(statearr_19794_19812[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (5))){
var inst_19769 = cljs.core.async.close_BANG_(out);
var state_19784__$1 = state_19784;
var statearr_19795_19813 = state_19784__$1;
(statearr_19795_19813[(2)] = inst_19769);

(statearr_19795_19813[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (10))){
var inst_19777 = (state_19784[(2)]);
var state_19784__$1 = (function (){var statearr_19796 = state_19784;
(statearr_19796[(8)] = inst_19777);

return statearr_19796;
})();
var statearr_19797_19814 = state_19784__$1;
(statearr_19797_19814[(2)] = null);

(statearr_19797_19814[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19785 === (8))){
var inst_19766 = (state_19784[(7)]);
var state_19784__$1 = state_19784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19784__$1,(11),out,inst_19766);
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19798 = [null,null,null,null,null,null,null,null,null];
(statearr_19798[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19798[(1)] = (1));

return statearr_19798;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19784){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19784);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19799){var ex__18224__auto__ = e19799;
var statearr_19800_19815 = state_19784;
(statearr_19800_19815[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19784[(4)]))){
var statearr_19801_19816 = state_19784;
(statearr_19801_19816[(1)] = cljs.core.first((state_19784[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19817 = state_19784;
state_19784 = G__19817;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19802 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19802[(6)] = c__18295__auto___19804);

return statearr_19802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19819 = arguments.length;
switch (G__19819) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18295__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19882){
var state_val_19883 = (state_19882[(1)]);
if((state_val_19883 === (7))){
var inst_19878 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19884_19923 = state_19882__$1;
(statearr_19884_19923[(2)] = inst_19878);

(statearr_19884_19923[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (20))){
var inst_19848 = (state_19882[(7)]);
var inst_19859 = (state_19882[(2)]);
var inst_19860 = cljs.core.next(inst_19848);
var inst_19834 = inst_19860;
var inst_19835 = null;
var inst_19836 = (0);
var inst_19837 = (0);
var state_19882__$1 = (function (){var statearr_19885 = state_19882;
(statearr_19885[(8)] = inst_19834);

(statearr_19885[(9)] = inst_19835);

(statearr_19885[(10)] = inst_19859);

(statearr_19885[(11)] = inst_19836);

(statearr_19885[(12)] = inst_19837);

return statearr_19885;
})();
var statearr_19886_19924 = state_19882__$1;
(statearr_19886_19924[(2)] = null);

(statearr_19886_19924[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (1))){
var state_19882__$1 = state_19882;
var statearr_19887_19925 = state_19882__$1;
(statearr_19887_19925[(2)] = null);

(statearr_19887_19925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (4))){
var inst_19823 = (state_19882[(13)]);
var inst_19823__$1 = (state_19882[(2)]);
var inst_19824 = (inst_19823__$1 == null);
var state_19882__$1 = (function (){var statearr_19888 = state_19882;
(statearr_19888[(13)] = inst_19823__$1);

return statearr_19888;
})();
if(cljs.core.truth_(inst_19824)){
var statearr_19889_19926 = state_19882__$1;
(statearr_19889_19926[(1)] = (5));

} else {
var statearr_19890_19927 = state_19882__$1;
(statearr_19890_19927[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (15))){
var state_19882__$1 = state_19882;
var statearr_19894_19928 = state_19882__$1;
(statearr_19894_19928[(2)] = null);

(statearr_19894_19928[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (21))){
var state_19882__$1 = state_19882;
var statearr_19895_19929 = state_19882__$1;
(statearr_19895_19929[(2)] = null);

(statearr_19895_19929[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (13))){
var inst_19834 = (state_19882[(8)]);
var inst_19835 = (state_19882[(9)]);
var inst_19836 = (state_19882[(11)]);
var inst_19837 = (state_19882[(12)]);
var inst_19844 = (state_19882[(2)]);
var inst_19845 = (inst_19837 + (1));
var tmp19891 = inst_19834;
var tmp19892 = inst_19835;
var tmp19893 = inst_19836;
var inst_19834__$1 = tmp19891;
var inst_19835__$1 = tmp19892;
var inst_19836__$1 = tmp19893;
var inst_19837__$1 = inst_19845;
var state_19882__$1 = (function (){var statearr_19896 = state_19882;
(statearr_19896[(8)] = inst_19834__$1);

(statearr_19896[(9)] = inst_19835__$1);

(statearr_19896[(14)] = inst_19844);

(statearr_19896[(11)] = inst_19836__$1);

(statearr_19896[(12)] = inst_19837__$1);

return statearr_19896;
})();
var statearr_19897_19930 = state_19882__$1;
(statearr_19897_19930[(2)] = null);

(statearr_19897_19930[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (22))){
var state_19882__$1 = state_19882;
var statearr_19898_19931 = state_19882__$1;
(statearr_19898_19931[(2)] = null);

(statearr_19898_19931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (6))){
var inst_19823 = (state_19882[(13)]);
var inst_19832 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19823) : f.call(null,inst_19823));
var inst_19833 = cljs.core.seq(inst_19832);
var inst_19834 = inst_19833;
var inst_19835 = null;
var inst_19836 = (0);
var inst_19837 = (0);
var state_19882__$1 = (function (){var statearr_19899 = state_19882;
(statearr_19899[(8)] = inst_19834);

(statearr_19899[(9)] = inst_19835);

(statearr_19899[(11)] = inst_19836);

(statearr_19899[(12)] = inst_19837);

return statearr_19899;
})();
var statearr_19900_19932 = state_19882__$1;
(statearr_19900_19932[(2)] = null);

(statearr_19900_19932[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (17))){
var inst_19848 = (state_19882[(7)]);
var inst_19852 = cljs.core.chunk_first(inst_19848);
var inst_19853 = cljs.core.chunk_rest(inst_19848);
var inst_19854 = cljs.core.count(inst_19852);
var inst_19834 = inst_19853;
var inst_19835 = inst_19852;
var inst_19836 = inst_19854;
var inst_19837 = (0);
var state_19882__$1 = (function (){var statearr_19901 = state_19882;
(statearr_19901[(8)] = inst_19834);

(statearr_19901[(9)] = inst_19835);

(statearr_19901[(11)] = inst_19836);

(statearr_19901[(12)] = inst_19837);

return statearr_19901;
})();
var statearr_19902_19933 = state_19882__$1;
(statearr_19902_19933[(2)] = null);

(statearr_19902_19933[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (3))){
var inst_19880 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19882__$1,inst_19880);
} else {
if((state_val_19883 === (12))){
var inst_19868 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19903_19934 = state_19882__$1;
(statearr_19903_19934[(2)] = inst_19868);

(statearr_19903_19934[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (2))){
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19882__$1,(4),in$);
} else {
if((state_val_19883 === (23))){
var inst_19876 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19904_19935 = state_19882__$1;
(statearr_19904_19935[(2)] = inst_19876);

(statearr_19904_19935[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (19))){
var inst_19863 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19905_19936 = state_19882__$1;
(statearr_19905_19936[(2)] = inst_19863);

(statearr_19905_19936[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (11))){
var inst_19834 = (state_19882[(8)]);
var inst_19848 = (state_19882[(7)]);
var inst_19848__$1 = cljs.core.seq(inst_19834);
var state_19882__$1 = (function (){var statearr_19906 = state_19882;
(statearr_19906[(7)] = inst_19848__$1);

return statearr_19906;
})();
if(inst_19848__$1){
var statearr_19907_19937 = state_19882__$1;
(statearr_19907_19937[(1)] = (14));

} else {
var statearr_19908_19938 = state_19882__$1;
(statearr_19908_19938[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (9))){
var inst_19870 = (state_19882[(2)]);
var inst_19871 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19882__$1 = (function (){var statearr_19909 = state_19882;
(statearr_19909[(15)] = inst_19870);

return statearr_19909;
})();
if(cljs.core.truth_(inst_19871)){
var statearr_19910_19939 = state_19882__$1;
(statearr_19910_19939[(1)] = (21));

} else {
var statearr_19911_19940 = state_19882__$1;
(statearr_19911_19940[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (5))){
var inst_19826 = cljs.core.async.close_BANG_(out);
var state_19882__$1 = state_19882;
var statearr_19912_19941 = state_19882__$1;
(statearr_19912_19941[(2)] = inst_19826);

(statearr_19912_19941[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (14))){
var inst_19848 = (state_19882[(7)]);
var inst_19850 = cljs.core.chunked_seq_QMARK_(inst_19848);
var state_19882__$1 = state_19882;
if(inst_19850){
var statearr_19913_19942 = state_19882__$1;
(statearr_19913_19942[(1)] = (17));

} else {
var statearr_19914_19943 = state_19882__$1;
(statearr_19914_19943[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (16))){
var inst_19866 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19915_19944 = state_19882__$1;
(statearr_19915_19944[(2)] = inst_19866);

(statearr_19915_19944[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19883 === (10))){
var inst_19835 = (state_19882[(9)]);
var inst_19837 = (state_19882[(12)]);
var inst_19842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19835,inst_19837);
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19882__$1,(13),out,inst_19842);
} else {
if((state_val_19883 === (18))){
var inst_19848 = (state_19882[(7)]);
var inst_19857 = cljs.core.first(inst_19848);
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19882__$1,(20),out,inst_19857);
} else {
if((state_val_19883 === (8))){
var inst_19836 = (state_19882[(11)]);
var inst_19837 = (state_19882[(12)]);
var inst_19839 = (inst_19837 < inst_19836);
var inst_19840 = inst_19839;
var state_19882__$1 = state_19882;
if(cljs.core.truth_(inst_19840)){
var statearr_19916_19945 = state_19882__$1;
(statearr_19916_19945[(1)] = (10));

} else {
var statearr_19917_19946 = state_19882__$1;
(statearr_19917_19946[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____0 = (function (){
var statearr_19918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19918[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__);

(statearr_19918[(1)] = (1));

return statearr_19918;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____1 = (function (state_19882){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19882);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e19919){var ex__18224__auto__ = e19919;
var statearr_19920_19947 = state_19882;
(statearr_19920_19947[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19882[(4)]))){
var statearr_19921_19948 = state_19882;
(statearr_19921_19948[(1)] = cljs.core.first((state_19882[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__19949 = state_19882;
state_19882 = G__19949;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__ = function(state_19882){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____1.call(this,state_19882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18221__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_19922 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_19922[(6)] = c__18295__auto__);

return statearr_19922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));

return c__18295__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19951 = arguments.length;
switch (G__19951) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19954 = arguments.length;
switch (G__19954) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19957 = arguments.length;
switch (G__19957) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___20005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_19981){
var state_val_19982 = (state_19981[(1)]);
if((state_val_19982 === (7))){
var inst_19976 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
var statearr_19983_20006 = state_19981__$1;
(statearr_19983_20006[(2)] = inst_19976);

(statearr_19983_20006[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (1))){
var inst_19958 = null;
var state_19981__$1 = (function (){var statearr_19984 = state_19981;
(statearr_19984[(7)] = inst_19958);

return statearr_19984;
})();
var statearr_19985_20007 = state_19981__$1;
(statearr_19985_20007[(2)] = null);

(statearr_19985_20007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (4))){
var inst_19961 = (state_19981[(8)]);
var inst_19961__$1 = (state_19981[(2)]);
var inst_19962 = (inst_19961__$1 == null);
var inst_19963 = cljs.core.not(inst_19962);
var state_19981__$1 = (function (){var statearr_19986 = state_19981;
(statearr_19986[(8)] = inst_19961__$1);

return statearr_19986;
})();
if(inst_19963){
var statearr_19987_20008 = state_19981__$1;
(statearr_19987_20008[(1)] = (5));

} else {
var statearr_19988_20009 = state_19981__$1;
(statearr_19988_20009[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (6))){
var state_19981__$1 = state_19981;
var statearr_19989_20010 = state_19981__$1;
(statearr_19989_20010[(2)] = null);

(statearr_19989_20010[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (3))){
var inst_19978 = (state_19981[(2)]);
var inst_19979 = cljs.core.async.close_BANG_(out);
var state_19981__$1 = (function (){var statearr_19990 = state_19981;
(statearr_19990[(9)] = inst_19978);

return statearr_19990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19981__$1,inst_19979);
} else {
if((state_val_19982 === (2))){
var state_19981__$1 = state_19981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19981__$1,(4),ch);
} else {
if((state_val_19982 === (11))){
var inst_19961 = (state_19981[(8)]);
var inst_19970 = (state_19981[(2)]);
var inst_19958 = inst_19961;
var state_19981__$1 = (function (){var statearr_19991 = state_19981;
(statearr_19991[(7)] = inst_19958);

(statearr_19991[(10)] = inst_19970);

return statearr_19991;
})();
var statearr_19992_20011 = state_19981__$1;
(statearr_19992_20011[(2)] = null);

(statearr_19992_20011[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (9))){
var inst_19961 = (state_19981[(8)]);
var state_19981__$1 = state_19981;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19981__$1,(11),out,inst_19961);
} else {
if((state_val_19982 === (5))){
var inst_19958 = (state_19981[(7)]);
var inst_19961 = (state_19981[(8)]);
var inst_19965 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19961,inst_19958);
var state_19981__$1 = state_19981;
if(inst_19965){
var statearr_19994_20012 = state_19981__$1;
(statearr_19994_20012[(1)] = (8));

} else {
var statearr_19995_20013 = state_19981__$1;
(statearr_19995_20013[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (10))){
var inst_19973 = (state_19981[(2)]);
var state_19981__$1 = state_19981;
var statearr_19996_20014 = state_19981__$1;
(statearr_19996_20014[(2)] = inst_19973);

(statearr_19996_20014[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19982 === (8))){
var inst_19958 = (state_19981[(7)]);
var tmp19993 = inst_19958;
var inst_19958__$1 = tmp19993;
var state_19981__$1 = (function (){var statearr_19997 = state_19981;
(statearr_19997[(7)] = inst_19958__$1);

return statearr_19997;
})();
var statearr_19998_20015 = state_19981__$1;
(statearr_19998_20015[(2)] = null);

(statearr_19998_20015[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_19999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19999[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_19999[(1)] = (1));

return statearr_19999;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_19981){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_19981);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e20000){var ex__18224__auto__ = e20000;
var statearr_20001_20016 = state_19981;
(statearr_20001_20016[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_19981[(4)]))){
var statearr_20002_20017 = state_19981;
(statearr_20002_20017[(1)] = cljs.core.first((state_19981[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__20018 = state_19981;
state_19981 = G__20018;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_19981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_19981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_20003 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_20003[(6)] = c__18295__auto___20005);

return statearr_20003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20020 = arguments.length;
switch (G__20020) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___20087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_20058){
var state_val_20059 = (state_20058[(1)]);
if((state_val_20059 === (7))){
var inst_20054 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20060_20088 = state_20058__$1;
(statearr_20060_20088[(2)] = inst_20054);

(statearr_20060_20088[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (1))){
var inst_20021 = (new Array(n));
var inst_20022 = inst_20021;
var inst_20023 = (0);
var state_20058__$1 = (function (){var statearr_20061 = state_20058;
(statearr_20061[(7)] = inst_20022);

(statearr_20061[(8)] = inst_20023);

return statearr_20061;
})();
var statearr_20062_20089 = state_20058__$1;
(statearr_20062_20089[(2)] = null);

(statearr_20062_20089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (4))){
var inst_20026 = (state_20058[(9)]);
var inst_20026__$1 = (state_20058[(2)]);
var inst_20027 = (inst_20026__$1 == null);
var inst_20028 = cljs.core.not(inst_20027);
var state_20058__$1 = (function (){var statearr_20063 = state_20058;
(statearr_20063[(9)] = inst_20026__$1);

return statearr_20063;
})();
if(inst_20028){
var statearr_20064_20090 = state_20058__$1;
(statearr_20064_20090[(1)] = (5));

} else {
var statearr_20065_20091 = state_20058__$1;
(statearr_20065_20091[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (15))){
var inst_20048 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20066_20092 = state_20058__$1;
(statearr_20066_20092[(2)] = inst_20048);

(statearr_20066_20092[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (13))){
var state_20058__$1 = state_20058;
var statearr_20067_20093 = state_20058__$1;
(statearr_20067_20093[(2)] = null);

(statearr_20067_20093[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (6))){
var inst_20023 = (state_20058[(8)]);
var inst_20044 = (inst_20023 > (0));
var state_20058__$1 = state_20058;
if(cljs.core.truth_(inst_20044)){
var statearr_20068_20094 = state_20058__$1;
(statearr_20068_20094[(1)] = (12));

} else {
var statearr_20069_20095 = state_20058__$1;
(statearr_20069_20095[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (3))){
var inst_20056 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20058__$1,inst_20056);
} else {
if((state_val_20059 === (12))){
var inst_20022 = (state_20058[(7)]);
var inst_20046 = cljs.core.vec(inst_20022);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20058__$1,(15),out,inst_20046);
} else {
if((state_val_20059 === (2))){
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20058__$1,(4),ch);
} else {
if((state_val_20059 === (11))){
var inst_20038 = (state_20058[(2)]);
var inst_20039 = (new Array(n));
var inst_20022 = inst_20039;
var inst_20023 = (0);
var state_20058__$1 = (function (){var statearr_20070 = state_20058;
(statearr_20070[(7)] = inst_20022);

(statearr_20070[(8)] = inst_20023);

(statearr_20070[(10)] = inst_20038);

return statearr_20070;
})();
var statearr_20071_20096 = state_20058__$1;
(statearr_20071_20096[(2)] = null);

(statearr_20071_20096[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (9))){
var inst_20022 = (state_20058[(7)]);
var inst_20036 = cljs.core.vec(inst_20022);
var state_20058__$1 = state_20058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20058__$1,(11),out,inst_20036);
} else {
if((state_val_20059 === (5))){
var inst_20031 = (state_20058[(11)]);
var inst_20022 = (state_20058[(7)]);
var inst_20023 = (state_20058[(8)]);
var inst_20026 = (state_20058[(9)]);
var inst_20030 = (inst_20022[inst_20023] = inst_20026);
var inst_20031__$1 = (inst_20023 + (1));
var inst_20032 = (inst_20031__$1 < n);
var state_20058__$1 = (function (){var statearr_20072 = state_20058;
(statearr_20072[(11)] = inst_20031__$1);

(statearr_20072[(12)] = inst_20030);

return statearr_20072;
})();
if(cljs.core.truth_(inst_20032)){
var statearr_20073_20097 = state_20058__$1;
(statearr_20073_20097[(1)] = (8));

} else {
var statearr_20074_20098 = state_20058__$1;
(statearr_20074_20098[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (14))){
var inst_20051 = (state_20058[(2)]);
var inst_20052 = cljs.core.async.close_BANG_(out);
var state_20058__$1 = (function (){var statearr_20076 = state_20058;
(statearr_20076[(13)] = inst_20051);

return statearr_20076;
})();
var statearr_20077_20099 = state_20058__$1;
(statearr_20077_20099[(2)] = inst_20052);

(statearr_20077_20099[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (10))){
var inst_20042 = (state_20058[(2)]);
var state_20058__$1 = state_20058;
var statearr_20078_20100 = state_20058__$1;
(statearr_20078_20100[(2)] = inst_20042);

(statearr_20078_20100[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20059 === (8))){
var inst_20031 = (state_20058[(11)]);
var inst_20022 = (state_20058[(7)]);
var tmp20075 = inst_20022;
var inst_20022__$1 = tmp20075;
var inst_20023 = inst_20031;
var state_20058__$1 = (function (){var statearr_20079 = state_20058;
(statearr_20079[(7)] = inst_20022__$1);

(statearr_20079[(8)] = inst_20023);

return statearr_20079;
})();
var statearr_20080_20101 = state_20058__$1;
(statearr_20080_20101[(2)] = null);

(statearr_20080_20101[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_20081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20081[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_20081[(1)] = (1));

return statearr_20081;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_20058){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_20058);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e20082){var ex__18224__auto__ = e20082;
var statearr_20083_20102 = state_20058;
(statearr_20083_20102[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_20058[(4)]))){
var statearr_20084_20103 = state_20058;
(statearr_20084_20103[(1)] = cljs.core.first((state_20058[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__20104 = state_20058;
state_20058 = G__20104;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_20058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_20058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_20085 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_20085[(6)] = c__18295__auto___20087);

return statearr_20085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20106 = arguments.length;
switch (G__20106) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18295__auto___20177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18296__auto__ = (function (){var switch__18220__auto__ = (function (state_20148){
var state_val_20149 = (state_20148[(1)]);
if((state_val_20149 === (7))){
var inst_20144 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
var statearr_20150_20178 = state_20148__$1;
(statearr_20150_20178[(2)] = inst_20144);

(statearr_20150_20178[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (1))){
var inst_20107 = [];
var inst_20108 = inst_20107;
var inst_20109 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_20148__$1 = (function (){var statearr_20151 = state_20148;
(statearr_20151[(7)] = inst_20108);

(statearr_20151[(8)] = inst_20109);

return statearr_20151;
})();
var statearr_20152_20179 = state_20148__$1;
(statearr_20152_20179[(2)] = null);

(statearr_20152_20179[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (4))){
var inst_20112 = (state_20148[(9)]);
var inst_20112__$1 = (state_20148[(2)]);
var inst_20113 = (inst_20112__$1 == null);
var inst_20114 = cljs.core.not(inst_20113);
var state_20148__$1 = (function (){var statearr_20153 = state_20148;
(statearr_20153[(9)] = inst_20112__$1);

return statearr_20153;
})();
if(inst_20114){
var statearr_20154_20180 = state_20148__$1;
(statearr_20154_20180[(1)] = (5));

} else {
var statearr_20155_20181 = state_20148__$1;
(statearr_20155_20181[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (15))){
var inst_20138 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
var statearr_20156_20182 = state_20148__$1;
(statearr_20156_20182[(2)] = inst_20138);

(statearr_20156_20182[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (13))){
var state_20148__$1 = state_20148;
var statearr_20157_20183 = state_20148__$1;
(statearr_20157_20183[(2)] = null);

(statearr_20157_20183[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (6))){
var inst_20108 = (state_20148[(7)]);
var inst_20133 = inst_20108.length;
var inst_20134 = (inst_20133 > (0));
var state_20148__$1 = state_20148;
if(cljs.core.truth_(inst_20134)){
var statearr_20158_20184 = state_20148__$1;
(statearr_20158_20184[(1)] = (12));

} else {
var statearr_20159_20185 = state_20148__$1;
(statearr_20159_20185[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (3))){
var inst_20146 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20148__$1,inst_20146);
} else {
if((state_val_20149 === (12))){
var inst_20108 = (state_20148[(7)]);
var inst_20136 = cljs.core.vec(inst_20108);
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20148__$1,(15),out,inst_20136);
} else {
if((state_val_20149 === (2))){
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20148__$1,(4),ch);
} else {
if((state_val_20149 === (11))){
var inst_20112 = (state_20148[(9)]);
var inst_20116 = (state_20148[(10)]);
var inst_20126 = (state_20148[(2)]);
var inst_20127 = [];
var inst_20128 = inst_20127.push(inst_20112);
var inst_20108 = inst_20127;
var inst_20109 = inst_20116;
var state_20148__$1 = (function (){var statearr_20160 = state_20148;
(statearr_20160[(11)] = inst_20128);

(statearr_20160[(7)] = inst_20108);

(statearr_20160[(12)] = inst_20126);

(statearr_20160[(8)] = inst_20109);

return statearr_20160;
})();
var statearr_20161_20186 = state_20148__$1;
(statearr_20161_20186[(2)] = null);

(statearr_20161_20186[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (9))){
var inst_20108 = (state_20148[(7)]);
var inst_20124 = cljs.core.vec(inst_20108);
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20148__$1,(11),out,inst_20124);
} else {
if((state_val_20149 === (5))){
var inst_20112 = (state_20148[(9)]);
var inst_20109 = (state_20148[(8)]);
var inst_20116 = (state_20148[(10)]);
var inst_20116__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20112) : f.call(null,inst_20112));
var inst_20117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20116__$1,inst_20109);
var inst_20118 = cljs.core.keyword_identical_QMARK_(inst_20109,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_20119 = ((inst_20117) || (inst_20118));
var state_20148__$1 = (function (){var statearr_20162 = state_20148;
(statearr_20162[(10)] = inst_20116__$1);

return statearr_20162;
})();
if(cljs.core.truth_(inst_20119)){
var statearr_20163_20187 = state_20148__$1;
(statearr_20163_20187[(1)] = (8));

} else {
var statearr_20164_20188 = state_20148__$1;
(statearr_20164_20188[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (14))){
var inst_20141 = (state_20148[(2)]);
var inst_20142 = cljs.core.async.close_BANG_(out);
var state_20148__$1 = (function (){var statearr_20166 = state_20148;
(statearr_20166[(13)] = inst_20141);

return statearr_20166;
})();
var statearr_20167_20189 = state_20148__$1;
(statearr_20167_20189[(2)] = inst_20142);

(statearr_20167_20189[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (10))){
var inst_20131 = (state_20148[(2)]);
var state_20148__$1 = state_20148;
var statearr_20168_20190 = state_20148__$1;
(statearr_20168_20190[(2)] = inst_20131);

(statearr_20168_20190[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20149 === (8))){
var inst_20112 = (state_20148[(9)]);
var inst_20108 = (state_20148[(7)]);
var inst_20116 = (state_20148[(10)]);
var inst_20121 = inst_20108.push(inst_20112);
var tmp20165 = inst_20108;
var inst_20108__$1 = tmp20165;
var inst_20109 = inst_20116;
var state_20148__$1 = (function (){var statearr_20169 = state_20148;
(statearr_20169[(7)] = inst_20108__$1);

(statearr_20169[(14)] = inst_20121);

(statearr_20169[(8)] = inst_20109);

return statearr_20169;
})();
var statearr_20170_20191 = state_20148__$1;
(statearr_20170_20191[(2)] = null);

(statearr_20170_20191[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});
return (function() {
var cljs$core$async$state_machine__18221__auto__ = null;
var cljs$core$async$state_machine__18221__auto____0 = (function (){
var statearr_20171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20171[(0)] = cljs$core$async$state_machine__18221__auto__);

(statearr_20171[(1)] = (1));

return statearr_20171;
});
var cljs$core$async$state_machine__18221__auto____1 = (function (state_20148){
while(true){
var ret_value__18222__auto__ = (function (){try{while(true){
var result__18223__auto__ = switch__18220__auto__(state_20148);
if(cljs.core.keyword_identical_QMARK_(result__18223__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__18223__auto__;
}
break;
}
}catch (e20172){var ex__18224__auto__ = e20172;
var statearr_20173_20192 = state_20148;
(statearr_20173_20192[(2)] = ex__18224__auto__);


if(cljs.core.seq((state_20148[(4)]))){
var statearr_20174_20193 = state_20148;
(statearr_20174_20193[(1)] = cljs.core.first((state_20148[(4)])));

} else {
throw ex__18224__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18222__auto__,cljs.core.cst$kw$recur)){
var G__20194 = state_20148;
state_20148 = G__20194;
continue;
} else {
return ret_value__18222__auto__;
}
break;
}
});
cljs$core$async$state_machine__18221__auto__ = function(state_20148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18221__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18221__auto____1.call(this,state_20148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18221__auto____0;
cljs$core$async$state_machine__18221__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18221__auto____1;
return cljs$core$async$state_machine__18221__auto__;
})()
})();
var state__18297__auto__ = (function (){var statearr_20175 = (f__18296__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18296__auto__.cljs$core$IFn$_invoke$arity$0() : f__18296__auto__.call(null));
(statearr_20175[(6)] = c__18295__auto___20177);

return statearr_20175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18297__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

