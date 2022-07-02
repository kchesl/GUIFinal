import React, {Component} from "react";
import * as d3 from 'd3'

class P4 extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  P4(){

    
    var date = []
    for(let i=0;i<64;i++){
        date.push(i);
    }

    const MetaHigh = [
        216.8,
        214.71,
        219.46,
        216.8,
        220.67,
        225.5,
        224.04,
        230.89,
        231.15,
        228.49,
        227.28,
        234.35,
        236.86,
        228.99,
        225.52,
        225.13,
        220.61,
        222.03,
        216.61,
        214.99,
        213.38,
        218.43,
        214.16,
        202.97,
        192.72,
        187.18,
        187.19,
        181.21,
        208.53,
        212.48,
        211.88,
        214.9,
        224.3,
        220.17,
        209.38,
        202.57,
        202.96,
        200.67,
        198.05,
        199.89,
        205.37,
        205.46,
        201,
        195.29,
        197.91,
        196.99,
        183.68,
        185.45,
        192.83,
        195.33,
        197.6,
        199.53,
        200.94,
        196.61,
        196.92,
        196.53,
        202.03,
        199.45,
        183.1,
        172.58,
        166.75,
        172.16,
        165.08,
        165.9
    ];
    const GoogleHigh = [
        2724.88,
        2741,
        2821,
        2791.77,
        2832.38,
        2840.7,
        2840.05,
        2875.87,
        2854.41,
        2842.16,
        2809.42,
        2874.24,
        2859.81,
        2787.21,
        2743.29,
        2713.4,
        2641.85,
        2632,
        2606.68,
        2609.59,
        2564.25,
        2606.66,
        2627.98,
        2601.97,
        2508.04,
        2465.55,
        2450.2,
        2344.84,
        2392.99,
        2358.4,
        2334.91,
        2368.84,
        2457.09,
        2420.78,
        2351.43,
        2301.54,
        2325,
        2327.29,
        2285.9,
        2357.5,
        2323.4,
        2338,
        2308,
        2260.2,
        2243.67,
        2242.95,
        2129.17,
        2130,
        2172.99,
        2246.36,
        2314.7,
        2342.03,
        2357.99,
        2326.43,
        2386.94,
        2353.82,
        2371.41,
        2365.98,
        2265.58,
        2175.83,
        2158.49,
        2228.47,
        2172.97,
        2173.99
    ];
    const TeslaHigh = [
        907.85,
        942.85,
        997.86,
        1040.7,
        1024.49,
        1021.8,
        1097.88,
        1114.77,
        1113.95,
        1103.14,
        1094.75,
        1149.91,
        1152.87,
        1079,
        1076.59,
        1048.44,
        1008.47,
        1021.19,
        1026.24,
        1012.71,
        1014.92,
        1034.94,
        1034,
        1092.22,
        1034.85,
        1008.62,
        1000,
        918,
        900,
        934.4,
        906.36,
        924.08,
        955.5,
        945.6,
        888,
        845.63,
        825.36,
        809.77,
        759.66,
        787.35,
        769.76,
        764.48,
        760.5,
        734,
        721.58,
        679.96,
        653.92,
        669.32,
        718.67,
        759.8,
        778.8,
        771.98,
        792.63,
        743.39,
        734.6,
        719.99,
        749.89,
        766.64,
        718.5,
        679.9,
        678.99,
        706.99,
        675.5,
        662.91
    ]
    const AmazonHigh = [
        161.594,
        163.084,
        166.167,
        166.37,
        164.1185,
        165.3685,
        169.0375,
        170.8315,
        168.9505,
        166.495,
        165.827,
        168.3945,
        168.1105,
        162.2,
        160.079,
        157.3685,
        154.1365,
        155.099,
        156.025,
        155.897,
        154.0395,
        158.649,
        157.6025,
        156.738,
        149.615,
        146.2215,
        144.856,
        141.9485,
        145.9375,
        130.761,
        124.668,
        126.2205,
        126,
        123.499,
        119.0505,
        114,
        112.6425,
        110.156,
        110.7805,
        113.184,
        113.9925,
        115.8,
        112.853,
        110.034,
        109.898,
        108.819,
        105.4,
        108.175,
        112.6655,
        115.187,
        121.9945,
        125.179,
        125.61,
        124.4,
        128.99,
        124.1,
        123.75,
        121.3,
        114.5,
        106.54,
        104.88,
        109.06,
        104.58,
        106.98
    ];
    const timestamp = [
        1647610200,
        1647869400,
        1647955800,
        1648042200,
        1648128600,
        1648215000,
        1648474200,
        1648560600,
        1648647000,
        1648733400,
        1648819800,
        1649079000,
        1649165400,
        1649251800,
        1649338200,
        1649424600,
        1649683800,
        1649770200,
        1649856600,
        1649943000,
        1650288600,
        1650375000,
        1650461400,
        1650547800,
        1650634200,
        1650893400,
        1650979800,
        1651066200,
        1651152600,
        1651239000,
        1651498200,
        1651584600,
        1651671000,
        1651757400,
        1651843800,
        1652103000,
        1652189400,
        1652275800,
        1652362200,
        1652448600,
        1652707800,
        1652794200,
        1652880600,
        1652967000,
        1653053400,
        1653312600,
        1653399000,
        1653485400,
        1653571800,
        1653658200,
        1654003800,
        1654090200,
        1654176600,
        1654263000,
        1654522200,
        1654608600,
        1654695000,
        1654781400,
        1654867800,
        1655127000,
        1655213400,
        1655299800,
        1655386200,
        1655472600
    ]


