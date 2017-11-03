// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.api.html');
goog.require('cljs.core');
goog.require('power_turtle.view.toolbar');
goog.require('power_turtle.view.canvas.html_canvas');
power_turtle.api.html.add_action = (function power_turtle$api$html$add_action(label,f){
cljs.core.swap_BANG_.call(null,power_turtle.view.toolbar.actions,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label,f], null));

return null;
});
power_turtle.api.html.html = (function power_turtle$api$html$html(x){
cljs.core.reset_BANG_.call(null,power_turtle.view.canvas.html_canvas.component,x);

return null;
});

//# sourceMappingURL=html.js.map?rel=1509738667911
