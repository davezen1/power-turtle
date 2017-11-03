// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.canvas.raster_canvas');
goog.require('cljs.core');
goog.require('power_turtle.api.raster');
goog.require('reagent.core');
goog.require('reagent.dom');
if(typeof power_turtle.view.canvas.raster_canvas.canvas !== 'undefined'){
} else {
power_turtle.view.canvas.raster_canvas.canvas = cljs.core.atom.call(null,null);
}
power_turtle.view.canvas.raster_canvas.pixel_width = (7);
power_turtle.view.canvas.raster_canvas.pixel_height = (4);
power_turtle.view.canvas.raster_canvas.redraw = (function power_turtle$view$canvas$raster_canvas$redraw(){
if(cljs.core.truth_(cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas))){
var ctx = cljs.core.deref.call(null,power_turtle.view.canvas.raster_canvas.canvas).getContext("2d");
var seq__37423 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__37428 = null;
var count__37429 = (0);
var i__37430 = (0);
while(true){
if((i__37430 < count__37429)){
var x = cljs.core._nth.call(null,chunk__37428,i__37430);
var seq__37431_37447 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__37432_37448 = null;
var count__37433_37449 = (0);
var i__37434_37450 = (0);
while(true){
if((i__37434_37450 < count__37433_37449)){
var y_37451 = cljs.core._nth.call(null,chunk__37432_37448,i__37434_37450);
var vec__37435_37452 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_37451], null)));
var r_37453 = cljs.core.nth.call(null,vec__37435_37452,(0),null);
var g_37454 = cljs.core.nth.call(null,vec__37435_37452,(1),null);
var b_37455 = cljs.core.nth.call(null,vec__37435_37452,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_37453),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_37454),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_37455),")"].join('');

ctx.fillRect((x * (7)),(y_37451 * (4)),(7),(4));

var G__37456 = seq__37431_37447;
var G__37457 = chunk__37432_37448;
var G__37458 = count__37433_37449;
var G__37459 = (i__37434_37450 + (1));
seq__37431_37447 = G__37456;
chunk__37432_37448 = G__37457;
count__37433_37449 = G__37458;
i__37434_37450 = G__37459;
continue;
} else {
var temp__4657__auto___37460 = cljs.core.seq.call(null,seq__37431_37447);
if(temp__4657__auto___37460){
var seq__37431_37461__$1 = temp__4657__auto___37460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37431_37461__$1)){
var c__28978__auto___37462 = cljs.core.chunk_first.call(null,seq__37431_37461__$1);
var G__37463 = cljs.core.chunk_rest.call(null,seq__37431_37461__$1);
var G__37464 = c__28978__auto___37462;
var G__37465 = cljs.core.count.call(null,c__28978__auto___37462);
var G__37466 = (0);
seq__37431_37447 = G__37463;
chunk__37432_37448 = G__37464;
count__37433_37449 = G__37465;
i__37434_37450 = G__37466;
continue;
} else {
var y_37467 = cljs.core.first.call(null,seq__37431_37461__$1);
var vec__37438_37468 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_37467], null)));
var r_37469 = cljs.core.nth.call(null,vec__37438_37468,(0),null);
var g_37470 = cljs.core.nth.call(null,vec__37438_37468,(1),null);
var b_37471 = cljs.core.nth.call(null,vec__37438_37468,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_37469),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_37470),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_37471),")"].join('');

ctx.fillRect((x * (7)),(y_37467 * (4)),(7),(4));

var G__37472 = cljs.core.next.call(null,seq__37431_37461__$1);
var G__37473 = null;
var G__37474 = (0);
var G__37475 = (0);
seq__37431_37447 = G__37472;
chunk__37432_37448 = G__37473;
count__37433_37449 = G__37474;
i__37434_37450 = G__37475;
continue;
}
} else {
}
}
break;
}