    //actual code for drawing
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 640 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
    var svg = d3.select("header").append("svg").attr("width",width + margin.left + margin.right).attr("height",height + margin.top + margin.bottom).append("g").attr("transform","translate(" + margin.left + "," + margin.top + ")");
    var y = d3.scaleLinear()
        .domain( [0, 3000])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));
    var x = d3.scaleTime()
        .domain([new Date(1000*timestamp[0]), new Date(1000 * timestamp[63])])
        .range([ 0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    var MetaLine = d3.line().x(function(d){return (width / 64) *date[d]}).y(function(d){return y(MetaHigh[d])})
    var GoogleLine = d3.line().x(function(d){return (width / 64) *date[d]}).y(function(d){return y(GoogleHigh[d])})
    var TeslaLine = d3.line().x(function(d){return (width / 64) *date[d]}).y(function(d){return y(TeslaHigh[d])})
    var AmazonLine = d3.line().x(function(d){return (width / 64) *date[d]}).y(function(d){return y(AmazonHigh[d])})
        
    var div = d3.select("header").append("div")
             .attr("class", "tooltip")
             .style("opacity", 0);
        
    svg.append("g").selectAll("scatterplot").data(MetaHigh).enter().append("circle")
        .attr("cy",function(d, i){return (height - ((height / 3000) * MetaHigh[i]) )}).attr("cx", function(d, i){return (width / 64) *date[i]} ).attr("r",5).style("fill", "blue")
        .on('mouseover', function (d) {
             d3.select(this).transition()
                  .duration('10')
                  .attr("r", 7);
            div.transition()
                  .duration(100)
                  .style("opacity", 1);
            div.html(function(d, i){return "Meta High: " + MetaHigh[i]})
                  .style("left", (d.pageX + 10) + "px")
                  .style("top", (d.pageY - 15) + "px");
        
        }).on('mouseout', function (d) {
             d3.select(this).transition()
                  .duration('200')
                  .attr("r", 5);
            div.transition()
                  .duration('200')
                  .style("opacity", 0);
        });
        
        svg.append("g").selectAll("scatterplot").data(GoogleHigh).enter().append("circle")
        .attr("cy",function(d, i){return (height - ((height / 3000) * GoogleHigh[i]) )}).attr("cx", function(d, i){return (width / 64) *date[i]} ).attr("r",5).style("fill", "green")
        .on('mouseover', function (d) {
             d3.select(this).transition()
                  .duration('10')
                  .attr("r", 7);
            div.transition()
                  .duration(100)
                  .style("opacity", 1);
            div.html(function(d, i){return "Google High: " + GoogleHigh[i]})
                  .style("left", (d.pageX + 10) + "px")
                  .style("top", (d.pageY - 15) + "px");
        
        }).on('mouseout', function (d) {
             d3.select(this).transition()
                  .duration('200')
                  .attr("r", 5);
            div.transition()
                  .duration('200')
                  .style("opacity", 0);
        });
        
        svg.append("g").selectAll("scatterplot").data(TeslaHigh).enter().append("circle")
        .attr("cy",function(d, i){return (height - ((height / 3000) * TeslaHigh[i]) )}).attr("cx", function(d, i){return (width / 64) *date[i]} ).attr("r",5).style("fill", "red")
        .on('mouseover', function (d) {
             d3.select(this).transition()
                  .duration('10')
                  .attr("r", 7);
            div.transition()
                  .duration(100)
                  .style("opacity", 1);
            div.html(function(d, i){return "Tesla High: " + TeslaHigh[i]})
                  .style("left", (d.pageX + 10) + "px")
                  .style("top", (d.pageY - 15) + "px");
        
        }).on('mouseout', function (d) {
             d3.select(this).transition()
                  .duration('200')
                  .attr("r", 5);
            div.transition()
                  .duration('200')
                  .style("opacity", 0);
        });
        
        svg.append("g").selectAll("scatterplot").data(AmazonHigh).enter().append("circle")
        .attr("cy",function(d, i){return (height - ((height / 3000) * AmazonHigh[i]) )}).attr("cx", function(d, i){return (width / 64) *date[i]} ).attr("r",5).style("fill", "purple")
        .on('mouseover', function (d) {
             d3.select(this).transition()
                  .duration('10')
                  .attr("r", 7);
            div.transition()
                  .duration(100)
                  .style("opacity", 1);
            div.html(function(d, i){return "Amazon High: " + AmazonHigh[i]})
                  .style("left", (d.pageX + 10) + "px")
                  .style("top", (d.pageY - 15) + "px");
        
        }).on('mouseout', function (d) {
             d3.select(this).transition()
                  .duration('200')
                  .attr("r", 5);
            div.transition()
                  .duration('200')
                  .style("opacity", 0);
        });
        
        
        svg.append("path").data([date,MetaHigh]).attr("class","line").attr("d", MetaLine).attr("stroke", "blue").style("fill","none");;
        svg.append("path").data([date,GoogleHigh]).attr("class","line").attr("d", GoogleLine).attr("stroke", "green").style("fill","none");;
        svg.append("path").data([date,TeslaHigh]).attr("class","line").attr("d", TeslaLine).attr("stroke", "red").style("fill","none");;
        svg.append("path").data([date,AmazonHigh]).attr("class","line").attr("d", AmazonLine).attr("stroke", "purple").style("fill","none");;
        
        
        svg.append("text")
            .text("Meta")
            .attr("x", 200)
            .attr("y", 20)
            .style("fill", "blue")
            .style("font-size", 12)
            
        
            svg.append("text")
            .text("Google")
            .attr("x", 250)
            .attr("y", 20)
            .style("fill", "green")
            .style("font-size", 12)   
            
            svg.append("text")
            .text("Tesla")
            .attr("x", 300)
            .attr("y", 20)
            .style("fill", "red")
            .style("font-size", 12)
        
            svg.append("text")
            .text("Amazon")
            .attr("x", 350)
            .attr("y", 20)
            .style("fill", "purple")
            .style("font-size", 12)
           

  
  
            }
        
  componentDidMount() {
    //imports data from the file

    this.P4();
  }

  styles = {
    page: {
        textAlign: "center",
        fontFamily: "'Jura', sans-serif",
        padding: "50px",
        paddingBottom: "250px",
        fontWeight: "bold",
    }
}
  render() {
    return (
      <div style = {this.styles.page}>
        <header>
            <div ref ={this.myRef}>

            </div>
            </header>
      </div>
    )
  }
}
export default P4;