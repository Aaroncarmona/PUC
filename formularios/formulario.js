(function (){
        
    
        formulario = document.getElementById('formulario')
        nombre = formulario.nombre,
        apellido = formulario.apellido,
        correo = formulario.correo,
        contrasena = formulario.contrasena,
        error = document.getElementById('error');

        urlLogin = "formulario";

        function usuarioRegistrado(){
            error.style.display='block';
            error.style.backgroundColor = "green"
            error.innerHTML = '<li>Usuario Registrado</li>';
            setTimeout(() => {
                window.location = urlLogin;
            }, 1000);
        }

        function usuarioNoRegistrado(){
            error.style.display='block';
            error.innerHTML = '<li>Usuario ya registrado</li>';
        }

        function validarNombre ( ){
            if(nombre.value == '' || nombre.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el nombre</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarApellido (){
            if(apellido.value == '' || apellido.value == null ){
                console.log('Por favor pon un nombre correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el apellido</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarCorreo( ){
            if(correo.value == '' || correo.value == null ){
                console.log('Por favor pon un correo correcto');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa el correo</li>';
            }else{
                error.style.display='none';
            }
        }

        function validarContrasena( ){
            if(contrasena.value == '' || contrasena.value == null ){
                console.log('Por favor pon una Contraseña');
                error.style.display='block';
                error.innerHTML += '<li>Por favor completa la contraseña</li>';
            }else{
                error.style.display='none';
            }
        }



        function validarFormulario(e){
            e.preventDefault();
            error.innerHTML= '';
            error.style.backgroundColor = "#e84d43";

            validarNombre();
            validarApellido();
            validarCorreo();
            validarContrasena();

            if ( error.innerHTML == "" ){

                var params = {
                    mode: 'cors',
                    body: new FormData(formulario),
                    method: "POST"
                }

                fetch('http://localhost/PUC/php/registroUsuario.php' , params )
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) {
                        error.innerHTML = "";
                        if ( data.status ){
                            usuarioRegistrado();
                        } else {
                            usuarioNoRegistrado();
                        }
                    });
            }
          
        }

        formulario.addEventListener('submit', validarFormulario);
}())