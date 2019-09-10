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
        [new Date(2019, 6, 22),0.0000,0.0000],
        [new Date(2019, 6, 23),-0.0039,0.0072],
        [new Date(2019, 6, 24),0.0148,0.0119],
        [new Date(2019, 6, 25),0.0022,0.0070],
        [new Date(2019, 6, 26),-0.0026,0.0138],
        [new Date(2019, 6, 29),-0.0008,0.0120],
        [new Date(2019, 6, 30),0.0124,0.0095],
        [new Date(2019, 6, 31),0.0167,-0.0016],
        [new Date(2019, 7, 1),0.0167,-0.0103],
        [new Date(2019, 7, 2),0.0167,-0.0177],
        [new Date(2019, 7, 5),0.0167,-0.0473],
        [new Date(2019, 7, 6),0.0168,-0.0339],
        [new Date(2019, 7, 7),0.0104,-0.0333],
        [new Date(2019, 7, 8),0.0344,-0.0144],
        [new Date(2019, 7, 9),0.0291,-0.0211],
        [new Date(2019, 7, 12),0.0246,-0.0330],
        [new Date(2019, 7, 13),0.0328,-0.0180],
        [new Date(2019, 7, 14),0.0001,-0.0470],
        [new Date(2019, 7, 15),-0.0002,-0.0445],
        [new Date(2019, 7, 16),-0.0006,-0.0304],
        [new Date(2019, 7, 19),-0.0088,-0.0187],
        [new Date(2019, 7, 20),-0.0029,-0.0262],
        [new Date(2019, 7, 21),-0.0046,-0.0183],
		[new Date(2019, 7, 22),-0.0015,-0.0186],
		[new Date(2019, 7, 23),-0.0050,-0.0438],
		[new Date(2019, 7, 26),-0.0088,-0.0332],
		[new Date(2019, 7, 27),-0.0120,-0.0370],
		[new Date(2019, 7, 28),-0.0072,-0.0302],
		[new Date(2019, 7, 29),-0.0209,-0.0179],
		[new Date(2019, 7, 30),-0.0209,-0.0183],
		[new Date(2019, 8, 3),-0.0209,-0.0240],
		[new Date(2019, 8, 4),-0.0209,-0.0130],
		[new Date(2019, 8, 5),-0.0209,-0.0003],
		[new Date(2019, 8, 6),-0.0238,0.0005],
		[new Date(2019, 8, 9),-0.0189,0.0006]
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