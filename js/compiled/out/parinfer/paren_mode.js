// Compiled by ClojureScript 1.9.908 {}
goog.provide('parinfer.paren_mode');
goog.require('cljs.core');
goog.require('parinfer.reader');
goog.require('parinfer.indent_mode');
goog.require('parinfer.string');
goog.require('clojure.string');
/**
 * An initial state of our running state.
 */
parinfer.paren_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),null,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),(0)]);
parinfer.paren_mode.append_delim_trail = (function parinfer$paren_mode$append_delim_trail(p__38229){
var map__38230 = p__38229;
var map__38230__$1 = ((((!((map__38230 == null)))?((((map__38230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38230):map__38230);
var state = map__38230__$1;
var stack = cljs.core.get.call(null,map__38230__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var line_no = cljs.core.get.call(null,map__38230__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.call(null,map__38230__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var opener = cljs.core.peek.call(null,stack);
var close_ch = parinfer.reader.matching_delim.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(opener));
var stack__$1 = cljs.core.pop.call(null,stack);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),(line_no + new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert))], null),parinfer.string.insert_string,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(insert),close_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.inc);
});
parinfer.paren_mode.min_indent = (function parinfer$paren_mode$min_indent(x,p__38232){
var map__38233 = p__38232;
var map__38233__$1 = ((((!((map__38233 == null)))?((((map__38233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38233):map__38233);
var stack = cljs.core.get.call(null,map__38233__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var opener = cljs.core.peek.call(null,stack);
var temp__4655__auto__ = new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener);
if(cljs.core.truth_(temp__4655__auto__)){
var start_x = temp__4655__auto__;
var x__28489__auto__ = (start_x + (1));
var y__28490__auto__ = x;
return ((x__28489__auto__ > y__28490__auto__) ? x__28489__auto__ : y__28490__auto__);
} else {
return x;
}
});
parinfer.paren_mode.min_dedent = (function parinfer$paren_mode$min_dedent(x,p__38235){
var map__38236 = p__38235;
var map__38236__$1 = ((((!((map__38236 == null)))?((((map__38236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38236):map__38236);
var dedent_x = cljs.core.get.call(null,map__38236__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
if(cljs.core.truth_(dedent_x)){
var x__28496__auto__ = dedent_x;
var y__28497__auto__ = x;
return ((x__28496__auto__ < y__28497__auto__) ? x__28496__auto__ : y__28497__auto__);
} else {
return x;
}
});
parinfer.paren_mode.correct_indent = (function parinfer$paren_mode$correct_indent(p__38238){
var map__38239 = p__38238;
var map__38239__$1 = ((((!((map__38239 == null)))?((((map__38239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38239):map__38239);
var state = map__38239__$1;
var indent_delta = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var x_pos = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var stack = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var dedent_x = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
var line_no = cljs.core.get.call(null,map__38239__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var opener = cljs.core.peek.call(null,stack);
var delta = new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232).cljs$core$IFn$_invoke$arity$2(opener,(0));
var new_x = parinfer.paren_mode.min_dedent.call(null,parinfer.paren_mode.min_indent.call(null,(x_pos + delta),state),state);
var new_delta = (indent_delta + (new_x - x_pos));
var indent_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,new_x," "));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),indent_str),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),new_delta,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new_x,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),null);
});
parinfer.paren_mode.handle_cursor_delta = (function parinfer$paren_mode$handle_cursor_delta(p__38241){
var map__38242 = p__38241;
var map__38242__$1 = ((((!((map__38242 == null)))?((((map__38242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38242):map__38242);
var state = map__38242__$1;
var indent_delta = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var line_no = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.call(null,map__38242__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var cursor_delta_QMARK_ = (function (){var and__28127__auto__ = cljs.core._EQ_.call(null,cursor_line,line_no);
if(and__28127__auto__){
var and__28127__auto____$1 = cljs.core._EQ_.call(null,cursor_x,x_pos);
if(and__28127__auto____$1){
return cursor_dx;
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var G__38244 = state;
if(cljs.core.truth_(cursor_delta_QMARK_)){
return cljs.core.update.call(null,G__38244,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),cljs.core._PLUS_,cursor_dx);
} else {
return G__38244;
}
});
/**
 * Update the state by handling a possible indentation trigger.
 */
parinfer.paren_mode.process_indent = (function parinfer$paren_mode$process_indent(p__38245){
var map__38246 = p__38245;
var map__38246__$1 = ((((!((map__38246 == null)))?((((map__38246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38246):map__38246);
var state = map__38246__$1;
var stack = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var ch = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var x_pos = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.call(null,map__38246__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var check_indent_QMARK_ = (function (){var and__28127__auto__ = track_indent_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = parinfer.reader.in_code_QMARK_.call(null,stack);
if(cljs.core.truth_(and__28127__auto____$1)){
return (cljs.core.not.call(null,parinfer.reader.whitespace_QMARK_.call(null,ch))) && (cljs.core.not_EQ_.call(null,";",ch));
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var at_valid_closer_QMARK_ = (function (){var and__28127__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = parinfer.reader.closing_delim_QMARK_.call(null,ch);
if(cljs.core.truth_(and__28127__auto____$1)){
return parinfer.reader.valid_closer_QMARK_.call(null,stack,ch);
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var cursor_holding_QMARK_ = (cljs.core._EQ_.call(null,line_no,cursor_line)) && ((cursor_x <= x_pos));
var move_closer_QMARK_ = (function (){var and__28127__auto__ = at_valid_closer_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
return !(cursor_holding_QMARK_);
} else {
return and__28127__auto__;
}
})();
var skip_QMARK_ = (function (){var and__28127__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
var and__28127__auto____$1 = parinfer.reader.closing_delim_QMARK_.call(null,ch);
if(cljs.core.truth_(and__28127__auto____$1)){
return !(cursor_holding_QMARK_);
} else {
return and__28127__auto____$1;
}
} else {
return and__28127__auto__;
}
})();
var at_indent_QMARK_ = (function (){var and__28127__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__28127__auto__)){
return cljs.core.not.call(null,skip_QMARK_);
} else {
return and__28127__auto__;
}
})();
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"process?","process?",-106844121),cljs.core.not.call(null,skip_QMARK_));
var G__38248 = state__$1;
var G__38248__$1 = (cljs.core.truth_(move_closer_QMARK_)?parinfer.paren_mode.append_delim_trail.call(null,G__38248):G__38248);
var G__38248__$2 = parinfer.paren_mode.handle_cursor_delta.call(null,G__38248__$1)
;
if(cljs.core.truth_(at_indent_QMARK_)){
return parinfer.paren_mode.correct_indent.call(null,G__38248__$2);
} else {
return G__38248__$2;
}
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.paren_mode.process_char = (function parinfer$paren_mode$process_char(p__38249,ch){
var map__38250 = p__38249;
var map__38250__$1 = ((((!((map__38250 == null)))?((((map__38250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38250):map__38250);
var state = map__38250__$1;
var lines = cljs.core.get.call(null,map__38250__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__38250__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count.call(null,cljs.core.get.call(null,lines,line_no));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''));
var state__$2 = parinfer.paren_mode.process_indent.call(null,state__$1);
var G__38252 = state__$2;
if(cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))){
return parinfer.indent_mode.process_char_STAR_.call(null,G__38252);
} else {
return G__38252;
}
});
parinfer.paren_mode.reinsert_delims = (function parinfer$paren_mode$reinsert_delims(p__38253){
var map__38254 = p__38253;
var map__38254__$1 = ((((!((map__38254 == null)))?((((map__38254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38254):map__38254);
var state = map__38254__$1;
var removed_delims = cljs.core.get.call(null,map__38254__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226));
return cljs.core.reduce.call(null,((function (map__38254,map__38254__$1,state,removed_delims){
return (function (state__$1,_delim){
return parinfer.paren_mode.append_delim_trail.call(null,state__$1);
});})(map__38254,map__38254__$1,state,removed_delims))
,state,removed_delims);
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.paren_mode.process_line = (function parinfer$paren_mode$process_line(var_args){
var G__38258 = arguments.length;
switch (G__38258) {
case 1:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.paren_mode.process_line.call(null,parinfer.paren_mode.initial_state,line);
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__38259,line){
var map__38260 = p__38259;
var map__38260__$1 = ((((!((map__38260 == null)))?((((map__38260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38260):map__38260);
var state = map__38260__$1;
var stack = cljs.core.get.call(null,map__38260__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.call(null,map__38260__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.call(null,map__38260__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.call(null,map__38260__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),cljs.core.not.call(null,parinfer.reader.in_str_QMARK_.call(null,stack)),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),(0),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.call(null,lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY);
var state__$2 = cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__38260,map__38260__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__38256_SHARP_){
if(cljs.core.truth_(p1__38256_SHARP_)){
return (p1__38256_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__38260,map__38260__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.call(null,parinfer.paren_mode.process_char,state__$2,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"\n"].join(''));
var state__$4 = parinfer.paren_mode.reinsert_delims.call(null,parinfer.indent_mode.remove_delim_trail.call(null,state__$3));
return state__$4;
});

parinfer.paren_mode.process_line.cljs$lang$maxFixedArity = 2;

parinfer.paren_mode.finalize_state = (function parinfer$paren_mode$finalize_state(p__38263){
var map__38264 = p__38263;
var map__38264__$1 = ((((!((map__38264 == null)))?((((map__38264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38264):map__38264);
var state = map__38264__$1;
var stack = cljs.core.get.call(null,map__38264__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.empty_QMARK_.call(null,stack);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
});
/**
 * Update the state by processing the given text.
 */
parinfer.paren_mode.process_text = (function parinfer$paren_mode$process_text(var_args){
var G__38267 = arguments.length;
switch (G__38267) {
case 1:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.process_text.call(null,text,null);
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.call(null,parinfer.paren_mode.initial_state,options);
var lines = parinfer.string.get_lines.call(null,text);
var state__$1 = cljs.core.reduce.call(null,parinfer.paren_mode.process_line,state,lines);
var state__$2 = parinfer.paren_mode.finalize_state.call(null,state__$1);
return state__$2;
});

parinfer.paren_mode.process_text.cljs$lang$maxFixedArity = 2;

/**
 * Fully process the given text using Paren Mode.
 * 
 *   'text' is the full text.
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change` (once it is implemented)
 *   
 */
parinfer.paren_mode.format_text = (function parinfer$paren_mode$format_text(var_args){
var G__38270 = arguments.length;
switch (G__38270) {
case 1:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.format_text.call(null,text,null);
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.paren_mode.process_text.call(null,text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.call(null,"\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.paren_mode.format_text.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=paren_mode.js.map?rel=1509738665328
