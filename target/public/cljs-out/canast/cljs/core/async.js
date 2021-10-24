// Compiled by ClojureScript 1.10.844 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17733 = arguments.length;
switch (G__17733) {
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
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17734 = (function (f,blockable,meta17735){
this.f = f;
this.blockable = blockable;
this.meta17735 = meta17735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17736,meta17735__$1){
var self__ = this;
var _17736__$1 = this;
return (new cljs.core.async.t_cljs$core$async17734(self__.f,self__.blockable,meta17735__$1));
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17736){
var self__ = this;
var _17736__$1 = this;
return self__.meta17735;
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17735","meta17735",-1736893460,null)], null);
}));

(cljs.core.async.t_cljs$core$async17734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17734");

(cljs.core.async.t_cljs$core$async17734.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async17734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17734.
 */
cljs.core.async.__GT_t_cljs$core$async17734 = (function cljs$core$async$__GT_t_cljs$core$async17734(f__$1,blockable__$1,meta17735){
return (new cljs.core.async.t_cljs$core$async17734(f__$1,blockable__$1,meta17735));
});

}

return (new cljs.core.async.t_cljs$core$async17734(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17740 = arguments.length;
switch (G__17740) {
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
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__17743 = arguments.length;
switch (G__17743) {
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
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__17746 = arguments.length;
switch (G__17746) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17748);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17748);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__17750 = arguments.length;
switch (G__17750) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4648__auto___17752 = n;
var x_17753 = (0);
while(true){
if((x_17753 < n__4648__auto___17752)){
(a[x_17753] = x_17753);

var G__17754 = (x_17753 + (1));
x_17753 = G__17754;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17755 = (function (flag,meta17756){
this.flag = flag;
this.meta17756 = meta17756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17757,meta17756__$1){
var self__ = this;
var _17757__$1 = this;
return (new cljs.core.async.t_cljs$core$async17755(self__.flag,meta17756__$1));
}));

(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17757){
var self__ = this;
var _17757__$1 = this;
return self__.meta17756;
}));

(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17756","meta17756",-211667751,null)], null);
}));

(cljs.core.async.t_cljs$core$async17755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17755");

(cljs.core.async.t_cljs$core$async17755.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async17755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17755.
 */
cljs.core.async.__GT_t_cljs$core$async17755 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17755(flag__$1,meta17756){
return (new cljs.core.async.t_cljs$core$async17755(flag__$1,meta17756));
});

}

return (new cljs.core.async.t_cljs$core$async17755(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17758 = (function (flag,cb,meta17759){
this.flag = flag;
this.cb = cb;
this.meta17759 = meta17759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17760,meta17759__$1){
var self__ = this;
var _17760__$1 = this;
return (new cljs.core.async.t_cljs$core$async17758(self__.flag,self__.cb,meta17759__$1));
}));

(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17760){
var self__ = this;
var _17760__$1 = this;
return self__.meta17759;
}));

(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17759","meta17759",655750448,null)], null);
}));

(cljs.core.async.t_cljs$core$async17758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17758");

(cljs.core.async.t_cljs$core$async17758.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async17758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17758.
 */
cljs.core.async.__GT_t_cljs$core$async17758 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17758(flag__$1,cb__$1,meta17759){
return (new cljs.core.async.t_cljs$core$async17758(flag__$1,cb__$1,meta17759));
});

}

