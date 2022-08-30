document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        localStorage.setItem("Nombre", "Autos");
        window.location = "products.html"     
           
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        localStorage.setItem("Nombre", "Juguetes");
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        localStorage.setItem("Nombre", "Muebles");
        window.location = "products.html"
    });
});

let email1 = localStorage.getItem('email');  

let htmlContentToAppend = '';
htmlContentToAppend += `
`+ (email1)   



document.getElementById("navuser").innerHTML = htmlContentToAppend;