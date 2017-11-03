// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__32992){
var vec__32993 = p__32992;
var i = cljs.core.nth.call(null,vec__32993,(0),null);
var v = cljs.core.nth.call(null,vec__32993,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__32996 = seg;
var gcol = cljs.core.nth.call(null,vec__32996,(0),null);
var source = cljs.core.nth.call(null,vec__32996,(1),null);
var line = cljs.core.nth.call(null,vec__32996,(2),null);
var col = cljs.core.nth.call(null,vec__32996,(3),null);
var name = cljs.core.nth.call(null,vec__32996,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__32999 = seg;
var gcol = cljs.core.nth.call(null,vec__32999,(0),null);
var source = cljs.core.nth.call(null,vec__32999,(1),null);
var line = cljs.core.nth.call(null,vec__32999,(2),null);
var col = cljs.core.nth.call(null,vec__32999,(3),null);
var name = cljs.core.nth.call(null,vec__32999,(4),null);
var vec__33002 = relseg;
var rgcol = cljs.core.nth.call(null,vec__33002,(0),null);
var rsource = cljs.core.nth.call(null,vec__33002,(1),null);
var rline = cljs.core.nth.call(null,vec__33002,(2),null);
var rcol = cljs.core.nth.call(null,vec__33002,(3),null);
var rname = cljs.core.nth.call(null,vec__33002,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__28139__auto__ = source;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__28139__auto__ = line;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__28139__auto__ = col;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__33005 = segmap;
var map__33005__$1 = ((((!((map__33005 == null)))?((((map__33005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33005):map__33005);
var gcol = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__33005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__33005,map__33005__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__33008 = arguments.length;
switch (G__33008) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__33009 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__33013 = cljs.core.next.call(null,segs__$1);
var G__33014 = nrelseg;
var G__33015 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__33013;
relseg__$1 = G__33014;
result__$1 = G__33015;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__33009,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__33009,(1),null);
var G__33016 = (gline + (1));
var G__33017 = cljs.core.next.call(null,lines__$1);
var G__33018 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__33019 = result__$1;
gline = G__33016;
lines__$1 = G__33017;
relseg = G__33018;
result = G__33019;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__33021 = segmap;
var map__33021__$1 = ((((!((map__33021 == null)))?((((map__33021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33021):map__33021);
var gcol = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__33021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__33021,map__33021__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__33021,map__33021__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__33020_SHARP_){
return cljs.core.conj.call(null,p1__33020_SHARP_,d__$1);
});})(map__33021,map__33021__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__33021,map__33021__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__33024 = arguments.length;
switch (G__33024) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__33025 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__33029 = cljs.core.next.call(null,segs__$1);
var G__33030 = nrelseg;
var G__33031 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__33029;
relseg__$1 = G__33030;
result__$1 = G__33031;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__33025,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__33025,(1),null);
var G__33032 = (gline + (1));
var G__33033 = cljs.core.next.call(null,lines__$1);
var G__33034 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__33035 = result__$1;
gline = G__33032;
lines__$1 = G__33033;
relseg = G__33034;
result = G__33035;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__33036){
var vec__33037 = p__33036;
var _ = cljs.core.nth.call(null,vec__33037,(0),null);
var source = cljs.core.nth.call(null,vec__33037,(1),null);
var line = cljs.core.nth.call(null,vec__33037,(2),null);
var col = cljs.core.nth.call(null,vec__33037,(3),null);
var name = cljs.core.nth.call(null,vec__33037,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__33040){
var vec__33041 = p__33040;
var gcol = cljs.core.nth.call(null,vec__33041,(0),null);
var sidx = cljs.core.nth.call(null,vec__33041,(1),null);
var line = cljs.core.nth.call(null,vec__33041,(2),null);
var col = cljs.core.nth.call(null,vec__33041,(3),null);
var name = cljs.core.nth.call(null,vec__33041,(4),null);
var seg = vec__33041;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__33041,gcol,sidx,line,col,name,seg,relseg){
return (function (p__33044){
var vec__33045 = p__33044;
var _ = cljs.core.nth.call(null,vec__33045,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__33045,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__33045,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__33045,(3),null);
var lname = cljs.core.nth.call(null,vec__33045,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__28139__auto__ = name;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__33041,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__28139__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__33051 = cljs.core.seq.call(null,infos);
var chunk__33052 = null;
var count__33053 = (0);
var i__33054 = (0);
while(true){
if((i__33054 < count__33053)){
var info = cljs.core._nth.call(null,chunk__33052,i__33054);
var segv_33133 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_33134 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_33135 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_33134 > (lc_33135 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__33051,chunk__33052,count__33053,i__33054,segv_33133,gline_33134,lc_33135,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_33134 - (lc_33135 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_33133], null));
});})(seq__33051,chunk__33052,count__33053,i__33054,segv_33133,gline_33134,lc_33135,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__33051,chunk__33052,count__33053,i__33054,segv_33133,gline_33134,lc_33135,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33134], null),cljs.core.conj,segv_33133);
});})(seq__33051,chunk__33052,count__33053,i__33054,segv_33133,gline_33134,lc_33135,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__33136 = seq__33051;
var G__33137 = chunk__33052;
var G__33138 = count__33053;
var G__33139 = (i__33054 + (1));
seq__33051 = G__33136;
chunk__33052 = G__33137;
count__33053 = G__33138;
i__33054 = G__33139;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33051);
if(temp__4657__auto__){
var seq__33051__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33051__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__33051__$1);
var G__33140 = cljs.core.chunk_rest.call(null,seq__33051__$1);
var G__33141 = c__28978__auto__;
var G__33142 = cljs.core.count.call(null,c__28978__auto__);
var G__33143 = (0);
seq__33051 = G__33140;
chunk__33052 = G__33141;
count__33053 = G__33142;
i__33054 = G__33143;
continue;
} else {
var info = cljs.core.first.call(null,seq__33051__$1);
var segv_33144 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_33145 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_33146 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_33145 > (lc_33146 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__33051,chunk__33052,count__33053,i__33054,segv_33144,gline_33145,lc_33146,info,seq__33051__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_33145 - (lc_33146 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_33144], null));
});})(seq__33051,chunk__33052,count__33053,i__33054,segv_33144,gline_33145,lc_33146,info,seq__33051__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__33051,chunk__33052,count__33053,i__33054,segv_33144,gline_33145,lc_33146,info,seq__33051__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33145], null),cljs.core.conj,segv_33144);
});})(seq__33051,chunk__33052,count__33053,i__33054,segv_33144,gline_33145,lc_33146,info,seq__33051__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__33147 = cljs.core.next.call(null,seq__33051__$1);
var G__33148 = null;
var G__33149 = (0);
var G__33150 = (0);
seq__33051 = G__33147;
chunk__33052 = G__33148;
count__33053 = G__33149;
i__33054 = G__33150;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__33055_33151 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__33056_33152 = null;
var count__33057_33153 = (0);
var i__33058_33154 = (0);
while(true){
if((i__33058_33154 < count__33057_33153)){
var vec__33059_33155 = cljs.core._nth.call(null,chunk__33056_33152,i__33058_33154);
var source_idx_33156 = cljs.core.nth.call(null,vec__33059_33155,(0),null);
var vec__33062_33157 = cljs.core.nth.call(null,vec__33059_33155,(1),null);
var __33158 = cljs.core.nth.call(null,vec__33062_33157,(0),null);
var lines_33159__$1 = cljs.core.nth.call(null,vec__33062_33157,(1),null);
var seq__33065_33160 = cljs.core.seq.call(null,lines_33159__$1);
var chunk__33066_33161 = null;
var count__33067_33162 = (0);
var i__33068_33163 = (0);
while(true){
if((i__33068_33163 < count__33067_33162)){
var vec__33069_33164 = cljs.core._nth.call(null,chunk__33066_33161,i__33068_33163);
var line_33165 = cljs.core.nth.call(null,vec__33069_33164,(0),null);
var cols_33166 = cljs.core.nth.call(null,vec__33069_33164,(1),null);
var seq__33072_33167 = cljs.core.seq.call(null,cols_33166);
var chunk__33073_33168 = null;
var count__33074_33169 = (0);
var i__33075_33170 = (0);
while(true){
if((i__33075_33170 < count__33074_33169)){
var vec__33076_33171 = cljs.core._nth.call(null,chunk__33073_33168,i__33075_33170);
var col_33172 = cljs.core.nth.call(null,vec__33076_33171,(0),null);
var infos_33173 = cljs.core.nth.call(null,vec__33076_33171,(1),null);
encode_cols.call(null,infos_33173,source_idx_33156,line_33165,col_33172);

var G__33174 = seq__33072_33167;
var G__33175 = chunk__33073_33168;
var G__33176 = count__33074_33169;
var G__33177 = (i__33075_33170 + (1));
seq__33072_33167 = G__33174;
chunk__33073_33168 = G__33175;
count__33074_33169 = G__33176;
i__33075_33170 = G__33177;
continue;
} else {
var temp__4657__auto___33178 = cljs.core.seq.call(null,seq__33072_33167);
if(temp__4657__auto___33178){
var seq__33072_33179__$1 = temp__4657__auto___33178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33072_33179__$1)){
var c__28978__auto___33180 = cljs.core.chunk_first.call(null,seq__33072_33179__$1);
var G__33181 = cljs.core.chunk_rest.call(null,seq__33072_33179__$1);
var G__33182 = c__28978__auto___33180;
var G__33183 = cljs.core.count.call(null,c__28978__auto___33180);
var G__33184 = (0);
seq__33072_33167 = G__33181;
chunk__33073_33168 = G__33182;
count__33074_33169 = G__33183;
i__33075_33170 = G__33184;
continue;
} else {
var vec__33079_33185 = cljs.core.first.call(null,seq__33072_33179__$1);
var col_33186 = cljs.core.nth.call(null,vec__33079_33185,(0),null);
var infos_33187 = cljs.core.nth.call(null,vec__33079_33185,(1),null);
encode_cols.call(null,infos_33187,source_idx_33156,line_33165,col_33186);

var G__33188 = cljs.core.next.call(null,seq__33072_33179__$1);
var G__33189 = null;
var G__33190 = (0);
var G__33191 = (0);
seq__33072_33167 = G__33188;
chunk__33073_33168 = G__33189;
count__33074_33169 = G__33190;
i__33075_33170 = G__33191;
continue;
}
} else {
}
}
break;
}

var G__33192 = seq__33065_33160;
var G__33193 = chunk__33066_33161;
var G__33194 = count__33067_33162;
var G__33195 = (i__33068_33163 + (1));
seq__33065_33160 = G__33192;
chunk__33066_33161 = G__33193;
count__33067_33162 = G__33194;
i__33068_33163 = G__33195;
continue;
} else {
var temp__4657__auto___33196 = cljs.core.seq.call(null,seq__33065_33160);
if(temp__4657__auto___33196){
var seq__33065_33197__$1 = temp__4657__auto___33196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33065_33197__$1)){
var c__28978__auto___33198 = cljs.core.chunk_first.call(null,seq__33065_33197__$1);
var G__33199 = cljs.core.chunk_rest.call(null,seq__33065_33197__$1);
var G__33200 = c__28978__auto___33198;
var G__33201 = cljs.core.count.call(null,c__28978__auto___33198);
var G__33202 = (0);
seq__33065_33160 = G__33199;
chunk__33066_33161 = G__33200;
count__33067_33162 = G__33201;
i__33068_33163 = G__33202;
continue;
} else {
var vec__33082_33203 = cljs.core.first.call(null,seq__33065_33197__$1);
var line_33204 = cljs.core.nth.call(null,vec__33082_33203,(0),null);
var cols_33205 = cljs.core.nth.call(null,vec__33082_33203,(1),null);
var seq__33085_33206 = cljs.core.seq.call(null,cols_33205);
var chunk__33086_33207 = null;
var count__33087_33208 = (0);
var i__33088_33209 = (0);
while(true){
if((i__33088_33209 < count__33087_33208)){
var vec__33089_33210 = cljs.core._nth.call(null,chunk__33086_33207,i__33088_33209);
var col_33211 = cljs.core.nth.call(null,vec__33089_33210,(0),null);
var infos_33212 = cljs.core.nth.call(null,vec__33089_33210,(1),null);
encode_cols.call(null,infos_33212,source_idx_33156,line_33204,col_33211);

var G__33213 = seq__33085_33206;
var G__33214 = chunk__33086_33207;
var G__33215 = count__33087_33208;
var G__33216 = (i__33088_33209 + (1));
seq__33085_33206 = G__33213;
chunk__33086_33207 = G__33214;
count__33087_33208 = G__33215;
i__33088_33209 = G__33216;
continue;
} else {
var temp__4657__auto___33217__$1 = cljs.core.seq.call(null,seq__33085_33206);
if(temp__4657__auto___33217__$1){
var seq__33085_33218__$1 = temp__4657__auto___33217__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33085_33218__$1)){
var c__28978__auto___33219 = cljs.core.chunk_first.call(null,seq__33085_33218__$1);
var G__33220 = cljs.core.chunk_rest.call(null,seq__33085_33218__$1);
var G__33221 = c__28978__auto___33219;
var G__33222 = cljs.core.count.call(null,c__28978__auto___33219);
var G__33223 = (0);
seq__33085_33206 = G__33220;
chunk__33086_33207 = G__33221;
count__33087_33208 = G__33222;
i__33088_33209 = G__33223;
continue;
} else {
var vec__33092_33224 = cljs.core.first.call(null,seq__33085_33218__$1);
var col_33225 = cljs.core.nth.call(null,vec__33092_33224,(0),null);
var infos_33226 = cljs.core.nth.call(null,vec__33092_33224,(1),null);
encode_cols.call(null,infos_33226,source_idx_33156,line_33204,col_33225);

var G__33227 = cljs.core.next.call(null,seq__33085_33218__$1);
var G__33228 = null;
var G__33229 = (0);
var G__33230 = (0);
seq__33085_33206 = G__33227;
chunk__33086_33207 = G__33228;
count__33087_33208 = G__33229;
i__33088_33209 = G__33230;
continue;
}
} else {
}
}
break;
}

var G__33231 = cljs.core.next.call(null,seq__33065_33197__$1);
var G__33232 = null;
var G__33233 = (0);
var G__33234 = (0);
seq__33065_33160 = G__33231;
chunk__33066_33161 = G__33232;
count__33067_33162 = G__33233;
i__33068_33163 = G__33234;
continue;
}
} else {
}
}
break;
}