var G__37476 = seq__37423;
var G__37477 = chunk__37428;
var G__37478 = count__37429;
var G__37479 = (i__37430 + (1));
seq__37423 = G__37476;
chunk__37428 = G__37477;
count__37429 = G__37478;
i__37430 = G__37479;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37423);
if(temp__4657__auto__){
var seq__37423__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37423__$1)){
var c__28978__auto__ = cljs.core.chunk_first.call(null,seq__37423__$1);
var G__37480 = cljs.core.chunk_rest.call(null,seq__37423__$1);
var G__37481 = c__28978__auto__;
var G__37482 = cljs.core.count.call(null,c__28978__auto__);
var G__37483 = (0);
seq__37423 = G__37480;
chunk__37428 = G__37481;
count__37429 = G__37482;
i__37430 = G__37483;
continue;
} else {
var x = cljs.core.first.call(null,seq__37423__$1);
var seq__37424_37484 = cljs.core.seq.call(null,cljs.core.range.call(null,(40)));
var chunk__37425_37485 = null;
var count__37426_37486 = (0);
var i__37427_37487 = (0);
while(true){
if((i__37427_37487 < count__37426_37486)){
var y_37488 = cljs.core._nth.call(null,chunk__37425_37485,i__37427_37487);
var vec__37441_37489 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_37488], null)));
var r_37490 = cljs.core.nth.call(null,vec__37441_37489,(0),null);
var g_37491 = cljs.core.nth.call(null,vec__37441_37489,(1),null);
var b_37492 = cljs.core.nth.call(null,vec__37441_37489,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_37490),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_37491),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_37492),")"].join('');

ctx.fillRect((x * (7)),(y_37488 * (4)),(7),(4));

var G__37493 = seq__37424_37484;
var G__37494 = chunk__37425_37485;
var G__37495 = count__37426_37486;
var G__37496 = (i__37427_37487 + (1));
seq__37424_37484 = G__37493;
chunk__37425_37485 = G__37494;
count__37426_37486 = G__37495;
i__37427_37487 = G__37496;
continue;
} else {
var temp__4657__auto___37497__$1 = cljs.core.seq.call(null,seq__37424_37484);
if(temp__4657__auto___37497__$1){
var seq__37424_37498__$1 = temp__4657__auto___37497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37424_37498__$1)){
var c__28978__auto___37499 = cljs.core.chunk_first.call(null,seq__37424_37498__$1);
var G__37500 = cljs.core.chunk_rest.call(null,seq__37424_37498__$1);
var G__37501 = c__28978__auto___37499;
var G__37502 = cljs.core.count.call(null,c__28978__auto___37499);
var G__37503 = (0);
seq__37424_37484 = G__37500;
chunk__37425_37485 = G__37501;
count__37426_37486 = G__37502;
i__37427_37487 = G__37503;
continue;
} else {
var y_37504 = cljs.core.first.call(null,seq__37424_37498__$1);
var vec__37444_37505 = power_turtle.api.raster.color_map.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,power_turtle.api.raster.raster),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_37504], null)));
var r_37506 = cljs.core.nth.call(null,vec__37444_37505,(0),null);
var g_37507 = cljs.core.nth.call(null,vec__37444_37505,(1),null);
var b_37508 = cljs.core.nth.call(null,vec__37444_37505,(2),null);
ctx.fillStyle = ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_37506),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_37507),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_37508),")"].join('');

ctx.fillRect((x * (7)),(y_37504 * (4)),(7),(4));

var G__37509 = cljs.core.next.call(null,seq__37424_37498__$1);
var G__37510 = null;
var G__37511 = (0);
var G__37512 = (0);
seq__37424_37484 = G__37509;
chunk__37425_37485 = G__37510;
count__37426_37486 = G__37511;
i__37427_37487 = G__37512;
continue;
}
} else {
}
}
break;
}

var G__37513 = cljs.core.next.call(null,seq__37423__$1);
var G__37514 = null;
var G__37515 = (0);
var G__37516 = (0);
seq__37423 = G__37513;
chunk__37428 = G__37514;
count__37429 = G__37515;
i__37430 = G__37516;
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
});
if(typeof power_turtle.view.canvas.raster_canvas.init !== 'undefined'){
} else {
power_turtle.view.canvas.raster_canvas.init = cljs.core.add_watch.call(null,power_turtle.api.raster.raster,new cljs.core.Keyword(null,"monitor","monitor",459609397),(function (_,___$1,___$2,___$3){
return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}));
}
power_turtle.view.canvas.raster_canvas.raster_canvas = (function power_turtle$view$canvas$raster_canvas$raster_canvas(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"raster-canvas",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_render_raster_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((40) * (7)),new cljs.core.Keyword(null,"height","height",1025178622),((40) * (4)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_did_mount(this$){
cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,reagent.dom.dom_node.call(null,this$));

return power_turtle.view.canvas.raster_canvas.redraw.call(null);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function power_turtle$view$canvas$raster_canvas$raster_canvas_$_raster_canvas_will_unmount(){
return cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.raster_canvas.canvas,null);
})], null));
});

//# sourceMappingURL=raster_canvas.js.map?rel=1509738658319
