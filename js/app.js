'use strict'

const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

 

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

let stores = []

stores.push(seattleLocation);
stores.push(tokyoLocation);
stores.push(dubaiLocation);
stores.push(parisLocation);
stores.push(limaLocation);

//log event

const newStore = document.getElementById('newLocation')

newLocation.addEventListener('submit', function (event) {
    event.preventDefault();
    const newLocation = event.target.locationName.value;
    const newMin = event.target.minimumCustomersPerHour.value;
    const newMax = event.target.maximumCustomersPerHour.value;
    const newAvgCookies = event.target.avgerageCookiesPerSale.value;
    const newPlace = new Store (newLocation, newMin, newMax, newAvgCookies);
    newPlace.renderTable();
    newStore.reset();
    stores.push(newPlace);
  }
)



//render table row

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

// header row
function header() {
    const headerRow = document.createElement('thead');
    table.appendChild(headerRow);

    const firstHeaderCell = document.createElement('th');
    headerRow.appendChild(firstHeaderCell);
    firstHeaderCell.classList.add('grayCells')
    firstHeaderCell.classList.add('wide1')
    firstHeaderCell.setAttribute('scope', 'col')

// create time slots



    for (let i=0; i<openHours.length; i++) {
        let tableHead = document.createElement('th');
        headerRow.appendChild(tableHead);
        tableHead.textContent = openHours[i];
        tableHead.classList.add('grayCells')
        tableHead.setAttribute('scope', 'col')
    }


    const totalHeaderCell = document.createElement('th');
    headerRow.appendChild(totalHeaderCell);
    totalHeaderCell.textContent = 'Total';
    totalHeaderCell.classList.add('grayCells')
    totalHeaderCell.classList.add('wide2')
    totalHeaderCell.setAttribute('scope', 'col')
}

header()

// table body
Store.prototype.renderTable = function () {
    const storeRow = document.createElement('tr');
    table.appendChild(storeRow);

    const storeLocation = document.createElement('td');
    storeRow.appendChild(storeLocation);
    storeLocation.textContent = this.location;
    storeLocation.classList.add('storeLocation');
    storeLocation.classList.add('wide1')
    storeLocation.setAttribute('scope', 'row')

    for (let i=0; i<openHours.length; i++) {
        let storeCell = document.createElement('td');
        storeRow.appendChild(storeCell);
        storeCell.textContent = this.cookiesAnHour[i]
        storeCell.classList.add('numbers')
    }

    const totalCell = document.createElement('td');
    storeRow.appendChild(totalCell);
    totalCell.textContent = this.total;
    totalCell.classList.add('grayCells')
    totalCell.classList.add('wide2')
}

seattleLocation.renderTable();
tokyoLocation.renderTable();
dubaiLocation.renderTable();
parisLocation.renderTable();
limaLocation.renderTable();

// footer row
const footerRow = document.createElement('tfoot');
table.appendChild(footerRow);

function footer (stores) {
    const titleCell = document.createElement('th');
    footerRow.appendChild(titleCell);
    titleCell.textContent = 'Total';
    titleCell.classList.add('grayCells');
    titleCell.classList.add('wide1');
    titleCell.setAttribute('scope', 'row')
   
    let totalTotal = 0;
    let timeTotal = 0;

  

    for (let i=0; i<openHours.length; i++) {
        timeTotal = 0 
        for (let j=0; j<stores.length; j++) {
          timeTotal += stores[j].cookiesAnHour[i]
          console.log(timeTotal)
        }
        totalTotal += timeTotal;
        let timeCell = document.createElement('th');
        footerRow.appendChild(timeCell);
        timeCell.textContent = timeTotal;
        timeCell.classList.add('grayCells')
    }

    const absoluteTotalCell = document.createElement('th');
    footerRow.appendChild(absoluteTotalCell);
    absoluteTotalCell.textContent = totalTotal;
    absoluteTotalCell.classList.add('grayCells')
    absoluteTotalCell.classList.add('wide2')

}

footer (stores);

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
