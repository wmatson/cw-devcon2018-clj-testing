// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42038__auto__,writer__42039__auto__,opt__42040__auto__){
return cljs.core._write.call(null,writer__42039__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45627 = arguments.length;
var i__42647__auto___45628 = (0);
while(true){
if((i__42647__auto___45628 < len__42646__auto___45627)){
args__42653__auto__.push((arguments[i__42647__auto___45628]));

var G__45629 = (i__42647__auto___45628 + (1));
i__42647__auto___45628 = G__45629;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq45614){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45614));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45641 = arguments.length;
var i__42647__auto___45643 = (0);
while(true){
if((i__42647__auto___45643 < len__42646__auto___45641)){
args__42653__auto__.push((arguments[i__42647__auto___45643]));

var G__45644 = (i__42647__auto___45643 + (1));
i__42647__auto___45643 = G__45644;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq45636){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45636));
});

var g_QMARK__45664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_45665 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45664){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__45664))
,null));
var mkg_45666 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__45664,g_45665){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__45664,g_45665))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__45664,g_45665,mkg_45666){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__45664).call(null,x);
});})(g_QMARK__45664,g_45665,mkg_45666))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__45664,g_45665,mkg_45666){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_45666).call(null,gfn);
});})(g_QMARK__45664,g_45665,mkg_45666))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__45664,g_45665,mkg_45666){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_45665).call(null,generator);
});})(g_QMARK__45664,g_45665,mkg_45666))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42749__auto___45830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42749__auto___45830){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45838 = arguments.length;
var i__42647__auto___45839 = (0);
while(true){
if((i__42647__auto___45839 < len__42646__auto___45838)){
args__42653__auto__.push((arguments[i__42647__auto___45839]));

var G__45841 = (i__42647__auto___45839 + (1));
i__42647__auto___45839 = G__45841;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45830))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45830){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45830),args);
});})(g__42749__auto___45830))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42749__auto___45830){
return (function (seq45679){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45679));
});})(g__42749__auto___45830))
;


var g__42749__auto___45844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42749__auto___45844){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45847 = arguments.length;
var i__42647__auto___45848 = (0);
while(true){
if((i__42647__auto___45848 < len__42646__auto___45847)){
args__42653__auto__.push((arguments[i__42647__auto___45848]));

var G__45849 = (i__42647__auto___45848 + (1));
i__42647__auto___45848 = G__45849;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45844))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45844){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45844),args);
});})(g__42749__auto___45844))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42749__auto___45844){
return (function (seq45684){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45684));
});})(g__42749__auto___45844))
;


var g__42749__auto___45853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42749__auto___45853){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45857 = arguments.length;
var i__42647__auto___45859 = (0);
while(true){
if((i__42647__auto___45859 < len__42646__auto___45857)){
args__42653__auto__.push((arguments[i__42647__auto___45859]));

var G__45865 = (i__42647__auto___45859 + (1));
i__42647__auto___45859 = G__45865;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45853))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45853){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45853),args);
});})(g__42749__auto___45853))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42749__auto___45853){
return (function (seq45688){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45688));
});})(g__42749__auto___45853))
;


var g__42749__auto___45869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42749__auto___45869){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45872 = arguments.length;
var i__42647__auto___45873 = (0);
while(true){
if((i__42647__auto___45873 < len__42646__auto___45872)){
args__42653__auto__.push((arguments[i__42647__auto___45873]));

var G__45878 = (i__42647__auto___45873 + (1));
i__42647__auto___45873 = G__45878;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45869))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45869),args);
});})(g__42749__auto___45869))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42749__auto___45869){
return (function (seq45693){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45693));
});})(g__42749__auto___45869))
;


var g__42749__auto___45880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42749__auto___45880){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45882 = arguments.length;
var i__42647__auto___45883 = (0);
while(true){
if((i__42647__auto___45883 < len__42646__auto___45882)){
args__42653__auto__.push((arguments[i__42647__auto___45883]));

var G__45885 = (i__42647__auto___45883 + (1));
i__42647__auto___45883 = G__45885;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45880))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45880){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45880),args);
});})(g__42749__auto___45880))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42749__auto___45880){
return (function (seq45698){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45698));
});})(g__42749__auto___45880))
;


