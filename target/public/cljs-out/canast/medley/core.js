// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('medley.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__21695 = arguments.length;
switch (G__21695) {
case 1:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.find_first.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__21697 = null;
var G__21697__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21697__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21697__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__21697 = function(result,x){
switch(arguments.length){
case 0:
return G__21697__0.call(this);
case 1:
return G__21697__1.call(this,result);
case 2:
return G__21697__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21697.cljs$core$IFn$_invoke$arity$0 = G__21697__0;
G__21697.cljs$core$IFn$_invoke$arity$1 = G__21697__1;
G__21697.cljs$core$IFn$_invoke$arity$2 = G__21697__2;
return G__21697;
})()
});
}));

(medley.core.find_first.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return null;
}
}),null,coll);
}));

(medley.core.find_first.cljs$lang$maxFixedArity = 2);

/**
 * Dissociate a value in a nested associative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(var_args){
var G__21702 = arguments.length;
switch (G__21702) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21710 = arguments.length;
var i__4772__auto___21711 = (0);
while(true){
if((i__4772__auto___21711 < len__4771__auto___21710)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21711]));

var G__21712 = (i__4772__auto___21711 + (1));
i__4772__auto___21711 = G__21712;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5751__auto__ = cljs.core.seq(ks);
if(temp__5751__auto__){
var vec__21703 = temp__5751__auto__;
var seq__21704 = cljs.core.seq(vec__21703);
var first__21705 = cljs.core.first(seq__21704);
var seq__21704__$1 = cljs.core.next(seq__21704);
var k = first__21705;
var ks__$1 = seq__21704__$1;
if(cljs.core.seq(ks__$1)){
var v = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
}));

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,kss){
while(true){
var temp__5751__auto__ = cljs.core.seq(kss);
if(temp__5751__auto__){
var vec__21706 = temp__5751__auto__;
var seq__21707 = cljs.core.seq(vec__21706);
var first__21708 = cljs.core.first(seq__21707);
var seq__21707__$1 = cljs.core.next(seq__21707);
var ks_SINGLEQUOTE_ = first__21708;
var kss__$1 = seq__21707__$1;
var G__21713 = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__21714 = ks_SINGLEQUOTE_;
var G__21715 = kss__$1;
m = G__21713;
ks = G__21714;
kss = G__21715;
continue;
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq21699){
var G__21700 = cljs.core.first(seq21699);
var seq21699__$1 = cljs.core.next(seq21699);
var G__21701 = cljs.core.first(seq21699__$1);
var seq21699__$2 = cljs.core.next(seq21699__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21700,G__21701,seq21699__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__21721 = arguments.length;
switch (G__21721) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21727 = arguments.length;
var i__4772__auto___21728 = (0);
while(true){
if((i__4772__auto___21728 < len__4771__auto___21727)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21728]));

var G__21729 = (i__4772__auto___21728 + (1));
i__4772__auto___21728 = G__21729;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4793__auto__);

}
});

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__21722){
var vec__21723 = p__21722;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21723,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq21717){
var G__21718 = cljs.core.first(seq21717);
var seq21717__$1 = cljs.core.next(seq21717);
var G__21719 = cljs.core.first(seq21717__$1);
var seq21717__$2 = cljs.core.next(seq21717__$1);
var G__21720 = cljs.core.first(seq21717__$2);
var seq21717__$3 = cljs.core.next(seq21717__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21718,G__21719,G__21720,seq21717__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__21738 = arguments.length;
switch (G__21738) {
case 3:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21750 = arguments.length;
var i__4772__auto___21751 = (0);
while(true){
if((i__4772__auto___21751 < len__4771__auto___21750)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21751]));

var G__21752 = (i__4772__auto___21751 + (1));
i__4772__auto___21751 = G__21752;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((6)),(0),null));
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4793__auto__);

}
});

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21739 = cljs.core.val(kv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21739) : f.call(null,G__21739));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21740 = cljs.core.val(kv);
var G__21741 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21740,G__21741) : f.call(null,G__21740,G__21741));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21742 = cljs.core.val(kv);
var G__21743 = x;
var G__21744 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21742,G__21743,G__21744) : f.call(null,G__21742,G__21743,G__21744));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21745 = cljs.core.val(kv);
var G__21746 = x;
var G__21747 = y;
var G__21748 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__21745,G__21746,G__21747,G__21748) : f.call(null,G__21745,G__21746,G__21747,G__21748));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x,y,z,more){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.val(kv),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
} else {
return m;
}
}));

/** @this {Function} */
(medley.core.update_existing.cljs$lang$applyTo = (function (seq21731){
var G__21732 = cljs.core.first(seq21731);
var seq21731__$1 = cljs.core.next(seq21731);
var G__21733 = cljs.core.first(seq21731__$1);
var seq21731__$2 = cljs.core.next(seq21731__$1);
var G__21734 = cljs.core.first(seq21731__$2);
var seq21731__$3 = cljs.core.next(seq21731__$2);
var G__21735 = cljs.core.first(seq21731__$3);
var seq21731__$4 = cljs.core.next(seq21731__$3);
var G__21736 = cljs.core.first(seq21731__$4);
var seq21731__$5 = cljs.core.next(seq21731__$4);
var G__21737 = cljs.core.first(seq21731__$5);
var seq21731__$6 = cljs.core.next(seq21731__$5);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21732,G__21733,G__21734,G__21735,G__21736,G__21737,seq21731__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__4777__auto__ = [];
var len__4771__auto___21760 = arguments.length;
var i__4772__auto___21761 = (0);
while(true){
if((i__4772__auto___21761 < len__4771__auto___21760)){
args__4777__auto__.push((arguments[i__4772__auto___21761]));

var G__21762 = (i__4772__auto___21761 + (1));
i__4772__auto___21761 = G__21762;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((3) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((3)),(0),null)):null);
return medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4778__auto__);
});

