// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28376__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28377__i = 0, G__28377__a = new Array(arguments.length -  0);
while (G__28377__i < G__28377__a.length) {G__28377__a[G__28377__i] = arguments[G__28377__i + 0]; ++G__28377__i;}
  args = new cljs.core.IndexedSeq(G__28377__a,0);
} 
return G__28376__delegate.call(this,args);};
G__28376.cljs$lang$maxFixedArity = 0;
G__28376.cljs$lang$applyTo = (function (arglist__28378){
var args = cljs.core.seq(arglist__28378);
return G__28376__delegate(args);
});
G__28376.cljs$core$IFn$_invoke$arity$variadic = G__28376__delegate;
return G__28376;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28379){
var map__28381 = p__28379;
var map__28381__$1 = ((cljs.core.seq_QMARK_.call(null,map__28381))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
var message = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16909__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16897__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16897__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16897__auto__;
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
var c__20800__auto___28510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___28510,ch){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___28510,ch){
return (function (state_28484){
var state_val_28485 = (state_28484[(1)]);
if((state_val_28485 === (7))){
var inst_28480 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28486_28511 = state_28484__$1;
(statearr_28486_28511[(2)] = inst_28480);

(statearr_28486_28511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (1))){
var state_28484__$1 = state_28484;
var statearr_28487_28512 = state_28484__$1;
(statearr_28487_28512[(2)] = null);

(statearr_28487_28512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (4))){
var inst_28448 = (state_28484[(7)]);
var inst_28448__$1 = (state_28484[(2)]);
var state_28484__$1 = (function (){var statearr_28488 = state_28484;
(statearr_28488[(7)] = inst_28448__$1);

return statearr_28488;
})();
if(cljs.core.truth_(inst_28448__$1)){
var statearr_28489_28513 = state_28484__$1;
(statearr_28489_28513[(1)] = (5));

} else {
var statearr_28490_28514 = state_28484__$1;
(statearr_28490_28514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (13))){
var state_28484__$1 = state_28484;
var statearr_28491_28515 = state_28484__$1;
(statearr_28491_28515[(2)] = null);

(statearr_28491_28515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (6))){
var state_28484__$1 = state_28484;
var statearr_28492_28516 = state_28484__$1;
(statearr_28492_28516[(2)] = null);

(statearr_28492_28516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (3))){
var inst_28482 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28484__$1,inst_28482);
} else {
if((state_val_28485 === (12))){
var inst_28455 = (state_28484[(8)]);
var inst_28468 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28455);
var inst_28469 = cljs.core.first.call(null,inst_28468);
var inst_28470 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28469);
var inst_28471 = console.warn("Figwheel: Not loading code with warnings - ",inst_28470);
var state_28484__$1 = state_28484;
var statearr_28493_28517 = state_28484__$1;
(statearr_28493_28517[(2)] = inst_28471);

(statearr_28493_28517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (2))){
var state_28484__$1 = state_28484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28484__$1,(4),ch);
} else {
if((state_val_28485 === (11))){
var inst_28464 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28494_28518 = state_28484__$1;
(statearr_28494_28518[(2)] = inst_28464);

(statearr_28494_28518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (9))){
var inst_28454 = (state_28484[(9)]);
var inst_28466 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28454,opts);
var state_28484__$1 = state_28484;
if(cljs.core.truth_(inst_28466)){
var statearr_28495_28519 = state_28484__$1;
(statearr_28495_28519[(1)] = (12));

} else {
var statearr_28496_28520 = state_28484__$1;
(statearr_28496_28520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (5))){
var inst_28454 = (state_28484[(9)]);
var inst_28448 = (state_28484[(7)]);
var inst_28450 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28451 = (new cljs.core.PersistentArrayMap(null,2,inst_28450,null));
var inst_28452 = (new cljs.core.PersistentHashSet(null,inst_28451,null));
var inst_28453 = figwheel.client.focus_msgs.call(null,inst_28452,inst_28448);
var inst_28454__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28453);
var inst_28455 = cljs.core.first.call(null,inst_28453);
var inst_28456 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28454__$1,opts);
var state_28484__$1 = (function (){var statearr_28497 = state_28484;
(statearr_28497[(8)] = inst_28455);

(statearr_28497[(9)] = inst_28454__$1);

return statearr_28497;
})();
if(cljs.core.truth_(inst_28456)){
var statearr_28498_28521 = state_28484__$1;
(statearr_28498_28521[(1)] = (8));

} else {
var statearr_28499_28522 = state_28484__$1;
(statearr_28499_28522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (14))){
var inst_28474 = (state_28484[(2)]);
var state_28484__$1 = state_28484;
var statearr_28500_28523 = state_28484__$1;
(statearr_28500_28523[(2)] = inst_28474);

(statearr_28500_28523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (10))){
var inst_28476 = (state_28484[(2)]);
var state_28484__$1 = (function (){var statearr_28501 = state_28484;
(statearr_28501[(10)] = inst_28476);

return statearr_28501;
})();
var statearr_28502_28524 = state_28484__$1;
(statearr_28502_28524[(2)] = null);

(statearr_28502_28524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28485 === (8))){
var inst_28455 = (state_28484[(8)]);
var inst_28458 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28459 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28455);
var inst_28460 = cljs.core.async.timeout.call(null,(1000));
var inst_28461 = [inst_28459,inst_28460];
var inst_28462 = (new cljs.core.PersistentVector(null,2,(5),inst_28458,inst_28461,null));
var state_28484__$1 = state_28484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28484__$1,(11),inst_28462);
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
});})(c__20800__auto___28510,ch))
;
return ((function (switch__20738__auto__,c__20800__auto___28510,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____0 = (function (){
var statearr_28506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28506[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__);

(statearr_28506[(1)] = (1));

return statearr_28506;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____1 = (function (state_28484){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28507){if((e28507 instanceof Object)){
var ex__20742__auto__ = e28507;
var statearr_28508_28525 = state_28484;
(statearr_28508_28525[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28526 = state_28484;
state_28484 = G__28526;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__ = function(state_28484){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____1.call(this,state_28484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20739__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___28510,ch))
})();
var state__20802__auto__ = (function (){var statearr_28509 = f__20801__auto__.call(null);
(statearr_28509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___28510);

return statearr_28509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___28510,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28527_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28527_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28534 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28534){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28532 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28533 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28532,_STAR_print_newline_STAR_28533,base_path_28534){
return (function() { 
var G__28535__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28536__i = 0, G__28536__a = new Array(arguments.length -  0);
while (G__28536__i < G__28536__a.length) {G__28536__a[G__28536__i] = arguments[G__28536__i + 0]; ++G__28536__i;}
  args = new cljs.core.IndexedSeq(G__28536__a,0);
} 
return G__28535__delegate.call(this,args);};
G__28535.cljs$lang$maxFixedArity = 0;
G__28535.cljs$lang$applyTo = (function (arglist__28537){
var args = cljs.core.seq(arglist__28537);
return G__28535__delegate(args);
});
G__28535.cljs$core$IFn$_invoke$arity$variadic = G__28535__delegate;
return G__28535;
})()
;})(_STAR_print_fn_STAR_28532,_STAR_print_newline_STAR_28533,base_path_28534))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28533;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28532;
}}catch (e28531){if((e28531 instanceof Error)){
var e = e28531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28534], null));
} else {
var e = e28531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28534))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28538){
var map__28543 = p__28538;
var map__28543__$1 = ((cljs.core.seq_QMARK_.call(null,map__28543))?cljs.core.apply.call(null,cljs.core.hash_map,map__28543):map__28543);
var opts = map__28543__$1;
var build_id = cljs.core.get.call(null,map__28543__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28543,map__28543__$1,opts,build_id){
return (function (p__28544){
var vec__28545 = p__28544;
var map__28546 = cljs.core.nth.call(null,vec__28545,(0),null);
var map__28546__$1 = ((cljs.core.seq_QMARK_.call(null,map__28546))?cljs.core.apply.call(null,cljs.core.hash_map,map__28546):map__28546);
var msg = map__28546__$1;
var msg_name = cljs.core.get.call(null,map__28546__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28545,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28545,map__28546,map__28546__$1,msg,msg_name,_,map__28543,map__28543__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28545,map__28546,map__28546__$1,msg,msg_name,_,map__28543,map__28543__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28543,map__28543__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28550){
var vec__28551 = p__28550;
var map__28552 = cljs.core.nth.call(null,vec__28551,(0),null);
var map__28552__$1 = ((cljs.core.seq_QMARK_.call(null,map__28552))?cljs.core.apply.call(null,cljs.core.hash_map,map__28552):map__28552);
var msg = map__28552__$1;
var msg_name = cljs.core.get.call(null,map__28552__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28551,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28553){
var map__28561 = p__28553;
var map__28561__$1 = ((cljs.core.seq_QMARK_.call(null,map__28561))?cljs.core.apply.call(null,cljs.core.hash_map,map__28561):map__28561);
var on_compile_warning = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28561__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28561,map__28561__$1,on_compile_warning,on_compile_fail){
return (function (p__28562){
var vec__28563 = p__28562;
var map__28564 = cljs.core.nth.call(null,vec__28563,(0),null);
var map__28564__$1 = ((cljs.core.seq_QMARK_.call(null,map__28564))?cljs.core.apply.call(null,cljs.core.hash_map,map__28564):map__28564);
var msg = map__28564__$1;
var msg_name = cljs.core.get.call(null,map__28564__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28563,(1));
var pred__28565 = cljs.core._EQ_;
var expr__28566 = msg_name;
if(cljs.core.truth_(pred__28565.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28566))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28565.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28566))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28561,map__28561__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__,msg_hist,msg_names,msg){
return (function (state_28767){
var state_val_28768 = (state_28767[(1)]);
if((state_val_28768 === (7))){
var inst_28701 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28769_28810 = state_28767__$1;
(statearr_28769_28810[(2)] = inst_28701);

(statearr_28769_28810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (20))){
var inst_28729 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28729)){
var statearr_28770_28811 = state_28767__$1;
(statearr_28770_28811[(1)] = (22));

} else {
var statearr_28771_28812 = state_28767__$1;
(statearr_28771_28812[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (27))){
var inst_28741 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28742 = figwheel.client.heads_up.display_warning.call(null,inst_28741);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(30),inst_28742);
} else {
if((state_val_28768 === (1))){
var inst_28689 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28689)){
var statearr_28772_28813 = state_28767__$1;
(statearr_28772_28813[(1)] = (2));

} else {
var statearr_28773_28814 = state_28767__$1;
(statearr_28773_28814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (24))){
var inst_28757 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28774_28815 = state_28767__$1;
(statearr_28774_28815[(2)] = inst_28757);

(statearr_28774_28815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (4))){
var inst_28765 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28767__$1,inst_28765);
} else {
if((state_val_28768 === (15))){
var inst_28717 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28718 = figwheel.client.format_messages.call(null,inst_28717);
var inst_28719 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28720 = figwheel.client.heads_up.display_error.call(null,inst_28718,inst_28719);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(18),inst_28720);
} else {
if((state_val_28768 === (21))){
var inst_28759 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28775_28816 = state_28767__$1;
(statearr_28775_28816[(2)] = inst_28759);

(statearr_28775_28816[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (31))){
var inst_28748 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(34),inst_28748);
} else {
if((state_val_28768 === (32))){
var state_28767__$1 = state_28767;
var statearr_28776_28817 = state_28767__$1;
(statearr_28776_28817[(2)] = null);

(statearr_28776_28817[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (33))){
var inst_28753 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28777_28818 = state_28767__$1;
(statearr_28777_28818[(2)] = inst_28753);

(statearr_28777_28818[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (13))){
var inst_28707 = (state_28767[(2)]);
var inst_28708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28709 = figwheel.client.format_messages.call(null,inst_28708);
var inst_28710 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28711 = figwheel.client.heads_up.display_error.call(null,inst_28709,inst_28710);
var state_28767__$1 = (function (){var statearr_28778 = state_28767;
(statearr_28778[(7)] = inst_28707);

return statearr_28778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(14),inst_28711);
} else {
if((state_val_28768 === (22))){
var inst_28731 = figwheel.client.heads_up.clear.call(null);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(25),inst_28731);
} else {
if((state_val_28768 === (29))){
var inst_28755 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28779_28819 = state_28767__$1;
(statearr_28779_28819[(2)] = inst_28755);

(statearr_28779_28819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (6))){
var inst_28697 = figwheel.client.heads_up.clear.call(null);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(9),inst_28697);
} else {
if((state_val_28768 === (28))){
var inst_28746 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28746)){
var statearr_28780_28820 = state_28767__$1;
(statearr_28780_28820[(1)] = (31));

} else {
var statearr_28781_28821 = state_28767__$1;
(statearr_28781_28821[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (25))){
var inst_28733 = (state_28767[(2)]);
var inst_28734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28735 = figwheel.client.heads_up.display_warning.call(null,inst_28734);
var state_28767__$1 = (function (){var statearr_28782 = state_28767;
(statearr_28782[(8)] = inst_28733);

return statearr_28782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(26),inst_28735);
} else {
if((state_val_28768 === (34))){
var inst_28750 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28783_28822 = state_28767__$1;
(statearr_28783_28822[(2)] = inst_28750);

(statearr_28783_28822[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (17))){
var inst_28761 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28784_28823 = state_28767__$1;
(statearr_28784_28823[(2)] = inst_28761);

(statearr_28784_28823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (3))){
var inst_28703 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28703)){
var statearr_28785_28824 = state_28767__$1;
(statearr_28785_28824[(1)] = (10));

} else {
var statearr_28786_28825 = state_28767__$1;
(statearr_28786_28825[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (12))){
var inst_28763 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28787_28826 = state_28767__$1;
(statearr_28787_28826[(2)] = inst_28763);

(statearr_28787_28826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (2))){
var inst_28691 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28691)){
var statearr_28788_28827 = state_28767__$1;
(statearr_28788_28827[(1)] = (5));

} else {
var statearr_28789_28828 = state_28767__$1;
(statearr_28789_28828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (23))){
var inst_28739 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28739)){
var statearr_28790_28829 = state_28767__$1;
(statearr_28790_28829[(1)] = (27));

} else {
var statearr_28791_28830 = state_28767__$1;
(statearr_28791_28830[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (19))){
var inst_28726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28727 = figwheel.client.heads_up.append_message.call(null,inst_28726);
var state_28767__$1 = state_28767;
var statearr_28792_28831 = state_28767__$1;
(statearr_28792_28831[(2)] = inst_28727);

(statearr_28792_28831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (11))){
var inst_28715 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28715)){
var statearr_28793_28832 = state_28767__$1;
(statearr_28793_28832[(1)] = (15));

} else {
var statearr_28794_28833 = state_28767__$1;
(statearr_28794_28833[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (9))){
var inst_28699 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28795_28834 = state_28767__$1;
(statearr_28795_28834[(2)] = inst_28699);

(statearr_28795_28834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (5))){
var inst_28693 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(8),inst_28693);
} else {
if((state_val_28768 === (14))){
var inst_28713 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28796_28835 = state_28767__$1;
(statearr_28796_28835[(2)] = inst_28713);

(statearr_28796_28835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (26))){
var inst_28737 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28797_28836 = state_28767__$1;
(statearr_28797_28836[(2)] = inst_28737);

(statearr_28797_28836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (16))){
var inst_28724 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28724)){
var statearr_28798_28837 = state_28767__$1;
(statearr_28798_28837[(1)] = (19));

} else {
var statearr_28799_28838 = state_28767__$1;
(statearr_28799_28838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (30))){
var inst_28744 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28800_28839 = state_28767__$1;
(statearr_28800_28839[(2)] = inst_28744);

(statearr_28800_28839[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (10))){
var inst_28705 = figwheel.client.heads_up.clear.call(null);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(13),inst_28705);
} else {
if((state_val_28768 === (18))){
var inst_28722 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28801_28840 = state_28767__$1;
(statearr_28801_28840[(2)] = inst_28722);

(statearr_28801_28840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (8))){
var inst_28695 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28802_28841 = state_28767__$1;
(statearr_28802_28841[(2)] = inst_28695);

(statearr_28802_28841[(1)] = (7));


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
});})(c__20800__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20738__auto__,c__20800__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____0 = (function (){
var statearr_28806 = [null,null,null,null,null,null,null,null,null];
(statearr_28806[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__);

(statearr_28806[(1)] = (1));

return statearr_28806;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____1 = (function (state_28767){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28807){if((e28807 instanceof Object)){
var ex__20742__auto__ = e28807;
var statearr_28808_28842 = state_28767;
(statearr_28808_28842[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28843 = state_28767;
state_28767 = G__28843;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__ = function(state_28767){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____1.call(this,state_28767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__,msg_hist,msg_names,msg))
})();
var state__20802__auto__ = (function (){var statearr_28809 = f__20801__auto__.call(null);
(statearr_28809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_28809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__,msg_hist,msg_names,msg))
);

return c__20800__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20800__auto___28906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___28906,ch){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___28906,ch){
return (function (state_28889){
var state_val_28890 = (state_28889[(1)]);
if((state_val_28890 === (1))){
var state_28889__$1 = state_28889;
var statearr_28891_28907 = state_28889__$1;
(statearr_28891_28907[(2)] = null);

(statearr_28891_28907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (2))){
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(4),ch);
} else {
if((state_val_28890 === (3))){
var inst_28887 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28889__$1,inst_28887);
} else {
if((state_val_28890 === (4))){
var inst_28877 = (state_28889[(7)]);
var inst_28877__$1 = (state_28889[(2)]);
var state_28889__$1 = (function (){var statearr_28892 = state_28889;
(statearr_28892[(7)] = inst_28877__$1);

return statearr_28892;
})();
if(cljs.core.truth_(inst_28877__$1)){
var statearr_28893_28908 = state_28889__$1;
(statearr_28893_28908[(1)] = (5));

} else {
var statearr_28894_28909 = state_28889__$1;
(statearr_28894_28909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (5))){
var inst_28877 = (state_28889[(7)]);
var inst_28879 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28877);
var state_28889__$1 = state_28889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28889__$1,(8),inst_28879);
} else {
if((state_val_28890 === (6))){
var state_28889__$1 = state_28889;
var statearr_28895_28910 = state_28889__$1;
(statearr_28895_28910[(2)] = null);

(statearr_28895_28910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (7))){
var inst_28885 = (state_28889[(2)]);
var state_28889__$1 = state_28889;
var statearr_28896_28911 = state_28889__$1;
(statearr_28896_28911[(2)] = inst_28885);

(statearr_28896_28911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28890 === (8))){
var inst_28881 = (state_28889[(2)]);
var state_28889__$1 = (function (){var statearr_28897 = state_28889;
(statearr_28897[(8)] = inst_28881);

return statearr_28897;
})();
var statearr_28898_28912 = state_28889__$1;
(statearr_28898_28912[(2)] = null);

(statearr_28898_28912[(1)] = (2));


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
});})(c__20800__auto___28906,ch))
;
return ((function (switch__20738__auto__,c__20800__auto___28906,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20739__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20739__auto____0 = (function (){
var statearr_28902 = [null,null,null,null,null,null,null,null,null];
(statearr_28902[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20739__auto__);

(statearr_28902[(1)] = (1));

return statearr_28902;
});
var figwheel$client$heads_up_plugin_$_state_machine__20739__auto____1 = (function (state_28889){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28903){if((e28903 instanceof Object)){
var ex__20742__auto__ = e28903;
var statearr_28904_28913 = state_28889;
(statearr_28904_28913[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28889;
state_28889 = G__28914;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20739__auto__ = function(state_28889){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20739__auto____1.call(this,state_28889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20739__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20739__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___28906,ch))
})();
var state__20802__auto__ = (function (){var statearr_28905 = f__20801__auto__.call(null);
(statearr_28905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___28906);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___28906,ch))
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
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_28935){
var state_val_28936 = (state_28935[(1)]);
if((state_val_28936 === (1))){
var inst_28930 = cljs.core.async.timeout.call(null,(3000));
var state_28935__$1 = state_28935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28935__$1,(2),inst_28930);
} else {
if((state_val_28936 === (2))){
var inst_28932 = (state_28935[(2)]);
var inst_28933 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28935__$1 = (function (){var statearr_28937 = state_28935;
(statearr_28937[(7)] = inst_28932);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28935__$1,inst_28933);
} else {
return null;
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____0 = (function (){
var statearr_28941 = [null,null,null,null,null,null,null,null];
(statearr_28941[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__);

(statearr_28941[(1)] = (1));

return statearr_28941;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____1 = (function (state_28935){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_28935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e28942){if((e28942 instanceof Object)){
var ex__20742__auto__ = e28942;
var statearr_28943_28945 = state_28935;
(statearr_28943_28945[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28946 = state_28935;
state_28935 = G__28946;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__ = function(state_28935){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____1.call(this,state_28935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20739__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_28944 = f__20801__auto__.call(null);
(statearr_28944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_28944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28947){
var map__28953 = p__28947;
var map__28953__$1 = ((cljs.core.seq_QMARK_.call(null,map__28953))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953):map__28953);
var ed = map__28953__$1;
var formatted_exception = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28953__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28954_28958 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28955_28959 = null;
var count__28956_28960 = (0);
var i__28957_28961 = (0);
while(true){
if((i__28957_28961 < count__28956_28960)){
var msg_28962 = cljs.core._nth.call(null,chunk__28955_28959,i__28957_28961);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28962);

var G__28963 = seq__28954_28958;
var G__28964 = chunk__28955_28959;
var G__28965 = count__28956_28960;
var G__28966 = (i__28957_28961 + (1));
seq__28954_28958 = G__28963;
chunk__28955_28959 = G__28964;
count__28956_28960 = G__28965;
i__28957_28961 = G__28966;
continue;
} else {
var temp__4425__auto___28967 = cljs.core.seq.call(null,seq__28954_28958);
if(temp__4425__auto___28967){
var seq__28954_28968__$1 = temp__4425__auto___28967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28954_28968__$1)){
var c__17694__auto___28969 = cljs.core.chunk_first.call(null,seq__28954_28968__$1);
var G__28970 = cljs.core.chunk_rest.call(null,seq__28954_28968__$1);
var G__28971 = c__17694__auto___28969;
var G__28972 = cljs.core.count.call(null,c__17694__auto___28969);
var G__28973 = (0);
seq__28954_28958 = G__28970;
chunk__28955_28959 = G__28971;
count__28956_28960 = G__28972;
i__28957_28961 = G__28973;
continue;
} else {
var msg_28974 = cljs.core.first.call(null,seq__28954_28968__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28974);

var G__28975 = cljs.core.next.call(null,seq__28954_28968__$1);
var G__28976 = null;
var G__28977 = (0);
var G__28978 = (0);
seq__28954_28958 = G__28975;
chunk__28955_28959 = G__28976;
count__28956_28960 = G__28977;
i__28957_28961 = G__28978;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28979){
var map__28981 = p__28979;
var map__28981__$1 = ((cljs.core.seq_QMARK_.call(null,map__28981))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var w = map__28981__$1;
var message = cljs.core.get.call(null,map__28981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16897__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16897__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16897__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28988 = cljs.core.seq.call(null,plugins);
var chunk__28989 = null;
var count__28990 = (0);
var i__28991 = (0);
while(true){
if((i__28991 < count__28990)){
var vec__28992 = cljs.core._nth.call(null,chunk__28989,i__28991);
var k = cljs.core.nth.call(null,vec__28992,(0),null);
var plugin = cljs.core.nth.call(null,vec__28992,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28994 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28988,chunk__28989,count__28990,i__28991,pl_28994,vec__28992,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28994.call(null,msg_hist);
});})(seq__28988,chunk__28989,count__28990,i__28991,pl_28994,vec__28992,k,plugin))
);
} else {
}

var G__28995 = seq__28988;
var G__28996 = chunk__28989;
var G__28997 = count__28990;
var G__28998 = (i__28991 + (1));
seq__28988 = G__28995;
chunk__28989 = G__28996;
count__28990 = G__28997;
i__28991 = G__28998;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28988);
if(temp__4425__auto__){
var seq__28988__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28988__$1)){
var c__17694__auto__ = cljs.core.chunk_first.call(null,seq__28988__$1);
var G__28999 = cljs.core.chunk_rest.call(null,seq__28988__$1);
var G__29000 = c__17694__auto__;
var G__29001 = cljs.core.count.call(null,c__17694__auto__);
var G__29002 = (0);
seq__28988 = G__28999;
chunk__28989 = G__29000;
count__28990 = G__29001;
i__28991 = G__29002;
continue;
} else {
var vec__28993 = cljs.core.first.call(null,seq__28988__$1);
var k = cljs.core.nth.call(null,vec__28993,(0),null);
var plugin = cljs.core.nth.call(null,vec__28993,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29003 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28988,chunk__28989,count__28990,i__28991,pl_29003,vec__28993,k,plugin,seq__28988__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29003.call(null,msg_hist);
});})(seq__28988,chunk__28989,count__28990,i__28991,pl_29003,vec__28993,k,plugin,seq__28988__$1,temp__4425__auto__))
);
} else {
}

var G__29004 = cljs.core.next.call(null,seq__28988__$1);
var G__29005 = null;
var G__29006 = (0);
var G__29007 = (0);
seq__28988 = G__29004;
chunk__28989 = G__29005;
count__28990 = G__29006;
i__28991 = G__29007;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__29009 = arguments.length;
switch (G__29009) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17949__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17949__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29012){
var map__29013 = p__29012;
var map__29013__$1 = ((cljs.core.seq_QMARK_.call(null,map__29013))?cljs.core.apply.call(null,cljs.core.hash_map,map__29013):map__29013);
var opts = map__29013__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29011){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29011));
});

//# sourceMappingURL=client.js.map