var G__33235 = seq__33055_33151;
var G__33236 = chunk__33056_33152;
var G__33237 = count__33057_33153;
var G__33238 = (i__33058_33154 + (1));
seq__33055_33151 = G__33235;
chunk__33056_33152 = G__33236;
count__33057_33153 = G__33237;
i__33058_33154 = G__33238;
continue;
} else {
var temp__4657__auto___33239 = cljs.core.seq.call(null,seq__33055_33151);
if(temp__4657__auto___33239){
var seq__33055_33240__$1 = temp__4657__auto___33239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33055_33240__$1)){
var c__28978__auto___33241 = cljs.core.chunk_first.call(null,seq__33055_33240__$1);
var G__33242 = cljs.core.chunk_rest.call(null,seq__33055_33240__$1);
var G__33243 = c__28978__auto___33241;
var G__33244 = cljs.core.count.call(null,c__28978__auto___33241);
var G__33245 = (0);
seq__33055_33151 = G__33242;
chunk__33056_33152 = G__33243;
count__33057_33153 = G__33244;
i__33058_33154 = G__33245;
continue;
} else {
var vec__33095_33246 = cljs.core.first.call(null,seq__33055_33240__$1);
var source_idx_33247 = cljs.core.nth.call(null,vec__33095_33246,(0),null);
var vec__33098_33248 = cljs.core.nth.call(null,vec__33095_33246,(1),null);
var __33249 = cljs.core.nth.call(null,vec__33098_33248,(0),null);
var lines_33250__$1 = cljs.core.nth.call(null,vec__33098_33248,(1),null);
var seq__33101_33251 = cljs.core.seq.call(null,lines_33250__$1);
var chunk__33102_33252 = null;
var count__33103_33253 = (0);
var i__33104_33254 = (0);
while(true){
if((i__33104_33254 < count__33103_33253)){
var vec__33105_33255 = cljs.core._nth.call(null,chunk__33102_33252,i__33104_33254);
var line_33256 = cljs.core.nth.call(null,vec__33105_33255,(0),null);
var cols_33257 = cljs.core.nth.call(null,vec__33105_33255,(1),null);
var seq__33108_33258 = cljs.core.seq.call(null,cols_33257);
var chunk__33109_33259 = null;
var count__33110_33260 = (0);
var i__33111_33261 = (0);
while(true){
if((i__33111_33261 < count__33110_33260)){
var vec__33112_33262 = cljs.core._nth.call(null,chunk__33109_33259,i__33111_33261);
var col_33263 = cljs.core.nth.call(null,vec__33112_33262,(0),null);
var infos_33264 = cljs.core.nth.call(null,vec__33112_33262,(1),null);
encode_cols.call(null,infos_33264,source_idx_33247,line_33256,col_33263);

var G__33265 = seq__33108_33258;
var G__33266 = chunk__33109_33259;
var G__33267 = count__33110_33260;
var G__33268 = (i__33111_33261 + (1));
seq__33108_33258 = G__33265;
chunk__33109_33259 = G__33266;
count__33110_33260 = G__33267;
i__33111_33261 = G__33268;
continue;
} else {
var temp__4657__auto___33269__$1 = cljs.core.seq.call(null,seq__33108_33258);
if(temp__4657__auto___33269__$1){
var seq__33108_33270__$1 = temp__4657__auto___33269__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33108_33270__$1)){
var c__28978__auto___33271 = cljs.core.chunk_first.call(null,seq__33108_33270__$1);
var G__33272 = cljs.core.chunk_rest.call(null,seq__33108_33270__$1);
var G__33273 = c__28978__auto___33271;
var G__33274 = cljs.core.count.call(null,c__28978__auto___33271);
var G__33275 = (0);
seq__33108_33258 = G__33272;
chunk__33109_33259 = G__33273;
count__33110_33260 = G__33274;
i__33111_33261 = G__33275;
continue;
} else {
var vec__33115_33276 = cljs.core.first.call(null,seq__33108_33270__$1);
var col_33277 = cljs.core.nth.call(null,vec__33115_33276,(0),null);
var infos_33278 = cljs.core.nth.call(null,vec__33115_33276,(1),null);
encode_cols.call(null,infos_33278,source_idx_33247,line_33256,col_33277);

var G__33279 = cljs.core.next.call(null,seq__33108_33270__$1);
var G__33280 = null;
var G__33281 = (0);
var G__33282 = (0);
seq__33108_33258 = G__33279;
chunk__33109_33259 = G__33280;
count__33110_33260 = G__33281;
i__33111_33261 = G__33282;
continue;
}
} else {
}
}
break;
}

var G__33283 = seq__33101_33251;
var G__33284 = chunk__33102_33252;
var G__33285 = count__33103_33253;
var G__33286 = (i__33104_33254 + (1));
seq__33101_33251 = G__33283;
chunk__33102_33252 = G__33284;
count__33103_33253 = G__33285;
i__33104_33254 = G__33286;
continue;
} else {
var temp__4657__auto___33287__$1 = cljs.core.seq.call(null,seq__33101_33251);
if(temp__4657__auto___33287__$1){
var seq__33101_33288__$1 = temp__4657__auto___33287__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33101_33288__$1)){
var c__28978__auto___33289 = cljs.core.chunk_first.call(null,seq__33101_33288__$1);
var G__33290 = cljs.core.chunk_rest.call(null,seq__33101_33288__$1);
var G__33291 = c__28978__auto___33289;
var G__33292 = cljs.core.count.call(null,c__28978__auto___33289);
var G__33293 = (0);
seq__33101_33251 = G__33290;
chunk__33102_33252 = G__33291;
count__33103_33253 = G__33292;
i__33104_33254 = G__33293;
continue;
} else {
var vec__33118_33294 = cljs.core.first.call(null,seq__33101_33288__$1);
var line_33295 = cljs.core.nth.call(null,vec__33118_33294,(0),null);
var cols_33296 = cljs.core.nth.call(null,vec__33118_33294,(1),null);
var seq__33121_33297 = cljs.core.seq.call(null,cols_33296);
var chunk__33122_33298 = null;
var count__33123_33299 = (0);
var i__33124_33300 = (0);
while(true){
if((i__33124_33300 < count__33123_33299)){
var vec__33125_33301 = cljs.core._nth.call(null,chunk__33122_33298,i__33124_33300);
var col_33302 = cljs.core.nth.call(null,vec__33125_33301,(0),null);
var infos_33303 = cljs.core.nth.call(null,vec__33125_33301,(1),null);
encode_cols.call(null,infos_33303,source_idx_33247,line_33295,col_33302);

var G__33304 = seq__33121_33297;
var G__33305 = chunk__33122_33298;
var G__33306 = count__33123_33299;
var G__33307 = (i__33124_33300 + (1));
seq__33121_33297 = G__33304;
chunk__33122_33298 = G__33305;
count__33123_33299 = G__33306;
i__33124_33300 = G__33307;
continue;
} else {
var temp__4657__auto___33308__$2 = cljs.core.seq.call(null,seq__33121_33297);
if(temp__4657__auto___33308__$2){
var seq__33121_33309__$1 = temp__4657__auto___33308__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33121_33309__$1)){
var c__28978__auto___33310 = cljs.core.chunk_first.call(null,seq__33121_33309__$1);
var G__33311 = cljs.core.chunk_rest.call(null,seq__33121_33309__$1);
var G__33312 = c__28978__auto___33310;
var G__33313 = cljs.core.count.call(null,c__28978__auto___33310);
var G__33314 = (0);
seq__33121_33297 = G__33311;
chunk__33122_33298 = G__33312;
count__33123_33299 = G__33313;
i__33124_33300 = G__33314;
continue;
} else {
var vec__33128_33315 = cljs.core.first.call(null,seq__33121_33309__$1);
var col_33316 = cljs.core.nth.call(null,vec__33128_33315,(0),null);
var infos_33317 = cljs.core.nth.call(null,vec__33128_33315,(1),null);
encode_cols.call(null,infos_33317,source_idx_33247,line_33295,col_33316);

var G__33318 = cljs.core.next.call(null,seq__33121_33309__$1);
var G__33319 = null;
var G__33320 = (0);
var G__33321 = (0);
seq__33121_33297 = G__33318;
chunk__33122_33298 = G__33319;
count__33123_33299 = G__33320;
i__33124_33300 = G__33321;
continue;
}
} else {
}
}
break;
}