(medley.core.update_existing_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function medley$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__21757 = ks__$1;
var seq__21758 = cljs.core.seq(vec__21757);
var first__21759 = cljs.core.first(seq__21758);
var seq__21758__$1 = cljs.core.next(seq__21758);
var k = first__21759;
var ks__$2 = seq__21758__$1;
var temp__5751__auto__ = cljs.core.find(m__$1,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
if(ks__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,medley$core$up(cljs.core.val(kv),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.val(kv),args__$1));
}
} else {
return m__$1;
}
});
return up(m,ks,f,args);
}));

(medley.core.update_existing_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq21753){
var G__21754 = cljs.core.first(seq21753);
var seq21753__$1 = cljs.core.next(seq21753);
var G__21755 = cljs.core.first(seq21753__$1);
var seq21753__$2 = cljs.core.next(seq21753__$1);
var G__21756 = cljs.core.first(seq21753__$2);
var seq21753__$3 = cljs.core.next(seq21753__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21754,G__21755,G__21756,seq21753__$3);
}));

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
var coll_SINGLEQUOTE_ = ((cljs.core.record_QMARK_(coll))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,coll):coll);
if(medley.core.editable_QMARK_(coll_SINGLEQUOTE_)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_BANG_) : f.call(null,cljs.core.assoc_BANG_)),cljs.core.transient$(cljs.core.empty(coll_SINGLEQUOTE_)),coll_SINGLEQUOTE_));
} else {
return cljs.core.reduce_kv((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc) : f.call(null,cljs.core.assoc)),cljs.core.empty(coll_SINGLEQUOTE_),coll_SINGLEQUOTE_);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
/**
 * Maps a function over the key/value pairs of an associative collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var vec__21764 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21764,(1),null);
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k__$1,v__$1) : xf.call(null,m,k__$1,v__$1));
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21767 = m;
var G__21768 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__21769 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21767,G__21768,G__21769) : xf.call(null,G__21767,G__21768,G__21769));
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__21776 = arguments.length;
switch (G__21776) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21784 = arguments.length;
var i__4772__auto___21785 = (0);
while(true){
if((i__4772__auto___21785 < len__4771__auto___21784)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21785]));

var G__21786 = (i__4772__auto___21785 + (1));
i__4772__auto___21785 = G__21786;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21777 = m;
var G__21778 = k;
var G__21779 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21777,G__21778,G__21779) : xf.call(null,G__21777,G__21778,G__21779));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_((function (p1__21770_SHARP_){
return cljs.core.contains_QMARK_(p1__21770_SHARP_,k);
}),colls)){
var G__21780 = m;
var G__21781 = k;
var G__21782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21771_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__21771_SHARP_,k);
}),colls));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21780,G__21781,G__21782) : xf.call(null,G__21780,G__21781,G__21782));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq21773){
var G__21774 = cljs.core.first(seq21773);
var seq21773__$1 = cljs.core.next(seq21773);
var G__21775 = cljs.core.first(seq21773__$1);
var seq21773__$2 = cljs.core.next(seq21773__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21774,G__21775,seq21773__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21787 = m;
var G__21788 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var G__21789 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21787,G__21788,G__21789) : xf.call(null,G__21787,G__21788,G__21789));
});
}),coll);
});
/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new value.
 */
