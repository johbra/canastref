// Compiled by ClojureScript 1.10.844 {:static-fns true, :optimize-constants true}
goog.provide('medley.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(var_args){
var G__21712 = arguments.length;
switch (G__21712) {
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
var G__21714 = null;
var G__21714__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21714__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21714__2 = (function (result,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x)));
} else {
return result;
}
});
G__21714 = function(result,x){
switch(arguments.length){
case 0:
return G__21714__0.call(this);
case 1:
return G__21714__1.call(this,result);
case 2:
return G__21714__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21714.cljs$core$IFn$_invoke$arity$0 = G__21714__0;
G__21714.cljs$core$IFn$_invoke$arity$1 = G__21714__1;
G__21714.cljs$core$IFn$_invoke$arity$2 = G__21714__2;
return G__21714;
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
var G__21719 = arguments.length;
switch (G__21719) {
case 2:
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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

var argseq__4793__auto__ = (new cljs.core.IndexedSeq(args_arr__4792__auto__.slice((2)),(0),null));
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4793__auto__);

}
});

(medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 = (function (m,ks){
var temp__5751__auto__ = cljs.core.seq(ks);
if(temp__5751__auto__){
var vec__21720 = temp__5751__auto__;
var seq__21721 = cljs.core.seq(vec__21720);
var first__21722 = cljs.core.first(seq__21721);
var seq__21721__$1 = cljs.core.next(seq__21721);
var k = first__21722;
var ks__$1 = seq__21721__$1;
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
var vec__21723 = temp__5751__auto__;
var seq__21724 = cljs.core.seq(vec__21723);
var first__21725 = cljs.core.first(seq__21724);
var seq__21724__$1 = cljs.core.next(seq__21724);
var ks_SINGLEQUOTE_ = first__21725;
var kss__$1 = seq__21724__$1;
var G__21730 = medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
var G__21731 = ks_SINGLEQUOTE_;
var G__21732 = kss__$1;
m = G__21730;
ks = G__21731;
kss = G__21732;
continue;
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(m,ks);
}
break;
}
}));

/** @this {Function} */
(medley.core.dissoc_in.cljs$lang$applyTo = (function (seq21716){
var G__21717 = cljs.core.first(seq21716);
var seq21716__$1 = cljs.core.next(seq21716);
var G__21718 = cljs.core.first(seq21716__$1);
var seq21716__$2 = cljs.core.next(seq21716__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21717,G__21718,seq21716__$2);
}));

(medley.core.dissoc_in.cljs$lang$maxFixedArity = (2));

/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__21738 = arguments.length;
switch (G__21738) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21744 = arguments.length;
var i__4772__auto___21745 = (0);
while(true){
if((i__4772__auto___21745 < len__4771__auto___21744)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21745]));

var G__21746 = (i__4772__auto___21745 + (1));
i__4772__auto___21745 = G__21746;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__21739){
var vec__21740 = p__21739;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21740,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21740,(1),null);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}),medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
}));

/** @this {Function} */
(medley.core.assoc_some.cljs$lang$applyTo = (function (seq21734){
var G__21735 = cljs.core.first(seq21734);
var seq21734__$1 = cljs.core.next(seq21734);
var G__21736 = cljs.core.first(seq21734__$1);
var seq21734__$2 = cljs.core.next(seq21734__$1);
var G__21737 = cljs.core.first(seq21734__$2);
var seq21734__$3 = cljs.core.next(seq21734__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21735,G__21736,G__21737,seq21734__$3);
}));

(medley.core.assoc_some.cljs$lang$maxFixedArity = (3));

/**
 * Updates a value in a map given a key and a function, if and only if the key
 *   exists in the map. See: `clojure.core/update`.
 */