var G__33322 = cljs.core.next.call(null,seq__33101_33288__$1);
var G__33323 = null;
var G__33324 = (0);
var G__33325 = (0);
seq__33101_33251 = G__33322;
chunk__33102_33252 = G__33323;
count__33103_33253 = G__33324;
i__33104_33254 = G__33325;
continue;
}
} else {
}
}
break;
}

var G__33326 = cljs.core.next.call(null,seq__33055_33240__$1);
var G__33327 = null;
var G__33328 = (0);
var G__33329 = (0);
seq__33055_33151 = G__33326;
chunk__33056_33152 = G__33327;
count__33057_33153 = G__33328;
i__33058_33154 = G__33329;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__33131 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__33048_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33048_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__33049_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__33049_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__33050_SHARP_){
return clojure.string.join.call(null,",",p1__33050_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__33132 = G__33131;
goog.object.set(G__33132,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__33132;
} else {
return G__33131;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__33330 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__33330,(0),null);
var col_map = cljs.core.nth.call(null,vec__33330,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__33333 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__33333,(0),null);
var infos = cljs.core.nth.call(null,vec__33333,(1),null);
var G__33339 = cljs.core.next.call(null,col_map_seq);
var G__33340 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__33333,col,infos,vec__33330,line,col_map){
return (function (v,p__33336){
var map__33337 = p__33336;
var map__33337__$1 = ((((!((map__33337 == null)))?((((map__33337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33337):map__33337);
var gline = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__33337__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__33333,col,infos,vec__33330,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__33339;
new_cols = G__33340;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__33341 = cljs.core.next.call(null,line_map_seq);
var G__33342 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__33341;
new_lines = G__33342;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__33343_33405 = cljs.core.seq.call(null,reverse_map);
var chunk__33344_33406 = null;
var count__33345_33407 = (0);
var i__33346_33408 = (0);
while(true){
if((i__33346_33408 < count__33345_33407)){
var vec__33347_33409 = cljs.core._nth.call(null,chunk__33344_33406,i__33346_33408);
var line_33410 = cljs.core.nth.call(null,vec__33347_33409,(0),null);
var columns_33411 = cljs.core.nth.call(null,vec__33347_33409,(1),null);
var seq__33350_33412 = cljs.core.seq.call(null,columns_33411);
var chunk__33351_33413 = null;
var count__33352_33414 = (0);
var i__33353_33415 = (0);
while(true){
if((i__33353_33415 < count__33352_33414)){
var vec__33354_33416 = cljs.core._nth.call(null,chunk__33351_33413,i__33353_33415);
var column_33417 = cljs.core.nth.call(null,vec__33354_33416,(0),null);
var column_info_33418 = cljs.core.nth.call(null,vec__33354_33416,(1),null);
var seq__33357_33419 = cljs.core.seq.call(null,column_info_33418);
var chunk__33358_33420 = null;
var count__33359_33421 = (0);
var i__33360_33422 = (0);
while(true){
if((i__33360_33422 < count__33359_33421)){
var map__33361_33423 = cljs.core._nth.call(null,chunk__33358_33420,i__33360_33422);
var map__33361_33424__$1 = ((((!((map__33361_33423 == null)))?((((map__33361_33423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33361_33423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33361_33423):map__33361_33423);
var gline_33425 = cljs.core.get.call(null,map__33361_33424__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33426 = cljs.core.get.call(null,map__33361_33424__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33427 = cljs.core.get.call(null,map__33361_33424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33425], null),cljs.core.fnil.call(null,((function (seq__33357_33419,chunk__33358_33420,count__33359_33421,i__33360_33422,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33361_33423,map__33361_33424__$1,gline_33425,gcol_33426,name_33427,vec__33354_33416,column_33417,column_info_33418,vec__33347_33409,line_33410,columns_33411,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33426], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33410,new cljs.core.Keyword(null,"col","col",-1959363084),column_33417,new cljs.core.Keyword(null,"name","name",1843675177),name_33427], null));
});})(seq__33357_33419,chunk__33358_33420,count__33359_33421,i__33360_33422,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33361_33423,map__33361_33424__$1,gline_33425,gcol_33426,name_33427,vec__33354_33416,column_33417,column_info_33418,vec__33347_33409,line_33410,columns_33411,inverted))
,cljs.core.sorted_map.call(null)));

var G__33428 = seq__33357_33419;
var G__33429 = chunk__33358_33420;
var G__33430 = count__33359_33421;
var G__33431 = (i__33360_33422 + (1));
seq__33357_33419 = G__33428;
chunk__33358_33420 = G__33429;
count__33359_33421 = G__33430;
i__33360_33422 = G__33431;
continue;
} else {
var temp__4657__auto___33432 = cljs.core.seq.call(null,seq__33357_33419);
if(temp__4657__auto___33432){
var seq__33357_33433__$1 = temp__4657__auto___33432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33357_33433__$1)){
var c__28978__auto___33434 = cljs.core.chunk_first.call(null,seq__33357_33433__$1);
var G__33435 = cljs.core.chunk_rest.call(null,seq__33357_33433__$1);
var G__33436 = c__28978__auto___33434;
var G__33437 = cljs.core.count.call(null,c__28978__auto___33434);
var G__33438 = (0);
seq__33357_33419 = G__33435;
chunk__33358_33420 = G__33436;
count__33359_33421 = G__33437;
i__33360_33422 = G__33438;
continue;
} else {
var map__33363_33439 = cljs.core.first.call(null,seq__33357_33433__$1);
var map__33363_33440__$1 = ((((!((map__33363_33439 == null)))?((((map__33363_33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33363_33439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33363_33439):map__33363_33439);
var gline_33441 = cljs.core.get.call(null,map__33363_33440__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33442 = cljs.core.get.call(null,map__33363_33440__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33443 = cljs.core.get.call(null,map__33363_33440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33441], null),cljs.core.fnil.call(null,((function (seq__33357_33419,chunk__33358_33420,count__33359_33421,i__33360_33422,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33363_33439,map__33363_33440__$1,gline_33441,gcol_33442,name_33443,seq__33357_33433__$1,temp__4657__auto___33432,vec__33354_33416,column_33417,column_info_33418,vec__33347_33409,line_33410,columns_33411,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33442], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33410,new cljs.core.Keyword(null,"col","col",-1959363084),column_33417,new cljs.core.Keyword(null,"name","name",1843675177),name_33443], null));
});})(seq__33357_33419,chunk__33358_33420,count__33359_33421,i__33360_33422,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33363_33439,map__33363_33440__$1,gline_33441,gcol_33442,name_33443,seq__33357_33433__$1,temp__4657__auto___33432,vec__33354_33416,column_33417,column_info_33418,vec__33347_33409,line_33410,columns_33411,inverted))
,cljs.core.sorted_map.call(null)));

var G__33444 = cljs.core.next.call(null,seq__33357_33433__$1);
var G__33445 = null;
var G__33446 = (0);
var G__33447 = (0);
seq__33357_33419 = G__33444;
chunk__33358_33420 = G__33445;
count__33359_33421 = G__33446;
i__33360_33422 = G__33447;
continue;
}
} else {
}
}
break;
}

var G__33448 = seq__33350_33412;
var G__33449 = chunk__33351_33413;
var G__33450 = count__33352_33414;
var G__33451 = (i__33353_33415 + (1));
seq__33350_33412 = G__33448;
chunk__33351_33413 = G__33449;
count__33352_33414 = G__33450;
i__33353_33415 = G__33451;
continue;
} else {
var temp__4657__auto___33452 = cljs.core.seq.call(null,seq__33350_33412);
if(temp__4657__auto___33452){
var seq__33350_33453__$1 = temp__4657__auto___33452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33350_33453__$1)){
var c__28978__auto___33454 = cljs.core.chunk_first.call(null,seq__33350_33453__$1);
var G__33455 = cljs.core.chunk_rest.call(null,seq__33350_33453__$1);
var G__33456 = c__28978__auto___33454;
var G__33457 = cljs.core.count.call(null,c__28978__auto___33454);
var G__33458 = (0);
seq__33350_33412 = G__33455;
chunk__33351_33413 = G__33456;
count__33352_33414 = G__33457;
i__33353_33415 = G__33458;
continue;
} else {
var vec__33365_33459 = cljs.core.first.call(null,seq__33350_33453__$1);
var column_33460 = cljs.core.nth.call(null,vec__33365_33459,(0),null);
var column_info_33461 = cljs.core.nth.call(null,vec__33365_33459,(1),null);
var seq__33368_33462 = cljs.core.seq.call(null,column_info_33461);
var chunk__33369_33463 = null;
var count__33370_33464 = (0);
var i__33371_33465 = (0);
while(true){
if((i__33371_33465 < count__33370_33464)){
var map__33372_33466 = cljs.core._nth.call(null,chunk__33369_33463,i__33371_33465);
var map__33372_33467__$1 = ((((!((map__33372_33466 == null)))?((((map__33372_33466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33372_33466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33372_33466):map__33372_33466);
var gline_33468 = cljs.core.get.call(null,map__33372_33467__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33469 = cljs.core.get.call(null,map__33372_33467__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33470 = cljs.core.get.call(null,map__33372_33467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33468], null),cljs.core.fnil.call(null,((function (seq__33368_33462,chunk__33369_33463,count__33370_33464,i__33371_33465,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33372_33466,map__33372_33467__$1,gline_33468,gcol_33469,name_33470,vec__33365_33459,column_33460,column_info_33461,seq__33350_33453__$1,temp__4657__auto___33452,vec__33347_33409,line_33410,columns_33411,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33469], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33410,new cljs.core.Keyword(null,"col","col",-1959363084),column_33460,new cljs.core.Keyword(null,"name","name",1843675177),name_33470], null));
});})(seq__33368_33462,chunk__33369_33463,count__33370_33464,i__33371_33465,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33372_33466,map__33372_33467__$1,gline_33468,gcol_33469,name_33470,vec__33365_33459,column_33460,column_info_33461,seq__33350_33453__$1,temp__4657__auto___33452,vec__33347_33409,line_33410,columns_33411,inverted))
,cljs.core.sorted_map.call(null)));

var G__33471 = seq__33368_33462;
var G__33472 = chunk__33369_33463;
var G__33473 = count__33370_33464;
var G__33474 = (i__33371_33465 + (1));
seq__33368_33462 = G__33471;
chunk__33369_33463 = G__33472;
count__33370_33464 = G__33473;
i__33371_33465 = G__33474;
continue;
} else {
var temp__4657__auto___33475__$1 = cljs.core.seq.call(null,seq__33368_33462);
if(temp__4657__auto___33475__$1){
var seq__33368_33476__$1 = temp__4657__auto___33475__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33368_33476__$1)){
var c__28978__auto___33477 = cljs.core.chunk_first.call(null,seq__33368_33476__$1);
var G__33478 = cljs.core.chunk_rest.call(null,seq__33368_33476__$1);
var G__33479 = c__28978__auto___33477;
var G__33480 = cljs.core.count.call(null,c__28978__auto___33477);
var G__33481 = (0);
seq__33368_33462 = G__33478;
chunk__33369_33463 = G__33479;
count__33370_33464 = G__33480;
i__33371_33465 = G__33481;
continue;
} else {
var map__33374_33482 = cljs.core.first.call(null,seq__33368_33476__$1);
var map__33374_33483__$1 = ((((!((map__33374_33482 == null)))?((((map__33374_33482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33374_33482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33374_33482):map__33374_33482);
var gline_33484 = cljs.core.get.call(null,map__33374_33483__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33485 = cljs.core.get.call(null,map__33374_33483__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33486 = cljs.core.get.call(null,map__33374_33483__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33484], null),cljs.core.fnil.call(null,((function (seq__33368_33462,chunk__33369_33463,count__33370_33464,i__33371_33465,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33374_33482,map__33374_33483__$1,gline_33484,gcol_33485,name_33486,seq__33368_33476__$1,temp__4657__auto___33475__$1,vec__33365_33459,column_33460,column_info_33461,seq__33350_33453__$1,temp__4657__auto___33452,vec__33347_33409,line_33410,columns_33411,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33485], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33410,new cljs.core.Keyword(null,"col","col",-1959363084),column_33460,new cljs.core.Keyword(null,"name","name",1843675177),name_33486], null));
});})(seq__33368_33462,chunk__33369_33463,count__33370_33464,i__33371_33465,seq__33350_33412,chunk__33351_33413,count__33352_33414,i__33353_33415,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33374_33482,map__33374_33483__$1,gline_33484,gcol_33485,name_33486,seq__33368_33476__$1,temp__4657__auto___33475__$1,vec__33365_33459,column_33460,column_info_33461,seq__33350_33453__$1,temp__4657__auto___33452,vec__33347_33409,line_33410,columns_33411,inverted))
,cljs.core.sorted_map.call(null)));

var G__33487 = cljs.core.next.call(null,seq__33368_33476__$1);
var G__33488 = null;
var G__33489 = (0);
var G__33490 = (0);
seq__33368_33462 = G__33487;
chunk__33369_33463 = G__33488;
count__33370_33464 = G__33489;
i__33371_33465 = G__33490;
continue;
}
} else {
}
}
break;
}

var G__33491 = cljs.core.next.call(null,seq__33350_33453__$1);
var G__33492 = null;
var G__33493 = (0);
var G__33494 = (0);
seq__33350_33412 = G__33491;
chunk__33351_33413 = G__33492;
count__33352_33414 = G__33493;
i__33353_33415 = G__33494;
continue;
}
} else {
}
}
break;
}

var G__33495 = seq__33343_33405;
var G__33496 = chunk__33344_33406;
var G__33497 = count__33345_33407;
var G__33498 = (i__33346_33408 + (1));
seq__33343_33405 = G__33495;
chunk__33344_33406 = G__33496;
count__33345_33407 = G__33497;
i__33346_33408 = G__33498;
continue;
} else {
var temp__4657__auto___33499 = cljs.core.seq.call(null,seq__33343_33405);
if(temp__4657__auto___33499){
var seq__33343_33500__$1 = temp__4657__auto___33499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33343_33500__$1)){
var c__28978__auto___33501 = cljs.core.chunk_first.call(null,seq__33343_33500__$1);
var G__33502 = cljs.core.chunk_rest.call(null,seq__33343_33500__$1);
var G__33503 = c__28978__auto___33501;
var G__33504 = cljs.core.count.call(null,c__28978__auto___33501);
var G__33505 = (0);
seq__33343_33405 = G__33502;
chunk__33344_33406 = G__33503;
count__33345_33407 = G__33504;
i__33346_33408 = G__33505;
continue;
} else {
var vec__33376_33506 = cljs.core.first.call(null,seq__33343_33500__$1);
var line_33507 = cljs.core.nth.call(null,vec__33376_33506,(0),null);
var columns_33508 = cljs.core.nth.call(null,vec__33376_33506,(1),null);
var seq__33379_33509 = cljs.core.seq.call(null,columns_33508);
var chunk__33380_33510 = null;
var count__33381_33511 = (0);
var i__33382_33512 = (0);
while(true){
if((i__33382_33512 < count__33381_33511)){
var vec__33383_33513 = cljs.core._nth.call(null,chunk__33380_33510,i__33382_33512);
var column_33514 = cljs.core.nth.call(null,vec__33383_33513,(0),null);
var column_info_33515 = cljs.core.nth.call(null,vec__33383_33513,(1),null);
var seq__33386_33516 = cljs.core.seq.call(null,column_info_33515);
var chunk__33387_33517 = null;
var count__33388_33518 = (0);
var i__33389_33519 = (0);
while(true){
if((i__33389_33519 < count__33388_33518)){
var map__33390_33520 = cljs.core._nth.call(null,chunk__33387_33517,i__33389_33519);
var map__33390_33521__$1 = ((((!((map__33390_33520 == null)))?((((map__33390_33520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33390_33520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33390_33520):map__33390_33520);
var gline_33522 = cljs.core.get.call(null,map__33390_33521__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33523 = cljs.core.get.call(null,map__33390_33521__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33524 = cljs.core.get.call(null,map__33390_33521__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33522], null),cljs.core.fnil.call(null,((function (seq__33386_33516,chunk__33387_33517,count__33388_33518,i__33389_33519,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33390_33520,map__33390_33521__$1,gline_33522,gcol_33523,name_33524,vec__33383_33513,column_33514,column_info_33515,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33523], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33507,new cljs.core.Keyword(null,"col","col",-1959363084),column_33514,new cljs.core.Keyword(null,"name","name",1843675177),name_33524], null));
});})(seq__33386_33516,chunk__33387_33517,count__33388_33518,i__33389_33519,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33390_33520,map__33390_33521__$1,gline_33522,gcol_33523,name_33524,vec__33383_33513,column_33514,column_info_33515,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted))
,cljs.core.sorted_map.call(null)));

var G__33525 = seq__33386_33516;
var G__33526 = chunk__33387_33517;
var G__33527 = count__33388_33518;
var G__33528 = (i__33389_33519 + (1));
seq__33386_33516 = G__33525;
chunk__33387_33517 = G__33526;
count__33388_33518 = G__33527;
i__33389_33519 = G__33528;
continue;
} else {
var temp__4657__auto___33529__$1 = cljs.core.seq.call(null,seq__33386_33516);
if(temp__4657__auto___33529__$1){
var seq__33386_33530__$1 = temp__4657__auto___33529__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33386_33530__$1)){
var c__28978__auto___33531 = cljs.core.chunk_first.call(null,seq__33386_33530__$1);
var G__33532 = cljs.core.chunk_rest.call(null,seq__33386_33530__$1);
var G__33533 = c__28978__auto___33531;
var G__33534 = cljs.core.count.call(null,c__28978__auto___33531);
var G__33535 = (0);
seq__33386_33516 = G__33532;
chunk__33387_33517 = G__33533;
count__33388_33518 = G__33534;
i__33389_33519 = G__33535;
continue;
} else {
var map__33392_33536 = cljs.core.first.call(null,seq__33386_33530__$1);
var map__33392_33537__$1 = ((((!((map__33392_33536 == null)))?((((map__33392_33536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33392_33536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33392_33536):map__33392_33536);
var gline_33538 = cljs.core.get.call(null,map__33392_33537__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33539 = cljs.core.get.call(null,map__33392_33537__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33540 = cljs.core.get.call(null,map__33392_33537__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33538], null),cljs.core.fnil.call(null,((function (seq__33386_33516,chunk__33387_33517,count__33388_33518,i__33389_33519,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33392_33536,map__33392_33537__$1,gline_33538,gcol_33539,name_33540,seq__33386_33530__$1,temp__4657__auto___33529__$1,vec__33383_33513,column_33514,column_info_33515,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33539], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33507,new cljs.core.Keyword(null,"col","col",-1959363084),column_33514,new cljs.core.Keyword(null,"name","name",1843675177),name_33540], null));
});})(seq__33386_33516,chunk__33387_33517,count__33388_33518,i__33389_33519,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33392_33536,map__33392_33537__$1,gline_33538,gcol_33539,name_33540,seq__33386_33530__$1,temp__4657__auto___33529__$1,vec__33383_33513,column_33514,column_info_33515,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted))
,cljs.core.sorted_map.call(null)));

var G__33541 = cljs.core.next.call(null,seq__33386_33530__$1);
var G__33542 = null;
var G__33543 = (0);
var G__33544 = (0);
seq__33386_33516 = G__33541;
chunk__33387_33517 = G__33542;
count__33388_33518 = G__33543;
i__33389_33519 = G__33544;
continue;
}
} else {
}
}
break;
}