medley.core.map_kv_vals = (function medley$core$map_kv_vals(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21790 = m;
var G__21791 = k;
var G__21792 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21790,G__21791,G__21792) : xf.call(null,G__21790,G__21791,G__21792));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(m,k,v) : xf.call(null,m,k,v));
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys(cljs.core.complement(pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals(cljs.core.complement(pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__21794 = arguments.length;
switch (G__21794) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
}));

(medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(medley.core.queue.cljs$core$IFn$_invoke$arity$0(),coll);
}));

(medley.core.queue.cljs$lang$maxFixedArity = 1);

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return ((x === true) || (x === false));
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__21800 = arguments.length;
switch (G__21800) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21802 = arguments.length;
var i__4772__auto___21803 = (0);
while(true){
if((i__4772__auto___21803 < len__4771__auto___21802)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21803]));

var G__21804 = (i__4772__auto___21803 + (1));
i__4772__auto___21803 = G__21804;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) < (0))){
return a;
} else {
return b;
}
}));

(medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.least,medley.core.least.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.least.cljs$lang$applyTo = (function (seq21797){
var G__21798 = cljs.core.first(seq21797);
var seq21797__$1 = cljs.core.next(seq21797);
var G__21799 = cljs.core.first(seq21797__$1);
var seq21797__$2 = cljs.core.next(seq21797__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21798,G__21799,seq21797__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__21809 = arguments.length;
switch (G__21809) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21811 = arguments.length;
var i__4772__auto___21812 = (0);
while(true){
if((i__4772__auto___21812 < len__4771__auto___21811)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21812]));

var G__21813 = (i__4772__auto___21812 + (1));
i__4772__auto___21812 = G__21813;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare(a,b) > (0))){
return a;
} else {
return b;
}
}));

(medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.greatest,medley.core.greatest.cljs$core$IFn$_invoke$arity$2(a,b),more);
}));

/** @this {Function} */
(medley.core.greatest.cljs$lang$applyTo = (function (seq21806){
var G__21807 = cljs.core.first(seq21806);
var seq21806__$1 = cljs.core.next(seq21806);
var G__21808 = cljs.core.first(seq21806__$1);
var seq21806__$2 = cljs.core.next(seq21806__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21807,G__21808,seq21806__$2);
}));

(medley.core.greatest.cljs$lang$maxFixedArity = (2));

/**
 * Lazily concatenates a collection of collections into a flat sequence.
 */
