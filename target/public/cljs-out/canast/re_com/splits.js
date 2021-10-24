// Compiled by ClojureScript 1.10.844 {}
goog.provide('re_com.splits');
goog.require('cljs.core');
goog.require('re_com.config');
goog.require('re_com.debug');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizontal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_com.splits.drag_handle = (function re_com$splits$drag_handle(orientation,over_QMARK_,parts){
var vertical_QMARK_ = cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",color].join('');
var flex_flow = [((vertical_QMARK_)?"row":"column")," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_flow_style.call(null,flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle-bar-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-1","handle-bar-1",-1884678917),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-1","handle-bar-1",-1884678917),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-1","handle-bar-1",-1884678917),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-",((vertical_QMARK_)?"v":"h"),"-split-handle-bar-2 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-2","handle-bar-2",-77909241),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-2","handle-bar-2",-77909241),new cljs.core.Keyword(null,"style","style",-496642736)], null)))], null),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-bar-2","handle-bar-2",-77909241),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)))], null)], null);
});
re_com.splits.hv_split_parts_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split",new cljs.core.Keyword(null,"impl","impl",1677848700),"[h-split]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-left",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"First (i.e. left) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-splitter",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter between panels."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-handle",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle-bar-1","handle-bar-1",-1884678917),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-handle-bar-1",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle's first bar."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle-bar-2","handle-bar-2",-77909241),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-handle-bar-2",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle's second bar."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-h-split-right",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Second (i.e. right) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split",new cljs.core.Keyword(null,"impl","impl",1677848700),"[v-split]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-top",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"First (i.e. top) panel of the split."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-splitter",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter between panels."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle","handle",1538948854),new cljs.core.Keyword(null,"level","level",1290497552),(2),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-handle",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle-bar-1","handle-bar-1",-1884678917),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-handle-bar-1",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle's first bar."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"handle-bar-2","handle-bar-2",-77909241),new cljs.core.Keyword(null,"level","level",1290497552),(3),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-handle-bar-2",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"The splitter handle's second bar."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"level","level",1290497552),(1),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-v-split-bottom",new cljs.core.Keyword(null,"impl","impl",1677848700),"[:div]",new cljs.core.Keyword(null,"notes","notes",-1039600523),"Second (i.e. bottom) panel of the split."], null)], null):null);
re_com.splits.hv_split_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),re_com.splits.hv_split_parts_desc)):null);
re_com.splits.hv_split_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the left (or top) panel"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the right (or bottom) panel"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"applied to the outer container of the two panels. Equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"width of the outer container of the two panels. A CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"height of the outer container of the two panels. A CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"split-is-px?","split-is-px?",-1004040134),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":initial-split"], null)," is interpreted to be a fixed px value, otherwise a percentage value"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(50),new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the initial size of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null),". Subject to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":split-is-px?"], null),", it is either the initial split percentage for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null)," (can be double value or string with/without percentage sign) or a fixed px value"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user moves the splitter bar (on mouse up, not on each mouse move). Given the new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null)," percentage split"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the splitter"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the margin around the panels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the outer container)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the outer container)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_.call(null,re_com.splits.hv_split_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null):null);
/**
 * Returns markup for a horizontal layout component
 */