var g__42749__auto___45889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42749__auto___45889){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45892 = arguments.length;
var i__42647__auto___45893 = (0);
while(true){
if((i__42647__auto___45893 < len__42646__auto___45892)){
args__42653__auto__.push((arguments[i__42647__auto___45893]));

var G__45894 = (i__42647__auto___45893 + (1));
i__42647__auto___45893 = G__45894;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45889))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45889),args);
});})(g__42749__auto___45889))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42749__auto___45889){
return (function (seq45704){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45704));
});})(g__42749__auto___45889))
;


var g__42749__auto___45897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42749__auto___45897){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45899 = arguments.length;
var i__42647__auto___45900 = (0);
while(true){
if((i__42647__auto___45900 < len__42646__auto___45899)){
args__42653__auto__.push((arguments[i__42647__auto___45900]));

var G__45901 = (i__42647__auto___45900 + (1));
i__42647__auto___45900 = G__45901;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45897))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45897),args);
});})(g__42749__auto___45897))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42749__auto___45897){
return (function (seq45708){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45708));
});})(g__42749__auto___45897))
;


var g__42749__auto___45906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42749__auto___45906){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45907 = arguments.length;
var i__42647__auto___45908 = (0);
while(true){
if((i__42647__auto___45908 < len__42646__auto___45907)){
args__42653__auto__.push((arguments[i__42647__auto___45908]));

var G__45909 = (i__42647__auto___45908 + (1));
i__42647__auto___45908 = G__45909;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45906))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45906),args);
});})(g__42749__auto___45906))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42749__auto___45906){
return (function (seq45711){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45711));
});})(g__42749__auto___45906))
;


var g__42749__auto___45912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42749__auto___45912){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45913 = arguments.length;
var i__42647__auto___45914 = (0);
while(true){
if((i__42647__auto___45914 < len__42646__auto___45913)){
args__42653__auto__.push((arguments[i__42647__auto___45914]));

var G__45915 = (i__42647__auto___45914 + (1));
i__42647__auto___45914 = G__45915;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45912))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45912){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45912),args);
});})(g__42749__auto___45912))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42749__auto___45912){
return (function (seq45715){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45715));
});})(g__42749__auto___45912))
;


var g__42749__auto___45938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42749__auto___45938){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45941 = arguments.length;
var i__42647__auto___45942 = (0);
while(true){
if((i__42647__auto___45942 < len__42646__auto___45941)){
args__42653__auto__.push((arguments[i__42647__auto___45942]));

var G__45944 = (i__42647__auto___45942 + (1));
i__42647__auto___45942 = G__45944;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45938))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45938),args);
});})(g__42749__auto___45938))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42749__auto___45938){
return (function (seq45726){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45726));
});})(g__42749__auto___45938))
;


var g__42749__auto___45950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42749__auto___45950){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45952 = arguments.length;
var i__42647__auto___45954 = (0);
while(true){
if((i__42647__auto___45954 < len__42646__auto___45952)){
args__42653__auto__.push((arguments[i__42647__auto___45954]));

var G__45956 = (i__42647__auto___45954 + (1));
i__42647__auto___45954 = G__45956;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45950))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45950){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45950),args);
});})(g__42749__auto___45950))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42749__auto___45950){
return (function (seq45738){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45738));
});})(g__42749__auto___45950))
;


var g__42749__auto___45960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42749__auto___45960){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45966 = arguments.length;
var i__42647__auto___45967 = (0);
while(true){
if((i__42647__auto___45967 < len__42646__auto___45966)){
args__42653__auto__.push((arguments[i__42647__auto___45967]));

var G__45968 = (i__42647__auto___45967 + (1));
i__42647__auto___45967 = G__45968;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45960))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45960){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45960),args);
});})(g__42749__auto___45960))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42749__auto___45960){
return (function (seq45744){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45744));
});})(g__42749__auto___45960))
;


