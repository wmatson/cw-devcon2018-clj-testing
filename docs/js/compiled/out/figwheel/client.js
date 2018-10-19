// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e50028){if((e50028 instanceof Error)){
var e = e50028;
return "Error: Unable to stringify";
} else {
throw e50028;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50031 = arguments.length;
switch (G__50031) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50029_SHARP_){
if(typeof p1__50029_SHARP_ === 'string'){
return p1__50029_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50029_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42653__auto__ = [];
var len__42646__auto___50034 = arguments.length;
var i__42647__auto___50035 = (0);
while(true){
if((i__42647__auto___50035 < len__42646__auto___50034)){
args__42653__auto__.push((arguments[i__42647__auto___50035]));

var G__50036 = (i__42647__auto___50035 + (1));
i__42647__auto___50035 = G__50036;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50033){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50033));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42653__auto__ = [];
var len__42646__auto___50038 = arguments.length;
var i__42647__auto___50039 = (0);
while(true){
if((i__42647__auto___50039 < len__42646__auto___50038)){
args__42653__auto__.push((arguments[i__42647__auto___50039]));

var G__50040 = (i__42647__auto___50039 + (1));
i__42647__auto___50039 = G__50040;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50037){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50037));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50041){
var map__50042 = p__50041;
var map__50042__$1 = ((((!((map__50042 == null)))?((((map__50042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50042):map__50042);
var message = cljs.core.get.call(null,map__50042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50042__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41367__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41367__auto__)){
return or__41367__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41355__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41355__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41355__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44867__auto___50121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___50121,ch){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___50121,ch){
return (function (state_50093){
var state_val_50094 = (state_50093[(1)]);
if((state_val_50094 === (7))){
var inst_50089 = (state_50093[(2)]);
var state_50093__$1 = state_50093;
var statearr_50095_50122 = state_50093__$1;
(statearr_50095_50122[(2)] = inst_50089);

(statearr_50095_50122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (1))){
var state_50093__$1 = state_50093;
var statearr_50096_50123 = state_50093__$1;
(statearr_50096_50123[(2)] = null);

(statearr_50096_50123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (4))){
var inst_50046 = (state_50093[(7)]);
var inst_50046__$1 = (state_50093[(2)]);
var state_50093__$1 = (function (){var statearr_50097 = state_50093;
(statearr_50097[(7)] = inst_50046__$1);

return statearr_50097;
})();
if(cljs.core.truth_(inst_50046__$1)){
var statearr_50098_50124 = state_50093__$1;
(statearr_50098_50124[(1)] = (5));

} else {
var statearr_50099_50125 = state_50093__$1;
(statearr_50099_50125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (15))){
var inst_50053 = (state_50093[(8)]);
var inst_50068 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50053);
var inst_50069 = cljs.core.first.call(null,inst_50068);
var inst_50070 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50069);
var inst_50071 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50070)].join('');
var inst_50072 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50071);
var state_50093__$1 = state_50093;
var statearr_50100_50126 = state_50093__$1;
(statearr_50100_50126[(2)] = inst_50072);

(statearr_50100_50126[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (13))){
var inst_50077 = (state_50093[(2)]);
var state_50093__$1 = state_50093;
var statearr_50101_50127 = state_50093__$1;
(statearr_50101_50127[(2)] = inst_50077);

(statearr_50101_50127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (6))){
var state_50093__$1 = state_50093;
var statearr_50102_50128 = state_50093__$1;
(statearr_50102_50128[(2)] = null);

(statearr_50102_50128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (17))){
var inst_50075 = (state_50093[(2)]);
var state_50093__$1 = state_50093;
var statearr_50103_50129 = state_50093__$1;
(statearr_50103_50129[(2)] = inst_50075);

(statearr_50103_50129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (3))){
var inst_50091 = (state_50093[(2)]);
var state_50093__$1 = state_50093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50093__$1,inst_50091);
} else {
if((state_val_50094 === (12))){
var inst_50052 = (state_50093[(9)]);
var inst_50066 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50052,opts);
var state_50093__$1 = state_50093;
if(cljs.core.truth_(inst_50066)){
var statearr_50104_50130 = state_50093__$1;
(statearr_50104_50130[(1)] = (15));

} else {
var statearr_50105_50131 = state_50093__$1;
(statearr_50105_50131[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (2))){
var state_50093__$1 = state_50093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50093__$1,(4),ch);
} else {
if((state_val_50094 === (11))){
var inst_50053 = (state_50093[(8)]);
var inst_50058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50059 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50053);
var inst_50060 = cljs.core.async.timeout.call(null,(1000));
var inst_50061 = [inst_50059,inst_50060];
var inst_50062 = (new cljs.core.PersistentVector(null,2,(5),inst_50058,inst_50061,null));
var state_50093__$1 = state_50093;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50093__$1,(14),inst_50062);
} else {
if((state_val_50094 === (9))){
var inst_50053 = (state_50093[(8)]);
var inst_50079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50080 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50053);
var inst_50081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50080);
var inst_50082 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50081)].join('');
var inst_50083 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50082);
var state_50093__$1 = (function (){var statearr_50106 = state_50093;
(statearr_50106[(10)] = inst_50079);

return statearr_50106;
})();
var statearr_50107_50132 = state_50093__$1;
(statearr_50107_50132[(2)] = inst_50083);

(statearr_50107_50132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (5))){
var inst_50046 = (state_50093[(7)]);
var inst_50048 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50049 = (new cljs.core.PersistentArrayMap(null,2,inst_50048,null));
var inst_50050 = (new cljs.core.PersistentHashSet(null,inst_50049,null));
var inst_50051 = figwheel.client.focus_msgs.call(null,inst_50050,inst_50046);
var inst_50052 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50051);
var inst_50053 = cljs.core.first.call(null,inst_50051);
var inst_50054 = figwheel.client.autoload_QMARK_.call(null);
var state_50093__$1 = (function (){var statearr_50108 = state_50093;
(statearr_50108[(8)] = inst_50053);

(statearr_50108[(9)] = inst_50052);

return statearr_50108;
})();
if(cljs.core.truth_(inst_50054)){
var statearr_50109_50133 = state_50093__$1;
(statearr_50109_50133[(1)] = (8));

} else {
var statearr_50110_50134 = state_50093__$1;
(statearr_50110_50134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (14))){
var inst_50064 = (state_50093[(2)]);
var state_50093__$1 = state_50093;
var statearr_50111_50135 = state_50093__$1;
(statearr_50111_50135[(2)] = inst_50064);

(statearr_50111_50135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (16))){
var state_50093__$1 = state_50093;
var statearr_50112_50136 = state_50093__$1;
(statearr_50112_50136[(2)] = null);

(statearr_50112_50136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (10))){
var inst_50085 = (state_50093[(2)]);
var state_50093__$1 = (function (){var statearr_50113 = state_50093;
(statearr_50113[(11)] = inst_50085);

return statearr_50113;
})();
var statearr_50114_50137 = state_50093__$1;
(statearr_50114_50137[(2)] = null);

(statearr_50114_50137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50094 === (8))){
var inst_50052 = (state_50093[(9)]);
var inst_50056 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50052,opts);
var state_50093__$1 = state_50093;
if(cljs.core.truth_(inst_50056)){
var statearr_50115_50138 = state_50093__$1;
(statearr_50115_50138[(1)] = (11));

} else {
var statearr_50116_50139 = state_50093__$1;
(statearr_50116_50139[(1)] = (12));

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
});})(c__44867__auto___50121,ch))
;
return ((function (switch__44548__auto__,c__44867__auto___50121,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____0 = (function (){
var statearr_50117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50117[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__);

(statearr_50117[(1)] = (1));

return statearr_50117;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____1 = (function (state_50093){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_50093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e50118){if((e50118 instanceof Object)){
var ex__44553__auto__ = e50118;
var statearr_50119_50140 = state_50093;
(statearr_50119_50140[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50141 = state_50093;
state_50093 = G__50141;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__ = function(state_50093){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____1.call(this,state_50093);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44549__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___50121,ch))
})();
var state__44869__auto__ = (function (){var statearr_50120 = f__44868__auto__.call(null);
(statearr_50120[(6)] = c__44867__auto___50121);

return statearr_50120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___50121,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50142_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50142_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_50144 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50144){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e50143){if((e50143 instanceof Error)){
var e = e50143;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50144], null));
} else {
var e = e50143;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_50144))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50145){
var map__50146 = p__50145;
var map__50146__$1 = ((((!((map__50146 == null)))?((((map__50146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50146):map__50146);
var opts = map__50146__$1;
var build_id = cljs.core.get.call(null,map__50146__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50146,map__50146__$1,opts,build_id){
return (function (p__50148){
var vec__50149 = p__50148;
var seq__50150 = cljs.core.seq.call(null,vec__50149);
var first__50151 = cljs.core.first.call(null,seq__50150);
var seq__50150__$1 = cljs.core.next.call(null,seq__50150);
var map__50152 = first__50151;
var map__50152__$1 = ((((!((map__50152 == null)))?((((map__50152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50152):map__50152);
var msg = map__50152__$1;
var msg_name = cljs.core.get.call(null,map__50152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50150__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50149,seq__50150,first__50151,seq__50150__$1,map__50152,map__50152__$1,msg,msg_name,_,map__50146,map__50146__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50149,seq__50150,first__50151,seq__50150__$1,map__50152,map__50152__$1,msg,msg_name,_,map__50146,map__50146__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50146,map__50146__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50154){
var vec__50155 = p__50154;
var seq__50156 = cljs.core.seq.call(null,vec__50155);
var first__50157 = cljs.core.first.call(null,seq__50156);
var seq__50156__$1 = cljs.core.next.call(null,seq__50156);
var map__50158 = first__50157;
var map__50158__$1 = ((((!((map__50158 == null)))?((((map__50158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50158):map__50158);
var msg = map__50158__$1;
var msg_name = cljs.core.get.call(null,map__50158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50156__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50160){
var map__50161 = p__50160;
var map__50161__$1 = ((((!((map__50161 == null)))?((((map__50161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50161):map__50161);
var on_compile_warning = cljs.core.get.call(null,map__50161__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50161__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50161,map__50161__$1,on_compile_warning,on_compile_fail){
return (function (p__50163){
var vec__50164 = p__50163;
var seq__50165 = cljs.core.seq.call(null,vec__50164);
var first__50166 = cljs.core.first.call(null,seq__50165);
var seq__50165__$1 = cljs.core.next.call(null,seq__50165);
var map__50167 = first__50166;
var map__50167__$1 = ((((!((map__50167 == null)))?((((map__50167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50167):map__50167);
var msg = map__50167__$1;
var msg_name = cljs.core.get.call(null,map__50167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50165__$1;
var pred__50169 = cljs.core._EQ_;
var expr__50170 = msg_name;
if(cljs.core.truth_(pred__50169.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50170))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50169.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50170))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50161,map__50161__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__,msg_hist,msg_names,msg){
return (function (state_50259){
var state_val_50260 = (state_50259[(1)]);
if((state_val_50260 === (7))){
var inst_50179 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50179)){
var statearr_50261_50308 = state_50259__$1;
(statearr_50261_50308[(1)] = (8));

} else {
var statearr_50262_50309 = state_50259__$1;
(statearr_50262_50309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (20))){
var inst_50253 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50263_50310 = state_50259__$1;
(statearr_50263_50310[(2)] = inst_50253);

(statearr_50263_50310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (27))){
var inst_50249 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50264_50311 = state_50259__$1;
(statearr_50264_50311[(2)] = inst_50249);

(statearr_50264_50311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (1))){
var inst_50172 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50172)){
var statearr_50265_50312 = state_50259__$1;
(statearr_50265_50312[(1)] = (2));

} else {
var statearr_50266_50313 = state_50259__$1;
(statearr_50266_50313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (24))){
var inst_50251 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50267_50314 = state_50259__$1;
(statearr_50267_50314[(2)] = inst_50251);

(statearr_50267_50314[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (4))){
var inst_50257 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50259__$1,inst_50257);
} else {
if((state_val_50260 === (15))){
var inst_50255 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50268_50315 = state_50259__$1;
(statearr_50268_50315[(2)] = inst_50255);

(statearr_50268_50315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (21))){
var inst_50208 = (state_50259[(2)]);
var inst_50209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50209);
var state_50259__$1 = (function (){var statearr_50269 = state_50259;
(statearr_50269[(7)] = inst_50208);

return statearr_50269;
})();
var statearr_50270_50316 = state_50259__$1;
(statearr_50270_50316[(2)] = inst_50210);

(statearr_50270_50316[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (31))){
var inst_50238 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50238)){
var statearr_50271_50317 = state_50259__$1;
(statearr_50271_50317[(1)] = (34));

} else {
var statearr_50272_50318 = state_50259__$1;
(statearr_50272_50318[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (32))){
var inst_50247 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50273_50319 = state_50259__$1;
(statearr_50273_50319[(2)] = inst_50247);

(statearr_50273_50319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (33))){
var inst_50234 = (state_50259[(2)]);
var inst_50235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50235);
var state_50259__$1 = (function (){var statearr_50274 = state_50259;
(statearr_50274[(8)] = inst_50234);

return statearr_50274;
})();
var statearr_50275_50320 = state_50259__$1;
(statearr_50275_50320[(2)] = inst_50236);

(statearr_50275_50320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (13))){
var inst_50193 = figwheel.client.heads_up.clear.call(null);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(16),inst_50193);
} else {
if((state_val_50260 === (22))){
var inst_50214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50215 = figwheel.client.heads_up.append_warning_message.call(null,inst_50214);
var state_50259__$1 = state_50259;
var statearr_50276_50321 = state_50259__$1;
(statearr_50276_50321[(2)] = inst_50215);

(statearr_50276_50321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (36))){
var inst_50245 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50277_50322 = state_50259__$1;
(statearr_50277_50322[(2)] = inst_50245);

(statearr_50277_50322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (29))){
var inst_50225 = (state_50259[(2)]);
var inst_50226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50226);
var state_50259__$1 = (function (){var statearr_50278 = state_50259;
(statearr_50278[(9)] = inst_50225);

return statearr_50278;
})();
var statearr_50279_50323 = state_50259__$1;
(statearr_50279_50323[(2)] = inst_50227);

(statearr_50279_50323[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (6))){
var inst_50174 = (state_50259[(10)]);
var state_50259__$1 = state_50259;
var statearr_50280_50324 = state_50259__$1;
(statearr_50280_50324[(2)] = inst_50174);

(statearr_50280_50324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (28))){
var inst_50221 = (state_50259[(2)]);
var inst_50222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50223 = figwheel.client.heads_up.display_warning.call(null,inst_50222);
var state_50259__$1 = (function (){var statearr_50281 = state_50259;
(statearr_50281[(11)] = inst_50221);

return statearr_50281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(29),inst_50223);
} else {
if((state_val_50260 === (25))){
var inst_50219 = figwheel.client.heads_up.clear.call(null);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(28),inst_50219);
} else {
if((state_val_50260 === (34))){
var inst_50240 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(37),inst_50240);
} else {
if((state_val_50260 === (17))){
var inst_50199 = (state_50259[(2)]);
var inst_50200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50201 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50200);
var state_50259__$1 = (function (){var statearr_50282 = state_50259;
(statearr_50282[(12)] = inst_50199);

return statearr_50282;
})();
var statearr_50283_50325 = state_50259__$1;
(statearr_50283_50325[(2)] = inst_50201);

(statearr_50283_50325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (3))){
var inst_50191 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50191)){
var statearr_50284_50326 = state_50259__$1;
(statearr_50284_50326[(1)] = (13));

} else {
var statearr_50285_50327 = state_50259__$1;
(statearr_50285_50327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (12))){
var inst_50187 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50286_50328 = state_50259__$1;
(statearr_50286_50328[(2)] = inst_50187);

(statearr_50286_50328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (2))){
var inst_50174 = (state_50259[(10)]);
var inst_50174__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50259__$1 = (function (){var statearr_50287 = state_50259;
(statearr_50287[(10)] = inst_50174__$1);

return statearr_50287;
})();
if(cljs.core.truth_(inst_50174__$1)){
var statearr_50288_50329 = state_50259__$1;
(statearr_50288_50329[(1)] = (5));

} else {
var statearr_50289_50330 = state_50259__$1;
(statearr_50289_50330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (23))){
var inst_50217 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50217)){
var statearr_50290_50331 = state_50259__$1;
(statearr_50290_50331[(1)] = (25));

} else {
var statearr_50291_50332 = state_50259__$1;
(statearr_50291_50332[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (35))){
var state_50259__$1 = state_50259;
var statearr_50292_50333 = state_50259__$1;
(statearr_50292_50333[(2)] = null);

(statearr_50292_50333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (19))){
var inst_50212 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50212)){
var statearr_50293_50334 = state_50259__$1;
(statearr_50293_50334[(1)] = (22));

} else {
var statearr_50294_50335 = state_50259__$1;
(statearr_50294_50335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (11))){
var inst_50183 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50295_50336 = state_50259__$1;
(statearr_50295_50336[(2)] = inst_50183);

(statearr_50295_50336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (9))){
var inst_50185 = figwheel.client.heads_up.clear.call(null);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(12),inst_50185);
} else {
if((state_val_50260 === (5))){
var inst_50176 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50259__$1 = state_50259;
var statearr_50296_50337 = state_50259__$1;
(statearr_50296_50337[(2)] = inst_50176);

(statearr_50296_50337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (14))){
var inst_50203 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50203)){
var statearr_50297_50338 = state_50259__$1;
(statearr_50297_50338[(1)] = (18));

} else {
var statearr_50298_50339 = state_50259__$1;
(statearr_50298_50339[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (26))){
var inst_50229 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50259__$1 = state_50259;
if(cljs.core.truth_(inst_50229)){
var statearr_50299_50340 = state_50259__$1;
(statearr_50299_50340[(1)] = (30));

} else {
var statearr_50300_50341 = state_50259__$1;
(statearr_50300_50341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (16))){
var inst_50195 = (state_50259[(2)]);
var inst_50196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50197 = figwheel.client.heads_up.display_exception.call(null,inst_50196);
var state_50259__$1 = (function (){var statearr_50301 = state_50259;
(statearr_50301[(13)] = inst_50195);

return statearr_50301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(17),inst_50197);
} else {
if((state_val_50260 === (30))){
var inst_50231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50232 = figwheel.client.heads_up.display_warning.call(null,inst_50231);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(33),inst_50232);
} else {
if((state_val_50260 === (10))){
var inst_50189 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50302_50342 = state_50259__$1;
(statearr_50302_50342[(2)] = inst_50189);

(statearr_50302_50342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (18))){
var inst_50205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50206 = figwheel.client.heads_up.display_exception.call(null,inst_50205);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(21),inst_50206);
} else {
if((state_val_50260 === (37))){
var inst_50242 = (state_50259[(2)]);
var state_50259__$1 = state_50259;
var statearr_50303_50343 = state_50259__$1;
(statearr_50303_50343[(2)] = inst_50242);

(statearr_50303_50343[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50260 === (8))){
var inst_50181 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50259__$1 = state_50259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50259__$1,(11),inst_50181);
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
});})(c__44867__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44548__auto__,c__44867__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____0 = (function (){
var statearr_50304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50304[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__);

(statearr_50304[(1)] = (1));

return statearr_50304;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____1 = (function (state_50259){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_50259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e50305){if((e50305 instanceof Object)){
var ex__44553__auto__ = e50305;
var statearr_50306_50344 = state_50259;
(statearr_50306_50344[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50345 = state_50259;
state_50259 = G__50345;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__ = function(state_50259){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____1.call(this,state_50259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__,msg_hist,msg_names,msg))
})();
var state__44869__auto__ = (function (){var statearr_50307 = f__44868__auto__.call(null);
(statearr_50307[(6)] = c__44867__auto__);

return statearr_50307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__,msg_hist,msg_names,msg))
);

return c__44867__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44867__auto___50374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto___50374,ch){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto___50374,ch){
return (function (state_50360){
var state_val_50361 = (state_50360[(1)]);
if((state_val_50361 === (1))){
var state_50360__$1 = state_50360;
var statearr_50362_50375 = state_50360__$1;
(statearr_50362_50375[(2)] = null);

(statearr_50362_50375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50361 === (2))){
var state_50360__$1 = state_50360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50360__$1,(4),ch);
} else {
if((state_val_50361 === (3))){
var inst_50358 = (state_50360[(2)]);
var state_50360__$1 = state_50360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50360__$1,inst_50358);
} else {
if((state_val_50361 === (4))){
var inst_50348 = (state_50360[(7)]);
var inst_50348__$1 = (state_50360[(2)]);
var state_50360__$1 = (function (){var statearr_50363 = state_50360;
(statearr_50363[(7)] = inst_50348__$1);

return statearr_50363;
})();
if(cljs.core.truth_(inst_50348__$1)){
var statearr_50364_50376 = state_50360__$1;
(statearr_50364_50376[(1)] = (5));

} else {
var statearr_50365_50377 = state_50360__$1;
(statearr_50365_50377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50361 === (5))){
var inst_50348 = (state_50360[(7)]);
var inst_50350 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50348);
var state_50360__$1 = state_50360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50360__$1,(8),inst_50350);
} else {
if((state_val_50361 === (6))){
var state_50360__$1 = state_50360;
var statearr_50366_50378 = state_50360__$1;
(statearr_50366_50378[(2)] = null);

(statearr_50366_50378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50361 === (7))){
var inst_50356 = (state_50360[(2)]);
var state_50360__$1 = state_50360;
var statearr_50367_50379 = state_50360__$1;
(statearr_50367_50379[(2)] = inst_50356);

(statearr_50367_50379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50361 === (8))){
var inst_50352 = (state_50360[(2)]);
var state_50360__$1 = (function (){var statearr_50368 = state_50360;
(statearr_50368[(8)] = inst_50352);

return statearr_50368;
})();
var statearr_50369_50380 = state_50360__$1;
(statearr_50369_50380[(2)] = null);

(statearr_50369_50380[(1)] = (2));


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
});})(c__44867__auto___50374,ch))
;
return ((function (switch__44548__auto__,c__44867__auto___50374,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44549__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44549__auto____0 = (function (){
var statearr_50370 = [null,null,null,null,null,null,null,null,null];
(statearr_50370[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44549__auto__);

(statearr_50370[(1)] = (1));

return statearr_50370;
});
var figwheel$client$heads_up_plugin_$_state_machine__44549__auto____1 = (function (state_50360){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_50360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e50371){if((e50371 instanceof Object)){
var ex__44553__auto__ = e50371;
var statearr_50372_50381 = state_50360;
(statearr_50372_50381[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50382 = state_50360;
state_50360 = G__50382;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44549__auto__ = function(state_50360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44549__auto____1.call(this,state_50360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44549__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44549__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto___50374,ch))
})();
var state__44869__auto__ = (function (){var statearr_50373 = f__44868__auto__.call(null);
(statearr_50373[(6)] = c__44867__auto___50374);

return statearr_50373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto___50374,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__){
return (function (state_50388){
var state_val_50389 = (state_50388[(1)]);
if((state_val_50389 === (1))){
var inst_50383 = cljs.core.async.timeout.call(null,(3000));
var state_50388__$1 = state_50388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50388__$1,(2),inst_50383);
} else {
if((state_val_50389 === (2))){
var inst_50385 = (state_50388[(2)]);
var inst_50386 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50388__$1 = (function (){var statearr_50390 = state_50388;
(statearr_50390[(7)] = inst_50385);

return statearr_50390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50388__$1,inst_50386);
} else {
return null;
}
}
});})(c__44867__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____0 = (function (){
var statearr_50391 = [null,null,null,null,null,null,null,null];
(statearr_50391[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__);

(statearr_50391[(1)] = (1));

return statearr_50391;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____1 = (function (state_50388){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_50388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e50392){if((e50392 instanceof Object)){
var ex__44553__auto__ = e50392;
var statearr_50393_50395 = state_50388;
(statearr_50393_50395[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50396 = state_50388;
state_50388 = G__50396;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__ = function(state_50388){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____1.call(this,state_50388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44549__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__))
})();
var state__44869__auto__ = (function (){var statearr_50394 = f__44868__auto__.call(null);
(statearr_50394[(6)] = c__44867__auto__);

return statearr_50394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__))
);

return c__44867__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44867__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44867__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__44868__auto__ = (function (){var switch__44548__auto__ = ((function (c__44867__auto__,figwheel_version,temp__5457__auto__){
return (function (state_50403){
var state_val_50404 = (state_50403[(1)]);
if((state_val_50404 === (1))){
var inst_50397 = cljs.core.async.timeout.call(null,(2000));
var state_50403__$1 = state_50403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50403__$1,(2),inst_50397);
} else {
if((state_val_50404 === (2))){
var inst_50399 = (state_50403[(2)]);
var inst_50400 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50401 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50400);
var state_50403__$1 = (function (){var statearr_50405 = state_50403;
(statearr_50405[(7)] = inst_50399);

return statearr_50405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50403__$1,inst_50401);
} else {
return null;
}
}
});})(c__44867__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__44548__auto__,c__44867__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____0 = (function (){
var statearr_50406 = [null,null,null,null,null,null,null,null];
(statearr_50406[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__);

(statearr_50406[(1)] = (1));

return statearr_50406;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____1 = (function (state_50403){
while(true){
var ret_value__44551__auto__ = (function (){try{while(true){
var result__44552__auto__ = switch__44548__auto__.call(null,state_50403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44552__auto__;
}
break;
}
}catch (e50407){if((e50407 instanceof Object)){
var ex__44553__auto__ = e50407;
var statearr_50408_50410 = state_50403;
(statearr_50408_50410[(5)] = ex__44553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50411 = state_50403;
state_50403 = G__50411;
continue;
} else {
return ret_value__44551__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__ = function(state_50403){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____1.call(this,state_50403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44549__auto__;
})()
;})(switch__44548__auto__,c__44867__auto__,figwheel_version,temp__5457__auto__))
})();
var state__44869__auto__ = (function (){var statearr_50409 = f__44868__auto__.call(null);
(statearr_50409[(6)] = c__44867__auto__);

return statearr_50409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44869__auto__);
});})(c__44867__auto__,figwheel_version,temp__5457__auto__))
);

return c__44867__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50412){
var map__50413 = p__50412;
var map__50413__$1 = ((((!((map__50413 == null)))?((((map__50413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50413):map__50413);
var file = cljs.core.get.call(null,map__50413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50415 = "";
var G__50415__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50415),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50415);
var G__50415__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50415__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50415__$1);
if(cljs.core.truth_((function (){var and__41355__auto__ = line;
if(cljs.core.truth_(and__41355__auto__)){
return column;
} else {
return and__41355__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50415__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50415__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50416){
var map__50417 = p__50416;
var map__50417__$1 = ((((!((map__50417 == null)))?((((map__50417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50417):map__50417);
var ed = map__50417__$1;
var formatted_exception = cljs.core.get.call(null,map__50417__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50417__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50417__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50419_50423 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50420_50424 = null;
var count__50421_50425 = (0);
var i__50422_50426 = (0);
while(true){
if((i__50422_50426 < count__50421_50425)){
var msg_50427 = cljs.core._nth.call(null,chunk__50420_50424,i__50422_50426);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50427);

var G__50428 = seq__50419_50423;
var G__50429 = chunk__50420_50424;
var G__50430 = count__50421_50425;
var G__50431 = (i__50422_50426 + (1));
seq__50419_50423 = G__50428;
chunk__50420_50424 = G__50429;
count__50421_50425 = G__50430;
i__50422_50426 = G__50431;
continue;
} else {
var temp__5457__auto___50432 = cljs.core.seq.call(null,seq__50419_50423);
if(temp__5457__auto___50432){
var seq__50419_50433__$1 = temp__5457__auto___50432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50419_50433__$1)){
var c__42298__auto___50434 = cljs.core.chunk_first.call(null,seq__50419_50433__$1);
var G__50435 = cljs.core.chunk_rest.call(null,seq__50419_50433__$1);
var G__50436 = c__42298__auto___50434;
var G__50437 = cljs.core.count.call(null,c__42298__auto___50434);
var G__50438 = (0);
seq__50419_50423 = G__50435;
chunk__50420_50424 = G__50436;
count__50421_50425 = G__50437;
i__50422_50426 = G__50438;
continue;
} else {
var msg_50439 = cljs.core.first.call(null,seq__50419_50433__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50439);

var G__50440 = cljs.core.next.call(null,seq__50419_50433__$1);
var G__50441 = null;
var G__50442 = (0);
var G__50443 = (0);
seq__50419_50423 = G__50440;
chunk__50420_50424 = G__50441;
count__50421_50425 = G__50442;
i__50422_50426 = G__50443;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50444){
var map__50445 = p__50444;
var map__50445__$1 = ((((!((map__50445 == null)))?((((map__50445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50445):map__50445);
var w = map__50445__$1;
var message = cljs.core.get.call(null,map__50445__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41355__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41355__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41355__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__50447 = cljs.core.seq.call(null,plugins);
var chunk__50448 = null;
var count__50449 = (0);
var i__50450 = (0);
while(true){
if((i__50450 < count__50449)){
var vec__50451 = cljs.core._nth.call(null,chunk__50448,i__50450);
var k = cljs.core.nth.call(null,vec__50451,(0),null);
var plugin = cljs.core.nth.call(null,vec__50451,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50457 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50447,chunk__50448,count__50449,i__50450,pl_50457,vec__50451,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50457.call(null,msg_hist);
});})(seq__50447,chunk__50448,count__50449,i__50450,pl_50457,vec__50451,k,plugin))
);
} else {
}

var G__50458 = seq__50447;
var G__50459 = chunk__50448;
var G__50460 = count__50449;
var G__50461 = (i__50450 + (1));
seq__50447 = G__50458;
chunk__50448 = G__50459;
count__50449 = G__50460;
i__50450 = G__50461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50447);
if(temp__5457__auto__){
var seq__50447__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50447__$1)){
var c__42298__auto__ = cljs.core.chunk_first.call(null,seq__50447__$1);
var G__50462 = cljs.core.chunk_rest.call(null,seq__50447__$1);
var G__50463 = c__42298__auto__;
var G__50464 = cljs.core.count.call(null,c__42298__auto__);
var G__50465 = (0);
seq__50447 = G__50462;
chunk__50448 = G__50463;
count__50449 = G__50464;
i__50450 = G__50465;
continue;
} else {
var vec__50454 = cljs.core.first.call(null,seq__50447__$1);
var k = cljs.core.nth.call(null,vec__50454,(0),null);
var plugin = cljs.core.nth.call(null,vec__50454,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50466 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50447,chunk__50448,count__50449,i__50450,pl_50466,vec__50454,k,plugin,seq__50447__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50466.call(null,msg_hist);
});})(seq__50447,chunk__50448,count__50449,i__50450,pl_50466,vec__50454,k,plugin,seq__50447__$1,temp__5457__auto__))
);
} else {
}

var G__50467 = cljs.core.next.call(null,seq__50447__$1);
var G__50468 = null;
var G__50469 = (0);
var G__50470 = (0);
seq__50447 = G__50467;
chunk__50448 = G__50468;
count__50449 = G__50469;
i__50450 = G__50470;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__50472 = arguments.length;
switch (G__50472) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__50473_50478 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50474_50479 = null;
var count__50475_50480 = (0);
var i__50476_50481 = (0);
while(true){
if((i__50476_50481 < count__50475_50480)){
var msg_50482 = cljs.core._nth.call(null,chunk__50474_50479,i__50476_50481);
figwheel.client.socket.handle_incoming_message.call(null,msg_50482);

var G__50483 = seq__50473_50478;
var G__50484 = chunk__50474_50479;
var G__50485 = count__50475_50480;
var G__50486 = (i__50476_50481 + (1));
seq__50473_50478 = G__50483;
chunk__50474_50479 = G__50484;
count__50475_50480 = G__50485;
i__50476_50481 = G__50486;
continue;
} else {
var temp__5457__auto___50487 = cljs.core.seq.call(null,seq__50473_50478);
if(temp__5457__auto___50487){
var seq__50473_50488__$1 = temp__5457__auto___50487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50473_50488__$1)){
var c__42298__auto___50489 = cljs.core.chunk_first.call(null,seq__50473_50488__$1);
var G__50490 = cljs.core.chunk_rest.call(null,seq__50473_50488__$1);
var G__50491 = c__42298__auto___50489;
var G__50492 = cljs.core.count.call(null,c__42298__auto___50489);
var G__50493 = (0);
seq__50473_50478 = G__50490;
chunk__50474_50479 = G__50491;
count__50475_50480 = G__50492;
i__50476_50481 = G__50493;
continue;
} else {
var msg_50494 = cljs.core.first.call(null,seq__50473_50488__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50494);

var G__50495 = cljs.core.next.call(null,seq__50473_50488__$1);
var G__50496 = null;
var G__50497 = (0);
var G__50498 = (0);
seq__50473_50478 = G__50495;
chunk__50474_50479 = G__50496;
count__50475_50480 = G__50497;
i__50476_50481 = G__50498;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42653__auto__ = [];
var len__42646__auto___50503 = arguments.length;
var i__42647__auto___50504 = (0);
while(true){
if((i__42647__auto___50504 < len__42646__auto___50503)){
args__42653__auto__.push((arguments[i__42647__auto___50504]));

var G__50505 = (i__42647__auto___50504 + (1));
i__42647__auto___50504 = G__50505;
continue;
} else {
}
break;
}

var argseq__42654__auto__ = ((((0) < args__42653__auto__.length))?(new cljs.core.IndexedSeq(args__42653__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42654__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50500){
var map__50501 = p__50500;
var map__50501__$1 = ((((!((map__50501 == null)))?((((map__50501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50501):map__50501);
var opts = map__50501__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50499){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50499));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50506){if((e50506 instanceof Error)){
var e = e50506;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50506;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__50507){
var map__50508 = p__50507;
var map__50508__$1 = ((((!((map__50508 == null)))?((((map__50508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50508):map__50508);
var msg_name = cljs.core.get.call(null,map__50508__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1538003628993
