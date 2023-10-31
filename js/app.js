'use strict'

function getRandomNumberInt (min, max) {
    const span = max - min + 1;
    const randomNumber = Math.floor(Math.random() * span);
    const returnNumber = randomNumber + min;
    //console.log (returnNumber);
    return returnNumber;
}

function hourlyCustomer (min, max) {
    let hourArray = [];
    for (let i=0; i<14; i++) {
        let customer = getRandomNumberInt (min, max);
        hourArray.push(customer);
    }
    return hourArray;
}

function cookieTotal (min, max, avgCookies) {
    let cookiesHour = [];
    for (let i=0; i<14; i++) {
        let cookieCalulator = Math.round(hourlyCustomer (min,max)[i] * avgCookies);
        cookiesHour.push(cookieCalulator);
    }
    console.log(cookiesHour);    
    return cookiesHour;
}

function totalCookies (cookieTotal) {
    let total = 0;
    for (let i=0; i<cookieTotal.length; i++) {
         total +=cookieTotal[i];
    }
    return total;
}

function Store(location, min, max, avgCookies) {
    this.location = location;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.cookiesAnHour = cookieTotal(min, max, avgCookies);
    this.total = totalCookies(cookieTotal(min, max, avgCookies));
}

const seattleLocation = new Store('Seattle', 23, 65, 6.3);
const tokyoLocation = new Store('Tokyo', 3, 24, 1.2);
const dubaiLocation = new Store('Dubai', 11, 38, 3.7);
const parisLocation = new Store('Paris', 20, 38, 2.3);
const limaLocation = new Store('Lima', 2, 16, 4.6);

// const seattleLocation = {
//     location: 'Seattle',
//     min: 23,
//     max: 65,
//     avgCookies: 6.3,
//     cookiesAnHour: cookieTotal (23, 65, 6.3),
//     total: totalCookies(cookieTotal(23,65,6.3))
// }

// const tokyoLocation = {
//     location: 'Tokyo',
//     min: 3,
//     max: 24,
//     avgCookies: 1.2,
//     cookiesAnHour: cookieTotal (3, 24, 1.2),
//     total: totalCookies(cookieTotal(3,24,1.2))
// }

// const dubaiLocation = {
//     location: 'Dubai',
//     min: 11,
//     max: 38,
//     avgCookies: 3.7,
//     cookiesAnHour: cookieTotal (11, 38, 3.7),
//     total: totalCookies(cookieTotal(11,38,3.7))
// }

// const parisLocation = {
//     location: 'Paris',
//     min: 20,
//     max: 38,
//     avgCookies: 2.3,
//     cookiesAnHour: cookieTotal (20, 38, 2.3),
//     total: totalCookies(cookieTotal(20,38,2.3))
// }

// const limaLocation = {
//     location: 'Lima',
//     min: 2,
//     max: 16,
//     avgCookies: 4.6,
//     cookiesAnHour: cookieTotal (2, 16, 4.6),
//     total: totalCookies(cookieTotal(2,16,4.6))

//}

const container = document.getElementById('salesList');

const table = document.createElement('table');
container.appendChild(table);

const headerRow = document.createElement('tr');
table.appendChild(headerRow);

const firstHeaderCell = document.createElement('th');
headerRow.appendChild(firstHeaderCell);

// create time slots

const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
for (let i=0; i<14; i++) {
    let tableHead = document.createElement('th');
    headerRow.appendChild(tableHead);
    tableHead.textContent = openHours[i];
}

const totalHeaderCell = document.createElement('th');
headerRow.appendChild(totalHeaderCell);
totalHeaderCell.textContent = 'Total';

// 

Store.prototype.renderTable = function () {
    const storeRow = document.createElement('tr');
    table.appendChild(storeRow);

    const storeLocation = document.createElement('td');
    storeRow.appendChild(storeLocation);
    storeLocation.textContent = this.location;

    for (let i=0; i<14; i++) {
        let storeCell = document.createElement('td');
        storeRow.appendChild(storeCell);
        storeCell.textContent = this.cookiesAnHour[i]
    }

    const totalCell = document.createElement('td');
    storeRow.appendChild(totalCell);
    totalCell.textContent = this.total;

}

seattleLocation.renderTable();
tokyoLocation.renderTable();
dubaiLocation.renderTable();
parisLocation.renderTable();
limaLocation.renderTable();

const footerRow = document.createElement('tr');
table.appendChild(footerRow);

function footer (store1, store2, store3, store4, store5) {
    const titleCell = document.createElement('th');
    footerRow.appendChild(titleCell)
    titleCell.textContent = 'Total'

    for (i=o; i<14; i++) {
        
    }
}

footer ()

// function renderSalesList (city) {
//     const article = document.createElement('article');
//     container.appendChild(article);

//     const h2 = document.createElement('h2')
//     article.appendChild(h2)
//     h2.textContent = city.location

//     const ul = document.createElement('ul')
//     article.appendChild(ul)

//     for (let i=0; i<14; i++) {
//         const li = document.createElement('li');
//         ul.appendChild(li);
//             if (i<6) {
//                 let a = 6+i; 
//                 li.textContent = `${a} am: ${city.cookiesAnHour[i]} cookies`;
//             } else if (i === 6) {
//                 let c = 12;
//                 li.textContent = `${c} pm: ${city.cookiesAnHour[i]} cookies`;
//             } else {
//                 let b = i-6;
//                 li.textContent = `${b} pm: ${city.cookiesAnHour[i]} cookies`;
//             }
//     }
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Total: ${city.total} cookies`
// }

// renderSalesList (seattleLocation);
// renderSalesList (tokyoLocation);
// renderSalesList (dubaiLocation);
// renderSalesList (parisLocation);
// renderSalesList (limaLocation);
