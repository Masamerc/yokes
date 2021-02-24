function drawHBar(elem) {
    var myChart = new Chart(elem, {
        type: 'horizontalBar',
        data: {
            labels: ['Red'],
            datasets: [{
                label: '# of Comments',
                data: [12],
                backgroundColor: [
                    'rgba(255, 99, 132)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    });

    return myChart
}