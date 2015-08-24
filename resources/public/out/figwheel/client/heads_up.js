// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__17949__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17949__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29140_29148 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29141_29149 = null;
var count__29142_29150 = (0);
var i__29143_29151 = (0);
while(true){
if((i__29143_29151 < count__29142_29150)){
var k_29152 = cljs.core._nth.call(null,chunk__29141_29149,i__29143_29151);
e.setAttribute(cljs.core.name.call(null,k_29152),cljs.core.get.call(null,attrs,k_29152));

var G__29153 = seq__29140_29148;
var G__29154 = chunk__29141_29149;
var G__29155 = count__29142_29150;
var G__29156 = (i__29143_29151 + (1));
seq__29140_29148 = G__29153;
chunk__29141_29149 = G__29154;
count__29142_29150 = G__29155;
i__29143_29151 = G__29156;
continue;
} else {
var temp__4425__auto___29157 = cljs.core.seq.call(null,seq__29140_29148);
if(temp__4425__auto___29157){
var seq__29140_29158__$1 = temp__4425__auto___29157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29140_29158__$1)){
var c__17694__auto___29159 = cljs.core.chunk_first.call(null,seq__29140_29158__$1);
var G__29160 = cljs.core.chunk_rest.call(null,seq__29140_29158__$1);
var G__29161 = c__17694__auto___29159;
var G__29162 = cljs.core.count.call(null,c__17694__auto___29159);
var G__29163 = (0);
seq__29140_29148 = G__29160;
chunk__29141_29149 = G__29161;
count__29142_29150 = G__29162;
i__29143_29151 = G__29163;
continue;
} else {
var k_29164 = cljs.core.first.call(null,seq__29140_29158__$1);
e.setAttribute(cljs.core.name.call(null,k_29164),cljs.core.get.call(null,attrs,k_29164));

var G__29165 = cljs.core.next.call(null,seq__29140_29158__$1);
var G__29166 = null;
var G__29167 = (0);
var G__29168 = (0);
seq__29140_29148 = G__29165;
chunk__29141_29149 = G__29166;
count__29142_29150 = G__29167;
i__29143_29151 = G__29168;
continue;
}
} else {
}
}
break;
}

