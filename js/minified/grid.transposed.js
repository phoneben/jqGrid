!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],e):e(jQuery)}(function(u){"use strict";u.jgrid.extend({transposeSetup:function(s,e){var i=[],d=[],l=!1,c=u.extend({},e||{});return this.each(function(){for(var e,r,a=Object.keys(s[c.baseindex]),o=0;o<a.length;o++){r=0,(e={}).col_name=a[o],l||i.push({name:"col_name"}),r++;for(var t=0;t<s.length;t++){var n=s[t];e[c.nameprefix+r]=n[a[o]],l||i.push({name:c.nameprefix+r,label:c.labelprefix+r}),r++}l=!0,d.push(e)}}),{colModel:i,rows:d}},jqTranspose:function(a,i,d,o){return i=u.extend({nameprefix:"col",labelprefix:"value ",baseindex:0,beforeCreateGrid:null,RowAsHeader:0,loadMsg:!1},i||{}),this.each(function(){var s=this,e=d&&d.regional?d.regional:"en";function r(e,r){u.isArray(e)||(e=[]);var a=jQuery(s).jqGrid("transposeSetup",e,i);if(u.jgrid.isFunction(i.beforeCreateGrid)&&i.beforeCreateGrid.call(s,a,e),!1!==r.RowAsHeader&&0<=r.RowAsHeader&&a.rows.length&&r.RowAsHeader<a.rows.length){var o,t=a.rows[r.RowAsHeader],n=0;for(o in t)t.hasOwnProperty(o)&&(a.colModel[n].label=t[o]),n++;a.rows.splice(r.RowAsHeader,1)}r=u.jgrid.from.call(s,a.rows);jQuery(s).jqGrid(u.extend(!0,{datastr:r.select(),datatype:"jsonstring",colModel:a.colModel,jsonReader:{repeatitems:!1},viewrecords:!0},d||{})),i.loadMsg&&u(".loading_pivot").remove()}i.loadMsg&&u("<div class='loading_pivot ui-state-default ui-state-active row'>"+u.jgrid.getRegional(s,"regional."+e+".defaults.loadtext")+"</div>").insertBefore(s).show(),"string"==typeof a?u.ajax(u.extend({url:a,dataType:"json",success:function(e){r(u.jgrid.getAccessor(e,o&&o.reader?o.reader:"rows"))}},o||{})):r(a)})}})});