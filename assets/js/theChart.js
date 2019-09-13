// load the Visualization API and the corechart package
google.charts.load('current', {'packages':['corechart']});
// set callback to run when Visualization API is loaded
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    
    // create data table
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Personal');
    data.addColumn('number', '$SPY');
    data.addRows([
        [new Date(2019, 8, 11),0.0000,0.0000],
        [new Date(2019, 8, 12),0.0150,0.0035],
		[new Date(2019, 8, 13),0.0091,0.0028]
    ]);
    // format values as percentages
    var formatter = new google.visualization.NumberFormat({ pattern: '#.##%' });
    formatter.format(data, 1);
    formatter.format(data, 2);
    // set chart options
    var options = {
        backgroundColor: { 
            fill: 'transparent'
        },
        colors: ['green', 'maroon'],
        fontSize: 20,
        fontFamily: 'sans-serif',
        hAxis: {
            title: 'Date',
            titleTextStyle: {
                bold: true
            },
            textStyle: {
                color: 'black'
            }
        },
        vAxis: {
            title: 'Performance',
            titleTextStyle: {
                bold: true
            },
            format: 'percent',
            textStyle: {
                color: 'black'
            }
        },
        tooltip: {
            format: 'percent'
        },
        legend: { 
            alignment: 'center',
            position: 'top',
            textStyle: {
                bold: true
            }
        },
        lineWidth: 4, // pixels
        pointSize: 5, // pixels
    };
    // instantiate chart while passing in options
    var chart = new google.visualization.LineChart(document.getElementById('performance-chart'));
    chart.draw(data, options);
}

// check which elements need to be faded in
var fadeInElements = document.body.querySelectorAll(".fade-in");

// determine whether the element has entered or is above the viewport
var enteredViewport = function(elem) {
    var bounding = elem.getBoundingClientRect();
    return (bounding.top <= (window.innerHeight || document.documentElement.clientHeight));
}

// fade in header, main and any other elements in the viewport
window.onload = function() {
    document.body.querySelector("header").classList.remove("fade");
    document.body.querySelector("main").classList.remove("fade");
    for (var i = 0; i < fadeInElements.length; i++) {
        if (enteredViewport(fadeInElements[i])) {
            fadeInElements[i].classList.remove("fade");
        }
    }
}

// fade in elements as they become visible in the viewport
window.addEventListener('scroll', function(){
    for (var i = 0; i < fadeInElements.length; i++) {
        if (enteredViewport(fadeInElements[i])) {
            fadeInElements[i].classList.remove("fade");
        }
    }
});

// responsive chart on resizing browser
window.addEventListener('resize', function(){
    drawChart();
});