var g__42749__auto___45970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42749__auto___45970){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45972 = arguments.length;
var i__42647__auto___45973 = (0);
while(true){
if((i__42647__auto___45973 < len__42646__auto___45972)){
args__42653__auto__.push((arguments[i__42647__auto___45973]));

var G__45975 = (i__42647__auto___45973 + (1));
i__42647__auto___45973 = G__45975;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45970))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45970){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45970),args);
});})(g__42749__auto___45970))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42749__auto___45970){
return (function (seq45749){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45749));
});})(g__42749__auto___45970))
;


var g__42749__auto___45978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42749__auto___45978){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45979 = arguments.length;
var i__42647__auto___45980 = (0);
while(true){
if((i__42647__auto___45980 < len__42646__auto___45979)){
args__42653__auto__.push((arguments[i__42647__auto___45980]));

var G__45982 = (i__42647__auto___45980 + (1));
i__42647__auto___45980 = G__45982;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45978))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45978){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45978),args);
});})(g__42749__auto___45978))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42749__auto___45978){
return (function (seq45753){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45753));
});})(g__42749__auto___45978))
;


var g__42749__auto___45988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42749__auto___45988){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45991 = arguments.length;
var i__42647__auto___45992 = (0);
while(true){
if((i__42647__auto___45992 < len__42646__auto___45991)){
args__42653__auto__.push((arguments[i__42647__auto___45992]));

var G__45994 = (i__42647__auto___45992 + (1));
i__42647__auto___45992 = G__45994;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45988))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45988),args);
});})(g__42749__auto___45988))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42749__auto___45988){
return (function (seq45757){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45757));
});})(g__42749__auto___45988))
;


var g__42749__auto___45996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42749__auto___45996){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42653__auto__ = [];
var len__42646__auto___45997 = arguments.length;
var i__42647__auto___45999 = (0);
while(true){
if((i__42647__auto___45999 < len__42646__auto___45997)){
args__42653__auto__.push((arguments[i__42647__auto___45999]));

var G__46000 = (i__42647__auto___45999 + (1));
i__42647__auto___45999 = G__46000;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___45996))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___45996){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___45996),args);
});})(g__42749__auto___45996))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42749__auto___45996){
return (function (seq45764){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45764));
});})(g__42749__auto___45996))
;


var g__42749__auto___46005 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42749__auto___46005){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46013 = arguments.length;
var i__42647__auto___46014 = (0);
while(true){
if((i__42647__auto___46014 < len__42646__auto___46013)){
args__42653__auto__.push((arguments[i__42647__auto___46014]));

var G__46015 = (i__42647__auto___46014 + (1));
i__42647__auto___46014 = G__46015;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___46005))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___46005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___46005),args);
});})(g__42749__auto___46005))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42749__auto___46005){
return (function (seq45769){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45769));
});})(g__42749__auto___46005))
;


var g__42749__auto___46019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42749__auto___46019){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46021 = arguments.length;
var i__42647__auto___46022 = (0);
while(true){
if((i__42647__auto___46022 < len__42646__auto___46021)){
args__42653__auto__.push((arguments[i__42647__auto___46022]));

var G__46023 = (i__42647__auto___46022 + (1));
i__42647__auto___46022 = G__46023;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___46019))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___46019){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___46019),args);
});})(g__42749__auto___46019))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42749__auto___46019){
return (function (seq45792){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45792));
});})(g__42749__auto___46019))
;


var g__42749__auto___46024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42749__auto___46024){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46025 = arguments.length;
var i__42647__auto___46026 = (0);
while(true){
if((i__42647__auto___46026 < len__42646__auto___46025)){
args__42653__auto__.push((arguments[i__42647__auto___46026]));

var G__46027 = (i__42647__auto___46026 + (1));
i__42647__auto___46026 = G__46027;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42749__auto___46024))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42749__auto___46024){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42749__auto___46024),args);
});})(g__42749__auto___46024))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42749__auto___46024){
return (function (seq45807){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45807));
});})(g__42749__auto___46024))
;

