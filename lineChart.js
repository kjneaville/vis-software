function lineChart(target) {

  // Basics
  var div = d3.select(target);

  var data;
  var xVarName;
  var yVarName;
  var xVarFormat = "";
  var yVarFormat = "";

  var width = 100;
  var height = 100;
  var color = "blue";

  var title;
  var xAxisText;
  var yAxisText;

  var marginTop = 30;
  var marginRight = 30;
  var marginBottom = 30;
  var marginLeft = 30;

  var chart = function () {
    var xVar = [];
    var yVar = [];
    var completeData = [];
    var gWidth = (width - ( 2 * marginLeft) - marginRight);
    var gHeight = (height - marginTop - (2 * marginBottom));

    // Trying to get both types of data working, csv still not working.
    // Encountering errors with how csv loads data.
    if (typeof data == "object") {
      data.forEach(function(d) {
        xVar.push(d[xVarName] + 0);
        yVar.push(d[yVarName] + 0);
        completeData.push({x: d[xVarName] + 0, y: d[yVarName] + 0});
      });
    } else {
      completeData = d3.csv(data)
        .row(function(d) {
          xVar.push(d[xVarName] + 0);
          yVar.push(d[yVarName] + 0);
          return {x: d[xVarName] + 0, y: d[yVarName] + 0}; })
        .get(function(error, rows) {});
    }

    var xMin = d3.min(xVar);
    var xMax = d3.max(xVar);
    var xScale = d3.scale.linear().range([0, gWidth]).domain([xMin, xMax]);

    var yMin = d3.min(yVar);
    var yMax = d3.max(yVar);
    var yScale = d3.scale.linear().range([gHeight, 0]).domain([yMin, yMax]);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom")
      .tickFormat(d3.format(xVarFormat));

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .tickFormat(d3.format(yVarFormat));

    var line = d3.svg.line()
      .x(function(d) { return xScale(d.x); })
      .y(function(d) { return yScale(d.y); })
      .interpolate("basis");

    var svg = div.append("svg")
      .attr("width", width)
      .attr("height", height);

    var g = svg.append("g")
      .attr("transform", "translate(" + (2 * marginLeft) + "," + marginTop + ")")
      .attr("width", gWidth)
      .attr("height", gHeight);

    svg.append("text")
        .attr("class", "chart-title")
        .attr("x", (2 * marginLeft) + (marginLeft / 5))
        .attr("y", marginTop)
        .text(title);

    svg.append("g")
      .attr("transform", "translate(" + (2 * marginLeft) + "," + (gHeight + marginTop) + ")")
      .attr("class", "axis")
      .call(xAxis);

    svg.append("text")
        .attr("transform", "translate(" + (marginLeft + gWidth / 2) + "," + (gHeight + (2.2 * marginBottom)) + ")")
        .attr("class", "axis-label")
        .text(xAxisText);

    svg.append("g")
      .attr("transform", "translate(" + (2 * marginLeft) + "," + (marginTop) + ")")
      .attr("class", "axis")
      .call(yAxis);

    svg.append("text")
      .attr("transform", "translate(" + (marginLeft) + "," + (marginTop + height / 2) + ") rotate(-90)")
      .attr("class", "axis-label")
      .text(yAxisText);

    g.append("path")
      .datum(completeData)
      .attr("class", "line")
      .attr("stroke", color)
      .attr("d", line);
  };

  // Variable Methods
  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    return chart;
  };

  chart.xVarName = function(value) {
    if (!arguments.length) return xVarName;
    xVarName = value;
    return chart;
  };

  chart.yVarName = function(value) {
    if (!arguments.length) return yVarName;
    yVarName = value;
    return chart;
  };

  chart.xVarFormat = function(value) {
    if (!arguments.length) return xVarFormat;
    xVarFormat = value;
    return chart;
  };

  chart.yVarFormat = function(value) {
    if (!arguments.length) return yVarFormat;
    yVarFormat = value;
    return chart;
  };

  chart.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return chart;
  };

  chart.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return chart;
  };

  chart.color = function(value) {
    if (!arguments.length) return color;
    color = value;
    return chart;
  };

  chart.title = function(value) {
    if (!arguments.length) return title;
    title = value;
    return chart;
  };

  chart.xAxisText = function(value) {
    if (!arguments.length) return xAxisText;
    xAxisText = value;
    return chart;
  };

  chart.yAxisText = function(value) {
    if (!arguments.length) return yAxisText;
    yAxisText = value;
    return chart;
  };

  chart.marginTop = function(value) {
    if (!arguments.length) return marginTop;
    marginTop = value;
    return chart;
  }

  chart.marginRight = function(value) {
    if (!arguments.length) return marginRight;
    marginRight = value;
    return chart;
  }

  chart.marginBottom = function(value) {
    if (!arguments.length) return marginBottom;
    marginBottom = value;
    return chart;
  }

  chart.marginLeft = function(value) {
    if (!arguments.length) return marginLeft;
    marginLeft = value;
    return chart;
  }

  return chart;
};
