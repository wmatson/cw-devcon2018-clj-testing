// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41367__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41367__auto__){
return or__41367__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41367__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
var or__41367__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41367__auto____$1)){
return or__41367__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49216_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49216_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49217 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49218 = null;
var count__49219 = (0);
var i__49220 = (0);
while(true){
if((i__49220 < count__49219)){
var n = cljs.core._nth.call(null,chunk__49218,i__49220);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49221 = seq__49217;
var G__49222 = chunk__49218;
var G__49223 = count__49219;
var G__49224 = (i__49220 + (1));
seq__49217 = G__49221;
chunk__49218 = G__49222;
count__49219 = G__49223;
i__49220 = G__49224;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49217);
if(temp__5457__auto__){
var seq__49217__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49217__$1)){
var c__42298__auto__ = cljs.core.chunk_first.call(null,seq__49217__$1);
var G__49225 = cljs.core.chunk_rest.call(null,seq__49217__$1);
var G__49226 = c__42298__auto__;
var G__49227 = cljs.core.count.call(null,c__42298__auto__);
var G__49228 = (0);
seq__49217 = G__49225;
chunk__49218 = G__49226;
count__49219 = G__49227;
i__49220 = G__49228;
continue;
} else {
var n = cljs.core.first.call(null,seq__49217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49229 = cljs.core.next.call(null,seq__49217__$1);
var G__49230 = null;
var G__49231 = (0);
var G__49232 = (0);
seq__49217 = G__49229;
chunk__49218 = G__49230;
count__49219 = G__49231;
i__49220 = G__49232;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49242_49255 = cljs.core.seq.call(null,deps);
var chunk__49243_49256 = null;
var count__49244_49257 = (0);
var i__49245_49258 = (0);
while(true){
if((i__49245_49258 < count__49244_49257)){
var dep_49259 = cljs.core._nth.call(null,chunk__49243_49256,i__49245_49258);
topo_sort_helper_STAR_.call(null,dep_49259,(depth + (1)),state);

var G__49260 = seq__49242_49255;
var G__49261 = chunk__49243_49256;
var G__49262 = count__49244_49257;
var G__49263 = (i__49245_49258 + (1));
seq__49242_49255 = G__49260;
chunk__49243_49256 = G__49261;
count__49244_49257 = G__49262;
i__49245_49258 = G__49263;
continue;
} else {
var temp__5457__auto___49268 = cljs.core.seq.call(null,seq__49242_49255);
if(temp__5457__auto___49268){
var seq__49242_49269__$1 = temp__5457__auto___49268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49242_49269__$1)){
var c__42298__auto___49270 = cljs.core.chunk_first.call(null,seq__49242_49269__$1);
var G__49271 = cljs.core.chunk_rest.call(null,seq__49242_49269__$1);
var G__49272 = c__42298__auto___49270;
var G__49273 = cljs.core.count.call(null,c__42298__auto___49270);
var G__49274 = (0);
seq__49242_49255 = G__49271;
chunk__49243_49256 = G__49272;
count__49244_49257 = G__49273;
i__49245_49258 = G__49274;
continue;
} else {
var dep_49275 = cljs.core.first.call(null,seq__49242_49269__$1);
topo_sort_helper_STAR_.call(null,dep_49275,(depth + (1)),state);

var G__49276 = cljs.core.next.call(null,seq__49242_49269__$1);
var G__49277 = null;
var G__49278 = (0);
var G__49279 = (0);
seq__49242_49255 = G__49276;
chunk__49243_49256 = G__49277;
count__49244_49257 = G__49278;
i__49245_49258 = G__49279;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49246){
var vec__49247 = p__49246;
var seq__49248 = cljs.core.seq.call(null,vec__49247);
var first__49249 = cljs.core.first.call(null,seq__49248);
var seq__49248__$1 = cljs.core.next.call(null,seq__49248);
var x = first__49249;
var xs = seq__49248__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49247,seq__49248,first__49249,seq__49248__$1,x,xs,get_deps__$1){
return (function (p1__49233_SHARP_){
return clojure.set.difference.call(null,p1__49233_SHARP_,x);
});})(vec__49247,seq__49248,first__49249,seq__49248__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49318 = cljs.core.seq.call(null,provides);
var chunk__49319 = null;
var count__49320 = (0);
var i__49321 = (0);
while(true){
if((i__49321 < count__49320)){
var prov = cljs.core._nth.call(null,chunk__49319,i__49321);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49328_49341 = cljs.core.seq.call(null,requires);
var chunk__49329_49342 = null;
var count__49330_49343 = (0);
var i__49331_49344 = (0);
while(true){
if((i__49331_49344 < count__49330_49343)){
var req_49345 = cljs.core._nth.call(null,chunk__49329_49342,i__49331_49344);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49345,prov);

var G__49346 = seq__49328_49341;
var G__49347 = chunk__49329_49342;
var G__49348 = count__49330_49343;
var G__49349 = (i__49331_49344 + (1));
seq__49328_49341 = G__49346;
chunk__49329_49342 = G__49347;
count__49330_49343 = G__49348;
i__49331_49344 = G__49349;
continue;
} else {
var temp__5457__auto___49350 = cljs.core.seq.call(null,seq__49328_49341);
if(temp__5457__auto___49350){
var seq__49328_49351__$1 = temp__5457__auto___49350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49328_49351__$1)){
var c__42298__auto___49352 = cljs.core.chunk_first.call(null,seq__49328_49351__$1);
var G__49353 = cljs.core.chunk_rest.call(null,seq__49328_49351__$1);
var G__49354 = c__42298__auto___49352;
var G__49355 = cljs.core.count.call(null,c__42298__auto___49352);
var G__49356 = (0);
seq__49328_49341 = G__49353;
chunk__49329_49342 = G__49354;
count__49330_49343 = G__49355;
i__49331_49344 = G__49356;
continue;
} else {
var req_49357 = cljs.core.first.call(null,seq__49328_49351__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49357,prov);

var G__49358 = cljs.core.next.call(null,seq__49328_49351__$1);
var G__49359 = null;
var G__49360 = (0);
var G__49361 = (0);
seq__49328_49341 = G__49358;
chunk__49329_49342 = G__49359;
count__49330_49343 = G__49360;
i__49331_49344 = G__49361;
continue;
}
} else {
}
}
break;
}

var G__49362 = seq__49318;
var G__49363 = chunk__49319;
var G__49364 = count__49320;
var G__49365 = (i__49321 + (1));
seq__49318 = G__49362;
chunk__49319 = G__49363;
count__49320 = G__49364;
i__49321 = G__49365;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__49318);
if(temp__5457__auto__){
var seq__49318__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49318__$1)){
var c__42298__auto__ = cljs.core.chunk_first.call(null,seq__49318__$1);
var G__49366 = cljs.core.chunk_rest.call(null,seq__49318__$1);
var G__49367 = c__42298__auto__;
var G__49368 = cljs.core.count.call(null,c__42298__auto__);
var G__49369 = (0);
seq__49318 = G__49366;
chunk__49319 = G__49367;
count__49320 = G__49368;
i__49321 = G__49369;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49318__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49337_49370 = cljs.core.seq.call(null,requires);
var chunk__49338_49371 = null;
var count__49339_49372 = (0);
var i__49340_49373 = (0);
while(true){
if((i__49340_49373 < count__49339_49372)){
var req_49374 = cljs.core._nth.call(null,chunk__49338_49371,i__49340_49373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49374,prov);

var G__49375 = seq__49337_49370;
var G__49376 = chunk__49338_49371;
var G__49377 = count__49339_49372;
var G__49378 = (i__49340_49373 + (1));
seq__49337_49370 = G__49375;
chunk__49338_49371 = G__49376;
count__49339_49372 = G__49377;
i__49340_49373 = G__49378;
continue;
} else {
var temp__5457__auto___49379__$1 = cljs.core.seq.call(null,seq__49337_49370);
if(temp__5457__auto___49379__$1){
var seq__49337_49380__$1 = temp__5457__auto___49379__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49337_49380__$1)){
var c__42298__auto___49381 = cljs.core.chunk_first.call(null,seq__49337_49380__$1);
var G__49382 = cljs.core.chunk_rest.call(null,seq__49337_49380__$1);
var G__49383 = c__42298__auto___49381;
var G__49384 = cljs.core.count.call(null,c__42298__auto___49381);
var G__49385 = (0);
seq__49337_49370 = G__49382;
chunk__49338_49371 = G__49383;
count__49339_49372 = G__49384;
i__49340_49373 = G__49385;
continue;
} else {
var req_49386 = cljs.core.first.call(null,seq__49337_49380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49386,prov);

var G__49387 = cljs.core.next.call(null,seq__49337_49380__$1);
var G__49388 = null;
var G__49389 = (0);
var G__49390 = (0);
seq__49337_49370 = G__49387;
chunk__49338_49371 = G__49388;
count__49339_49372 = G__49389;
i__49340_49373 = G__49390;
continue;
}
} else {
}
}
break;
}

