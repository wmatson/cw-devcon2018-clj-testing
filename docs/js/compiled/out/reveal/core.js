// Compiled by ClojureScript 1.9.946 {}
goog.provide('reveal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('hiccups.runtime');
goog.require('reveal.slides');
reveal.core.load_hljs = (function reveal$core$load_hljs(){
return hljs.initHighlightingOnLoad();
});
reveal.core.options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"controls","controls",1340701452),true,new cljs.core.Keyword(null,"progress","progress",244323547),true,new cljs.core.Keyword(null,"transition","transition",765692007),"slide",new cljs.core.Keyword(null,"slideNumber","slideNumber",1553611975),false,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"bower_components/reveal.js/plugin/notes/notes.js",new cljs.core.Keyword(null,"async","async",1050769601),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"bower_components/reveal.js/plugin/highlight/highlight.js",new cljs.core.Keyword(null,"async","async",1050769601),true,new cljs.core.Keyword(null,"callback","callback",-705136228),reveal.core.load_hljs], null)], null)], null));
/**
 * Get list of all slides and convert them to html strings.
 */
reveal.core.convert = (function reveal$core$convert(){
var slides = reveal.slides.all.call(null);
return clojure.string.join.call(null,cljs.core.map.call(null,((function (slides){
return (function (p1__44658_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccups.runtime.render_html.call(null,p1__44658_SHARP_))].join('');
});})(slides))
,slides));
});
/**
 * Get all slides, set them as innerHTML and reinitialize Reveal.js
 */
reveal.core.main = (function reveal$core$main(){
document.getElementById("slides").innerHTML = reveal.core.convert.call(null);

Reveal.initialize(reveal.core.options);

return Reveal.setState(Reveal.getState());
});
reveal.core.main.call(null);
reveal.core.on_js_reload = (function reveal$core$on_js_reload(){
reveal.core.main.call(null);

return document.querySelectorAll("pre code").forEach((function (p1__44659_SHARP_){
return hljs.highlightBlock(p1__44659_SHARP_);
}));
});

//# sourceMappingURL=core.js.map?rel=1539948882718