var G__33545 = seq__33379_33509;
var G__33546 = chunk__33380_33510;
var G__33547 = count__33381_33511;
var G__33548 = (i__33382_33512 + (1));
seq__33379_33509 = G__33545;
chunk__33380_33510 = G__33546;
count__33381_33511 = G__33547;
i__33382_33512 = G__33548;
continue;
} else {
var temp__4657__auto___33549__$1 = cljs.core.seq.call(null,seq__33379_33509);
if(temp__4657__auto___33549__$1){
var seq__33379_33550__$1 = temp__4657__auto___33549__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33379_33550__$1)){
var c__28978__auto___33551 = cljs.core.chunk_first.call(null,seq__33379_33550__$1);
var G__33552 = cljs.core.chunk_rest.call(null,seq__33379_33550__$1);
var G__33553 = c__28978__auto___33551;
var G__33554 = cljs.core.count.call(null,c__28978__auto___33551);
var G__33555 = (0);
seq__33379_33509 = G__33552;
chunk__33380_33510 = G__33553;
count__33381_33511 = G__33554;
i__33382_33512 = G__33555;
continue;
} else {
var vec__33394_33556 = cljs.core.first.call(null,seq__33379_33550__$1);
var column_33557 = cljs.core.nth.call(null,vec__33394_33556,(0),null);
var column_info_33558 = cljs.core.nth.call(null,vec__33394_33556,(1),null);
var seq__33397_33559 = cljs.core.seq.call(null,column_info_33558);
var chunk__33398_33560 = null;
var count__33399_33561 = (0);
var i__33400_33562 = (0);
while(true){
if((i__33400_33562 < count__33399_33561)){
var map__33401_33563 = cljs.core._nth.call(null,chunk__33398_33560,i__33400_33562);
var map__33401_33564__$1 = ((((!((map__33401_33563 == null)))?((((map__33401_33563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33401_33563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401_33563):map__33401_33563);
var gline_33565 = cljs.core.get.call(null,map__33401_33564__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33566 = cljs.core.get.call(null,map__33401_33564__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33567 = cljs.core.get.call(null,map__33401_33564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33565], null),cljs.core.fnil.call(null,((function (seq__33397_33559,chunk__33398_33560,count__33399_33561,i__33400_33562,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33401_33563,map__33401_33564__$1,gline_33565,gcol_33566,name_33567,vec__33394_33556,column_33557,column_info_33558,seq__33379_33550__$1,temp__4657__auto___33549__$1,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33566], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33507,new cljs.core.Keyword(null,"col","col",-1959363084),column_33557,new cljs.core.Keyword(null,"name","name",1843675177),name_33567], null));
});})(seq__33397_33559,chunk__33398_33560,count__33399_33561,i__33400_33562,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33401_33563,map__33401_33564__$1,gline_33565,gcol_33566,name_33567,vec__33394_33556,column_33557,column_info_33558,seq__33379_33550__$1,temp__4657__auto___33549__$1,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted))
,cljs.core.sorted_map.call(null)));

var G__33568 = seq__33397_33559;
var G__33569 = chunk__33398_33560;
var G__33570 = count__33399_33561;
var G__33571 = (i__33400_33562 + (1));
seq__33397_33559 = G__33568;
chunk__33398_33560 = G__33569;
count__33399_33561 = G__33570;
i__33400_33562 = G__33571;
continue;
} else {
var temp__4657__auto___33572__$2 = cljs.core.seq.call(null,seq__33397_33559);
if(temp__4657__auto___33572__$2){
var seq__33397_33573__$1 = temp__4657__auto___33572__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33397_33573__$1)){
var c__28978__auto___33574 = cljs.core.chunk_first.call(null,seq__33397_33573__$1);
var G__33575 = cljs.core.chunk_rest.call(null,seq__33397_33573__$1);
var G__33576 = c__28978__auto___33574;
var G__33577 = cljs.core.count.call(null,c__28978__auto___33574);
var G__33578 = (0);
seq__33397_33559 = G__33575;
chunk__33398_33560 = G__33576;
count__33399_33561 = G__33577;
i__33400_33562 = G__33578;
continue;
} else {
var map__33403_33579 = cljs.core.first.call(null,seq__33397_33573__$1);
var map__33403_33580__$1 = ((((!((map__33403_33579 == null)))?((((map__33403_33579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33403_33579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33403_33579):map__33403_33579);
var gline_33581 = cljs.core.get.call(null,map__33403_33580__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33582 = cljs.core.get.call(null,map__33403_33580__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33583 = cljs.core.get.call(null,map__33403_33580__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33581], null),cljs.core.fnil.call(null,((function (seq__33397_33559,chunk__33398_33560,count__33399_33561,i__33400_33562,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33403_33579,map__33403_33580__$1,gline_33581,gcol_33582,name_33583,seq__33397_33573__$1,temp__4657__auto___33572__$2,vec__33394_33556,column_33557,column_info_33558,seq__33379_33550__$1,temp__4657__auto___33549__$1,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33582], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33507,new cljs.core.Keyword(null,"col","col",-1959363084),column_33557,new cljs.core.Keyword(null,"name","name",1843675177),name_33583], null));
});})(seq__33397_33559,chunk__33398_33560,count__33399_33561,i__33400_33562,seq__33379_33509,chunk__33380_33510,count__33381_33511,i__33382_33512,seq__33343_33405,chunk__33344_33406,count__33345_33407,i__33346_33408,map__33403_33579,map__33403_33580__$1,gline_33581,gcol_33582,name_33583,seq__33397_33573__$1,temp__4657__auto___33572__$2,vec__33394_33556,column_33557,column_info_33558,seq__33379_33550__$1,temp__4657__auto___33549__$1,vec__33376_33506,line_33507,columns_33508,seq__33343_33500__$1,temp__4657__auto___33499,inverted))
,cljs.core.sorted_map.call(null)));

var G__33584 = cljs.core.next.call(null,seq__33397_33573__$1);
var G__33585 = null;
var G__33586 = (0);
var G__33587 = (0);
seq__33397_33559 = G__33584;
chunk__33398_33560 = G__33585;
count__33399_33561 = G__33586;
i__33400_33562 = G__33587;
continue;
}
} else {
}
}
break;
}

var G__33588 = cljs.core.next.call(null,seq__33379_33550__$1);
var G__33589 = null;
var G__33590 = (0);
var G__33591 = (0);
seq__33379_33509 = G__33588;
chunk__33380_33510 = G__33589;
count__33381_33511 = G__33590;
i__33382_33512 = G__33591;
continue;
}
} else {
}
}
break;
}

var G__33592 = cljs.core.next.call(null,seq__33343_33500__$1);
var G__33593 = null;
var G__33594 = (0);
var G__33595 = (0);
seq__33343_33405 = G__33592;
chunk__33344_33406 = G__33593;
count__33345_33407 = G__33594;
i__33346_33408 = G__33595;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1509738653653
