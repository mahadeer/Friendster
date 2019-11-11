/*eslint-disable no-unused-vars */
/*globals Highcharts */
function makeAnnotations(projectionSeries) {
	return projectionSeries.map(function(d) {
		return {
			point: {
				x: (d.data[0][0] + d.data[1][0]) / 2,
				y: (d.data[0][1] + d.data[1][1]) / 2,
				xAxis: 0,
				yAxis: 0
			},
			text: d.displayValue.toString()
		};
	});
}

function makeProjections(projectionSeries) {
	return projectionSeries.reduce(function(projections, series) {
		for (var i = 0; i < (series.data.length - 1); i++) {
			var projection = {
				"id": "projection",
				"type": "scatter",
				"isProjectionSeries": true,
				"includeInDataExport": false,
				"tooltip": {
					"enabled": false
				},
				"displayValue": series.data[i].z - series.data[i + 1].z,
				"data": [
					[series.data[i].x, series.data[i].y],
					[series.data[i + 1].x, series.data[i + 1].y]
				],
				"showInLegend": false,
				"linkedTo": series.id
			};
			projections.push(projection);
		}
		return projections;
	}, []);
}

function getStoreSeries(filterValue) {
	var storeSeries = [{
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "OWH",
		"name": "ONLINE WAREHOUSE",
		"id": "ONLINE WAREHOUSE",
		"data": [{
			"name": "2017",
			"key": [
				"OWH",
				"2017"
			],
			"rowIndex": "1:0-2:0",
			"x": 17.692307692307693,
			"y": 31.466591311942867,
			"z": 594
		}, {
			"name": "2018",
			"key": [
				"OWH",
				"2018"
			],
			"rowIndex": "1:0-2:1",
			"x": -9.020979020979022,
			"y": 44.108844760705935,
			"z": 702
		}, {
			"name": "2019",
			"key": [
				"OWH",
				"2019"
			],
			"rowIndex": "1:0-2:2",
			"x": 91.32867132867133,
			"y": 24.424563927351194,
			"z": 326
		}],
		"color": "#B586DA",
		"key": "0:1-0:0-0:2"
	}, {
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "RL",
		"name": "RETAIL",
		"id": "RETAIL",
		"data": [{
			"name": "2017",
			"key": [
				"RL",
				"2017"
			],
			"rowIndex": "1:1-2:0",
			"x": 19.22996878251821,
			"y": 35.5326540656051,
			"z": 12192
		}, {
			"name": "2018",
			"key": [
				"RL",
				"2018"
			],
			"rowIndex": "1:1-2:1",
			"x": 43.11827956989247,
			"y": 41.597915341107935,
			"z": 14136
		}, {
			"name": "2019",
			"key": [
				"RL",
				"2019"
			],
			"rowIndex": "1:1-2:2",
			"x": 37.651751647589315,
			"y": 22.869430593286967,
			"z": 7326
		}],
		"color": "#FF6657",
		"key": "0:1-0:0-0:2"
	}, {
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "WHS",
		"name": "WAREHOUSE STORAGE",
		"id": "WAREHOUSE STORAGE",
		"data": [{
			"name": "2017",
			"key": [
				"WHS",
				"2017"
			],
			"rowIndex": "1:2-2:0",
			"x": 33.333333333333336,
			"y": 33.22659252085351,
			"z": 242
		}, {
			"name": "2018",
			"key": [
				"WHS",
				"2018"
			],
			"rowIndex": "1:2-2:1",
			"x": 61.61616161616162,
			"y": 46.58845949576681,
			"z": 358
		}, {
			"name": "2019",
			"key": [
				"WHS",
				"2019"
			],
			"rowIndex": "1:2-2:2",
			"x": 5.05050505050505,
			"y": 20.184947983379676,
			"z": 108
		}],
		"color": "#F3A730",
		"key": "0:1-0:0-0:2"
	}, {
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "WS",
		"name": "WHOLESALE",
		"id": "WHOLESALE",
		"data": [{
			"name": "2017",
			"key": [
				"WS",
				"2017"
			],
			"rowIndex": "1:3-2:0",
			"x": 89.6421052631579,
			"y": 36.529747177809114,
			"z": 1100
		}, {
			"name": "2018",
			"key": [
				"WS",
				"2018"
			],
			"rowIndex": "1:3-2:1",
			"x": 29.936842105263157,
			"y": 24.171521810458735,
			"z": 804
		}, {
			"name": "2019",
			"key": [
				"WS",
				"2019"
			],
			"rowIndex": "1:3-2:2",
			"x": -19.57894736842105,
			"y": 39.29873101173216,
			"z": 740
		}],
		"color": "#946B66",
		"key": "0:1-0:0-0:2"
	}];
	storeSeries.forEach(function(series) {
		if (filterValue != undefined) {
			series.data = series.data.filter(function(d) {
				return d.key.indexOf(filterValue) === -1;
			});
		}
	});
	return storeSeries;
}