medley.core.update_existing = (function medley$core$update_existing(var_args){
var G__21755 = arguments.length;
switch (G__21755) {
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
var len__4771__auto___21767 = arguments.length;
var i__4772__auto___21768 = (0);
while(true){
if((i__4772__auto___21768 < len__4771__auto___21767)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21768]));

var G__21769 = (i__4772__auto___21768 + (1));
i__4772__auto___21768 = G__21769;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21756 = cljs.core.val(kv);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21756) : f.call(null,G__21756));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21757 = cljs.core.val(kv);
var G__21758 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21757,G__21758) : f.call(null,G__21757,G__21758));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x,y){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21759 = cljs.core.val(kv);
var G__21760 = x;
var G__21761 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__21759,G__21760,G__21761) : f.call(null,G__21759,G__21760,G__21761));
})());
} else {
return m;
}
}));

(medley.core.update_existing.cljs$core$IFn$_invoke$arity$6 = (function (m,k,f,x,y,z){
var temp__5751__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__5751__auto__)){
var kv = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__21762 = cljs.core.val(kv);
var G__21763 = x;
var G__21764 = y;
var G__21765 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__21762,G__21763,G__21764,G__21765) : f.call(null,G__21762,G__21763,G__21764,G__21765));
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
(medley.core.update_existing.cljs$lang$applyTo = (function (seq21748){
var G__21749 = cljs.core.first(seq21748);
var seq21748__$1 = cljs.core.next(seq21748);
var G__21750 = cljs.core.first(seq21748__$1);
var seq21748__$2 = cljs.core.next(seq21748__$1);
var G__21751 = cljs.core.first(seq21748__$2);
var seq21748__$3 = cljs.core.next(seq21748__$2);
var G__21752 = cljs.core.first(seq21748__$3);
var seq21748__$4 = cljs.core.next(seq21748__$3);
var G__21753 = cljs.core.first(seq21748__$4);
var seq21748__$5 = cljs.core.next(seq21748__$4);
var G__21754 = cljs.core.first(seq21748__$5);
var seq21748__$6 = cljs.core.next(seq21748__$5);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21749,G__21750,G__21751,G__21752,G__21753,G__21754,seq21748__$6);
}));

(medley.core.update_existing.cljs$lang$maxFixedArity = (6));

/**
 * Updates a value in a nested associative structure, if and only if the key
 *   path exists. See: `clojure.core/update-in`.
 */
medley.core.update_existing_in = (function medley$core$update_existing_in(var_args){
var args__4777__auto__ = [];
var len__4771__auto___21777 = arguments.length;
var i__4772__auto___21778 = (0);
while(true){
if((i__4772__auto___21778 < len__4771__auto___21777)){
args__4777__auto__.push((arguments[i__4772__auto___21778]));

var G__21779 = (i__4772__auto___21778 + (1));
i__4772__auto___21778 = G__21779;
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
var vec__21774 = ks__$1;
var seq__21775 = cljs.core.seq(vec__21774);
var first__21776 = cljs.core.first(seq__21775);
var seq__21775__$1 = cljs.core.next(seq__21775);
var k = first__21776;
var ks__$2 = seq__21775__$1;
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
(medley.core.update_existing_in.cljs$lang$applyTo = (function (seq21770){
var G__21771 = cljs.core.first(seq21770);
var seq21770__$1 = cljs.core.next(seq21770);
var G__21772 = cljs.core.first(seq21770__$1);
var seq21770__$2 = cljs.core.next(seq21770__$1);
var G__21773 = cljs.core.first(seq21770__$2);
var seq21770__$3 = cljs.core.next(seq21770__$2);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21771,G__21772,G__21773,seq21770__$3);
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
var vec__21781 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(1),null);
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
var G__21784 = m;
var G__21785 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
var G__21786 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21784,G__21785,G__21786) : xf.call(null,G__21784,G__21785,G__21786));
});
}),coll);
});
/**
 * Maps a function over the values of one or more associative collections.
 *   The function should accept number-of-colls arguments. Any keys which are not
 *   shared among all collections are ignored.
 */
medley.core.map_vals = (function medley$core$map_vals(var_args){
var G__21793 = arguments.length;
switch (G__21793) {
case 2:
return medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21801 = arguments.length;
var i__4772__auto___21802 = (0);
while(true){
if((i__4772__auto___21802 < len__4771__auto___21801)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21802]));

var G__21803 = (i__4772__auto___21802 + (1));
i__4772__auto___21802 = G__21803;
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
var G__21794 = m;
var G__21795 = k;
var G__21796 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21794,G__21795,G__21796) : xf.call(null,G__21794,G__21795,G__21796));
});
}),coll);
}));