var seq__29144_29169 = cljs.core.seq.call(null,children);
var chunk__29145_29170 = null;
var count__29146_29171 = (0);
var i__29147_29172 = (0);
while(true){
if((i__29147_29172 < count__29146_29171)){
var ch_29173 = cljs.core._nth.call(null,chunk__29145_29170,i__29147_29172);
e.appendChild(ch_29173);

var G__29174 = seq__29144_29169;
var G__29175 = chunk__29145_29170;
var G__29176 = count__29146_29171;
var G__29177 = (i__29147_29172 + (1));
seq__29144_29169 = G__29174;
chunk__29145_29170 = G__29175;
count__29146_29171 = G__29176;
i__29147_29172 = G__29177;
continue;
} else {
var temp__4425__auto___29178 = cljs.core.seq.call(null,seq__29144_29169);
if(temp__4425__auto___29178){
var seq__29144_29179__$1 = temp__4425__auto___29178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29144_29179__$1)){
var c__17694__auto___29180 = cljs.core.chunk_first.call(null,seq__29144_29179__$1);
var G__29181 = cljs.core.chunk_rest.call(null,seq__29144_29179__$1);
var G__29182 = c__17694__auto___29180;
var G__29183 = cljs.core.count.call(null,c__17694__auto___29180);
var G__29184 = (0);
seq__29144_29169 = G__29181;
chunk__29145_29170 = G__29182;
count__29146_29171 = G__29183;
i__29147_29172 = G__29184;
continue;
} else {
var ch_29185 = cljs.core.first.call(null,seq__29144_29179__$1);
e.appendChild(ch_29185);

var G__29186 = cljs.core.next.call(null,seq__29144_29179__$1);
var G__29187 = null;
var G__29188 = (0);
var G__29189 = (0);
seq__29144_29169 = G__29186;
chunk__29145_29170 = G__29187;
count__29146_29171 = G__29188;
i__29147_29172 = G__29189;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29137){
var G__29138 = cljs.core.first.call(null,seq29137);
var seq29137__$1 = cljs.core.next.call(null,seq29137);
var G__29139 = cljs.core.first.call(null,seq29137__$1);
var seq29137__$2 = cljs.core.next.call(null,seq29137__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29138,G__29139,seq29137__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17804__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17805__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17806__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17807__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17808__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17804__auto__,prefer_table__17805__auto__,method_cache__17806__auto__,cached_hierarchy__17807__auto__,hierarchy__17808__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17804__auto__,prefer_table__17805__auto__,method_cache__17806__auto__,cached_hierarchy__17807__auto__,hierarchy__17808__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17808__auto__,method_table__17804__auto__,prefer_table__17805__auto__,method_cache__17806__auto__,cached_hierarchy__17807__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29190 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29190.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29190.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29190.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29190);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29191,st_map){
var map__29195 = p__29191;
var map__29195__$1 = ((cljs.core.seq_QMARK_.call(null,map__29195))?cljs.core.apply.call(null,cljs.core.hash_map,map__29195):map__29195);
var container_el = cljs.core.get.call(null,map__29195__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29195,map__29195__$1,container_el){
return (function (p__29196){
var vec__29197 = p__29196;
var k = cljs.core.nth.call(null,vec__29197,(0),null);
var v = cljs.core.nth.call(null,vec__29197,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29195,map__29195__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29198,dom_str){
var map__29200 = p__29198;
var map__29200__$1 = ((cljs.core.seq_QMARK_.call(null,map__29200))?cljs.core.apply.call(null,cljs.core.hash_map,map__29200):map__29200);
var c = map__29200__$1;
var content_area_el = cljs.core.get.call(null,map__29200__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29201){
var map__29203 = p__29201;
var map__29203__$1 = ((cljs.core.seq_QMARK_.call(null,map__29203))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var content_area_el = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_29245){
var state_val_29246 = (state_29245[(1)]);
if((state_val_29246 === (1))){
var inst_29230 = (state_29245[(7)]);
var inst_29230__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29231 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29232 = ["10px","10px","100%","68px","1.0"];
var inst_29233 = cljs.core.PersistentHashMap.fromArrays(inst_29231,inst_29232);
var inst_29234 = cljs.core.merge.call(null,inst_29233,style);
var inst_29235 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29230__$1,inst_29234);
var inst_29236 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29230__$1,msg);
var inst_29237 = cljs.core.async.timeout.call(null,(300));
var state_29245__$1 = (function (){var statearr_29247 = state_29245;
(statearr_29247[(7)] = inst_29230__$1);

(statearr_29247[(8)] = inst_29235);

(statearr_29247[(9)] = inst_29236);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29245__$1,(2),inst_29237);
} else {
if((state_val_29246 === (2))){
var inst_29230 = (state_29245[(7)]);
var inst_29239 = (state_29245[(2)]);
var inst_29240 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29241 = ["auto"];
var inst_29242 = cljs.core.PersistentHashMap.fromArrays(inst_29240,inst_29241);
var inst_29243 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29230,inst_29242);
var state_29245__$1 = (function (){var statearr_29248 = state_29245;
(statearr_29248[(10)] = inst_29239);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29245__$1,inst_29243);
} else {
return null;
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____0 = (function (){
var statearr_29252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29252[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__);

(statearr_29252[(1)] = (1));

return statearr_29252;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____1 = (function (state_29245){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_29245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e29253){if((e29253 instanceof Object)){
var ex__20742__auto__ = e29253;
var statearr_29254_29256 = state_29245;
(statearr_29254_29256[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29257 = state_29245;
state_29245 = G__29257;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__ = function(state_29245){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____1.call(this,state_29245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_29255 = f__20801__auto__.call(null);
(statearr_29255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_29255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29259 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29259,(0),null);
var ln = cljs.core.nth.call(null,vec__29259,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29262 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29262,(0),null);
var file_line = cljs.core.nth.call(null,vec__29262,(1),null);
var file_column = cljs.core.nth.call(null,vec__29262,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29262,file_name,file_line,file_column){
return (function (p1__29260_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29260_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29262,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16909__auto__ = file_line;
if(cljs.core.truth_(or__16909__auto__)){
return or__16909__auto__;
} else {
var and__16897__auto__ = cause;
if(cljs.core.truth_(and__16897__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16897__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29264 = figwheel.client.heads_up.ensure_container.call(null);
var map__29264__$1 = ((cljs.core.seq_QMARK_.call(null,map__29264))?cljs.core.apply.call(null,cljs.core.hash_map,map__29264):map__29264);
var content_area_el = cljs.core.get.call(null,map__29264__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_29311){
var state_val_29312 = (state_29311[(1)]);
if((state_val_29312 === (1))){
var inst_29294 = (state_29311[(7)]);
var inst_29294__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29295 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29296 = ["0.0"];
var inst_29297 = cljs.core.PersistentHashMap.fromArrays(inst_29295,inst_29296);
var inst_29298 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29294__$1,inst_29297);
var inst_29299 = cljs.core.async.timeout.call(null,(300));
var state_29311__$1 = (function (){var statearr_29313 = state_29311;
(statearr_29313[(7)] = inst_29294__$1);

(statearr_29313[(8)] = inst_29298);

return statearr_29313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29311__$1,(2),inst_29299);
} else {
if((state_val_29312 === (2))){
var inst_29294 = (state_29311[(7)]);
var inst_29301 = (state_29311[(2)]);
var inst_29302 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29303 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29304 = cljs.core.PersistentHashMap.fromArrays(inst_29302,inst_29303);
var inst_29305 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29294,inst_29304);
var inst_29306 = cljs.core.async.timeout.call(null,(200));
var state_29311__$1 = (function (){var statearr_29314 = state_29311;
(statearr_29314[(9)] = inst_29301);

(statearr_29314[(10)] = inst_29305);

return statearr_29314;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29311__$1,(3),inst_29306);
} else {
if((state_val_29312 === (3))){
var inst_29294 = (state_29311[(7)]);
var inst_29308 = (state_29311[(2)]);
var inst_29309 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29294,"");
var state_29311__$1 = (function (){var statearr_29315 = state_29311;
(statearr_29315[(11)] = inst_29308);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29311__$1,inst_29309);
} else {
return null;
}
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20739__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20739__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = figwheel$client$heads_up$clear_$_state_machine__20739__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var figwheel$client$heads_up$clear_$_state_machine__20739__auto____1 = (function (state_29311){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_29311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object)){
var ex__20742__auto__ = e29320;
var statearr_29321_29323 = state_29311;
(statearr_29321_29323[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29324 = state_29311;
state_29311 = G__29324;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20739__auto__ = function(state_29311){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20739__auto____1.call(this,state_29311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20739__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20739__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_29322 = f__20801__auto__.call(null);
(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20800__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20800__auto__){
return (function (){
var f__20801__auto__ = (function (){var switch__20738__auto__ = ((function (c__20800__auto__){
return (function (state_29356){
var state_val_29357 = (state_29356[(1)]);
if((state_val_29357 === (1))){
var inst_29346 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(2),inst_29346);
} else {
if((state_val_29357 === (2))){
var inst_29348 = (state_29356[(2)]);
var inst_29349 = cljs.core.async.timeout.call(null,(400));
var state_29356__$1 = (function (){var statearr_29358 = state_29356;
(statearr_29358[(7)] = inst_29348);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(3),inst_29349);
} else {
if((state_val_29357 === (3))){
var inst_29351 = (state_29356[(2)]);
var inst_29352 = figwheel.client.heads_up.clear.call(null);
var state_29356__$1 = (function (){var statearr_29359 = state_29356;
(statearr_29359[(8)] = inst_29351);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29356__$1,(4),inst_29352);
} else {
if((state_val_29357 === (4))){
var inst_29354 = (state_29356[(2)]);
var state_29356__$1 = state_29356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29356__$1,inst_29354);
} else {
return null;
}
}
}
}
});})(c__20800__auto__))
;
return ((function (switch__20738__auto__,c__20800__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____1 = (function (state_29356){
while(true){
var ret_value__20740__auto__ = (function (){try{while(true){
var result__20741__auto__ = switch__20738__auto__.call(null,state_29356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20741__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__20742__auto__ = e29364;
var statearr_29365_29367 = state_29356;
(statearr_29365_29367[(5)] = ex__20742__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29356;
state_29356 = G__29368;
continue;
} else {
return ret_value__20740__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__ = function(state_29356){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____1.call(this,state_29356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20739__auto__;
})()
;})(switch__20738__auto__,c__20800__auto__))
})();
var state__20802__auto__ = (function (){var statearr_29366 = f__20801__auto__.call(null);
(statearr_29366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20800__auto__);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20802__auto__);
});})(c__20800__auto__))
);

return c__20800__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map