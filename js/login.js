//http://localhost:8888/PUC/login.html
//https://www.codeofaninja.com/2017/02/create-simple-rest-api-in-php.html
//http://www.mustbebuilt.co.uk/php/select-statements-with-pdo/

var button = document.getElementById("btn")
var user = document.getElementById("correo")
var pass = document.getElementById("pass")

button.addEventListener("click" , clickLogin , false);

function clickLogin () {
    wsLogin({
        correo: user.value,
        contrasena : pass.value
    }).then(res => res.json())
    .catch(error => {
        alert("error");
    } )
    .then(response => {
        if ( response.users != undefined && response.users.length > 0 ) {
        localStorage.setItem("user_data" , JSON.stringify(response.users));
        location.href = "indexPuc.html"
        } else {
            alert(response.message);
        }
    });
}


  function wsLogin( data ){
    url = "http://localhost:8888/PUC/php/login.php";
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      });
  }