medley.core.join = (function medley$core$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(colls);
if(temp__5753__auto__){
var s = temp__5753__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__21814 = cljs.core.rest(s);
return (medley.core.join.cljs$core$IFn$_invoke$arity$1 ? medley.core.join.cljs$core$IFn$_invoke$arity$1(G__21814) : medley.core.join.call(null,G__21814));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Recursively merges maps together. If all the maps supplied have nested maps
 *   under the same keys, these nested maps are merged. Otherwise the value is
 *   overwritten, as in `clojure.core/merge`.
 */
medley.core.deep_merge = (function medley$core$deep_merge(var_args){
var G__21819 = arguments.length;
switch (G__21819) {
case 0:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21821 = arguments.length;
var i__4772__auto___21822 = (0);
while(true){
if((i__4772__auto___21822 < len__4771__auto___21821)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21822]));

var G__21823 = (i__4772__auto___21822 + (1));
i__4772__auto___21822 = G__21823;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.truth_((function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return b;
}
})())){
var merge_entry = (function medley$core$merge_entry(m,e){
var k = cljs.core.key(e);
var v_SINGLEQUOTE_ = cljs.core.val(e);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(v_SINGLEQUOTE_)))){
return medley.core.deep_merge.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
} else {
return v_SINGLEQUOTE_;
}
})());
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v_SINGLEQUOTE_);
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(merge_entry,(function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq(b));
} else {
return null;
}
}));

(medley.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(medley.core.deep_merge,(function (){var or__4160__auto__ = a;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.cons(b,more));
}));

/** @this {Function} */
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq21816){
var G__21817 = cljs.core.first(seq21816);
var seq21816__$1 = cljs.core.next(seq21816);
var G__21818 = cljs.core.first(seq21816__$1);
var seq21816__$2 = cljs.core.next(seq21816__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21817,G__21818,seq21816__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__21828 = arguments.length;
switch (G__21828) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21830 = arguments.length;
var i__4772__auto___21831 = (0);
while(true){
if((i__4772__auto___21831 < len__4771__auto___21830)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21831]));

var G__21832 = (i__4772__auto___21831 + (1));
i__4772__auto___21831 = G__21832;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
}));

(medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,a,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

/** @this {Function} */
(medley.core.mapply.cljs$lang$applyTo = (function (seq21825){
var G__21826 = cljs.core.first(seq21825);
var seq21825__$1 = cljs.core.next(seq21825);
var G__21827 = cljs.core.first(seq21825__$1);
var seq21825__$2 = cljs.core.next(seq21825__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21826,G__21827,seq21825__$2);
}));

(medley.core.mapply.cljs$lang$maxFixedArity = (2));

/**
 * Returns a map of the elements of coll keyed by the result of f on each
 *   element. The value at each key will be the last element in coll associated
 *   with that key. This function is similar to `clojure.core/group-by`, except
 *   that elements with the same key are overwritten, rather than added to a
 *   vector of values.
 */
medley.core.index_by = (function medley$core$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21833_SHARP_,p2__21834_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__21833_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__21834_SHARP_) : f.call(null,p2__21834_SHARP_)),p2__21834_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__21839 = arguments.length;
switch (G__21839) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21841 = arguments.length;
var i__4772__auto___21842 = (0);
while(true){
if((i__4772__auto___21842 < len__4771__auto___21841)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21842]));

var G__21843 = (i__4772__auto___21842 + (1));
i__4772__auto___21842 = G__21843;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
return ((s1) || (s2));
}
}),null,null));
}));

(medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
if(cljs.core.seq(ss)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(medley.core.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
}));