(medley.core.map_vals.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,colls){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
if(cljs.core.every_QMARK_((function (p1__21787_SHARP_){
return cljs.core.contains_QMARK_(p1__21787_SHARP_,k);
}),colls)){
var G__21797 = m;
var G__21798 = k;
var G__21799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21788_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__21788_SHARP_,k);
}),colls));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21797,G__21798,G__21799) : xf.call(null,G__21797,G__21798,G__21799));
} else {
return m;
}
});
}),c1);
}));

/** @this {Function} */
(medley.core.map_vals.cljs$lang$applyTo = (function (seq21790){
var G__21791 = cljs.core.first(seq21790);
var seq21790__$1 = cljs.core.next(seq21790);
var G__21792 = cljs.core.first(seq21790__$1);
var seq21790__$2 = cljs.core.next(seq21790__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21791,G__21792,seq21790__$2);
}));

(medley.core.map_vals.cljs$lang$maxFixedArity = (2));

/**
 * Maps a function over the key/value pairs of an associative collection, using
 *   the return of the function as the new key.
 */
medley.core.map_kv_keys = (function medley$core$map_kv_keys(f,coll){
return medley.core.reduce_map((function (xf){
return (function (m,k,v){
var G__21804 = m;
var G__21805 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
var G__21806 = v;
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21804,G__21805,G__21806) : xf.call(null,G__21804,G__21805,G__21806));
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
var G__21807 = m;
var G__21808 = k;
var G__21809 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
return (xf.cljs$core$IFn$_invoke$arity$3 ? xf.cljs$core$IFn$_invoke$arity$3(G__21807,G__21808,G__21809) : xf.call(null,G__21807,G__21808,G__21809));
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
var G__21811 = arguments.length;
switch (G__21811) {
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
var G__21817 = arguments.length;
switch (G__21817) {
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
var len__4771__auto___21819 = arguments.length;
var i__4772__auto___21820 = (0);
while(true){
if((i__4772__auto___21820 < len__4771__auto___21819)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21820]));

var G__21821 = (i__4772__auto___21820 + (1));
i__4772__auto___21820 = G__21821;
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
(medley.core.least.cljs$lang$applyTo = (function (seq21814){
var G__21815 = cljs.core.first(seq21814);
var seq21814__$1 = cljs.core.next(seq21814);
var G__21816 = cljs.core.first(seq21814__$1);
var seq21814__$2 = cljs.core.next(seq21814__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21815,G__21816,seq21814__$2);
}));

(medley.core.least.cljs$lang$maxFixedArity = (2));

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__21826 = arguments.length;
switch (G__21826) {
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
var len__4771__auto___21828 = arguments.length;
var i__4772__auto___21829 = (0);
while(true){
if((i__4772__auto___21829 < len__4771__auto___21828)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21829]));

var G__21830 = (i__4772__auto___21829 + (1));
i__4772__auto___21829 = G__21830;
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
(medley.core.greatest.cljs$lang$applyTo = (function (seq21823){
var G__21824 = cljs.core.first(seq21823);
var seq21823__$1 = cljs.core.next(seq21823);
var G__21825 = cljs.core.first(seq21823__$1);
var seq21823__$2 = cljs.core.next(seq21823__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21824,G__21825,seq21823__$2);
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__21831 = cljs.core.rest(s);
return (medley.core.join.cljs$core$IFn$_invoke$arity$1 ? medley.core.join.cljs$core$IFn$_invoke$arity$1(G__21831) : medley.core.join.call(null,G__21831));
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
var G__21836 = arguments.length;
switch (G__21836) {
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
var len__4771__auto___21838 = arguments.length;
var i__4772__auto___21839 = (0);
while(true){
if((i__4772__auto___21839 < len__4771__auto___21838)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21839]));

var G__21840 = (i__4772__auto___21839 + (1));
i__4772__auto___21839 = G__21840;
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
(medley.core.deep_merge.cljs$lang$applyTo = (function (seq21833){
var G__21834 = cljs.core.first(seq21833);
var seq21833__$1 = cljs.core.next(seq21833);
var G__21835 = cljs.core.first(seq21833__$1);
var seq21833__$2 = cljs.core.next(seq21833__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21834,G__21835,seq21833__$2);
}));

(medley.core.deep_merge.cljs$lang$maxFixedArity = (2));

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__21845 = arguments.length;
switch (G__21845) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21847 = arguments.length;
var i__4772__auto___21848 = (0);
while(true){
if((i__4772__auto___21848 < len__4771__auto___21847)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21848]));

var G__21849 = (i__4772__auto___21848 + (1));
i__4772__auto___21848 = G__21849;
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
(medley.core.mapply.cljs$lang$applyTo = (function (seq21842){
var G__21843 = cljs.core.first(seq21842);
var seq21842__$1 = cljs.core.next(seq21842);
var G__21844 = cljs.core.first(seq21842__$1);
var seq21842__$2 = cljs.core.next(seq21842__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21843,G__21844,seq21842__$2);
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
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21850_SHARP_,p2__21851_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__21850_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__21851_SHARP_) : f.call(null,p2__21851_SHARP_)),p2__21851_SHARP_);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__21856 = arguments.length;
switch (G__21856) {
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
var len__4771__auto___21858 = arguments.length;
var i__4772__auto___21859 = (0);
while(true){
if((i__4772__auto___21859 < len__4771__auto___21858)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21859]));

var G__21860 = (i__4772__auto___21859 + (1));
i__4772__auto___21859 = G__21860;
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
(medley.core.interleave_all.cljs$lang$applyTo = (function (seq21853){
var G__21854 = cljs.core.first(seq21853);
var seq21853__$1 = cljs.core.next(seq21853);
var G__21855 = cljs.core.first(seq21853__$1);
var seq21853__$2 = cljs.core.next(seq21853__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21854,G__21855,seq21853__$2);
}));

(medley.core.interleave_all.cljs$lang$maxFixedArity = (2));

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__21862 = arguments.length;
switch (G__21862) {
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
var G__21873 = null;
var G__21873__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21873__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21873__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21873 = function(result,x){
switch(arguments.length){
case 0:
return G__21873__0.call(this);
case 1:
return G__21873__1.call(this,result);
case 2:
return G__21873__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21873.cljs$core$IFn$_invoke$arity$0 = G__21873__0;
G__21873.cljs$core$IFn$_invoke$arity$1 = G__21873__1;
G__21873.cljs$core$IFn$_invoke$arity$2 = G__21873__2;
return G__21873;
})()
});
}));

(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__21867 = (function (p__21868,seen__$1){
while(true){
var vec__21869 = p__21868;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21869,(0),null);
var xs__$1 = vec__21869;
var temp__5753__auto__ = cljs.core.seq(xs__$1);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__21874 = cljs.core.rest(s);
var G__21875 = seen__$1;
p__21868 = G__21874;
seen__$1 = G__21875;
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
return fexpr__21867(xs,seen);
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
var G__21877 = arguments.length;
switch (G__21877) {
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
var G__21879 = null;
var G__21879__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21879__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21879__2 = (function (result,x){
var prior = cljs.core.deref(pv);
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
cljs.core.vreset_BANG_(pv,fx);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prior,fx)){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21879 = function(result,x){
switch(arguments.length){
case 0:
return G__21879__0.call(this);
case 1:
return G__21879__1.call(this,result);
case 2:
return G__21879__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21879.cljs$core$IFn$_invoke$arity$0 = G__21879__0;
G__21879.cljs$core$IFn$_invoke$arity$1 = G__21879__1;
G__21879.cljs$core$IFn$_invoke$arity$2 = G__21879__2;
return G__21879;
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
var G__21881 = arguments.length;
switch (G__21881) {
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
var G__21883 = null;
var G__21883__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21883__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21883__2 = (function (result,x){
var result__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.ensure_reduced(result__$1);
} else {
return result__$1;
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
var G__21885 = arguments.length;
switch (G__21885) {
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
var G__21887 = null;
var G__21887__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21887__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21887__2 = (function (result,x){
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

(medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),coll));
}));

(medley.core.drop_upto.cljs$lang$maxFixedArity = 2);

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__21889 = arguments.length;
switch (G__21889) {
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
var G__21893 = null;
var G__21893__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21893__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21893__2 = (function (result,x){
var G__21890 = result;
var G__21891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(i.cljs$core$IDeref$_deref$arity$1(null) + (1))),x], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21890,G__21891) : rf.call(null,G__21890,G__21891));
});
G__21893 = function(result,x){
switch(arguments.length){
case 0:
return G__21893__0.call(this);
case 1:
return G__21893__1.call(this,result);
case 2:
return G__21893__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21893.cljs$core$IFn$_invoke$arity$0 = G__21893__0;
G__21893.cljs$core$IFn$_invoke$arity$1 = G__21893__1;
G__21893.cljs$core$IFn$_invoke$arity$2 = G__21893__2;
return G__21893;
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
var G__21895 = arguments.length;
switch (G__21895) {
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
var G__21900 = null;
var G__21900__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21900__1 = (function (result){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(idx),(1))){
var G__21896 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21896) : rf.call(null,G__21896));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
}
});
var G__21900__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
var G__21897 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
var G__21898 = x;
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__21897,G__21898) : rf.call(null,G__21897,G__21898));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21900 = function(result,x){
switch(arguments.length){
case 0:
return G__21900__0.call(this);
case 1:
return G__21900__1.call(this,result);
case 2:
return G__21900__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21900.cljs$core$IFn$_invoke$arity$0 = G__21900__0;
G__21900.cljs$core$IFn$_invoke$arity$1 = G__21900__1;
G__21900.cljs$core$IFn$_invoke$arity$2 = G__21900__2;
return G__21900;
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
var G__21902 = arguments.length;
switch (G__21902) {
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
var G__21904 = null;
var G__21904__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21904__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21904__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return result;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21904 = function(result,x){
switch(arguments.length){
case 0:
return G__21904__0.call(this);
case 1:
return G__21904__1.call(this,result);
case 2:
return G__21904__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21904.cljs$core$IFn$_invoke$arity$0 = G__21904__0;
G__21904.cljs$core$IFn$_invoke$arity$1 = G__21904__1;
G__21904.cljs$core$IFn$_invoke$arity$2 = G__21904__2;
return G__21904;
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
var G__21906 = arguments.length;
switch (G__21906) {
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
var G__21908 = null;
var G__21908__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21908__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__21908__2 = (function (result,x){
if((idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) - (1))) === (0))){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,item) : rf.call(null,result,item));
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__21908 = function(result,x){
switch(arguments.length){
case 0:
return G__21908__0.call(this);
case 1:
return G__21908__1.call(this,result);
case 2:
return G__21908__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21908.cljs$core$IFn$_invoke$arity$0 = G__21908__0;
G__21908.cljs$core$IFn$_invoke$arity$1 = G__21908__1;
G__21908.cljs$core$IFn$_invoke$arity$2 = G__21908__2;
return G__21908;
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
var G__21914 = arguments.length;
switch (G__21914) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4792__auto__ = [];
var len__4771__auto___21916 = arguments.length;
var i__4772__auto___21917 = (0);
while(true){
if((i__4772__auto___21917 < len__4771__auto___21916)){
args_arr__4792__auto__.push((arguments[i__4772__auto___21917]));

var G__21918 = (i__4772__auto___21917 + (1));
i__4772__auto___21917 = G__21918;
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
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2(atom,(function (p1__21909_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__21909_SHARP_,args);
}));
}));

/** @this {Function} */
(medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq21911){
var G__21912 = cljs.core.first(seq21911);
var seq21911__$1 = cljs.core.next(seq21911);
var G__21913 = cljs.core.first(seq21911__$1);
var seq21911__$2 = cljs.core.next(seq21911__$1);
var self__4758__auto__ = this;
return self__4758__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21912,G__21913,seq21911__$2);
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
