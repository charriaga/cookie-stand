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
    for (let i=0; i<14; i++) {
        let customer = getRandomNumberInt (min, max)
        hourArray.push(customer)
    }
    return hourArray
}

function cookieTotal (min, max, avgCookies) {
    let cookiesHour = [];
    for (let i=0; i<14; i++) {
        let cookieCalulator = Math.round(hourlyCustomer (min,max)[i] * avgCookies);
        cookiesHour.push(cookieCalulator);
    }
    console.log(cookiesHour)    
    return cookiesHour;
}



const seattleLocation = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookies: 6.3,
    cookiesAnHour: cookieTotal (23, 65, 6.3)
}

const tokyoLocation = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    avgCookies: 1.2,
    cookiesAnHour: cookieTotal (3, 24, 1.2)
}

const dubaiLocation = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookies: 3.7,
    cookiesAnHour: cookieTotal (11, 38, 3.7)
}

const parisLocation = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookies: 2.3,
    cookiesAnHour: cookieTotal (20, 38, 2.3)
}

const limaLocation = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookies: 4.6,
    cookiesAnHour: cookieTotal (2, 16, 4.6)

}

const container = document.getElementById('salesList');

function renderSalesList (city) {
    const article = document.createElement('article');
    container.appendChild(article);

    const h2 = document.createElement('h2')
    article.appendChild(h2)
    h2.textContent = city.location

    const ul = document.createElement('ul')
    article.appendChild(ul)

    for (let i=0; i<14; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
            if (i<6) {
                let a = 6+i; 
                li.textContent = `${a} am: ${city.cookiesAnHour[i]} cookies`;
            } else if (i = 6) {
                   let c = 12
                li.textContent = `${c} pm: ${city.cookiesAnHour[i]} cookies`;
            } else {
                let b = i-5;
                li.textContent = `${b} pm: ${city.cookiesAnHour[i]} cookies`;
            }

    }
}
renderSalesList (seattleLocation);
renderSalesList (tokyoLocation);
renderSalesList (dubaiLocation);
renderSalesList (parisLocation);
renderSalesList (limaLocation);
