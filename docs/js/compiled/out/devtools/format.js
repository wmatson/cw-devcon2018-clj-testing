// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__42100__auto__ = (((value == null))?null:value);
var m__42101__auto__ = (devtools.format._header[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,value);
} else {
var m__42101__auto____$1 = (devtools.format._header["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__42100__auto__ = (((value == null))?null:value);
var m__42101__auto__ = (devtools.format._has_body[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,value);
} else {
var m__42101__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__42100__auto__ = (((value == null))?null:value);
var m__42101__auto__ = (devtools.format._body[goog.typeOf(x__42100__auto__)]);
if(!((m__42101__auto__ == null))){
return m__42101__auto__.call(null,value);
} else {
var m__42101__auto____$1 = (devtools.format._body["_"]);
if(!((m__42101__auto____$1 == null))){
return m__42101__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50876 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50876["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50877 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50877["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50878 = temp__5455__auto____$2;
return (o50878["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50880 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50880["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50881 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50881["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50882 = temp__5455__auto____$2;
return (o50882["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50885 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50885["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50886 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50886["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50887 = temp__5455__auto____$2;
return (o50887["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50892 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50892["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50893 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50893["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50894 = temp__5455__auto____$2;
return (o50894["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50897 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50897["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50898 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50898["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50899 = temp__5455__auto____$2;
return (o50899["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50901 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50901["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50902 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50902["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50903 = temp__5455__auto____$2;
return (o50903["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o50905 = temp__5455__auto__;
var temp__5455__auto____$1 = (o50905["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o50906 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o50906["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o50907 = temp__5455__auto____$2;
return (o50907["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__42653__auto__ = [];
var len__42646__auto___50958 = arguments.length;
var i__42647__auto___50959 = (0);
while(true){
if((i__42647__auto___50959 < len__42646__auto___50958)){
args__42653__auto__.push((arguments[i__42647__auto___50959]));

var G__50962 = (i__42647__auto___50959 + (1));
i__42647__auto___50959 = G__50962;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq50946){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50946));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__42653__auto__ = [];
var len__42646__auto___50987 = arguments.length;
var i__42647__auto___50989 = (0);
while(true){
if((i__42647__auto___50989 < len__42646__auto___50987)){
args__42653__auto__.push((arguments[i__42647__auto___50989]));

var G__50991 = (i__42647__auto___50989 + (1));
i__42647__auto___50989 = G__50991;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq50971){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50971));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51013 = arguments.length;
var i__42647__auto___51014 = (0);
while(true){
if((i__42647__auto___51014 < len__42646__auto___51013)){
args__42653__auto__.push((arguments[i__42647__auto___51014]));

var G__51015 = (i__42647__auto___51014 + (1));
i__42647__auto___51014 = G__51015;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq51002){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51002));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51030 = arguments.length;
var i__42647__auto___51033 = (0);
while(true){
if((i__42647__auto___51033 < len__42646__auto___51030)){
args__42653__auto__.push((arguments[i__42647__auto___51033]));

var G__51034 = (i__42647__auto___51033 + (1));
i__42647__auto___51033 = G__51034;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq51019){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51019));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51044 = arguments.length;
var i__42647__auto___51046 = (0);
while(true){
if((i__42647__auto___51046 < len__42646__auto___51044)){
args__42653__auto__.push((arguments[i__42647__auto___51046]));

var G__51047 = (i__42647__auto___51046 + (1));
i__42647__auto___51046 = G__51047;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq51035){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51035));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51070 = arguments.length;
var i__42647__auto___51071 = (0);
while(true){
if((i__42647__auto___51071 < len__42646__auto___51070)){
args__42653__auto__.push((arguments[i__42647__auto___51071]));

var G__51072 = (i__42647__auto___51071 + (1));
i__42647__auto___51071 = G__51072;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq51059){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51059));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51081 = arguments.length;
var i__42647__auto___51083 = (0);
while(true){
if((i__42647__auto___51083 < len__42646__auto___51081)){
args__42653__auto__.push((arguments[i__42647__auto___51083]));

var G__51084 = (i__42647__auto___51083 + (1));
i__42647__auto___51083 = G__51084;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq51078){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51078));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51108 = arguments.length;
var i__42647__auto___51109 = (0);
while(true){
if((i__42647__auto___51109 < len__42646__auto___51108)){
args__42653__auto__.push((arguments[i__42647__auto___51109]));

var G__51110 = (i__42647__auto___51109 + (1));
i__42647__auto___51109 = G__51110;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((1) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42654__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__51097){
var vec__51098 = p__51097;
var state_override = cljs.core.nth.call(null,vec__51098,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__51098,state_override){
return (function (p1__51089_SHARP_){
return cljs.core.merge.call(null,p1__51089_SHARP_,state_override);
});})(vec__51098,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq51091){
var G__51092 = cljs.core.first.call(null,seq51091);
var seq51091__$1 = cljs.core.next.call(null,seq51091);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__51092,seq51091__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51130 = arguments.length;
var i__42647__auto___51131 = (0);
while(true){
if((i__42647__auto___51131 < len__42646__auto___51130)){
args__42653__auto__.push((arguments[i__42647__auto___51131]));

var G__51132 = (i__42647__auto___51131 + (1));
i__42647__auto___51131 = G__51132;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq51119){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51119));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__42653__auto__ = [];
var len__42646__auto___51147 = arguments.length;
var i__42647__auto___51148 = (0);
while(true){
if((i__42647__auto___51148 < len__42646__auto___51147)){
args__42653__auto__.push((arguments[i__42647__auto___51148]));

var G__51149 = (i__42647__auto___51148 + (1));
i__42647__auto___51148 = G__51149;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((1) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42654__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq51136){
var G__51137 = cljs.core.first.call(null,seq51136);
var seq51136__$1 = cljs.core.next.call(null,seq51136);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__51137,seq51136__$1);
});


//# sourceMappingURL=format.js.map?rel=1538003629591