/** @this {Function} */
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq21836){
var G__21837 = cljs.core.first(seq21836);
var seq21836__$1 = cljs.core.next(seq21836);
var G__21838 = cljs.core.first(seq21836__$1);
var seq21836__$2 = cljs.core.next(seq21836__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21837,G__21838,seq21836__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__21845 = arguments.length;
switch (G__21845) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__21856 = null;
var G__21856__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21856__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21856__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21856 = function(result,x){
switch(arguments.length){
case 0:
return G__21856__0.call(this);
case 1:
return G__21856__1.call(this,result);
case 2:
return G__21856__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21856.cljs$core$IFn$_invoke$arity$0 = G__21856__0;
G__21856.cljs$core$IFn$_invoke$arity$1 = G__21856__1;
G__21856.cljs$core$IFn$_invoke$arity$2 = G__21856__2;
return G__21856;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__21850 = (function (p__21851,seen__$1){
while(true){
var vec__21852 = p__21851;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21852,(0),null);
var xs__$1 = vec__21852;
var temp__5753__auto__ = cljs.core.seq(xs__$1);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__21857 = cljs.core.rest(s);
var G__21858 = seen__$1;
p__21851 = G__21857;
seen__$1 = G__21858;
continue;
} else {
return cljs.core.cons(x,medley$core$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
});
return fexpr__21850(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
}));

(medley.core.distinct_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__21860 = arguments.length;
switch (G__21860) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_(cljs.core.cst$kw$medley$core_SLASH_none);
return (function() {
var G__21862 = null;
var G__21862__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21862__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21862__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21862 = function(result,x){
switch(arguments.length){
case 0:
return G__21862__0.call(this);
case 1:
return G__21862__1.call(this,result);
case 2:
return G__21862__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21862.cljs$core$IFn$_invoke$arity$0 = G__21862__0;
G__21862.cljs$core$IFn$_invoke$arity$1 = G__21862__1;
G__21862.cljs$core$IFn$_invoke$arity$2 = G__21862__2;
return G__21862;
})()
});
}));

(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(medley.core.dedupe_by.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__21864 = arguments.length;
switch (G__21864) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__21866 = null;
var G__21866__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21866__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21866__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
}
});
G__21866 = function(result,x){
switch(arguments.length){
case 0:
return G__21866__0.call(this);
case 1:
return G__21866__1.call(this,result);
case 2:
return G__21866__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21866.cljs$core$IFn$_invoke$arity$0 = G__21866__0;
G__21866.cljs$core$IFn$_invoke$arity$1 = G__21866__1;
G__21866.cljs$core$IFn$_invoke$arity$2 = G__21866__2;
return G__21866;
})()
});
}));

(medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(coll);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var x = cljs.core.first(s);
return cljs.core.cons(x,((cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x))))?medley.core.take_upto.cljs$core$IFn$_invoke$arity$2(pred,cljs.core.rest(s)):null));
} else {
return null;
}
}),null,null));
}));

(medley.core.take_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__21868 = arguments.length;
switch (G__21868) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_(true);
return (function() {
var G__21870 = null;
var G__21870__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21870__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21870__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref(dv))){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
cljs.core.vreset_BANG_(dv,false);
} else {
}

return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21870 = function(result,x){
switch(arguments.length){
case 0:
return G__21870__0.call(this);
case 1:
return G__21870__1.call(this,result);
case 2:
return G__21870__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21870.cljs$core$IFn$_invoke$arity$0 = G__21870__0;
G__21870.cljs$core$IFn$_invoke$arity$1 = G__21870__1;
G__21870.cljs$core$IFn$_invoke$arity$2 = G__21870__2;
return G__21870;
})()
});
}));

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__21872 = arguments.length;
switch (G__21872) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_((-1));
return (function() {
var G__21876 = null;
var G__21876__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21876__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21876__2 = (function (result,x){
var G__21873 = result;
var G__21874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(i.cljs$core$IDeref$_deref$arity$1(null) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21873,G__21874) : rf.call(null,G__21873,G__21874));
});
G__21876 = function(result,x){
switch(arguments.length){
case 0:
return G__21876__0.call(this);
case 1:
return G__21876__1.call(this,result);
case 2:
return G__21876__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21876.cljs$core$IFn$_invoke$arity$0 = G__21876__0;
G__21876.cljs$core$IFn$_invoke$arity$1 = G__21876__1;
G__21876.cljs$core$IFn$_invoke$arity$2 = G__21876__2;
return G__21876;
})()
});
}));

(medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll);
}));

(medley.core.indexed.cljs$lang$maxFixedArity = 1);

/**
 * Returns a lazy sequence of the items in coll, with a new item inserted at
 *   the supplied index, followed by all subsequent items of the collection. Runs
 *   in O(n) time.
 */
