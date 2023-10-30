'use strict'

function getRandomNumberInt (min, max) {
    let span = max - min + 1;
    let randomNumber = Math.floor(Math.random() * span);
    let returnNumber = randomNumber + min;
    //console.log (returnNumber);
    return returnNumber;
}

function hourlyCustomer (hourTotal, min, max) {
    let hourArray = []
    for (let i=0; i<13; i++) {
        let customer = getRandomNumberInt (min, max)
        hourArray.push(customer)
    }
    return hourArray
}



const seattleLocation = {
   
}

const tokyoLocation = {

}