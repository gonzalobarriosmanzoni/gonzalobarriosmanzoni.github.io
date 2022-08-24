document.getElementById('form-login').addEventListener('submit', function(evento) {
    let email = document.getElementById("email1");
    let password1 = document.getElementById("password");

    if (email.value.length === 0) {
        evento.preventDefault();
    }
    else if (password1.value.length === 0) {
        evento.preventDefault();
        
    }
    else {
          evento.preventDefault();
            window.location.href = 'index1.html';
        }
    })

    function login1(){
        var inputEmail= document.getElementById("email1");
        localStorage.setItem("email", inputEmail.value);
        console.log(localStorage.getItem("email"));
    }
       
      