function getYearSeries(filterValue) {
	var brightenColors = [],
		base = Highcharts.getOptions().colors[0];
	for (var i = 0; i < 10; i += 1) {
		brightenColors.push(Highcharts.Color(base).brighten((i - 2) / 7).get());
	}
	var yearSeries = [{
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "2017",
		"name": "2017",
		"id": "2017",
		"data": [{
			"name": "ONLINE WAREHOUSE",
			"key": [
				"2017",
				"OWH"
			],
			"rowIndex": "2:0-1:0",
			"x": 17.692307692307693,
			"y": 31.466591311942867,
			"z": 594
		}, {
			"name": "RETAIL",
			"key": [
				"2017",
				"RL"
			],
			"rowIndex": "2:0-1:1",
			"x": 19.22996878251821,
			"y": 35.5326540656051,
			"z": 12192
		}, {
			"name": "WAREHOUSE STORAGE",
			"key": [
				"2017",
				"WHS"
			],
			"rowIndex": "2:0-1:2",
			"x": 33.333333333333336,
			"y": 33.22659252085351,
			"z": 242
		}, {
			"name": "WHOLESALE",
			"key": [
				"2017",
				"WS"
			],
			"rowIndex": "2:0-1:3",
			"x": 89.6421052631579,
			"y": 36.529747177809114,
			"z": 1100
		}],
		"color": "#B586DA",
		"key": "0:1-0:0-0:2"
	}, {
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "2018",
		"name": "2018",
		"id": "2018",
		"data": [{
			"name": "ONLINE WAREHOUSE",
			"key": [
				"2018",
				"OWH"
			],
			"rowIndex": "2:1-1:0",
			"x": -9.020979020979022,
			"y": 44.108844760705935,
			"z": 702
		}, {
			"name": "RETAIL",
			"key": [
				"2018",
				"RL"
			],
			"rowIndex": "2:1-1:1",
			"x": 43.11827956989247,
			"y": 41.597915341107935,
			"z": 14136
		}, {
			"name": "WAREHOUSE STORAGE",
			"key": [
				"2018",
				"WHS"
			],
			"rowIndex": "2:1-1:2",
			"x": 61.61616161616162,
			"y": 46.58845949576681,
			"z": 358
		}, {
			"name": "WHOLESALE",
			"key": [
				"2018",
				"WS"
			],
			"rowIndex": "2:1-1:3",
			"x": 29.936842105263157,
			"y": 24.171521810458735,
			"z": 804
		}],
		"color": "#FF6657",
		"key": "0:1-0:0-0:2"
	}, {
		"regression": false,
		"regressionSettings": {},
		"dimension_key": "2019",
		"name": "2019",
		"id": "2019",
		"data": [{
			"name": "ONLINE WAREHOUSE",
			"key": [
				"2019",
				"OWH"
			],
			"rowIndex": "2:2-1:0",
			"x": 91.32867132867133,
			"y": 24.424563927351194,
			"z": 326
		}, {
			"name": "RETAIL",
			"key": [
				"2019",
				"RL"
			],
			"rowIndex": "2:2-1:1",
			"x": 37.651751647589315,
			"y": 22.869430593286967,
			"z": 7326
		}, {
			"name": "WAREHOUSE STORAGE",
			"key": [
				"2019",
				"WHS"
			],
			"rowIndex": "2:2-1:2",
			"x": 5.05050505050505,
			"y": 20.184947983379676,
			"z": 108
		}, {
			"name": "WHOLESALE",
			"key": [
				"2019",
				"WS"
			],
			"rowIndex": "2:2-1:3",
			"x": -19.57894736842105,
			"y": 39.29873101173216,
			"z": 740
		}],
		"color": "#F3A730",
		"key": "0:1-0:0-0:2"
	}].map(function(series) {
		if (filterValue != undefined && series.id === filterValue) {
			series.visible = false;
		}
		return series;
	});
	yearSeries.forEach(function(series, idx) {
		series.color = brightenColors[idx];
	});
	return yearSeries;
}