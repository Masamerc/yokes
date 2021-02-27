function drawTopChart(elem, videoLength, data) {

    records = []

    for (let i=0; i<=videoLength; i++){
        let record = {timestamp:i, comment_count:0}

        if (i in data) {
            record.comment_count = data[i] 
        }
        records.push(record)
    }


    labels = []
    comments = []

    for (record of records) {
        let date = new Date(null)
        date.setSeconds(record.timestamp)
        var result = date.toISOString().substr(11, 8);

        labels.push(result)
        comments.push(record.comment_count)
    }

    
    chart_data = []

    for (let i=0; i<=labels.length; i++){
        chart_data.push({
            t: labels[i],
            y: comments[i]
        })
    }

    var myChart = new Chart(elem, {
        type: 'line',
        data: {
            labels:labels,
            datasets: [{
                label: 'comments',
                data: chart_data,
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
                        beginAtZero: true
                    }
                }],
            }
        }
    });

    return myChart
}


function drawHBar(elem) {
    var myChart = new Chart(elem, {
        type: 'horizontalBar',
        data: {
            labels: ['Comments'],
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
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }]
            }
        }
    });

    return myChart
}