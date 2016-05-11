$(function() {
  // Data to visualize (shoe sizes along the horizontal)
  var data = [
    {year: 2000, price: 12.45},
    {year: 2001, price: 14.00},
    {year: 2002, price: 15.50},
    {year: 2003, price: 14.95},
    {year: 2004, price: 14.65},
    {year: 2005, price: 16.99},
    {year: 2006, price: 18.25},
    {year: 2007, price: 19.99},
    {year: 2008, price: 24.99},
    {year: 2009, price: 24.99},
    {year: 2010, price: 24.99},
    {year: 2011, price: 24.99},
    {year: 2012, price: 27.45},
    {year: 2013, price: 28.87},
    {year: 2014, price: 29.45},
    {year: 2015, price: 29.85},
    {year: 2016, price: 29.99}
  ];

  var data2 = [
    {year: 2000, price: 25.45},
    {year: 2001, price: 27.00},
    {year: 2002, price: 30.50},
    {year: 2003, price: 18.95},
    {year: 2004, price: 12.65},
    {year: 2005, price: 9.99},
    {year: 2006, price: 5.25},
    {year: 2007, price: 13.99},
    {year: 2008, price: 13.99},
    {year: 2009, price: 26.99},
    {year: 2010, price: 10.99},
    {year: 2011, price: 2.99},
    {year: 2012, price: 5.45},
    {year: 2013, price: 33.87},
    {year: 2014, price: 19.45},
    {year: 2015, price: 16.85},
    {year: 2016, price: 44.99}
  ];
  // Create an instance of your ParagraphChart, setting the color to blue
  var line1 = lineChart("#vis")
              .width(960)
              .height(500)
              .data(data)
              .color("gold")
              .title("Chart One")
              .xVarName("year")
              .yVarName("price")
              .xAxisText("Kappa")
              .yAxisText("Kripperino")
              .xVarFormat(".4n");

  var line2 = lineChart("#vis2")
              .width(400)
              .height(400)
              .data(data2)
              .color("purple")
              .title("Change in Price of CSGO Over Time")
              .xVarName("year")
              .yVarName("price")
              .xAxisText("Year")
              .yAxisText("Price");

  var line3 = lineChart("#vis3")
              .width(960)
              .height(500)
              .data("sp500.csv")
              .color("#B2A7")
              .title("Chart Three")
              .xVarName("date")
              .yVarName("price")
              .xAxisText("Test1")
              .yAxisText("Test2");

  // Select the container div, bind the data (datum) to it,
  // then call your instantiation of the ParagraphChart function
  var chartWrapper = d3.select('#vis')
      .call(line1);

  var chartWrapper2 = d3.select('#vis2')
      .call(line2);

  var chartWrapper2 = d3.select('#vis3')
      .call(line3);
  // Assign event handler to form

  $('form').submit(function(event){

    // Get the color and font sizes from your form
    var color = $('#color').val();
    var fontSize = $('#data').val();

    // Reset the color and fontSize of your chart function
    line1.color(color)
         .data(data2);

    // Re-call your chart function on your chartWrapper
    chartWrapper.call(myChart);

    return false; // don't reload the page
  })
});
