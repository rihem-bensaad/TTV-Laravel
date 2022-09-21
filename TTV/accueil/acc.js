


// Date And Time

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
$("#month").text(monthNames[d.getMonth()]);
$("#day").text(d.getDate());
var weekNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
$("#week").text(weekNames[d.getDay()]);
function timer() {
  var d = new Date();
  var h = d.getHours(),
      mm = d.getMinutes(),
      ss = d.getSeconds(),
      dd = 'AM',
      hh = h;
  if (hh >= 12) {
    hh = h - 12;
    dd= 'PM';
  }
  if (hh === 0) {
    hh = 12;
  }
  hh = hh<10?'0'+hh:hh;
  mm = mm<10?'0'+mm:mm;
  ss = ss<10?'0'+ss:ss;
      
  $("#hour").html(hh);
  $("#minut").html(mm);
  $("#date").html(dd);

}
setInterval(function(){ timer();}, 1000);


        


//  $(function(){


//   $('.circlechart').circlechart();


// });
// $(function() {
//     $('.calendar').pignoseCalendar({
// 		minDate: '2017-04-01',
// 		maxDate: '2017-06-24'
// 	});
// });

// calendar
// Calender script

// $('.evcalendar').pignoseCalendar();

$("#m-a-s-chart-1").sparkline([4,6,7,5,4,5,7,3,4,9,6,3], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#e7515a',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-2").sparkline([3,6,5,2,4,5,8,3,4,7,6,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-3").sparkline([5,6,7,9,8,5,2,3,9,4,6,7], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-4").sparkline([4,6,7,5,4,5,7,3,4,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-5").sparkline([4,6,8,5,3,5,7,8,6,9], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#00d1c1',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});

$("#m-a-s-chart-6").sparkline([4,6,7,5,4,5,7,6,4], {
  type: 'line',
  width: '80',
  height: '30',
  lineColor: '#e7515a',
  lineWidth: 1.5,
  spotRadius: 3.5,
  fillColor: 'transparent',
  spotColor: '#1ad271',
  spotRadius: 0,
  minSpotColor: '#fff',
  maxSpotColor: '#fff'
});


//--monthly_growth_chart script--//

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [-5, 20, 50, 40, 30, 10, -5, 30, 40, -5, -10, -15]
    ]
};

var options = {
    high: 50,
    low: -20,
    axisY: {
        labelInterpolationFnc: function(value) {
            return (value) + 'K';
        }
    }
};

new Chartist.Bar('#monthly_growth_chart', data, options, responsiveOptions);
//--monthly_growth_chart script--//

$(".b-p-weekly-chart-1").sparkline([ [2, 1], [3, 1.3], [2.5, 1], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-2").sparkline([ [2.4, 1.7], [2, 1.3], [1.5, 1.6], [2.9, 1], [2.3, 1.4], [1.4, 1.6], [3.6, 2.2], [2.1, 1.4], [2.6, 1.4], [2, 1.2], [4.3, 1.2], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-3").sparkline([ [3, 0.7], [2, 1.3], [2.5, 1.5], [3.2, 1.2], [5.0, 1.5], [2.0, 1.7], [2.6, 1.2], [2.1, 1.4], [2, 1.0], [3, 1.6], [6.3, 1.3], [2.7, 3.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-4").sparkline([ [1, 1.6], [3, 1.0], [2.6, 1.8], [2.2, 1.2], [2.9, 1.7], [3.4, 2.9], [2.6, 1.2], [1.1, 1.8], [2, 1.3], [2, 1.2], [1.3, 2.3], [2.5, 1.5] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$(".b-p-weekly-chart-5").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
    type: 'bar',
    height: '30',
    barWidth: 2,
    barSpacing: 4,
    zeroAxis: false,
    barColor: '#f58b22',
    stackedBarColor: ['#6424c9', '#989ebf']
});

$('.best-performers-tab li a').on('shown.bs.tab', function(event) {

  $(".b-p-weekly-chart-6").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-7").sparkline([ [3, 0.7], [2, 1.3], [2.5, 1.5], [3.2, 1.2], [5.0, 1.5], [2.0, 1.7], [2.6, 1.2], [2.1, 1.4], [2, 1.0], [3, 1.6], [6.3, 1.3], [2.7, 3.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });
  
  $(".b-p-weekly-chart-8").sparkline([ [2.3, 1.9], [2.4, 0.8], [3.5, 2.8], [2.6, 1.2], [2.3, 1.4], [2.4, 2.3], [2.6, 1.2], [2.1, 1.4], [2.1, 1.3], [2, 1.2], [2, 1.3], [2, 1] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-9").sparkline([ [1, 1.6], [3, 1.0], [2.6, 1.8], [2.2, 1.2], [2.9, 1.7], [3.4, 2.9], [2.6, 1.2], [1.1, 1.8], [2, 1.3], [2, 1.2], [1.3, 2.3], [2.5, 1.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

  $(".b-p-weekly-chart-10").sparkline([ [2, 1.1], [2, 1.3], [2.5, 1.5], [2.2, 1.2], [2.3, 1.4], [2.4, 1.3], [2.6, 1.2], [2.1, 1.4], [2, 1.3], [2, 1.2], [2.3, 1.3], [2.5, 1.5] ], {
      type: 'bar',
      height: '30',
      barWidth: 2,
      barSpacing: 4,
      zeroAxis: false,
      barColor: '#f58b22',
      stackedBarColor: ['#1abc9c', '#989ebf']
  });

});

  $(document).ready(function() {
            $('#calendar').fullCalendar({
                defaultDate: '2014-09-12',
                editable: true,
                eventLimit: true, // allow "more" link when too many events
            });
        });