var g__42762__auto___46321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42762__auto___46321){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46327 = arguments.length;
var i__42647__auto___46328 = (0);
while(true){
if((i__42647__auto___46328 < len__42646__auto___46327)){
args__42653__auto__.push((arguments[i__42647__auto___46328]));

var G__46329 = (i__42647__auto___46328 + (1));
i__42647__auto___46328 = G__46329;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46321))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46321){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46321);
});})(g__42762__auto___46321))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42762__auto___46321){
return (function (seq46038){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46038));
});})(g__42762__auto___46321))
;


var g__42762__auto___46333 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42762__auto___46333){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46335 = arguments.length;
var i__42647__auto___46337 = (0);
while(true){
if((i__42647__auto___46337 < len__42646__auto___46335)){
args__42653__auto__.push((arguments[i__42647__auto___46337]));

var G__46339 = (i__42647__auto___46337 + (1));
i__42647__auto___46337 = G__46339;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46333))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46333){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46333);
});})(g__42762__auto___46333))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42762__auto___46333){
return (function (seq46065){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46065));
});})(g__42762__auto___46333))
;


var g__42762__auto___46343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42762__auto___46343){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46347 = arguments.length;
var i__42647__auto___46348 = (0);
while(true){
if((i__42647__auto___46348 < len__42646__auto___46347)){
args__42653__auto__.push((arguments[i__42647__auto___46348]));

var G__46350 = (i__42647__auto___46348 + (1));
i__42647__auto___46348 = G__46350;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46343))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46343){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46343);
});})(g__42762__auto___46343))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42762__auto___46343){
return (function (seq46075){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46075));
});})(g__42762__auto___46343))
;


var g__42762__auto___46353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42762__auto___46353){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46356 = arguments.length;
var i__42647__auto___46357 = (0);
while(true){
if((i__42647__auto___46357 < len__42646__auto___46356)){
args__42653__auto__.push((arguments[i__42647__auto___46357]));

var G__46359 = (i__42647__auto___46357 + (1));
i__42647__auto___46357 = G__46359;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46353))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46353){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46353);
});})(g__42762__auto___46353))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42762__auto___46353){
return (function (seq46085){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46085));
});})(g__42762__auto___46353))
;


var g__42762__auto___46363 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42762__auto___46363){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46366 = arguments.length;
var i__42647__auto___46369 = (0);
while(true){
if((i__42647__auto___46369 < len__42646__auto___46366)){
args__42653__auto__.push((arguments[i__42647__auto___46369]));

var G__46371 = (i__42647__auto___46369 + (1));
i__42647__auto___46369 = G__46371;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46363))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46363){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46363);
});})(g__42762__auto___46363))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42762__auto___46363){
return (function (seq46100){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46100));
});})(g__42762__auto___46363))
;


var g__42762__auto___46376 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42762__auto___46376){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46378 = arguments.length;
var i__42647__auto___46379 = (0);
while(true){
if((i__42647__auto___46379 < len__42646__auto___46378)){
args__42653__auto__.push((arguments[i__42647__auto___46379]));

var G__46381 = (i__42647__auto___46379 + (1));
i__42647__auto___46379 = G__46381;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46376))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46376){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46376);
});})(g__42762__auto___46376))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42762__auto___46376){
return (function (seq46104){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46104));
});})(g__42762__auto___46376))
;


var g__42762__auto___46383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42762__auto___46383){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46387 = arguments.length;
var i__42647__auto___46389 = (0);
while(true){
if((i__42647__auto___46389 < len__42646__auto___46387)){
args__42653__auto__.push((arguments[i__42647__auto___46389]));

var G__46390 = (i__42647__auto___46389 + (1));
i__42647__auto___46389 = G__46390;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46383))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46383){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46383);
});})(g__42762__auto___46383))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42762__auto___46383){
return (function (seq46116){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46116));
});})(g__42762__auto___46383))
;


