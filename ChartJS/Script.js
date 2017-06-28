Qva.LoadScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js", function() {
    Qva.AddExtension("ChartJS", function() {
        
        var _this = this;
        
        _this.Element.innerHTML = "";
        
        if (!document.getElementById('myChart')) {
            var c = document.createElement('canvas');
            c.setAttribute('id', 'myChart');
            c.setAttribute('width', _this.GetWidth());
            c.setAttribute('height', _this.GetHeight());
            _this.Element.appendChild(c);
        }
        
        var chartLabels = [];
        var chartData = [];
        for (var i=0; i < _this.Data.Rows.length; i++) {
            var row = _this.Data.Rows[i];
            chartLabels.push(row[0].text);
            chartData.push(row[1].text);
        }
        
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: '',
                    data: chartData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        
        
    });
});