return (new cljs.core.async.t_cljs$core$async17758(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__17761_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17762_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17762_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4160__auto__ = wport;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17763 = (i + (1));
i = G__17763;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var len__4771__auto___17768 = arguments.length;
var i__4772__auto___17769 = (0);
while(true){
if((i__4772__auto___17769 < len__4771__auto___17768)){
args__4777__auto__.push((arguments[i__4772__auto___17769]));

var G__17770 = (i__4772__auto___17769 + (1));
i__4772__auto___17769 = G__17770;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17766){
var map__17767 = p__17766;
var map__17767__$1 = cljs.core.__destructure_map.call(null,map__17767);
var opts = map__17767__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17764){
var G__17765 = cljs.core.first.call(null,seq17764);
var seq17764__$1 = cljs.core.next.call(null,seq17764);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17765,seq17764__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__17772 = arguments.length;
switch (G__17772) {
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
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17673__auto___17819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_17796){
var state_val_17797 = (state_17796[(1)]);
if((state_val_17797 === (7))){
var inst_17792 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17798_17820 = state_17796__$1;
(statearr_17798_17820[(2)] = inst_17792);

(statearr_17798_17820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (1))){
var state_17796__$1 = state_17796;
var statearr_17799_17821 = state_17796__$1;
(statearr_17799_17821[(2)] = null);

(statearr_17799_17821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (4))){
var inst_17775 = (state_17796[(7)]);
var inst_17775__$1 = (state_17796[(2)]);
var inst_17776 = (inst_17775__$1 == null);
var state_17796__$1 = (function (){var statearr_17800 = state_17796;
(statearr_17800[(7)] = inst_17775__$1);

return statearr_17800;
})();
if(cljs.core.truth_(inst_17776)){
var statearr_17801_17822 = state_17796__$1;
(statearr_17801_17822[(1)] = (5));

} else {
var statearr_17802_17823 = state_17796__$1;
(statearr_17802_17823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (13))){
var state_17796__$1 = state_17796;
var statearr_17803_17824 = state_17796__$1;
(statearr_17803_17824[(2)] = null);

(statearr_17803_17824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (6))){
var inst_17775 = (state_17796[(7)]);
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17796__$1,(11),to,inst_17775);
} else {
if((state_val_17797 === (3))){
var inst_17794 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17796__$1,inst_17794);
} else {
if((state_val_17797 === (12))){
var state_17796__$1 = state_17796;
var statearr_17804_17825 = state_17796__$1;
(statearr_17804_17825[(2)] = null);

(statearr_17804_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (2))){
var state_17796__$1 = state_17796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17796__$1,(4),from);
} else {
if((state_val_17797 === (11))){
var inst_17785 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
if(cljs.core.truth_(inst_17785)){
var statearr_17805_17826 = state_17796__$1;
(statearr_17805_17826[(1)] = (12));

} else {
var statearr_17806_17827 = state_17796__$1;
(statearr_17806_17827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (9))){
var state_17796__$1 = state_17796;
var statearr_17807_17828 = state_17796__$1;
(statearr_17807_17828[(2)] = null);

(statearr_17807_17828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (5))){
var state_17796__$1 = state_17796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17808_17829 = state_17796__$1;
(statearr_17808_17829[(1)] = (8));

} else {
var statearr_17809_17830 = state_17796__$1;
(statearr_17809_17830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (14))){
var inst_17790 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17810_17831 = state_17796__$1;
(statearr_17810_17831[(2)] = inst_17790);

(statearr_17810_17831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (10))){
var inst_17782 = (state_17796[(2)]);
var state_17796__$1 = state_17796;
var statearr_17811_17832 = state_17796__$1;
(statearr_17811_17832[(2)] = inst_17782);

(statearr_17811_17832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17797 === (8))){
var inst_17779 = cljs.core.async.close_BANG_.call(null,to);
var state_17796__$1 = state_17796;
var statearr_17812_17833 = state_17796__$1;
(statearr_17812_17833[(2)] = inst_17779);

(statearr_17812_17833[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_17813 = [null,null,null,null,null,null,null,null];
(statearr_17813[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_17813[(1)] = (1));

return statearr_17813;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_17796){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e17814){var ex__17603__auto__ = e17814;
var statearr_17815_17834 = state_17796;
(statearr_17815_17834[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17796[(4)]))){
var statearr_17816_17835 = state_17796;
(statearr_17816_17835[(1)] = cljs.core.first.call(null,(state_17796[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17836 = state_17796;
state_17796 = G__17836;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_17796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_17796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_17817 = f__17674__auto__.call(null);
(statearr_17817[(6)] = c__17673__auto___17819);

return statearr_17817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17837){
var vec__17838 = p__17837;
var v = cljs.core.nth.call(null,vec__17838,(0),null);
var p = cljs.core.nth.call(null,vec__17838,(1),null);
var job = vec__17838;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17673__auto___18014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_17845){
var state_val_17846 = (state_17845[(1)]);
if((state_val_17846 === (1))){
var state_17845__$1 = state_17845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17845__$1,(2),res,v);
} else {
if((state_val_17846 === (2))){
var inst_17842 = (state_17845[(2)]);
var inst_17843 = cljs.core.async.close_BANG_.call(null,res);
var state_17845__$1 = (function (){var statearr_17847 = state_17845;
(statearr_17847[(7)] = inst_17842);

return statearr_17847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17845__$1,inst_17843);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_17848 = [null,null,null,null,null,null,null,null];
(statearr_17848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__);

(statearr_17848[(1)] = (1));

return statearr_17848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1 = (function (state_17845){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e17849){var ex__17603__auto__ = e17849;
var statearr_17850_18015 = state_17845;
(statearr_17850_18015[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17845[(4)]))){
var statearr_17851_18016 = state_17845;
(statearr_17851_18016[(1)] = cljs.core.first.call(null,(state_17845[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18017 = state_17845;
state_17845 = G__18017;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = function(state_17845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1.call(this,state_17845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_17852 = f__17674__auto__.call(null);
(statearr_17852[(6)] = c__17673__auto___18014);

return statearr_17852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17853){
var vec__17854 = p__17853;
var v = cljs.core.nth.call(null,vec__17854,(0),null);
var p = cljs.core.nth.call(null,vec__17854,(1),null);
var job = vec__17854;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4648__auto___18018 = n;
var __18019 = (0);
while(true){
if((__18019 < n__4648__auto___18018)){
var G__17857_18020 = type;
var G__17857_18021__$1 = (((G__17857_18020 instanceof cljs.core.Keyword))?G__17857_18020.fqn:null);
switch (G__17857_18021__$1) {
case "compute":
var c__17673__auto___18023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18019,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = ((function (__18019,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function (state_17870){
var state_val_17871 = (state_17870[(1)]);
if((state_val_17871 === (1))){
var state_17870__$1 = state_17870;
var statearr_17872_18024 = state_17870__$1;
(statearr_17872_18024[(2)] = null);

(statearr_17872_18024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (2))){
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17870__$1,(4),jobs);
} else {
if((state_val_17871 === (3))){
var inst_17868 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17870__$1,inst_17868);
} else {
if((state_val_17871 === (4))){
var inst_17860 = (state_17870[(2)]);
var inst_17861 = process.call(null,inst_17860);
var state_17870__$1 = state_17870;
if(cljs.core.truth_(inst_17861)){
var statearr_17873_18025 = state_17870__$1;
(statearr_17873_18025[(1)] = (5));

} else {
var statearr_17874_18026 = state_17870__$1;
(statearr_17874_18026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (5))){
var state_17870__$1 = state_17870;
var statearr_17875_18027 = state_17870__$1;
(statearr_17875_18027[(2)] = null);

(statearr_17875_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (6))){
var state_17870__$1 = state_17870;
var statearr_17876_18028 = state_17870__$1;
(statearr_17876_18028[(2)] = null);

(statearr_17876_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17871 === (7))){
var inst_17866 = (state_17870[(2)]);
var state_17870__$1 = state_17870;
var statearr_17877_18029 = state_17870__$1;
(statearr_17877_18029[(2)] = inst_17866);

(statearr_17877_18029[(1)] = (3));


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
});})(__18019,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
;
return ((function (__18019,switch__17599__auto__,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_17878 = [null,null,null,null,null,null,null];
(statearr_17878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__);

(statearr_17878[(1)] = (1));

return statearr_17878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1 = (function (state_17870){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e17879){var ex__17603__auto__ = e17879;
var statearr_17880_18030 = state_17870;
(statearr_17880_18030[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17870[(4)]))){
var statearr_17881_18031 = state_17870;
(statearr_17881_18031[(1)] = cljs.core.first.call(null,(state_17870[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18032 = state_17870;
state_17870 = G__18032;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = function(state_17870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1.call(this,state_17870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__;
})()
;})(__18019,switch__17599__auto__,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
})();
var state__17675__auto__ = (function (){var statearr_17882 = f__17674__auto__.call(null);
(statearr_17882[(6)] = c__17673__auto___18023);

return statearr_17882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
});})(__18019,c__17673__auto___18023,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
);


break;
case "async":
var c__17673__auto___18033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18019,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = ((function (__18019,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function (state_17895){
var state_val_17896 = (state_17895[(1)]);
if((state_val_17896 === (1))){
var state_17895__$1 = state_17895;
var statearr_17897_18034 = state_17895__$1;
(statearr_17897_18034[(2)] = null);

(statearr_17897_18034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17896 === (2))){
var state_17895__$1 = state_17895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17895__$1,(4),jobs);
} else {
if((state_val_17896 === (3))){
var inst_17893 = (state_17895[(2)]);
var state_17895__$1 = state_17895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17895__$1,inst_17893);
} else {
if((state_val_17896 === (4))){
var inst_17885 = (state_17895[(2)]);
var inst_17886 = async.call(null,inst_17885);
var state_17895__$1 = state_17895;
if(cljs.core.truth_(inst_17886)){
var statearr_17898_18035 = state_17895__$1;
(statearr_17898_18035[(1)] = (5));

} else {
var statearr_17899_18036 = state_17895__$1;
(statearr_17899_18036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17896 === (5))){
var state_17895__$1 = state_17895;
var statearr_17900_18037 = state_17895__$1;
(statearr_17900_18037[(2)] = null);

(statearr_17900_18037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17896 === (6))){
var state_17895__$1 = state_17895;
var statearr_17901_18038 = state_17895__$1;
(statearr_17901_18038[(2)] = null);

(statearr_17901_18038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17896 === (7))){
var inst_17891 = (state_17895[(2)]);
var state_17895__$1 = state_17895;
var statearr_17902_18039 = state_17895__$1;
(statearr_17902_18039[(2)] = inst_17891);

(statearr_17902_18039[(1)] = (3));


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
});})(__18019,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
;
return ((function (__18019,switch__17599__auto__,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_17903 = [null,null,null,null,null,null,null];
(statearr_17903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__);

(statearr_17903[(1)] = (1));

return statearr_17903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1 = (function (state_17895){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e17904){var ex__17603__auto__ = e17904;
var statearr_17905_18040 = state_17895;
(statearr_17905_18040[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17895[(4)]))){
var statearr_17906_18041 = state_17895;
(statearr_17906_18041[(1)] = cljs.core.first.call(null,(state_17895[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18042 = state_17895;
state_17895 = G__18042;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = function(state_17895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1.call(this,state_17895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__;
})()
;})(__18019,switch__17599__auto__,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
})();
var state__17675__auto__ = (function (){var statearr_17907 = f__17674__auto__.call(null);
(statearr_17907[(6)] = c__17673__auto___18033);

return statearr_17907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
});})(__18019,c__17673__auto___18033,G__17857_18020,G__17857_18021__$1,n__4648__auto___18018,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17857_18021__$1)].join('')));

}

var G__18043 = (__18019 + (1));
__18019 = G__18043;
continue;
} else {
}
break;
}

var c__17673__auto___18044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_17929){
var state_val_17930 = (state_17929[(1)]);
if((state_val_17930 === (7))){
var inst_17925 = (state_17929[(2)]);
var state_17929__$1 = state_17929;
var statearr_17931_18045 = state_17929__$1;
(statearr_17931_18045[(2)] = inst_17925);

(statearr_17931_18045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17930 === (1))){
var state_17929__$1 = state_17929;
var statearr_17932_18046 = state_17929__$1;
(statearr_17932_18046[(2)] = null);

(statearr_17932_18046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17930 === (4))){
var inst_17910 = (state_17929[(7)]);
var inst_17910__$1 = (state_17929[(2)]);
var inst_17911 = (inst_17910__$1 == null);
var state_17929__$1 = (function (){var statearr_17933 = state_17929;
(statearr_17933[(7)] = inst_17910__$1);

return statearr_17933;
})();
if(cljs.core.truth_(inst_17911)){
var statearr_17934_18047 = state_17929__$1;
(statearr_17934_18047[(1)] = (5));

} else {
var statearr_17935_18048 = state_17929__$1;
(statearr_17935_18048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17930 === (6))){
var inst_17910 = (state_17929[(7)]);
var inst_17915 = (state_17929[(8)]);
var inst_17915__$1 = cljs.core.async.chan.call(null,(1));
var inst_17916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17917 = [inst_17910,inst_17915__$1];
var inst_17918 = (new cljs.core.PersistentVector(null,2,(5),inst_17916,inst_17917,null));
var state_17929__$1 = (function (){var statearr_17936 = state_17929;
(statearr_17936[(8)] = inst_17915__$1);

return statearr_17936;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17929__$1,(8),jobs,inst_17918);
} else {
if((state_val_17930 === (3))){
var inst_17927 = (state_17929[(2)]);
var state_17929__$1 = state_17929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17929__$1,inst_17927);
} else {
if((state_val_17930 === (2))){
var state_17929__$1 = state_17929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17929__$1,(4),from);
} else {
if((state_val_17930 === (9))){
var inst_17922 = (state_17929[(2)]);
var state_17929__$1 = (function (){var statearr_17937 = state_17929;
(statearr_17937[(9)] = inst_17922);

return statearr_17937;
})();
var statearr_17938_18049 = state_17929__$1;
(statearr_17938_18049[(2)] = null);

(statearr_17938_18049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17930 === (5))){
var inst_17913 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17929__$1 = state_17929;
var statearr_17939_18050 = state_17929__$1;
(statearr_17939_18050[(2)] = inst_17913);

(statearr_17939_18050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17930 === (8))){
var inst_17915 = (state_17929[(8)]);
var inst_17920 = (state_17929[(2)]);
var state_17929__$1 = (function (){var statearr_17940 = state_17929;
(statearr_17940[(10)] = inst_17920);

return statearr_17940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17929__$1,(9),results,inst_17915);
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
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_17941 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__);

(statearr_17941[(1)] = (1));

return statearr_17941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1 = (function (state_17929){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e17942){var ex__17603__auto__ = e17942;
var statearr_17943_18051 = state_17929;
(statearr_17943_18051[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17929[(4)]))){
var statearr_17944_18052 = state_17929;
(statearr_17944_18052[(1)] = cljs.core.first.call(null,(state_17929[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18053 = state_17929;
state_17929 = G__18053;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = function(state_17929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1.call(this,state_17929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_17945 = f__17674__auto__.call(null);
(statearr_17945[(6)] = c__17673__auto___18044);

return statearr_17945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_17983){
var state_val_17984 = (state_17983[(1)]);
if((state_val_17984 === (7))){
var inst_17979 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_17985_18054 = state_17983__$1;
(statearr_17985_18054[(2)] = inst_17979);

(statearr_17985_18054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (20))){
var state_17983__$1 = state_17983;
var statearr_17986_18055 = state_17983__$1;
(statearr_17986_18055[(2)] = null);

(statearr_17986_18055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (1))){
var state_17983__$1 = state_17983;
var statearr_17987_18056 = state_17983__$1;
(statearr_17987_18056[(2)] = null);

(statearr_17987_18056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (4))){
var inst_17948 = (state_17983[(7)]);
var inst_17948__$1 = (state_17983[(2)]);
var inst_17949 = (inst_17948__$1 == null);
var state_17983__$1 = (function (){var statearr_17988 = state_17983;
(statearr_17988[(7)] = inst_17948__$1);

return statearr_17988;
})();
if(cljs.core.truth_(inst_17949)){
var statearr_17989_18057 = state_17983__$1;
(statearr_17989_18057[(1)] = (5));

} else {
var statearr_17990_18058 = state_17983__$1;
(statearr_17990_18058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (15))){
var inst_17961 = (state_17983[(8)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17983__$1,(18),to,inst_17961);
} else {
if((state_val_17984 === (21))){
var inst_17974 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_17991_18059 = state_17983__$1;
(statearr_17991_18059[(2)] = inst_17974);

(statearr_17991_18059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (13))){
var inst_17976 = (state_17983[(2)]);
var state_17983__$1 = (function (){var statearr_17992 = state_17983;
(statearr_17992[(9)] = inst_17976);

return statearr_17992;
})();
var statearr_17993_18060 = state_17983__$1;
(statearr_17993_18060[(2)] = null);

(statearr_17993_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (6))){
var inst_17948 = (state_17983[(7)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17983__$1,(11),inst_17948);
} else {
if((state_val_17984 === (17))){
var inst_17969 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
if(cljs.core.truth_(inst_17969)){
var statearr_17994_18061 = state_17983__$1;
(statearr_17994_18061[(1)] = (19));

} else {
var statearr_17995_18062 = state_17983__$1;
(statearr_17995_18062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (3))){
var inst_17981 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17983__$1,inst_17981);
} else {
if((state_val_17984 === (12))){
var inst_17958 = (state_17983[(10)]);
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17983__$1,(14),inst_17958);
} else {
if((state_val_17984 === (2))){
var state_17983__$1 = state_17983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17983__$1,(4),results);
} else {
if((state_val_17984 === (19))){
var state_17983__$1 = state_17983;
var statearr_17996_18063 = state_17983__$1;
(statearr_17996_18063[(2)] = null);

(statearr_17996_18063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (11))){
var inst_17958 = (state_17983[(2)]);
var state_17983__$1 = (function (){var statearr_17997 = state_17983;
(statearr_17997[(10)] = inst_17958);

return statearr_17997;
})();
var statearr_17998_18064 = state_17983__$1;
(statearr_17998_18064[(2)] = null);

(statearr_17998_18064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (9))){
var state_17983__$1 = state_17983;
var statearr_17999_18065 = state_17983__$1;
(statearr_17999_18065[(2)] = null);

(statearr_17999_18065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (5))){
var state_17983__$1 = state_17983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18000_18066 = state_17983__$1;
(statearr_18000_18066[(1)] = (8));

} else {
var statearr_18001_18067 = state_17983__$1;
(statearr_18001_18067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (14))){
var inst_17961 = (state_17983[(8)]);
var inst_17961__$1 = (state_17983[(2)]);
var inst_17962 = (inst_17961__$1 == null);
var inst_17963 = cljs.core.not.call(null,inst_17962);
var state_17983__$1 = (function (){var statearr_18002 = state_17983;
(statearr_18002[(8)] = inst_17961__$1);

return statearr_18002;
})();
if(inst_17963){
var statearr_18003_18068 = state_17983__$1;
(statearr_18003_18068[(1)] = (15));

} else {
var statearr_18004_18069 = state_17983__$1;
(statearr_18004_18069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (16))){
var state_17983__$1 = state_17983;
var statearr_18005_18070 = state_17983__$1;
(statearr_18005_18070[(2)] = false);

(statearr_18005_18070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (10))){
var inst_17955 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_18006_18071 = state_17983__$1;
(statearr_18006_18071[(2)] = inst_17955);

(statearr_18006_18071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (18))){
var inst_17966 = (state_17983[(2)]);
var state_17983__$1 = state_17983;
var statearr_18007_18072 = state_17983__$1;
(statearr_18007_18072[(2)] = inst_17966);

(statearr_18007_18072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17984 === (8))){
var inst_17952 = cljs.core.async.close_BANG_.call(null,to);
var state_17983__$1 = state_17983;
var statearr_18008_18073 = state_17983__$1;
(statearr_18008_18073[(2)] = inst_17952);

(statearr_18008_18073[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1 = (function (state_17983){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_17983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18010){var ex__17603__auto__ = e18010;
var statearr_18011_18074 = state_17983;
(statearr_18011_18074[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_17983[(4)]))){
var statearr_18012_18075 = state_17983;
(statearr_18012_18075[(1)] = cljs.core.first.call(null,(state_17983[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18076 = state_17983;
state_17983 = G__18076;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__ = function(state_17983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1.call(this,state_17983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18013 = f__17674__auto__.call(null);
(statearr_18013[(6)] = c__17673__auto__);

return statearr_18013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
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
var G__18078 = arguments.length;
switch (G__18078) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__18081 = arguments.length;
switch (G__18081) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__18084 = arguments.length;
switch (G__18084) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17673__auto___18134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18110){
var state_val_18111 = (state_18110[(1)]);
if((state_val_18111 === (7))){
var inst_18106 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18112_18135 = state_18110__$1;
(statearr_18112_18135[(2)] = inst_18106);

(statearr_18112_18135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (1))){
var state_18110__$1 = state_18110;
var statearr_18113_18136 = state_18110__$1;
(statearr_18113_18136[(2)] = null);

(statearr_18113_18136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (4))){
var inst_18087 = (state_18110[(7)]);
var inst_18087__$1 = (state_18110[(2)]);
var inst_18088 = (inst_18087__$1 == null);
var state_18110__$1 = (function (){var statearr_18114 = state_18110;
(statearr_18114[(7)] = inst_18087__$1);

return statearr_18114;
})();
if(cljs.core.truth_(inst_18088)){
var statearr_18115_18137 = state_18110__$1;
(statearr_18115_18137[(1)] = (5));

} else {
var statearr_18116_18138 = state_18110__$1;
(statearr_18116_18138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (13))){
var state_18110__$1 = state_18110;
var statearr_18117_18139 = state_18110__$1;
(statearr_18117_18139[(2)] = null);

(statearr_18117_18139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (6))){
var inst_18087 = (state_18110[(7)]);
var inst_18093 = p.call(null,inst_18087);
var state_18110__$1 = state_18110;
if(cljs.core.truth_(inst_18093)){
var statearr_18118_18140 = state_18110__$1;
(statearr_18118_18140[(1)] = (9));

} else {
var statearr_18119_18141 = state_18110__$1;
(statearr_18119_18141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (3))){
var inst_18108 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18110__$1,inst_18108);
} else {
if((state_val_18111 === (12))){
var state_18110__$1 = state_18110;
var statearr_18120_18142 = state_18110__$1;
(statearr_18120_18142[(2)] = null);

(statearr_18120_18142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (2))){
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18110__$1,(4),ch);
} else {
if((state_val_18111 === (11))){
var inst_18087 = (state_18110[(7)]);
var inst_18097 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18110__$1,(8),inst_18097,inst_18087);
} else {
if((state_val_18111 === (9))){
var state_18110__$1 = state_18110;
var statearr_18121_18143 = state_18110__$1;
(statearr_18121_18143[(2)] = tc);

(statearr_18121_18143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (5))){
var inst_18090 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18091 = cljs.core.async.close_BANG_.call(null,fc);
var state_18110__$1 = (function (){var statearr_18122 = state_18110;
(statearr_18122[(8)] = inst_18090);

return statearr_18122;
})();
var statearr_18123_18144 = state_18110__$1;
(statearr_18123_18144[(2)] = inst_18091);

(statearr_18123_18144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (14))){
var inst_18104 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
var statearr_18124_18145 = state_18110__$1;
(statearr_18124_18145[(2)] = inst_18104);

(statearr_18124_18145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (10))){
var state_18110__$1 = state_18110;
var statearr_18125_18146 = state_18110__$1;
(statearr_18125_18146[(2)] = fc);

(statearr_18125_18146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18111 === (8))){
var inst_18099 = (state_18110[(2)]);
var state_18110__$1 = state_18110;
if(cljs.core.truth_(inst_18099)){
var statearr_18126_18147 = state_18110__$1;
(statearr_18126_18147[(1)] = (12));

} else {
var statearr_18127_18148 = state_18110__$1;
(statearr_18127_18148[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_18128 = [null,null,null,null,null,null,null,null,null];
(statearr_18128[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_18128[(1)] = (1));

return statearr_18128;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_18110){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18129){var ex__17603__auto__ = e18129;
var statearr_18130_18149 = state_18110;
(statearr_18130_18149[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18110[(4)]))){
var statearr_18131_18150 = state_18110;
(statearr_18131_18150[(1)] = cljs.core.first.call(null,(state_18110[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18151 = state_18110;
state_18110 = G__18151;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_18110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_18110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18132 = f__17674__auto__.call(null);
(statearr_18132[(6)] = c__17673__auto___18134);

return statearr_18132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
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
var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18173){
var state_val_18174 = (state_18173[(1)]);
if((state_val_18174 === (7))){
var inst_18169 = (state_18173[(2)]);
var state_18173__$1 = state_18173;
var statearr_18175_18194 = state_18173__$1;
(statearr_18175_18194[(2)] = inst_18169);

(statearr_18175_18194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (1))){
var inst_18152 = init;
var inst_18153 = inst_18152;
var state_18173__$1 = (function (){var statearr_18176 = state_18173;
(statearr_18176[(7)] = inst_18153);

return statearr_18176;
})();
var statearr_18177_18195 = state_18173__$1;
(statearr_18177_18195[(2)] = null);

(statearr_18177_18195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (4))){
var inst_18156 = (state_18173[(8)]);
var inst_18156__$1 = (state_18173[(2)]);
var inst_18157 = (inst_18156__$1 == null);
var state_18173__$1 = (function (){var statearr_18178 = state_18173;
(statearr_18178[(8)] = inst_18156__$1);

return statearr_18178;
})();
if(cljs.core.truth_(inst_18157)){
var statearr_18179_18196 = state_18173__$1;
(statearr_18179_18196[(1)] = (5));

} else {
var statearr_18180_18197 = state_18173__$1;
(statearr_18180_18197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (6))){
var inst_18156 = (state_18173[(8)]);
var inst_18160 = (state_18173[(9)]);
var inst_18153 = (state_18173[(7)]);
var inst_18160__$1 = f.call(null,inst_18153,inst_18156);
var inst_18161 = cljs.core.reduced_QMARK_.call(null,inst_18160__$1);
var state_18173__$1 = (function (){var statearr_18181 = state_18173;
(statearr_18181[(9)] = inst_18160__$1);

return statearr_18181;
})();
if(inst_18161){
var statearr_18182_18198 = state_18173__$1;
(statearr_18182_18198[(1)] = (8));

} else {
var statearr_18183_18199 = state_18173__$1;
(statearr_18183_18199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (3))){
var inst_18171 = (state_18173[(2)]);
var state_18173__$1 = state_18173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18173__$1,inst_18171);
} else {
if((state_val_18174 === (2))){
var state_18173__$1 = state_18173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18173__$1,(4),ch);
} else {
if((state_val_18174 === (9))){
var inst_18160 = (state_18173[(9)]);
var inst_18153 = inst_18160;
var state_18173__$1 = (function (){var statearr_18184 = state_18173;
(statearr_18184[(7)] = inst_18153);

return statearr_18184;
})();
var statearr_18185_18200 = state_18173__$1;
(statearr_18185_18200[(2)] = null);

(statearr_18185_18200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (5))){
var inst_18153 = (state_18173[(7)]);
var state_18173__$1 = state_18173;
var statearr_18186_18201 = state_18173__$1;
(statearr_18186_18201[(2)] = inst_18153);

(statearr_18186_18201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (10))){
var inst_18167 = (state_18173[(2)]);
var state_18173__$1 = state_18173;
var statearr_18187_18202 = state_18173__$1;
(statearr_18187_18202[(2)] = inst_18167);

(statearr_18187_18202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18174 === (8))){
var inst_18160 = (state_18173[(9)]);
var inst_18163 = cljs.core.deref.call(null,inst_18160);
var state_18173__$1 = state_18173;
var statearr_18188_18203 = state_18173__$1;
(statearr_18188_18203[(2)] = inst_18163);

(statearr_18188_18203[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17600__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17600__auto____0 = (function (){
var statearr_18189 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18189[(0)] = cljs$core$async$reduce_$_state_machine__17600__auto__);

(statearr_18189[(1)] = (1));

return statearr_18189;
});
var cljs$core$async$reduce_$_state_machine__17600__auto____1 = (function (state_18173){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18190){var ex__17603__auto__ = e18190;
var statearr_18191_18204 = state_18173;
(statearr_18191_18204[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18173[(4)]))){
var statearr_18192_18205 = state_18173;
(statearr_18192_18205[(1)] = cljs.core.first.call(null,(state_18173[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18206 = state_18173;
state_18173 = G__18206;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17600__auto__ = function(state_18173){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17600__auto____1.call(this,state_18173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17600__auto____0;
cljs$core$async$reduce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17600__auto____1;
return cljs$core$async$reduce_$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18193 = f__17674__auto__.call(null);
(statearr_18193[(6)] = c__17673__auto__);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (1))){
var inst_18207 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18212__$1,(2),inst_18207);
} else {
if((state_val_18213 === (2))){
var inst_18209 = (state_18212[(2)]);
var inst_18210 = f__$1.call(null,inst_18209);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18212__$1,inst_18210);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17600__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17600__auto____0 = (function (){
var statearr_18214 = [null,null,null,null,null,null,null];
(statearr_18214[(0)] = cljs$core$async$transduce_$_state_machine__17600__auto__);

(statearr_18214[(1)] = (1));

return statearr_18214;
});
var cljs$core$async$transduce_$_state_machine__17600__auto____1 = (function (state_18212){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18215){var ex__17603__auto__ = e18215;
var statearr_18216_18219 = state_18212;
(statearr_18216_18219[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18212[(4)]))){
var statearr_18217_18220 = state_18212;
(statearr_18217_18220[(1)] = cljs.core.first.call(null,(state_18212[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18221 = state_18212;
state_18212 = G__18221;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17600__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17600__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17600__auto____0;
cljs$core$async$transduce_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17600__auto____1;
return cljs$core$async$transduce_$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18218 = f__17674__auto__.call(null);
(statearr_18218[(6)] = c__17673__auto__);

return statearr_18218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
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
var G__18223 = arguments.length;
switch (G__18223) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18248){
var state_val_18249 = (state_18248[(1)]);
if((state_val_18249 === (7))){
var inst_18230 = (state_18248[(2)]);
var state_18248__$1 = state_18248;
var statearr_18250_18272 = state_18248__$1;
(statearr_18250_18272[(2)] = inst_18230);

(statearr_18250_18272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (1))){
var inst_18224 = cljs.core.seq.call(null,coll);
var inst_18225 = inst_18224;
var state_18248__$1 = (function (){var statearr_18251 = state_18248;
(statearr_18251[(7)] = inst_18225);

return statearr_18251;
})();
var statearr_18252_18273 = state_18248__$1;
(statearr_18252_18273[(2)] = null);

(statearr_18252_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (4))){
var inst_18225 = (state_18248[(7)]);
var inst_18228 = cljs.core.first.call(null,inst_18225);
var state_18248__$1 = state_18248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18248__$1,(7),ch,inst_18228);
} else {
if((state_val_18249 === (13))){
var inst_18242 = (state_18248[(2)]);
var state_18248__$1 = state_18248;
var statearr_18253_18274 = state_18248__$1;
(statearr_18253_18274[(2)] = inst_18242);

(statearr_18253_18274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (6))){
var inst_18233 = (state_18248[(2)]);
var state_18248__$1 = state_18248;
if(cljs.core.truth_(inst_18233)){
var statearr_18254_18275 = state_18248__$1;
(statearr_18254_18275[(1)] = (8));

} else {
var statearr_18255_18276 = state_18248__$1;
(statearr_18255_18276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (3))){
var inst_18246 = (state_18248[(2)]);
var state_18248__$1 = state_18248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18248__$1,inst_18246);
} else {
if((state_val_18249 === (12))){
var state_18248__$1 = state_18248;
var statearr_18256_18277 = state_18248__$1;
(statearr_18256_18277[(2)] = null);

(statearr_18256_18277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (2))){
var inst_18225 = (state_18248[(7)]);
var state_18248__$1 = state_18248;
if(cljs.core.truth_(inst_18225)){
var statearr_18257_18278 = state_18248__$1;
(statearr_18257_18278[(1)] = (4));

} else {
var statearr_18258_18279 = state_18248__$1;
(statearr_18258_18279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (11))){
var inst_18239 = cljs.core.async.close_BANG_.call(null,ch);
var state_18248__$1 = state_18248;
var statearr_18259_18280 = state_18248__$1;
(statearr_18259_18280[(2)] = inst_18239);

(statearr_18259_18280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (9))){
var state_18248__$1 = state_18248;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18260_18281 = state_18248__$1;
(statearr_18260_18281[(1)] = (11));

} else {
var statearr_18261_18282 = state_18248__$1;
(statearr_18261_18282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (5))){
var inst_18225 = (state_18248[(7)]);
var state_18248__$1 = state_18248;
var statearr_18262_18283 = state_18248__$1;
(statearr_18262_18283[(2)] = inst_18225);

(statearr_18262_18283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (10))){
var inst_18244 = (state_18248[(2)]);
var state_18248__$1 = state_18248;
var statearr_18263_18284 = state_18248__$1;
(statearr_18263_18284[(2)] = inst_18244);

(statearr_18263_18284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18249 === (8))){
var inst_18225 = (state_18248[(7)]);
var inst_18235 = cljs.core.next.call(null,inst_18225);
var inst_18225__$1 = inst_18235;
var state_18248__$1 = (function (){var statearr_18264 = state_18248;
(statearr_18264[(7)] = inst_18225__$1);

return statearr_18264;
})();
var statearr_18265_18285 = state_18248__$1;
(statearr_18265_18285[(2)] = null);

(statearr_18265_18285[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_18266 = [null,null,null,null,null,null,null,null];
(statearr_18266[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_18266[(1)] = (1));

return statearr_18266;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_18248){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18267){var ex__17603__auto__ = e18267;
var statearr_18268_18286 = state_18248;
(statearr_18268_18286[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18248[(4)]))){
var statearr_18269_18287 = state_18248;
(statearr_18269_18287[(1)] = cljs.core.first.call(null,(state_18248[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18288 = state_18248;
state_18248 = G__18288;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_18248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_18248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18270 = f__17674__auto__.call(null);
(statearr_18270[(6)] = c__17673__auto__);

return statearr_18270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18290 = arguments.length;
switch (G__18290) {
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
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18292 = (function (_){
var x__4463__auto__ = (((_ == null))?null:_);
var m__4464__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,_);
} else {
var m__4461__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18292.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18293 = (function (m,ch,close_QMARK_){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18293.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18294 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18294.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18295 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18295.call(null,m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18296 = (function (ch,cs,meta18297){
this.ch = ch;
this.cs = cs;
this.meta18297 = meta18297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18298,meta18297__$1){
var self__ = this;
var _18298__$1 = this;
return (new cljs.core.async.t_cljs$core$async18296(self__.ch,self__.cs,meta18297__$1));
}));

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18298){
var self__ = this;
var _18298__$1 = this;
return self__.meta18297;
}));

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18296.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18297","meta18297",916675675,null)], null);
}));

(cljs.core.async.t_cljs$core$async18296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18296");

(cljs.core.async.t_cljs$core$async18296.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18296.
 */
cljs.core.async.__GT_t_cljs$core$async18296 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18296(ch__$1,cs__$1,meta18297){
return (new cljs.core.async.t_cljs$core$async18296(ch__$1,cs__$1,meta18297));
});

}

return (new cljs.core.async.t_cljs$core$async18296(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__17673__auto___18515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18431){
var state_val_18432 = (state_18431[(1)]);
if((state_val_18432 === (7))){
var inst_18427 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18433_18516 = state_18431__$1;
(statearr_18433_18516[(2)] = inst_18427);

(statearr_18433_18516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (20))){
var inst_18332 = (state_18431[(7)]);
var inst_18344 = cljs.core.first.call(null,inst_18332);
var inst_18345 = cljs.core.nth.call(null,inst_18344,(0),null);
var inst_18346 = cljs.core.nth.call(null,inst_18344,(1),null);
var state_18431__$1 = (function (){var statearr_18434 = state_18431;
(statearr_18434[(8)] = inst_18345);

return statearr_18434;
})();
if(cljs.core.truth_(inst_18346)){
var statearr_18435_18517 = state_18431__$1;
(statearr_18435_18517[(1)] = (22));

} else {
var statearr_18436_18518 = state_18431__$1;
(statearr_18436_18518[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (27))){
var inst_18376 = (state_18431[(9)]);
var inst_18301 = (state_18431[(10)]);
var inst_18381 = (state_18431[(11)]);
var inst_18374 = (state_18431[(12)]);
var inst_18381__$1 = cljs.core._nth.call(null,inst_18374,inst_18376);
var inst_18382 = cljs.core.async.put_BANG_.call(null,inst_18381__$1,inst_18301,done);
var state_18431__$1 = (function (){var statearr_18437 = state_18431;
(statearr_18437[(11)] = inst_18381__$1);

return statearr_18437;
})();
if(cljs.core.truth_(inst_18382)){
var statearr_18438_18519 = state_18431__$1;
(statearr_18438_18519[(1)] = (30));

} else {
var statearr_18439_18520 = state_18431__$1;
(statearr_18439_18520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (1))){
var state_18431__$1 = state_18431;
var statearr_18440_18521 = state_18431__$1;
(statearr_18440_18521[(2)] = null);

(statearr_18440_18521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (24))){
var inst_18332 = (state_18431[(7)]);
var inst_18351 = (state_18431[(2)]);
var inst_18352 = cljs.core.next.call(null,inst_18332);
var inst_18310 = inst_18352;
var inst_18311 = null;
var inst_18312 = (0);
var inst_18313 = (0);
var state_18431__$1 = (function (){var statearr_18441 = state_18431;
(statearr_18441[(13)] = inst_18310);

(statearr_18441[(14)] = inst_18312);

(statearr_18441[(15)] = inst_18351);

(statearr_18441[(16)] = inst_18311);

(statearr_18441[(17)] = inst_18313);

return statearr_18441;
})();
var statearr_18442_18522 = state_18431__$1;
(statearr_18442_18522[(2)] = null);

(statearr_18442_18522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (39))){
var state_18431__$1 = state_18431;
var statearr_18446_18523 = state_18431__$1;
(statearr_18446_18523[(2)] = null);

(statearr_18446_18523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (4))){
var inst_18301 = (state_18431[(10)]);
var inst_18301__$1 = (state_18431[(2)]);
var inst_18302 = (inst_18301__$1 == null);
var state_18431__$1 = (function (){var statearr_18447 = state_18431;
(statearr_18447[(10)] = inst_18301__$1);

return statearr_18447;
})();
if(cljs.core.truth_(inst_18302)){
var statearr_18448_18524 = state_18431__$1;
(statearr_18448_18524[(1)] = (5));

} else {
var statearr_18449_18525 = state_18431__$1;
(statearr_18449_18525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (15))){
var inst_18310 = (state_18431[(13)]);
var inst_18312 = (state_18431[(14)]);
var inst_18311 = (state_18431[(16)]);
var inst_18313 = (state_18431[(17)]);
var inst_18328 = (state_18431[(2)]);
var inst_18329 = (inst_18313 + (1));
var tmp18443 = inst_18310;
var tmp18444 = inst_18312;
var tmp18445 = inst_18311;
var inst_18310__$1 = tmp18443;
var inst_18311__$1 = tmp18445;
var inst_18312__$1 = tmp18444;
var inst_18313__$1 = inst_18329;
var state_18431__$1 = (function (){var statearr_18450 = state_18431;
(statearr_18450[(13)] = inst_18310__$1);

(statearr_18450[(14)] = inst_18312__$1);

(statearr_18450[(16)] = inst_18311__$1);

(statearr_18450[(17)] = inst_18313__$1);

(statearr_18450[(18)] = inst_18328);

return statearr_18450;
})();
var statearr_18451_18526 = state_18431__$1;
(statearr_18451_18526[(2)] = null);

(statearr_18451_18526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (21))){
var inst_18355 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18455_18527 = state_18431__$1;
(statearr_18455_18527[(2)] = inst_18355);

(statearr_18455_18527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (31))){
var inst_18381 = (state_18431[(11)]);
var inst_18385 = cljs.core.async.untap_STAR_.call(null,m,inst_18381);
var state_18431__$1 = state_18431;
var statearr_18456_18528 = state_18431__$1;
(statearr_18456_18528[(2)] = inst_18385);

(statearr_18456_18528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (32))){
var inst_18376 = (state_18431[(9)]);
var inst_18373 = (state_18431[(19)]);
var inst_18375 = (state_18431[(20)]);
var inst_18374 = (state_18431[(12)]);
var inst_18387 = (state_18431[(2)]);
var inst_18388 = (inst_18376 + (1));
var tmp18452 = inst_18373;
var tmp18453 = inst_18375;
var tmp18454 = inst_18374;
var inst_18373__$1 = tmp18452;
var inst_18374__$1 = tmp18454;
var inst_18375__$1 = tmp18453;
var inst_18376__$1 = inst_18388;
var state_18431__$1 = (function (){var statearr_18457 = state_18431;
(statearr_18457[(21)] = inst_18387);

(statearr_18457[(9)] = inst_18376__$1);

(statearr_18457[(19)] = inst_18373__$1);

(statearr_18457[(20)] = inst_18375__$1);

(statearr_18457[(12)] = inst_18374__$1);

return statearr_18457;
})();
var statearr_18458_18529 = state_18431__$1;
(statearr_18458_18529[(2)] = null);

(statearr_18458_18529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (40))){
var inst_18400 = (state_18431[(22)]);
var inst_18404 = cljs.core.async.untap_STAR_.call(null,m,inst_18400);
var state_18431__$1 = state_18431;
var statearr_18459_18530 = state_18431__$1;
(statearr_18459_18530[(2)] = inst_18404);

(statearr_18459_18530[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (33))){
var inst_18391 = (state_18431[(23)]);
var inst_18393 = cljs.core.chunked_seq_QMARK_.call(null,inst_18391);
var state_18431__$1 = state_18431;
if(inst_18393){
var statearr_18460_18531 = state_18431__$1;
(statearr_18460_18531[(1)] = (36));

} else {
var statearr_18461_18532 = state_18431__$1;
(statearr_18461_18532[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (13))){
var inst_18322 = (state_18431[(24)]);
var inst_18325 = cljs.core.async.close_BANG_.call(null,inst_18322);
var state_18431__$1 = state_18431;
var statearr_18462_18533 = state_18431__$1;
(statearr_18462_18533[(2)] = inst_18325);

(statearr_18462_18533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (22))){
var inst_18345 = (state_18431[(8)]);
var inst_18348 = cljs.core.async.close_BANG_.call(null,inst_18345);
var state_18431__$1 = state_18431;
var statearr_18463_18534 = state_18431__$1;
(statearr_18463_18534[(2)] = inst_18348);

(statearr_18463_18534[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (36))){
var inst_18391 = (state_18431[(23)]);
var inst_18395 = cljs.core.chunk_first.call(null,inst_18391);
var inst_18396 = cljs.core.chunk_rest.call(null,inst_18391);
var inst_18397 = cljs.core.count.call(null,inst_18395);
var inst_18373 = inst_18396;
var inst_18374 = inst_18395;
var inst_18375 = inst_18397;
var inst_18376 = (0);
var state_18431__$1 = (function (){var statearr_18464 = state_18431;
(statearr_18464[(9)] = inst_18376);

(statearr_18464[(19)] = inst_18373);

(statearr_18464[(20)] = inst_18375);

(statearr_18464[(12)] = inst_18374);

return statearr_18464;
})();
var statearr_18465_18535 = state_18431__$1;
(statearr_18465_18535[(2)] = null);

(statearr_18465_18535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (41))){
var inst_18391 = (state_18431[(23)]);
var inst_18406 = (state_18431[(2)]);
var inst_18407 = cljs.core.next.call(null,inst_18391);
var inst_18373 = inst_18407;
var inst_18374 = null;
var inst_18375 = (0);
var inst_18376 = (0);
var state_18431__$1 = (function (){var statearr_18466 = state_18431;
(statearr_18466[(9)] = inst_18376);

(statearr_18466[(19)] = inst_18373);

(statearr_18466[(25)] = inst_18406);

(statearr_18466[(20)] = inst_18375);

(statearr_18466[(12)] = inst_18374);

return statearr_18466;
})();
var statearr_18467_18536 = state_18431__$1;
(statearr_18467_18536[(2)] = null);

(statearr_18467_18536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (43))){
var state_18431__$1 = state_18431;
var statearr_18468_18537 = state_18431__$1;
(statearr_18468_18537[(2)] = null);

(statearr_18468_18537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (29))){
var inst_18415 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18469_18538 = state_18431__$1;
(statearr_18469_18538[(2)] = inst_18415);

(statearr_18469_18538[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (44))){
var inst_18424 = (state_18431[(2)]);
var state_18431__$1 = (function (){var statearr_18470 = state_18431;
(statearr_18470[(26)] = inst_18424);

return statearr_18470;
})();
var statearr_18471_18539 = state_18431__$1;
(statearr_18471_18539[(2)] = null);

(statearr_18471_18539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (6))){
var inst_18365 = (state_18431[(27)]);
var inst_18364 = cljs.core.deref.call(null,cs);
var inst_18365__$1 = cljs.core.keys.call(null,inst_18364);
var inst_18366 = cljs.core.count.call(null,inst_18365__$1);
var inst_18367 = cljs.core.reset_BANG_.call(null,dctr,inst_18366);
var inst_18372 = cljs.core.seq.call(null,inst_18365__$1);
var inst_18373 = inst_18372;
var inst_18374 = null;
var inst_18375 = (0);
var inst_18376 = (0);
var state_18431__$1 = (function (){var statearr_18472 = state_18431;
(statearr_18472[(27)] = inst_18365__$1);

(statearr_18472[(28)] = inst_18367);

(statearr_18472[(9)] = inst_18376);

(statearr_18472[(19)] = inst_18373);

(statearr_18472[(20)] = inst_18375);

(statearr_18472[(12)] = inst_18374);

return statearr_18472;
})();
var statearr_18473_18540 = state_18431__$1;
(statearr_18473_18540[(2)] = null);

(statearr_18473_18540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (28))){
var inst_18391 = (state_18431[(23)]);
var inst_18373 = (state_18431[(19)]);
var inst_18391__$1 = cljs.core.seq.call(null,inst_18373);
var state_18431__$1 = (function (){var statearr_18474 = state_18431;
(statearr_18474[(23)] = inst_18391__$1);

return statearr_18474;
})();
if(inst_18391__$1){
var statearr_18475_18541 = state_18431__$1;
(statearr_18475_18541[(1)] = (33));

} else {
var statearr_18476_18542 = state_18431__$1;
(statearr_18476_18542[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (25))){
var inst_18376 = (state_18431[(9)]);
var inst_18375 = (state_18431[(20)]);
var inst_18378 = (inst_18376 < inst_18375);
var inst_18379 = inst_18378;
var state_18431__$1 = state_18431;
if(cljs.core.truth_(inst_18379)){
var statearr_18477_18543 = state_18431__$1;
(statearr_18477_18543[(1)] = (27));

} else {
var statearr_18478_18544 = state_18431__$1;
(statearr_18478_18544[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (34))){
var state_18431__$1 = state_18431;
var statearr_18479_18545 = state_18431__$1;
(statearr_18479_18545[(2)] = null);

(statearr_18479_18545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (17))){
var state_18431__$1 = state_18431;
var statearr_18480_18546 = state_18431__$1;
(statearr_18480_18546[(2)] = null);

(statearr_18480_18546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (3))){
var inst_18429 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18431__$1,inst_18429);
} else {
if((state_val_18432 === (12))){
var inst_18360 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18481_18547 = state_18431__$1;
(statearr_18481_18547[(2)] = inst_18360);

(statearr_18481_18547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (2))){
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18431__$1,(4),ch);
} else {
if((state_val_18432 === (23))){
var state_18431__$1 = state_18431;
var statearr_18482_18548 = state_18431__$1;
(statearr_18482_18548[(2)] = null);

(statearr_18482_18548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (35))){
var inst_18413 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18483_18549 = state_18431__$1;
(statearr_18483_18549[(2)] = inst_18413);

(statearr_18483_18549[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (19))){
var inst_18332 = (state_18431[(7)]);
var inst_18336 = cljs.core.chunk_first.call(null,inst_18332);
var inst_18337 = cljs.core.chunk_rest.call(null,inst_18332);
var inst_18338 = cljs.core.count.call(null,inst_18336);
var inst_18310 = inst_18337;
var inst_18311 = inst_18336;
var inst_18312 = inst_18338;
var inst_18313 = (0);
var state_18431__$1 = (function (){var statearr_18484 = state_18431;
(statearr_18484[(13)] = inst_18310);

(statearr_18484[(14)] = inst_18312);

(statearr_18484[(16)] = inst_18311);

(statearr_18484[(17)] = inst_18313);

return statearr_18484;
})();
var statearr_18485_18550 = state_18431__$1;
(statearr_18485_18550[(2)] = null);

(statearr_18485_18550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (11))){
var inst_18310 = (state_18431[(13)]);
var inst_18332 = (state_18431[(7)]);
var inst_18332__$1 = cljs.core.seq.call(null,inst_18310);
var state_18431__$1 = (function (){var statearr_18486 = state_18431;
(statearr_18486[(7)] = inst_18332__$1);

return statearr_18486;
})();
if(inst_18332__$1){
var statearr_18487_18551 = state_18431__$1;
(statearr_18487_18551[(1)] = (16));

} else {
var statearr_18488_18552 = state_18431__$1;
(statearr_18488_18552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (9))){
var inst_18362 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18489_18553 = state_18431__$1;
(statearr_18489_18553[(2)] = inst_18362);

(statearr_18489_18553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (5))){
var inst_18308 = cljs.core.deref.call(null,cs);
var inst_18309 = cljs.core.seq.call(null,inst_18308);
var inst_18310 = inst_18309;
var inst_18311 = null;
var inst_18312 = (0);
var inst_18313 = (0);
var state_18431__$1 = (function (){var statearr_18490 = state_18431;
(statearr_18490[(13)] = inst_18310);

(statearr_18490[(14)] = inst_18312);

(statearr_18490[(16)] = inst_18311);

(statearr_18490[(17)] = inst_18313);

return statearr_18490;
})();
var statearr_18491_18554 = state_18431__$1;
(statearr_18491_18554[(2)] = null);

(statearr_18491_18554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (14))){
var state_18431__$1 = state_18431;
var statearr_18492_18555 = state_18431__$1;
(statearr_18492_18555[(2)] = null);

(statearr_18492_18555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (45))){
var inst_18421 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18493_18556 = state_18431__$1;
(statearr_18493_18556[(2)] = inst_18421);

(statearr_18493_18556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (26))){
var inst_18365 = (state_18431[(27)]);
var inst_18417 = (state_18431[(2)]);
var inst_18418 = cljs.core.seq.call(null,inst_18365);
var state_18431__$1 = (function (){var statearr_18494 = state_18431;
(statearr_18494[(29)] = inst_18417);

return statearr_18494;
})();
if(inst_18418){
var statearr_18495_18557 = state_18431__$1;
(statearr_18495_18557[(1)] = (42));

} else {
var statearr_18496_18558 = state_18431__$1;
(statearr_18496_18558[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (16))){
var inst_18332 = (state_18431[(7)]);
var inst_18334 = cljs.core.chunked_seq_QMARK_.call(null,inst_18332);
var state_18431__$1 = state_18431;
if(inst_18334){
var statearr_18497_18559 = state_18431__$1;
(statearr_18497_18559[(1)] = (19));

} else {
var statearr_18498_18560 = state_18431__$1;
(statearr_18498_18560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (38))){
var inst_18410 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18499_18561 = state_18431__$1;
(statearr_18499_18561[(2)] = inst_18410);

(statearr_18499_18561[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (30))){
var state_18431__$1 = state_18431;
var statearr_18500_18562 = state_18431__$1;
(statearr_18500_18562[(2)] = null);

(statearr_18500_18562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (10))){
var inst_18311 = (state_18431[(16)]);
var inst_18313 = (state_18431[(17)]);
var inst_18321 = cljs.core._nth.call(null,inst_18311,inst_18313);
var inst_18322 = cljs.core.nth.call(null,inst_18321,(0),null);
var inst_18323 = cljs.core.nth.call(null,inst_18321,(1),null);
var state_18431__$1 = (function (){var statearr_18501 = state_18431;
(statearr_18501[(24)] = inst_18322);

return statearr_18501;
})();
if(cljs.core.truth_(inst_18323)){
var statearr_18502_18563 = state_18431__$1;
(statearr_18502_18563[(1)] = (13));

} else {
var statearr_18503_18564 = state_18431__$1;
(statearr_18503_18564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (18))){
var inst_18358 = (state_18431[(2)]);
var state_18431__$1 = state_18431;
var statearr_18504_18565 = state_18431__$1;
(statearr_18504_18565[(2)] = inst_18358);

(statearr_18504_18565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (42))){
var state_18431__$1 = state_18431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18431__$1,(45),dchan);
} else {
if((state_val_18432 === (37))){
var inst_18391 = (state_18431[(23)]);
var inst_18400 = (state_18431[(22)]);
var inst_18301 = (state_18431[(10)]);
var inst_18400__$1 = cljs.core.first.call(null,inst_18391);
var inst_18401 = cljs.core.async.put_BANG_.call(null,inst_18400__$1,inst_18301,done);
var state_18431__$1 = (function (){var statearr_18505 = state_18431;
(statearr_18505[(22)] = inst_18400__$1);

return statearr_18505;
})();
if(cljs.core.truth_(inst_18401)){
var statearr_18506_18566 = state_18431__$1;
(statearr_18506_18566[(1)] = (39));

} else {
var statearr_18507_18567 = state_18431__$1;
(statearr_18507_18567[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18432 === (8))){
var inst_18312 = (state_18431[(14)]);
var inst_18313 = (state_18431[(17)]);
var inst_18315 = (inst_18313 < inst_18312);
var inst_18316 = inst_18315;
var state_18431__$1 = state_18431;
if(cljs.core.truth_(inst_18316)){
var statearr_18508_18568 = state_18431__$1;
(statearr_18508_18568[(1)] = (10));

} else {
var statearr_18509_18569 = state_18431__$1;
(statearr_18509_18569[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__17600__auto__ = null;
var cljs$core$async$mult_$_state_machine__17600__auto____0 = (function (){
var statearr_18510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18510[(0)] = cljs$core$async$mult_$_state_machine__17600__auto__);

(statearr_18510[(1)] = (1));

return statearr_18510;
});
var cljs$core$async$mult_$_state_machine__17600__auto____1 = (function (state_18431){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18511){var ex__17603__auto__ = e18511;
var statearr_18512_18570 = state_18431;
(statearr_18512_18570[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18431[(4)]))){
var statearr_18513_18571 = state_18431;
(statearr_18513_18571[(1)] = cljs.core.first.call(null,(state_18431[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_18431;
state_18431 = G__18572;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17600__auto__ = function(state_18431){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17600__auto____1.call(this,state_18431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17600__auto____0;
cljs$core$async$mult_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17600__auto____1;
return cljs$core$async$mult_$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18514 = f__17674__auto__.call(null);
(statearr_18514[(6)] = c__17673__auto___18515);

return statearr_18514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
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
var G__18574 = arguments.length;
switch (G__18574) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18576 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18576.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18577 = (function (m,ch){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18577.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18578 = (function (m){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m);
} else {
var m__4461__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18578.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18579 = (function (m,state_map){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,state_map);
} else {
var m__4461__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18579.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18580 = (function (m,mode){
var x__4463__auto__ = (((m == null))?null:m);
var m__4464__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,m,mode);
} else {
var m__4461__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18580.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4777__auto__ = [];
var len__4771__auto___18590 = arguments.length;
var i__4772__auto___18591 = (0);
while(true){
if((i__4772__auto___18591 < len__4771__auto___18590)){
args__4777__auto__.push((arguments[i__4772__auto___18591]));

var G__18592 = (i__4772__auto___18591 + (1));
i__4772__auto___18591 = G__18592;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18585){
var map__18586 = p__18585;
var map__18586__$1 = cljs.core.__destructure_map.call(null,map__18586);
var opts = map__18586__$1;
var statearr_18587_18593 = state;
(statearr_18587_18593[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18588_18594 = state;
(statearr_18588_18594[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_18589_18595 = state;
(statearr_18589_18595[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18581){
var G__18582 = cljs.core.first.call(null,seq18581);
var seq18581__$1 = cljs.core.next.call(null,seq18581);
var G__18583 = cljs.core.first.call(null,seq18581__$1);
var seq18581__$2 = cljs.core.next.call(null,seq18581__$1);
var G__18584 = cljs.core.first.call(null,seq18581__$2);
var seq18581__$3 = cljs.core.next.call(null,seq18581__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18582,G__18583,G__18584,seq18581__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18597 = meta18597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18598,meta18597__$1){
var self__ = this;
var _18598__$1 = this;
return (new cljs.core.async.t_cljs$core$async18596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18597__$1));
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18598){
var self__ = this;
var _18598__$1 = this;
return self__.meta18597;
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18597","meta18597",1128322096,null)], null);
}));

(cljs.core.async.t_cljs$core$async18596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18596");

(cljs.core.async.t_cljs$core$async18596.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18596.
 */
cljs.core.async.__GT_t_cljs$core$async18596 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18597){
return (new cljs.core.async.t_cljs$core$async18596(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18597));
});

}

return (new cljs.core.async.t_cljs$core$async18596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17673__auto___18696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18660){
var state_val_18661 = (state_18660[(1)]);
if((state_val_18661 === (7))){
var inst_18656 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18662_18697 = state_18660__$1;
(statearr_18662_18697[(2)] = inst_18656);

(statearr_18662_18697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (20))){
var inst_18650 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18663_18698 = state_18660__$1;
(statearr_18663_18698[(2)] = inst_18650);

(statearr_18663_18698[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (1))){
var inst_18602 = calc_state.call(null);
var inst_18603 = cljs.core.__destructure_map.call(null,inst_18602);
var inst_18604 = cljs.core.get.call(null,inst_18603,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18605 = cljs.core.get.call(null,inst_18603,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18606 = cljs.core.get.call(null,inst_18603,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18607 = inst_18602;
var state_18660__$1 = (function (){var statearr_18664 = state_18660;
(statearr_18664[(7)] = inst_18606);

(statearr_18664[(8)] = inst_18607);

(statearr_18664[(9)] = inst_18605);

(statearr_18664[(10)] = inst_18604);

return statearr_18664;
})();
var statearr_18665_18699 = state_18660__$1;
(statearr_18665_18699[(2)] = null);

(statearr_18665_18699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (4))){
var inst_18620 = (state_18660[(11)]);
var inst_18619 = (state_18660[(12)]);
var inst_18618 = (state_18660[(2)]);
var inst_18619__$1 = cljs.core.nth.call(null,inst_18618,(0),null);
var inst_18620__$1 = cljs.core.nth.call(null,inst_18618,(1),null);
var inst_18621 = (inst_18619__$1 == null);
var inst_18622 = cljs.core._EQ_.call(null,inst_18620__$1,change);
var inst_18623 = ((inst_18621) || (inst_18622));
var state_18660__$1 = (function (){var statearr_18666 = state_18660;
(statearr_18666[(11)] = inst_18620__$1);

(statearr_18666[(12)] = inst_18619__$1);

return statearr_18666;
})();
if(cljs.core.truth_(inst_18623)){
var statearr_18667_18700 = state_18660__$1;
(statearr_18667_18700[(1)] = (5));

} else {
var statearr_18668_18701 = state_18660__$1;
(statearr_18668_18701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (15))){
var inst_18610 = (state_18660[(13)]);
var inst_18607 = inst_18610;
var state_18660__$1 = (function (){var statearr_18669 = state_18660;
(statearr_18669[(8)] = inst_18607);

return statearr_18669;
})();
var statearr_18670_18702 = state_18660__$1;
(statearr_18670_18702[(2)] = null);

(statearr_18670_18702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (13))){
var inst_18642 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18642)){
var statearr_18671_18703 = state_18660__$1;
(statearr_18671_18703[(1)] = (14));

} else {
var statearr_18672_18704 = state_18660__$1;
(statearr_18672_18704[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (6))){
var inst_18611 = (state_18660[(14)]);
var inst_18620 = (state_18660[(11)]);
var inst_18634 = (state_18660[(15)]);
var inst_18634__$1 = inst_18611.call(null,inst_18620);
var state_18660__$1 = (function (){var statearr_18673 = state_18660;
(statearr_18673[(15)] = inst_18634__$1);

return statearr_18673;
})();
if(cljs.core.truth_(inst_18634__$1)){
var statearr_18674_18705 = state_18660__$1;
(statearr_18674_18705[(1)] = (11));

} else {
var statearr_18675_18706 = state_18660__$1;
(statearr_18675_18706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (17))){
var inst_18645 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18645)){
var statearr_18676_18707 = state_18660__$1;
(statearr_18676_18707[(1)] = (18));

} else {
var statearr_18677_18708 = state_18660__$1;
(statearr_18677_18708[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (3))){
var inst_18658 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18660__$1,inst_18658);
} else {
if((state_val_18661 === (12))){
var inst_18612 = (state_18660[(16)]);
var inst_18611 = (state_18660[(14)]);
var inst_18620 = (state_18660[(11)]);
var inst_18637 = cljs.core.empty_QMARK_.call(null,inst_18611);
var inst_18638 = inst_18612.call(null,inst_18620);
var inst_18639 = cljs.core.not.call(null,inst_18638);
var inst_18640 = ((inst_18637) && (inst_18639));
var state_18660__$1 = state_18660;
var statearr_18678_18709 = state_18660__$1;
(statearr_18678_18709[(2)] = inst_18640);

(statearr_18678_18709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (2))){
var inst_18610 = (state_18660[(13)]);
var inst_18607 = (state_18660[(8)]);
var inst_18610__$1 = cljs.core.__destructure_map.call(null,inst_18607);
var inst_18611 = cljs.core.get.call(null,inst_18610__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18612 = cljs.core.get.call(null,inst_18610__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18613 = cljs.core.get.call(null,inst_18610__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18660__$1 = (function (){var statearr_18679 = state_18660;
(statearr_18679[(16)] = inst_18612);

(statearr_18679[(13)] = inst_18610__$1);

(statearr_18679[(14)] = inst_18611);

return statearr_18679;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18660__$1,(4),inst_18613);
} else {
if((state_val_18661 === (19))){
var state_18660__$1 = state_18660;
var statearr_18680_18710 = state_18660__$1;
(statearr_18680_18710[(2)] = null);

(statearr_18680_18710[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (11))){
var inst_18634 = (state_18660[(15)]);
var state_18660__$1 = state_18660;
var statearr_18681_18711 = state_18660__$1;
(statearr_18681_18711[(2)] = inst_18634);

(statearr_18681_18711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (9))){
var state_18660__$1 = state_18660;
var statearr_18682_18712 = state_18660__$1;
(statearr_18682_18712[(2)] = null);

(statearr_18682_18712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (5))){
var inst_18619 = (state_18660[(12)]);
var inst_18625 = (inst_18619 == null);
var state_18660__$1 = state_18660;
if(cljs.core.truth_(inst_18625)){
var statearr_18683_18713 = state_18660__$1;
(statearr_18683_18713[(1)] = (8));

} else {
var statearr_18684_18714 = state_18660__$1;
(statearr_18684_18714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (14))){
var inst_18619 = (state_18660[(12)]);
var state_18660__$1 = state_18660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18660__$1,(17),out,inst_18619);
} else {
if((state_val_18661 === (16))){
var inst_18654 = (state_18660[(2)]);
var state_18660__$1 = state_18660;
var statearr_18685_18715 = state_18660__$1;
(statearr_18685_18715[(2)] = inst_18654);

(statearr_18685_18715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (10))){
var inst_18630 = (state_18660[(2)]);
var inst_18631 = calc_state.call(null);
var inst_18607 = inst_18631;
var state_18660__$1 = (function (){var statearr_18686 = state_18660;
(statearr_18686[(8)] = inst_18607);

(statearr_18686[(17)] = inst_18630);

return statearr_18686;
})();
var statearr_18687_18716 = state_18660__$1;
(statearr_18687_18716[(2)] = null);

(statearr_18687_18716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (18))){
var inst_18610 = (state_18660[(13)]);
var inst_18607 = inst_18610;
var state_18660__$1 = (function (){var statearr_18688 = state_18660;
(statearr_18688[(8)] = inst_18607);

return statearr_18688;
})();
var statearr_18689_18717 = state_18660__$1;
(statearr_18689_18717[(2)] = null);

(statearr_18689_18717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18661 === (8))){
var inst_18620 = (state_18660[(11)]);
var inst_18627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18620);
var state_18660__$1 = state_18660;
var statearr_18690_18718 = state_18660__$1;
(statearr_18690_18718[(2)] = inst_18627);

(statearr_18690_18718[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__17600__auto__ = null;
var cljs$core$async$mix_$_state_machine__17600__auto____0 = (function (){
var statearr_18691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18691[(0)] = cljs$core$async$mix_$_state_machine__17600__auto__);

(statearr_18691[(1)] = (1));

return statearr_18691;
});
var cljs$core$async$mix_$_state_machine__17600__auto____1 = (function (state_18660){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18692){var ex__17603__auto__ = e18692;
var statearr_18693_18719 = state_18660;
(statearr_18693_18719[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18660[(4)]))){
var statearr_18694_18720 = state_18660;
(statearr_18694_18720[(1)] = cljs.core.first.call(null,(state_18660[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18721 = state_18660;
state_18660 = G__18721;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17600__auto__ = function(state_18660){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17600__auto____1.call(this,state_18660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17600__auto____0;
cljs$core$async$mix_$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17600__auto____1;
return cljs$core$async$mix_$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18695 = f__17674__auto__.call(null);
(statearr_18695[(6)] = c__17673__auto___18696);

return statearr_18695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18724 = (function (p,v,ch,close_QMARK_){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4461__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18724.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18725 = (function (p,v,ch){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v,ch);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18725.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18726 = (function() {
var G__18727 = null;
var G__18727__1 = (function (p){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18727__2 = (function (p,v){
var x__4463__auto__ = (((p == null))?null:p);
var m__4464__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4463__auto__)]);
if((!((m__4464__auto__ == null)))){
return m__4464__auto__.call(null,p,v);
} else {
var m__4461__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4461__auto__ == null)))){
return m__4461__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18727 = function(p,v){
switch(arguments.length){
case 1:
return G__18727__1.call(this,p);
case 2:
return G__18727__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18727.cljs$core$IFn$_invoke$arity$1 = G__18727__1;
G__18727.cljs$core$IFn$_invoke$arity$2 = G__18727__2;
return G__18727;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18723 = arguments.length;
switch (G__18723) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18726.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18726.call(null,p,v);
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
var G__18731 = arguments.length;
switch (G__18731) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4160__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18729_SHARP_){
if(cljs.core.truth_(p1__18729_SHARP_.call(null,topic))){
return p1__18729_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18729_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18732 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18733){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18733 = meta18733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18734,meta18733__$1){
var self__ = this;
var _18734__$1 = this;
return (new cljs.core.async.t_cljs$core$async18732(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18733__$1));
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18734){
var self__ = this;
var _18734__$1 = this;
return self__.meta18733;
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18732.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18733","meta18733",1325454491,null)], null);
}));

(cljs.core.async.t_cljs$core$async18732.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18732");

(cljs.core.async.t_cljs$core$async18732.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async18732");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18732.
 */
cljs.core.async.__GT_t_cljs$core$async18732 = (function cljs$core$async$__GT_t_cljs$core$async18732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18733){
return (new cljs.core.async.t_cljs$core$async18732(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18733));
});

}

return (new cljs.core.async.t_cljs$core$async18732(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17673__auto___18853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18806){
var state_val_18807 = (state_18806[(1)]);
if((state_val_18807 === (7))){
var inst_18802 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18808_18854 = state_18806__$1;
(statearr_18808_18854[(2)] = inst_18802);

(statearr_18808_18854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (20))){
var state_18806__$1 = state_18806;
var statearr_18809_18855 = state_18806__$1;
(statearr_18809_18855[(2)] = null);

(statearr_18809_18855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (1))){
var state_18806__$1 = state_18806;
var statearr_18810_18856 = state_18806__$1;
(statearr_18810_18856[(2)] = null);

(statearr_18810_18856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (24))){
var inst_18785 = (state_18806[(7)]);
var inst_18794 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18785);
var state_18806__$1 = state_18806;
var statearr_18811_18857 = state_18806__$1;
(statearr_18811_18857[(2)] = inst_18794);

(statearr_18811_18857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (4))){
var inst_18737 = (state_18806[(8)]);
var inst_18737__$1 = (state_18806[(2)]);
var inst_18738 = (inst_18737__$1 == null);
var state_18806__$1 = (function (){var statearr_18812 = state_18806;
(statearr_18812[(8)] = inst_18737__$1);

return statearr_18812;
})();
if(cljs.core.truth_(inst_18738)){
var statearr_18813_18858 = state_18806__$1;
(statearr_18813_18858[(1)] = (5));

} else {
var statearr_18814_18859 = state_18806__$1;
(statearr_18814_18859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (15))){
var inst_18779 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18815_18860 = state_18806__$1;
(statearr_18815_18860[(2)] = inst_18779);

(statearr_18815_18860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (21))){
var inst_18799 = (state_18806[(2)]);
var state_18806__$1 = (function (){var statearr_18816 = state_18806;
(statearr_18816[(9)] = inst_18799);

return statearr_18816;
})();
var statearr_18817_18861 = state_18806__$1;
(statearr_18817_18861[(2)] = null);

(statearr_18817_18861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (13))){
var inst_18761 = (state_18806[(10)]);
var inst_18763 = cljs.core.chunked_seq_QMARK_.call(null,inst_18761);
var state_18806__$1 = state_18806;
if(inst_18763){
var statearr_18818_18862 = state_18806__$1;
(statearr_18818_18862[(1)] = (16));

} else {
var statearr_18819_18863 = state_18806__$1;
(statearr_18819_18863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (22))){
var inst_18791 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
if(cljs.core.truth_(inst_18791)){
var statearr_18820_18864 = state_18806__$1;
(statearr_18820_18864[(1)] = (23));

} else {
var statearr_18821_18865 = state_18806__$1;
(statearr_18821_18865[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (6))){
var inst_18787 = (state_18806[(11)]);
var inst_18785 = (state_18806[(7)]);
var inst_18737 = (state_18806[(8)]);
var inst_18785__$1 = topic_fn.call(null,inst_18737);
var inst_18786 = cljs.core.deref.call(null,mults);
var inst_18787__$1 = cljs.core.get.call(null,inst_18786,inst_18785__$1);
var state_18806__$1 = (function (){var statearr_18822 = state_18806;
(statearr_18822[(11)] = inst_18787__$1);

(statearr_18822[(7)] = inst_18785__$1);

return statearr_18822;
})();
if(cljs.core.truth_(inst_18787__$1)){
var statearr_18823_18866 = state_18806__$1;
(statearr_18823_18866[(1)] = (19));

} else {
var statearr_18824_18867 = state_18806__$1;
(statearr_18824_18867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (25))){
var inst_18796 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18825_18868 = state_18806__$1;
(statearr_18825_18868[(2)] = inst_18796);

(statearr_18825_18868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (17))){
var inst_18761 = (state_18806[(10)]);
var inst_18770 = cljs.core.first.call(null,inst_18761);
var inst_18771 = cljs.core.async.muxch_STAR_.call(null,inst_18770);
var inst_18772 = cljs.core.async.close_BANG_.call(null,inst_18771);
var inst_18773 = cljs.core.next.call(null,inst_18761);
var inst_18747 = inst_18773;
var inst_18748 = null;
var inst_18749 = (0);
var inst_18750 = (0);
var state_18806__$1 = (function (){var statearr_18826 = state_18806;
(statearr_18826[(12)] = inst_18747);

(statearr_18826[(13)] = inst_18749);

(statearr_18826[(14)] = inst_18750);

(statearr_18826[(15)] = inst_18772);

(statearr_18826[(16)] = inst_18748);

return statearr_18826;
})();
var statearr_18827_18869 = state_18806__$1;
(statearr_18827_18869[(2)] = null);

(statearr_18827_18869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (3))){
var inst_18804 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18806__$1,inst_18804);
} else {
if((state_val_18807 === (12))){
var inst_18781 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18828_18870 = state_18806__$1;
(statearr_18828_18870[(2)] = inst_18781);

(statearr_18828_18870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (2))){
var state_18806__$1 = state_18806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18806__$1,(4),ch);
} else {
if((state_val_18807 === (23))){
var state_18806__$1 = state_18806;
var statearr_18829_18871 = state_18806__$1;
(statearr_18829_18871[(2)] = null);

(statearr_18829_18871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (19))){
var inst_18787 = (state_18806[(11)]);
var inst_18737 = (state_18806[(8)]);
var inst_18789 = cljs.core.async.muxch_STAR_.call(null,inst_18787);
var state_18806__$1 = state_18806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18806__$1,(22),inst_18789,inst_18737);
} else {
if((state_val_18807 === (11))){
var inst_18761 = (state_18806[(10)]);
var inst_18747 = (state_18806[(12)]);
var inst_18761__$1 = cljs.core.seq.call(null,inst_18747);
var state_18806__$1 = (function (){var statearr_18830 = state_18806;
(statearr_18830[(10)] = inst_18761__$1);

return statearr_18830;
})();
if(inst_18761__$1){
var statearr_18831_18872 = state_18806__$1;
(statearr_18831_18872[(1)] = (13));

} else {
var statearr_18832_18873 = state_18806__$1;
(statearr_18832_18873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (9))){
var inst_18783 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18833_18874 = state_18806__$1;
(statearr_18833_18874[(2)] = inst_18783);

(statearr_18833_18874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (5))){
var inst_18744 = cljs.core.deref.call(null,mults);
var inst_18745 = cljs.core.vals.call(null,inst_18744);
var inst_18746 = cljs.core.seq.call(null,inst_18745);
var inst_18747 = inst_18746;
var inst_18748 = null;
var inst_18749 = (0);
var inst_18750 = (0);
var state_18806__$1 = (function (){var statearr_18834 = state_18806;
(statearr_18834[(12)] = inst_18747);

(statearr_18834[(13)] = inst_18749);

(statearr_18834[(14)] = inst_18750);

(statearr_18834[(16)] = inst_18748);

return statearr_18834;
})();
var statearr_18835_18875 = state_18806__$1;
(statearr_18835_18875[(2)] = null);

(statearr_18835_18875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (14))){
var state_18806__$1 = state_18806;
var statearr_18839_18876 = state_18806__$1;
(statearr_18839_18876[(2)] = null);

(statearr_18839_18876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (16))){
var inst_18761 = (state_18806[(10)]);
var inst_18765 = cljs.core.chunk_first.call(null,inst_18761);
var inst_18766 = cljs.core.chunk_rest.call(null,inst_18761);
var inst_18767 = cljs.core.count.call(null,inst_18765);
var inst_18747 = inst_18766;
var inst_18748 = inst_18765;
var inst_18749 = inst_18767;
var inst_18750 = (0);
var state_18806__$1 = (function (){var statearr_18840 = state_18806;
(statearr_18840[(12)] = inst_18747);

(statearr_18840[(13)] = inst_18749);

(statearr_18840[(14)] = inst_18750);

(statearr_18840[(16)] = inst_18748);

return statearr_18840;
})();
var statearr_18841_18877 = state_18806__$1;
(statearr_18841_18877[(2)] = null);

(statearr_18841_18877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (10))){
var inst_18747 = (state_18806[(12)]);
var inst_18749 = (state_18806[(13)]);
var inst_18750 = (state_18806[(14)]);
var inst_18748 = (state_18806[(16)]);
var inst_18755 = cljs.core._nth.call(null,inst_18748,inst_18750);
var inst_18756 = cljs.core.async.muxch_STAR_.call(null,inst_18755);
var inst_18757 = cljs.core.async.close_BANG_.call(null,inst_18756);
var inst_18758 = (inst_18750 + (1));
var tmp18836 = inst_18747;
var tmp18837 = inst_18749;
var tmp18838 = inst_18748;
var inst_18747__$1 = tmp18836;
var inst_18748__$1 = tmp18838;
var inst_18749__$1 = tmp18837;
var inst_18750__$1 = inst_18758;
var state_18806__$1 = (function (){var statearr_18842 = state_18806;
(statearr_18842[(12)] = inst_18747__$1);

(statearr_18842[(13)] = inst_18749__$1);

(statearr_18842[(14)] = inst_18750__$1);

(statearr_18842[(16)] = inst_18748__$1);

(statearr_18842[(17)] = inst_18757);

return statearr_18842;
})();
var statearr_18843_18878 = state_18806__$1;
(statearr_18843_18878[(2)] = null);

(statearr_18843_18878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (18))){
var inst_18776 = (state_18806[(2)]);
var state_18806__$1 = state_18806;
var statearr_18844_18879 = state_18806__$1;
(statearr_18844_18879[(2)] = inst_18776);

(statearr_18844_18879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18807 === (8))){
var inst_18749 = (state_18806[(13)]);
var inst_18750 = (state_18806[(14)]);
var inst_18752 = (inst_18750 < inst_18749);
var inst_18753 = inst_18752;
var state_18806__$1 = state_18806;
if(cljs.core.truth_(inst_18753)){
var statearr_18845_18880 = state_18806__$1;
(statearr_18845_18880[(1)] = (10));

} else {
var statearr_18846_18881 = state_18806__$1;
(statearr_18846_18881[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_18847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18847[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_18847[(1)] = (1));

return statearr_18847;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_18806){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18848){var ex__17603__auto__ = e18848;
var statearr_18849_18882 = state_18806;
(statearr_18849_18882[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18806[(4)]))){
var statearr_18850_18883 = state_18806;
(statearr_18850_18883[(1)] = cljs.core.first.call(null,(state_18806[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18884 = state_18806;
state_18806 = G__18884;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_18806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_18806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18851 = f__17674__auto__.call(null);
(statearr_18851[(6)] = c__17673__auto___18853);

return statearr_18851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
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
var G__18886 = arguments.length;
switch (G__18886) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18889 = arguments.length;
switch (G__18889) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__18892 = arguments.length;
switch (G__18892) {
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
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__17673__auto___18970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_18935){
var state_val_18936 = (state_18935[(1)]);
if((state_val_18936 === (7))){
var state_18935__$1 = state_18935;
var statearr_18937_18971 = state_18935__$1;
(statearr_18937_18971[(2)] = null);

(statearr_18937_18971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (1))){
var state_18935__$1 = state_18935;
var statearr_18938_18972 = state_18935__$1;
(statearr_18938_18972[(2)] = null);

(statearr_18938_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (4))){
var inst_18896 = (state_18935[(7)]);
var inst_18895 = (state_18935[(8)]);
var inst_18898 = (inst_18896 < inst_18895);
var state_18935__$1 = state_18935;
if(cljs.core.truth_(inst_18898)){
var statearr_18939_18973 = state_18935__$1;
(statearr_18939_18973[(1)] = (6));

} else {
var statearr_18940_18974 = state_18935__$1;
(statearr_18940_18974[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (15))){
var inst_18921 = (state_18935[(9)]);
var inst_18926 = cljs.core.apply.call(null,f,inst_18921);
var state_18935__$1 = state_18935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18935__$1,(17),out,inst_18926);
} else {
if((state_val_18936 === (13))){
var inst_18921 = (state_18935[(9)]);
var inst_18921__$1 = (state_18935[(2)]);
var inst_18922 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18921__$1);
var state_18935__$1 = (function (){var statearr_18941 = state_18935;
(statearr_18941[(9)] = inst_18921__$1);

return statearr_18941;
})();
if(cljs.core.truth_(inst_18922)){
var statearr_18942_18975 = state_18935__$1;
(statearr_18942_18975[(1)] = (14));

} else {
var statearr_18943_18976 = state_18935__$1;
(statearr_18943_18976[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (6))){
var state_18935__$1 = state_18935;
var statearr_18944_18977 = state_18935__$1;
(statearr_18944_18977[(2)] = null);

(statearr_18944_18977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (17))){
var inst_18928 = (state_18935[(2)]);
var state_18935__$1 = (function (){var statearr_18946 = state_18935;
(statearr_18946[(10)] = inst_18928);

return statearr_18946;
})();
var statearr_18947_18978 = state_18935__$1;
(statearr_18947_18978[(2)] = null);

(statearr_18947_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (3))){
var inst_18933 = (state_18935[(2)]);
var state_18935__$1 = state_18935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18935__$1,inst_18933);
} else {
if((state_val_18936 === (12))){
var _ = (function (){var statearr_18948 = state_18935;
(statearr_18948[(4)] = cljs.core.rest.call(null,(state_18935[(4)])));

return statearr_18948;
})();
var state_18935__$1 = state_18935;
var ex18945 = (state_18935__$1[(2)]);
var statearr_18949_18979 = state_18935__$1;
(statearr_18949_18979[(5)] = ex18945);


if((ex18945 instanceof Object)){
var statearr_18950_18980 = state_18935__$1;
(statearr_18950_18980[(1)] = (11));

(statearr_18950_18980[(5)] = null);

} else {
throw ex18945;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (2))){
var inst_18894 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18895 = cnt;
var inst_18896 = (0);
var state_18935__$1 = (function (){var statearr_18951 = state_18935;
(statearr_18951[(7)] = inst_18896);

(statearr_18951[(11)] = inst_18894);

(statearr_18951[(8)] = inst_18895);

return statearr_18951;
})();
var statearr_18952_18981 = state_18935__$1;
(statearr_18952_18981[(2)] = null);

(statearr_18952_18981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (11))){
var inst_18900 = (state_18935[(2)]);
var inst_18901 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18935__$1 = (function (){var statearr_18953 = state_18935;
(statearr_18953[(12)] = inst_18900);

return statearr_18953;
})();
var statearr_18954_18982 = state_18935__$1;
(statearr_18954_18982[(2)] = inst_18901);

(statearr_18954_18982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (9))){
var inst_18896 = (state_18935[(7)]);
var _ = (function (){var statearr_18955 = state_18935;
(statearr_18955[(4)] = cljs.core.cons.call(null,(12),(state_18935[(4)])));

return statearr_18955;
})();
var inst_18907 = chs__$1.call(null,inst_18896);
var inst_18908 = done.call(null,inst_18896);
var inst_18909 = cljs.core.async.take_BANG_.call(null,inst_18907,inst_18908);
var ___$1 = (function (){var statearr_18956 = state_18935;
(statearr_18956[(4)] = cljs.core.rest.call(null,(state_18935[(4)])));

return statearr_18956;
})();
var state_18935__$1 = state_18935;
var statearr_18957_18983 = state_18935__$1;
(statearr_18957_18983[(2)] = inst_18909);

(statearr_18957_18983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (5))){
var inst_18919 = (state_18935[(2)]);
var state_18935__$1 = (function (){var statearr_18958 = state_18935;
(statearr_18958[(13)] = inst_18919);

return statearr_18958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18935__$1,(13),dchan);
} else {
if((state_val_18936 === (14))){
var inst_18924 = cljs.core.async.close_BANG_.call(null,out);
var state_18935__$1 = state_18935;
var statearr_18959_18984 = state_18935__$1;
(statearr_18959_18984[(2)] = inst_18924);

(statearr_18959_18984[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (16))){
var inst_18931 = (state_18935[(2)]);
var state_18935__$1 = state_18935;
var statearr_18960_18985 = state_18935__$1;
(statearr_18960_18985[(2)] = inst_18931);

(statearr_18960_18985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (10))){
var inst_18896 = (state_18935[(7)]);
var inst_18912 = (state_18935[(2)]);
var inst_18913 = (inst_18896 + (1));
var inst_18896__$1 = inst_18913;
var state_18935__$1 = (function (){var statearr_18961 = state_18935;
(statearr_18961[(7)] = inst_18896__$1);

(statearr_18961[(14)] = inst_18912);

return statearr_18961;
})();
var statearr_18962_18986 = state_18935__$1;
(statearr_18962_18986[(2)] = null);

(statearr_18962_18986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18936 === (8))){
var inst_18917 = (state_18935[(2)]);
var state_18935__$1 = state_18935;
var statearr_18963_18987 = state_18935__$1;
(statearr_18963_18987[(2)] = inst_18917);

(statearr_18963_18987[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_18964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18964[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_18964[(1)] = (1));

return statearr_18964;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_18935){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_18935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e18965){var ex__17603__auto__ = e18965;
var statearr_18966_18988 = state_18935;
(statearr_18966_18988[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_18935[(4)]))){
var statearr_18967_18989 = state_18935;
(statearr_18967_18989[(1)] = cljs.core.first.call(null,(state_18935[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18990 = state_18935;
state_18935 = G__18990;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_18935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_18935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_18968 = f__17674__auto__.call(null);
(statearr_18968[(6)] = c__17673__auto___18970);

return statearr_18968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
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
var G__18993 = arguments.length;
switch (G__18993) {
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
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19025){
var state_val_19026 = (state_19025[(1)]);
if((state_val_19026 === (7))){
var inst_19005 = (state_19025[(7)]);
var inst_19004 = (state_19025[(8)]);
var inst_19004__$1 = (state_19025[(2)]);
var inst_19005__$1 = cljs.core.nth.call(null,inst_19004__$1,(0),null);
var inst_19006 = cljs.core.nth.call(null,inst_19004__$1,(1),null);
var inst_19007 = (inst_19005__$1 == null);
var state_19025__$1 = (function (){var statearr_19027 = state_19025;
(statearr_19027[(7)] = inst_19005__$1);

(statearr_19027[(8)] = inst_19004__$1);

(statearr_19027[(9)] = inst_19006);

return statearr_19027;
})();
if(cljs.core.truth_(inst_19007)){
var statearr_19028_19049 = state_19025__$1;
(statearr_19028_19049[(1)] = (8));

} else {
var statearr_19029_19050 = state_19025__$1;
(statearr_19029_19050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (1))){
var inst_18994 = cljs.core.vec.call(null,chs);
var inst_18995 = inst_18994;
var state_19025__$1 = (function (){var statearr_19030 = state_19025;
(statearr_19030[(10)] = inst_18995);

return statearr_19030;
})();
var statearr_19031_19051 = state_19025__$1;
(statearr_19031_19051[(2)] = null);

(statearr_19031_19051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (4))){
var inst_18995 = (state_19025[(10)]);
var state_19025__$1 = state_19025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19025__$1,(7),inst_18995);
} else {
if((state_val_19026 === (6))){
var inst_19021 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19032_19052 = state_19025__$1;
(statearr_19032_19052[(2)] = inst_19021);

(statearr_19032_19052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (3))){
var inst_19023 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19025__$1,inst_19023);
} else {
if((state_val_19026 === (2))){
var inst_18995 = (state_19025[(10)]);
var inst_18997 = cljs.core.count.call(null,inst_18995);
var inst_18998 = (inst_18997 > (0));
var state_19025__$1 = state_19025;
if(cljs.core.truth_(inst_18998)){
var statearr_19034_19053 = state_19025__$1;
(statearr_19034_19053[(1)] = (4));

} else {
var statearr_19035_19054 = state_19025__$1;
(statearr_19035_19054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (11))){
var inst_18995 = (state_19025[(10)]);
var inst_19014 = (state_19025[(2)]);
var tmp19033 = inst_18995;
var inst_18995__$1 = tmp19033;
var state_19025__$1 = (function (){var statearr_19036 = state_19025;
(statearr_19036[(10)] = inst_18995__$1);

(statearr_19036[(11)] = inst_19014);

return statearr_19036;
})();
var statearr_19037_19055 = state_19025__$1;
(statearr_19037_19055[(2)] = null);

(statearr_19037_19055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (9))){
var inst_19005 = (state_19025[(7)]);
var state_19025__$1 = state_19025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19025__$1,(11),out,inst_19005);
} else {
if((state_val_19026 === (5))){
var inst_19019 = cljs.core.async.close_BANG_.call(null,out);
var state_19025__$1 = state_19025;
var statearr_19038_19056 = state_19025__$1;
(statearr_19038_19056[(2)] = inst_19019);

(statearr_19038_19056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (10))){
var inst_19017 = (state_19025[(2)]);
var state_19025__$1 = state_19025;
var statearr_19039_19057 = state_19025__$1;
(statearr_19039_19057[(2)] = inst_19017);

(statearr_19039_19057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19026 === (8))){
var inst_19005 = (state_19025[(7)]);
var inst_18995 = (state_19025[(10)]);
var inst_19004 = (state_19025[(8)]);
var inst_19006 = (state_19025[(9)]);
var inst_19009 = (function (){var cs = inst_18995;
var vec__19000 = inst_19004;
var v = inst_19005;
var c = inst_19006;
return (function (p1__18991_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18991_SHARP_);
});
})();
var inst_19010 = cljs.core.filterv.call(null,inst_19009,inst_18995);
var inst_18995__$1 = inst_19010;
var state_19025__$1 = (function (){var statearr_19040 = state_19025;
(statearr_19040[(10)] = inst_18995__$1);

return statearr_19040;
})();
var statearr_19041_19058 = state_19025__$1;
(statearr_19041_19058[(2)] = null);

(statearr_19041_19058[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19042[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19042[(1)] = (1));

return statearr_19042;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19025){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19043){var ex__17603__auto__ = e19043;
var statearr_19044_19059 = state_19025;
(statearr_19044_19059[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19025[(4)]))){
var statearr_19045_19060 = state_19025;
(statearr_19045_19060[(1)] = cljs.core.first.call(null,(state_19025[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19061 = state_19025;
state_19025 = G__19061;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19046 = f__17674__auto__.call(null);
(statearr_19046[(6)] = c__17673__auto___19048);

return statearr_19046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19063 = arguments.length;
switch (G__19063) {
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
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19087){
var state_val_19088 = (state_19087[(1)]);
if((state_val_19088 === (7))){
var inst_19069 = (state_19087[(7)]);
var inst_19069__$1 = (state_19087[(2)]);
var inst_19070 = (inst_19069__$1 == null);
var inst_19071 = cljs.core.not.call(null,inst_19070);
var state_19087__$1 = (function (){var statearr_19089 = state_19087;
(statearr_19089[(7)] = inst_19069__$1);

return statearr_19089;
})();
if(inst_19071){
var statearr_19090_19110 = state_19087__$1;
(statearr_19090_19110[(1)] = (8));

} else {
var statearr_19091_19111 = state_19087__$1;
(statearr_19091_19111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (1))){
var inst_19064 = (0);
var state_19087__$1 = (function (){var statearr_19092 = state_19087;
(statearr_19092[(8)] = inst_19064);

return statearr_19092;
})();
var statearr_19093_19112 = state_19087__$1;
(statearr_19093_19112[(2)] = null);

(statearr_19093_19112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (4))){
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19087__$1,(7),ch);
} else {
if((state_val_19088 === (6))){
var inst_19082 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
var statearr_19094_19113 = state_19087__$1;
(statearr_19094_19113[(2)] = inst_19082);

(statearr_19094_19113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (3))){
var inst_19084 = (state_19087[(2)]);
var inst_19085 = cljs.core.async.close_BANG_.call(null,out);
var state_19087__$1 = (function (){var statearr_19095 = state_19087;
(statearr_19095[(9)] = inst_19084);

return statearr_19095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19087__$1,inst_19085);
} else {
if((state_val_19088 === (2))){
var inst_19064 = (state_19087[(8)]);
var inst_19066 = (inst_19064 < n);
var state_19087__$1 = state_19087;
if(cljs.core.truth_(inst_19066)){
var statearr_19096_19114 = state_19087__$1;
(statearr_19096_19114[(1)] = (4));

} else {
var statearr_19097_19115 = state_19087__$1;
(statearr_19097_19115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (11))){
var inst_19064 = (state_19087[(8)]);
var inst_19074 = (state_19087[(2)]);
var inst_19075 = (inst_19064 + (1));
var inst_19064__$1 = inst_19075;
var state_19087__$1 = (function (){var statearr_19098 = state_19087;
(statearr_19098[(10)] = inst_19074);

(statearr_19098[(8)] = inst_19064__$1);

return statearr_19098;
})();
var statearr_19099_19116 = state_19087__$1;
(statearr_19099_19116[(2)] = null);

(statearr_19099_19116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (9))){
var state_19087__$1 = state_19087;
var statearr_19100_19117 = state_19087__$1;
(statearr_19100_19117[(2)] = null);

(statearr_19100_19117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (5))){
var state_19087__$1 = state_19087;
var statearr_19101_19118 = state_19087__$1;
(statearr_19101_19118[(2)] = null);

(statearr_19101_19118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (10))){
var inst_19079 = (state_19087[(2)]);
var state_19087__$1 = state_19087;
var statearr_19102_19119 = state_19087__$1;
(statearr_19102_19119[(2)] = inst_19079);

(statearr_19102_19119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19088 === (8))){
var inst_19069 = (state_19087[(7)]);
var state_19087__$1 = state_19087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19087__$1,(11),out,inst_19069);
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
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19103[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19103[(1)] = (1));

return statearr_19103;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19087){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19104){var ex__17603__auto__ = e19104;
var statearr_19105_19120 = state_19087;
(statearr_19105_19120[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19087[(4)]))){
var statearr_19106_19121 = state_19087;
(statearr_19106_19121[(1)] = cljs.core.first.call(null,(state_19087[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19122 = state_19087;
state_19087 = G__19122;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19107 = f__17674__auto__.call(null);
(statearr_19107[(6)] = c__17673__auto___19109);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19124 = (function (f,ch,meta19125){
this.f = f;
this.ch = ch;
this.meta19125 = meta19125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19126,meta19125__$1){
var self__ = this;
var _19126__$1 = this;
return (new cljs.core.async.t_cljs$core$async19124(self__.f,self__.ch,meta19125__$1));
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19126){
var self__ = this;
var _19126__$1 = this;
return self__.meta19125;
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19127 = (function (f,ch,meta19125,_,fn1,meta19128){
this.f = f;
this.ch = ch;
this.meta19125 = meta19125;
this._ = _;
this.fn1 = fn1;
this.meta19128 = meta19128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19129,meta19128__$1){
var self__ = this;
var _19129__$1 = this;
return (new cljs.core.async.t_cljs$core$async19127(self__.f,self__.ch,self__.meta19125,self__._,self__.fn1,meta19128__$1));
}));

(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19129){
var self__ = this;
var _19129__$1 = this;
return self__.meta19128;
}));

(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19123_SHARP_){
return f1.call(null,(((p1__19123_SHARP_ == null))?null:self__.f.call(null,p1__19123_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19125","meta19125",-1033328982,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19124","cljs.core.async/t_cljs$core$async19124",-1109329602,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19128","meta19128",191497661,null)], null);
}));

(cljs.core.async.t_cljs$core$async19127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19127");

(cljs.core.async.t_cljs$core$async19127.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19127.
 */
cljs.core.async.__GT_t_cljs$core$async19127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19127(f__$1,ch__$1,meta19125__$1,___$2,fn1__$1,meta19128){
return (new cljs.core.async.t_cljs$core$async19127(f__$1,ch__$1,meta19125__$1,___$2,fn1__$1,meta19128));
});

}

return (new cljs.core.async.t_cljs$core$async19127(self__.f,self__.ch,self__.meta19125,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4149__auto__ = ret;
if(cljs.core.truth_(and__4149__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19125","meta19125",-1033328982,null)], null);
}));

(cljs.core.async.t_cljs$core$async19124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19124");

(cljs.core.async.t_cljs$core$async19124.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19124.
 */
cljs.core.async.__GT_t_cljs$core$async19124 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19124(f__$1,ch__$1,meta19125){
return (new cljs.core.async.t_cljs$core$async19124(f__$1,ch__$1,meta19125));
});

}

return (new cljs.core.async.t_cljs$core$async19124(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19130 = (function (f,ch,meta19131){
this.f = f;
this.ch = ch;
this.meta19131 = meta19131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19132,meta19131__$1){
var self__ = this;
var _19132__$1 = this;
return (new cljs.core.async.t_cljs$core$async19130(self__.f,self__.ch,meta19131__$1));
}));

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19132){
var self__ = this;
var _19132__$1 = this;
return self__.meta19131;
}));

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19131","meta19131",-1088108192,null)], null);
}));

(cljs.core.async.t_cljs$core$async19130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19130");

(cljs.core.async.t_cljs$core$async19130.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19130.
 */
cljs.core.async.__GT_t_cljs$core$async19130 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19130(f__$1,ch__$1,meta19131){
return (new cljs.core.async.t_cljs$core$async19130(f__$1,ch__$1,meta19131));
});

}

return (new cljs.core.async.t_cljs$core$async19130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19133 = (function (p,ch,meta19134){
this.p = p;
this.ch = ch;
this.meta19134 = meta19134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19135,meta19134__$1){
var self__ = this;
var _19135__$1 = this;
return (new cljs.core.async.t_cljs$core$async19133(self__.p,self__.ch,meta19134__$1));
}));

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19135){
var self__ = this;
var _19135__$1 = this;
return self__.meta19134;
}));

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19133.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19134","meta19134",-1653356350,null)], null);
}));

(cljs.core.async.t_cljs$core$async19133.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19133");

(cljs.core.async.t_cljs$core$async19133.cljs$lang$ctorPrWriter = (function (this__4404__auto__,writer__4405__auto__,opt__4406__auto__){
return cljs.core._write.call(null,writer__4405__auto__,"cljs.core.async/t_cljs$core$async19133");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19133.
 */
cljs.core.async.__GT_t_cljs$core$async19133 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19133(p__$1,ch__$1,meta19134){
return (new cljs.core.async.t_cljs$core$async19133(p__$1,ch__$1,meta19134));
});

}

return (new cljs.core.async.t_cljs$core$async19133(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19137 = arguments.length;
switch (G__19137) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19158){
var state_val_19159 = (state_19158[(1)]);
if((state_val_19159 === (7))){
var inst_19154 = (state_19158[(2)]);
var state_19158__$1 = state_19158;
var statearr_19160_19179 = state_19158__$1;
(statearr_19160_19179[(2)] = inst_19154);

(statearr_19160_19179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (1))){
var state_19158__$1 = state_19158;
var statearr_19161_19180 = state_19158__$1;
(statearr_19161_19180[(2)] = null);

(statearr_19161_19180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (4))){
var inst_19140 = (state_19158[(7)]);
var inst_19140__$1 = (state_19158[(2)]);
var inst_19141 = (inst_19140__$1 == null);
var state_19158__$1 = (function (){var statearr_19162 = state_19158;
(statearr_19162[(7)] = inst_19140__$1);

return statearr_19162;
})();
if(cljs.core.truth_(inst_19141)){
var statearr_19163_19181 = state_19158__$1;
(statearr_19163_19181[(1)] = (5));

} else {
var statearr_19164_19182 = state_19158__$1;
(statearr_19164_19182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (6))){
var inst_19140 = (state_19158[(7)]);
var inst_19145 = p.call(null,inst_19140);
var state_19158__$1 = state_19158;
if(cljs.core.truth_(inst_19145)){
var statearr_19165_19183 = state_19158__$1;
(statearr_19165_19183[(1)] = (8));

} else {
var statearr_19166_19184 = state_19158__$1;
(statearr_19166_19184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (3))){
var inst_19156 = (state_19158[(2)]);
var state_19158__$1 = state_19158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19158__$1,inst_19156);
} else {
if((state_val_19159 === (2))){
var state_19158__$1 = state_19158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19158__$1,(4),ch);
} else {
if((state_val_19159 === (11))){
var inst_19148 = (state_19158[(2)]);
var state_19158__$1 = state_19158;
var statearr_19167_19185 = state_19158__$1;
(statearr_19167_19185[(2)] = inst_19148);

(statearr_19167_19185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (9))){
var state_19158__$1 = state_19158;
var statearr_19168_19186 = state_19158__$1;
(statearr_19168_19186[(2)] = null);

(statearr_19168_19186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (5))){
var inst_19143 = cljs.core.async.close_BANG_.call(null,out);
var state_19158__$1 = state_19158;
var statearr_19169_19187 = state_19158__$1;
(statearr_19169_19187[(2)] = inst_19143);

(statearr_19169_19187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (10))){
var inst_19151 = (state_19158[(2)]);
var state_19158__$1 = (function (){var statearr_19170 = state_19158;
(statearr_19170[(8)] = inst_19151);

return statearr_19170;
})();
var statearr_19171_19188 = state_19158__$1;
(statearr_19171_19188[(2)] = null);

(statearr_19171_19188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19159 === (8))){
var inst_19140 = (state_19158[(7)]);
var state_19158__$1 = state_19158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19158__$1,(11),out,inst_19140);
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
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19172 = [null,null,null,null,null,null,null,null,null];
(statearr_19172[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19172[(1)] = (1));

return statearr_19172;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19158){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19173){var ex__17603__auto__ = e19173;
var statearr_19174_19189 = state_19158;
(statearr_19174_19189[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19158[(4)]))){
var statearr_19175_19190 = state_19158;
(statearr_19175_19190[(1)] = cljs.core.first.call(null,(state_19158[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19191 = state_19158;
state_19158 = G__19191;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19176 = f__17674__auto__.call(null);
(statearr_19176[(6)] = c__17673__auto___19178);

return statearr_19176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19193 = arguments.length;
switch (G__19193) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19256){
var state_val_19257 = (state_19256[(1)]);
if((state_val_19257 === (7))){
var inst_19252 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
var statearr_19258_19297 = state_19256__$1;
(statearr_19258_19297[(2)] = inst_19252);

(statearr_19258_19297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (20))){
var inst_19222 = (state_19256[(7)]);
var inst_19233 = (state_19256[(2)]);
var inst_19234 = cljs.core.next.call(null,inst_19222);
var inst_19208 = inst_19234;
var inst_19209 = null;
var inst_19210 = (0);
var inst_19211 = (0);
var state_19256__$1 = (function (){var statearr_19259 = state_19256;
(statearr_19259[(8)] = inst_19211);

(statearr_19259[(9)] = inst_19210);

(statearr_19259[(10)] = inst_19233);

(statearr_19259[(11)] = inst_19209);

(statearr_19259[(12)] = inst_19208);

return statearr_19259;
})();
var statearr_19260_19298 = state_19256__$1;
(statearr_19260_19298[(2)] = null);

(statearr_19260_19298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (1))){
var state_19256__$1 = state_19256;
var statearr_19261_19299 = state_19256__$1;
(statearr_19261_19299[(2)] = null);

(statearr_19261_19299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (4))){
var inst_19197 = (state_19256[(13)]);
var inst_19197__$1 = (state_19256[(2)]);
var inst_19198 = (inst_19197__$1 == null);
var state_19256__$1 = (function (){var statearr_19262 = state_19256;
(statearr_19262[(13)] = inst_19197__$1);

return statearr_19262;
})();
if(cljs.core.truth_(inst_19198)){
var statearr_19263_19300 = state_19256__$1;
(statearr_19263_19300[(1)] = (5));

} else {
var statearr_19264_19301 = state_19256__$1;
(statearr_19264_19301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (15))){
var state_19256__$1 = state_19256;
var statearr_19268_19302 = state_19256__$1;
(statearr_19268_19302[(2)] = null);

(statearr_19268_19302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (21))){
var state_19256__$1 = state_19256;
var statearr_19269_19303 = state_19256__$1;
(statearr_19269_19303[(2)] = null);

(statearr_19269_19303[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (13))){
var inst_19211 = (state_19256[(8)]);
var inst_19210 = (state_19256[(9)]);
var inst_19209 = (state_19256[(11)]);
var inst_19208 = (state_19256[(12)]);
var inst_19218 = (state_19256[(2)]);
var inst_19219 = (inst_19211 + (1));
var tmp19265 = inst_19210;
var tmp19266 = inst_19209;
var tmp19267 = inst_19208;
var inst_19208__$1 = tmp19267;
var inst_19209__$1 = tmp19266;
var inst_19210__$1 = tmp19265;
var inst_19211__$1 = inst_19219;
var state_19256__$1 = (function (){var statearr_19270 = state_19256;
(statearr_19270[(8)] = inst_19211__$1);

(statearr_19270[(14)] = inst_19218);

(statearr_19270[(9)] = inst_19210__$1);

(statearr_19270[(11)] = inst_19209__$1);

(statearr_19270[(12)] = inst_19208__$1);

return statearr_19270;
})();
var statearr_19271_19304 = state_19256__$1;
(statearr_19271_19304[(2)] = null);

(statearr_19271_19304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (22))){
var state_19256__$1 = state_19256;
var statearr_19272_19305 = state_19256__$1;
(statearr_19272_19305[(2)] = null);

(statearr_19272_19305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (6))){
var inst_19197 = (state_19256[(13)]);
var inst_19206 = f.call(null,inst_19197);
var inst_19207 = cljs.core.seq.call(null,inst_19206);
var inst_19208 = inst_19207;
var inst_19209 = null;
var inst_19210 = (0);
var inst_19211 = (0);
var state_19256__$1 = (function (){var statearr_19273 = state_19256;
(statearr_19273[(8)] = inst_19211);

(statearr_19273[(9)] = inst_19210);

(statearr_19273[(11)] = inst_19209);

(statearr_19273[(12)] = inst_19208);

return statearr_19273;
})();
var statearr_19274_19306 = state_19256__$1;
(statearr_19274_19306[(2)] = null);

(statearr_19274_19306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (17))){
var inst_19222 = (state_19256[(7)]);
var inst_19226 = cljs.core.chunk_first.call(null,inst_19222);
var inst_19227 = cljs.core.chunk_rest.call(null,inst_19222);
var inst_19228 = cljs.core.count.call(null,inst_19226);
var inst_19208 = inst_19227;
var inst_19209 = inst_19226;
var inst_19210 = inst_19228;
var inst_19211 = (0);
var state_19256__$1 = (function (){var statearr_19275 = state_19256;
(statearr_19275[(8)] = inst_19211);

(statearr_19275[(9)] = inst_19210);

(statearr_19275[(11)] = inst_19209);

(statearr_19275[(12)] = inst_19208);

return statearr_19275;
})();
var statearr_19276_19307 = state_19256__$1;
(statearr_19276_19307[(2)] = null);

(statearr_19276_19307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (3))){
var inst_19254 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19256__$1,inst_19254);
} else {
if((state_val_19257 === (12))){
var inst_19242 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
var statearr_19277_19308 = state_19256__$1;
(statearr_19277_19308[(2)] = inst_19242);

(statearr_19277_19308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (2))){
var state_19256__$1 = state_19256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19256__$1,(4),in$);
} else {
if((state_val_19257 === (23))){
var inst_19250 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
var statearr_19278_19309 = state_19256__$1;
(statearr_19278_19309[(2)] = inst_19250);

(statearr_19278_19309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (19))){
var inst_19237 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
var statearr_19279_19310 = state_19256__$1;
(statearr_19279_19310[(2)] = inst_19237);

(statearr_19279_19310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (11))){
var inst_19222 = (state_19256[(7)]);
var inst_19208 = (state_19256[(12)]);
var inst_19222__$1 = cljs.core.seq.call(null,inst_19208);
var state_19256__$1 = (function (){var statearr_19280 = state_19256;
(statearr_19280[(7)] = inst_19222__$1);

return statearr_19280;
})();
if(inst_19222__$1){
var statearr_19281_19311 = state_19256__$1;
(statearr_19281_19311[(1)] = (14));

} else {
var statearr_19282_19312 = state_19256__$1;
(statearr_19282_19312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (9))){
var inst_19244 = (state_19256[(2)]);
var inst_19245 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19256__$1 = (function (){var statearr_19283 = state_19256;
(statearr_19283[(15)] = inst_19244);

return statearr_19283;
})();
if(cljs.core.truth_(inst_19245)){
var statearr_19284_19313 = state_19256__$1;
(statearr_19284_19313[(1)] = (21));

} else {
var statearr_19285_19314 = state_19256__$1;
(statearr_19285_19314[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (5))){
var inst_19200 = cljs.core.async.close_BANG_.call(null,out);
var state_19256__$1 = state_19256;
var statearr_19286_19315 = state_19256__$1;
(statearr_19286_19315[(2)] = inst_19200);

(statearr_19286_19315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (14))){
var inst_19222 = (state_19256[(7)]);
var inst_19224 = cljs.core.chunked_seq_QMARK_.call(null,inst_19222);
var state_19256__$1 = state_19256;
if(inst_19224){
var statearr_19287_19316 = state_19256__$1;
(statearr_19287_19316[(1)] = (17));

} else {
var statearr_19288_19317 = state_19256__$1;
(statearr_19288_19317[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (16))){
var inst_19240 = (state_19256[(2)]);
var state_19256__$1 = state_19256;
var statearr_19289_19318 = state_19256__$1;
(statearr_19289_19318[(2)] = inst_19240);

(statearr_19289_19318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19257 === (10))){
var inst_19211 = (state_19256[(8)]);
var inst_19209 = (state_19256[(11)]);
var inst_19216 = cljs.core._nth.call(null,inst_19209,inst_19211);
var state_19256__$1 = state_19256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19256__$1,(13),out,inst_19216);
} else {
if((state_val_19257 === (18))){
var inst_19222 = (state_19256[(7)]);
var inst_19231 = cljs.core.first.call(null,inst_19222);
var state_19256__$1 = state_19256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19256__$1,(20),out,inst_19231);
} else {
if((state_val_19257 === (8))){
var inst_19211 = (state_19256[(8)]);
var inst_19210 = (state_19256[(9)]);
var inst_19213 = (inst_19211 < inst_19210);
var inst_19214 = inst_19213;
var state_19256__$1 = state_19256;
if(cljs.core.truth_(inst_19214)){
var statearr_19290_19319 = state_19256__$1;
(statearr_19290_19319[(1)] = (10));

} else {
var statearr_19291_19320 = state_19256__$1;
(statearr_19291_19320[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____0 = (function (){
var statearr_19292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19292[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__);

(statearr_19292[(1)] = (1));

return statearr_19292;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____1 = (function (state_19256){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19293){var ex__17603__auto__ = e19293;
var statearr_19294_19321 = state_19256;
(statearr_19294_19321[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19256[(4)]))){
var statearr_19295_19322 = state_19256;
(statearr_19295_19322[(1)] = cljs.core.first.call(null,(state_19256[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19323 = state_19256;
state_19256 = G__19323;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__ = function(state_19256){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____1.call(this,state_19256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17600__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19296 = f__17674__auto__.call(null);
(statearr_19296[(6)] = c__17673__auto__);

return statearr_19296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));

return c__17673__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19325 = arguments.length;
switch (G__19325) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19328 = arguments.length;
switch (G__19328) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19331 = arguments.length;
switch (G__19331) {
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
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19355){
var state_val_19356 = (state_19355[(1)]);
if((state_val_19356 === (7))){
var inst_19350 = (state_19355[(2)]);
var state_19355__$1 = state_19355;
var statearr_19357_19380 = state_19355__$1;
(statearr_19357_19380[(2)] = inst_19350);

(statearr_19357_19380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (1))){
var inst_19332 = null;
var state_19355__$1 = (function (){var statearr_19358 = state_19355;
(statearr_19358[(7)] = inst_19332);

return statearr_19358;
})();
var statearr_19359_19381 = state_19355__$1;
(statearr_19359_19381[(2)] = null);

(statearr_19359_19381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (4))){
var inst_19335 = (state_19355[(8)]);
var inst_19335__$1 = (state_19355[(2)]);
var inst_19336 = (inst_19335__$1 == null);
var inst_19337 = cljs.core.not.call(null,inst_19336);
var state_19355__$1 = (function (){var statearr_19360 = state_19355;
(statearr_19360[(8)] = inst_19335__$1);

return statearr_19360;
})();
if(inst_19337){
var statearr_19361_19382 = state_19355__$1;
(statearr_19361_19382[(1)] = (5));

} else {
var statearr_19362_19383 = state_19355__$1;
(statearr_19362_19383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (6))){
var state_19355__$1 = state_19355;
var statearr_19363_19384 = state_19355__$1;
(statearr_19363_19384[(2)] = null);

(statearr_19363_19384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (3))){
var inst_19352 = (state_19355[(2)]);
var inst_19353 = cljs.core.async.close_BANG_.call(null,out);
var state_19355__$1 = (function (){var statearr_19364 = state_19355;
(statearr_19364[(9)] = inst_19352);

return statearr_19364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19355__$1,inst_19353);
} else {
if((state_val_19356 === (2))){
var state_19355__$1 = state_19355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19355__$1,(4),ch);
} else {
if((state_val_19356 === (11))){
var inst_19335 = (state_19355[(8)]);
var inst_19344 = (state_19355[(2)]);
var inst_19332 = inst_19335;
var state_19355__$1 = (function (){var statearr_19365 = state_19355;
(statearr_19365[(10)] = inst_19344);

(statearr_19365[(7)] = inst_19332);

return statearr_19365;
})();
var statearr_19366_19385 = state_19355__$1;
(statearr_19366_19385[(2)] = null);

(statearr_19366_19385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (9))){
var inst_19335 = (state_19355[(8)]);
var state_19355__$1 = state_19355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19355__$1,(11),out,inst_19335);
} else {
if((state_val_19356 === (5))){
var inst_19335 = (state_19355[(8)]);
var inst_19332 = (state_19355[(7)]);
var inst_19339 = cljs.core._EQ_.call(null,inst_19335,inst_19332);
var state_19355__$1 = state_19355;
if(inst_19339){
var statearr_19368_19386 = state_19355__$1;
(statearr_19368_19386[(1)] = (8));

} else {
var statearr_19369_19387 = state_19355__$1;
(statearr_19369_19387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (10))){
var inst_19347 = (state_19355[(2)]);
var state_19355__$1 = state_19355;
var statearr_19370_19388 = state_19355__$1;
(statearr_19370_19388[(2)] = inst_19347);

(statearr_19370_19388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19356 === (8))){
var inst_19332 = (state_19355[(7)]);
var tmp19367 = inst_19332;
var inst_19332__$1 = tmp19367;
var state_19355__$1 = (function (){var statearr_19371 = state_19355;
(statearr_19371[(7)] = inst_19332__$1);

return statearr_19371;
})();
var statearr_19372_19389 = state_19355__$1;
(statearr_19372_19389[(2)] = null);

(statearr_19372_19389[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19373[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19373[(1)] = (1));

return statearr_19373;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19355){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19374){var ex__17603__auto__ = e19374;
var statearr_19375_19390 = state_19355;
(statearr_19375_19390[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19355[(4)]))){
var statearr_19376_19391 = state_19355;
(statearr_19376_19391[(1)] = cljs.core.first.call(null,(state_19355[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19392 = state_19355;
state_19355 = G__19392;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19377 = f__17674__auto__.call(null);
(statearr_19377[(6)] = c__17673__auto___19379);

return statearr_19377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19394 = arguments.length;
switch (G__19394) {
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
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19432){
var state_val_19433 = (state_19432[(1)]);
if((state_val_19433 === (7))){
var inst_19428 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19434_19462 = state_19432__$1;
(statearr_19434_19462[(2)] = inst_19428);

(statearr_19434_19462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (1))){
var inst_19395 = (new Array(n));
var inst_19396 = inst_19395;
var inst_19397 = (0);
var state_19432__$1 = (function (){var statearr_19435 = state_19432;
(statearr_19435[(7)] = inst_19397);

(statearr_19435[(8)] = inst_19396);

return statearr_19435;
})();
var statearr_19436_19463 = state_19432__$1;
(statearr_19436_19463[(2)] = null);

(statearr_19436_19463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (4))){
var inst_19400 = (state_19432[(9)]);
var inst_19400__$1 = (state_19432[(2)]);
var inst_19401 = (inst_19400__$1 == null);
var inst_19402 = cljs.core.not.call(null,inst_19401);
var state_19432__$1 = (function (){var statearr_19437 = state_19432;
(statearr_19437[(9)] = inst_19400__$1);

return statearr_19437;
})();
if(inst_19402){
var statearr_19438_19464 = state_19432__$1;
(statearr_19438_19464[(1)] = (5));

} else {
var statearr_19439_19465 = state_19432__$1;
(statearr_19439_19465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (15))){
var inst_19422 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19440_19466 = state_19432__$1;
(statearr_19440_19466[(2)] = inst_19422);

(statearr_19440_19466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (13))){
var state_19432__$1 = state_19432;
var statearr_19441_19467 = state_19432__$1;
(statearr_19441_19467[(2)] = null);

(statearr_19441_19467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (6))){
var inst_19397 = (state_19432[(7)]);
var inst_19418 = (inst_19397 > (0));
var state_19432__$1 = state_19432;
if(cljs.core.truth_(inst_19418)){
var statearr_19442_19468 = state_19432__$1;
(statearr_19442_19468[(1)] = (12));

} else {
var statearr_19443_19469 = state_19432__$1;
(statearr_19443_19469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (3))){
var inst_19430 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19432__$1,inst_19430);
} else {
if((state_val_19433 === (12))){
var inst_19396 = (state_19432[(8)]);
var inst_19420 = cljs.core.vec.call(null,inst_19396);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19432__$1,(15),out,inst_19420);
} else {
if((state_val_19433 === (2))){
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19432__$1,(4),ch);
} else {
if((state_val_19433 === (11))){
var inst_19412 = (state_19432[(2)]);
var inst_19413 = (new Array(n));
var inst_19396 = inst_19413;
var inst_19397 = (0);
var state_19432__$1 = (function (){var statearr_19444 = state_19432;
(statearr_19444[(7)] = inst_19397);

(statearr_19444[(8)] = inst_19396);

(statearr_19444[(10)] = inst_19412);

return statearr_19444;
})();
var statearr_19445_19470 = state_19432__$1;
(statearr_19445_19470[(2)] = null);

(statearr_19445_19470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (9))){
var inst_19396 = (state_19432[(8)]);
var inst_19410 = cljs.core.vec.call(null,inst_19396);
var state_19432__$1 = state_19432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19432__$1,(11),out,inst_19410);
} else {
if((state_val_19433 === (5))){
var inst_19400 = (state_19432[(9)]);
var inst_19397 = (state_19432[(7)]);
var inst_19396 = (state_19432[(8)]);
var inst_19405 = (state_19432[(11)]);
var inst_19404 = (inst_19396[inst_19397] = inst_19400);
var inst_19405__$1 = (inst_19397 + (1));
var inst_19406 = (inst_19405__$1 < n);
var state_19432__$1 = (function (){var statearr_19446 = state_19432;
(statearr_19446[(12)] = inst_19404);

(statearr_19446[(11)] = inst_19405__$1);

return statearr_19446;
})();
if(cljs.core.truth_(inst_19406)){
var statearr_19447_19471 = state_19432__$1;
(statearr_19447_19471[(1)] = (8));

} else {
var statearr_19448_19472 = state_19432__$1;
(statearr_19448_19472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (14))){
var inst_19425 = (state_19432[(2)]);
var inst_19426 = cljs.core.async.close_BANG_.call(null,out);
var state_19432__$1 = (function (){var statearr_19450 = state_19432;
(statearr_19450[(13)] = inst_19425);

return statearr_19450;
})();
var statearr_19451_19473 = state_19432__$1;
(statearr_19451_19473[(2)] = inst_19426);

(statearr_19451_19473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (10))){
var inst_19416 = (state_19432[(2)]);
var state_19432__$1 = state_19432;
var statearr_19452_19474 = state_19432__$1;
(statearr_19452_19474[(2)] = inst_19416);

(statearr_19452_19474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19433 === (8))){
var inst_19396 = (state_19432[(8)]);
var inst_19405 = (state_19432[(11)]);
var tmp19449 = inst_19396;
var inst_19396__$1 = tmp19449;
var inst_19397 = inst_19405;
var state_19432__$1 = (function (){var statearr_19453 = state_19432;
(statearr_19453[(7)] = inst_19397);

(statearr_19453[(8)] = inst_19396__$1);

return statearr_19453;
})();
var statearr_19454_19475 = state_19432__$1;
(statearr_19454_19475[(2)] = null);

(statearr_19454_19475[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19455[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19455[(1)] = (1));

return statearr_19455;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19432){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19456){var ex__17603__auto__ = e19456;
var statearr_19457_19476 = state_19432;
(statearr_19457_19476[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19432[(4)]))){
var statearr_19458_19477 = state_19432;
(statearr_19458_19477[(1)] = cljs.core.first.call(null,(state_19432[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19478 = state_19432;
state_19432 = G__19478;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19459 = f__17674__auto__.call(null);
(statearr_19459[(6)] = c__17673__auto___19461);

return statearr_19459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19480 = arguments.length;
switch (G__19480) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17673__auto___19551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17674__auto__ = (function (){var switch__17599__auto__ = (function (state_19522){
var state_val_19523 = (state_19522[(1)]);
if((state_val_19523 === (7))){
var inst_19518 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19524_19552 = state_19522__$1;
(statearr_19524_19552[(2)] = inst_19518);

(statearr_19524_19552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (1))){
var inst_19481 = [];
var inst_19482 = inst_19481;
var inst_19483 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19522__$1 = (function (){var statearr_19525 = state_19522;
(statearr_19525[(7)] = inst_19482);

(statearr_19525[(8)] = inst_19483);

return statearr_19525;
})();
var statearr_19526_19553 = state_19522__$1;
(statearr_19526_19553[(2)] = null);

(statearr_19526_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (4))){
var inst_19486 = (state_19522[(9)]);
var inst_19486__$1 = (state_19522[(2)]);
var inst_19487 = (inst_19486__$1 == null);
var inst_19488 = cljs.core.not.call(null,inst_19487);
var state_19522__$1 = (function (){var statearr_19527 = state_19522;
(statearr_19527[(9)] = inst_19486__$1);

return statearr_19527;
})();
if(inst_19488){
var statearr_19528_19554 = state_19522__$1;
(statearr_19528_19554[(1)] = (5));

} else {
var statearr_19529_19555 = state_19522__$1;
(statearr_19529_19555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (15))){
var inst_19512 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19530_19556 = state_19522__$1;
(statearr_19530_19556[(2)] = inst_19512);

(statearr_19530_19556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (13))){
var state_19522__$1 = state_19522;
var statearr_19531_19557 = state_19522__$1;
(statearr_19531_19557[(2)] = null);

(statearr_19531_19557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (6))){
var inst_19482 = (state_19522[(7)]);
var inst_19507 = inst_19482.length;
var inst_19508 = (inst_19507 > (0));
var state_19522__$1 = state_19522;
if(cljs.core.truth_(inst_19508)){
var statearr_19532_19558 = state_19522__$1;
(statearr_19532_19558[(1)] = (12));

} else {
var statearr_19533_19559 = state_19522__$1;
(statearr_19533_19559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (3))){
var inst_19520 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19522__$1,inst_19520);
} else {
if((state_val_19523 === (12))){
var inst_19482 = (state_19522[(7)]);
var inst_19510 = cljs.core.vec.call(null,inst_19482);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(15),out,inst_19510);
} else {
if((state_val_19523 === (2))){
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19522__$1,(4),ch);
} else {
if((state_val_19523 === (11))){
var inst_19486 = (state_19522[(9)]);
var inst_19490 = (state_19522[(10)]);
var inst_19500 = (state_19522[(2)]);
var inst_19501 = [];
var inst_19502 = inst_19501.push(inst_19486);
var inst_19482 = inst_19501;
var inst_19483 = inst_19490;
var state_19522__$1 = (function (){var statearr_19534 = state_19522;
(statearr_19534[(11)] = inst_19500);

(statearr_19534[(12)] = inst_19502);

(statearr_19534[(7)] = inst_19482);

(statearr_19534[(8)] = inst_19483);

return statearr_19534;
})();
var statearr_19535_19560 = state_19522__$1;
(statearr_19535_19560[(2)] = null);

(statearr_19535_19560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (9))){
var inst_19482 = (state_19522[(7)]);
var inst_19498 = cljs.core.vec.call(null,inst_19482);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(11),out,inst_19498);
} else {
if((state_val_19523 === (5))){
var inst_19486 = (state_19522[(9)]);
var inst_19483 = (state_19522[(8)]);
var inst_19490 = (state_19522[(10)]);
var inst_19490__$1 = f.call(null,inst_19486);
var inst_19491 = cljs.core._EQ_.call(null,inst_19490__$1,inst_19483);
var inst_19492 = cljs.core.keyword_identical_QMARK_.call(null,inst_19483,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19493 = ((inst_19491) || (inst_19492));
var state_19522__$1 = (function (){var statearr_19536 = state_19522;
(statearr_19536[(10)] = inst_19490__$1);

return statearr_19536;
})();
if(cljs.core.truth_(inst_19493)){
var statearr_19537_19561 = state_19522__$1;
(statearr_19537_19561[(1)] = (8));

} else {
var statearr_19538_19562 = state_19522__$1;
(statearr_19538_19562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (14))){
var inst_19515 = (state_19522[(2)]);
var inst_19516 = cljs.core.async.close_BANG_.call(null,out);
var state_19522__$1 = (function (){var statearr_19540 = state_19522;
(statearr_19540[(13)] = inst_19515);

return statearr_19540;
})();
var statearr_19541_19563 = state_19522__$1;
(statearr_19541_19563[(2)] = inst_19516);

(statearr_19541_19563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (10))){
var inst_19505 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19542_19564 = state_19522__$1;
(statearr_19542_19564[(2)] = inst_19505);

(statearr_19542_19564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (8))){
var inst_19486 = (state_19522[(9)]);
var inst_19482 = (state_19522[(7)]);
var inst_19490 = (state_19522[(10)]);
var inst_19495 = inst_19482.push(inst_19486);
var tmp19539 = inst_19482;
var inst_19482__$1 = tmp19539;
var inst_19483 = inst_19490;
var state_19522__$1 = (function (){var statearr_19543 = state_19522;
(statearr_19543[(14)] = inst_19495);

(statearr_19543[(7)] = inst_19482__$1);

(statearr_19543[(8)] = inst_19483);

return statearr_19543;
})();
var statearr_19544_19565 = state_19522__$1;
(statearr_19544_19565[(2)] = null);

(statearr_19544_19565[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__17600__auto__ = null;
var cljs$core$async$state_machine__17600__auto____0 = (function (){
var statearr_19545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19545[(0)] = cljs$core$async$state_machine__17600__auto__);

(statearr_19545[(1)] = (1));

return statearr_19545;
});
var cljs$core$async$state_machine__17600__auto____1 = (function (state_19522){
while(true){
var ret_value__17601__auto__ = (function (){try{while(true){
var result__17602__auto__ = switch__17599__auto__.call(null,state_19522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17602__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17602__auto__;
}
break;
}
}catch (e19546){var ex__17603__auto__ = e19546;
var statearr_19547_19566 = state_19522;
(statearr_19547_19566[(2)] = ex__17603__auto__);


if(cljs.core.seq.call(null,(state_19522[(4)]))){
var statearr_19548_19567 = state_19522;
(statearr_19548_19567[(1)] = cljs.core.first.call(null,(state_19522[(4)])));

} else {
throw ex__17603__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19568 = state_19522;
state_19522 = G__19568;
continue;
} else {
return ret_value__17601__auto__;
}
break;
}
});
cljs$core$async$state_machine__17600__auto__ = function(state_19522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17600__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17600__auto____1.call(this,state_19522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17600__auto____0;
cljs$core$async$state_machine__17600__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17600__auto____1;
return cljs$core$async$state_machine__17600__auto__;
})()
})();
var state__17675__auto__ = (function (){var statearr_19549 = f__17674__auto__.call(null);
(statearr_19549[(6)] = c__17673__auto___19551);

return statearr_19549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17675__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);

