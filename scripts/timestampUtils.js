
const transformRecords = (dataIn) => {
    const dataOut = [];

    dataIn.forEach((record) => {
        let timestampSeconds = convertToSeconds(record['timestamp']);
        let recordToInsert = {};
        recordToInsert[timestampSeconds] = record['comment_count'];
        dataOut.push(recordToInsert);
        }
    )
    return dataOut;
}


const convertToSeconds = (timestamp) => {
    let seconds = timestamp.split(':').reduce((acc,time) => (60 * acc) + +time);
    return seconds
}


const sortByKey = (array) => {
    return array.sort(function(a, b) {
                var x = parseInt(Object.keys(a));
                var y = parseInt(Object.keys(b));
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));       
    });    
}