re_com.splits.h_split = (function re_com$splits$h_split(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20385 = arguments.length;
var i__4772__auto___20386 = (0);
while(true){
if((i__4772__auto___20386 < len__4771__auto___20385)){
args__4777__auto__.push((arguments[i__4772__auto___20386]));

var G__20387 = (i__4772__auto___20386 + (1));
i__4772__auto___20386 = G__20387;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__20381){
var map__20382 = p__20381;
var map__20382__$1 = cljs.core.__destructure_map.call(null,map__20382);
var args = map__20382__$1;
var split_is_px_QMARK_ = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"split-is-px?","split-is-px?",-1004040134));
var height = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var initial_split = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var on_split_change = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var width = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var size = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var container_id = cljs.core.gensym.call(null,"h-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});
var calc_perc = (function (mouse_x){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
if(cljs.core.truth_(split_is_px_QMARK_)){
return relative_x;
} else {
return (100.0 * (relative_x / c_width));
}
});
var _LT_html_GT__QMARK_ = (function (p1__20379_SHARP_){
return cljs.core._EQ_.call(null,p1__20379_SHARP_,document.documentElement);
});
var mouseout = (function (event){
if(_LT_html_GT__QMARK_.call(null,event.relatedTarget)){
return stop_drag.call(null);
} else {
return null;
}
});
var mousemove = (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientX));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag.call(null);

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove.call(null,event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout.call(null,event);

return null;
})], null):null),re_com.debug.__GT_attr.call(null,args),attr);
});
var make_panel_attrs = (function (class$,style,attr,in_drag_QMARK_,percentage){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,(cljs.core.truth_(split_is_px_QMARK_)?(((percentage > (0)))?["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"px"].join(''):"1 1 0px"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join(''))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null),style)], null),attr);
});
var make_splitter_attrs = (function (class$,style,attr){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown.call(null,event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split.call(null);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split.call(null);

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null),style)], null),attr);
});
return (function() { 
var re_com$splits$h_split_render__delegate = function (p__20383){
var map__20384 = p__20383;
var map__20384__$1 = cljs.core.__destructure_map.call(null,map__20384);
var _splitter_size = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var parts = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var _size = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var src__$1 = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _height = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__20384__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,["rc-h-split-top rc-h-split-left ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,["rc-h-split-splitter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref.call(null,over_QMARK_),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,["rc-h-split-bottom rc-h-split-right ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.deref.call(null,dragging_QMARK_),(cljs.core.truth_(split_is_px_QMARK_)?(- cljs.core.deref.call(null,split_perc)):((100) - cljs.core.deref.call(null,split_perc)))),panel_2], null)], null);
};
var re_com$splits$h_split_render = function (var_args){
var p__20383 = null;
if (arguments.length > 0) {
var G__20388__i = 0, G__20388__a = new Array(arguments.length -  0);
while (G__20388__i < G__20388__a.length) {G__20388__a[G__20388__i] = arguments[G__20388__i + 0]; ++G__20388__i;}
  p__20383 = new cljs.core.IndexedSeq(G__20388__a,0,null);
} 
return re_com$splits$h_split_render__delegate.call(this,p__20383);};
re_com$splits$h_split_render.cljs$lang$maxFixedArity = 0;
re_com$splits$h_split_render.cljs$lang$applyTo = (function (arglist__20389){
var p__20383 = cljs.core.seq(arglist__20389);
return re_com$splits$h_split_render__delegate(p__20383);
});
re_com$splits$h_split_render.cljs$core$IFn$_invoke$arity$variadic = re_com$splits$h_split_render__delegate;
return re_com$splits$h_split_render;
})()
;
}
}));

(re_com.splits.h_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.splits.h_split.cljs$lang$applyTo = (function (seq20380){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20380));
}));

/**
 * Returns markup for a vertical layout component
 */
re_com.splits.v_split = (function re_com$splits$v_split(var_args){
var args__4777__auto__ = [];
var len__4771__auto___20396 = arguments.length;
var i__4772__auto___20397 = (0);
while(true){
if((i__4772__auto___20397 < len__4771__auto___20396)){
args__4777__auto__.push((arguments[i__4772__auto___20397]));

var G__20398 = (i__4772__auto___20397 + (1));
i__4772__auto___20397 = G__20398;
continue;
} else {
}
break;
}

var argseq__4778__auto__ = ((((0) < args__4777__auto__.length))?(new cljs.core.IndexedSeq(args__4777__auto__.slice((0)),(0),null)):null);
return re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__4778__auto__);
});

