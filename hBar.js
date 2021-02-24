function drawTopChart(elem) {

    ts = {
        5:1,
        12:3,
        223:4
    }

    records = []

    const vidLength = 360

    for (let i=0; i<=vidLength; i++){
        let record = {timestamp:i, comments:0}

        if (i in ts) {
            record.comments = ts[i] 
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
        comments.push(record.comments)
        console.log(record)
    }

    
    chart_data = []

    for (let i=0; i<=labels.length; i++){
        console.log('looping')
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
                    }
                }]
            }
        }
    });

    return myChart
}