var g__42762__auto___46395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42762__auto___46395){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46399 = arguments.length;
var i__42647__auto___46401 = (0);
while(true){
if((i__42647__auto___46401 < len__42646__auto___46399)){
args__42653__auto__.push((arguments[i__42647__auto___46401]));

var G__46403 = (i__42647__auto___46401 + (1));
i__42647__auto___46401 = G__46403;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46395))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46395){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46395);
});})(g__42762__auto___46395))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42762__auto___46395){
return (function (seq46122){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46122));
});})(g__42762__auto___46395))
;


var g__42762__auto___46410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42762__auto___46410){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46413 = arguments.length;
var i__42647__auto___46415 = (0);
while(true){
if((i__42647__auto___46415 < len__42646__auto___46413)){
args__42653__auto__.push((arguments[i__42647__auto___46415]));

var G__46417 = (i__42647__auto___46415 + (1));
i__42647__auto___46415 = G__46417;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46410))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46410){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46410);
});})(g__42762__auto___46410))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42762__auto___46410){
return (function (seq46129){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46129));
});})(g__42762__auto___46410))
;


var g__42762__auto___46422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42762__auto___46422){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46426 = arguments.length;
var i__42647__auto___46427 = (0);
while(true){
if((i__42647__auto___46427 < len__42646__auto___46426)){
args__42653__auto__.push((arguments[i__42647__auto___46427]));

var G__46428 = (i__42647__auto___46427 + (1));
i__42647__auto___46427 = G__46428;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46422))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46422){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46422);
});})(g__42762__auto___46422))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42762__auto___46422){
return (function (seq46132){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46132));
});})(g__42762__auto___46422))
;


var g__42762__auto___46433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42762__auto___46433){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46436 = arguments.length;
var i__42647__auto___46437 = (0);
while(true){
if((i__42647__auto___46437 < len__42646__auto___46436)){
args__42653__auto__.push((arguments[i__42647__auto___46437]));

var G__46438 = (i__42647__auto___46437 + (1));
i__42647__auto___46437 = G__46438;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46433))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46433){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46433);
});})(g__42762__auto___46433))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42762__auto___46433){
return (function (seq46137){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46137));
});})(g__42762__auto___46433))
;


var g__42762__auto___46440 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42762__auto___46440){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46445 = arguments.length;
var i__42647__auto___46446 = (0);
while(true){
if((i__42647__auto___46446 < len__42646__auto___46445)){
args__42653__auto__.push((arguments[i__42647__auto___46446]));

var G__46448 = (i__42647__auto___46446 + (1));
i__42647__auto___46446 = G__46448;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46440))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46440){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46440);
});})(g__42762__auto___46440))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42762__auto___46440){
return (function (seq46139){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46139));
});})(g__42762__auto___46440))
;


var g__42762__auto___46449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42762__auto___46449){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46454 = arguments.length;
var i__42647__auto___46455 = (0);
while(true){
if((i__42647__auto___46455 < len__42646__auto___46454)){
args__42653__auto__.push((arguments[i__42647__auto___46455]));

var G__46456 = (i__42647__auto___46455 + (1));
i__42647__auto___46455 = G__46456;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46449))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46449){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46449);
});})(g__42762__auto___46449))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42762__auto___46449){
return (function (seq46140){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46140));
});})(g__42762__auto___46449))
;


var g__42762__auto___46458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42762__auto___46458){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46461 = arguments.length;
var i__42647__auto___46462 = (0);
while(true){
if((i__42647__auto___46462 < len__42646__auto___46461)){
args__42653__auto__.push((arguments[i__42647__auto___46462]));

var G__46463 = (i__42647__auto___46462 + (1));
i__42647__auto___46462 = G__46463;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46458))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46458){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46458);
});})(g__42762__auto___46458))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42762__auto___46458){
return (function (seq46141){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46141));
});})(g__42762__auto___46458))
;


var g__42762__auto___46465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42762__auto___46465){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46469 = arguments.length;
var i__42647__auto___46470 = (0);
while(true){
if((i__42647__auto___46470 < len__42646__auto___46469)){
args__42653__auto__.push((arguments[i__42647__auto___46470]));

var G__46471 = (i__42647__auto___46470 + (1));
i__42647__auto___46470 = G__46471;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46465))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46465){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46465);
});})(g__42762__auto___46465))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42762__auto___46465){
return (function (seq46148){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46148));
});})(g__42762__auto___46465))
;


