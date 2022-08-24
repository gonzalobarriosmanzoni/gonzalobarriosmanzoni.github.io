let email1 = localStorage.getItem('email');  

let htmlContentToAppend = '';
htmlContentToAppend += `
`+ (email1)   



document.getElementById("navuser").innerHTML = htmlContentToAppend;