var G__49391 = cljs.core.next.call(null,seq__49318__$1);
var G__49392 = null;
var G__49393 = (0);
var G__49394 = (0);
seq__49318 = G__49391;
chunk__49319 = G__49392;
count__49320 = G__49393;
i__49321 = G__49394;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__49395_49400 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49396_49401 = null;
var count__49397_49402 = (0);
var i__49398_49403 = (0);
while(true){
if((i__49398_49403 < count__49397_49402)){
var ns_49404 = cljs.core._nth.call(null,chunk__49396_49401,i__49398_49403);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49404);

var G__49405 = seq__49395_49400;
var G__49406 = chunk__49396_49401;
var G__49407 = count__49397_49402;
var G__49408 = (i__49398_49403 + (1));
seq__49395_49400 = G__49405;
chunk__49396_49401 = G__49406;
count__49397_49402 = G__49407;
i__49398_49403 = G__49408;
continue;
} else {
var temp__5457__auto___49410 = cljs.core.seq.call(null,seq__49395_49400);
if(temp__5457__auto___49410){
var seq__49395_49412__$1 = temp__5457__auto___49410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49395_49412__$1)){
var c__42298__auto___49414 = cljs.core.chunk_first.call(null,seq__49395_49412__$1);
var G__49415 = cljs.core.chunk_rest.call(null,seq__49395_49412__$1);
var G__49416 = c__42298__auto___49414;
var G__49417 = cljs.core.count.call(null,c__42298__auto___49414);
var G__49418 = (0);
seq__49395_49400 = G__49415;
chunk__49396_49401 = G__49416;
count__49397_49402 = G__49417;
i__49398_49403 = G__49418;
continue;
} else {
var ns_49419 = cljs.core.first.call(null,seq__49395_49412__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49419);

var G__49421 = cljs.core.next.call(null,seq__49395_49412__$1);
var G__49422 = null;
var G__49423 = (0);
var G__49424 = (0);
seq__49395_49400 = G__49421;
chunk__49396_49401 = G__49422;
count__49397_49402 = G__49423;
i__49398_49403 = G__49424;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41367__auto__ = goog.require__;
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49431__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49432__i = 0, G__49432__a = new Array(arguments.length -  0);
while (G__49432__i < G__49432__a.length) {G__49432__a[G__49432__i] = arguments[G__49432__i + 0]; ++G__49432__i;}
  args = new cljs.core.IndexedSeq(G__49432__a,0,null);
} 
return G__49431__delegate.call(this,args);};
G__49431.cljs$lang$maxFixedArity = 0;
G__49431.cljs$lang$applyTo = (function (arglist__49433){
var args = cljs.core.seq(arglist__49433);
return G__49431__delegate(args);
});
G__49431.cljs$core$IFn$_invoke$arity$variadic = G__49431__delegate;
return G__49431;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__49437_SHARP_,p2__49438_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49437_SHARP_)].join('')),p2__49438_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__49439_SHARP_,p2__49440_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__49439_SHARP_)].join(''),p2__49440_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__49458 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__49458.addCallback(((function (G__49458){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__49458))
);

G__49458.addErrback(((function (G__49458){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__49458))
);

return G__49458;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49463 = cljs.core._EQ_;
var expr__49464 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49463.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49464))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49463,expr__49464){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49463,expr__49464))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49463,expr__49464){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49468){if((e49468 instanceof Error)){
var e = e49468;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49468;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49463,expr__49464))
} else {
if(cljs.core.truth_(pred__49463.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49464))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49463.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49464))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49463.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49464))){
return ((function (pred__49463,expr__49464){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49469){if((e49469 instanceof Error)){
var e = e49469;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49469;

}
}})());
});
;})(pred__49463,expr__49464))
} else {
return ((function (pred__49463,expr__49464){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49463,expr__49464))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49474,callback){
var map__49475 = p__49474;
var map__49475__$1 = ((((!((map__49475 == null)))?((((map__49475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49475):map__49475);
var file_msg = map__49475__$1;
var request_url = cljs.core.get.call(null,map__49475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49475,map__49475__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49475,map__49475__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__){
return (function (state_49503){
var state_val_49504 = (state_49503[(1)]);
if((state_val_49504 === (7))){
var inst_49499 = (state_49503[(2)]);
var state_49503__$1 = state_49503;
var statearr_49505_49533 = state_49503__$1;
(statearr_49505_49533[(2)] = inst_49499);

(statearr_49505_49533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (1))){
var state_49503__$1 = state_49503;
var statearr_49506_49537 = state_49503__$1;
(statearr_49506_49537[(2)] = null);

(statearr_49506_49537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (4))){
var inst_49483 = (state_49503[(7)]);
var inst_49483__$1 = (state_49503[(2)]);
var state_49503__$1 = (function (){var statearr_49507 = state_49503;
(statearr_49507[(7)] = inst_49483__$1);

return statearr_49507;
})();
if(cljs.core.truth_(inst_49483__$1)){
var statearr_49508_49538 = state_49503__$1;
(statearr_49508_49538[(1)] = (5));

} else {
var statearr_49509_49539 = state_49503__$1;
(statearr_49509_49539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (6))){
var state_49503__$1 = state_49503;
var statearr_49514_49540 = state_49503__$1;
(statearr_49514_49540[(2)] = null);

(statearr_49514_49540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (3))){
var inst_49501 = (state_49503[(2)]);
var state_49503__$1 = state_49503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49503__$1,inst_49501);
} else {
if((state_val_49504 === (2))){
var state_49503__$1 = state_49503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49503__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49504 === (11))){
var inst_49495 = (state_49503[(2)]);
var state_49503__$1 = (function (){var statearr_49518 = state_49503;
(statearr_49518[(8)] = inst_49495);

return statearr_49518;
})();
var statearr_49519_49541 = state_49503__$1;
(statearr_49519_49541[(2)] = null);

(statearr_49519_49541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (9))){
var inst_49489 = (state_49503[(9)]);
var inst_49487 = (state_49503[(10)]);
var inst_49491 = inst_49489.call(null,inst_49487);
var state_49503__$1 = state_49503;
var statearr_49520_49542 = state_49503__$1;
(statearr_49520_49542[(2)] = inst_49491);

(statearr_49520_49542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (5))){
var inst_49483 = (state_49503[(7)]);
var inst_49485 = figwheel.client.file_reloading.blocking_load.call(null,inst_49483);
var state_49503__$1 = state_49503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49503__$1,(8),inst_49485);
} else {
if((state_val_49504 === (10))){
var inst_49487 = (state_49503[(10)]);
var inst_49493 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49487);
var state_49503__$1 = state_49503;
var statearr_49521_49543 = state_49503__$1;
(statearr_49521_49543[(2)] = inst_49493);

(statearr_49521_49543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (8))){
var inst_49489 = (state_49503[(9)]);
var inst_49483 = (state_49503[(7)]);
var inst_49487 = (state_49503[(2)]);
var inst_49488 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49489__$1 = cljs.core.get.call(null,inst_49488,inst_49483);
var state_49503__$1 = (function (){var statearr_49522 = state_49503;
(statearr_49522[(9)] = inst_49489__$1);

(statearr_49522[(10)] = inst_49487);

return statearr_49522;
})();
if(cljs.core.truth_(inst_49489__$1)){
var statearr_49524_49544 = state_49503__$1;
(statearr_49524_49544[(1)] = (9));

} else {
var statearr_49525_49545 = state_49503__$1;
(statearr_49525_49545[(1)] = (10));

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
});})(c__44867__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44549__auto__ = null;
var figwheel$client$file_reloading$state_machine__44549__auto____0 = (function (){
var statearr_49526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49526[(0)] = figwheel$client$file_reloading$state_machine__44549__auto__);

(statearr_49526[(1)] = (1));

return statearr_49526;
});
var figwheel$client$file_reloading$state_machine__44549__auto____1 = (function (state_49503){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_49503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e49527){if((e49527 instanceof Object)){
var ex__44553__auto__ = e49527;
var statearr_49528_49546 = state_49503;
(statearr_49528_49546[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49547 = state_49503;
state_49503 = G__49547;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44549__auto__ = function(state_49503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44549__auto____1.call(this,state_49503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44549__auto____0;
figwheel$client$file_reloading$state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44549__auto____1;
return figwheel$client$file_reloading$state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__))
})();
var state__44869__auto__ = (function (){var statearr_49529 = f__44868__auto__.call(null);
(statearr_49529[(6)] = c__44867__auto__);

return statearr_49529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__))
);

return c__44867__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49549,callback){
var map__49551 = p__49549;
var map__49551__$1 = ((((!((map__49551 == null)))?((((map__49551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49551):map__49551);
var file_msg = map__49551__$1;
var namespace = cljs.core.get.call(null,map__49551__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49551,map__49551__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49551,map__49551__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49555){
var map__49557 = p__49555;
var map__49557__$1 = ((((!((map__49557 == null)))?((((map__49557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49557):map__49557);
var file_msg = map__49557__$1;
var namespace = cljs.core.get.call(null,map__49557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49560){
var map__49561 = p__49560;
var map__49561__$1 = ((((!((map__49561 == null)))?((((map__49561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49561):map__49561);
var file_msg = map__49561__$1;
var namespace = cljs.core.get.call(null,map__49561__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41355__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41355__auto__){
var or__41367__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
var or__41367__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41367__auto____$1)){
return or__41367__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41355__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49567,callback){
var map__49568 = p__49567;
var map__49568__$1 = ((((!((map__49568 == null)))?((((map__49568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49568):map__49568);
var file_msg = map__49568__$1;
var request_url = cljs.core.get.call(null,map__49568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44867__auto___49624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___49624,out){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___49624,out){
return (function (state_49605){
var state_val_49606 = (state_49605[(1)]);
if((state_val_49606 === (1))){
var inst_49577 = cljs.core.seq.call(null,files);
var inst_49578 = cljs.core.first.call(null,inst_49577);
var inst_49579 = cljs.core.next.call(null,inst_49577);
var inst_49580 = files;
var state_49605__$1 = (function (){var statearr_49607 = state_49605;
(statearr_49607[(7)] = inst_49578);

(statearr_49607[(8)] = inst_49580);

(statearr_49607[(9)] = inst_49579);

return statearr_49607;
})();
var statearr_49608_49625 = state_49605__$1;
(statearr_49608_49625[(2)] = null);

(statearr_49608_49625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49606 === (2))){
var inst_49586 = (state_49605[(10)]);
var inst_49580 = (state_49605[(8)]);
var inst_49585 = cljs.core.seq.call(null,inst_49580);
var inst_49586__$1 = cljs.core.first.call(null,inst_49585);
var inst_49587 = cljs.core.next.call(null,inst_49585);
var inst_49588 = (inst_49586__$1 == null);
var inst_49589 = cljs.core.not.call(null,inst_49588);
var state_49605__$1 = (function (){var statearr_49609 = state_49605;
(statearr_49609[(11)] = inst_49587);

(statearr_49609[(10)] = inst_49586__$1);

return statearr_49609;
})();
if(inst_49589){
var statearr_49610_49630 = state_49605__$1;
(statearr_49610_49630[(1)] = (4));

} else {
var statearr_49611_49632 = state_49605__$1;
(statearr_49611_49632[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49606 === (3))){
var inst_49603 = (state_49605[(2)]);
var state_49605__$1 = state_49605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49605__$1,inst_49603);
} else {
if((state_val_49606 === (4))){
var inst_49586 = (state_49605[(10)]);
var inst_49592 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49586);
var state_49605__$1 = state_49605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49605__$1,(7),inst_49592);
} else {
if((state_val_49606 === (5))){
var inst_49598 = cljs.core.async.close_BANG_.call(null,out);
var state_49605__$1 = state_49605;
var statearr_49612_49633 = state_49605__$1;
(statearr_49612_49633[(2)] = inst_49598);

(statearr_49612_49633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49606 === (6))){
var inst_49600 = (state_49605[(2)]);
var state_49605__$1 = state_49605;
var statearr_49613_49634 = state_49605__$1;
(statearr_49613_49634[(2)] = inst_49600);

(statearr_49613_49634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49606 === (7))){
var inst_49587 = (state_49605[(11)]);
var inst_49594 = (state_49605[(2)]);
var inst_49595 = cljs.core.async.put_BANG_.call(null,out,inst_49594);
var inst_49580 = inst_49587;
var state_49605__$1 = (function (){var statearr_49616 = state_49605;
(statearr_49616[(12)] = inst_49595);

(statearr_49616[(8)] = inst_49580);

return statearr_49616;
})();
var statearr_49618_49635 = state_49605__$1;
(statearr_49618_49635[(2)] = null);

(statearr_49618_49635[(1)] = (2));


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
});})(c__44867__auto___49624,out))
;
return ((function (switch__44548__auto__,c__44867__auto___49624,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____0 = (function (){
var statearr_49619 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49619[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__);

(statearr_49619[(1)] = (1));

return statearr_49619;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____1 = (function (state_49605){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_49605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e49621){if((e49621 instanceof Object)){
var ex__44553__auto__ = e49621;
var statearr_49622_49636 = state_49605;
(statearr_49622_49636[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49637 = state_49605;
state_49605 = G__49637;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__ = function(state_49605){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____1.call(this,state_49605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___49624,out))
})();
var state__44869__auto__ = (function (){var statearr_49623 = f__44868__auto__.call(null);
(statearr_49623[(6)] = c__44867__auto___49624);

return statearr_49623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___49624,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49638,opts){
var map__49639 = p__49638;
var map__49639__$1 = ((((!((map__49639 == null)))?((((map__49639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49639):map__49639);
var eval_body = cljs.core.get.call(null,map__49639__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41355__auto__ = eval_body;
if(cljs.core.truth_(and__41355__auto__)){
return typeof eval_body === 'string';
} else {
return and__41355__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49660){var e = e49660;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49667_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49667_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49669){
var vec__49670 = p__49669;
var k = cljs.core.nth.call(null,vec__49670,(0),null);
var v = cljs.core.nth.call(null,vec__49670,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49673){
var vec__49674 = p__49673;
var k = cljs.core.nth.call(null,vec__49674,(0),null);
var v = cljs.core.nth.call(null,vec__49674,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49694,p__49695){
var map__49696 = p__49694;
var map__49696__$1 = ((((!((map__49696 == null)))?((((map__49696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49696):map__49696);
var opts = map__49696__$1;
var before_jsload = cljs.core.get.call(null,map__49696__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49696__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49696__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49697 = p__49695;
var map__49697__$1 = ((((!((map__49697 == null)))?((((map__49697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49697):map__49697);
var msg = map__49697__$1;
var files = cljs.core.get.call(null,map__49697__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49697__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49697__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49858){
var state_val_49859 = (state_49858[(1)]);
if((state_val_49859 === (7))){
var inst_49716 = (state_49858[(7)]);
var inst_49718 = (state_49858[(8)]);
var inst_49719 = (state_49858[(9)]);
var inst_49717 = (state_49858[(10)]);
var inst_49724 = cljs.core._nth.call(null,inst_49717,inst_49719);
var inst_49725 = figwheel.client.file_reloading.eval_body.call(null,inst_49724,opts);
var inst_49726 = (inst_49719 + (1));
var tmp49860 = inst_49716;
var tmp49861 = inst_49718;
var tmp49862 = inst_49717;
var inst_49716__$1 = tmp49860;
var inst_49717__$1 = tmp49862;
var inst_49718__$1 = tmp49861;
var inst_49719__$1 = inst_49726;
var state_49858__$1 = (function (){var statearr_49864 = state_49858;
(statearr_49864[(7)] = inst_49716__$1);

(statearr_49864[(8)] = inst_49718__$1);

(statearr_49864[(9)] = inst_49719__$1);

(statearr_49864[(11)] = inst_49725);

(statearr_49864[(10)] = inst_49717__$1);

return statearr_49864;
})();
var statearr_49865_49948 = state_49858__$1;
(statearr_49865_49948[(2)] = null);

(statearr_49865_49948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (20))){
var inst_49760 = (state_49858[(12)]);
var inst_49768 = figwheel.client.file_reloading.sort_files.call(null,inst_49760);
var state_49858__$1 = state_49858;
var statearr_49866_49949 = state_49858__$1;
(statearr_49866_49949[(2)] = inst_49768);

(statearr_49866_49949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (27))){
var state_49858__$1 = state_49858;
var statearr_49867_49950 = state_49858__$1;
(statearr_49867_49950[(2)] = null);

(statearr_49867_49950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (1))){
var inst_49707 = (state_49858[(13)]);
var inst_49703 = before_jsload.call(null,files);
var inst_49704 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49706 = (function (){return ((function (inst_49707,inst_49703,inst_49704,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49679_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49679_SHARP_);
});
;})(inst_49707,inst_49703,inst_49704,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49707__$1 = cljs.core.filter.call(null,inst_49706,files);
var inst_49708 = cljs.core.not_empty.call(null,inst_49707__$1);
var state_49858__$1 = (function (){var statearr_49868 = state_49858;
(statearr_49868[(13)] = inst_49707__$1);

(statearr_49868[(14)] = inst_49703);

(statearr_49868[(15)] = inst_49704);

return statearr_49868;
})();
if(cljs.core.truth_(inst_49708)){
var statearr_49869_49951 = state_49858__$1;
(statearr_49869_49951[(1)] = (2));

} else {
var statearr_49870_49952 = state_49858__$1;
(statearr_49870_49952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (24))){
var state_49858__$1 = state_49858;
var statearr_49871_49953 = state_49858__$1;
(statearr_49871_49953[(2)] = null);

(statearr_49871_49953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (39))){
var inst_49810 = (state_49858[(16)]);
var state_49858__$1 = state_49858;
var statearr_49872_49954 = state_49858__$1;
(statearr_49872_49954[(2)] = inst_49810);

(statearr_49872_49954[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (46))){
var inst_49852 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49873_49955 = state_49858__$1;
(statearr_49873_49955[(2)] = inst_49852);

(statearr_49873_49955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (4))){
var inst_49754 = (state_49858[(2)]);
var inst_49755 = cljs.core.List.EMPTY;
var inst_49756 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49755);
var inst_49757 = (function (){return ((function (inst_49754,inst_49755,inst_49756,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49680_SHARP_){
var and__41355__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49680_SHARP_);
if(cljs.core.truth_(and__41355__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49680_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49680_SHARP_)));
} else {
return and__41355__auto__;
}
});
;})(inst_49754,inst_49755,inst_49756,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49758 = cljs.core.filter.call(null,inst_49757,files);
var inst_49759 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49760 = cljs.core.concat.call(null,inst_49758,inst_49759);
var state_49858__$1 = (function (){var statearr_49874 = state_49858;
(statearr_49874[(17)] = inst_49756);

(statearr_49874[(18)] = inst_49754);

(statearr_49874[(12)] = inst_49760);

return statearr_49874;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49875_49956 = state_49858__$1;
(statearr_49875_49956[(1)] = (16));

} else {
var statearr_49876_49957 = state_49858__$1;
(statearr_49876_49957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (15))){
var inst_49744 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49877_49958 = state_49858__$1;
(statearr_49877_49958[(2)] = inst_49744);

(statearr_49877_49958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (21))){
var inst_49770 = (state_49858[(19)]);
var inst_49770__$1 = (state_49858[(2)]);
var inst_49771 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49770__$1);
var state_49858__$1 = (function (){var statearr_49878 = state_49858;
(statearr_49878[(19)] = inst_49770__$1);

return statearr_49878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49858__$1,(22),inst_49771);
} else {
if((state_val_49859 === (31))){
var inst_49855 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49858__$1,inst_49855);
} else {
if((state_val_49859 === (32))){
var inst_49810 = (state_49858[(16)]);
var inst_49815 = inst_49810.cljs$lang$protocol_mask$partition0$;
var inst_49816 = (inst_49815 & (64));
var inst_49817 = inst_49810.cljs$core$ISeq$;
var inst_49818 = (cljs.core.PROTOCOL_SENTINEL === inst_49817);
var inst_49819 = (inst_49816) || (inst_49818);
var state_49858__$1 = state_49858;
if(cljs.core.truth_(inst_49819)){
var statearr_49879_49959 = state_49858__$1;
(statearr_49879_49959[(1)] = (35));

} else {
var statearr_49880_49960 = state_49858__$1;
(statearr_49880_49960[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (40))){
var inst_49832 = (state_49858[(20)]);
var inst_49831 = (state_49858[(2)]);
var inst_49832__$1 = cljs.core.get.call(null,inst_49831,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49833 = cljs.core.get.call(null,inst_49831,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49834 = cljs.core.not_empty.call(null,inst_49832__$1);
var state_49858__$1 = (function (){var statearr_49881 = state_49858;
(statearr_49881[(21)] = inst_49833);

(statearr_49881[(20)] = inst_49832__$1);

return statearr_49881;
})();
if(cljs.core.truth_(inst_49834)){
var statearr_49882_49961 = state_49858__$1;
(statearr_49882_49961[(1)] = (41));

} else {
var statearr_49883_49962 = state_49858__$1;
(statearr_49883_49962[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (33))){
var state_49858__$1 = state_49858;
var statearr_49884_49963 = state_49858__$1;
(statearr_49884_49963[(2)] = false);

(statearr_49884_49963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (13))){
var inst_49729 = (state_49858[(22)]);
var inst_49734 = cljs.core.chunk_first.call(null,inst_49729);
var inst_49735 = cljs.core.chunk_rest.call(null,inst_49729);
var inst_49736 = cljs.core.count.call(null,inst_49734);
var inst_49716 = inst_49735;
var inst_49717 = inst_49734;
var inst_49718 = inst_49736;
var inst_49719 = (0);
var state_49858__$1 = (function (){var statearr_49885 = state_49858;
(statearr_49885[(7)] = inst_49716);

(statearr_49885[(8)] = inst_49718);

(statearr_49885[(9)] = inst_49719);

(statearr_49885[(10)] = inst_49717);

return statearr_49885;
})();
var statearr_49886_49964 = state_49858__$1;
(statearr_49886_49964[(2)] = null);

(statearr_49886_49964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (22))){
var inst_49773 = (state_49858[(23)]);
var inst_49770 = (state_49858[(19)]);
var inst_49774 = (state_49858[(24)]);
var inst_49778 = (state_49858[(25)]);
var inst_49773__$1 = (state_49858[(2)]);
var inst_49774__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49773__$1);
var inst_49775 = (function (){var all_files = inst_49770;
var res_SINGLEQUOTE_ = inst_49773__$1;
var res = inst_49774__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49773,inst_49770,inst_49774,inst_49778,inst_49773__$1,inst_49774__$1,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49681_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49681_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49773,inst_49770,inst_49774,inst_49778,inst_49773__$1,inst_49774__$1,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49776 = cljs.core.filter.call(null,inst_49775,inst_49773__$1);
var inst_49777 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49778__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49777);
var inst_49779 = cljs.core.not_empty.call(null,inst_49778__$1);
var state_49858__$1 = (function (){var statearr_49887 = state_49858;
(statearr_49887[(26)] = inst_49776);

(statearr_49887[(23)] = inst_49773__$1);

(statearr_49887[(24)] = inst_49774__$1);

(statearr_49887[(25)] = inst_49778__$1);

return statearr_49887;
})();
if(cljs.core.truth_(inst_49779)){
var statearr_49888_49965 = state_49858__$1;
(statearr_49888_49965[(1)] = (23));

} else {
var statearr_49889_49966 = state_49858__$1;
(statearr_49889_49966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (36))){
var state_49858__$1 = state_49858;
var statearr_49890_49967 = state_49858__$1;
(statearr_49890_49967[(2)] = false);

(statearr_49890_49967[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (41))){
var inst_49832 = (state_49858[(20)]);
var inst_49836 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49837 = cljs.core.map.call(null,inst_49836,inst_49832);
var inst_49838 = cljs.core.pr_str.call(null,inst_49837);
var inst_49839 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49838)].join('');
var inst_49840 = figwheel.client.utils.log.call(null,inst_49839);
var state_49858__$1 = state_49858;
var statearr_49891_49968 = state_49858__$1;
(statearr_49891_49968[(2)] = inst_49840);

(statearr_49891_49968[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (43))){
var inst_49833 = (state_49858[(21)]);
var inst_49843 = (state_49858[(2)]);
var inst_49844 = cljs.core.not_empty.call(null,inst_49833);
var state_49858__$1 = (function (){var statearr_49892 = state_49858;
(statearr_49892[(27)] = inst_49843);

return statearr_49892;
})();
if(cljs.core.truth_(inst_49844)){
var statearr_49893_49969 = state_49858__$1;
(statearr_49893_49969[(1)] = (44));

} else {
var statearr_49894_49970 = state_49858__$1;
(statearr_49894_49970[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (29))){
var inst_49810 = (state_49858[(16)]);
var inst_49776 = (state_49858[(26)]);
var inst_49773 = (state_49858[(23)]);
var inst_49770 = (state_49858[(19)]);
var inst_49774 = (state_49858[(24)]);
var inst_49778 = (state_49858[(25)]);
var inst_49806 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49809 = (function (){var all_files = inst_49770;
var res_SINGLEQUOTE_ = inst_49773;
var res = inst_49774;
var files_not_loaded = inst_49776;
var dependencies_that_loaded = inst_49778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49810,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49806,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49808){
var map__49895 = p__49808;
var map__49895__$1 = ((((!((map__49895 == null)))?((((map__49895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49895):map__49895);
var namespace = cljs.core.get.call(null,map__49895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49810,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49806,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49810__$1 = cljs.core.group_by.call(null,inst_49809,inst_49776);
var inst_49812 = (inst_49810__$1 == null);
var inst_49813 = cljs.core.not.call(null,inst_49812);
var state_49858__$1 = (function (){var statearr_49897 = state_49858;
(statearr_49897[(16)] = inst_49810__$1);

(statearr_49897[(28)] = inst_49806);

return statearr_49897;
})();
if(inst_49813){
var statearr_49898_49971 = state_49858__$1;
(statearr_49898_49971[(1)] = (32));

} else {
var statearr_49899_49972 = state_49858__$1;
(statearr_49899_49972[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (44))){
var inst_49833 = (state_49858[(21)]);
var inst_49846 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49833);
var inst_49847 = cljs.core.pr_str.call(null,inst_49846);
var inst_49848 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49847)].join('');
var inst_49849 = figwheel.client.utils.log.call(null,inst_49848);
var state_49858__$1 = state_49858;
var statearr_49900_49973 = state_49858__$1;
(statearr_49900_49973[(2)] = inst_49849);

(statearr_49900_49973[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (6))){
var inst_49751 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49901_49974 = state_49858__$1;
(statearr_49901_49974[(2)] = inst_49751);

(statearr_49901_49974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (28))){
var inst_49776 = (state_49858[(26)]);
var inst_49803 = (state_49858[(2)]);
var inst_49804 = cljs.core.not_empty.call(null,inst_49776);
var state_49858__$1 = (function (){var statearr_49902 = state_49858;
(statearr_49902[(29)] = inst_49803);

return statearr_49902;
})();
if(cljs.core.truth_(inst_49804)){
var statearr_49903_49975 = state_49858__$1;
(statearr_49903_49975[(1)] = (29));

} else {
var statearr_49904_49976 = state_49858__$1;
(statearr_49904_49976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (25))){
var inst_49774 = (state_49858[(24)]);
var inst_49790 = (state_49858[(2)]);
var inst_49791 = cljs.core.not_empty.call(null,inst_49774);
var state_49858__$1 = (function (){var statearr_49905 = state_49858;
(statearr_49905[(30)] = inst_49790);

return statearr_49905;
})();
if(cljs.core.truth_(inst_49791)){
var statearr_49906_49977 = state_49858__$1;
(statearr_49906_49977[(1)] = (26));

} else {
var statearr_49907_49978 = state_49858__$1;
(statearr_49907_49978[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (34))){
var inst_49826 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
if(cljs.core.truth_(inst_49826)){
var statearr_49908_49979 = state_49858__$1;
(statearr_49908_49979[(1)] = (38));

} else {
var statearr_49909_49980 = state_49858__$1;
(statearr_49909_49980[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (17))){
var state_49858__$1 = state_49858;
var statearr_49910_49981 = state_49858__$1;
(statearr_49910_49981[(2)] = recompile_dependents);

(statearr_49910_49981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (3))){
var state_49858__$1 = state_49858;
var statearr_49911_49982 = state_49858__$1;
(statearr_49911_49982[(2)] = null);

(statearr_49911_49982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (12))){
var inst_49747 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49912_49983 = state_49858__$1;
(statearr_49912_49983[(2)] = inst_49747);

(statearr_49912_49983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (2))){
var inst_49707 = (state_49858[(13)]);
var inst_49715 = cljs.core.seq.call(null,inst_49707);
var inst_49716 = inst_49715;
var inst_49717 = null;
var inst_49718 = (0);
var inst_49719 = (0);
var state_49858__$1 = (function (){var statearr_49913 = state_49858;
(statearr_49913[(7)] = inst_49716);

(statearr_49913[(8)] = inst_49718);

(statearr_49913[(9)] = inst_49719);

(statearr_49913[(10)] = inst_49717);

return statearr_49913;
})();
var statearr_49914_49984 = state_49858__$1;
(statearr_49914_49984[(2)] = null);

(statearr_49914_49984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (23))){
var inst_49776 = (state_49858[(26)]);
var inst_49773 = (state_49858[(23)]);
var inst_49770 = (state_49858[(19)]);
var inst_49774 = (state_49858[(24)]);
var inst_49778 = (state_49858[(25)]);
var inst_49781 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49783 = (function (){var all_files = inst_49770;
var res_SINGLEQUOTE_ = inst_49773;
var res = inst_49774;
var files_not_loaded = inst_49776;
var dependencies_that_loaded = inst_49778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49781,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49782){
var map__49915 = p__49782;
var map__49915__$1 = ((((!((map__49915 == null)))?((((map__49915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49915):map__49915);
var request_url = cljs.core.get.call(null,map__49915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49781,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49784 = cljs.core.reverse.call(null,inst_49778);
var inst_49785 = cljs.core.map.call(null,inst_49783,inst_49784);
var inst_49786 = cljs.core.pr_str.call(null,inst_49785);
var inst_49787 = figwheel.client.utils.log.call(null,inst_49786);
var state_49858__$1 = (function (){var statearr_49917 = state_49858;
(statearr_49917[(31)] = inst_49781);

return statearr_49917;
})();
var statearr_49918_49985 = state_49858__$1;
(statearr_49918_49985[(2)] = inst_49787);

(statearr_49918_49985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (35))){
var state_49858__$1 = state_49858;
var statearr_49919_49986 = state_49858__$1;
(statearr_49919_49986[(2)] = true);

(statearr_49919_49986[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (19))){
var inst_49760 = (state_49858[(12)]);
var inst_49766 = figwheel.client.file_reloading.expand_files.call(null,inst_49760);
var state_49858__$1 = state_49858;
var statearr_49920_49987 = state_49858__$1;
(statearr_49920_49987[(2)] = inst_49766);

(statearr_49920_49987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (11))){
var state_49858__$1 = state_49858;
var statearr_49921_49988 = state_49858__$1;
(statearr_49921_49988[(2)] = null);

(statearr_49921_49988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (9))){
var inst_49749 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49922_49989 = state_49858__$1;
(statearr_49922_49989[(2)] = inst_49749);

(statearr_49922_49989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (5))){
var inst_49718 = (state_49858[(8)]);
var inst_49719 = (state_49858[(9)]);
var inst_49721 = (inst_49719 < inst_49718);
var inst_49722 = inst_49721;
var state_49858__$1 = state_49858;
if(cljs.core.truth_(inst_49722)){
var statearr_49923_49990 = state_49858__$1;
(statearr_49923_49990[(1)] = (7));

} else {
var statearr_49924_49991 = state_49858__$1;
(statearr_49924_49991[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (14))){
var inst_49729 = (state_49858[(22)]);
var inst_49739 = cljs.core.first.call(null,inst_49729);
var inst_49740 = figwheel.client.file_reloading.eval_body.call(null,inst_49739,opts);
var inst_49741 = cljs.core.next.call(null,inst_49729);
var inst_49716 = inst_49741;
var inst_49717 = null;
var inst_49718 = (0);
var inst_49719 = (0);
var state_49858__$1 = (function (){var statearr_49925 = state_49858;
(statearr_49925[(7)] = inst_49716);

(statearr_49925[(8)] = inst_49718);

(statearr_49925[(9)] = inst_49719);

(statearr_49925[(10)] = inst_49717);

(statearr_49925[(32)] = inst_49740);

return statearr_49925;
})();
var statearr_49926_49992 = state_49858__$1;
(statearr_49926_49992[(2)] = null);

(statearr_49926_49992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (45))){
var state_49858__$1 = state_49858;
var statearr_49927_49993 = state_49858__$1;
(statearr_49927_49993[(2)] = null);

(statearr_49927_49993[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (26))){
var inst_49776 = (state_49858[(26)]);
var inst_49773 = (state_49858[(23)]);
var inst_49770 = (state_49858[(19)]);
var inst_49774 = (state_49858[(24)]);
var inst_49778 = (state_49858[(25)]);
var inst_49793 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49795 = (function (){var all_files = inst_49770;
var res_SINGLEQUOTE_ = inst_49773;
var res = inst_49774;
var files_not_loaded = inst_49776;
var dependencies_that_loaded = inst_49778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49793,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49794){
var map__49928 = p__49794;
var map__49928__$1 = ((((!((map__49928 == null)))?((((map__49928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49928):map__49928);
var namespace = cljs.core.get.call(null,map__49928__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49793,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49796 = cljs.core.map.call(null,inst_49795,inst_49774);
var inst_49797 = cljs.core.pr_str.call(null,inst_49796);
var inst_49798 = figwheel.client.utils.log.call(null,inst_49797);
var inst_49799 = (function (){var all_files = inst_49770;
var res_SINGLEQUOTE_ = inst_49773;
var res = inst_49774;
var files_not_loaded = inst_49776;
var dependencies_that_loaded = inst_49778;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49793,inst_49795,inst_49796,inst_49797,inst_49798,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49776,inst_49773,inst_49770,inst_49774,inst_49778,inst_49793,inst_49795,inst_49796,inst_49797,inst_49798,state_val_49859,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49800 = setTimeout(inst_49799,(10));
var state_49858__$1 = (function (){var statearr_49930 = state_49858;
(statearr_49930[(33)] = inst_49793);

(statearr_49930[(34)] = inst_49798);

return statearr_49930;
})();
var statearr_49931_49994 = state_49858__$1;
(statearr_49931_49994[(2)] = inst_49800);

(statearr_49931_49994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (16))){
var state_49858__$1 = state_49858;
var statearr_49932_49995 = state_49858__$1;
(statearr_49932_49995[(2)] = reload_dependents);

(statearr_49932_49995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (38))){
var inst_49810 = (state_49858[(16)]);
var inst_49828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49810);
var state_49858__$1 = state_49858;
var statearr_49933_49996 = state_49858__$1;
(statearr_49933_49996[(2)] = inst_49828);

(statearr_49933_49996[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (30))){
var state_49858__$1 = state_49858;
var statearr_49934_49997 = state_49858__$1;
(statearr_49934_49997[(2)] = null);

(statearr_49934_49997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (10))){
var inst_49729 = (state_49858[(22)]);
var inst_49732 = cljs.core.chunked_seq_QMARK_.call(null,inst_49729);
var state_49858__$1 = state_49858;
if(inst_49732){
var statearr_49935_49998 = state_49858__$1;
(statearr_49935_49998[(1)] = (13));

} else {
var statearr_49936_49999 = state_49858__$1;
(statearr_49936_49999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (18))){
var inst_49764 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
if(cljs.core.truth_(inst_49764)){
var statearr_49937_50000 = state_49858__$1;
(statearr_49937_50000[(1)] = (19));

} else {
var statearr_49938_50001 = state_49858__$1;
(statearr_49938_50001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (42))){
var state_49858__$1 = state_49858;
var statearr_49939_50002 = state_49858__$1;
(statearr_49939_50002[(2)] = null);

(statearr_49939_50002[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (37))){
var inst_49823 = (state_49858[(2)]);
var state_49858__$1 = state_49858;
var statearr_49940_50003 = state_49858__$1;
(statearr_49940_50003[(2)] = inst_49823);

(statearr_49940_50003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49859 === (8))){
var inst_49716 = (state_49858[(7)]);
var inst_49729 = (state_49858[(22)]);
var inst_49729__$1 = cljs.core.seq.call(null,inst_49716);
var state_49858__$1 = (function (){var statearr_49941 = state_49858;
(statearr_49941[(22)] = inst_49729__$1);

return statearr_49941;
})();
if(inst_49729__$1){
var statearr_49942_50004 = state_49858__$1;
(statearr_49942_50004[(1)] = (10));

} else {
var statearr_49943_50005 = state_49858__$1;
(statearr_49943_50005[(1)] = (11));

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
}
});})(c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44548__auto__,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____0 = (function (){
var statearr_49944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49944[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__);

(statearr_49944[(1)] = (1));

return statearr_49944;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____1 = (function (state_49858){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_49858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e49945){if((e49945 instanceof Object)){
var ex__44553__auto__ = e49945;
var statearr_49946_50006 = state_49858;
(statearr_49946_50006[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50007 = state_49858;
state_49858 = G__50007;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__ = function(state_49858){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____1.call(this,state_49858);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44869__auto__ = (function (){var statearr_49947 = f__44868__auto__.call(null);
(statearr_49947[(6)] = c__44867__auto__);

return statearr_49947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__,map__49696,map__49696__$1,opts,before_jsload,on_jsload,reload_dependents,map__49697,map__49697__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44867__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50010,link){
var map__50011 = p__50010;
var map__50011__$1 = ((((!((map__50011 == null)))?((((map__50011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50011):map__50011);
var file = cljs.core.get.call(null,map__50011__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__50011,map__50011__$1,file){
return (function (p1__50008_SHARP_,p2__50009_SHARP_){
if(cljs.core._EQ_.call(null,p1__50008_SHARP_,p2__50009_SHARP_)){
return p1__50008_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__50011,map__50011__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50014){
var map__50015 = p__50014;
var map__50015__$1 = ((((!((map__50015 == null)))?((((map__50015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50015):map__50015);
var match_length = cljs.core.get.call(null,map__50015__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50015__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50013_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50013_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50017_SHARP_,p2__50018_SHARP_){
return cljs.core.assoc.call(null,p1__50017_SHARP_,cljs.core.get.call(null,p2__50018_SHARP_,key),p2__50018_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50019 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50019);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50019);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50020,p__50021){
var map__50022 = p__50020;
var map__50022__$1 = ((((!((map__50022 == null)))?((((map__50022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50022):map__50022);
var on_cssload = cljs.core.get.call(null,map__50022__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50023 = p__50021;
var map__50023__$1 = ((((!((map__50023 == null)))?((((map__50023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50023):map__50023);
var files_msg = map__50023__$1;
var files = cljs.core.get.call(null,map__50023__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1538003628454
