(function (){
    frmLogin = document.getElementById("frmLogin");

    log = document.getElementById("log");

    htmlInicio = "../indexPuc.html";

    function validarFrmLogin( e ) {
        e.preventDefault();

        var params = {
            body: new FormData(frmLogin),
            method: "POST"
        }

        fetch('http://127.0.0.1/puc/php/loginUsusario.php' , params )
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if ( data.error ) { 
                    showMessage("Ha ocurrido un error");
                    return;
                }

                if ( data.data.length > 0 ) {
                    sessionStorage.setItem( "sesion" , JSON.stringify(data.data[0]));

                    setTimeout(() => {
                        window.location = htmlInicio;
                    }, 1000);
                } else {
                    showMessage("Usuario o contraseña incorrectos");
                }
                
                
            });

    }
    
    frmLogin.addEventListener("submit" , validarFrmLogin );


    function showMessage ( text ) {
        log.innerHTML = text;
    }

}())