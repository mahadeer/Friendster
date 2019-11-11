/*eslint-disable no-extra-parens */
/*eslint-env jquery */
/*globals Highcharts */
(function(H) {
  H.wrap(H.Series.prototype, 'drawGraph', function(proceed) {

    // Now apply the original function with the original arguments, 
    // which are sliced off this function's arguments
    proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    var arrowLength = 8,
      arrowWidth = 5,
      series = this,
      data = series.data,
        segments = data,
        lastSeg = segments[segments.length - 1],
        path = [];
      var lastPoint = null;
      var nextLastPoint = null;
			
      if (lastSeg.y === 0) {
        lastPoint = segments[segments.length - 2];
        nextLastPoint = segments[segments.length - 1];
      } else {
        lastPoint = segments[segments.length - 1];
        nextLastPoint = segments[segments.length - 2];
      }

      var angle = Math.atan((lastPoint.plotX - nextLastPoint.plotX) /
        (lastPoint.plotY - nextLastPoint.plotY));

      if (angle < 0) angle = Math.PI + angle;

      path.push('M', lastPoint.plotX, lastPoint.plotY);

      if (lastPoint.plotX > nextLastPoint.plotX) {
        path.push(
          'L',
          lastPoint.plotX + arrowWidth * Math.cos(angle),
          lastPoint.plotY - arrowWidth * Math.sin(angle)
        );
        path.push(
          lastPoint.plotX + arrowLength * Math.sin(angle),
          lastPoint.plotY + arrowLength * Math.cos(angle)
        );
        path.push(
          lastPoint.plotX - arrowWidth * Math.cos(angle),
          lastPoint.plotY + arrowWidth * Math.sin(angle),
          'Z'
        );
      } else {
        path.push(
          'L',
          lastPoint.plotX - arrowWidth * Math.cos(angle),
          lastPoint.plotY + arrowWidth * Math.sin(angle)
        );
        path.push(
          lastPoint.plotX - arrowLength * Math.sin(angle),
          lastPoint.plotY - arrowLength * Math.cos(angle)
        );
        path.push(
          lastPoint.plotX + arrowWidth * Math.cos(angle),
          lastPoint.plotY - arrowWidth * Math.sin(angle),
          'Z'
        );
      }
      $(series.chart.renderer.box).find(".highcharts-series-" + series.index + " .custom-arrow").remove();
      series.chart.renderer.path(path)
        .attr({
          fill: series.color,
          class: 'custom-arrow'
        })
        .add(series.group);
  });
}(Highcharts));