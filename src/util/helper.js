function findMissingNumber(array) {
    let n = array[array.length-1];
    let totalSum = (n*(n+1))/2;
    let arraySum = array.reduce((a,b)=>(a+b));
    let num = totalSum - arraySum;
    return num;
}
function findMissingNumber2(array) {
    // Sum of all numbers from 1 to last element of array
    let n = array[array.length-1];
    let totalSum = (n*(n+1))/2;

    // Sum of all numbers from 1 to first element of array
    let N = array[0];
    let sumFirst = (N*(N-1))/2

    let arraySum = array.reduce((a,b)=>(a+b));
    
    // Sum with missing number
    let sumWithMissNum = totalSum - sumFirst;

    let missingNumber = sumWithMissNum - arraySum;
    return missingNumber;
}

module.exports.find = findMissingNumber;
module.exports.find2 = findMissingNumber2;