var g__42762__auto___46476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42762__auto___46476){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46479 = arguments.length;
var i__42647__auto___46480 = (0);
while(true){
if((i__42647__auto___46480 < len__42646__auto___46479)){
args__42653__auto__.push((arguments[i__42647__auto___46480]));

var G__46481 = (i__42647__auto___46480 + (1));
i__42647__auto___46480 = G__46481;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46476))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46476){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46476);
});})(g__42762__auto___46476))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42762__auto___46476){
return (function (seq46151){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46151));
});})(g__42762__auto___46476))
;


var g__42762__auto___46483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42762__auto___46483){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46489 = arguments.length;
var i__42647__auto___46490 = (0);
while(true){
if((i__42647__auto___46490 < len__42646__auto___46489)){
args__42653__auto__.push((arguments[i__42647__auto___46490]));

var G__46491 = (i__42647__auto___46490 + (1));
i__42647__auto___46490 = G__46491;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46483))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46483){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46483);
});})(g__42762__auto___46483))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42762__auto___46483){
return (function (seq46202){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46202));
});})(g__42762__auto___46483))
;


var g__42762__auto___46494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42762__auto___46494){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46495 = arguments.length;
var i__42647__auto___46496 = (0);
while(true){
if((i__42647__auto___46496 < len__42646__auto___46495)){
args__42653__auto__.push((arguments[i__42647__auto___46496]));

var G__46498 = (i__42647__auto___46496 + (1));
i__42647__auto___46496 = G__46498;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46494))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46494){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46494);
});})(g__42762__auto___46494))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42762__auto___46494){
return (function (seq46281){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46281));
});})(g__42762__auto___46494))
;


var g__42762__auto___46500 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42762__auto___46500){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46502 = arguments.length;
var i__42647__auto___46503 = (0);
while(true){
if((i__42647__auto___46503 < len__42646__auto___46502)){
args__42653__auto__.push((arguments[i__42647__auto___46503]));

var G__46505 = (i__42647__auto___46503 + (1));
i__42647__auto___46503 = G__46505;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46500))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46500){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46500);
});})(g__42762__auto___46500))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42762__auto___46500){
return (function (seq46298){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46298));
});})(g__42762__auto___46500))
;


var g__42762__auto___46507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42762__auto___46507){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46509 = arguments.length;
var i__42647__auto___46513 = (0);
while(true){
if((i__42647__auto___46513 < len__42646__auto___46509)){
args__42653__auto__.push((arguments[i__42647__auto___46513]));

var G__46514 = (i__42647__auto___46513 + (1));
i__42647__auto___46513 = G__46514;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46507))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46507){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46507);
});})(g__42762__auto___46507))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42762__auto___46507){
return (function (seq46306){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46306));
});})(g__42762__auto___46507))
;


var g__42762__auto___46519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42762__auto___46519){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46521 = arguments.length;
var i__42647__auto___46522 = (0);
while(true){
if((i__42647__auto___46522 < len__42646__auto___46521)){
args__42653__auto__.push((arguments[i__42647__auto___46522]));

var G__46523 = (i__42647__auto___46522 + (1));
i__42647__auto___46522 = G__46523;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});})(g__42762__auto___46519))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42762__auto___46519){
return (function (args){
return cljs.core.deref.call(null,g__42762__auto___46519);
});})(g__42762__auto___46519))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42762__auto___46519){
return (function (seq46313){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46313));
});})(g__42762__auto___46519))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42653__auto__ = [];
var len__42646__auto___46531 = arguments.length;
var i__42647__auto___46532 = (0);
while(true){
if((i__42647__auto___46532 < len__42646__auto___46531)){
args__42653__auto__.push((arguments[i__42647__auto___46532]));

var G__46534 = (i__42647__auto___46532 + (1));
i__42647__auto___46532 = G__46534;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__46526_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46526_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq46527){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46527));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__46539_SHARP_){
return (new Date(p1__46539_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1538003625846
