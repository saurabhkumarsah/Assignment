const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

let playerData = [
    { name: "Manish",dob: "1/1/1995", gender: "male", city: "jalandhar", sports: ["swimming"] },
    { name: "Ram",dob: "02/01/1999", gender: "male", city: "hariyana", sports: ["swimming","dancing"] },
    { name: "Saurabh",dob: "08/10/2000", gender: "male", city: "bihar", sports: ["playing badminton"] },
    { name: "Shivam",dob: "1/1/2010", gender: "male", city: "Dehli", sports: ["cricket"] },
    { name: "Raja",dob: "1/1/2003", gender: "male", city: "gujrat", sports: ["swimming","lisenting music"] },
    { name: "Pritesh",dob: "1/1/1985", gender: "male", city: "utter pradesh", sports: ["swimming","driving"] }
]

function addData(data) {
    let flag = true;
    for(let i=0;i<playerData.length;i++) {
        if(playerData[i].name == data.name) {
            flag = false;
            break;
        }
    }
    if(flag == true) {
        playerData.push(data)
        return playerData;
    } else {
        return "Player already exits.";
    }
}
router.post('/players', function(req,res) {
    let playerDetails = { name: "Manish",dob: "1/1/1995", gender: "male", city: "jalandhar", sports: ["swimming"] }
    res.send(addData(playerDetails))
})

module.exports = router;