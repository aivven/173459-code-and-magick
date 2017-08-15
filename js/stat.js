'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура, вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);
  var histogramWidth = 40;
  var histogramHeight = 150;
  var histogramColumnStep = 50;
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var step = histogramHeight / max;
  var x = 250;
  for (var j = 0; j < times.length; j++) {
    ctx.fillStyle = 'rgba(0, 0, 250, ' + Math.random() + ')';
    ctx.fillRect(200 + histogramColumnStep * j, x, histogramWidth, -(times[j] * step));
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(200 + histogramColumnStep * j, x, histogramWidth, -(times[j] * step));
    }
    ctx.fillStyle = '#000000';
    ctx.fillText(names[j], 200 + histogramColumnStep * j, -(times[j] * step) + 240);
  }
};
