// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"console-created?","console-created?",468788326),(function (db,p__38043){
var vec__38044 = p__38043;
var _ = cljs.core.nth.call(null,vec__38044,(0),null);
var console_key = cljs.core.nth.call(null,vec__38044,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38044,_,console_key){
return (function (){
return re_console.app.console_created_QMARK_.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38044,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-items","get-console-items",-1702647473),(function (db,p__38047){
var vec__38048 = p__38047;
var _ = cljs.core.nth.call(null,vec__38048,(0),null);
var console_key = cljs.core.nth.call(null,vec__38048,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38048,_,console_key){
return (function (){
return re_console.app.console_items.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38048,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-mode","get-console-mode",204621505),(function (db,p__38051){
var vec__38052 = p__38051;
var _ = cljs.core.nth.call(null,vec__38052,(0),null);
var console_key = cljs.core.nth.call(null,vec__38052,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38052,_,console_key){
return (function (){
return re_console.app.console_mode.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38052,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-frame-updated","get-console-frame-updated",550276687),(function (db,p__38055){
var vec__38056 = p__38055;
var _ = cljs.core.nth.call(null,vec__38056,(0),null);
var console_key = cljs.core.nth.call(null,vec__38056,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38056,_,console_key){
return (function (){
return re_console.app.console_frame_updated.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38056,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-current-text","get-console-current-text",445390068),(function (db,p__38059){
var vec__38060 = p__38059;
var _ = cljs.core.nth.call(null,vec__38060,(0),null);
var console_key = cljs.core.nth.call(null,vec__38060,(1),null);
var idx = reagent.ratom.make_reaction.call(null,((function (vec__38060,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"hist-pos","hist-pos",64251178)], null));
});})(vec__38060,_,console_key))
);
var history = reagent.ratom.make_reaction.call(null,((function (idx,vec__38060,_,console_key){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"consoles","consoles",682114105),cljs.core.name.call(null,console_key),new cljs.core.Keyword(null,"history","history",-247395220)], null));
});})(idx,vec__38060,_,console_key))
);
return reagent.ratom.make_reaction.call(null,((function (idx,history,vec__38060,_,console_key){
return (function (){
var items = cljs.core.deref.call(null,history);
var pos = ((cljs.core.count.call(null,items) - cljs.core.deref.call(null,idx)) - (1));
return cljs.core.get.call(null,items,pos);
});})(idx,history,vec__38060,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console","get-console",349506720),(function (db,p__38063){
var vec__38064 = p__38063;
var _ = cljs.core.nth.call(null,vec__38064,(0),null);
var console_key = cljs.core.nth.call(null,vec__38064,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38064,_,console_key){
return (function (){
return re_console.app.console.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38064,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-count","queued-forms-count",1735821775),(function (db,p__38067){
var vec__38068 = p__38067;
var _ = cljs.core.nth.call(null,vec__38068,(0),null);
var console_key = cljs.core.nth.call(null,vec__38068,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38068,_,console_key){
return (function (){
return cljs.core.count.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key));
});})(vec__38068,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"queued-forms-empty?","queued-forms-empty?",-375471063),(function (db,p__38071){
var vec__38072 = p__38071;
var _ = cljs.core.nth.call(null,vec__38072,(0),null);
var console_key = cljs.core.nth.call(null,vec__38072,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38072,_,console_key){
return (function (){
return !(cljs.core.empty_QMARK_.call(null,re_console.app.queued_forms.call(null,cljs.core.deref.call(null,db),console_key)));
});})(vec__38072,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-eval-opts","get-console-eval-opts",2087577375),(function (db,p__38075){
var vec__38076 = p__38075;
var _ = cljs.core.nth.call(null,vec__38076,(0),null);
var console_key = cljs.core.nth.call(null,vec__38076,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38076,_,console_key){
return (function (){
return re_console.app.console_eval_opts.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38076,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-before-change","get-console-on-before-change",577618067),(function (db,p__38079){
var vec__38080 = p__38079;
var _ = cljs.core.nth.call(null,vec__38080,(0),null);
var console_key = cljs.core.nth.call(null,vec__38080,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38080,_,console_key){
return (function (){
return re_console.app.console_on_before_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38080,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-on-after-change","get-console-on-after-change",-1635241260),(function (db,p__38083){
var vec__38084 = p__38083;
var _ = cljs.core.nth.call(null,vec__38084,(0),null);
var console_key = cljs.core.nth.call(null,vec__38084,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38084,_,console_key){
return (function (){
return re_console.app.console_on_after_change.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38084,_,console_key))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-console-full-text","get-console-full-text",-1768204293),(function (db,p__38087){
var vec__38088 = p__38087;
var _ = cljs.core.nth.call(null,vec__38088,(0),null);
var console_key = cljs.core.nth.call(null,vec__38088,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__38088,_,console_key){
return (function (){
return re_console.app.console_full_text.call(null,cljs.core.deref.call(null,db),console_key);
});})(vec__38088,_,console_key))
);
}));

//# sourceMappingURL=subs.js.map?rel=1509738665000
