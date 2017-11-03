// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_console.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clairvoyant.core');
goog.require('re_frame_tracer.core');
goog.require('re_console.app');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-console","init-console",1925118851),(function re_console$handlers$add_console(db,p__35766){
var vec__35767 = p__35766;
var _ = cljs.core.nth.call(null,vec__35767,(0),null);
var console_key = cljs.core.nth.call(null,vec__35767,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__35767,(2),null);
return re_console.app.init_console.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-instance","add-console-instance",9095274),(function re_console$handlers$add_console(db,p__35770){
var vec__35771 = p__35770;
var _ = cljs.core.nth.call(null,vec__35771,(0),null);
var console_key = cljs.core.nth.call(null,vec__35771,(1),null);
var instance = cljs.core.nth.call(null,vec__35771,(2),null);
return re_console.app.add_console_instance.call(null,db,console_key,instance);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),(function re_console$handlers$focus_console_editor(db,p__35774){
var vec__35775 = p__35774;
var _ = cljs.core.nth.call(null,vec__35775,(0),null);
var console_key = cljs.core.nth.call(null,vec__35775,(1),null);
var temp__4657__auto___35778 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___35778)){
var instance_35779 = temp__4657__auto___35778;
instance_35779.focus();
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-theme","set-console-theme",-659914150),(function re_console$handlers$set_console_theme(db,p__35780){
var vec__35781 = p__35780;
var _ = cljs.core.nth.call(null,vec__35781,(0),null);
var console_key = cljs.core.nth.call(null,vec__35781,(1),null);
var theme = cljs.core.nth.call(null,vec__35781,(2),null);
var temp__4657__auto___35784 = re_console.app.console.call(null,db,console_key);
if(cljs.core.truth_(temp__4657__auto___35784)){
var instance_35785 = temp__4657__auto___35784;
instance_35785.setOption("theme",theme);
} else {
}

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-items","clear-console-items",-1821518386),(function re_console$handlers$clear_console_items(db,p__35786){
var vec__35787 = p__35786;
var _ = cljs.core.nth.call(null,vec__35787,(0),null);
var console_key = cljs.core.nth.call(null,vec__35787,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-console-items","reset-console-items",-1878088383),(function re_console$handlers$reset_console_items(db,p__35790){
var vec__35791 = p__35790;
var _ = cljs.core.nth.call(null,vec__35791,(0),null);
var console_key = cljs.core.nth.call(null,vec__35791,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.reset_console_items.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-item","add-console-item",-1440738899),(function re_console$handlers$add_console_item(db,p__35794){
var vec__35795 = p__35794;
var _ = cljs.core.nth.call(null,vec__35795,(0),null);
var console_key = cljs.core.nth.call(null,vec__35795,(1),null);
var item = cljs.core.nth.call(null,vec__35795,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-items","add-console-items",-1014410013),(function re_console$handlers$add_console_items(db,p__35798){
var vec__35799 = p__35798;
var _ = cljs.core.nth.call(null,vec__35799,(0),null);
var console_key = cljs.core.nth.call(null,vec__35799,(1),null);
var items = cljs.core.nth.call(null,vec__35799,(2),null);
return re_console.app.add_console_item.call(null,db,console_key,items);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-input","add-console-input",-277003986),(function re_console$handlers$add_console_input(db,p__35802){
var vec__35803 = p__35802;
var _ = cljs.core.nth.call(null,vec__35803,(0),null);
var console_key = cljs.core.nth.call(null,vec__35803,(1),null);
var input = cljs.core.nth.call(null,vec__35803,(2),null);
var ns = cljs.core.nth.call(null,vec__35803,(3),null);
return re_console.app.add_console_input.call(null,db,console_key,input,ns);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-result","add-console-result",1768771531),(function re_console$handlers$add_console_result(db,p__35806){
var vec__35807 = p__35806;
var _ = cljs.core.nth.call(null,vec__35807,(0),null);
var console_key = cljs.core.nth.call(null,vec__35807,(1),null);
var error_QMARK_ = cljs.core.nth.call(null,vec__35807,(2),null);
var value = cljs.core.nth.call(null,vec__35807,(3),null);
return re_console.app.add_console_result.call(null,db,console_key,error_QMARK_,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-console-log","add-console-log",-371208070),(function re_console$handlers$add_console_log(db,p__35810){
var vec__35811 = p__35810;
var _ = cljs.core.nth.call(null,vec__35811,(0),null);
var console_key = cljs.core.nth.call(null,vec__35811,(1),null);
var item = cljs.core.nth.call(null,vec__35811,(2),null);
return re_console.app.add_console_log.call(null,db,console_key,item);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-set-text","console-set-text",860354388),(function re_console$handlers$console_set_text(db,p__35814){
var vec__35815 = p__35814;
var _ = cljs.core.nth.call(null,vec__35815,(0),null);
var console_key = cljs.core.nth.call(null,vec__35815,(1),null);
var text = cljs.core.nth.call(null,vec__35815,(2),null);
return re_console.app.set_console_text.call(null,db,console_key,text);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-up","console-go-up",50535611),(function re_console$handlers$console_go_up(db,p__35818){
var vec__35819 = p__35818;
var _ = cljs.core.nth.call(null,vec__35819,(0),null);
var console_key = cljs.core.nth.call(null,vec__35819,(1),null);
return re_console.app.console_go_up.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"console-go-down","console-go-down",-1045916631),(function re_console$handlers$console_go_down(db,p__35822){
var vec__35823 = p__35822;
var _ = cljs.core.nth.call(null,vec__35823,(0),null);
var console_key = cljs.core.nth.call(null,vec__35823,(1),null);
return re_console.app.console_go_down.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-queued-forms","set-console-queued-forms",-419528812),(function re_console$handlers$set_queued_forms(db,p__35826){
var vec__35827 = p__35826;
var _ = cljs.core.nth.call(null,vec__35827,(0),null);
var console_key = cljs.core.nth.call(null,vec__35827,(1),null);
var forms = cljs.core.nth.call(null,vec__35827,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_queued_forms.call(null,db,console_key,forms);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"clear-console-queued-forms","clear-console-queued-forms",1162162382),(function re_console$handlers$clear_console_queued_forms(db,p__35830){
var vec__35831 = p__35830;
var _ = cljs.core.nth.call(null,vec__35831,(0),null);
var console_key = cljs.core.nth.call(null,vec__35831,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.clear_console_queued_forms.call(null,db,console_key);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"on-eval-complete","on-eval-complete",436163213),(function re_console$handlers$on_eval_complete(db,p__35834){
var vec__35835 = p__35834;
var _ = cljs.core.nth.call(null,vec__35835,(0),null);
var console_key = cljs.core.nth.call(null,vec__35835,(1),null);
var result_map = cljs.core.nth.call(null,vec__35835,(2),null);
return re_console.app.on_eval_complete.call(null,db,console_key,result_map);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-eval-opts","set-console-eval-opts",1878351193),(function re_console$handlers$set_console_eval_opts(db,p__35838){
var vec__35839 = p__35838;
var _ = cljs.core.nth.call(null,vec__35839,(0),null);
var console_key = cljs.core.nth.call(null,vec__35839,(1),null);
var eval_opts = cljs.core.nth.call(null,vec__35839,(2),null);
return re_console.app.set_console_eval_opts.call(null,db,console_key,eval_opts);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-mode","set-console-mode",158101301),(function re_console$handlers$set_console_mode(db,p__35842){
var vec__35843 = p__35842;
var _ = cljs.core.nth.call(null,vec__35843,(0),null);
var console_key = cljs.core.nth.call(null,vec__35843,(1),null);
var mode = cljs.core.nth.call(null,vec__35843,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus-console-editor","focus-console-editor",-1919703490),console_key], null));

return re_console.app.set_console_mode.call(null,db,console_key,mode);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-frame-updated","set-console-frame-updated",-1984928832),(function re_console$handlers$set_console_frame_updated(db,p__35846){
var vec__35847 = p__35846;
var _ = cljs.core.nth.call(null,vec__35847,(0),null);
var console_key = cljs.core.nth.call(null,vec__35847,(1),null);
var value = cljs.core.nth.call(null,vec__35847,(2),null);
return re_console.app.set_console_frame_updated.call(null,db,console_key,value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-before-change","set-console-on-before-change",1713310062),(function re_console$handlers$set_console_on_before_change(db,p__35850){
var vec__35851 = p__35850;
var _ = cljs.core.nth.call(null,vec__35851,(0),null);
var console_key = cljs.core.nth.call(null,vec__35851,(1),null);
var on_before_change = cljs.core.nth.call(null,vec__35851,(2),null);
return re_console.app.set_console_on_before_change.call(null,db,console_key,on_before_change);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-console-on-after-change","set-console-on-after-change",713584618),(function re_console$handlers$set_console_on_after_change(db,p__35854){
var vec__35855 = p__35854;
var _ = cljs.core.nth.call(null,vec__35855,(0),null);
var console_key = cljs.core.nth.call(null,vec__35855,(1),null);
var on_after_change = cljs.core.nth.call(null,vec__35855,(2),null);
return re_console.app.set_console_on_after_change.call(null,db,console_key,on_after_change);
}));

//# sourceMappingURL=handlers.js.map?rel=1509738655881
