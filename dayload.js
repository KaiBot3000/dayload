// Calculate display percentage
var MINUTES_IN_DAY = 1440;
var MINUTES_IN_HOUR = 60;

var date = new Date();
var timeInMinutes = (date.getHours() * MINUTES_IN_HOUR) + date.getMinutes();

var fillPercent = timeInMinutes / MINUTES_IN_DAY * 100;

// use d3 to display fill gauge of day's progress

// gets default config from liquidFillGauge.js
var config = liquidFillGaugeDefaultSettings();
	config.circleColor = "#5cda0b";
	config.textColor = "#5cda0b";
	config.waveTextColor = "#FFFFFF";
	config.waveColor = "#5cda0b";
	config.circleThickness = 0.09;
	config.textVertPosition = 0.5;
	config.waveAnimateTime = 5000;

// gauge settings
var gauge = loadLiquidFillGauge("gauge", fillPercent, config);