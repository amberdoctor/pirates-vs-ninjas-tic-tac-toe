// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29431_SHARP_,p2__29432_SHARP_){
var and__16897__auto__ = p1__29431_SHARP_;
if(cljs.core.truth_(and__16897__auto__)){
return p2__29432_SHARP_;
} else {
return and__16897__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16909__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16909__auto__){
return or__16909__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16909__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16909__auto__){
return or__16909__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16909__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17808__auto__,method_table__17804__auto__,prefer_table__17805__auto__,method_cache__17806__auto__,cached_hierarchy__17807__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29433){
var map__29434 = p__29433;
var map__29434__$1 = ((cljs.core.seq_QMARK_.call(null,map__29434))?cljs.core.apply.call(null,cljs.core.hash_map,map__29434):map__29434);
var file = cljs.core.get.call(null,map__29434__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29435){
var map__29436 = p__29435;
var map__29436__$1 = ((cljs.core.seq_QMARK_.call(null,map__29436))?cljs.core.apply.call(null,cljs.core.hash_map,map__29436):map__29436);
var namespace = cljs.core.get.call(null,map__29436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17808__auto__,method_table__17804__auto__,prefer_table__17805__auto__,method_cache__17806__auto__,cached_hierarchy__17807__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29437){if((e29437 instanceof Error)){
var e = e29437;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29437;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29439 = arguments.length;
switch (G__29439) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29441,callback){
var map__29443 = p__29441;
var map__29443__$1 = ((cljs.core.seq_QMARK_.call(null,map__29443))?cljs.core.apply.call(null,cljs.core.hash_map,map__29443):map__29443);
var file_msg = map__29443__$1;
var request_url = cljs.core.get.call(null,map__29443__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29443,map__29443__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29443,map__29443__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29444){
var map__29446 = p__29444;
var map__29446__$1 = ((cljs.core.seq_QMARK_.call(null,map__29446))?cljs.core.apply.call(null,cljs.core.hash_map,map__29446):map__29446);
var file_msg = map__29446__$1;
var namespace = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29446__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16909__auto__ = meta_data;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16897__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16897__auto__){
var or__16909__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var or__16909__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16909__auto____$1)){
return or__16909__auto____$1;
} else {
var and__16897__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16897__auto____$1){
var or__16909__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16909__auto____$2){
return or__16909__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16897__auto____$1;
}
}
}
} else {
return and__16897__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29447,callback){
var map__29449 = p__29447;
var map__29449__$1 = ((cljs.core.seq_QMARK_.call(null,map__29449))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);
var file_msg = map__29449__$1;
var request_url = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20800__auto___29536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto___29536,out){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto___29536,out){
return (function (state_29518){
var state_val_29519 = (state_29518[(1)]);
if((state_val_29519 === (1))){
var inst_29496 = cljs.core.nth.call(null,files,(0),null);
var inst_29497 = cljs.core.nthnext.call(null,files,(1));
var inst_29498 = files;
var state_29518__$1 = (function (){var statearr_29520 = state_29518;
(statearr_29520[(7)] = inst_29497);

(statearr_29520[(8)] = inst_29498);

(statearr_29520[(9)] = inst_29496);

return statearr_29520;
})();
var statearr_29521_29537 = state_29518__$1;
(statearr_29521_29537[(2)] = null);

(statearr_29521_29537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29519 === (2))){
var inst_29501 = (state_29518[(10)]);
var inst_29498 = (state_29518[(8)]);
var inst_29501__$1 = cljs.core.nth.call(null,inst_29498,(0),null);
var inst_29502 = cljs.core.nthnext.call(null,inst_29498,(1));
var inst_29503 = (inst_29501__$1 == null);
var inst_29504 = cljs.core.not.call(null,inst_29503);
var state_29518__$1 = (function (){var statearr_29522 = state_29518;
(statearr_29522[(11)] = inst_29502);

(statearr_29522[(10)] = inst_29501__$1);

return statearr_29522;
})();
if(inst_29504){
var statearr_29523_29538 = state_29518__$1;
(statearr_29523_29538[(1)] = (4));

} else {
var statearr_29524_29539 = state_29518__$1;
(statearr_29524_29539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29519 === (3))){
var inst_29516 = (state_29518[(2)]);
var state_29518__$1 = state_29518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29518__$1,inst_29516);
} else {
if((state_val_29519 === (4))){
var inst_29501 = (state_29518[(10)]);
var inst_29506 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29501);
var state_29518__$1 = state_29518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29518__$1,(7),inst_29506);
} else {
if((state_val_29519 === (5))){
var inst_29512 = cljs.core.async.close_BANG_.call(null,out);
var state_29518__$1 = state_29518;
var statearr_29525_29540 = state_29518__$1;
(statearr_29525_29540[(2)] = inst_29512);

(statearr_29525_29540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29519 === (6))){
var inst_29514 = (state_29518[(2)]);
var state_29518__$1 = state_29518;
var statearr_29526_29541 = state_29518__$1;
(statearr_29526_29541[(2)] = inst_29514);

(statearr_29526_29541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29519 === (7))){
var inst_29502 = (state_29518[(11)]);
var inst_29508 = (state_29518[(2)]);
var inst_29509 = cljs.core.async.put_BANG_.call(null,out,inst_29508);
var inst_29498 = inst_29502;
var state_29518__$1 = (function (){var statearr_29527 = state_29518;
(statearr_29527[(12)] = inst_29509);

(statearr_29527[(8)] = inst_29498);

return statearr_29527;
})();
var statearr_29528_29542 = state_29518__$1;
(statearr_29528_29542[(2)] = null);

(statearr_29528_29542[(1)] = (2));


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
});})(c__20800__auto___29536,out))
;
return ((function (switch__20738__auto__,c__20800__auto___29536,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____0 = (function (){
var statearr_29532 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29532[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__);

(statearr_29532[(1)] = (1));

return statearr_29532;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____1 = (function (state_29518){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_29518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e29533){if((e29533 instanceof Object)){
var ex__20742__auto__ = e29533;
var statearr_29534_29543 = state_29518;
(statearr_29534_29543[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29544 = state_29518;
state_29518 = G__29544;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__ = function(state_29518){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____1.call(this,state_29518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto___29536,out))
})();
var state__20802__auto__ = (function (){var statearr_29535 = f__20801__auto__.call(null);
(statearr_29535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto___29536);

return statearr_29535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto___29536,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29545,p__29546){
var map__29549 = p__29545;
var map__29549__$1 = ((cljs.core.seq_QMARK_.call(null,map__29549))?cljs.core.apply.call(null,cljs.core.hash_map,map__29549):map__29549);
var opts = map__29549__$1;
var url_rewriter = cljs.core.get.call(null,map__29549__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29550 = p__29546;
var map__29550__$1 = ((cljs.core.seq_QMARK_.call(null,map__29550))?cljs.core.apply.call(null,cljs.core.hash_map,map__29550):map__29550);
var file_msg = map__29550__$1;
var file = cljs.core.get.call(null,map__29550__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29551,opts){
var map__29554 = p__29551;
var map__29554__$1 = ((cljs.core.seq_QMARK_.call(null,map__29554))?cljs.core.apply.call(null,cljs.core.hash_map,map__29554):map__29554);
var eval_body__$1 = cljs.core.get.call(null,map__29554__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16897__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16897__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16897__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29555){var e = e29555;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29560,p__29561){
var map__29763 = p__29560;
var map__29763__$1 = ((cljs.core.seq_QMARK_.call(null,map__29763))?cljs.core.apply.call(null,cljs.core.hash_map,map__29763):map__29763);
var opts = map__29763__$1;
var before_jsload = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29763__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29764 = p__29561;
var map__29764__$1 = ((cljs.core.seq_QMARK_.call(null,map__29764))?cljs.core.apply.call(null,cljs.core.hash_map,map__29764):map__29764);
var msg = map__29764__$1;
var files = cljs.core.get.call(null,map__29764__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (state_29889){
var state_val_29890 = (state_29889[(1)]);
if((state_val_29890 === (7))){
var inst_29779 = (state_29889[(7)]);
var inst_29778 = (state_29889[(8)]);
var inst_29777 = (state_29889[(9)]);
var inst_29776 = (state_29889[(10)]);
var inst_29784 = cljs.core._nth.call(null,inst_29777,inst_29779);
var inst_29785 = figwheel.client.file_reloading.eval_body.call(null,inst_29784,opts);
var inst_29786 = (inst_29779 + (1));
var tmp29891 = inst_29778;
var tmp29892 = inst_29777;
var tmp29893 = inst_29776;
var inst_29776__$1 = tmp29893;
var inst_29777__$1 = tmp29892;
var inst_29778__$1 = tmp29891;
var inst_29779__$1 = inst_29786;
var state_29889__$1 = (function (){var statearr_29894 = state_29889;
(statearr_29894[(7)] = inst_29779__$1);

(statearr_29894[(8)] = inst_29778__$1);

(statearr_29894[(9)] = inst_29777__$1);

(statearr_29894[(11)] = inst_29785);

(statearr_29894[(10)] = inst_29776__$1);

return statearr_29894;
})();
var statearr_29895_29964 = state_29889__$1;
(statearr_29895_29964[(2)] = null);

(statearr_29895_29964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (20))){
var inst_29821 = (state_29889[(12)]);
var inst_29826 = (state_29889[(13)]);
var inst_29822 = (state_29889[(14)]);
var inst_29825 = (state_29889[(15)]);
var inst_29828 = (state_29889[(16)]);
var inst_29831 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29833 = (function (){var all_files = inst_29821;
var files_SINGLEQUOTE_ = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29826,inst_29822,inst_29825,inst_29828,inst_29831,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p__29832){
var map__29896 = p__29832;
var map__29896__$1 = ((cljs.core.seq_QMARK_.call(null,map__29896))?cljs.core.apply.call(null,cljs.core.hash_map,map__29896):map__29896);
var namespace = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29896__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29826,inst_29822,inst_29825,inst_29828,inst_29831,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29834 = cljs.core.map.call(null,inst_29833,inst_29826);
var inst_29835 = cljs.core.pr_str.call(null,inst_29834);
var inst_29836 = figwheel.client.utils.log.call(null,inst_29835);
var inst_29837 = (function (){var all_files = inst_29821;
var files_SINGLEQUOTE_ = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29826,inst_29822,inst_29825,inst_29828,inst_29831,inst_29833,inst_29834,inst_29835,inst_29836,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29826,inst_29822,inst_29825,inst_29828,inst_29831,inst_29833,inst_29834,inst_29835,inst_29836,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29838 = setTimeout(inst_29837,(10));
var state_29889__$1 = (function (){var statearr_29897 = state_29889;
(statearr_29897[(17)] = inst_29831);

(statearr_29897[(18)] = inst_29836);

return statearr_29897;
})();
var statearr_29898_29965 = state_29889__$1;
(statearr_29898_29965[(2)] = inst_29838);

(statearr_29898_29965[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (27))){
var inst_29848 = (state_29889[(19)]);
var state_29889__$1 = state_29889;
var statearr_29899_29966 = state_29889__$1;
(statearr_29899_29966[(2)] = inst_29848);

(statearr_29899_29966[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (1))){
var inst_29768 = (state_29889[(20)]);
var inst_29765 = before_jsload.call(null,files);
var inst_29766 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29767 = (function (){return ((function (inst_29768,inst_29765,inst_29766,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p1__29556_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29556_SHARP_);
});
;})(inst_29768,inst_29765,inst_29766,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29768__$1 = cljs.core.filter.call(null,inst_29767,files);
var inst_29769 = cljs.core.not_empty.call(null,inst_29768__$1);
var state_29889__$1 = (function (){var statearr_29900 = state_29889;
(statearr_29900[(20)] = inst_29768__$1);

(statearr_29900[(21)] = inst_29765);

(statearr_29900[(22)] = inst_29766);

return statearr_29900;
})();
if(cljs.core.truth_(inst_29769)){
var statearr_29901_29967 = state_29889__$1;
(statearr_29901_29967[(1)] = (2));

} else {
var statearr_29902_29968 = state_29889__$1;
(statearr_29902_29968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (24))){
var state_29889__$1 = state_29889;
var statearr_29903_29969 = state_29889__$1;
(statearr_29903_29969[(2)] = null);

(statearr_29903_29969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (4))){
var inst_29813 = (state_29889[(2)]);
var inst_29814 = (function (){return ((function (inst_29813,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p1__29557_SHARP_){
var and__16897__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29557_SHARP_);
if(cljs.core.truth_(and__16897__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29557_SHARP_));
} else {
return and__16897__auto__;
}
});
;})(inst_29813,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29815 = cljs.core.filter.call(null,inst_29814,files);
var state_29889__$1 = (function (){var statearr_29904 = state_29889;
(statearr_29904[(23)] = inst_29815);

(statearr_29904[(24)] = inst_29813);

return statearr_29904;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29905_29970 = state_29889__$1;
(statearr_29905_29970[(1)] = (16));

} else {
var statearr_29906_29971 = state_29889__$1;
(statearr_29906_29971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (15))){
var inst_29803 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29907_29972 = state_29889__$1;
(statearr_29907_29972[(2)] = inst_29803);

(statearr_29907_29972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (21))){
var state_29889__$1 = state_29889;
var statearr_29908_29973 = state_29889__$1;
(statearr_29908_29973[(2)] = null);

(statearr_29908_29973[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (31))){
var inst_29856 = (state_29889[(25)]);
var inst_29866 = (state_29889[(2)]);
var inst_29867 = cljs.core.not_empty.call(null,inst_29856);
var state_29889__$1 = (function (){var statearr_29909 = state_29889;
(statearr_29909[(26)] = inst_29866);

return statearr_29909;
})();
if(cljs.core.truth_(inst_29867)){
var statearr_29910_29974 = state_29889__$1;
(statearr_29910_29974[(1)] = (32));

} else {
var statearr_29911_29975 = state_29889__$1;
(statearr_29911_29975[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (32))){
var inst_29856 = (state_29889[(25)]);
var inst_29869 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29856);
var inst_29870 = cljs.core.pr_str.call(null,inst_29869);
var inst_29871 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29870)].join('');
var inst_29872 = figwheel.client.utils.log.call(null,inst_29871);
var state_29889__$1 = state_29889;
var statearr_29912_29976 = state_29889__$1;
(statearr_29912_29976[(2)] = inst_29872);

(statearr_29912_29976[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (33))){
var state_29889__$1 = state_29889;
var statearr_29913_29977 = state_29889__$1;
(statearr_29913_29977[(2)] = null);

(statearr_29913_29977[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (13))){
var inst_29789 = (state_29889[(27)]);
var inst_29793 = cljs.core.chunk_first.call(null,inst_29789);
var inst_29794 = cljs.core.chunk_rest.call(null,inst_29789);
var inst_29795 = cljs.core.count.call(null,inst_29793);
var inst_29776 = inst_29794;
var inst_29777 = inst_29793;
var inst_29778 = inst_29795;
var inst_29779 = (0);
var state_29889__$1 = (function (){var statearr_29914 = state_29889;
(statearr_29914[(7)] = inst_29779);

(statearr_29914[(8)] = inst_29778);

(statearr_29914[(9)] = inst_29777);

(statearr_29914[(10)] = inst_29776);

return statearr_29914;
})();
var statearr_29915_29978 = state_29889__$1;
(statearr_29915_29978[(2)] = null);

(statearr_29915_29978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (22))){
var inst_29828 = (state_29889[(16)]);
var inst_29841 = (state_29889[(2)]);
var inst_29842 = cljs.core.not_empty.call(null,inst_29828);
var state_29889__$1 = (function (){var statearr_29916 = state_29889;
(statearr_29916[(28)] = inst_29841);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29842)){
var statearr_29917_29979 = state_29889__$1;
(statearr_29917_29979[(1)] = (23));

} else {
var statearr_29918_29980 = state_29889__$1;
(statearr_29918_29980[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (36))){
var state_29889__$1 = state_29889;
var statearr_29919_29981 = state_29889__$1;
(statearr_29919_29981[(2)] = null);

(statearr_29919_29981[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (29))){
var inst_29855 = (state_29889[(29)]);
var inst_29860 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29855);
var inst_29861 = cljs.core.pr_str.call(null,inst_29860);
var inst_29862 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29861)].join('');
var inst_29863 = figwheel.client.utils.log.call(null,inst_29862);
var state_29889__$1 = state_29889;
var statearr_29920_29982 = state_29889__$1;
(statearr_29920_29982[(2)] = inst_29863);

(statearr_29920_29982[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (6))){
var inst_29810 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29921_29983 = state_29889__$1;
(statearr_29921_29983[(2)] = inst_29810);

(statearr_29921_29983[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (28))){
var inst_29855 = (state_29889[(29)]);
var inst_29854 = (state_29889[(2)]);
var inst_29855__$1 = cljs.core.get.call(null,inst_29854,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29856 = cljs.core.get.call(null,inst_29854,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29857 = cljs.core.get.call(null,inst_29854,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29858 = cljs.core.not_empty.call(null,inst_29855__$1);
var state_29889__$1 = (function (){var statearr_29922 = state_29889;
(statearr_29922[(29)] = inst_29855__$1);

(statearr_29922[(30)] = inst_29857);

(statearr_29922[(25)] = inst_29856);

return statearr_29922;
})();
if(cljs.core.truth_(inst_29858)){
var statearr_29923_29984 = state_29889__$1;
(statearr_29923_29984[(1)] = (29));

} else {
var statearr_29924_29985 = state_29889__$1;
(statearr_29924_29985[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (25))){
var inst_29887 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29889__$1,inst_29887);
} else {
if((state_val_29890 === (34))){
var inst_29857 = (state_29889[(30)]);
var inst_29875 = (state_29889[(2)]);
var inst_29876 = cljs.core.not_empty.call(null,inst_29857);
var state_29889__$1 = (function (){var statearr_29925 = state_29889;
(statearr_29925[(31)] = inst_29875);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29876)){
var statearr_29926_29986 = state_29889__$1;
(statearr_29926_29986[(1)] = (35));

} else {
var statearr_29927_29987 = state_29889__$1;
(statearr_29927_29987[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (17))){
var inst_29815 = (state_29889[(23)]);
var state_29889__$1 = state_29889;
var statearr_29928_29988 = state_29889__$1;
(statearr_29928_29988[(2)] = inst_29815);

(statearr_29928_29988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (3))){
var state_29889__$1 = state_29889;
var statearr_29929_29989 = state_29889__$1;
(statearr_29929_29989[(2)] = null);

(statearr_29929_29989[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (12))){
var inst_29806 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29930_29990 = state_29889__$1;
(statearr_29930_29990[(2)] = inst_29806);

(statearr_29930_29990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (2))){
var inst_29768 = (state_29889[(20)]);
var inst_29775 = cljs.core.seq.call(null,inst_29768);
var inst_29776 = inst_29775;
var inst_29777 = null;
var inst_29778 = (0);
var inst_29779 = (0);
var state_29889__$1 = (function (){var statearr_29931 = state_29889;
(statearr_29931[(7)] = inst_29779);

(statearr_29931[(8)] = inst_29778);

(statearr_29931[(9)] = inst_29777);

(statearr_29931[(10)] = inst_29776);

return statearr_29931;
})();
var statearr_29932_29991 = state_29889__$1;
(statearr_29932_29991[(2)] = null);

(statearr_29932_29991[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (23))){
var inst_29821 = (state_29889[(12)]);
var inst_29848 = (state_29889[(19)]);
var inst_29826 = (state_29889[(13)]);
var inst_29822 = (state_29889[(14)]);
var inst_29825 = (state_29889[(15)]);
var inst_29828 = (state_29889[(16)]);
var inst_29844 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29847 = (function (){var all_files = inst_29821;
var files_SINGLEQUOTE_ = inst_29822;
var res_SINGLEQUOTE_ = inst_29825;
var res = inst_29826;
var files_not_loaded = inst_29828;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29848,inst_29826,inst_29822,inst_29825,inst_29828,inst_29844,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p__29846){
var map__29933 = p__29846;
var map__29933__$1 = ((cljs.core.seq_QMARK_.call(null,map__29933))?cljs.core.apply.call(null,cljs.core.hash_map,map__29933):map__29933);
var meta_data = cljs.core.get.call(null,map__29933__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29821,inst_29848,inst_29826,inst_29822,inst_29825,inst_29828,inst_29844,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29848__$1 = cljs.core.group_by.call(null,inst_29847,inst_29828);
var inst_29849 = cljs.core.seq_QMARK_.call(null,inst_29848__$1);
var state_29889__$1 = (function (){var statearr_29934 = state_29889;
(statearr_29934[(19)] = inst_29848__$1);

(statearr_29934[(32)] = inst_29844);

return statearr_29934;
})();
if(inst_29849){
var statearr_29935_29992 = state_29889__$1;
(statearr_29935_29992[(1)] = (26));

} else {
var statearr_29936_29993 = state_29889__$1;
(statearr_29936_29993[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (35))){
var inst_29857 = (state_29889[(30)]);
var inst_29878 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29857);
var inst_29879 = cljs.core.pr_str.call(null,inst_29878);
var inst_29880 = [cljs.core.str("not required: "),cljs.core.str(inst_29879)].join('');
var inst_29881 = figwheel.client.utils.log.call(null,inst_29880);
var state_29889__$1 = state_29889;
var statearr_29937_29994 = state_29889__$1;
(statearr_29937_29994[(2)] = inst_29881);

(statearr_29937_29994[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (19))){
var inst_29821 = (state_29889[(12)]);
var inst_29826 = (state_29889[(13)]);
var inst_29822 = (state_29889[(14)]);
var inst_29825 = (state_29889[(15)]);
var inst_29825__$1 = (state_29889[(2)]);
var inst_29826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29825__$1);
var inst_29827 = (function (){var all_files = inst_29821;
var files_SINGLEQUOTE_ = inst_29822;
var res_SINGLEQUOTE_ = inst_29825__$1;
var res = inst_29826__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29821,inst_29826,inst_29822,inst_29825,inst_29825__$1,inst_29826__$1,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p1__29559_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29559_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29821,inst_29826,inst_29822,inst_29825,inst_29825__$1,inst_29826__$1,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29828 = cljs.core.filter.call(null,inst_29827,inst_29825__$1);
var inst_29829 = cljs.core.not_empty.call(null,inst_29826__$1);
var state_29889__$1 = (function (){var statearr_29938 = state_29889;
(statearr_29938[(13)] = inst_29826__$1);

(statearr_29938[(15)] = inst_29825__$1);

(statearr_29938[(16)] = inst_29828);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29939_29995 = state_29889__$1;
(statearr_29939_29995[(1)] = (20));

} else {
var statearr_29940_29996 = state_29889__$1;
(statearr_29940_29996[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (11))){
var state_29889__$1 = state_29889;
var statearr_29941_29997 = state_29889__$1;
(statearr_29941_29997[(2)] = null);

(statearr_29941_29997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (9))){
var inst_29808 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29942_29998 = state_29889__$1;
(statearr_29942_29998[(2)] = inst_29808);

(statearr_29942_29998[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (5))){
var inst_29779 = (state_29889[(7)]);
var inst_29778 = (state_29889[(8)]);
var inst_29781 = (inst_29779 < inst_29778);
var inst_29782 = inst_29781;
var state_29889__$1 = state_29889;
if(cljs.core.truth_(inst_29782)){
var statearr_29943_29999 = state_29889__$1;
(statearr_29943_29999[(1)] = (7));

} else {
var statearr_29944_30000 = state_29889__$1;
(statearr_29944_30000[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (14))){
var inst_29789 = (state_29889[(27)]);
var inst_29798 = cljs.core.first.call(null,inst_29789);
var inst_29799 = figwheel.client.file_reloading.eval_body.call(null,inst_29798,opts);
var inst_29800 = cljs.core.next.call(null,inst_29789);
var inst_29776 = inst_29800;
var inst_29777 = null;
var inst_29778 = (0);
var inst_29779 = (0);
var state_29889__$1 = (function (){var statearr_29945 = state_29889;
(statearr_29945[(7)] = inst_29779);

(statearr_29945[(8)] = inst_29778);

(statearr_29945[(9)] = inst_29777);

(statearr_29945[(33)] = inst_29799);

(statearr_29945[(10)] = inst_29776);

return statearr_29945;
})();
var statearr_29946_30001 = state_29889__$1;
(statearr_29946_30001[(2)] = null);

(statearr_29946_30001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (26))){
var inst_29848 = (state_29889[(19)]);
var inst_29851 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29848);
var state_29889__$1 = state_29889;
var statearr_29947_30002 = state_29889__$1;
(statearr_29947_30002[(2)] = inst_29851);

(statearr_29947_30002[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (16))){
var inst_29815 = (state_29889[(23)]);
var inst_29817 = (function (){var all_files = inst_29815;
return ((function (all_files,inst_29815,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function (p1__29558_SHARP_){
return cljs.core.update_in.call(null,p1__29558_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29815,state_val_29890,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var inst_29818 = cljs.core.map.call(null,inst_29817,inst_29815);
var state_29889__$1 = state_29889;
var statearr_29948_30003 = state_29889__$1;
(statearr_29948_30003[(2)] = inst_29818);

(statearr_29948_30003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (30))){
var state_29889__$1 = state_29889;
var statearr_29949_30004 = state_29889__$1;
(statearr_29949_30004[(2)] = null);

(statearr_29949_30004[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (10))){
var inst_29789 = (state_29889[(27)]);
var inst_29791 = cljs.core.chunked_seq_QMARK_.call(null,inst_29789);
var state_29889__$1 = state_29889;
if(inst_29791){
var statearr_29950_30005 = state_29889__$1;
(statearr_29950_30005[(1)] = (13));

} else {
var statearr_29951_30006 = state_29889__$1;
(statearr_29951_30006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (18))){
var inst_29821 = (state_29889[(12)]);
var inst_29822 = (state_29889[(14)]);
var inst_29821__$1 = (state_29889[(2)]);
var inst_29822__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29821__$1);
var inst_29823 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29822__$1);
var state_29889__$1 = (function (){var statearr_29952 = state_29889;
(statearr_29952[(12)] = inst_29821__$1);

(statearr_29952[(14)] = inst_29822__$1);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29889__$1,(19),inst_29823);
} else {
if((state_val_29890 === (37))){
var inst_29884 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29953_30007 = state_29889__$1;
(statearr_29953_30007[(2)] = inst_29884);

(statearr_29953_30007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (8))){
var inst_29789 = (state_29889[(27)]);
var inst_29776 = (state_29889[(10)]);
var inst_29789__$1 = cljs.core.seq.call(null,inst_29776);
var state_29889__$1 = (function (){var statearr_29954 = state_29889;
(statearr_29954[(27)] = inst_29789__$1);

return statearr_29954;
})();
if(inst_29789__$1){
var statearr_29955_30008 = state_29889__$1;
(statearr_29955_30008[(1)] = (10));

} else {
var statearr_29956_30009 = state_29889__$1;
(statearr_29956_30009[(1)] = (11));

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
});})(c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
;
return ((function (switch__20738__auto__,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____0 = (function (){
var statearr_29960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29960[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__);

(statearr_29960[(1)] = (1));

return statearr_29960;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____1 = (function (state_29889){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_29889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e29961){if((e29961 instanceof Object)){
var ex__20742__auto__ = e29961;
var statearr_29962_30010 = state_29889;
(statearr_29962_30010[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30011 = state_29889;
state_29889 = G__30011;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__ = function(state_29889){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____1.call(this,state_29889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
})();
var state__20802__auto__ = (function (){var statearr_29963 = f__20801__auto__.call(null);
(statearr_29963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_29963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__,map__29763,map__29763__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29764,map__29764__$1,msg,files))
);

return c__20800__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30014,link){
var map__30016 = p__30014;
var map__30016__$1 = ((cljs.core.seq_QMARK_.call(null,map__30016))?cljs.core.apply.call(null,cljs.core.hash_map,map__30016):map__30016);
var file = cljs.core.get.call(null,map__30016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30016,map__30016__$1,file){
return (function (p1__30012_SHARP_,p2__30013_SHARP_){
if(cljs.core._EQ_.call(null,p1__30012_SHARP_,p2__30013_SHARP_)){
return p1__30012_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30016,map__30016__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30020){
var map__30021 = p__30020;
var map__30021__$1 = ((cljs.core.seq_QMARK_.call(null,map__30021))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var match_length = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30017_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30017_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__30023 = arguments.length;
switch (G__30023) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30025){
var map__30027 = p__30025;
var map__30027__$1 = ((cljs.core.seq_QMARK_.call(null,map__30027))?cljs.core.apply.call(null,cljs.core.hash_map,map__30027):map__30027);
var f_data = map__30027__$1;
var file = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__30027__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16909__auto__ = request_url;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30028,files_msg){
var map__30050 = p__30028;
var map__30050__$1 = ((cljs.core.seq_QMARK_.call(null,map__30050))?cljs.core.apply.call(null,cljs.core.hash_map,map__30050):map__30050);
var opts = map__30050__$1;
var on_cssload = cljs.core.get.call(null,map__30050__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30051_30071 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30052_30072 = null;
var count__30053_30073 = (0);
var i__30054_30074 = (0);
while(true){
if((i__30054_30074 < count__30053_30073)){
var f_30075 = cljs.core._nth.call(null,chunk__30052_30072,i__30054_30074);
figwheel.client.file_reloading.reload_css_file.call(null,f_30075);

var G__30076 = seq__30051_30071;
var G__30077 = chunk__30052_30072;
var G__30078 = count__30053_30073;
var G__30079 = (i__30054_30074 + (1));
seq__30051_30071 = G__30076;
chunk__30052_30072 = G__30077;
count__30053_30073 = G__30078;
i__30054_30074 = G__30079;
continue;
} else {
var temp__4425__auto___30080 = cljs.core.seq.call(null,seq__30051_30071);
if(temp__4425__auto___30080){
var seq__30051_30081__$1 = temp__4425__auto___30080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30051_30081__$1)){
var c__17694__auto___30082 = cljs.core.chunk_first.call(null,seq__30051_30081__$1);
var G__30083 = cljs.core.chunk_rest.call(null,seq__30051_30081__$1);
var G__30084 = c__17694__auto___30082;
var G__30085 = cljs.core.count.call(null,c__17694__auto___30082);
var G__30086 = (0);
seq__30051_30071 = G__30083;
chunk__30052_30072 = G__30084;
count__30053_30073 = G__30085;
i__30054_30074 = G__30086;
continue;
} else {
var f_30087 = cljs.core.first.call(null,seq__30051_30081__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30087);

var G__30088 = cljs.core.next.call(null,seq__30051_30081__$1);
var G__30089 = null;
var G__30090 = (0);
var G__30091 = (0);
seq__30051_30071 = G__30088;
chunk__30052_30072 = G__30089;
count__30053_30073 = G__30090;
i__30054_30074 = G__30091;
continue;
}
} else {
}
}
break;
}

var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload){
return (function (state_30061){
var state_val_30062 = (state_30061[(1)]);
if((state_val_30062 === (1))){
var inst_30055 = cljs.core.async.timeout.call(null,(100));
var state_30061__$1 = state_30061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30061__$1,(2),inst_30055);
} else {
if((state_val_30062 === (2))){
var inst_30057 = (state_30061[(2)]);
var inst_30058 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30059 = on_cssload.call(null,inst_30058);
var state_30061__$1 = (function (){var statearr_30063 = state_30061;
(statearr_30063[(7)] = inst_30057);

return statearr_30063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30061__$1,inst_30059);
} else {
return null;
}
}
});})(c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload))
;
return ((function (switch__20738__auto__,c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____0 = (function (){
var statearr_30067 = [null,null,null,null,null,null,null,null];
(statearr_30067[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__);

(statearr_30067[(1)] = (1));

return statearr_30067;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____1 = (function (state_30061){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_30061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e30068){if((e30068 instanceof Object)){
var ex__20742__auto__ = e30068;
var statearr_30069_30092 = state_30061;
(statearr_30069_30092[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30093 = state_30061;
state_30061 = G__30093;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__ = function(state_30061){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____1.call(this,state_30061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload))
})();
var state__20802__auto__ = (function (){var statearr_30070 = f__20801__auto__.call(null);
(statearr_30070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_30070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__,map__30050,map__30050__$1,opts,on_cssload))
);

return c__20800__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map