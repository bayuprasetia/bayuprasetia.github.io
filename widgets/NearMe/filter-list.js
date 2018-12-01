// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/filter-list.html":'\x3cdiv\x3e\r\n  \x3cul class\x3d"filter-list" data-dojo-attach-point\x3d"filterList"\x3e\x3c/ul\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./filter-list.html dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/on dijit/_WidgetsInTemplateMixin dojo/dom-class jimu/utils jimu/BaseWidget jimu/filterUtils jimu/dijit/FilterParameters esri/symbols/jsonUtils jimu/symbolUtils jimu/LayerInfos/LayerInfos jimu/FilterManager esri/request dojo/NodeList dojo/NodeList-dom".split(" "),function(q,r,l,f,g,k,n,t,m,u,v,w,x,y,p,z,A,B){return q([v,t],{name:"NearMeFilter",templateString:r,baseClass:"jimu-widget-nearme-filter",
_itemTemplate:'\x3cli class\x3d"filter-item" data-index\x3d"${index}"\x3e\x3cdiv class\x3d"header jimu-leading-padding1" \x3e\x3cspan class\x3d"arrow jimu-float-leading jimu-trailing-margin05" title\x3d"${toggleTip}" \x3e\x3c/span\x3e\x3cspan class\x3d"icon"\x3e\x3cimg src\x3d"${icon}" /\x3e\x3c/span\x3e\x3cspan class\x3d"icon symbolIcon" style\x3d"display:none;"\x3e\x3c/span\x3e\x3cspan class\x3d"item-title"\x3e${title}\x3c/span\x3e\x3cspan class\x3d"cando jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3cspan class\x3d"doing jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3cspan class\x3d"done jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"body"\x3e\x3cdiv class\x3d"parameters"\x3e\x3c/div\x3e\x3cspan class\x3d"jimu-btn apply jimu-float-trailing jimu-trailing-margin25"\x3e${apply}\x3c/span\x3e\x3c/div\x3e\x3c/li\x3e',
_layerTitleTemplate:'\x3cdiv class\x3d"esriCTGroupFilterLayerName"\x3e${layerTitle}\x3c/div\x3e',_store:null,totalAppliedFilters:0,postCreate:function(){this.inherited(arguments);this.totalAppliedFilters=0;this._updateClearAllButtonState();this.own(n(this.clearAllButton,"click",g.hitch(this,this._clearAllFilters)));this._store={};this.layerInfosObj=z.getInstanceSync();this.filterUtils=new w;this.filterManager=A.getInstance();var a=this.config.filters,b={},c=[];this.config.groupFiltersByLayer?(l.forEach(a,
function(a,d){b[a.layerId]||(b[a.layerId]=[],c.push(a.layerId));a.index=d;b[a.layerId].push(a)}),l.forEach(c,g.hitch(this,function(a){var d={layerTitle:this.layerInfosObj.getLayerInfoById(a).layerObject.name},d=g.replace(this._layerTitleTemplate,d,/\$\{([^\}]+)\}/ig),d=f.toDom(d);f.place(d,this.filterList);for(d=0;d<b[a].length;d++)this._addFilterInList(b[a][d],b[a][d].index)}))):l.forEach(a,g.hitch(this,function(a,b){this._addFilterInList(a,b)}))},_addFilterInList:function(a,b){var c=this.filterUtils.isAskForValues(a.filter),
e={icon:a.icon?u.processUrlInWidgetConfig(a.icon,this.folderUrl):this.folderUrl+"/css/images/default_task_icon.png",index:b,title:a.name,toggleTip:this.nls.toggleTip,hasValue:c?window.appInfo.isRunInMobile?"block !important":"":"none",isAskForValue:c,apply:g.getObject("jimuNls.common.apply",!1,window)||"Apply"};this._store[a.layerId]||(this._store[a.layerId]={mapFilterControls:{}});b=g.replace(this._itemTemplate,e,/\$\{([^\}]+)\}/ig);var d=f.toDom(b);f.place(d,this.filterList);if(a.symbol){b=k(".icon",
d);f.setStyle(b[0],"display","none");f.setStyle(b[1],"display","inline-block");var h=y.fromJson(a.symbol),l=a.symbol.url||a.symbol.imageData;l?(h.setWidth(16),h.setHeight(16)):h.setSize(16);h=l?p.createSymbolNode(h):p.createSymbolNode(h,{width:17,height:17});f.place(h,b[1])}this.own(k(".header",d).on("click",g.hitch(this,"enableFilter",d,a,e)));c?f.addClass(d,"has-ask-for-value"):f.addClass(d,"not-has-ask-for-value");"none"!==e.hasValue?(this.own(k(".arrow",d).on("click",g.hitch(this,"configFilter",
d,a))),this.own(k(".apply",d).on("click",g.hitch(this,"applyFilterValues",d,a))),f.addClass(d,"requesting"),this.configFilter(d,a,null,g.hitch(this,function(){this.config.collapse&&f.removeClass(d,"config-parameters");a.autoApplyWhenWidgetOpen&&this.enableFilter(d,a,e)}))):a.autoApplyWhenWidgetOpen&&this.enableFilter(d,a,e)},startup:function(){this.inherited(arguments);this.resize()},_getPriorityOfMapFilter:function(a){a=g.getObject(a+".mapFilterControls",!1,this._store);var b=0,c;for(c in a){var e=
a[c];e.priority>b&&(b=e.priority)}return b},_getMapFilterControl:function(a){a=g.getObject(a+".mapFilterControls",!1,this._store);var b=!0,c;for(c in a){var e=a[c];0<e.priority&&(b=!!e.enable)}return b},_setItemFilter:function(a,b,c,e){this._store[a]["filter_item_"+b]=c;c=this._getPriorityOfMapFilter(a);g.setObject(a+".mapFilterControls.filter_item_"+b,{enable:e,priority:c+1},this._store)},_removeItemFilter:function(a,b){delete this._store[a]["filter_item_"+b];delete this._store[a].mapFilterControls["filter_item_"+
b]},_getExpr:function(a){if(!this._store[a])return null;var b=[];a=this._store[a];for(var c in a){var e=a[c];e&&"mapFilterControls"!==c&&b.push("("+e+")")}return b.join(" AND ")},_bindMapUpdateEvents:function(a,b){n.once(this.map,"update-start",g.hitch(this,function(){f.addClass(a,"applying");f.removeClass(a,"applied")}));n.once(this.map,"update-end",g.hitch(this,function(){b?f.addClass(a,"applied"):f.removeClass(a,"applied");f.removeClass(a,"applying")}))},enableFilter:function(a,b,c){if(!f.hasClass(a,
"config-parameters")||a.filterParams&&a.filterParams.getFilterExpr())if(!c.isAskForValue||a.filterParams&&a.filterParams.getFilterExpr()){c=b.layerId;var e=f.getAttr(a,"data-index"),d=null,h=this.layerInfosObj.getLayerInfoById(c),d=f.hasClass(a,"applied");h.isShowInMap()&&h.isInScale()?this._bindMapUpdateEvents(a,d?!1:!0):d?f.removeClass(a,"applied"):f.addClass(a,"applied");h=null;d?(this._removeItemFilter(c,e),d=this._getExpr(c),h=this._getMapFilterControl(c),this.filterManager.applyWidgetFilter(c,
this.id,d,h),this.totalAppliedFilters--):(this._setItemFilter(c,e,a.filterParams?a.filterParams.getFilterExpr():b.filter.expr,b.enableMapFilter),d=this._getExpr(c),h=this._getMapFilterControl(c),this.filterManager.applyWidgetFilter(c,this.id,d,h),this.totalAppliedFilters++);this.filtersUpdated=!0;this._updateClearAllButtonState()}else this.configFilter(a,b)},configFilter:function(a,b,c,e){a.filterParams?(f.hasClass(a,"config-parameters")?(f.removeClass(a,"config-parameters"),this._changeItemTitleWidth(a,
window.appInfo.isRunInMobile?60:45)):(f.addClass(a,"config-parameters"),this._changeItemTitleWidth(a,60)),e&&e()):B({url:b.url,content:{f:"json"},handleAs:"json",callbackPrams:"callback"}).then(g.hitch(this,function(d){f.addClass(a,"config-parameters");f.removeClass(a,"requesting");var c=k(".parameters",a)[0];a.handles=[];a.filterParams=new x;var l=g.clone(b.filter),m=null;b.enableMapFilter&&(m=b.layerId);a.filterParams.build(b.url,d,l,m);this.own(n(a.filterParams,"change",g.hitch(this,function(b){b?
(k(".apply",a).removeClass("disable-apply"),a.expr=b):(delete a.expr,k(".apply",a).addClass("disable-apply"))})));a.expr=a.filterParams.getFilterExpr();a.expr?k(".apply",a).removeClass("disable-apply"):(delete a.expr,k(".apply",a).addClass("disable-apply"));a.filterParams.placeAt(c);this._changeItemTitleWidth(a,60);e&&e()}));c&&c.target&&c.stopPropagation()},applyFilterValues:function(a,b,c){var e=a.filterParams&&(a.expr||a.filterParams.getFilterExpr());if(e){a.expr=e;var e=b.layerId,d=f.getAttr(a,
"data-index"),g=this.layerInfosObj.getLayerInfoById(e);g.isShowInMap()&&g.isInScale()?this._bindMapUpdateEvents(a,!0):f.addClass(a,"applied");this._setItemFilter(e,d,a.expr,b.enableMapFilter);a=this._getExpr(e);b=this._getMapFilterControl(e);this.filterManager.applyWidgetFilter(e,this.id,a,b);this.filtersUpdated=!0;this.totalAppliedFilters++;this._updateClearAllButtonState()}c.stopPropagation()},resize:function(){this.inherited(arguments);this._changeItemTitleWidth(this.domNode,window.appInfo.isRunInMobile?
60:45)},_changeItemTitleWidth:function(a,b){var c=k(".header",a)[0];c&&(b=f.getContentBox(c).w-b,0<b&&k(".header .item-title",a).style({maxWidth:b+"px"}))},destroy:function(){k(".filter-item",this.filterList).forEach(function(a){delete a.filterParams;delete a.expr});if(this._store)for(var a in this._store)a&&this.filterManager.applyWidgetFilter(a,this.id,"",null);this.inherited(arguments)},filterListShown:function(){this.filtersUpdated=!1},_updateClearAllButtonState:function(){0<this.totalAppliedFilters?
m.add(this.clearAllButton,"esriCTClearAllFilterActive"):m.remove(this.clearAllButton,"esriCTClearAllFilterActive")},_clearAllFilters:function(){if(m.contains(this.clearAllButton,"esriCTClearAllFilterActive")&&this.filterList){var a=k(".applied",this.filterList);l.forEach(a,function(a){(a=k(".header",a))&&0<a.length&&a[0].click()});this._updateClearAllButtonState()}}})});