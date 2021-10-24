// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__13522){
var vec__13523 = p__13522;
var seq__13524 = cljs.core.seq.call(null,vec__13523);
var first__13525 = cljs.core.first.call(null,seq__13524);
var seq__13524__$1 = cljs.core.next.call(null,seq__13524);
var k = first__13525;
var ks = seq__13524__$1;
var keys = vec__13523;
if(ks){
var temp__5751__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var nextmap = temp__5751__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__4777__auto__ = [];
var len__4771__auto___13528 = arguments.length;
var i__4772__auto___13529 = (0);
while(true){
if((i__4772__auto___13529 < len__4771__auto___13528)){
args__4777__auto__.push((arguments[i__4772__auto___13529]));

var G__13530 = (i__4772__auto___13529 + (1));
i__4772__auto___13529 = G__13530;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((1) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4778__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq13526){
var G__13527 = cljs.core.first.call(null,seq13526);
var seq13526__$1 = cljs.core.next.call(null,seq13526);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13527,seq13526__$1);
}));

