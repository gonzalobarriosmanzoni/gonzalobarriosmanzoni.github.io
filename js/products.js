const car_id = localStorage.getItem("catID");
const CAR_URL = 'https://japceibal.github.io/emercado-api/cats_products/'+ car_id +'.json'; 


let carArray = [];

fetch(CAR_URL)
.then(function(respuesta) {
    console.log(carArray)
    return respuesta.json()
})
.then(function(datos) {
    carArray =  datos.products;
    let htmlContentToAppend = '';
    for(let products of carArray) {
        console.log(products);
        htmlContentToAppend += `
        <div class="row">
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ products.name +`  `+ products.currency + ` `+ products.cost + ` </h4> 
                        <p> `+ products.description +`</p> 
                        </div>
                        <small class="text-muted"> `+ products.soldCount + ` vendidos </small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cars-list").innerHTML = htmlContentToAppend; 
    }
});


let Category = localStorage.getItem('Nombre');  

let CategoryToAppend = '';
CategoryToAppend +=`  <h5> Verás Aquí todos los productos de la <b> `+ Category +` </b> </h5> `

document.getElementById("nombre-categoria").innerHTML =  CategoryToAppend; 