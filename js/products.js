const CAR_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

let carArray = [];
console.log()

fetch(CAR_URL)
.then(function(respuesta) {
    console.log()
    return respuesta.json()
})
.then(function(datos) {
    carArray = datos.results;
    let divCarList = document.getElementById('cars-list');

    let htmlContentToAppend = '';
    for (let car of carArray) {
        console.log(car)
        htmlContentToAppend += `
            <input type="radio" name="name" value="${car.name}">
            <p>${car.name}</p>
        `;
    }
    divCarList.innerHTML += htmlContentToAppend;

    