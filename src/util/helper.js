function printDate() {
    let d = new Date();
    console.log(`Date: ${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`);
}

function printMonth() {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date()
    console.log(`Month: ${month[d.getMonth()]}`)
}

function getBatchInfo(batchName,week,day,topicName) {
    console.log(`${batchName}, ${week}${day}, the topic for today is ${topicName} `)
}

module.exports.date= printDate;
module.exports.month = printMonth;
module.exports.batchInfo = getBatchInfo;