(re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__20392){
var map__20393 = p__20392;
var map__20393__$1 = cljs.core.__destructure_map.call(null,map__20393);
var args = map__20393__$1;
var split_is_px_QMARK_ = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"split-is-px?","split-is-px?",-1004040134));
var height = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
var initial_split = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var on_split_change = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var width = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var size = cljs.core.get.call(null,map__20393__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var or__4160__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args));
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
var container_id = cljs.core.gensym.call(null,"v-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});
var calc_perc = (function (mouse_y){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
if(cljs.core.truth_(split_is_px_QMARK_)){
return relative_y;
} else {
return (100.0 * (relative_y / c_height));
}
});
var _LT_html_GT__QMARK_ = (function (p1__20390_SHARP_){
return cljs.core._EQ_.call(null,p1__20390_SHARP_,document.documentElement);
});
var mouseout = (function (event){
if(_LT_html_GT__QMARK_.call(null,event.relatedTarget)){
return stop_drag.call(null);
} else {
return null;
}
});
var mousemove = (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientY));
});
var mousedown = (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});
var mouseover_split = (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});
var mouseout_split = (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});
var make_container_attrs = (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (event){
stop_drag.call(null);

return null;
}),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),(function (event){
mousemove.call(null,event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout.call(null,event);

return null;
})], null):null),re_com.debug.__GT_attr.call(null,args),attr);
});
var make_panel_attrs = (function (class$,style,attr,in_drag_QMARK_,percentage){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,(cljs.core.truth_(split_is_px_QMARK_)?(((percentage > (0)))?["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage),"px"].join(''):"1 1 0px"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join(''))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null),style)], null),attr);
});
var make_splitter_attrs = (function (class$,style,attr){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (event){
mousedown.call(null,event);

return null;
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
mouseover_split.call(null);

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
mouseout_split.call(null);

return null;
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null),style)], null),attr);
});
return (function() { 
var re_com$splits$v_split_render__delegate = function (p__20394){
var map__20395 = p__20394;
var map__20395__$1 = cljs.core.__destructure_map.call(null,map__20395);
var _splitter_size = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var parts = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var _size = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var src__$1 = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var _height = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__20395__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,["rc-v-split-top ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,["rc-v-split-splitter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splitter","splitter",-1246750412),new cljs.core.Keyword(null,"attr","attr",-604132353)], null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,over_QMARK_),parts], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,["rc-v-split-bottom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"class","class",-2030961996)], null)))].join(''),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"style","style",-496642736)], null)),cljs.core.get_in.call(null,parts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.deref.call(null,dragging_QMARK_),(cljs.core.truth_(split_is_px_QMARK_)?(- cljs.core.deref.call(null,split_perc)):((100) - cljs.core.deref.call(null,split_perc)))),panel_2], null)], null);
};
var re_com$splits$v_split_render = function (var_args){
var p__20394 = null;
if (arguments.length > 0) {
var G__20399__i = 0, G__20399__a = new Array(arguments.length -  0);
while (G__20399__i < G__20399__a.length) {G__20399__a[G__20399__i] = arguments[G__20399__i + 0]; ++G__20399__i;}
  p__20394 = new cljs.core.IndexedSeq(G__20399__a,0,null);
} 
return re_com$splits$v_split_render__delegate.call(this,p__20394);};
re_com$splits$v_split_render.cljs$lang$maxFixedArity = 0;
re_com$splits$v_split_render.cljs$lang$applyTo = (function (arglist__20400){
var p__20394 = cljs.core.seq(arglist__20400);
return re_com$splits$v_split_render__delegate(p__20394);
});
re_com$splits$v_split_render.cljs$core$IFn$_invoke$arity$variadic = re_com$splits$v_split_render__delegate;
return re_com$splits$v_split_render;
})()
;
}
}));

(re_com.splits.v_split.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.splits.v_split.cljs$lang$applyTo = (function (seq20391){
var self__4759__auto__ = this;
return self__4759__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20391));
}));

