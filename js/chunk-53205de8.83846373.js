(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53205de8"],{"00ef":function(t,a,n){"use strict";var r=n("a96a"),e=n.n(r);e.a},"31f4":function(t,a,n){"use strict";var r=n("59fa"),e=n.n(r);e.a},4935:function(t,a,n){"use strict";n.r(a);var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"wrap"}},[n("line-chart-upgrade"),n("bar-chart-upgrade")],1)},e=[],i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"bar-chart-profit-upgrade"}})},s=[],c=(n("99af"),n("d81d"),n("fb6a"),n("5698")),o={data:function(){return{chartName:"#bar-chart-profit-upgrade",data:this.$store.state.dataBarProfitUpgrade.slice(0,-1).map((function(t){return t.slice(0,-1)})),width:800,height:500,margin:{top:80,right:30,bottom:50,left:40}}},computed:{graphWidth:function(){return this.width-this.margin.left-this.margin.right},graphHeight:function(){return this.height-this.margin.top-this.margin.bottom},month:function(){return this.$store.state.month},company:function(){return this.data.map((function(t){return t[0]}))},profit:function(){return this.data.map((function(t){return t[1]}))},xScale:function(){return c["n"]().domain(this.company).range([0,this.graphWidth])},yScale:function(){return c["o"]().domain([-20,60]).range([this.graphHeight,0])},yScaleUp:function(){return c["o"]().domain([0,60]).range([0,this.graphHeight/4*3])},yScaleDown:function(){return c["o"]().domain([0,-20]).range([0,this.graphHeight/4])},xAxis:function(){return c["a"](this.xScale)},yAxis:function(){return c["b"](this.yScale).ticks(10).tickFormat((function(t){return t+" %"}))}},mounted:function(){this.drawLineChart()},methods:{drawLineChart:function(){var t=this.setSVG(this.chartName);t.append("g").classed("x-axis",!0).attr("transform","translate(0,".concat(this.graphHeight,")")),t.append("g").classed("y-axis",!0),t.selectAll("rect").data(this.data).enter().append("rect").call(this.drawBar)},setSVG:function(t){var a=c["s"](t).classed("svg-container",!0).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(this.width," ").concat(this.height)).classed("svg-content",!0),n=a.append("g").attr("transform","translate(".concat(this.margin.left,",").concat(this.margin.top,")"));return n},drawBar:function(t){var a=this;console.log();var n=c["s"]("".concat(this.chartName," .x-axis")).transition().duration(1200),r=c["s"]("".concat(this.chartName," .y-axis"));n.call(this.xAxis),r.call(this.yAxis.tickSize(-this.graphWidth)),t.attr("x",(function(t){return a.xScale(t[0])+a.xScale.bandwidth()/4})).attr("y",(function(t){return t[1]>=0?a.graphHeight-a.yScaleUp(t[1])-a.yScale(40):a.graphHeight-a.yScale(40)})).attr("width",this.xScale.bandwidth()/2).attr("height",(function(t){return console.log("Data:",t[1]),console.log("Scale:",a.yScale(t[1])),t[1]>=0?a.yScaleUp(t[1]):a.yScaleDown(t[1])})).attr("fill",(function(t,a){return c["r"][a]}))}}},h=o,l=(n("00ef"),n("2877")),u=Object(l["a"])(h,i,s,!1,null,null,null),d=u.exports,f=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"line-chart-profit-upgrade"}})},p=[],g={data:function(){return{chartName:"#line-chart-profit-upgrade",data:this.$store.state.dataLineProfitUpgrade.slice(0,-1),width:800,height:500,margin:{top:80,right:30,bottom:50,left:40}}},computed:{graphWidth:function(){return this.width-this.margin.left-this.margin.right},graphHeight:function(){return this.height-this.margin.top-this.margin.bottom},year:function(){return[2016,2017,2018]},xScale:function(){return c["n"]().domain(this.year).range([0,this.graphWidth])},yScale:function(){return c["o"]().domain([0,60]).range([this.graphHeight,0])},xAxis:function(){return c["a"](this.xScale)},yAxis:function(){return c["b"](this.yScale).ticks(5).tickFormat((function(t){return t+" %"}))}},mounted:function(){this.drawLineChart()},methods:{drawLineChart:function(){console.log();var t=this.setSVG(this.chartName);for(var a in t.append("g").classed("x-axis",!0).attr("transform","translate(0,".concat(this.graphHeight,")")),t.append("g").classed("y-axis",!0),this.data)t.append("path").datum(this.data[a].slice(1)).call(this.drawLine,a),t.append("circle").attr("cx",110*a).attr("cy",-40).attr("r",6).style("fill",c["r"][a]),t.append("text").attr("x",110*a).attr("y",-40).text(this.data[a][0]).style("font-size","18px").attr("alignment-baseline","middle").attr("fill","#e5e5e5").attr("transform","translate(15,2)").style("font-family","NanumBarunpen").style("font-weight",700)},setSVG:function(t){var a=c["s"](t).classed("svg-container",!0).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(this.width," ").concat(this.height)).classed("svg-content",!0),n=a.append("g").attr("transform","translate(".concat(this.margin.left,",").concat(this.margin.top,")"));return n},drawLine:function(t,a){var n=this,r=c["s"]("".concat(this.chartName," .x-axis")),e=c["s"]("".concat(this.chartName," .y-axis"));r.call(this.xAxis),e.call(this.yAxis.tickSize(-this.graphWidth));var i=this.xScale,s=(this.yScale,c["l"]().x((function(t,a){return i(n.year[a])})).y((function(t){return n.yScale(t)})));t.attr("fill","none").attr("stroke",c["r"][a]).attr("transform","translate(".concat(this.xScale.bandwidth()/2,",0)")).attr("stroke-width",3).attr("d",s);var o=t.node().getTotalLength();t.attr("stroke-dasharray","".concat(o," ").concat(o)).attr("stroke-dashoffset",o).transition().duration(1200).ease(c["d"]).attr("stroke-dashoffset",0)}}},m=g,x=(n("9e48"),Object(l["a"])(m,f,p,!1,null,null,null)),y=x.exports,w={components:{BarChartUpgrade:d,LineChartUpgrade:y}},v=w,S=(n("31f4"),Object(l["a"])(v,r,e,!1,null,"748a4f9e",null));a["default"]=S.exports},"59fa":function(t,a,n){},"9e48":function(t,a,n){"use strict";var r=n("cc0e"),e=n.n(r);e.a},a96a:function(t,a,n){},cc0e:function(t,a,n){}}]);
//# sourceMappingURL=chunk-53205de8.83846373.js.map