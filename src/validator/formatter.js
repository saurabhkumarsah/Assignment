function trim(str) {
    console.log("Trim() call => ",str.trim());
}

function changeToLowerCase(str) {
    console.log("changeToLowerCase() call => ",str.toLowerCase());
}

function changeToUpperCase(str) {
    console.log("changeToUpperCase() call => ",str.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase