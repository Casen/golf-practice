$(document).ready(function(){
  var path = window.location.href.replace('swings', 'charts');
  $.get(path, function(points){
    $.jqplot('chart', points, {axes:{xaxis:{min: 50, max:300, numberTicks: 9}, yaxis:{min:-150, max: 150, numberTicks: 9}}, series:[{showLine: false}]});
  });
});
