// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44951 = arguments.length;
switch (G__44951) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44954 = (function (f,blockable,meta44955){
this.f = f;
this.blockable = blockable;
this.meta44955 = meta44955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44956,meta44955__$1){
var self__ = this;
var _44956__$1 = this;
return (new cljs.core.async.t_cljs$core$async44954(self__.f,self__.blockable,meta44955__$1));
});

cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44956){
var self__ = this;
var _44956__$1 = this;
return self__.meta44955;
});

cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44955","meta44955",1549998105,null)], null);
});

cljs.core.async.t_cljs$core$async44954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44954";

cljs.core.async.t_cljs$core$async44954.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async44954");
});

cljs.core.async.__GT_t_cljs$core$async44954 = (function cljs$core$async$__GT_t_cljs$core$async44954(f__$1,blockable__$1,meta44955){
return (new cljs.core.async.t_cljs$core$async44954(f__$1,blockable__$1,meta44955));
});

}

return (new cljs.core.async.t_cljs$core$async44954(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__44978 = arguments.length;
switch (G__44978) {
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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44990 = arguments.length;
switch (G__44990) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__44994 = arguments.length;
switch (G__44994) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45001 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45001);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45001,ret){
return (function (){
return fn1.call(null,val_45001);
});})(val_45001,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45003 = arguments.length;
switch (G__45003) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__42412__auto___45010 = n;
var x_45011 = (0);
while(true){
if((x_45011 < n__42412__auto___45010)){
(a[x_45011] = (0));

var G__45012 = (x_45011 + (1));
x_45011 = G__45012;
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

var G__45013 = (i + (1));
i = G__45013;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45015 = (function (flag,meta45016){
this.flag = flag;
this.meta45016 = meta45016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45017,meta45016__$1){
var self__ = this;
var _45017__$1 = this;
return (new cljs.core.async.t_cljs$core$async45015(self__.flag,meta45016__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45017){
var self__ = this;
var _45017__$1 = this;
return self__.meta45016;
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45016","meta45016",757427405,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45015";

cljs.core.async.t_cljs$core$async45015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async45015");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45015 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45015(flag__$1,meta45016){
return (new cljs.core.async.t_cljs$core$async45015(flag__$1,meta45016));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45015(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45020 = (function (flag,cb,meta45021){
this.flag = flag;
this.cb = cb;
this.meta45021 = meta45021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45022,meta45021__$1){
var self__ = this;
var _45022__$1 = this;
return (new cljs.core.async.t_cljs$core$async45020(self__.flag,self__.cb,meta45021__$1));
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45022){
var self__ = this;
var _45022__$1 = this;
return self__.meta45021;
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45021","meta45021",-1285687660,null)], null);
});

cljs.core.async.t_cljs$core$async45020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45020";

cljs.core.async.t_cljs$core$async45020.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async45020");
});

cljs.core.async.__GT_t_cljs$core$async45020 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45020(flag__$1,cb__$1,meta45021){
return (new cljs.core.async.t_cljs$core$async45020(flag__$1,cb__$1,meta45021));
});

}

return (new cljs.core.async.t_cljs$core$async45020(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45027_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45027_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45028_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45028_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41367__auto__ = wport;
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45042 = (i + (1));
i = G__45042;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41367__auto__ = ret;
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__41355__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41355__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41355__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__42653__auto__ = [];
var len__42646__auto___45054 = arguments.length;
var i__42647__auto___45055 = (0);
while(true){
if((i__42647__auto___45055 < len__42646__auto___45054)){
args__42653__auto__.push((arguments[i__42647__auto___45055]));

var G__45056 = (i__42647__auto___45055 + (1));
i__42647__auto___45055 = G__45056;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((1) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42654__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45049){
var map__45050 = p__45049;
var map__45050__$1 = ((((!((map__45050 == null)))?((((map__45050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45050):map__45050);
var opts = map__45050__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45044){
var G__45045 = cljs.core.first.call(null,seq45044);
var seq45044__$1 = cljs.core.next.call(null,seq45044);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45045,seq45044__$1);
});

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
var G__45070 = arguments.length;
switch (G__45070) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44867__auto___45265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___45265){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___45265){
return (function (state_45169){
var state_val_45178 = (state_45169[(1)]);
if((state_val_45178 === (7))){
var inst_45152 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45198_45274 = state_45169__$1;
(statearr_45198_45274[(2)] = inst_45152);

(statearr_45198_45274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (1))){
var state_45169__$1 = state_45169;
var statearr_45199_45277 = state_45169__$1;
(statearr_45199_45277[(2)] = null);

(statearr_45199_45277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (4))){
var inst_45123 = (state_45169[(7)]);
var inst_45123__$1 = (state_45169[(2)]);
var inst_45131 = (inst_45123__$1 == null);
var state_45169__$1 = (function (){var statearr_45204 = state_45169;
(statearr_45204[(7)] = inst_45123__$1);

return statearr_45204;
})();
if(cljs.core.truth_(inst_45131)){
var statearr_45205_45279 = state_45169__$1;
(statearr_45205_45279[(1)] = (5));

} else {
var statearr_45206_45283 = state_45169__$1;
(statearr_45206_45283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (13))){
var state_45169__$1 = state_45169;
var statearr_45210_45284 = state_45169__$1;
(statearr_45210_45284[(2)] = null);

(statearr_45210_45284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (6))){
var inst_45123 = (state_45169[(7)]);
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45169__$1,(11),to,inst_45123);
} else {
if((state_val_45178 === (3))){
var inst_45155 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45169__$1,inst_45155);
} else {
if((state_val_45178 === (12))){
var state_45169__$1 = state_45169;
var statearr_45212_45286 = state_45169__$1;
(statearr_45212_45286[(2)] = null);

(statearr_45212_45286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (2))){
var state_45169__$1 = state_45169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45169__$1,(4),from);
} else {
if((state_val_45178 === (11))){
var inst_45142 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
if(cljs.core.truth_(inst_45142)){
var statearr_45215_45291 = state_45169__$1;
(statearr_45215_45291[(1)] = (12));

} else {
var statearr_45216_45292 = state_45169__$1;
(statearr_45216_45292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (9))){
var state_45169__$1 = state_45169;
var statearr_45218_45293 = state_45169__$1;
(statearr_45218_45293[(2)] = null);

(statearr_45218_45293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (5))){
var state_45169__$1 = state_45169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45222_45294 = state_45169__$1;
(statearr_45222_45294[(1)] = (8));

} else {
var statearr_45223_45296 = state_45169__$1;
(statearr_45223_45296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (14))){
var inst_45150 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45224_45298 = state_45169__$1;
(statearr_45224_45298[(2)] = inst_45150);

(statearr_45224_45298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (10))){
var inst_45139 = (state_45169[(2)]);
var state_45169__$1 = state_45169;
var statearr_45225_45299 = state_45169__$1;
(statearr_45225_45299[(2)] = inst_45139);

(statearr_45225_45299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45178 === (8))){
var inst_45135 = cljs.core.async.close_BANG_.call(null,to);
var state_45169__$1 = state_45169;
var statearr_45227_45300 = state_45169__$1;
(statearr_45227_45300[(2)] = inst_45135);

(statearr_45227_45300[(1)] = (10));


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
});})(c__44867__auto___45265))
;
return ((function (switch__44548__auto__,c__44867__auto___45265){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_45240 = [null,null,null,null,null,null,null,null];
(statearr_45240[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_45240[(1)] = (1));

return statearr_45240;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_45169){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45242){if((e45242 instanceof Object)){
var ex__44553__auto__ = e45242;
var statearr_45243_45316 = state_45169;
(statearr_45243_45316[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45320 = state_45169;
state_45169 = G__45320;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_45169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_45169);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___45265))
})();
var state__44869__auto__ = (function (){var statearr_45249 = f__44868__auto__.call(null);
(statearr_45249[(6)] = c__44867__auto___45265);

return statearr_45249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___45265))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45336){
var vec__45337 = p__45336;
var v = cljs.core.nth.call(null,vec__45337,(0),null);
var p = cljs.core.nth.call(null,vec__45337,(1),null);
var job = vec__45337;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44867__auto___45645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results){
return (function (state_45344){
var state_val_45345 = (state_45344[(1)]);
if((state_val_45345 === (1))){
var state_45344__$1 = state_45344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45344__$1,(2),res,v);
} else {
if((state_val_45345 === (2))){
var inst_45341 = (state_45344[(2)]);
var inst_45342 = cljs.core.async.close_BANG_.call(null,res);
var state_45344__$1 = (function (){var statearr_45346 = state_45344;
(statearr_45346[(7)] = inst_45341);

return statearr_45346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45344__$1,inst_45342);
} else {
return null;
}
}
});})(c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results))
;
return ((function (switch__44548__auto__,c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_45354 = [null,null,null,null,null,null,null,null];
(statearr_45354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__);

(statearr_45354[(1)] = (1));

return statearr_45354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1 = (function (state_45344){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45356){if((e45356 instanceof Object)){
var ex__44553__auto__ = e45356;
var statearr_45357_45658 = state_45344;
(statearr_45357_45658[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45663 = state_45344;
state_45344 = G__45663;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = function(state_45344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1.call(this,state_45344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results))
})();
var state__44869__auto__ = (function (){var statearr_45359 = f__44868__auto__.call(null);
(statearr_45359[(6)] = c__44867__auto___45645);

return statearr_45359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___45645,res,vec__45337,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45365){
var vec__45366 = p__45365;
var v = cljs.core.nth.call(null,vec__45366,(0),null);
var p = cljs.core.nth.call(null,vec__45366,(1),null);
var job = vec__45366;
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
var n__42412__auto___45667 = n;
var __45668 = (0);
while(true){
if((__45668 < n__42412__auto___45667)){
var G__45376_45669 = type;
var G__45376_45670__$1 = (((G__45376_45669 instanceof cljs.core.Keyword))?G__45376_45669.fqn:null);
switch (G__45376_45670__$1) {
case "compute":
var c__44867__auto___45672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45668,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (__45668,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function (state_45390){
var state_val_45391 = (state_45390[(1)]);
if((state_val_45391 === (1))){
var state_45390__$1 = state_45390;
var statearr_45397_45673 = state_45390__$1;
(statearr_45397_45673[(2)] = null);

(statearr_45397_45673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45391 === (2))){
var state_45390__$1 = state_45390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45390__$1,(4),jobs);
} else {
if((state_val_45391 === (3))){
var inst_45388 = (state_45390[(2)]);
var state_45390__$1 = state_45390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45390__$1,inst_45388);
} else {
if((state_val_45391 === (4))){
var inst_45380 = (state_45390[(2)]);
var inst_45381 = process.call(null,inst_45380);
var state_45390__$1 = state_45390;
if(cljs.core.truth_(inst_45381)){
var statearr_45406_45674 = state_45390__$1;
(statearr_45406_45674[(1)] = (5));

} else {
var statearr_45407_45675 = state_45390__$1;
(statearr_45407_45675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45391 === (5))){
var state_45390__$1 = state_45390;
var statearr_45409_45676 = state_45390__$1;
(statearr_45409_45676[(2)] = null);

(statearr_45409_45676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45391 === (6))){
var state_45390__$1 = state_45390;
var statearr_45415_45677 = state_45390__$1;
(statearr_45415_45677[(2)] = null);

(statearr_45415_45677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45391 === (7))){
var inst_45386 = (state_45390[(2)]);
var state_45390__$1 = state_45390;
var statearr_45419_45678 = state_45390__$1;
(statearr_45419_45678[(2)] = inst_45386);

(statearr_45419_45678[(1)] = (3));


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
});})(__45668,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
;
return ((function (__45668,switch__44548__auto__,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_45420 = [null,null,null,null,null,null,null];
(statearr_45420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__);

(statearr_45420[(1)] = (1));

return statearr_45420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1 = (function (state_45390){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45421){if((e45421 instanceof Object)){
var ex__44553__auto__ = e45421;
var statearr_45422_45680 = state_45390;
(statearr_45422_45680[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45681 = state_45390;
state_45390 = G__45681;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = function(state_45390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1.call(this,state_45390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__;
})()
;})(__45668,switch__44548__auto__,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
})();
var state__44869__auto__ = (function (){var statearr_45430 = f__44868__auto__.call(null);
(statearr_45430[(6)] = c__44867__auto___45672);

return statearr_45430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(__45668,c__44867__auto___45672,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
);


break;
case "async":
var c__44867__auto___45683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45668,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (__45668,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function (state_45445){
var state_val_45446 = (state_45445[(1)]);
if((state_val_45446 === (1))){
var state_45445__$1 = state_45445;
var statearr_45448_45685 = state_45445__$1;
(statearr_45448_45685[(2)] = null);

(statearr_45448_45685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (2))){
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45445__$1,(4),jobs);
} else {
if((state_val_45446 === (3))){
var inst_45442 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45445__$1,inst_45442);
} else {
if((state_val_45446 === (4))){
var inst_45434 = (state_45445[(2)]);
var inst_45435 = async.call(null,inst_45434);
var state_45445__$1 = state_45445;
if(cljs.core.truth_(inst_45435)){
var statearr_45453_45686 = state_45445__$1;
(statearr_45453_45686[(1)] = (5));

} else {
var statearr_45454_45687 = state_45445__$1;
(statearr_45454_45687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (5))){
var state_45445__$1 = state_45445;
var statearr_45457_45689 = state_45445__$1;
(statearr_45457_45689[(2)] = null);

(statearr_45457_45689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (6))){
var state_45445__$1 = state_45445;
var statearr_45458_45690 = state_45445__$1;
(statearr_45458_45690[(2)] = null);

(statearr_45458_45690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45446 === (7))){
var inst_45440 = (state_45445[(2)]);
var state_45445__$1 = state_45445;
var statearr_45459_45691 = state_45445__$1;
(statearr_45459_45691[(2)] = inst_45440);

(statearr_45459_45691[(1)] = (3));


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
});})(__45668,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
;
return ((function (__45668,switch__44548__auto__,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_45460 = [null,null,null,null,null,null,null];
(statearr_45460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__);

(statearr_45460[(1)] = (1));

return statearr_45460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1 = (function (state_45445){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45462){if((e45462 instanceof Object)){
var ex__44553__auto__ = e45462;
var statearr_45463_45694 = state_45445;
(statearr_45463_45694[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45695 = state_45445;
state_45445 = G__45695;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = function(state_45445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1.call(this,state_45445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__;
})()
;})(__45668,switch__44548__auto__,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
})();
var state__44869__auto__ = (function (){var statearr_45469 = f__44868__auto__.call(null);
(statearr_45469[(6)] = c__44867__auto___45683);

return statearr_45469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(__45668,c__44867__auto___45683,G__45376_45669,G__45376_45670__$1,n__42412__auto___45667,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45376_45670__$1)].join('')));

}

var G__45696 = (__45668 + (1));
__45668 = G__45696;
continue;
} else {
}
break;
}

var c__44867__auto___45697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___45697,jobs,results,process,async){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___45697,jobs,results,process,async){
return (function (state_45500){
var state_val_45501 = (state_45500[(1)]);
if((state_val_45501 === (1))){
var state_45500__$1 = state_45500;
var statearr_45504_45699 = state_45500__$1;
(statearr_45504_45699[(2)] = null);

(statearr_45504_45699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (2))){
var state_45500__$1 = state_45500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45500__$1,(4),from);
} else {
if((state_val_45501 === (3))){
var inst_45498 = (state_45500[(2)]);
var state_45500__$1 = state_45500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45500__$1,inst_45498);
} else {
if((state_val_45501 === (4))){
var inst_45472 = (state_45500[(7)]);
var inst_45472__$1 = (state_45500[(2)]);
var inst_45474 = (inst_45472__$1 == null);
var state_45500__$1 = (function (){var statearr_45507 = state_45500;
(statearr_45507[(7)] = inst_45472__$1);

return statearr_45507;
})();
if(cljs.core.truth_(inst_45474)){
var statearr_45508_45701 = state_45500__$1;
(statearr_45508_45701[(1)] = (5));

} else {
var statearr_45509_45702 = state_45500__$1;
(statearr_45509_45702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (5))){
var inst_45477 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45500__$1 = state_45500;
var statearr_45511_45703 = state_45500__$1;
(statearr_45511_45703[(2)] = inst_45477);

(statearr_45511_45703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (6))){
var inst_45479 = (state_45500[(8)]);
var inst_45472 = (state_45500[(7)]);
var inst_45479__$1 = cljs.core.async.chan.call(null,(1));
var inst_45485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45488 = [inst_45472,inst_45479__$1];
var inst_45489 = (new cljs.core.PersistentVector(null,2,(5),inst_45485,inst_45488,null));
var state_45500__$1 = (function (){var statearr_45514 = state_45500;
(statearr_45514[(8)] = inst_45479__$1);

return statearr_45514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45500__$1,(8),jobs,inst_45489);
} else {
if((state_val_45501 === (7))){
var inst_45496 = (state_45500[(2)]);
var state_45500__$1 = state_45500;
var statearr_45521_45706 = state_45500__$1;
(statearr_45521_45706[(2)] = inst_45496);

(statearr_45521_45706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45501 === (8))){
var inst_45479 = (state_45500[(8)]);
var inst_45491 = (state_45500[(2)]);
var state_45500__$1 = (function (){var statearr_45525 = state_45500;
(statearr_45525[(9)] = inst_45491);

return statearr_45525;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45500__$1,(9),results,inst_45479);
} else {
if((state_val_45501 === (9))){
var inst_45493 = (state_45500[(2)]);
var state_45500__$1 = (function (){var statearr_45527 = state_45500;
(statearr_45527[(10)] = inst_45493);

return statearr_45527;
})();
var statearr_45530_45709 = state_45500__$1;
(statearr_45530_45709[(2)] = null);

(statearr_45530_45709[(1)] = (2));


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
});})(c__44867__auto___45697,jobs,results,process,async))
;
return ((function (switch__44548__auto__,c__44867__auto___45697,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_45536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__);

(statearr_45536[(1)] = (1));

return statearr_45536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1 = (function (state_45500){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45537){if((e45537 instanceof Object)){
var ex__44553__auto__ = e45537;
var statearr_45538_45712 = state_45500;
(statearr_45538_45712[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45714 = state_45500;
state_45500 = G__45714;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = function(state_45500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1.call(this,state_45500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___45697,jobs,results,process,async))
})();
var state__44869__auto__ = (function (){var statearr_45543 = f__44868__auto__.call(null);
(statearr_45543[(6)] = c__44867__auto___45697);

return statearr_45543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___45697,jobs,results,process,async))
);


var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__,jobs,results,process,async){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__,jobs,results,process,async){
return (function (state_45590){
var state_val_45591 = (state_45590[(1)]);
if((state_val_45591 === (7))){
var inst_45579 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45593_45716 = state_45590__$1;
(statearr_45593_45716[(2)] = inst_45579);

(statearr_45593_45716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (20))){
var state_45590__$1 = state_45590;
var statearr_45594_45717 = state_45590__$1;
(statearr_45594_45717[(2)] = null);

(statearr_45594_45717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (1))){
var state_45590__$1 = state_45590;
var statearr_45595_45718 = state_45590__$1;
(statearr_45595_45718[(2)] = null);

(statearr_45595_45718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (4))){
var inst_45548 = (state_45590[(7)]);
var inst_45548__$1 = (state_45590[(2)]);
var inst_45549 = (inst_45548__$1 == null);
var state_45590__$1 = (function (){var statearr_45596 = state_45590;
(statearr_45596[(7)] = inst_45548__$1);

return statearr_45596;
})();
if(cljs.core.truth_(inst_45549)){
var statearr_45598_45721 = state_45590__$1;
(statearr_45598_45721[(1)] = (5));

} else {
var statearr_45599_45722 = state_45590__$1;
(statearr_45599_45722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (15))){
var inst_45561 = (state_45590[(8)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45590__$1,(18),to,inst_45561);
} else {
if((state_val_45591 === (21))){
var inst_45574 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45600_45725 = state_45590__$1;
(statearr_45600_45725[(2)] = inst_45574);

(statearr_45600_45725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (13))){
var inst_45576 = (state_45590[(2)]);
var state_45590__$1 = (function (){var statearr_45601 = state_45590;
(statearr_45601[(9)] = inst_45576);

return statearr_45601;
})();
var statearr_45602_45727 = state_45590__$1;
(statearr_45602_45727[(2)] = null);

(statearr_45602_45727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (6))){
var inst_45548 = (state_45590[(7)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45590__$1,(11),inst_45548);
} else {
if((state_val_45591 === (17))){
var inst_45569 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
if(cljs.core.truth_(inst_45569)){
var statearr_45603_45735 = state_45590__$1;
(statearr_45603_45735[(1)] = (19));

} else {
var statearr_45604_45737 = state_45590__$1;
(statearr_45604_45737[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (3))){
var inst_45581 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45590__$1,inst_45581);
} else {
if((state_val_45591 === (12))){
var inst_45558 = (state_45590[(10)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45590__$1,(14),inst_45558);
} else {
if((state_val_45591 === (2))){
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45590__$1,(4),results);
} else {
if((state_val_45591 === (19))){
var state_45590__$1 = state_45590;
var statearr_45605_45739 = state_45590__$1;
(statearr_45605_45739[(2)] = null);

(statearr_45605_45739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (11))){
var inst_45558 = (state_45590[(2)]);
var state_45590__$1 = (function (){var statearr_45606 = state_45590;
(statearr_45606[(10)] = inst_45558);

return statearr_45606;
})();
var statearr_45607_45740 = state_45590__$1;
(statearr_45607_45740[(2)] = null);

(statearr_45607_45740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (9))){
var state_45590__$1 = state_45590;
var statearr_45608_45741 = state_45590__$1;
(statearr_45608_45741[(2)] = null);

(statearr_45608_45741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (5))){
var state_45590__$1 = state_45590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45609_45742 = state_45590__$1;
(statearr_45609_45742[(1)] = (8));

} else {
var statearr_45610_45743 = state_45590__$1;
(statearr_45610_45743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (14))){
var inst_45563 = (state_45590[(11)]);
var inst_45561 = (state_45590[(8)]);
var inst_45561__$1 = (state_45590[(2)]);
var inst_45562 = (inst_45561__$1 == null);
var inst_45563__$1 = cljs.core.not.call(null,inst_45562);
var state_45590__$1 = (function (){var statearr_45611 = state_45590;
(statearr_45611[(11)] = inst_45563__$1);

(statearr_45611[(8)] = inst_45561__$1);

return statearr_45611;
})();
if(inst_45563__$1){
var statearr_45613_45745 = state_45590__$1;
(statearr_45613_45745[(1)] = (15));

} else {
var statearr_45616_45746 = state_45590__$1;
(statearr_45616_45746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (16))){
var inst_45563 = (state_45590[(11)]);
var state_45590__$1 = state_45590;
var statearr_45619_45747 = state_45590__$1;
(statearr_45619_45747[(2)] = inst_45563);

(statearr_45619_45747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (10))){
var inst_45555 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45620_45750 = state_45590__$1;
(statearr_45620_45750[(2)] = inst_45555);

(statearr_45620_45750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (18))){
var inst_45566 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
var statearr_45625_45751 = state_45590__$1;
(statearr_45625_45751[(2)] = inst_45566);

(statearr_45625_45751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (8))){
var inst_45552 = cljs.core.async.close_BANG_.call(null,to);
var state_45590__$1 = state_45590;
var statearr_45626_45752 = state_45590__$1;
(statearr_45626_45752[(2)] = inst_45552);

(statearr_45626_45752[(1)] = (10));


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
});})(c__44867__auto__,jobs,results,process,async))
;
return ((function (switch__44548__auto__,c__44867__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_45633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45633[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__);

(statearr_45633[(1)] = (1));

return statearr_45633;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1 = (function (state_45590){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45634){if((e45634 instanceof Object)){
var ex__44553__auto__ = e45634;
var statearr_45635_45754 = state_45590;
(statearr_45635_45754[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45755 = state_45590;
state_45590 = G__45755;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__ = function(state_45590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1.call(this,state_45590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__,jobs,results,process,async))
})();
var state__44869__auto__ = (function (){var statearr_45637 = f__44868__auto__.call(null);
(statearr_45637[(6)] = c__44867__auto__);

return statearr_45637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__,jobs,results,process,async))
);

return c__44867__auto__;
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
var G__45758 = arguments.length;
switch (G__45758) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__45767 = arguments.length;
switch (G__45767) {
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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45794 = arguments.length;
switch (G__45794) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44867__auto___45879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___45879,tc,fc){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___45879,tc,fc){
return (function (state_45827){
var state_val_45828 = (state_45827[(1)]);
if((state_val_45828 === (7))){
var inst_45822 = (state_45827[(2)]);
var state_45827__$1 = state_45827;
var statearr_45829_45881 = state_45827__$1;
(statearr_45829_45881[(2)] = inst_45822);

(statearr_45829_45881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (1))){
var state_45827__$1 = state_45827;
var statearr_45831_45884 = state_45827__$1;
(statearr_45831_45884[(2)] = null);

(statearr_45831_45884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (4))){
var inst_45801 = (state_45827[(7)]);
var inst_45801__$1 = (state_45827[(2)]);
var inst_45802 = (inst_45801__$1 == null);
var state_45827__$1 = (function (){var statearr_45835 = state_45827;
(statearr_45835[(7)] = inst_45801__$1);

return statearr_45835;
})();
if(cljs.core.truth_(inst_45802)){
var statearr_45836_45886 = state_45827__$1;
(statearr_45836_45886[(1)] = (5));

} else {
var statearr_45837_45887 = state_45827__$1;
(statearr_45837_45887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (13))){
var state_45827__$1 = state_45827;
var statearr_45840_45888 = state_45827__$1;
(statearr_45840_45888[(2)] = null);

(statearr_45840_45888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (6))){
var inst_45801 = (state_45827[(7)]);
var inst_45808 = p.call(null,inst_45801);
var state_45827__$1 = state_45827;
if(cljs.core.truth_(inst_45808)){
var statearr_45842_45890 = state_45827__$1;
(statearr_45842_45890[(1)] = (9));

} else {
var statearr_45843_45891 = state_45827__$1;
(statearr_45843_45891[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (3))){
var inst_45824 = (state_45827[(2)]);
var state_45827__$1 = state_45827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45827__$1,inst_45824);
} else {
if((state_val_45828 === (12))){
var state_45827__$1 = state_45827;
var statearr_45845_45895 = state_45827__$1;
(statearr_45845_45895[(2)] = null);

(statearr_45845_45895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (2))){
var state_45827__$1 = state_45827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45827__$1,(4),ch);
} else {
if((state_val_45828 === (11))){
var inst_45801 = (state_45827[(7)]);
var inst_45812 = (state_45827[(2)]);
var state_45827__$1 = state_45827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45827__$1,(8),inst_45812,inst_45801);
} else {
if((state_val_45828 === (9))){
var state_45827__$1 = state_45827;
var statearr_45850_45896 = state_45827__$1;
(statearr_45850_45896[(2)] = tc);

(statearr_45850_45896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (5))){
var inst_45804 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45805 = cljs.core.async.close_BANG_.call(null,fc);
var state_45827__$1 = (function (){var statearr_45851 = state_45827;
(statearr_45851[(8)] = inst_45804);

return statearr_45851;
})();
var statearr_45852_45898 = state_45827__$1;
(statearr_45852_45898[(2)] = inst_45805);

(statearr_45852_45898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (14))){
var inst_45819 = (state_45827[(2)]);
var state_45827__$1 = state_45827;
var statearr_45854_45902 = state_45827__$1;
(statearr_45854_45902[(2)] = inst_45819);

(statearr_45854_45902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (10))){
var state_45827__$1 = state_45827;
var statearr_45855_45903 = state_45827__$1;
(statearr_45855_45903[(2)] = fc);

(statearr_45855_45903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45828 === (8))){
var inst_45814 = (state_45827[(2)]);
var state_45827__$1 = state_45827;
if(cljs.core.truth_(inst_45814)){
var statearr_45856_45904 = state_45827__$1;
(statearr_45856_45904[(1)] = (12));

} else {
var statearr_45858_45905 = state_45827__$1;
(statearr_45858_45905[(1)] = (13));

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
});})(c__44867__auto___45879,tc,fc))
;
return ((function (switch__44548__auto__,c__44867__auto___45879,tc,fc){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_45866 = [null,null,null,null,null,null,null,null,null];
(statearr_45866[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_45866[(1)] = (1));

return statearr_45866;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_45827){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45867){if((e45867 instanceof Object)){
var ex__44553__auto__ = e45867;
var statearr_45868_45910 = state_45827;
(statearr_45868_45910[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45911 = state_45827;
state_45827 = G__45911;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_45827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_45827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___45879,tc,fc))
})();
var state__44869__auto__ = (function (){var statearr_45870 = f__44868__auto__.call(null);
(statearr_45870[(6)] = c__44867__auto___45879);

return statearr_45870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___45879,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__){
return (function (state_45936){
var state_val_45937 = (state_45936[(1)]);
if((state_val_45937 === (7))){
var inst_45932 = (state_45936[(2)]);
var state_45936__$1 = state_45936;
var statearr_45939_45971 = state_45936__$1;
(statearr_45939_45971[(2)] = inst_45932);

(statearr_45939_45971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (1))){
var inst_45916 = init;
var state_45936__$1 = (function (){var statearr_45940 = state_45936;
(statearr_45940[(7)] = inst_45916);

return statearr_45940;
})();
var statearr_45943_45974 = state_45936__$1;
(statearr_45943_45974[(2)] = null);

(statearr_45943_45974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (4))){
var inst_45919 = (state_45936[(8)]);
var inst_45919__$1 = (state_45936[(2)]);
var inst_45920 = (inst_45919__$1 == null);
var state_45936__$1 = (function (){var statearr_45945 = state_45936;
(statearr_45945[(8)] = inst_45919__$1);

return statearr_45945;
})();
if(cljs.core.truth_(inst_45920)){
var statearr_45946_45976 = state_45936__$1;
(statearr_45946_45976[(1)] = (5));

} else {
var statearr_45947_45977 = state_45936__$1;
(statearr_45947_45977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (6))){
var inst_45919 = (state_45936[(8)]);
var inst_45916 = (state_45936[(7)]);
var inst_45923 = (state_45936[(9)]);
var inst_45923__$1 = f.call(null,inst_45916,inst_45919);
var inst_45924 = cljs.core.reduced_QMARK_.call(null,inst_45923__$1);
var state_45936__$1 = (function (){var statearr_45948 = state_45936;
(statearr_45948[(9)] = inst_45923__$1);

return statearr_45948;
})();
if(inst_45924){
var statearr_45949_45981 = state_45936__$1;
(statearr_45949_45981[(1)] = (8));

} else {
var statearr_45951_45983 = state_45936__$1;
(statearr_45951_45983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (3))){
var inst_45934 = (state_45936[(2)]);
var state_45936__$1 = state_45936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45936__$1,inst_45934);
} else {
if((state_val_45937 === (2))){
var state_45936__$1 = state_45936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45936__$1,(4),ch);
} else {
if((state_val_45937 === (9))){
var inst_45923 = (state_45936[(9)]);
var inst_45916 = inst_45923;
var state_45936__$1 = (function (){var statearr_45953 = state_45936;
(statearr_45953[(7)] = inst_45916);

return statearr_45953;
})();
var statearr_45955_45989 = state_45936__$1;
(statearr_45955_45989[(2)] = null);

(statearr_45955_45989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (5))){
var inst_45916 = (state_45936[(7)]);
var state_45936__$1 = state_45936;
var statearr_45957_45990 = state_45936__$1;
(statearr_45957_45990[(2)] = inst_45916);

(statearr_45957_45990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (10))){
var inst_45930 = (state_45936[(2)]);
var state_45936__$1 = state_45936;
var statearr_45958_45993 = state_45936__$1;
(statearr_45958_45993[(2)] = inst_45930);

(statearr_45958_45993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45937 === (8))){
var inst_45923 = (state_45936[(9)]);
var inst_45926 = cljs.core.deref.call(null,inst_45923);
var state_45936__$1 = state_45936;
var statearr_45959_45995 = state_45936__$1;
(statearr_45959_45995[(2)] = inst_45926);

(statearr_45959_45995[(1)] = (10));


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
});})(c__44867__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44549__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44549__auto____0 = (function (){
var statearr_45961 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45961[(0)] = cljs$core$async$reduce_$_state_machine__44549__auto__);

(statearr_45961[(1)] = (1));

return statearr_45961;
});
var cljs$core$async$reduce_$_state_machine__44549__auto____1 = (function (state_45936){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_45936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e45963){if((e45963 instanceof Object)){
var ex__44553__auto__ = e45963;
var statearr_45965_45998 = state_45936;
(statearr_45965_45998[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46001 = state_45936;
state_45936 = G__46001;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44549__auto__ = function(state_45936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44549__auto____1.call(this,state_45936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44549__auto____0;
cljs$core$async$reduce_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44549__auto____1;
return cljs$core$async$reduce_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__))
})();
var state__44869__auto__ = (function (){var statearr_45969 = f__44868__auto__.call(null);
(statearr_45969[(6)] = c__44867__auto__);

return statearr_45969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__))
);

return c__44867__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__,f__$1){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__,f__$1){
return (function (state_46011){
var state_val_46012 = (state_46011[(1)]);
if((state_val_46012 === (1))){
var inst_46006 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_46011__$1 = state_46011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46011__$1,(2),inst_46006);
} else {
if((state_val_46012 === (2))){
var inst_46008 = (state_46011[(2)]);
var inst_46009 = f__$1.call(null,inst_46008);
var state_46011__$1 = state_46011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46011__$1,inst_46009);
} else {
return null;
}
}
});})(c__44867__auto__,f__$1))
;
return ((function (switch__44548__auto__,c__44867__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44549__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44549__auto____0 = (function (){
var statearr_46016 = [null,null,null,null,null,null,null];
(statearr_46016[(0)] = cljs$core$async$transduce_$_state_machine__44549__auto__);

(statearr_46016[(1)] = (1));

return statearr_46016;
});
var cljs$core$async$transduce_$_state_machine__44549__auto____1 = (function (state_46011){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_46011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e46017){if((e46017 instanceof Object)){
var ex__44553__auto__ = e46017;
var statearr_46018_46028 = state_46011;
(statearr_46018_46028[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46029 = state_46011;
state_46011 = G__46029;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44549__auto__ = function(state_46011){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44549__auto____1.call(this,state_46011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44549__auto____0;
cljs$core$async$transduce_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44549__auto____1;
return cljs$core$async$transduce_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__,f__$1))
})();
var state__44869__auto__ = (function (){var statearr_46020 = f__44868__auto__.call(null);
(statearr_46020[(6)] = c__44867__auto__);

return statearr_46020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__,f__$1))
);

return c__44867__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46032 = arguments.length;
switch (G__46032) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__){
return (function (state_46060){
var state_val_46061 = (state_46060[(1)]);
if((state_val_46061 === (7))){
var inst_46041 = (state_46060[(2)]);
var state_46060__$1 = state_46060;
var statearr_46062_46101 = state_46060__$1;
(statearr_46062_46101[(2)] = inst_46041);

(statearr_46062_46101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (1))){
var inst_46034 = cljs.core.seq.call(null,coll);
var inst_46035 = inst_46034;
var state_46060__$1 = (function (){var statearr_46063 = state_46060;
(statearr_46063[(7)] = inst_46035);

return statearr_46063;
})();
var statearr_46064_46102 = state_46060__$1;
(statearr_46064_46102[(2)] = null);

(statearr_46064_46102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (4))){
var inst_46035 = (state_46060[(7)]);
var inst_46039 = cljs.core.first.call(null,inst_46035);
var state_46060__$1 = state_46060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46060__$1,(7),ch,inst_46039);
} else {
if((state_val_46061 === (13))){
var inst_46054 = (state_46060[(2)]);
var state_46060__$1 = state_46060;
var statearr_46066_46103 = state_46060__$1;
(statearr_46066_46103[(2)] = inst_46054);

(statearr_46066_46103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (6))){
var inst_46044 = (state_46060[(2)]);
var state_46060__$1 = state_46060;
if(cljs.core.truth_(inst_46044)){
var statearr_46067_46106 = state_46060__$1;
(statearr_46067_46106[(1)] = (8));

} else {
var statearr_46068_46107 = state_46060__$1;
(statearr_46068_46107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (3))){
var inst_46058 = (state_46060[(2)]);
var state_46060__$1 = state_46060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46060__$1,inst_46058);
} else {
if((state_val_46061 === (12))){
var state_46060__$1 = state_46060;
var statearr_46069_46109 = state_46060__$1;
(statearr_46069_46109[(2)] = null);

(statearr_46069_46109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (2))){
var inst_46035 = (state_46060[(7)]);
var state_46060__$1 = state_46060;
if(cljs.core.truth_(inst_46035)){
var statearr_46070_46110 = state_46060__$1;
(statearr_46070_46110[(1)] = (4));

} else {
var statearr_46071_46111 = state_46060__$1;
(statearr_46071_46111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (11))){
var inst_46051 = cljs.core.async.close_BANG_.call(null,ch);
var state_46060__$1 = state_46060;
var statearr_46072_46112 = state_46060__$1;
(statearr_46072_46112[(2)] = inst_46051);

(statearr_46072_46112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (9))){
var state_46060__$1 = state_46060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46073_46115 = state_46060__$1;
(statearr_46073_46115[(1)] = (11));

} else {
var statearr_46074_46117 = state_46060__$1;
(statearr_46074_46117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (5))){
var inst_46035 = (state_46060[(7)]);
var state_46060__$1 = state_46060;
var statearr_46076_46119 = state_46060__$1;
(statearr_46076_46119[(2)] = inst_46035);

(statearr_46076_46119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (10))){
var inst_46056 = (state_46060[(2)]);
var state_46060__$1 = state_46060;
var statearr_46077_46120 = state_46060__$1;
(statearr_46077_46120[(2)] = inst_46056);

(statearr_46077_46120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46061 === (8))){
var inst_46035 = (state_46060[(7)]);
var inst_46047 = cljs.core.next.call(null,inst_46035);
var inst_46035__$1 = inst_46047;
var state_46060__$1 = (function (){var statearr_46078 = state_46060;
(statearr_46078[(7)] = inst_46035__$1);

return statearr_46078;
})();
var statearr_46079_46121 = state_46060__$1;
(statearr_46079_46121[(2)] = null);

(statearr_46079_46121[(1)] = (2));


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
});})(c__44867__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_46080 = [null,null,null,null,null,null,null,null];
(statearr_46080[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_46080[(1)] = (1));

return statearr_46080;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_46060){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_46060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e46081){if((e46081 instanceof Object)){
var ex__44553__auto__ = e46081;
var statearr_46084_46123 = state_46060;
(statearr_46084_46123[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46124 = state_46060;
state_46060 = G__46124;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_46060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_46060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__))
})();
var state__44869__auto__ = (function (){var statearr_46086 = f__44868__auto__.call(null);
(statearr_46086[(6)] = c__44867__auto__);

return statearr_46086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__))
);

return c__44867__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42100__auto__ = (((_ == null))?null:_);
var m__42101__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,_);
} else {
var m__42101__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42101__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,ch);
} else {
var m__42101__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m);
} else {
var m__42101__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async46142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46142 = (function (ch,cs,meta46143){
this.ch = ch;
this.cs = cs;
this.meta46143 = meta46143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46144,meta46143__$1){
var self__ = this;
var _46144__$1 = this;
return (new cljs.core.async.t_cljs$core$async46142(self__.ch,self__.cs,meta46143__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46144){
var self__ = this;
var _46144__$1 = this;
return self__.meta46143;
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46143","meta46143",-1119239613,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46142";

cljs.core.async.t_cljs$core$async46142.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async46142");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async46142 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46142(ch__$1,cs__$1,meta46143){
return (new cljs.core.async.t_cljs$core$async46142(ch__$1,cs__$1,meta46143));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46142(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44867__auto___46464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___46464,cs,m,dchan,dctr,done){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___46464,cs,m,dchan,dctr,done){
return (function (state_46294){
var state_val_46295 = (state_46294[(1)]);
if((state_val_46295 === (7))){
var inst_46290 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46297_46468 = state_46294__$1;
(statearr_46297_46468[(2)] = inst_46290);

(statearr_46297_46468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (20))){
var inst_46186 = (state_46294[(7)]);
var inst_46198 = cljs.core.first.call(null,inst_46186);
var inst_46199 = cljs.core.nth.call(null,inst_46198,(0),null);
var inst_46200 = cljs.core.nth.call(null,inst_46198,(1),null);
var state_46294__$1 = (function (){var statearr_46299 = state_46294;
(statearr_46299[(8)] = inst_46199);

return statearr_46299;
})();
if(cljs.core.truth_(inst_46200)){
var statearr_46300_46472 = state_46294__$1;
(statearr_46300_46472[(1)] = (22));

} else {
var statearr_46301_46473 = state_46294__$1;
(statearr_46301_46473[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (27))){
var inst_46236 = (state_46294[(9)]);
var inst_46229 = (state_46294[(10)]);
var inst_46231 = (state_46294[(11)]);
var inst_46155 = (state_46294[(12)]);
var inst_46236__$1 = cljs.core._nth.call(null,inst_46229,inst_46231);
var inst_46237 = cljs.core.async.put_BANG_.call(null,inst_46236__$1,inst_46155,done);
var state_46294__$1 = (function (){var statearr_46302 = state_46294;
(statearr_46302[(9)] = inst_46236__$1);

return statearr_46302;
})();
if(cljs.core.truth_(inst_46237)){
var statearr_46303_46477 = state_46294__$1;
(statearr_46303_46477[(1)] = (30));

} else {
var statearr_46304_46478 = state_46294__$1;
(statearr_46304_46478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (1))){
var state_46294__$1 = state_46294;
var statearr_46305_46482 = state_46294__$1;
(statearr_46305_46482[(2)] = null);

(statearr_46305_46482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (24))){
var inst_46186 = (state_46294[(7)]);
var inst_46206 = (state_46294[(2)]);
var inst_46207 = cljs.core.next.call(null,inst_46186);
var inst_46164 = inst_46207;
var inst_46165 = null;
var inst_46166 = (0);
var inst_46167 = (0);
var state_46294__$1 = (function (){var statearr_46307 = state_46294;
(statearr_46307[(13)] = inst_46164);

(statearr_46307[(14)] = inst_46206);

(statearr_46307[(15)] = inst_46165);

(statearr_46307[(16)] = inst_46167);

(statearr_46307[(17)] = inst_46166);

return statearr_46307;
})();
var statearr_46308_46484 = state_46294__$1;
(statearr_46308_46484[(2)] = null);

(statearr_46308_46484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (39))){
var state_46294__$1 = state_46294;
var statearr_46312_46488 = state_46294__$1;
(statearr_46312_46488[(2)] = null);

(statearr_46312_46488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (4))){
var inst_46155 = (state_46294[(12)]);
var inst_46155__$1 = (state_46294[(2)]);
var inst_46156 = (inst_46155__$1 == null);
var state_46294__$1 = (function (){var statearr_46314 = state_46294;
(statearr_46314[(12)] = inst_46155__$1);

return statearr_46314;
})();
if(cljs.core.truth_(inst_46156)){
var statearr_46315_46492 = state_46294__$1;
(statearr_46315_46492[(1)] = (5));

} else {
var statearr_46316_46493 = state_46294__$1;
(statearr_46316_46493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (15))){
var inst_46164 = (state_46294[(13)]);
var inst_46165 = (state_46294[(15)]);
var inst_46167 = (state_46294[(16)]);
var inst_46166 = (state_46294[(17)]);
var inst_46182 = (state_46294[(2)]);
var inst_46183 = (inst_46167 + (1));
var tmp46309 = inst_46164;
var tmp46310 = inst_46165;
var tmp46311 = inst_46166;
var inst_46164__$1 = tmp46309;
var inst_46165__$1 = tmp46310;
var inst_46166__$1 = tmp46311;
var inst_46167__$1 = inst_46183;
var state_46294__$1 = (function (){var statearr_46320 = state_46294;
(statearr_46320[(18)] = inst_46182);

(statearr_46320[(13)] = inst_46164__$1);

(statearr_46320[(15)] = inst_46165__$1);

(statearr_46320[(16)] = inst_46167__$1);

(statearr_46320[(17)] = inst_46166__$1);

return statearr_46320;
})();
var statearr_46322_46497 = state_46294__$1;
(statearr_46322_46497[(2)] = null);

(statearr_46322_46497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (21))){
var inst_46210 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46326_46499 = state_46294__$1;
(statearr_46326_46499[(2)] = inst_46210);

(statearr_46326_46499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (31))){
var inst_46236 = (state_46294[(9)]);
var inst_46240 = done.call(null,null);
var inst_46241 = cljs.core.async.untap_STAR_.call(null,m,inst_46236);
var state_46294__$1 = (function (){var statearr_46330 = state_46294;
(statearr_46330[(19)] = inst_46240);

return statearr_46330;
})();
var statearr_46331_46501 = state_46294__$1;
(statearr_46331_46501[(2)] = inst_46241);

(statearr_46331_46501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (32))){
var inst_46230 = (state_46294[(20)]);
var inst_46229 = (state_46294[(10)]);
var inst_46231 = (state_46294[(11)]);
var inst_46228 = (state_46294[(21)]);
var inst_46243 = (state_46294[(2)]);
var inst_46244 = (inst_46231 + (1));
var tmp46323 = inst_46230;
var tmp46324 = inst_46229;
var tmp46325 = inst_46228;
var inst_46228__$1 = tmp46325;
var inst_46229__$1 = tmp46324;
var inst_46230__$1 = tmp46323;
var inst_46231__$1 = inst_46244;
var state_46294__$1 = (function (){var statearr_46332 = state_46294;
(statearr_46332[(20)] = inst_46230__$1);

(statearr_46332[(10)] = inst_46229__$1);

(statearr_46332[(22)] = inst_46243);

(statearr_46332[(11)] = inst_46231__$1);

(statearr_46332[(21)] = inst_46228__$1);

return statearr_46332;
})();
var statearr_46334_46506 = state_46294__$1;
(statearr_46334_46506[(2)] = null);

(statearr_46334_46506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (40))){
var inst_46260 = (state_46294[(23)]);
var inst_46265 = done.call(null,null);
var inst_46266 = cljs.core.async.untap_STAR_.call(null,m,inst_46260);
var state_46294__$1 = (function (){var statearr_46336 = state_46294;
(statearr_46336[(24)] = inst_46265);

return statearr_46336;
})();
var statearr_46338_46508 = state_46294__$1;
(statearr_46338_46508[(2)] = inst_46266);

(statearr_46338_46508[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (33))){
var inst_46247 = (state_46294[(25)]);
var inst_46251 = cljs.core.chunked_seq_QMARK_.call(null,inst_46247);
var state_46294__$1 = state_46294;
if(inst_46251){
var statearr_46340_46515 = state_46294__$1;
(statearr_46340_46515[(1)] = (36));

} else {
var statearr_46341_46516 = state_46294__$1;
(statearr_46341_46516[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (13))){
var inst_46176 = (state_46294[(26)]);
var inst_46179 = cljs.core.async.close_BANG_.call(null,inst_46176);
var state_46294__$1 = state_46294;
var statearr_46342_46517 = state_46294__$1;
(statearr_46342_46517[(2)] = inst_46179);

(statearr_46342_46517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (22))){
var inst_46199 = (state_46294[(8)]);
var inst_46203 = cljs.core.async.close_BANG_.call(null,inst_46199);
var state_46294__$1 = state_46294;
var statearr_46345_46520 = state_46294__$1;
(statearr_46345_46520[(2)] = inst_46203);

(statearr_46345_46520[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (36))){
var inst_46247 = (state_46294[(25)]);
var inst_46255 = cljs.core.chunk_first.call(null,inst_46247);
var inst_46256 = cljs.core.chunk_rest.call(null,inst_46247);
var inst_46257 = cljs.core.count.call(null,inst_46255);
var inst_46228 = inst_46256;
var inst_46229 = inst_46255;
var inst_46230 = inst_46257;
var inst_46231 = (0);
var state_46294__$1 = (function (){var statearr_46346 = state_46294;
(statearr_46346[(20)] = inst_46230);

(statearr_46346[(10)] = inst_46229);

(statearr_46346[(11)] = inst_46231);

(statearr_46346[(21)] = inst_46228);

return statearr_46346;
})();
var statearr_46349_46525 = state_46294__$1;
(statearr_46349_46525[(2)] = null);

(statearr_46349_46525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (41))){
var inst_46247 = (state_46294[(25)]);
var inst_46268 = (state_46294[(2)]);
var inst_46269 = cljs.core.next.call(null,inst_46247);
var inst_46228 = inst_46269;
var inst_46229 = null;
var inst_46230 = (0);
var inst_46231 = (0);
var state_46294__$1 = (function (){var statearr_46351 = state_46294;
(statearr_46351[(20)] = inst_46230);

(statearr_46351[(27)] = inst_46268);

(statearr_46351[(10)] = inst_46229);

(statearr_46351[(11)] = inst_46231);

(statearr_46351[(21)] = inst_46228);

return statearr_46351;
})();
var statearr_46352_46529 = state_46294__$1;
(statearr_46352_46529[(2)] = null);

(statearr_46352_46529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (43))){
var state_46294__$1 = state_46294;
var statearr_46354_46530 = state_46294__$1;
(statearr_46354_46530[(2)] = null);

(statearr_46354_46530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (29))){
var inst_46277 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46355_46533 = state_46294__$1;
(statearr_46355_46533[(2)] = inst_46277);

(statearr_46355_46533[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (44))){
var inst_46287 = (state_46294[(2)]);
var state_46294__$1 = (function (){var statearr_46358 = state_46294;
(statearr_46358[(28)] = inst_46287);

return statearr_46358;
})();
var statearr_46360_46535 = state_46294__$1;
(statearr_46360_46535[(2)] = null);

(statearr_46360_46535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (6))){
var inst_46220 = (state_46294[(29)]);
var inst_46219 = cljs.core.deref.call(null,cs);
var inst_46220__$1 = cljs.core.keys.call(null,inst_46219);
var inst_46221 = cljs.core.count.call(null,inst_46220__$1);
var inst_46222 = cljs.core.reset_BANG_.call(null,dctr,inst_46221);
var inst_46227 = cljs.core.seq.call(null,inst_46220__$1);
var inst_46228 = inst_46227;
var inst_46229 = null;
var inst_46230 = (0);
var inst_46231 = (0);
var state_46294__$1 = (function (){var statearr_46361 = state_46294;
(statearr_46361[(20)] = inst_46230);

(statearr_46361[(10)] = inst_46229);

(statearr_46361[(30)] = inst_46222);

(statearr_46361[(29)] = inst_46220__$1);

(statearr_46361[(11)] = inst_46231);

(statearr_46361[(21)] = inst_46228);

return statearr_46361;
})();
var statearr_46362_46540 = state_46294__$1;
(statearr_46362_46540[(2)] = null);

(statearr_46362_46540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (28))){
var inst_46247 = (state_46294[(25)]);
var inst_46228 = (state_46294[(21)]);
var inst_46247__$1 = cljs.core.seq.call(null,inst_46228);
var state_46294__$1 = (function (){var statearr_46364 = state_46294;
(statearr_46364[(25)] = inst_46247__$1);

return statearr_46364;
})();
if(inst_46247__$1){
var statearr_46365_46541 = state_46294__$1;
(statearr_46365_46541[(1)] = (33));

} else {
var statearr_46368_46542 = state_46294__$1;
(statearr_46368_46542[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (25))){
var inst_46230 = (state_46294[(20)]);
var inst_46231 = (state_46294[(11)]);
var inst_46233 = (inst_46231 < inst_46230);
var inst_46234 = inst_46233;
var state_46294__$1 = state_46294;
if(cljs.core.truth_(inst_46234)){
var statearr_46372_46544 = state_46294__$1;
(statearr_46372_46544[(1)] = (27));

} else {
var statearr_46373_46545 = state_46294__$1;
(statearr_46373_46545[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (34))){
var state_46294__$1 = state_46294;
var statearr_46374_46546 = state_46294__$1;
(statearr_46374_46546[(2)] = null);

(statearr_46374_46546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (17))){
var state_46294__$1 = state_46294;
var statearr_46375_46555 = state_46294__$1;
(statearr_46375_46555[(2)] = null);

(statearr_46375_46555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (3))){
var inst_46292 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46294__$1,inst_46292);
} else {
if((state_val_46295 === (12))){
var inst_46215 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46377_46559 = state_46294__$1;
(statearr_46377_46559[(2)] = inst_46215);

(statearr_46377_46559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (2))){
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46294__$1,(4),ch);
} else {
if((state_val_46295 === (23))){
var state_46294__$1 = state_46294;
var statearr_46380_46562 = state_46294__$1;
(statearr_46380_46562[(2)] = null);

(statearr_46380_46562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (35))){
var inst_46275 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46382_46563 = state_46294__$1;
(statearr_46382_46563[(2)] = inst_46275);

(statearr_46382_46563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (19))){
var inst_46186 = (state_46294[(7)]);
var inst_46190 = cljs.core.chunk_first.call(null,inst_46186);
var inst_46191 = cljs.core.chunk_rest.call(null,inst_46186);
var inst_46192 = cljs.core.count.call(null,inst_46190);
var inst_46164 = inst_46191;
var inst_46165 = inst_46190;
var inst_46166 = inst_46192;
var inst_46167 = (0);
var state_46294__$1 = (function (){var statearr_46384 = state_46294;
(statearr_46384[(13)] = inst_46164);

(statearr_46384[(15)] = inst_46165);

(statearr_46384[(16)] = inst_46167);

(statearr_46384[(17)] = inst_46166);

return statearr_46384;
})();
var statearr_46388_46565 = state_46294__$1;
(statearr_46388_46565[(2)] = null);

(statearr_46388_46565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (11))){
var inst_46164 = (state_46294[(13)]);
var inst_46186 = (state_46294[(7)]);
var inst_46186__$1 = cljs.core.seq.call(null,inst_46164);
var state_46294__$1 = (function (){var statearr_46391 = state_46294;
(statearr_46391[(7)] = inst_46186__$1);

return statearr_46391;
})();
if(inst_46186__$1){
var statearr_46392_46570 = state_46294__$1;
(statearr_46392_46570[(1)] = (16));

} else {
var statearr_46393_46571 = state_46294__$1;
(statearr_46393_46571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (9))){
var inst_46217 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46394_46572 = state_46294__$1;
(statearr_46394_46572[(2)] = inst_46217);

(statearr_46394_46572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (5))){
var inst_46162 = cljs.core.deref.call(null,cs);
var inst_46163 = cljs.core.seq.call(null,inst_46162);
var inst_46164 = inst_46163;
var inst_46165 = null;
var inst_46166 = (0);
var inst_46167 = (0);
var state_46294__$1 = (function (){var statearr_46396 = state_46294;
(statearr_46396[(13)] = inst_46164);

(statearr_46396[(15)] = inst_46165);

(statearr_46396[(16)] = inst_46167);

(statearr_46396[(17)] = inst_46166);

return statearr_46396;
})();
var statearr_46397_46573 = state_46294__$1;
(statearr_46397_46573[(2)] = null);

(statearr_46397_46573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (14))){
var state_46294__$1 = state_46294;
var statearr_46398_46575 = state_46294__$1;
(statearr_46398_46575[(2)] = null);

(statearr_46398_46575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (45))){
var inst_46284 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46402_46577 = state_46294__$1;
(statearr_46402_46577[(2)] = inst_46284);

(statearr_46402_46577[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (26))){
var inst_46220 = (state_46294[(29)]);
var inst_46279 = (state_46294[(2)]);
var inst_46280 = cljs.core.seq.call(null,inst_46220);
var state_46294__$1 = (function (){var statearr_46404 = state_46294;
(statearr_46404[(31)] = inst_46279);

return statearr_46404;
})();
if(inst_46280){
var statearr_46406_46582 = state_46294__$1;
(statearr_46406_46582[(1)] = (42));

} else {
var statearr_46407_46583 = state_46294__$1;
(statearr_46407_46583[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (16))){
var inst_46186 = (state_46294[(7)]);
var inst_46188 = cljs.core.chunked_seq_QMARK_.call(null,inst_46186);
var state_46294__$1 = state_46294;
if(inst_46188){
var statearr_46408_46588 = state_46294__$1;
(statearr_46408_46588[(1)] = (19));

} else {
var statearr_46409_46589 = state_46294__$1;
(statearr_46409_46589[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (38))){
var inst_46272 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46411_46592 = state_46294__$1;
(statearr_46411_46592[(2)] = inst_46272);

(statearr_46411_46592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (30))){
var state_46294__$1 = state_46294;
var statearr_46412_46593 = state_46294__$1;
(statearr_46412_46593[(2)] = null);

(statearr_46412_46593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (10))){
var inst_46165 = (state_46294[(15)]);
var inst_46167 = (state_46294[(16)]);
var inst_46175 = cljs.core._nth.call(null,inst_46165,inst_46167);
var inst_46176 = cljs.core.nth.call(null,inst_46175,(0),null);
var inst_46177 = cljs.core.nth.call(null,inst_46175,(1),null);
var state_46294__$1 = (function (){var statearr_46414 = state_46294;
(statearr_46414[(26)] = inst_46176);

return statearr_46414;
})();
if(cljs.core.truth_(inst_46177)){
var statearr_46416_46595 = state_46294__$1;
(statearr_46416_46595[(1)] = (13));

} else {
var statearr_46418_46596 = state_46294__$1;
(statearr_46418_46596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (18))){
var inst_46213 = (state_46294[(2)]);
var state_46294__$1 = state_46294;
var statearr_46421_46597 = state_46294__$1;
(statearr_46421_46597[(2)] = inst_46213);

(statearr_46421_46597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (42))){
var state_46294__$1 = state_46294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46294__$1,(45),dchan);
} else {
if((state_val_46295 === (37))){
var inst_46247 = (state_46294[(25)]);
var inst_46260 = (state_46294[(23)]);
var inst_46155 = (state_46294[(12)]);
var inst_46260__$1 = cljs.core.first.call(null,inst_46247);
var inst_46261 = cljs.core.async.put_BANG_.call(null,inst_46260__$1,inst_46155,done);
var state_46294__$1 = (function (){var statearr_46423 = state_46294;
(statearr_46423[(23)] = inst_46260__$1);

return statearr_46423;
})();
if(cljs.core.truth_(inst_46261)){
var statearr_46424_46600 = state_46294__$1;
(statearr_46424_46600[(1)] = (39));

} else {
var statearr_46425_46601 = state_46294__$1;
(statearr_46425_46601[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46295 === (8))){
var inst_46167 = (state_46294[(16)]);
var inst_46166 = (state_46294[(17)]);
var inst_46169 = (inst_46167 < inst_46166);
var inst_46170 = inst_46169;
var state_46294__$1 = state_46294;
if(cljs.core.truth_(inst_46170)){
var statearr_46434_46602 = state_46294__$1;
(statearr_46434_46602[(1)] = (10));

} else {
var statearr_46435_46603 = state_46294__$1;
(statearr_46435_46603[(1)] = (11));

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
});})(c__44867__auto___46464,cs,m,dchan,dctr,done))
;
return ((function (switch__44548__auto__,c__44867__auto___46464,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44549__auto__ = null;
var cljs$core$async$mult_$_state_machine__44549__auto____0 = (function (){
var statearr_46439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46439[(0)] = cljs$core$async$mult_$_state_machine__44549__auto__);

(statearr_46439[(1)] = (1));

return statearr_46439;
});
var cljs$core$async$mult_$_state_machine__44549__auto____1 = (function (state_46294){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_46294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e46441){if((e46441 instanceof Object)){
var ex__44553__auto__ = e46441;
var statearr_46442_46605 = state_46294;
(statearr_46442_46605[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46606 = state_46294;
state_46294 = G__46606;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44549__auto__ = function(state_46294){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44549__auto____1.call(this,state_46294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44549__auto____0;
cljs$core$async$mult_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44549__auto____1;
return cljs$core$async$mult_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___46464,cs,m,dchan,dctr,done))
})();
var state__44869__auto__ = (function (){var statearr_46447 = f__44868__auto__.call(null);
(statearr_46447[(6)] = c__44867__auto___46464);

return statearr_46447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___46464,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46608 = arguments.length;
switch (G__46608) {
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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,ch);
} else {
var m__42101__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,ch);
} else {
var m__42101__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m);
} else {
var m__42101__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,state_map);
} else {
var m__42101__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42100__auto__ = (((m == null))?null:m);
var m__42101__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,m,mode);
} else {
var m__42101__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46645 = arguments.length;
var i__42647__auto___46646 = (0);
while(true){
if((i__42647__auto___46646 < len__42646__auto___46645)){
args__42653__auto__.push((arguments[i__42647__auto___46646]));

var G__46647 = (i__42647__auto___46646 + (1));
i__42647__auto___46646 = G__46647;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((3) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42654__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46631){
var map__46632 = p__46631;
var map__46632__$1 = ((((!((map__46632 == null)))?((((map__46632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46632):map__46632);
var opts = map__46632__$1;
var statearr_46639_46652 = state;
(statearr_46639_46652[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__46632,map__46632__$1,opts){
return (function (val){
var statearr_46640_46653 = state;
(statearr_46640_46653[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46632,map__46632__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_46641_46654 = state;
(statearr_46641_46654[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46627){
var G__46628 = cljs.core.first.call(null,seq46627);
var seq46627__$1 = cljs.core.next.call(null,seq46627);
var G__46629 = cljs.core.first.call(null,seq46627__$1);
var seq46627__$2 = cljs.core.next.call(null,seq46627__$1);
var G__46630 = cljs.core.first.call(null,seq46627__$2);
var seq46627__$3 = cljs.core.next.call(null,seq46627__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46628,G__46629,G__46630,seq46627__$3);
});

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
if(typeof cljs.core.async.t_cljs$core$async46661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46661 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46662){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46662 = meta46662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46663,meta46662__$1){
var self__ = this;
var _46663__$1 = this;
return (new cljs.core.async.t_cljs$core$async46661(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46662__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46663){
var self__ = this;
var _46663__$1 = this;
return self__.meta46662;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46662","meta46662",634591693,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46661";

cljs.core.async.t_cljs$core$async46661.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async46661");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46661 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46661(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46662){
return (new cljs.core.async.t_cljs$core$async46661(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46662));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46661(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44867__auto___46875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46780){
var state_val_46781 = (state_46780[(1)]);
if((state_val_46781 === (7))){
var inst_46684 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46782_46876 = state_46780__$1;
(statearr_46782_46876[(2)] = inst_46684);

(statearr_46782_46876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (20))){
var inst_46697 = (state_46780[(7)]);
var state_46780__$1 = state_46780;
var statearr_46783_46880 = state_46780__$1;
(statearr_46783_46880[(2)] = inst_46697);

(statearr_46783_46880[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (27))){
var state_46780__$1 = state_46780;
var statearr_46784_46881 = state_46780__$1;
(statearr_46784_46881[(2)] = null);

(statearr_46784_46881[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (1))){
var inst_46671 = (state_46780[(8)]);
var inst_46671__$1 = calc_state.call(null);
var inst_46673 = (inst_46671__$1 == null);
var inst_46674 = cljs.core.not.call(null,inst_46673);
var state_46780__$1 = (function (){var statearr_46785 = state_46780;
(statearr_46785[(8)] = inst_46671__$1);

return statearr_46785;
})();
if(inst_46674){
var statearr_46786_46882 = state_46780__$1;
(statearr_46786_46882[(1)] = (2));

} else {
var statearr_46787_46883 = state_46780__$1;
(statearr_46787_46883[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (24))){
var inst_46733 = (state_46780[(9)]);
var inst_46724 = (state_46780[(10)]);
var inst_46751 = (state_46780[(11)]);
var inst_46751__$1 = inst_46724.call(null,inst_46733);
var state_46780__$1 = (function (){var statearr_46788 = state_46780;
(statearr_46788[(11)] = inst_46751__$1);

return statearr_46788;
})();
if(cljs.core.truth_(inst_46751__$1)){
var statearr_46789_46884 = state_46780__$1;
(statearr_46789_46884[(1)] = (29));

} else {
var statearr_46790_46885 = state_46780__$1;
(statearr_46790_46885[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (4))){
var inst_46687 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46687)){
var statearr_46791_46886 = state_46780__$1;
(statearr_46791_46886[(1)] = (8));

} else {
var statearr_46792_46887 = state_46780__$1;
(statearr_46792_46887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (15))){
var inst_46718 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46718)){
var statearr_46793_46888 = state_46780__$1;
(statearr_46793_46888[(1)] = (19));

} else {
var statearr_46794_46889 = state_46780__$1;
(statearr_46794_46889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (21))){
var inst_46723 = (state_46780[(12)]);
var inst_46723__$1 = (state_46780[(2)]);
var inst_46724 = cljs.core.get.call(null,inst_46723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46725 = cljs.core.get.call(null,inst_46723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46726 = cljs.core.get.call(null,inst_46723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46780__$1 = (function (){var statearr_46795 = state_46780;
(statearr_46795[(10)] = inst_46724);

(statearr_46795[(12)] = inst_46723__$1);

(statearr_46795[(13)] = inst_46725);

return statearr_46795;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46780__$1,(22),inst_46726);
} else {
if((state_val_46781 === (31))){
var inst_46759 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46759)){
var statearr_46799_46890 = state_46780__$1;
(statearr_46799_46890[(1)] = (32));

} else {
var statearr_46800_46891 = state_46780__$1;
(statearr_46800_46891[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (32))){
var inst_46732 = (state_46780[(14)]);
var state_46780__$1 = state_46780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46780__$1,(35),out,inst_46732);
} else {
if((state_val_46781 === (33))){
var inst_46723 = (state_46780[(12)]);
var inst_46697 = inst_46723;
var state_46780__$1 = (function (){var statearr_46801 = state_46780;
(statearr_46801[(7)] = inst_46697);

return statearr_46801;
})();
var statearr_46802_46893 = state_46780__$1;
(statearr_46802_46893[(2)] = null);

(statearr_46802_46893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (13))){
var inst_46697 = (state_46780[(7)]);
var inst_46705 = inst_46697.cljs$lang$protocol_mask$partition0$;
var inst_46706 = (inst_46705 & (64));
var inst_46707 = inst_46697.cljs$core$ISeq$;
var inst_46710 = (cljs.core.PROTOCOL_SENTINEL === inst_46707);
var inst_46711 = (inst_46706) || (inst_46710);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46711)){
var statearr_46803_46896 = state_46780__$1;
(statearr_46803_46896[(1)] = (16));

} else {
var statearr_46804_46897 = state_46780__$1;
(statearr_46804_46897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (22))){
var inst_46732 = (state_46780[(14)]);
var inst_46733 = (state_46780[(9)]);
var inst_46731 = (state_46780[(2)]);
var inst_46732__$1 = cljs.core.nth.call(null,inst_46731,(0),null);
var inst_46733__$1 = cljs.core.nth.call(null,inst_46731,(1),null);
var inst_46737 = (inst_46732__$1 == null);
var inst_46738 = cljs.core._EQ_.call(null,inst_46733__$1,change);
var inst_46739 = (inst_46737) || (inst_46738);
var state_46780__$1 = (function (){var statearr_46810 = state_46780;
(statearr_46810[(14)] = inst_46732__$1);

(statearr_46810[(9)] = inst_46733__$1);

return statearr_46810;
})();
if(cljs.core.truth_(inst_46739)){
var statearr_46814_46898 = state_46780__$1;
(statearr_46814_46898[(1)] = (23));

} else {
var statearr_46815_46899 = state_46780__$1;
(statearr_46815_46899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (36))){
var inst_46723 = (state_46780[(12)]);
var inst_46697 = inst_46723;
var state_46780__$1 = (function (){var statearr_46816 = state_46780;
(statearr_46816[(7)] = inst_46697);

return statearr_46816;
})();
var statearr_46817_46900 = state_46780__$1;
(statearr_46817_46900[(2)] = null);

(statearr_46817_46900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (29))){
var inst_46751 = (state_46780[(11)]);
var state_46780__$1 = state_46780;
var statearr_46818_46901 = state_46780__$1;
(statearr_46818_46901[(2)] = inst_46751);

(statearr_46818_46901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (6))){
var state_46780__$1 = state_46780;
var statearr_46819_46902 = state_46780__$1;
(statearr_46819_46902[(2)] = false);

(statearr_46819_46902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (28))){
var inst_46746 = (state_46780[(2)]);
var inst_46747 = calc_state.call(null);
var inst_46697 = inst_46747;
var state_46780__$1 = (function (){var statearr_46820 = state_46780;
(statearr_46820[(7)] = inst_46697);

(statearr_46820[(15)] = inst_46746);

return statearr_46820;
})();
var statearr_46821_46903 = state_46780__$1;
(statearr_46821_46903[(2)] = null);

(statearr_46821_46903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (25))){
var inst_46773 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46822_46904 = state_46780__$1;
(statearr_46822_46904[(2)] = inst_46773);

(statearr_46822_46904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (34))){
var inst_46771 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46823_46905 = state_46780__$1;
(statearr_46823_46905[(2)] = inst_46771);

(statearr_46823_46905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (17))){
var state_46780__$1 = state_46780;
var statearr_46824_46906 = state_46780__$1;
(statearr_46824_46906[(2)] = false);

(statearr_46824_46906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (3))){
var state_46780__$1 = state_46780;
var statearr_46825_46907 = state_46780__$1;
(statearr_46825_46907[(2)] = false);

(statearr_46825_46907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (12))){
var inst_46775 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46780__$1,inst_46775);
} else {
if((state_val_46781 === (2))){
var inst_46671 = (state_46780[(8)]);
var inst_46676 = inst_46671.cljs$lang$protocol_mask$partition0$;
var inst_46677 = (inst_46676 & (64));
var inst_46678 = inst_46671.cljs$core$ISeq$;
var inst_46679 = (cljs.core.PROTOCOL_SENTINEL === inst_46678);
var inst_46680 = (inst_46677) || (inst_46679);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46680)){
var statearr_46829_46920 = state_46780__$1;
(statearr_46829_46920[(1)] = (5));

} else {
var statearr_46830_46921 = state_46780__$1;
(statearr_46830_46921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (23))){
var inst_46732 = (state_46780[(14)]);
var inst_46741 = (inst_46732 == null);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46741)){
var statearr_46831_46922 = state_46780__$1;
(statearr_46831_46922[(1)] = (26));

} else {
var statearr_46832_46923 = state_46780__$1;
(statearr_46832_46923[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (35))){
var inst_46762 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46762)){
var statearr_46833_46924 = state_46780__$1;
(statearr_46833_46924[(1)] = (36));

} else {
var statearr_46834_46925 = state_46780__$1;
(statearr_46834_46925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (19))){
var inst_46697 = (state_46780[(7)]);
var inst_46720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46697);
var state_46780__$1 = state_46780;
var statearr_46835_46926 = state_46780__$1;
(statearr_46835_46926[(2)] = inst_46720);

(statearr_46835_46926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (11))){
var inst_46697 = (state_46780[(7)]);
var inst_46702 = (inst_46697 == null);
var inst_46703 = cljs.core.not.call(null,inst_46702);
var state_46780__$1 = state_46780;
if(inst_46703){
var statearr_46836_46927 = state_46780__$1;
(statearr_46836_46927[(1)] = (13));

} else {
var statearr_46837_46928 = state_46780__$1;
(statearr_46837_46928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (9))){
var inst_46671 = (state_46780[(8)]);
var state_46780__$1 = state_46780;
var statearr_46838_46929 = state_46780__$1;
(statearr_46838_46929[(2)] = inst_46671);

(statearr_46838_46929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (5))){
var state_46780__$1 = state_46780;
var statearr_46839_46930 = state_46780__$1;
(statearr_46839_46930[(2)] = true);

(statearr_46839_46930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (14))){
var state_46780__$1 = state_46780;
var statearr_46843_46933 = state_46780__$1;
(statearr_46843_46933[(2)] = false);

(statearr_46843_46933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (26))){
var inst_46733 = (state_46780[(9)]);
var inst_46743 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46733);
var state_46780__$1 = state_46780;
var statearr_46847_46934 = state_46780__$1;
(statearr_46847_46934[(2)] = inst_46743);

(statearr_46847_46934[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (16))){
var state_46780__$1 = state_46780;
var statearr_46848_46935 = state_46780__$1;
(statearr_46848_46935[(2)] = true);

(statearr_46848_46935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (38))){
var inst_46767 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46849_46936 = state_46780__$1;
(statearr_46849_46936[(2)] = inst_46767);

(statearr_46849_46936[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (30))){
var inst_46733 = (state_46780[(9)]);
var inst_46724 = (state_46780[(10)]);
var inst_46725 = (state_46780[(13)]);
var inst_46754 = cljs.core.empty_QMARK_.call(null,inst_46724);
var inst_46755 = inst_46725.call(null,inst_46733);
var inst_46756 = cljs.core.not.call(null,inst_46755);
var inst_46757 = (inst_46754) && (inst_46756);
var state_46780__$1 = state_46780;
var statearr_46852_46937 = state_46780__$1;
(statearr_46852_46937[(2)] = inst_46757);

(statearr_46852_46937[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (10))){
var inst_46671 = (state_46780[(8)]);
var inst_46693 = (state_46780[(2)]);
var inst_46694 = cljs.core.get.call(null,inst_46693,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46695 = cljs.core.get.call(null,inst_46693,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46696 = cljs.core.get.call(null,inst_46693,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46697 = inst_46671;
var state_46780__$1 = (function (){var statearr_46853 = state_46780;
(statearr_46853[(16)] = inst_46696);

(statearr_46853[(17)] = inst_46694);

(statearr_46853[(7)] = inst_46697);

(statearr_46853[(18)] = inst_46695);

return statearr_46853;
})();
var statearr_46854_46938 = state_46780__$1;
(statearr_46854_46938[(2)] = null);

(statearr_46854_46938[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (18))){
var inst_46715 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46858_46944 = state_46780__$1;
(statearr_46858_46944[(2)] = inst_46715);

(statearr_46858_46944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (37))){
var state_46780__$1 = state_46780;
var statearr_46859_46945 = state_46780__$1;
(statearr_46859_46945[(2)] = null);

(statearr_46859_46945[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (8))){
var inst_46671 = (state_46780[(8)]);
var inst_46690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46671);
var state_46780__$1 = state_46780;
var statearr_46860_46946 = state_46780__$1;
(statearr_46860_46946[(2)] = inst_46690);

(statearr_46860_46946[(1)] = (10));


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
});})(c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44548__auto__,c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44549__auto__ = null;
var cljs$core$async$mix_$_state_machine__44549__auto____0 = (function (){
var statearr_46861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46861[(0)] = cljs$core$async$mix_$_state_machine__44549__auto__);

(statearr_46861[(1)] = (1));

return statearr_46861;
});
var cljs$core$async$mix_$_state_machine__44549__auto____1 = (function (state_46780){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_46780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e46862){if((e46862 instanceof Object)){
var ex__44553__auto__ = e46862;
var statearr_46863_46957 = state_46780;
(statearr_46863_46957[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_46780;
state_46780 = G__46964;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44549__auto__ = function(state_46780){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44549__auto____1.call(this,state_46780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44549__auto____0;
cljs$core$async$mix_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44549__auto____1;
return cljs$core$async$mix_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44869__auto__ = (function (){var statearr_46870 = f__44868__auto__.call(null);
(statearr_46870[(6)] = c__44867__auto___46875);

return statearr_46870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___46875,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42100__auto__ = (((p == null))?null:p);
var m__42101__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42101__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42100__auto__ = (((p == null))?null:p);
var m__42101__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,p,v,ch);
} else {
var m__42101__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46994 = arguments.length;
switch (G__46994) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42100__auto__ = (((p == null))?null:p);
var m__42101__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,p);
} else {
var m__42101__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42100__auto__ = (((p == null))?null:p);
var m__42101__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,p,v);
} else {
var m__42101__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__47012 = arguments.length;
switch (G__47012) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41367__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41367__auto__,mults){
return (function (p1__47010_SHARP_){
if(cljs.core.truth_(p1__47010_SHARP_.call(null,topic))){
return p1__47010_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__47010_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41367__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async47014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47015 = meta47015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47016,meta47015__$1){
var self__ = this;
var _47016__$1 = this;
return (new cljs.core.async.t_cljs$core$async47014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47015__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47016){
var self__ = this;
var _47016__$1 = this;
return self__.meta47015;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47015","meta47015",1498677050,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47014";

cljs.core.async.t_cljs$core$async47014.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async47014");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async47014 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47015){
return (new cljs.core.async.t_cljs$core$async47014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47015));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44867__auto___47206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___47206,mults,ensure_mult,p){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___47206,mults,ensure_mult,p){
return (function (state_47106){
var state_val_47107 = (state_47106[(1)]);
if((state_val_47107 === (7))){
var inst_47101 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47108_47207 = state_47106__$1;
(statearr_47108_47207[(2)] = inst_47101);

(statearr_47108_47207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (20))){
var state_47106__$1 = state_47106;
var statearr_47109_47208 = state_47106__$1;
(statearr_47109_47208[(2)] = null);

(statearr_47109_47208[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (1))){
var state_47106__$1 = state_47106;
var statearr_47111_47209 = state_47106__$1;
(statearr_47111_47209[(2)] = null);

(statearr_47111_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (24))){
var inst_47082 = (state_47106[(7)]);
var inst_47092 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_47082);
var state_47106__$1 = state_47106;
var statearr_47115_47210 = state_47106__$1;
(statearr_47115_47210[(2)] = inst_47092);

(statearr_47115_47210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (4))){
var inst_47031 = (state_47106[(8)]);
var inst_47031__$1 = (state_47106[(2)]);
var inst_47032 = (inst_47031__$1 == null);
var state_47106__$1 = (function (){var statearr_47116 = state_47106;
(statearr_47116[(8)] = inst_47031__$1);

return statearr_47116;
})();
if(cljs.core.truth_(inst_47032)){
var statearr_47117_47211 = state_47106__$1;
(statearr_47117_47211[(1)] = (5));

} else {
var statearr_47118_47212 = state_47106__$1;
(statearr_47118_47212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (15))){
var inst_47076 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47120_47215 = state_47106__$1;
(statearr_47120_47215[(2)] = inst_47076);

(statearr_47120_47215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (21))){
var inst_47098 = (state_47106[(2)]);
var state_47106__$1 = (function (){var statearr_47121 = state_47106;
(statearr_47121[(9)] = inst_47098);

return statearr_47121;
})();
var statearr_47124_47216 = state_47106__$1;
(statearr_47124_47216[(2)] = null);

(statearr_47124_47216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (13))){
var inst_47055 = (state_47106[(10)]);
var inst_47058 = cljs.core.chunked_seq_QMARK_.call(null,inst_47055);
var state_47106__$1 = state_47106;
if(inst_47058){
var statearr_47129_47220 = state_47106__$1;
(statearr_47129_47220[(1)] = (16));

} else {
var statearr_47130_47221 = state_47106__$1;
(statearr_47130_47221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (22))){
var inst_47089 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
if(cljs.core.truth_(inst_47089)){
var statearr_47133_47226 = state_47106__$1;
(statearr_47133_47226[(1)] = (23));

} else {
var statearr_47134_47227 = state_47106__$1;
(statearr_47134_47227[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (6))){
var inst_47031 = (state_47106[(8)]);
var inst_47085 = (state_47106[(11)]);
var inst_47082 = (state_47106[(7)]);
var inst_47082__$1 = topic_fn.call(null,inst_47031);
var inst_47084 = cljs.core.deref.call(null,mults);
var inst_47085__$1 = cljs.core.get.call(null,inst_47084,inst_47082__$1);
var state_47106__$1 = (function (){var statearr_47135 = state_47106;
(statearr_47135[(11)] = inst_47085__$1);

(statearr_47135[(7)] = inst_47082__$1);

return statearr_47135;
})();
if(cljs.core.truth_(inst_47085__$1)){
var statearr_47138_47229 = state_47106__$1;
(statearr_47138_47229[(1)] = (19));

} else {
var statearr_47139_47230 = state_47106__$1;
(statearr_47139_47230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (25))){
var inst_47094 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47142_47231 = state_47106__$1;
(statearr_47142_47231[(2)] = inst_47094);

(statearr_47142_47231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (17))){
var inst_47055 = (state_47106[(10)]);
var inst_47067 = cljs.core.first.call(null,inst_47055);
var inst_47068 = cljs.core.async.muxch_STAR_.call(null,inst_47067);
var inst_47069 = cljs.core.async.close_BANG_.call(null,inst_47068);
var inst_47070 = cljs.core.next.call(null,inst_47055);
var inst_47041 = inst_47070;
var inst_47042 = null;
var inst_47043 = (0);
var inst_47044 = (0);
var state_47106__$1 = (function (){var statearr_47143 = state_47106;
(statearr_47143[(12)] = inst_47043);

(statearr_47143[(13)] = inst_47044);

(statearr_47143[(14)] = inst_47041);

(statearr_47143[(15)] = inst_47042);

(statearr_47143[(16)] = inst_47069);

return statearr_47143;
})();
var statearr_47144_47232 = state_47106__$1;
(statearr_47144_47232[(2)] = null);

(statearr_47144_47232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (3))){
var inst_47103 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47106__$1,inst_47103);
} else {
if((state_val_47107 === (12))){
var inst_47078 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47147_47251 = state_47106__$1;
(statearr_47147_47251[(2)] = inst_47078);

(statearr_47147_47251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (2))){
var state_47106__$1 = state_47106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47106__$1,(4),ch);
} else {
if((state_val_47107 === (23))){
var state_47106__$1 = state_47106;
var statearr_47148_47257 = state_47106__$1;
(statearr_47148_47257[(2)] = null);

(statearr_47148_47257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (19))){
var inst_47031 = (state_47106[(8)]);
var inst_47085 = (state_47106[(11)]);
var inst_47087 = cljs.core.async.muxch_STAR_.call(null,inst_47085);
var state_47106__$1 = state_47106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47106__$1,(22),inst_47087,inst_47031);
} else {
if((state_val_47107 === (11))){
var inst_47055 = (state_47106[(10)]);
var inst_47041 = (state_47106[(14)]);
var inst_47055__$1 = cljs.core.seq.call(null,inst_47041);
var state_47106__$1 = (function (){var statearr_47150 = state_47106;
(statearr_47150[(10)] = inst_47055__$1);

return statearr_47150;
})();
if(inst_47055__$1){
var statearr_47151_47269 = state_47106__$1;
(statearr_47151_47269[(1)] = (13));

} else {
var statearr_47152_47271 = state_47106__$1;
(statearr_47152_47271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (9))){
var inst_47080 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47153_47280 = state_47106__$1;
(statearr_47153_47280[(2)] = inst_47080);

(statearr_47153_47280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (5))){
var inst_47038 = cljs.core.deref.call(null,mults);
var inst_47039 = cljs.core.vals.call(null,inst_47038);
var inst_47040 = cljs.core.seq.call(null,inst_47039);
var inst_47041 = inst_47040;
var inst_47042 = null;
var inst_47043 = (0);
var inst_47044 = (0);
var state_47106__$1 = (function (){var statearr_47157 = state_47106;
(statearr_47157[(12)] = inst_47043);

(statearr_47157[(13)] = inst_47044);

(statearr_47157[(14)] = inst_47041);

(statearr_47157[(15)] = inst_47042);

return statearr_47157;
})();
var statearr_47158_47305 = state_47106__$1;
(statearr_47158_47305[(2)] = null);

(statearr_47158_47305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (14))){
var state_47106__$1 = state_47106;
var statearr_47162_47311 = state_47106__$1;
(statearr_47162_47311[(2)] = null);

(statearr_47162_47311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (16))){
var inst_47055 = (state_47106[(10)]);
var inst_47061 = cljs.core.chunk_first.call(null,inst_47055);
var inst_47062 = cljs.core.chunk_rest.call(null,inst_47055);
var inst_47063 = cljs.core.count.call(null,inst_47061);
var inst_47041 = inst_47062;
var inst_47042 = inst_47061;
var inst_47043 = inst_47063;
var inst_47044 = (0);
var state_47106__$1 = (function (){var statearr_47163 = state_47106;
(statearr_47163[(12)] = inst_47043);

(statearr_47163[(13)] = inst_47044);

(statearr_47163[(14)] = inst_47041);

(statearr_47163[(15)] = inst_47042);

return statearr_47163;
})();
var statearr_47164_47329 = state_47106__$1;
(statearr_47164_47329[(2)] = null);

(statearr_47164_47329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (10))){
var inst_47043 = (state_47106[(12)]);
var inst_47044 = (state_47106[(13)]);
var inst_47041 = (state_47106[(14)]);
var inst_47042 = (state_47106[(15)]);
var inst_47049 = cljs.core._nth.call(null,inst_47042,inst_47044);
var inst_47050 = cljs.core.async.muxch_STAR_.call(null,inst_47049);
var inst_47051 = cljs.core.async.close_BANG_.call(null,inst_47050);
var inst_47052 = (inst_47044 + (1));
var tmp47159 = inst_47043;
var tmp47160 = inst_47041;
var tmp47161 = inst_47042;
var inst_47041__$1 = tmp47160;
var inst_47042__$1 = tmp47161;
var inst_47043__$1 = tmp47159;
var inst_47044__$1 = inst_47052;
var state_47106__$1 = (function (){var statearr_47165 = state_47106;
(statearr_47165[(12)] = inst_47043__$1);

(statearr_47165[(13)] = inst_47044__$1);

(statearr_47165[(14)] = inst_47041__$1);

(statearr_47165[(15)] = inst_47042__$1);

(statearr_47165[(17)] = inst_47051);

return statearr_47165;
})();
var statearr_47170_47340 = state_47106__$1;
(statearr_47170_47340[(2)] = null);

(statearr_47170_47340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (18))){
var inst_47073 = (state_47106[(2)]);
var state_47106__$1 = state_47106;
var statearr_47171_47352 = state_47106__$1;
(statearr_47171_47352[(2)] = inst_47073);

(statearr_47171_47352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47107 === (8))){
var inst_47043 = (state_47106[(12)]);
var inst_47044 = (state_47106[(13)]);
var inst_47046 = (inst_47044 < inst_47043);
var inst_47047 = inst_47046;
var state_47106__$1 = state_47106;
if(cljs.core.truth_(inst_47047)){
var statearr_47173_47355 = state_47106__$1;
(statearr_47173_47355[(1)] = (10));

} else {
var statearr_47175_47359 = state_47106__$1;
(statearr_47175_47359[(1)] = (11));

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
});})(c__44867__auto___47206,mults,ensure_mult,p))
;
return ((function (switch__44548__auto__,c__44867__auto___47206,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_47176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47176[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_47176[(1)] = (1));

return statearr_47176;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_47106){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_47106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e47177){if((e47177 instanceof Object)){
var ex__44553__auto__ = e47177;
var statearr_47178_47372 = state_47106;
(statearr_47178_47372[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47382 = state_47106;
state_47106 = G__47382;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_47106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_47106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___47206,mults,ensure_mult,p))
})();
var state__44869__auto__ = (function (){var statearr_47183 = f__44868__auto__.call(null);
(statearr_47183[(6)] = c__44867__auto___47206);

return statearr_47183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___47206,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__47397 = arguments.length;
switch (G__47397) {
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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__47420 = arguments.length;
switch (G__47420) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__47451 = arguments.length;
switch (G__47451) {
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
var c__44867__auto___47599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47537){
var state_val_47538 = (state_47537[(1)]);
if((state_val_47538 === (7))){
var state_47537__$1 = state_47537;
var statearr_47539_47600 = state_47537__$1;
(statearr_47539_47600[(2)] = null);

(statearr_47539_47600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (1))){
var state_47537__$1 = state_47537;
var statearr_47544_47602 = state_47537__$1;
(statearr_47544_47602[(2)] = null);

(statearr_47544_47602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (4))){
var inst_47461 = (state_47537[(7)]);
var inst_47463 = (inst_47461 < cnt);
var state_47537__$1 = state_47537;
if(cljs.core.truth_(inst_47463)){
var statearr_47548_47603 = state_47537__$1;
(statearr_47548_47603[(1)] = (6));

} else {
var statearr_47553_47604 = state_47537__$1;
(statearr_47553_47604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (15))){
var inst_47523 = (state_47537[(2)]);
var state_47537__$1 = state_47537;
var statearr_47557_47605 = state_47537__$1;
(statearr_47557_47605[(2)] = inst_47523);

(statearr_47557_47605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (13))){
var inst_47516 = cljs.core.async.close_BANG_.call(null,out);
var state_47537__$1 = state_47537;
var statearr_47561_47606 = state_47537__$1;
(statearr_47561_47606[(2)] = inst_47516);

(statearr_47561_47606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (6))){
var state_47537__$1 = state_47537;
var statearr_47562_47607 = state_47537__$1;
(statearr_47562_47607[(2)] = null);

(statearr_47562_47607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (3))){
var inst_47525 = (state_47537[(2)]);
var state_47537__$1 = state_47537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47537__$1,inst_47525);
} else {
if((state_val_47538 === (12))){
var inst_47513 = (state_47537[(8)]);
var inst_47513__$1 = (state_47537[(2)]);
var inst_47514 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_47513__$1);
var state_47537__$1 = (function (){var statearr_47567 = state_47537;
(statearr_47567[(8)] = inst_47513__$1);

return statearr_47567;
})();
if(cljs.core.truth_(inst_47514)){
var statearr_47568_47608 = state_47537__$1;
(statearr_47568_47608[(1)] = (13));

} else {
var statearr_47569_47609 = state_47537__$1;
(statearr_47569_47609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (2))){
var inst_47460 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_47461 = (0);
var state_47537__$1 = (function (){var statearr_47572 = state_47537;
(statearr_47572[(9)] = inst_47460);

(statearr_47572[(7)] = inst_47461);

return statearr_47572;
})();
var statearr_47573_47610 = state_47537__$1;
(statearr_47573_47610[(2)] = null);

(statearr_47573_47610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (11))){
var inst_47461 = (state_47537[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_47537,(10),Object,null,(9));
var inst_47496 = chs__$1.call(null,inst_47461);
var inst_47497 = done.call(null,inst_47461);
var inst_47498 = cljs.core.async.take_BANG_.call(null,inst_47496,inst_47497);
var state_47537__$1 = state_47537;
var statearr_47574_47614 = state_47537__$1;
(statearr_47574_47614[(2)] = inst_47498);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (9))){
var inst_47461 = (state_47537[(7)]);
var inst_47500 = (state_47537[(2)]);
var inst_47501 = (inst_47461 + (1));
var inst_47461__$1 = inst_47501;
var state_47537__$1 = (function (){var statearr_47577 = state_47537;
(statearr_47577[(10)] = inst_47500);

(statearr_47577[(7)] = inst_47461__$1);

return statearr_47577;
})();
var statearr_47578_47615 = state_47537__$1;
(statearr_47578_47615[(2)] = null);

(statearr_47578_47615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (5))){
var inst_47507 = (state_47537[(2)]);
var state_47537__$1 = (function (){var statearr_47579 = state_47537;
(statearr_47579[(11)] = inst_47507);

return statearr_47579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47537__$1,(12),dchan);
} else {
if((state_val_47538 === (14))){
var inst_47513 = (state_47537[(8)]);
var inst_47518 = cljs.core.apply.call(null,f,inst_47513);
var state_47537__$1 = state_47537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47537__$1,(16),out,inst_47518);
} else {
if((state_val_47538 === (16))){
var inst_47520 = (state_47537[(2)]);
var state_47537__$1 = (function (){var statearr_47581 = state_47537;
(statearr_47581[(12)] = inst_47520);

return statearr_47581;
})();
var statearr_47582_47618 = state_47537__$1;
(statearr_47582_47618[(2)] = null);

(statearr_47582_47618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (10))){
var inst_47483 = (state_47537[(2)]);
var inst_47484 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_47537__$1 = (function (){var statearr_47583 = state_47537;
(statearr_47583[(13)] = inst_47483);

return statearr_47583;
})();
var statearr_47584_47619 = state_47537__$1;
(statearr_47584_47619[(2)] = inst_47484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47538 === (8))){
var inst_47505 = (state_47537[(2)]);
var state_47537__$1 = state_47537;
var statearr_47585_47623 = state_47537__$1;
(statearr_47585_47623[(2)] = inst_47505);

(statearr_47585_47623[(1)] = (5));


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
});})(c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44548__auto__,c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_47589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47589[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_47589[(1)] = (1));

return statearr_47589;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_47537){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_47537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e47590){if((e47590 instanceof Object)){
var ex__44553__auto__ = e47590;
var statearr_47591_47626 = state_47537;
(statearr_47591_47626[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47627 = state_47537;
state_47537 = G__47627;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_47537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_47537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44869__auto__ = (function (){var statearr_47592 = f__44868__auto__.call(null);
(statearr_47592[(6)] = c__44867__auto___47599);

return statearr_47592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___47599,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__47630 = arguments.length;
switch (G__47630) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___47699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___47699,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___47699,out){
return (function (state_47665){
var state_val_47666 = (state_47665[(1)]);
if((state_val_47666 === (7))){
var inst_47644 = (state_47665[(7)]);
var inst_47643 = (state_47665[(8)]);
var inst_47643__$1 = (state_47665[(2)]);
var inst_47644__$1 = cljs.core.nth.call(null,inst_47643__$1,(0),null);
var inst_47645 = cljs.core.nth.call(null,inst_47643__$1,(1),null);
var inst_47646 = (inst_47644__$1 == null);
var state_47665__$1 = (function (){var statearr_47670 = state_47665;
(statearr_47670[(7)] = inst_47644__$1);

(statearr_47670[(8)] = inst_47643__$1);

(statearr_47670[(9)] = inst_47645);

return statearr_47670;
})();
if(cljs.core.truth_(inst_47646)){
var statearr_47671_47700 = state_47665__$1;
(statearr_47671_47700[(1)] = (8));

} else {
var statearr_47672_47701 = state_47665__$1;
(statearr_47672_47701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (1))){
var inst_47633 = cljs.core.vec.call(null,chs);
var inst_47634 = inst_47633;
var state_47665__$1 = (function (){var statearr_47673 = state_47665;
(statearr_47673[(10)] = inst_47634);

return statearr_47673;
})();
var statearr_47674_47702 = state_47665__$1;
(statearr_47674_47702[(2)] = null);

(statearr_47674_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (4))){
var inst_47634 = (state_47665[(10)]);
var state_47665__$1 = state_47665;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47665__$1,(7),inst_47634);
} else {
if((state_val_47666 === (6))){
var inst_47660 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47676_47704 = state_47665__$1;
(statearr_47676_47704[(2)] = inst_47660);

(statearr_47676_47704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (3))){
var inst_47662 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47665__$1,inst_47662);
} else {
if((state_val_47666 === (2))){
var inst_47634 = (state_47665[(10)]);
var inst_47636 = cljs.core.count.call(null,inst_47634);
var inst_47637 = (inst_47636 > (0));
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47637)){
var statearr_47679_47707 = state_47665__$1;
(statearr_47679_47707[(1)] = (4));

} else {
var statearr_47680_47708 = state_47665__$1;
(statearr_47680_47708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (11))){
var inst_47634 = (state_47665[(10)]);
var inst_47653 = (state_47665[(2)]);
var tmp47678 = inst_47634;
var inst_47634__$1 = tmp47678;
var state_47665__$1 = (function (){var statearr_47681 = state_47665;
(statearr_47681[(10)] = inst_47634__$1);

(statearr_47681[(11)] = inst_47653);

return statearr_47681;
})();
var statearr_47682_47710 = state_47665__$1;
(statearr_47682_47710[(2)] = null);

(statearr_47682_47710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (9))){
var inst_47644 = (state_47665[(7)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47665__$1,(11),out,inst_47644);
} else {
if((state_val_47666 === (5))){
var inst_47658 = cljs.core.async.close_BANG_.call(null,out);
var state_47665__$1 = state_47665;
var statearr_47687_47711 = state_47665__$1;
(statearr_47687_47711[(2)] = inst_47658);

(statearr_47687_47711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (10))){
var inst_47656 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47688_47712 = state_47665__$1;
(statearr_47688_47712[(2)] = inst_47656);

(statearr_47688_47712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (8))){
var inst_47644 = (state_47665[(7)]);
var inst_47643 = (state_47665[(8)]);
var inst_47634 = (state_47665[(10)]);
var inst_47645 = (state_47665[(9)]);
var inst_47648 = (function (){var cs = inst_47634;
var vec__47639 = inst_47643;
var v = inst_47644;
var c = inst_47645;
return ((function (cs,vec__47639,v,c,inst_47644,inst_47643,inst_47634,inst_47645,state_val_47666,c__44867__auto___47699,out){
return (function (p1__47628_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__47628_SHARP_);
});
;})(cs,vec__47639,v,c,inst_47644,inst_47643,inst_47634,inst_47645,state_val_47666,c__44867__auto___47699,out))
})();
var inst_47649 = cljs.core.filterv.call(null,inst_47648,inst_47634);
var inst_47634__$1 = inst_47649;
var state_47665__$1 = (function (){var statearr_47691 = state_47665;
(statearr_47691[(10)] = inst_47634__$1);

return statearr_47691;
})();
var statearr_47692_47717 = state_47665__$1;
(statearr_47692_47717[(2)] = null);

(statearr_47692_47717[(1)] = (2));


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
});})(c__44867__auto___47699,out))
;
return ((function (switch__44548__auto__,c__44867__auto___47699,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_47693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47693[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_47693[(1)] = (1));

return statearr_47693;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_47665){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_47665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e47694){if((e47694 instanceof Object)){
var ex__44553__auto__ = e47694;
var statearr_47695_47721 = state_47665;
(statearr_47695_47721[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47722 = state_47665;
state_47665 = G__47722;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_47665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_47665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___47699,out))
})();
var state__44869__auto__ = (function (){var statearr_47697 = f__44868__auto__.call(null);
(statearr_47697[(6)] = c__44867__auto___47699);

return statearr_47697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___47699,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__47728 = arguments.length;
switch (G__47728) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___47819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___47819,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___47819,out){
return (function (state_47783){
var state_val_47787 = (state_47783[(1)]);
if((state_val_47787 === (7))){
var inst_47758 = (state_47783[(7)]);
var inst_47758__$1 = (state_47783[(2)]);
var inst_47759 = (inst_47758__$1 == null);
var inst_47760 = cljs.core.not.call(null,inst_47759);
var state_47783__$1 = (function (){var statearr_47791 = state_47783;
(statearr_47791[(7)] = inst_47758__$1);

return statearr_47791;
})();
if(inst_47760){
var statearr_47792_47820 = state_47783__$1;
(statearr_47792_47820[(1)] = (8));

} else {
var statearr_47793_47821 = state_47783__$1;
(statearr_47793_47821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (1))){
var inst_47753 = (0);
var state_47783__$1 = (function (){var statearr_47794 = state_47783;
(statearr_47794[(8)] = inst_47753);

return statearr_47794;
})();
var statearr_47795_47822 = state_47783__$1;
(statearr_47795_47822[(2)] = null);

(statearr_47795_47822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (4))){
var state_47783__$1 = state_47783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47783__$1,(7),ch);
} else {
if((state_val_47787 === (6))){
var inst_47771 = (state_47783[(2)]);
var state_47783__$1 = state_47783;
var statearr_47796_47841 = state_47783__$1;
(statearr_47796_47841[(2)] = inst_47771);

(statearr_47796_47841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (3))){
var inst_47773 = (state_47783[(2)]);
var inst_47774 = cljs.core.async.close_BANG_.call(null,out);
var state_47783__$1 = (function (){var statearr_47798 = state_47783;
(statearr_47798[(9)] = inst_47773);

return statearr_47798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47783__$1,inst_47774);
} else {
if((state_val_47787 === (2))){
var inst_47753 = (state_47783[(8)]);
var inst_47755 = (inst_47753 < n);
var state_47783__$1 = state_47783;
if(cljs.core.truth_(inst_47755)){
var statearr_47799_47857 = state_47783__$1;
(statearr_47799_47857[(1)] = (4));

} else {
var statearr_47800_47864 = state_47783__$1;
(statearr_47800_47864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (11))){
var inst_47753 = (state_47783[(8)]);
var inst_47763 = (state_47783[(2)]);
var inst_47764 = (inst_47753 + (1));
var inst_47753__$1 = inst_47764;
var state_47783__$1 = (function (){var statearr_47803 = state_47783;
(statearr_47803[(10)] = inst_47763);

(statearr_47803[(8)] = inst_47753__$1);

return statearr_47803;
})();
var statearr_47807_47868 = state_47783__$1;
(statearr_47807_47868[(2)] = null);

(statearr_47807_47868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (9))){
var state_47783__$1 = state_47783;
var statearr_47808_47869 = state_47783__$1;
(statearr_47808_47869[(2)] = null);

(statearr_47808_47869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (5))){
var state_47783__$1 = state_47783;
var statearr_47809_47870 = state_47783__$1;
(statearr_47809_47870[(2)] = null);

(statearr_47809_47870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (10))){
var inst_47768 = (state_47783[(2)]);
var state_47783__$1 = state_47783;
var statearr_47810_47871 = state_47783__$1;
(statearr_47810_47871[(2)] = inst_47768);

(statearr_47810_47871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47787 === (8))){
var inst_47758 = (state_47783[(7)]);
var state_47783__$1 = state_47783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47783__$1,(11),out,inst_47758);
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
});})(c__44867__auto___47819,out))
;
return ((function (switch__44548__auto__,c__44867__auto___47819,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_47811 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47811[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_47811[(1)] = (1));

return statearr_47811;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_47783){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_47783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e47812){if((e47812 instanceof Object)){
var ex__44553__auto__ = e47812;
var statearr_47813_47872 = state_47783;
(statearr_47813_47872[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47873 = state_47783;
state_47783 = G__47873;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_47783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_47783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___47819,out))
})();
var state__44869__auto__ = (function (){var statearr_47814 = f__44868__auto__.call(null);
(statearr_47814[(6)] = c__44867__auto___47819);

return statearr_47814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___47819,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47875 = (function (f,ch,meta47876){
this.f = f;
this.ch = ch;
this.meta47876 = meta47876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47877,meta47876__$1){
var self__ = this;
var _47877__$1 = this;
return (new cljs.core.async.t_cljs$core$async47875(self__.f,self__.ch,meta47876__$1));
});

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47877){
var self__ = this;
var _47877__$1 = this;
return self__.meta47876;
});

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47882 = (function (f,ch,meta47876,_,fn1,meta47883){
this.f = f;
this.ch = ch;
this.meta47876 = meta47876;
this._ = _;
this.fn1 = fn1;
this.meta47883 = meta47883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47884,meta47883__$1){
var self__ = this;
var _47884__$1 = this;
return (new cljs.core.async.t_cljs$core$async47882(self__.f,self__.ch,self__.meta47876,self__._,self__.fn1,meta47883__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47884){
var self__ = this;
var _47884__$1 = this;
return self__.meta47883;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47874_SHARP_){
return f1.call(null,(((p1__47874_SHARP_ == null))?null:self__.f.call(null,p1__47874_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47876","meta47876",1050076799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47875","cljs.core.async/t_cljs$core$async47875",1742673874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47883","meta47883",-425199100,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47882";

cljs.core.async.t_cljs$core$async47882.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async47882");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47882 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47882(f__$1,ch__$1,meta47876__$1,___$2,fn1__$1,meta47883){
return (new cljs.core.async.t_cljs$core$async47882(f__$1,ch__$1,meta47876__$1,___$2,fn1__$1,meta47883));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47882(self__.f,self__.ch,self__.meta47876,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41355__auto__ = ret;
if(cljs.core.truth_(and__41355__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41355__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47875.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47876","meta47876",1050076799,null)], null);
});

cljs.core.async.t_cljs$core$async47875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47875";

cljs.core.async.t_cljs$core$async47875.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async47875");
});

cljs.core.async.__GT_t_cljs$core$async47875 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47875(f__$1,ch__$1,meta47876){
return (new cljs.core.async.t_cljs$core$async47875(f__$1,ch__$1,meta47876));
});

}

return (new cljs.core.async.t_cljs$core$async47875(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47901 = (function (f,ch,meta47902){
this.f = f;
this.ch = ch;
this.meta47902 = meta47902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47903,meta47902__$1){
var self__ = this;
var _47903__$1 = this;
return (new cljs.core.async.t_cljs$core$async47901(self__.f,self__.ch,meta47902__$1));
});

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47903){
var self__ = this;
var _47903__$1 = this;
return self__.meta47902;
});

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47901.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47902","meta47902",120794201,null)], null);
});

cljs.core.async.t_cljs$core$async47901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47901";

cljs.core.async.t_cljs$core$async47901.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async47901");
});

cljs.core.async.__GT_t_cljs$core$async47901 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47901(f__$1,ch__$1,meta47902){
return (new cljs.core.async.t_cljs$core$async47901(f__$1,ch__$1,meta47902));
});

}

return (new cljs.core.async.t_cljs$core$async47901(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47912 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47912 = (function (p,ch,meta47913){
this.p = p;
this.ch = ch;
this.meta47913 = meta47913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47914,meta47913__$1){
var self__ = this;
var _47914__$1 = this;
return (new cljs.core.async.t_cljs$core$async47912(self__.p,self__.ch,meta47913__$1));
});

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47914){
var self__ = this;
var _47914__$1 = this;
return self__.meta47913;
});

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47913","meta47913",1466541773,null)], null);
});

cljs.core.async.t_cljs$core$async47912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47912";

cljs.core.async.t_cljs$core$async47912.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.core.async/t_cljs$core$async47912");
});

cljs.core.async.__GT_t_cljs$core$async47912 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47912(p__$1,ch__$1,meta47913){
return (new cljs.core.async.t_cljs$core$async47912(p__$1,ch__$1,meta47913));
});

}

return (new cljs.core.async.t_cljs$core$async47912(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47921 = arguments.length;
switch (G__47921) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___47967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___47967,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___47967,out){
return (function (state_47943){
var state_val_47944 = (state_47943[(1)]);
if((state_val_47944 === (7))){
var inst_47939 = (state_47943[(2)]);
var state_47943__$1 = state_47943;
var statearr_47945_47970 = state_47943__$1;
(statearr_47945_47970[(2)] = inst_47939);

(statearr_47945_47970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (1))){
var state_47943__$1 = state_47943;
var statearr_47946_47971 = state_47943__$1;
(statearr_47946_47971[(2)] = null);

(statearr_47946_47971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (4))){
var inst_47925 = (state_47943[(7)]);
var inst_47925__$1 = (state_47943[(2)]);
var inst_47926 = (inst_47925__$1 == null);
var state_47943__$1 = (function (){var statearr_47947 = state_47943;
(statearr_47947[(7)] = inst_47925__$1);

return statearr_47947;
})();
if(cljs.core.truth_(inst_47926)){
var statearr_47948_47972 = state_47943__$1;
(statearr_47948_47972[(1)] = (5));

} else {
var statearr_47949_47973 = state_47943__$1;
(statearr_47949_47973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (6))){
var inst_47925 = (state_47943[(7)]);
var inst_47930 = p.call(null,inst_47925);
var state_47943__$1 = state_47943;
if(cljs.core.truth_(inst_47930)){
var statearr_47950_47974 = state_47943__$1;
(statearr_47950_47974[(1)] = (8));

} else {
var statearr_47951_47975 = state_47943__$1;
(statearr_47951_47975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (3))){
var inst_47941 = (state_47943[(2)]);
var state_47943__$1 = state_47943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47943__$1,inst_47941);
} else {
if((state_val_47944 === (2))){
var state_47943__$1 = state_47943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47943__$1,(4),ch);
} else {
if((state_val_47944 === (11))){
var inst_47933 = (state_47943[(2)]);
var state_47943__$1 = state_47943;
var statearr_47952_47982 = state_47943__$1;
(statearr_47952_47982[(2)] = inst_47933);

(statearr_47952_47982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (9))){
var state_47943__$1 = state_47943;
var statearr_47953_47983 = state_47943__$1;
(statearr_47953_47983[(2)] = null);

(statearr_47953_47983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (5))){
var inst_47928 = cljs.core.async.close_BANG_.call(null,out);
var state_47943__$1 = state_47943;
var statearr_47954_47984 = state_47943__$1;
(statearr_47954_47984[(2)] = inst_47928);

(statearr_47954_47984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (10))){
var inst_47936 = (state_47943[(2)]);
var state_47943__$1 = (function (){var statearr_47955 = state_47943;
(statearr_47955[(8)] = inst_47936);

return statearr_47955;
})();
var statearr_47956_47989 = state_47943__$1;
(statearr_47956_47989[(2)] = null);

(statearr_47956_47989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47944 === (8))){
var inst_47925 = (state_47943[(7)]);
var state_47943__$1 = state_47943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47943__$1,(11),out,inst_47925);
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
});})(c__44867__auto___47967,out))
;
return ((function (switch__44548__auto__,c__44867__auto___47967,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_47957 = [null,null,null,null,null,null,null,null,null];
(statearr_47957[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_47957[(1)] = (1));

return statearr_47957;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_47943){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_47943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e47958){if((e47958 instanceof Object)){
var ex__44553__auto__ = e47958;
var statearr_47959_47993 = state_47943;
(statearr_47959_47993[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47994 = state_47943;
state_47943 = G__47994;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_47943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_47943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___47967,out))
})();
var state__44869__auto__ = (function (){var statearr_47964 = f__44868__auto__.call(null);
(statearr_47964[(6)] = c__44867__auto___47967);

return statearr_47964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___47967,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48000 = arguments.length;
switch (G__48000) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__){
return (function (state_48068){
var state_val_48069 = (state_48068[(1)]);
if((state_val_48069 === (7))){
var inst_48064 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
var statearr_48070_48110 = state_48068__$1;
(statearr_48070_48110[(2)] = inst_48064);

(statearr_48070_48110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (20))){
var inst_48033 = (state_48068[(7)]);
var inst_48044 = (state_48068[(2)]);
var inst_48045 = cljs.core.next.call(null,inst_48033);
var inst_48019 = inst_48045;
var inst_48020 = null;
var inst_48021 = (0);
var inst_48022 = (0);
var state_48068__$1 = (function (){var statearr_48071 = state_48068;
(statearr_48071[(8)] = inst_48019);

(statearr_48071[(9)] = inst_48044);

(statearr_48071[(10)] = inst_48021);

(statearr_48071[(11)] = inst_48020);

(statearr_48071[(12)] = inst_48022);

return statearr_48071;
})();
var statearr_48072_48118 = state_48068__$1;
(statearr_48072_48118[(2)] = null);

(statearr_48072_48118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (1))){
var state_48068__$1 = state_48068;
var statearr_48073_48119 = state_48068__$1;
(statearr_48073_48119[(2)] = null);

(statearr_48073_48119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (4))){
var inst_48008 = (state_48068[(13)]);
var inst_48008__$1 = (state_48068[(2)]);
var inst_48009 = (inst_48008__$1 == null);
var state_48068__$1 = (function (){var statearr_48074 = state_48068;
(statearr_48074[(13)] = inst_48008__$1);

return statearr_48074;
})();
if(cljs.core.truth_(inst_48009)){
var statearr_48075_48120 = state_48068__$1;
(statearr_48075_48120[(1)] = (5));

} else {
var statearr_48076_48121 = state_48068__$1;
(statearr_48076_48121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (15))){
var state_48068__$1 = state_48068;
var statearr_48080_48122 = state_48068__$1;
(statearr_48080_48122[(2)] = null);

(statearr_48080_48122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (21))){
var state_48068__$1 = state_48068;
var statearr_48081_48123 = state_48068__$1;
(statearr_48081_48123[(2)] = null);

(statearr_48081_48123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (13))){
var inst_48019 = (state_48068[(8)]);
var inst_48021 = (state_48068[(10)]);
var inst_48020 = (state_48068[(11)]);
var inst_48022 = (state_48068[(12)]);
var inst_48029 = (state_48068[(2)]);
var inst_48030 = (inst_48022 + (1));
var tmp48077 = inst_48019;
var tmp48078 = inst_48021;
var tmp48079 = inst_48020;
var inst_48019__$1 = tmp48077;
var inst_48020__$1 = tmp48079;
var inst_48021__$1 = tmp48078;
var inst_48022__$1 = inst_48030;
var state_48068__$1 = (function (){var statearr_48082 = state_48068;
(statearr_48082[(8)] = inst_48019__$1);

(statearr_48082[(14)] = inst_48029);

(statearr_48082[(10)] = inst_48021__$1);

(statearr_48082[(11)] = inst_48020__$1);

(statearr_48082[(12)] = inst_48022__$1);

return statearr_48082;
})();
var statearr_48083_48128 = state_48068__$1;
(statearr_48083_48128[(2)] = null);

(statearr_48083_48128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (22))){
var state_48068__$1 = state_48068;
var statearr_48084_48129 = state_48068__$1;
(statearr_48084_48129[(2)] = null);

(statearr_48084_48129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (6))){
var inst_48008 = (state_48068[(13)]);
var inst_48017 = f.call(null,inst_48008);
var inst_48018 = cljs.core.seq.call(null,inst_48017);
var inst_48019 = inst_48018;
var inst_48020 = null;
var inst_48021 = (0);
var inst_48022 = (0);
var state_48068__$1 = (function (){var statearr_48085 = state_48068;
(statearr_48085[(8)] = inst_48019);

(statearr_48085[(10)] = inst_48021);

(statearr_48085[(11)] = inst_48020);

(statearr_48085[(12)] = inst_48022);

return statearr_48085;
})();
var statearr_48086_48130 = state_48068__$1;
(statearr_48086_48130[(2)] = null);

(statearr_48086_48130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (17))){
var inst_48033 = (state_48068[(7)]);
var inst_48037 = cljs.core.chunk_first.call(null,inst_48033);
var inst_48038 = cljs.core.chunk_rest.call(null,inst_48033);
var inst_48039 = cljs.core.count.call(null,inst_48037);
var inst_48019 = inst_48038;
var inst_48020 = inst_48037;
var inst_48021 = inst_48039;
var inst_48022 = (0);
var state_48068__$1 = (function (){var statearr_48087 = state_48068;
(statearr_48087[(8)] = inst_48019);

(statearr_48087[(10)] = inst_48021);

(statearr_48087[(11)] = inst_48020);

(statearr_48087[(12)] = inst_48022);

return statearr_48087;
})();
var statearr_48088_48131 = state_48068__$1;
(statearr_48088_48131[(2)] = null);

(statearr_48088_48131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (3))){
var inst_48066 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48068__$1,inst_48066);
} else {
if((state_val_48069 === (12))){
var inst_48053 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
var statearr_48089_48132 = state_48068__$1;
(statearr_48089_48132[(2)] = inst_48053);

(statearr_48089_48132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (2))){
var state_48068__$1 = state_48068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48068__$1,(4),in$);
} else {
if((state_val_48069 === (23))){
var inst_48062 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
var statearr_48090_48133 = state_48068__$1;
(statearr_48090_48133[(2)] = inst_48062);

(statearr_48090_48133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (19))){
var inst_48048 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
var statearr_48091_48134 = state_48068__$1;
(statearr_48091_48134[(2)] = inst_48048);

(statearr_48091_48134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (11))){
var inst_48019 = (state_48068[(8)]);
var inst_48033 = (state_48068[(7)]);
var inst_48033__$1 = cljs.core.seq.call(null,inst_48019);
var state_48068__$1 = (function (){var statearr_48092 = state_48068;
(statearr_48092[(7)] = inst_48033__$1);

return statearr_48092;
})();
if(inst_48033__$1){
var statearr_48093_48136 = state_48068__$1;
(statearr_48093_48136[(1)] = (14));

} else {
var statearr_48094_48137 = state_48068__$1;
(statearr_48094_48137[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (9))){
var inst_48055 = (state_48068[(2)]);
var inst_48056 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_48068__$1 = (function (){var statearr_48095 = state_48068;
(statearr_48095[(15)] = inst_48055);

return statearr_48095;
})();
if(cljs.core.truth_(inst_48056)){
var statearr_48096_48142 = state_48068__$1;
(statearr_48096_48142[(1)] = (21));

} else {
var statearr_48097_48143 = state_48068__$1;
(statearr_48097_48143[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (5))){
var inst_48011 = cljs.core.async.close_BANG_.call(null,out);
var state_48068__$1 = state_48068;
var statearr_48098_48144 = state_48068__$1;
(statearr_48098_48144[(2)] = inst_48011);

(statearr_48098_48144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (14))){
var inst_48033 = (state_48068[(7)]);
var inst_48035 = cljs.core.chunked_seq_QMARK_.call(null,inst_48033);
var state_48068__$1 = state_48068;
if(inst_48035){
var statearr_48099_48145 = state_48068__$1;
(statearr_48099_48145[(1)] = (17));

} else {
var statearr_48100_48146 = state_48068__$1;
(statearr_48100_48146[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (16))){
var inst_48051 = (state_48068[(2)]);
var state_48068__$1 = state_48068;
var statearr_48101_48147 = state_48068__$1;
(statearr_48101_48147[(2)] = inst_48051);

(statearr_48101_48147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48069 === (10))){
var inst_48020 = (state_48068[(11)]);
var inst_48022 = (state_48068[(12)]);
var inst_48027 = cljs.core._nth.call(null,inst_48020,inst_48022);
var state_48068__$1 = state_48068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48068__$1,(13),out,inst_48027);
} else {
if((state_val_48069 === (18))){
var inst_48033 = (state_48068[(7)]);
var inst_48042 = cljs.core.first.call(null,inst_48033);
var state_48068__$1 = state_48068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48068__$1,(20),out,inst_48042);
} else {
if((state_val_48069 === (8))){
var inst_48021 = (state_48068[(10)]);
var inst_48022 = (state_48068[(12)]);
var inst_48024 = (inst_48022 < inst_48021);
var inst_48025 = inst_48024;
var state_48068__$1 = state_48068;
if(cljs.core.truth_(inst_48025)){
var statearr_48102_48150 = state_48068__$1;
(statearr_48102_48150[(1)] = (10));

} else {
var statearr_48103_48151 = state_48068__$1;
(statearr_48103_48151[(1)] = (11));

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
});})(c__44867__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____0 = (function (){
var statearr_48104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__);

(statearr_48104[(1)] = (1));

return statearr_48104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____1 = (function (state_48068){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_48068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e48105){if((e48105 instanceof Object)){
var ex__44553__auto__ = e48105;
var statearr_48106_48154 = state_48068;
(statearr_48106_48154[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48155 = state_48068;
state_48068 = G__48155;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__ = function(state_48068){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____1.call(this,state_48068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44549__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__))
})();
var state__44869__auto__ = (function (){var statearr_48107 = f__44868__auto__.call(null);
(statearr_48107[(6)] = c__44867__auto__);

return statearr_48107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__))
);

return c__44867__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48158 = arguments.length;
switch (G__48158) {
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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48175 = arguments.length;
switch (G__48175) {
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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48185 = arguments.length;
switch (G__48185) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___48254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___48254,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___48254,out){
return (function (state_48214){
var state_val_48215 = (state_48214[(1)]);
if((state_val_48215 === (7))){
var inst_48209 = (state_48214[(2)]);
var state_48214__$1 = state_48214;
var statearr_48220_48255 = state_48214__$1;
(statearr_48220_48255[(2)] = inst_48209);

(statearr_48220_48255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (1))){
var inst_48191 = null;
var state_48214__$1 = (function (){var statearr_48233 = state_48214;
(statearr_48233[(7)] = inst_48191);

return statearr_48233;
})();
var statearr_48234_48256 = state_48214__$1;
(statearr_48234_48256[(2)] = null);

(statearr_48234_48256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (4))){
var inst_48194 = (state_48214[(8)]);
var inst_48194__$1 = (state_48214[(2)]);
var inst_48195 = (inst_48194__$1 == null);
var inst_48196 = cljs.core.not.call(null,inst_48195);
var state_48214__$1 = (function (){var statearr_48235 = state_48214;
(statearr_48235[(8)] = inst_48194__$1);

return statearr_48235;
})();
if(inst_48196){
var statearr_48236_48258 = state_48214__$1;
(statearr_48236_48258[(1)] = (5));

} else {
var statearr_48237_48259 = state_48214__$1;
(statearr_48237_48259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (6))){
var state_48214__$1 = state_48214;
var statearr_48238_48260 = state_48214__$1;
(statearr_48238_48260[(2)] = null);

(statearr_48238_48260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (3))){
var inst_48211 = (state_48214[(2)]);
var inst_48212 = cljs.core.async.close_BANG_.call(null,out);
var state_48214__$1 = (function (){var statearr_48239 = state_48214;
(statearr_48239[(9)] = inst_48211);

return statearr_48239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48214__$1,inst_48212);
} else {
if((state_val_48215 === (2))){
var state_48214__$1 = state_48214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48214__$1,(4),ch);
} else {
if((state_val_48215 === (11))){
var inst_48194 = (state_48214[(8)]);
var inst_48203 = (state_48214[(2)]);
var inst_48191 = inst_48194;
var state_48214__$1 = (function (){var statearr_48240 = state_48214;
(statearr_48240[(7)] = inst_48191);

(statearr_48240[(10)] = inst_48203);

return statearr_48240;
})();
var statearr_48241_48261 = state_48214__$1;
(statearr_48241_48261[(2)] = null);

(statearr_48241_48261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (9))){
var inst_48194 = (state_48214[(8)]);
var state_48214__$1 = state_48214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48214__$1,(11),out,inst_48194);
} else {
if((state_val_48215 === (5))){
var inst_48194 = (state_48214[(8)]);
var inst_48191 = (state_48214[(7)]);
var inst_48198 = cljs.core._EQ_.call(null,inst_48194,inst_48191);
var state_48214__$1 = state_48214;
if(inst_48198){
var statearr_48243_48262 = state_48214__$1;
(statearr_48243_48262[(1)] = (8));

} else {
var statearr_48244_48263 = state_48214__$1;
(statearr_48244_48263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (10))){
var inst_48206 = (state_48214[(2)]);
var state_48214__$1 = state_48214;
var statearr_48245_48267 = state_48214__$1;
(statearr_48245_48267[(2)] = inst_48206);

(statearr_48245_48267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48215 === (8))){
var inst_48191 = (state_48214[(7)]);
var tmp48242 = inst_48191;
var inst_48191__$1 = tmp48242;
var state_48214__$1 = (function (){var statearr_48246 = state_48214;
(statearr_48246[(7)] = inst_48191__$1);

return statearr_48246;
})();
var statearr_48247_48268 = state_48214__$1;
(statearr_48247_48268[(2)] = null);

(statearr_48247_48268[(1)] = (2));


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
});})(c__44867__auto___48254,out))
;
return ((function (switch__44548__auto__,c__44867__auto___48254,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_48249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48249[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_48249[(1)] = (1));

return statearr_48249;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_48214){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_48214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e48250){if((e48250 instanceof Object)){
var ex__44553__auto__ = e48250;
var statearr_48251_48269 = state_48214;
(statearr_48251_48269[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48270 = state_48214;
state_48214 = G__48270;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_48214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_48214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___48254,out))
})();
var state__44869__auto__ = (function (){var statearr_48252 = f__44868__auto__.call(null);
(statearr_48252[(6)] = c__44867__auto___48254);

return statearr_48252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___48254,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48272 = arguments.length;
switch (G__48272) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___48397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___48397,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___48397,out){
return (function (state_48340){
var state_val_48341 = (state_48340[(1)]);
if((state_val_48341 === (7))){
var inst_48330 = (state_48340[(2)]);
var state_48340__$1 = state_48340;
var statearr_48342_48399 = state_48340__$1;
(statearr_48342_48399[(2)] = inst_48330);

(statearr_48342_48399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (1))){
var inst_48273 = (new Array(n));
var inst_48274 = inst_48273;
var inst_48275 = (0);
var state_48340__$1 = (function (){var statearr_48343 = state_48340;
(statearr_48343[(7)] = inst_48275);

(statearr_48343[(8)] = inst_48274);

return statearr_48343;
})();
var statearr_48344_48404 = state_48340__$1;
(statearr_48344_48404[(2)] = null);

(statearr_48344_48404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (4))){
var inst_48278 = (state_48340[(9)]);
var inst_48278__$1 = (state_48340[(2)]);
var inst_48279 = (inst_48278__$1 == null);
var inst_48280 = cljs.core.not.call(null,inst_48279);
var state_48340__$1 = (function (){var statearr_48345 = state_48340;
(statearr_48345[(9)] = inst_48278__$1);

return statearr_48345;
})();
if(inst_48280){
var statearr_48346_48408 = state_48340__$1;
(statearr_48346_48408[(1)] = (5));

} else {
var statearr_48347_48409 = state_48340__$1;
(statearr_48347_48409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (15))){
var inst_48324 = (state_48340[(2)]);
var state_48340__$1 = state_48340;
var statearr_48348_48410 = state_48340__$1;
(statearr_48348_48410[(2)] = inst_48324);

(statearr_48348_48410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (13))){
var state_48340__$1 = state_48340;
var statearr_48349_48411 = state_48340__$1;
(statearr_48349_48411[(2)] = null);

(statearr_48349_48411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (6))){
var inst_48275 = (state_48340[(7)]);
var inst_48314 = (inst_48275 > (0));
var state_48340__$1 = state_48340;
if(cljs.core.truth_(inst_48314)){
var statearr_48350_48412 = state_48340__$1;
(statearr_48350_48412[(1)] = (12));

} else {
var statearr_48351_48413 = state_48340__$1;
(statearr_48351_48413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (3))){
var inst_48332 = (state_48340[(2)]);
var state_48340__$1 = state_48340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48340__$1,inst_48332);
} else {
if((state_val_48341 === (12))){
var inst_48274 = (state_48340[(8)]);
var inst_48322 = cljs.core.vec.call(null,inst_48274);
var state_48340__$1 = state_48340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48340__$1,(15),out,inst_48322);
} else {
if((state_val_48341 === (2))){
var state_48340__$1 = state_48340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48340__$1,(4),ch);
} else {
if((state_val_48341 === (11))){
var inst_48308 = (state_48340[(2)]);
var inst_48309 = (new Array(n));
var inst_48274 = inst_48309;
var inst_48275 = (0);
var state_48340__$1 = (function (){var statearr_48369 = state_48340;
(statearr_48369[(7)] = inst_48275);

(statearr_48369[(8)] = inst_48274);

(statearr_48369[(10)] = inst_48308);

return statearr_48369;
})();
var statearr_48370_48414 = state_48340__$1;
(statearr_48370_48414[(2)] = null);

(statearr_48370_48414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (9))){
var inst_48274 = (state_48340[(8)]);
var inst_48306 = cljs.core.vec.call(null,inst_48274);
var state_48340__$1 = state_48340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48340__$1,(11),out,inst_48306);
} else {
if((state_val_48341 === (5))){
var inst_48275 = (state_48340[(7)]);
var inst_48274 = (state_48340[(8)]);
var inst_48291 = (state_48340[(11)]);
var inst_48278 = (state_48340[(9)]);
var inst_48282 = (inst_48274[inst_48275] = inst_48278);
var inst_48291__$1 = (inst_48275 + (1));
var inst_48299 = (inst_48291__$1 < n);
var state_48340__$1 = (function (){var statearr_48377 = state_48340;
(statearr_48377[(12)] = inst_48282);

(statearr_48377[(11)] = inst_48291__$1);

return statearr_48377;
})();
if(cljs.core.truth_(inst_48299)){
var statearr_48378_48419 = state_48340__$1;
(statearr_48378_48419[(1)] = (8));

} else {
var statearr_48379_48420 = state_48340__$1;
(statearr_48379_48420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (14))){
var inst_48327 = (state_48340[(2)]);
var inst_48328 = cljs.core.async.close_BANG_.call(null,out);
var state_48340__$1 = (function (){var statearr_48381 = state_48340;
(statearr_48381[(13)] = inst_48327);

return statearr_48381;
})();
var statearr_48382_48421 = state_48340__$1;
(statearr_48382_48421[(2)] = inst_48328);

(statearr_48382_48421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (10))){
var inst_48312 = (state_48340[(2)]);
var state_48340__$1 = state_48340;
var statearr_48383_48422 = state_48340__$1;
(statearr_48383_48422[(2)] = inst_48312);

(statearr_48383_48422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48341 === (8))){
var inst_48274 = (state_48340[(8)]);
var inst_48291 = (state_48340[(11)]);
var tmp48380 = inst_48274;
var inst_48274__$1 = tmp48380;
var inst_48275 = inst_48291;
var state_48340__$1 = (function (){var statearr_48384 = state_48340;
(statearr_48384[(7)] = inst_48275);

(statearr_48384[(8)] = inst_48274__$1);

return statearr_48384;
})();
var statearr_48385_48424 = state_48340__$1;
(statearr_48385_48424[(2)] = null);

(statearr_48385_48424[(1)] = (2));


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
});})(c__44867__auto___48397,out))
;
return ((function (switch__44548__auto__,c__44867__auto___48397,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_48386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48386[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_48386[(1)] = (1));

return statearr_48386;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_48340){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_48340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e48387){if((e48387 instanceof Object)){
var ex__44553__auto__ = e48387;
var statearr_48388_48433 = state_48340;
(statearr_48388_48433[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48435 = state_48340;
state_48340 = G__48435;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_48340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_48340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___48397,out))
})();
var state__44869__auto__ = (function (){var statearr_48392 = f__44868__auto__.call(null);
(statearr_48392[(6)] = c__44867__auto___48397);

return statearr_48392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___48397,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48437 = arguments.length;
switch (G__48437) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44867__auto___48519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___48519,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___48519,out){
return (function (state_48479){
var state_val_48480 = (state_48479[(1)]);
if((state_val_48480 === (7))){
var inst_48475 = (state_48479[(2)]);
var state_48479__$1 = state_48479;
var statearr_48481_48522 = state_48479__$1;
(statearr_48481_48522[(2)] = inst_48475);

(statearr_48481_48522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (1))){
var inst_48438 = [];
var inst_48439 = inst_48438;
var inst_48440 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48479__$1 = (function (){var statearr_48482 = state_48479;
(statearr_48482[(7)] = inst_48439);

(statearr_48482[(8)] = inst_48440);

return statearr_48482;
})();
var statearr_48483_48525 = state_48479__$1;
(statearr_48483_48525[(2)] = null);

(statearr_48483_48525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (4))){
var inst_48443 = (state_48479[(9)]);
var inst_48443__$1 = (state_48479[(2)]);
var inst_48444 = (inst_48443__$1 == null);
var inst_48445 = cljs.core.not.call(null,inst_48444);
var state_48479__$1 = (function (){var statearr_48484 = state_48479;
(statearr_48484[(9)] = inst_48443__$1);

return statearr_48484;
})();
if(inst_48445){
var statearr_48485_48528 = state_48479__$1;
(statearr_48485_48528[(1)] = (5));

} else {
var statearr_48486_48529 = state_48479__$1;
(statearr_48486_48529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (15))){
var inst_48469 = (state_48479[(2)]);
var state_48479__$1 = state_48479;
var statearr_48487_48530 = state_48479__$1;
(statearr_48487_48530[(2)] = inst_48469);

(statearr_48487_48530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (13))){
var state_48479__$1 = state_48479;
var statearr_48488_48532 = state_48479__$1;
(statearr_48488_48532[(2)] = null);

(statearr_48488_48532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (6))){
var inst_48439 = (state_48479[(7)]);
var inst_48464 = inst_48439.length;
var inst_48465 = (inst_48464 > (0));
var state_48479__$1 = state_48479;
if(cljs.core.truth_(inst_48465)){
var statearr_48489_48535 = state_48479__$1;
(statearr_48489_48535[(1)] = (12));

} else {
var statearr_48490_48536 = state_48479__$1;
(statearr_48490_48536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (3))){
var inst_48477 = (state_48479[(2)]);
var state_48479__$1 = state_48479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48479__$1,inst_48477);
} else {
if((state_val_48480 === (12))){
var inst_48439 = (state_48479[(7)]);
var inst_48467 = cljs.core.vec.call(null,inst_48439);
var state_48479__$1 = state_48479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48479__$1,(15),out,inst_48467);
} else {
if((state_val_48480 === (2))){
var state_48479__$1 = state_48479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48479__$1,(4),ch);
} else {
if((state_val_48480 === (11))){
var inst_48443 = (state_48479[(9)]);
var inst_48447 = (state_48479[(10)]);
var inst_48457 = (state_48479[(2)]);
var inst_48458 = [];
var inst_48459 = inst_48458.push(inst_48443);
var inst_48439 = inst_48458;
var inst_48440 = inst_48447;
var state_48479__$1 = (function (){var statearr_48494 = state_48479;
(statearr_48494[(11)] = inst_48457);

(statearr_48494[(7)] = inst_48439);

(statearr_48494[(12)] = inst_48459);

(statearr_48494[(8)] = inst_48440);

return statearr_48494;
})();
var statearr_48495_48551 = state_48479__$1;
(statearr_48495_48551[(2)] = null);

(statearr_48495_48551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (9))){
var inst_48439 = (state_48479[(7)]);
var inst_48455 = cljs.core.vec.call(null,inst_48439);
var state_48479__$1 = state_48479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48479__$1,(11),out,inst_48455);
} else {
if((state_val_48480 === (5))){
var inst_48443 = (state_48479[(9)]);
var inst_48440 = (state_48479[(8)]);
var inst_48447 = (state_48479[(10)]);
var inst_48447__$1 = f.call(null,inst_48443);
var inst_48448 = cljs.core._EQ_.call(null,inst_48447__$1,inst_48440);
var inst_48449 = cljs.core.keyword_identical_QMARK_.call(null,inst_48440,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48450 = (inst_48448) || (inst_48449);
var state_48479__$1 = (function (){var statearr_48496 = state_48479;
(statearr_48496[(10)] = inst_48447__$1);

return statearr_48496;
})();
if(cljs.core.truth_(inst_48450)){
var statearr_48497_48552 = state_48479__$1;
(statearr_48497_48552[(1)] = (8));

} else {
var statearr_48498_48553 = state_48479__$1;
(statearr_48498_48553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (14))){
var inst_48472 = (state_48479[(2)]);
var inst_48473 = cljs.core.async.close_BANG_.call(null,out);
var state_48479__$1 = (function (){var statearr_48500 = state_48479;
(statearr_48500[(13)] = inst_48472);

return statearr_48500;
})();
var statearr_48501_48554 = state_48479__$1;
(statearr_48501_48554[(2)] = inst_48473);

(statearr_48501_48554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (10))){
var inst_48462 = (state_48479[(2)]);
var state_48479__$1 = state_48479;
var statearr_48504_48555 = state_48479__$1;
(statearr_48504_48555[(2)] = inst_48462);

(statearr_48504_48555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48480 === (8))){
var inst_48439 = (state_48479[(7)]);
var inst_48443 = (state_48479[(9)]);
var inst_48447 = (state_48479[(10)]);
var inst_48452 = inst_48439.push(inst_48443);
var tmp48499 = inst_48439;
var inst_48439__$1 = tmp48499;
var inst_48440 = inst_48447;
var state_48479__$1 = (function (){var statearr_48507 = state_48479;
(statearr_48507[(7)] = inst_48439__$1);

(statearr_48507[(8)] = inst_48440);

(statearr_48507[(14)] = inst_48452);

return statearr_48507;
})();
var statearr_48508_48558 = state_48479__$1;
(statearr_48508_48558[(2)] = null);

(statearr_48508_48558[(1)] = (2));


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
});})(c__44867__auto___48519,out))
;
return ((function (switch__44548__auto__,c__44867__auto___48519,out){
return (function() {
var cljs$core$async$state_machine__44549__auto__ = null;
var cljs$core$async$state_machine__44549__auto____0 = (function (){
var statearr_48511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48511[(0)] = cljs$core$async$state_machine__44549__auto__);

(statearr_48511[(1)] = (1));

return statearr_48511;
});
var cljs$core$async$state_machine__44549__auto____1 = (function (state_48479){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_48479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e48512){if((e48512 instanceof Object)){
var ex__44553__auto__ = e48512;
var statearr_48513_48562 = state_48479;
(statearr_48513_48562[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48563 = state_48479;
state_48479 = G__48563;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
cljs$core$async$state_machine__44549__auto__ = function(state_48479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44549__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44549__auto____1.call(this,state_48479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44549__auto____0;
cljs$core$async$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44549__auto____1;
return cljs$core$async$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___48519,out))
})();
var state__44869__auto__ = (function (){var statearr_48514 = f__44868__auto__.call(null);
(statearr_48514[(6)] = c__44867__auto___48519);

return statearr_48514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___48519,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1538003626878
