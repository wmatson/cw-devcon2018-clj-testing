// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49061){
var map__49062 = p__49061;
var map__49062__$1 = ((((!((map__49062 == null)))?((((map__49062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49062):map__49062);
var m = map__49062__$1;
var n = cljs.core.get.call(null,map__49062__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49064_49086 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49065_49087 = null;
var count__49066_49088 = (0);
var i__49067_49089 = (0);
while(true){
if((i__49067_49089 < count__49066_49088)){
var f_49090 = cljs.core._nth.call(null,chunk__49065_49087,i__49067_49089);
cljs.core.println.call(null,"  ",f_49090);

var G__49091 = seq__49064_49086;
var G__49092 = chunk__49065_49087;
var G__49093 = count__49066_49088;
var G__49094 = (i__49067_49089 + (1));
seq__49064_49086 = G__49091;
chunk__49065_49087 = G__49092;
count__49066_49088 = G__49093;
i__49067_49089 = G__49094;
continue;
} else {
var temp__5457__auto___49095 = cljs.core.seq.call(null,seq__49064_49086);
if(temp__5457__auto___49095){
var seq__49064_49096__$1 = temp__5457__auto___49095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49064_49096__$1)){
var c__42298__auto___49097 = cljs.core.chunk_first.call(null,seq__49064_49096__$1);
var G__49098 = cljs.core.chunk_rest.call(null,seq__49064_49096__$1);
var G__49099 = c__42298__auto___49097;
var G__49100 = cljs.core.count.call(null,c__42298__auto___49097);
var G__49101 = (0);
seq__49064_49086 = G__49098;
chunk__49065_49087 = G__49099;
count__49066_49088 = G__49100;
i__49067_49089 = G__49101;
continue;
} else {
var f_49102 = cljs.core.first.call(null,seq__49064_49096__$1);
cljs.core.println.call(null,"  ",f_49102);

var G__49103 = cljs.core.next.call(null,seq__49064_49096__$1);
var G__49104 = null;
var G__49105 = (0);
var G__49106 = (0);
seq__49064_49086 = G__49103;
chunk__49065_49087 = G__49104;
count__49066_49088 = G__49105;
i__49067_49089 = G__49106;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49107 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41367__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49107);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49107)))?cljs.core.second.call(null,arglists_49107):arglists_49107));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__49068_49108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49069_49109 = null;
var count__49070_49110 = (0);
var i__49071_49111 = (0);
while(true){
if((i__49071_49111 < count__49070_49110)){
var vec__49072_49112 = cljs.core._nth.call(null,chunk__49069_49109,i__49071_49111);
var name_49113 = cljs.core.nth.call(null,vec__49072_49112,(0),null);
var map__49075_49114 = cljs.core.nth.call(null,vec__49072_49112,(1),null);
var map__49075_49115__$1 = ((((!((map__49075_49114 == null)))?((((map__49075_49114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49075_49114.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49075_49114):map__49075_49114);
var doc_49116 = cljs.core.get.call(null,map__49075_49115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49117 = cljs.core.get.call(null,map__49075_49115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49113);

cljs.core.println.call(null," ",arglists_49117);

if(cljs.core.truth_(doc_49116)){
cljs.core.println.call(null," ",doc_49116);
} else {
}

var G__49118 = seq__49068_49108;
var G__49119 = chunk__49069_49109;
var G__49120 = count__49070_49110;
var G__49121 = (i__49071_49111 + (1));
seq__49068_49108 = G__49118;
chunk__49069_49109 = G__49119;
count__49070_49110 = G__49120;
i__49071_49111 = G__49121;
continue;
} else {
var temp__5457__auto___49122 = cljs.core.seq.call(null,seq__49068_49108);
if(temp__5457__auto___49122){
var seq__49068_49123__$1 = temp__5457__auto___49122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49068_49123__$1)){
var c__42298__auto___49124 = cljs.core.chunk_first.call(null,seq__49068_49123__$1);
var G__49125 = cljs.core.chunk_rest.call(null,seq__49068_49123__$1);
var G__49126 = c__42298__auto___49124;
var G__49127 = cljs.core.count.call(null,c__42298__auto___49124);
var G__49128 = (0);
seq__49068_49108 = G__49125;
chunk__49069_49109 = G__49126;
count__49070_49110 = G__49127;
i__49071_49111 = G__49128;
continue;
} else {
var vec__49077_49129 = cljs.core.first.call(null,seq__49068_49123__$1);
var name_49130 = cljs.core.nth.call(null,vec__49077_49129,(0),null);
var map__49080_49131 = cljs.core.nth.call(null,vec__49077_49129,(1),null);
var map__49080_49132__$1 = ((((!((map__49080_49131 == null)))?((((map__49080_49131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49080_49131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49080_49131):map__49080_49131);
var doc_49133 = cljs.core.get.call(null,map__49080_49132__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49134 = cljs.core.get.call(null,map__49080_49132__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49130);

cljs.core.println.call(null," ",arglists_49134);

if(cljs.core.truth_(doc_49133)){
cljs.core.println.call(null," ",doc_49133);
} else {
}

var G__49135 = cljs.core.next.call(null,seq__49068_49123__$1);
var G__49136 = null;
var G__49137 = (0);
var G__49138 = (0);
seq__49068_49108 = G__49135;
chunk__49069_49109 = G__49136;
count__49070_49110 = G__49137;
i__49071_49111 = G__49138;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__49082 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49083 = null;
var count__49084 = (0);
var i__49085 = (0);
while(true){
if((i__49085 < count__49084)){
var role = cljs.core._nth.call(null,chunk__49083,i__49085);
var temp__5457__auto___49139__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49139__$1)){
var spec_49140 = temp__5457__auto___49139__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49140));
} else {
}

var G__49141 = seq__49082;
var G__49142 = chunk__49083;
var G__49143 = count__49084;
var G__49144 = (i__49085 + (1));
seq__49082 = G__49141;
chunk__49083 = G__49142;
count__49084 = G__49143;
i__49085 = G__49144;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__49082);
if(temp__5457__auto____$1){
var seq__49082__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49082__$1)){
var c__42298__auto__ = cljs.core.chunk_first.call(null,seq__49082__$1);
var G__49145 = cljs.core.chunk_rest.call(null,seq__49082__$1);
var G__49146 = c__42298__auto__;
var G__49147 = cljs.core.count.call(null,c__42298__auto__);
var G__49148 = (0);
seq__49082 = G__49145;
chunk__49083 = G__49146;
count__49084 = G__49147;
i__49085 = G__49148;
continue;
} else {
var role = cljs.core.first.call(null,seq__49082__$1);
var temp__5457__auto___49149__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49149__$2)){
var spec_49150 = temp__5457__auto___49149__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49150));
} else {
}

var G__49151 = cljs.core.next.call(null,seq__49082__$1);
var G__49152 = null;
var G__49153 = (0);
var G__49154 = (0);
seq__49082 = G__49151;
chunk__49083 = G__49152;
count__49084 = G__49153;
i__49085 = G__49154;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1538003627838
