# vis-software
Visualization Software using d3.js to create line charts.

## Usage
Use it to create single line charts.
The x-axis and y-axis variable must be formatted as a single number, even if it is a date,
(Ex: May 11 2016 = 20160511).

Must use object formatted data.

## API Functions

\# *lineChart*(target)
> This will construct a lineChart object with the target div set to the given target parameter

\# *lineChart.data*(value)
> This will set the data in the chart equal to the value given, either object data.

\# *lineChart.xVarName*(string)
> This will tell the chart that x-axis variable name is equal to the string given as a parameter.

\# *lineChart.yVarName*(string)
> This will tell the chart that y-axis variable name is equal to the string given as a parameter.

\# *lineChart.xVarFormat*(string)
> This will tell the chart how to format the x-axis variable data, using d3.format standards
For help, use http://bl.ocks.org/zanarmstrong/05c1e95bf7aa16c4768e

\# *lineChart.yVarFormat*(string)
> This will tell the chart how to format the y-axis variable data, using d3.format standards
For help, use http://bl.ocks.org/zanarmstrong/05c1e95bf7aa16c4768e

\# *lineChart.width*(integer)
> This will set the chart's width to the given integer parameter. The width includes all margins, axex, titles, and labels.

\# *lineChart.height*(integer)
> This will set the chart's height to the given integer parameter. The width includes all margins, axex, titles, and labels.

\# *lineChart.color*(string)
> This will set the chart's color to the given string parameter. Only string's are accepted, hex, rgb, and cymk are not.

\# *lineChart.title*(string)
> This will set the chart's title to the given string parameter.

\# *lineChart.xAxisText*(string)
> This will set the chart's x-axis text to the given string parameter.

\# *lineChart.yAxisText*(string)
> This will set the chart's y-axis text to the given string parameter.

## I recommend not changing the margins as they usually fit quite well. But if you need to, here are the commands.

\# *lineChart.marginTop*(integer)
> This will set the chart's top margin to the given integer parameter. Default set to 30px.

\# *lineChart.marginRight*(integer)
> This will set the chart's right margin to the given integer parameter. Default set to 30px.

\# *lineChart.marginBottom*(integer)
> This will set the chart's bottom margin to the given integer parameter. Default set to 30px.

\# *lineChart.marginLeft*(integer)
> This will set the chart's left margin to the given integer parameter. Default set to 30px.