medley.core.insert_nth = (function medley$core$insert_nth(var_args){
var G__21878 = arguments.length;
switch (G__21878) {
case 2:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__21883 = null;
var G__21883__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21883__1 = (function (result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(idx),(1))){
var G__21879 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21879) : rf.call(null,G__21879));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
}
});
var G__21883__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
var G__21880 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
var G__21881 = x;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21880,G__21881) : rf.call(null,G__21880,G__21881));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21883 = function(result,x){
switch(arguments.length){
case 0:
return G__21883__0.call(this);
case 1:
return G__21883__1.call(this,result);
case 2:
return G__21883__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21883.cljs$core$IFn$_invoke$arity$0 = G__21883__0;
G__21883.cljs$core$IFn$_invoke$arity$1 = G__21883__1;
G__21883.cljs$core$IFn$_invoke$arity$2 = G__21883__2;
return G__21883;
})()
});
}));

(medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.insert_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.insert_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll, except for the item at the
 *   supplied index. Runs in O(n) time.
 */
medley.core.remove_nth = (function medley$core$remove_nth(var_args){
var G__21885 = arguments.length;
switch (G__21885) {
case 1:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$1 = (function (index){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__21887 = null;
var G__21887__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21887__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21887__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21887 = function(result,x){
switch(arguments.length){
case 0:
return G__21887__0.call(this);
case 1:
return G__21887__1.call(this,result);
case 2:
return G__21887__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21887.cljs$core$IFn$_invoke$arity$0 = G__21887__0;
G__21887.cljs$core$IFn$_invoke$arity$1 = G__21887__1;
G__21887.cljs$core$IFn$_invoke$arity$2 = G__21887__2;
return G__21887;
})()
});
}));

(medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.rest(coll);
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.remove_nth.cljs$core$IFn$_invoke$arity$2((index - (1)),cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.remove_nth.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of the items in coll, with a new item replacing the
 *   item at the supplied index. Runs in O(n) time.
 */
medley.core.replace_nth = (function medley$core$replace_nth(var_args){
var G__21889 = arguments.length;
switch (G__21889) {
case 2:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$2 = (function (index,item){
return (function (rf){
var idx = cljs.core.volatile_BANG_((index + (1)));
return (function() {
var G__21891 = null;
var G__21891__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21891__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21891__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21891 = function(result,x){
switch(arguments.length){
case 0:
return G__21891__0.call(this);
case 1:
return G__21891__1.call(this,result);
case 2:
return G__21891__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21891.cljs$core$IFn$_invoke$arity$0 = G__21891__0;
G__21891.cljs$core$IFn$_invoke$arity$1 = G__21891__1;
G__21891.cljs$core$IFn$_invoke$arity$2 = G__21891__2;
return G__21891;
})()
});
}));

(medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3 = (function (index,item,coll){
return (new cljs.core.LazySeq(null,(function (){
if((index === (0))){
return cljs.core.cons(item,cljs.core.rest(coll));
} else {
if(cljs.core.seq(coll)){
return cljs.core.cons(cljs.core.first(coll),medley.core.replace_nth.cljs$core$IFn$_invoke$arity$3((index - (1)),item,cljs.core.rest(coll)));
} else {
return null;
}
}
}),null,null));
}));

(medley.core.replace_nth.cljs$lang$maxFixedArity = 3);

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__21897 = arguments.length;
switch (G__21897) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21899 = arguments.length;
var i__4772__auto___21900 = (0);
while(true){
if((i__4772__auto___21900 < len__4771__auto___21899)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21900]));

var G__21901 = (i__4772__auto___21900 + (1));
i__4772__auto___21900 = G__21901;
continue;
} else {
}
break;
}

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref(atom);
cljs.core.reset_BANG_(atom,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value)));

return value;
}));

(medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__21892_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__21892_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq21894){
var G__21895 = cljs.core.first(seq21894);
var seq21894__$1 = cljs.core.next(seq21894);
var G__21896 = cljs.core.first(seq21894__$1);
var seq21894__$2 = cljs.core.next(seq21894__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21895,G__21896,seq21894__$2);
}));

(medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,cljs.core.constantly(newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message(ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-cause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause(ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid(s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid();
});
