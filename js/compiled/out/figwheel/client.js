// Compiled by ClojureScript 1.9.908 {}
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
}catch (e45000){if((e45000 instanceof Error)){
var e = e45000;
return "Error: Unable to stringify";
} else {
throw e45000;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__45003 = arguments.length;
switch (G__45003) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__45001_SHARP_){
if(typeof p1__45001_SHARP_ === 'string'){
return p1__45001_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__45001_SHARP_);
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
var args__29315__auto__ = [];
var len__29308__auto___45006 = arguments.length;
var i__29309__auto___45007 = (0);
while(true){
if((i__29309__auto___45007 < len__29308__auto___45006)){
args__29315__auto__.push((arguments[i__29309__auto___45007]));

var G__45008 = (i__29309__auto___45007 + (1));
i__29309__auto___45007 = G__45008;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45005){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45005));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29315__auto__ = [];
var len__29308__auto___45010 = arguments.length;
var i__29309__auto___45011 = (0);
while(true){
if((i__29309__auto___45011 < len__29308__auto___45010)){
args__29315__auto__.push((arguments[i__29309__auto___45011]));

var G__45012 = (i__29309__auto___45011 + (1));
i__29309__auto___45011 = G__45012;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45009){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45009));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45013){
var map__45014 = p__45013;
var map__45014__$1 = ((((!((map__45014 == null)))?((((map__45014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45014):map__45014);
var message = cljs.core.get.call(null,map__45014__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45014__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28139__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28127__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28127__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28127__auto__;
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
var c__42211__auto___45093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___45093,ch){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___45093,ch){
return (function (state_45065){
var state_val_45066 = (state_45065[(1)]);
if((state_val_45066 === (7))){
var inst_45061 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45067_45094 = state_45065__$1;
(statearr_45067_45094[(2)] = inst_45061);

(statearr_45067_45094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (1))){
var state_45065__$1 = state_45065;
var statearr_45068_45095 = state_45065__$1;
(statearr_45068_45095[(2)] = null);

(statearr_45068_45095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (4))){
var inst_45018 = (state_45065[(7)]);
var inst_45018__$1 = (state_45065[(2)]);
var state_45065__$1 = (function (){var statearr_45069 = state_45065;
(statearr_45069[(7)] = inst_45018__$1);

return statearr_45069;
})();
if(cljs.core.truth_(inst_45018__$1)){
var statearr_45070_45096 = state_45065__$1;
(statearr_45070_45096[(1)] = (5));

} else {
var statearr_45071_45097 = state_45065__$1;
(statearr_45071_45097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (15))){
var inst_45025 = (state_45065[(8)]);
var inst_45040 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45025);
var inst_45041 = cljs.core.first.call(null,inst_45040);
var inst_45042 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45041);
var inst_45043 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45042)].join('');
var inst_45044 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45043);
var state_45065__$1 = state_45065;
var statearr_45072_45098 = state_45065__$1;
(statearr_45072_45098[(2)] = inst_45044);

(statearr_45072_45098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (13))){
var inst_45049 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45073_45099 = state_45065__$1;
(statearr_45073_45099[(2)] = inst_45049);

(statearr_45073_45099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (6))){
var state_45065__$1 = state_45065;
var statearr_45074_45100 = state_45065__$1;
(statearr_45074_45100[(2)] = null);

(statearr_45074_45100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (17))){
var inst_45047 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45075_45101 = state_45065__$1;
(statearr_45075_45101[(2)] = inst_45047);

(statearr_45075_45101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (3))){
var inst_45063 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45065__$1,inst_45063);
} else {
if((state_val_45066 === (12))){
var inst_45024 = (state_45065[(9)]);
var inst_45038 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45024,opts);
var state_45065__$1 = state_45065;
if(cljs.core.truth_(inst_45038)){
var statearr_45076_45102 = state_45065__$1;
(statearr_45076_45102[(1)] = (15));

} else {
var statearr_45077_45103 = state_45065__$1;
(statearr_45077_45103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (2))){
var state_45065__$1 = state_45065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45065__$1,(4),ch);
} else {
if((state_val_45066 === (11))){
var inst_45025 = (state_45065[(8)]);
var inst_45030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45031 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45025);
var inst_45032 = cljs.core.async.timeout.call(null,(1000));
var inst_45033 = [inst_45031,inst_45032];
var inst_45034 = (new cljs.core.PersistentVector(null,2,(5),inst_45030,inst_45033,null));
var state_45065__$1 = state_45065;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45065__$1,(14),inst_45034);
} else {
if((state_val_45066 === (9))){
var inst_45025 = (state_45065[(8)]);
var inst_45051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45052 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45025);
var inst_45053 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45052);
var inst_45054 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45053)].join('');
var inst_45055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45054);
var state_45065__$1 = (function (){var statearr_45078 = state_45065;
(statearr_45078[(10)] = inst_45051);

return statearr_45078;
})();
var statearr_45079_45104 = state_45065__$1;
(statearr_45079_45104[(2)] = inst_45055);

(statearr_45079_45104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (5))){
var inst_45018 = (state_45065[(7)]);
var inst_45020 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45021 = (new cljs.core.PersistentArrayMap(null,2,inst_45020,null));
var inst_45022 = (new cljs.core.PersistentHashSet(null,inst_45021,null));
var inst_45023 = figwheel.client.focus_msgs.call(null,inst_45022,inst_45018);
var inst_45024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45023);
var inst_45025 = cljs.core.first.call(null,inst_45023);
var inst_45026 = figwheel.client.autoload_QMARK_.call(null);
var state_45065__$1 = (function (){var statearr_45080 = state_45065;
(statearr_45080[(9)] = inst_45024);

(statearr_45080[(8)] = inst_45025);

return statearr_45080;
})();
if(cljs.core.truth_(inst_45026)){
var statearr_45081_45105 = state_45065__$1;
(statearr_45081_45105[(1)] = (8));

} else {
var statearr_45082_45106 = state_45065__$1;
(statearr_45082_45106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (14))){
var inst_45036 = (state_45065[(2)]);
var state_45065__$1 = state_45065;
var statearr_45083_45107 = state_45065__$1;
(statearr_45083_45107[(2)] = inst_45036);

(statearr_45083_45107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (16))){
var state_45065__$1 = state_45065;
var statearr_45084_45108 = state_45065__$1;
(statearr_45084_45108[(2)] = null);

(statearr_45084_45108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (10))){
var inst_45057 = (state_45065[(2)]);
var state_45065__$1 = (function (){var statearr_45085 = state_45065;
(statearr_45085[(11)] = inst_45057);

return statearr_45085;
})();
var statearr_45086_45109 = state_45065__$1;
(statearr_45086_45109[(2)] = null);

(statearr_45086_45109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45066 === (8))){
var inst_45024 = (state_45065[(9)]);
var inst_45028 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45024,opts);
var state_45065__$1 = state_45065;
if(cljs.core.truth_(inst_45028)){
var statearr_45087_45110 = state_45065__$1;
(statearr_45087_45110[(1)] = (11));

} else {
var statearr_45088_45111 = state_45065__$1;
(statearr_45088_45111[(1)] = (12));

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
});})(c__42211__auto___45093,ch))
;
return ((function (switch__42123__auto__,c__42211__auto___45093,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____0 = (function (){
var statearr_45089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45089[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__);

(statearr_45089[(1)] = (1));

return statearr_45089;
});
var figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____1 = (function (state_45065){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_45065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e45090){if((e45090 instanceof Object)){
var ex__42127__auto__ = e45090;
var statearr_45091_45112 = state_45065;
(statearr_45091_45112[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45113 = state_45065;
state_45065 = G__45113;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__ = function(state_45065){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____1.call(this,state_45065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__42124__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___45093,ch))
})();
var state__42213__auto__ = (function (){var statearr_45092 = f__42212__auto__.call(null);
(statearr_45092[(6)] = c__42211__auto___45093);

return statearr_45092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___45093,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45114_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45114_SHARP_));
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
var base_path_45116 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45116){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45115){if((e45115 instanceof Error)){
var e = e45115;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45116], null));
} else {
var e = e45115;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45116))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45117){
var map__45118 = p__45117;
var map__45118__$1 = ((((!((map__45118 == null)))?((((map__45118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45118):map__45118);
var opts = map__45118__$1;
var build_id = cljs.core.get.call(null,map__45118__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45118,map__45118__$1,opts,build_id){
return (function (p__45120){
var vec__45121 = p__45120;
var seq__45122 = cljs.core.seq.call(null,vec__45121);
var first__45123 = cljs.core.first.call(null,seq__45122);
var seq__45122__$1 = cljs.core.next.call(null,seq__45122);
var map__45124 = first__45123;
var map__45124__$1 = ((((!((map__45124 == null)))?((((map__45124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45124):map__45124);
var msg = map__45124__$1;
var msg_name = cljs.core.get.call(null,map__45124__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45122__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45121,seq__45122,first__45123,seq__45122__$1,map__45124,map__45124__$1,msg,msg_name,_,map__45118,map__45118__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45121,seq__45122,first__45123,seq__45122__$1,map__45124,map__45124__$1,msg,msg_name,_,map__45118,map__45118__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45118,map__45118__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45126){
var vec__45127 = p__45126;
var seq__45128 = cljs.core.seq.call(null,vec__45127);
var first__45129 = cljs.core.first.call(null,seq__45128);
var seq__45128__$1 = cljs.core.next.call(null,seq__45128);
var map__45130 = first__45129;
var map__45130__$1 = ((((!((map__45130 == null)))?((((map__45130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45130):map__45130);
var msg = map__45130__$1;
var msg_name = cljs.core.get.call(null,map__45130__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45128__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45132){
var map__45133 = p__45132;
var map__45133__$1 = ((((!((map__45133 == null)))?((((map__45133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45133):map__45133);
var on_compile_warning = cljs.core.get.call(null,map__45133__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45133__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45133,map__45133__$1,on_compile_warning,on_compile_fail){
return (function (p__45135){
var vec__45136 = p__45135;
var seq__45137 = cljs.core.seq.call(null,vec__45136);
var first__45138 = cljs.core.first.call(null,seq__45137);
var seq__45137__$1 = cljs.core.next.call(null,seq__45137);
var map__45139 = first__45138;
var map__45139__$1 = ((((!((map__45139 == null)))?((((map__45139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45139):map__45139);
var msg = map__45139__$1;
var msg_name = cljs.core.get.call(null,map__45139__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45137__$1;
var pred__45141 = cljs.core._EQ_;
var expr__45142 = msg_name;
if(cljs.core.truth_(pred__45141.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45142))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45141.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45142))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45133,map__45133__$1,on_compile_warning,on_compile_fail))
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
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__,msg_hist,msg_names,msg){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__,msg_hist,msg_names,msg){
return (function (state_45231){
var state_val_45232 = (state_45231[(1)]);
if((state_val_45232 === (7))){
var inst_45151 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45151)){
var statearr_45233_45280 = state_45231__$1;
(statearr_45233_45280[(1)] = (8));

} else {
var statearr_45234_45281 = state_45231__$1;
(statearr_45234_45281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (20))){
var inst_45225 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45235_45282 = state_45231__$1;
(statearr_45235_45282[(2)] = inst_45225);

(statearr_45235_45282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (27))){
var inst_45221 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45236_45283 = state_45231__$1;
(statearr_45236_45283[(2)] = inst_45221);

(statearr_45236_45283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (1))){
var inst_45144 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45144)){
var statearr_45237_45284 = state_45231__$1;
(statearr_45237_45284[(1)] = (2));

} else {
var statearr_45238_45285 = state_45231__$1;
(statearr_45238_45285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (24))){
var inst_45223 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45239_45286 = state_45231__$1;
(statearr_45239_45286[(2)] = inst_45223);

(statearr_45239_45286[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (4))){
var inst_45229 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45231__$1,inst_45229);
} else {
if((state_val_45232 === (15))){
var inst_45227 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45240_45287 = state_45231__$1;
(statearr_45240_45287[(2)] = inst_45227);

(statearr_45240_45287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (21))){
var inst_45180 = (state_45231[(2)]);
var inst_45181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45182 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45181);
var state_45231__$1 = (function (){var statearr_45241 = state_45231;
(statearr_45241[(7)] = inst_45180);

return statearr_45241;
})();
var statearr_45242_45288 = state_45231__$1;
(statearr_45242_45288[(2)] = inst_45182);

(statearr_45242_45288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (31))){
var inst_45210 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45210)){
var statearr_45243_45289 = state_45231__$1;
(statearr_45243_45289[(1)] = (34));

} else {
var statearr_45244_45290 = state_45231__$1;
(statearr_45244_45290[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (32))){
var inst_45219 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45245_45291 = state_45231__$1;
(statearr_45245_45291[(2)] = inst_45219);

(statearr_45245_45291[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (33))){
var inst_45206 = (state_45231[(2)]);
var inst_45207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45208 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45207);
var state_45231__$1 = (function (){var statearr_45246 = state_45231;
(statearr_45246[(8)] = inst_45206);

return statearr_45246;
})();
var statearr_45247_45292 = state_45231__$1;
(statearr_45247_45292[(2)] = inst_45208);

(statearr_45247_45292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (13))){
var inst_45165 = figwheel.client.heads_up.clear.call(null);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(16),inst_45165);
} else {
if((state_val_45232 === (22))){
var inst_45186 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45187 = figwheel.client.heads_up.append_warning_message.call(null,inst_45186);
var state_45231__$1 = state_45231;
var statearr_45248_45293 = state_45231__$1;
(statearr_45248_45293[(2)] = inst_45187);

(statearr_45248_45293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (36))){
var inst_45217 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45249_45294 = state_45231__$1;
(statearr_45249_45294[(2)] = inst_45217);

(statearr_45249_45294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (29))){
var inst_45197 = (state_45231[(2)]);
var inst_45198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45199 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45198);
var state_45231__$1 = (function (){var statearr_45250 = state_45231;
(statearr_45250[(9)] = inst_45197);

return statearr_45250;
})();
var statearr_45251_45295 = state_45231__$1;
(statearr_45251_45295[(2)] = inst_45199);

(statearr_45251_45295[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (6))){
var inst_45146 = (state_45231[(10)]);
var state_45231__$1 = state_45231;
var statearr_45252_45296 = state_45231__$1;
(statearr_45252_45296[(2)] = inst_45146);

(statearr_45252_45296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (28))){
var inst_45193 = (state_45231[(2)]);
var inst_45194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45195 = figwheel.client.heads_up.display_warning.call(null,inst_45194);
var state_45231__$1 = (function (){var statearr_45253 = state_45231;
(statearr_45253[(11)] = inst_45193);

return statearr_45253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(29),inst_45195);
} else {
if((state_val_45232 === (25))){
var inst_45191 = figwheel.client.heads_up.clear.call(null);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(28),inst_45191);
} else {
if((state_val_45232 === (34))){
var inst_45212 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(37),inst_45212);
} else {
if((state_val_45232 === (17))){
var inst_45171 = (state_45231[(2)]);
var inst_45172 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45173 = figwheel.client.auto_jump_to_error.call(null,opts,inst_45172);
var state_45231__$1 = (function (){var statearr_45254 = state_45231;
(statearr_45254[(12)] = inst_45171);

return statearr_45254;
})();
var statearr_45255_45297 = state_45231__$1;
(statearr_45255_45297[(2)] = inst_45173);

(statearr_45255_45297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (3))){
var inst_45163 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45163)){
var statearr_45256_45298 = state_45231__$1;
(statearr_45256_45298[(1)] = (13));

} else {
var statearr_45257_45299 = state_45231__$1;
(statearr_45257_45299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (12))){
var inst_45159 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45258_45300 = state_45231__$1;
(statearr_45258_45300[(2)] = inst_45159);

(statearr_45258_45300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (2))){
var inst_45146 = (state_45231[(10)]);
var inst_45146__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_45231__$1 = (function (){var statearr_45259 = state_45231;
(statearr_45259[(10)] = inst_45146__$1);

return statearr_45259;
})();
if(cljs.core.truth_(inst_45146__$1)){
var statearr_45260_45301 = state_45231__$1;
(statearr_45260_45301[(1)] = (5));

} else {
var statearr_45261_45302 = state_45231__$1;
(statearr_45261_45302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (23))){
var inst_45189 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45189)){
var statearr_45262_45303 = state_45231__$1;
(statearr_45262_45303[(1)] = (25));

} else {
var statearr_45263_45304 = state_45231__$1;
(statearr_45263_45304[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (35))){
var state_45231__$1 = state_45231;
var statearr_45264_45305 = state_45231__$1;
(statearr_45264_45305[(2)] = null);

(statearr_45264_45305[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (19))){
var inst_45184 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45184)){
var statearr_45265_45306 = state_45231__$1;
(statearr_45265_45306[(1)] = (22));

} else {
var statearr_45266_45307 = state_45231__$1;
(statearr_45266_45307[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (11))){
var inst_45155 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45267_45308 = state_45231__$1;
(statearr_45267_45308[(2)] = inst_45155);

(statearr_45267_45308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (9))){
var inst_45157 = figwheel.client.heads_up.clear.call(null);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(12),inst_45157);
} else {
if((state_val_45232 === (5))){
var inst_45148 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_45231__$1 = state_45231;
var statearr_45268_45309 = state_45231__$1;
(statearr_45268_45309[(2)] = inst_45148);

(statearr_45268_45309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (14))){
var inst_45175 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45175)){
var statearr_45269_45310 = state_45231__$1;
(statearr_45269_45310[(1)] = (18));

} else {
var statearr_45270_45311 = state_45231__$1;
(statearr_45270_45311[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (26))){
var inst_45201 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_45231__$1 = state_45231;
if(cljs.core.truth_(inst_45201)){
var statearr_45271_45312 = state_45231__$1;
(statearr_45271_45312[(1)] = (30));

} else {
var statearr_45272_45313 = state_45231__$1;
(statearr_45272_45313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (16))){
var inst_45167 = (state_45231[(2)]);
var inst_45168 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45169 = figwheel.client.heads_up.display_exception.call(null,inst_45168);
var state_45231__$1 = (function (){var statearr_45273 = state_45231;
(statearr_45273[(13)] = inst_45167);

return statearr_45273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(17),inst_45169);
} else {
if((state_val_45232 === (30))){
var inst_45203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45204 = figwheel.client.heads_up.display_warning.call(null,inst_45203);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(33),inst_45204);
} else {
if((state_val_45232 === (10))){
var inst_45161 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45274_45314 = state_45231__$1;
(statearr_45274_45314[(2)] = inst_45161);

(statearr_45274_45314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (18))){
var inst_45177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45178 = figwheel.client.heads_up.display_exception.call(null,inst_45177);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(21),inst_45178);
} else {
if((state_val_45232 === (37))){
var inst_45214 = (state_45231[(2)]);
var state_45231__$1 = state_45231;
var statearr_45275_45315 = state_45231__$1;
(statearr_45275_45315[(2)] = inst_45214);

(statearr_45275_45315[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45232 === (8))){
var inst_45153 = figwheel.client.heads_up.flash_loaded.call(null);
var state_45231__$1 = state_45231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45231__$1,(11),inst_45153);
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
});})(c__42211__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__42123__auto__,c__42211__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____0 = (function (){
var statearr_45276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45276[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__);

(statearr_45276[(1)] = (1));

return statearr_45276;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____1 = (function (state_45231){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_45231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e45277){if((e45277 instanceof Object)){
var ex__42127__auto__ = e45277;
var statearr_45278_45316 = state_45231;
(statearr_45278_45316[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45317 = state_45231;
state_45231 = G__45317;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__ = function(state_45231){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____1.call(this,state_45231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__,msg_hist,msg_names,msg))
})();
var state__42213__auto__ = (function (){var statearr_45279 = f__42212__auto__.call(null);
(statearr_45279[(6)] = c__42211__auto__);

return statearr_45279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__,msg_hist,msg_names,msg))
);

return c__42211__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__42211__auto___45346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto___45346,ch){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto___45346,ch){
return (function (state_45332){
var state_val_45333 = (state_45332[(1)]);
if((state_val_45333 === (1))){
var state_45332__$1 = state_45332;
var statearr_45334_45347 = state_45332__$1;
(statearr_45334_45347[(2)] = null);

(statearr_45334_45347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45333 === (2))){
var state_45332__$1 = state_45332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45332__$1,(4),ch);
} else {
if((state_val_45333 === (3))){
var inst_45330 = (state_45332[(2)]);
var state_45332__$1 = state_45332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45332__$1,inst_45330);
} else {
if((state_val_45333 === (4))){
var inst_45320 = (state_45332[(7)]);
var inst_45320__$1 = (state_45332[(2)]);
var state_45332__$1 = (function (){var statearr_45335 = state_45332;
(statearr_45335[(7)] = inst_45320__$1);

return statearr_45335;
})();
if(cljs.core.truth_(inst_45320__$1)){
var statearr_45336_45348 = state_45332__$1;
(statearr_45336_45348[(1)] = (5));

} else {
var statearr_45337_45349 = state_45332__$1;
(statearr_45337_45349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45333 === (5))){
var inst_45320 = (state_45332[(7)]);
var inst_45322 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45320);
var state_45332__$1 = state_45332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45332__$1,(8),inst_45322);
} else {
if((state_val_45333 === (6))){
var state_45332__$1 = state_45332;
var statearr_45338_45350 = state_45332__$1;
(statearr_45338_45350[(2)] = null);

(statearr_45338_45350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45333 === (7))){
var inst_45328 = (state_45332[(2)]);
var state_45332__$1 = state_45332;
var statearr_45339_45351 = state_45332__$1;
(statearr_45339_45351[(2)] = inst_45328);

(statearr_45339_45351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45333 === (8))){
var inst_45324 = (state_45332[(2)]);
var state_45332__$1 = (function (){var statearr_45340 = state_45332;
(statearr_45340[(8)] = inst_45324);

return statearr_45340;
})();
var statearr_45341_45352 = state_45332__$1;
(statearr_45341_45352[(2)] = null);

(statearr_45341_45352[(1)] = (2));


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
});})(c__42211__auto___45346,ch))
;
return ((function (switch__42123__auto__,c__42211__auto___45346,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__42124__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__42124__auto____0 = (function (){
var statearr_45342 = [null,null,null,null,null,null,null,null,null];
(statearr_45342[(0)] = figwheel$client$heads_up_plugin_$_state_machine__42124__auto__);

(statearr_45342[(1)] = (1));

return statearr_45342;
});
var figwheel$client$heads_up_plugin_$_state_machine__42124__auto____1 = (function (state_45332){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_45332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e45343){if((e45343 instanceof Object)){
var ex__42127__auto__ = e45343;
var statearr_45344_45353 = state_45332;
(statearr_45344_45353[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45354 = state_45332;
state_45332 = G__45354;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__42124__auto__ = function(state_45332){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__42124__auto____1.call(this,state_45332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__42124__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__42124__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto___45346,ch))
})();
var state__42213__auto__ = (function (){var statearr_45345 = f__42212__auto__.call(null);
(statearr_45345[(6)] = c__42211__auto___45346);

return statearr_45345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto___45346,ch))
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
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__){
return (function (state_45360){
var state_val_45361 = (state_45360[(1)]);
if((state_val_45361 === (1))){
var inst_45355 = cljs.core.async.timeout.call(null,(3000));
var state_45360__$1 = state_45360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45360__$1,(2),inst_45355);
} else {
if((state_val_45361 === (2))){
var inst_45357 = (state_45360[(2)]);
var inst_45358 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45360__$1 = (function (){var statearr_45362 = state_45360;
(statearr_45362[(7)] = inst_45357);

return statearr_45362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45360__$1,inst_45358);
} else {
return null;
}
}
});})(c__42211__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____0 = (function (){
var statearr_45363 = [null,null,null,null,null,null,null,null];
(statearr_45363[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__);

(statearr_45363[(1)] = (1));

return statearr_45363;
});
var figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____1 = (function (state_45360){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_45360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e45364){if((e45364 instanceof Object)){
var ex__42127__auto__ = e45364;
var statearr_45365_45367 = state_45360;
(statearr_45365_45367[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45368 = state_45360;
state_45360 = G__45368;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__ = function(state_45360){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____1.call(this,state_45360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__42124__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__))
})();
var state__42213__auto__ = (function (){var statearr_45366 = f__42212__auto__.call(null);
(statearr_45366[(6)] = c__42211__auto__);

return statearr_45366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__))
);

return c__42211__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__42211__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__42211__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__42212__auto__ = (function (){var switch__42123__auto__ = ((function (c__42211__auto__,figwheel_version,temp__4657__auto__){
return (function (state_45375){
var state_val_45376 = (state_45375[(1)]);
if((state_val_45376 === (1))){
var inst_45369 = cljs.core.async.timeout.call(null,(2000));
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45375__$1,(2),inst_45369);
} else {
if((state_val_45376 === (2))){
var inst_45371 = (state_45375[(2)]);
var inst_45372 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_45373 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_45372);
var state_45375__$1 = (function (){var statearr_45377 = state_45375;
(statearr_45377[(7)] = inst_45371);

return statearr_45377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45375__$1,inst_45373);
} else {
return null;
}
}
});})(c__42211__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__42123__auto__,c__42211__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____0 = (function (){
var statearr_45378 = [null,null,null,null,null,null,null,null];
(statearr_45378[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__);

(statearr_45378[(1)] = (1));

return statearr_45378;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____1 = (function (state_45375){
while(true){
var ret_value__42125__auto__ = (function (){try{while(true){
var result__42126__auto__ = switch__42123__auto__.call(null,state_45375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__42126__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42126__auto__;
}
break;
}
}catch (e45379){if((e45379 instanceof Object)){
var ex__42127__auto__ = e45379;
var statearr_45380_45382 = state_45375;
(statearr_45380_45382[(5)] = ex__42127__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__42125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45383 = state_45375;
state_45375 = G__45383;
continue;
} else {
return ret_value__42125__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__ = function(state_45375){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____1.call(this,state_45375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__42124__auto__;
})()
;})(switch__42123__auto__,c__42211__auto__,figwheel_version,temp__4657__auto__))
})();
var state__42213__auto__ = (function (){var statearr_45381 = f__42212__auto__.call(null);
(statearr_45381[(6)] = c__42211__auto__);

return statearr_45381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__42213__auto__);
});})(c__42211__auto__,figwheel_version,temp__4657__auto__))
);

return c__42211__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__45384){
var map__45385 = p__45384;
var map__45385__$1 = ((((!((map__45385 == null)))?((((map__45385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45385):map__45385);
var file = cljs.core.get.call(null,map__45385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45387 = "";
var G__45387__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45387),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45387);
var G__45387__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45387__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45387__$1);
if(cljs.core.truth_((function (){var and__28127__auto__ = line;
if(cljs.core.truth_(and__28127__auto__)){
return column;
} else {
return and__28127__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45387__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45387__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45388){
var map__45389 = p__45388;
var map__45389__$1 = ((((!((map__45389 == null)))?((((map__45389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45389):map__45389);
var ed = map__45389__$1;
var formatted_exception = cljs.core.get.call(null,map__45389__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45389__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45389__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45391_45395 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45392_45396 = null;
var count__45393_45397 = (0);
var i__45394_45398 = (0);
while(true){
if((i__45394_45398 < count__45393_45397)){
var msg_45399 = cljs.core._nth.call(null,chunk__45392_45396,i__45394_45398);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45399);

var G__45400 = seq__45391_45395;
var G__45401 = chunk__45392_45396;
var G__45402 = count__45393_45397;
var G__45403 = (i__45394_45398 + (1));
seq__45391_45395 = G__45400;
chunk__45392_45396 = G__45401;
count__45393_45397 = G__45402;
i__45394_45398 = G__45403;
continue;
} else {
var temp__4657__auto___45404 = cljs.core.seq.call(null,seq__45391_45395);
if(temp__4657__auto___45404){
var seq__45391_45405__$1 = temp__4657__auto___45404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45391_45405__$1)){
var c__28978__auto___45406 = cljs.core.chunk_first.call(null,seq__45391_45405__$1);
var G__45407 = cljs.core.chunk_rest.call(null,seq__45391_45405__$1);
var G__45408 = c__28978__auto___45406;
var G__45409 = cljs.core.count.call(null,c__28978__auto___45406);
var G__45410 = (0);
seq__45391_45395 = G__45407;
chunk__45392_45396 = G__45408;
count__45393_45397 = G__45409;
i__45394_45398 = G__45410;
continue;
} else {
var msg_45411 = cljs.core.first.call(null,seq__45391_45405__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45411);

var G__45412 = cljs.core.next.call(null,seq__45391_45405__$1);
var G__45413 = null;
var G__45414 = (0);
var G__45415 = (0);
seq__45391_45395 = G__45412;
chunk__45392_45396 = G__45413;
count__45393_45397 = G__45414;
i__45394_45398 = G__45415;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45416){
var map__45417 = p__45416;
var map__45417__$1 = ((((!((map__45417 == null)))?((((map__45417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45417):map__45417);
var w = map__45417__$1;
var message = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__28127__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28127__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28127__auto__;
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
var seq__45419 = cljs.core.seq.call(null,plugins);
var chunk__45420 = null;
var count__45421 = (0);
var i__45422 = (0);
while(true){
if((i__45422 < count__45421)){
var vec__45423 = cljs.core._nth.call(null,chunk__45420,i__45422);
var k = cljs.core.nth.call(null,vec__45423,(0),null);
var plugin = cljs.core.nth.call(null,vec__45423,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45429 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45419,chunk__45420,count__45421,i__45422,pl_45429,vec__45423,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45429.call(null,msg_hist);
});})(seq__45419,chunk__45420,count__45421,i__45422,pl_45429,vec__45423,k,plugin))
);
} else {
}

var G__45430 = seq__45419;
var G__45431 = chunk__45420;
var G__45432 = count__45421;
var G__45433 = (i__45422 + (1));
seq__45419 = G__45430;
chunk__45420 = G__45431;
count__45421 = G__45432;
i__45422 = G__45433;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45419);
if(temp__4657__auto__){
var seq__45419__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45419__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__45419__$1);
var G__45434 = cljs.core.chunk_rest.call(null,seq__45419__$1);
var G__45435 = c__28978__auto__;
var G__45436 = cljs.core.count.call(null,c__28978__auto__);
var G__45437 = (0);
seq__45419 = G__45434;
chunk__45420 = G__45435;
count__45421 = G__45436;
i__45422 = G__45437;
continue;
} else {
var vec__45426 = cljs.core.first.call(null,seq__45419__$1);
var k = cljs.core.nth.call(null,vec__45426,(0),null);
var plugin = cljs.core.nth.call(null,vec__45426,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45438 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45419,chunk__45420,count__45421,i__45422,pl_45438,vec__45426,k,plugin,seq__45419__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45438.call(null,msg_hist);
});})(seq__45419,chunk__45420,count__45421,i__45422,pl_45438,vec__45426,k,plugin,seq__45419__$1,temp__4657__auto__))
);
} else {
}

var G__45439 = cljs.core.next.call(null,seq__45419__$1);
var G__45440 = null;
var G__45441 = (0);
var G__45442 = (0);
seq__45419 = G__45439;
chunk__45420 = G__45440;
count__45421 = G__45441;
i__45422 = G__45442;
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
var G__45444 = arguments.length;
switch (G__45444) {
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

var seq__45445_45450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__45446_45451 = null;
var count__45447_45452 = (0);
var i__45448_45453 = (0);
while(true){
if((i__45448_45453 < count__45447_45452)){
var msg_45454 = cljs.core._nth.call(null,chunk__45446_45451,i__45448_45453);
figwheel.client.socket.handle_incoming_message.call(null,msg_45454);

var G__45455 = seq__45445_45450;
var G__45456 = chunk__45446_45451;
var G__45457 = count__45447_45452;
var G__45458 = (i__45448_45453 + (1));
seq__45445_45450 = G__45455;
chunk__45446_45451 = G__45456;
count__45447_45452 = G__45457;
i__45448_45453 = G__45458;
continue;
} else {
var temp__4657__auto___45459 = cljs.core.seq.call(null,seq__45445_45450);
if(temp__4657__auto___45459){
var seq__45445_45460__$1 = temp__4657__auto___45459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45445_45460__$1)){
var c__28978__auto___45461 = cljs.core.chunk_first.call(null,seq__45445_45460__$1);
var G__45462 = cljs.core.chunk_rest.call(null,seq__45445_45460__$1);
var G__45463 = c__28978__auto___45461;
var G__45464 = cljs.core.count.call(null,c__28978__auto___45461);
var G__45465 = (0);
seq__45445_45450 = G__45462;
chunk__45446_45451 = G__45463;
count__45447_45452 = G__45464;
i__45448_45453 = G__45465;
continue;
} else {
var msg_45466 = cljs.core.first.call(null,seq__45445_45460__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_45466);

var G__45467 = cljs.core.next.call(null,seq__45445_45460__$1);
var G__45468 = null;
var G__45469 = (0);
var G__45470 = (0);
seq__45445_45450 = G__45467;
chunk__45446_45451 = G__45468;
count__45447_45452 = G__45469;
i__45448_45453 = G__45470;
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
var args__29315__auto__ = [];
var len__29308__auto___45475 = arguments.length;
var i__29309__auto___45476 = (0);
while(true){
if((i__29309__auto___45476 < len__29308__auto___45475)){
args__29315__auto__.push((arguments[i__29309__auto___45476]));

var G__45477 = (i__29309__auto___45476 + (1));
i__29309__auto___45476 = G__45477;
continue;
} else {
}
break;
}

var argseq__29316__auto__ = ((((0) < args__29315__auto__.length))?(new cljs.core.IndexedSeq(args__29315__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29316__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45472){
var map__45473 = p__45472;
var map__45473__$1 = ((((!((map__45473 == null)))?((((map__45473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45473):map__45473);
var opts = map__45473__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45471){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45471));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e45478){if((e45478 instanceof Error)){
var e = e45478;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e45478;

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
return (function (p__45479){
var map__45480 = p__45479;
var map__45480__$1 = ((((!((map__45480 == null)))?((((map__45480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45480):map__45480);
var msg_name = cljs.core.get.call(null,map__45480__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509738684208
