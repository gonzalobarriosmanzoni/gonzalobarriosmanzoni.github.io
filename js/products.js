const CAR_URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

let CarArray = [];
console.log()

fetch(CAR_URL)
.then(function(respuesta) {
    console.log()
    return respuesta.json()
})
.then(function(datos) {
    CarArray = datos.results;
    console.log 
});