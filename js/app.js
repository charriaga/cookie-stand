'use strict'

function getRandomNumberInt (min, max) {
    let span = max - min + 1;
    let randomNumber = Math.floor(Math.random() * span);
    let returnNumber = randomNumber + min;
    //console.log (returnNumber);
    return returnNumber;
}

function hourlyCustomer (min, max) {
    let hourArray = []
    for (let i=0; i<13; i++) {
        let customer = getRandomNumberInt (min, max)
        hourArray.push(customer)
    }
    return hourArray
}

function cookieTotal (min, max, avgCookies) {
    let cookiesHour = [];
    for (let i=0; i<13; i++) {
        let cookieCalulator = hourlyCustomer (min,max)[i] * avgCookies;
        cookiesHour.push(cookieCalulator);
    }    
    return cookiesHour
}

const seattleLocation = {
    min: 23,
    max: 65,
    avgCookies: 6.3,
    cookiesAnHour: cookieTotal (this.min, this.max, this.avgCookies)
}

const tokyoLocation = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    cookiesAnHour: cookieTotal (this.min, this.max, this.avgCookies)
}

const dubaiLocation = {
    min: 11,
    max: 38,
    avgCookies: 3.7,
    cookiesAnHour: cookieTotal (this.min, this.max, this.avgCookies)
}

const parisLocation = {
    min: 20,
    max: 38,
    avgCookies: 2.3,
    cookiesAnHour: cookieTotal (this.min, this.max, this.avgCookies)
}

const limaLocation = {
    min: 2,
    max: 16,
    avgCookies: 4.6,
    cookiesAnHour: cookieTotal (this.min, this.max, this.avgCookies)

}