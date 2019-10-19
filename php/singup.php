<?php   
    require 'database.php';
$message = '';

if (!empty ($_POST ['nombre']) && !empty ($_POST ['apellidos']) && !empty ($_POST ['correo']) && 
!empty ($_POST ['contrasena'])){
 
    $sql = "insert into usuario ( nombre , apellidos , correo , contrasena ) 
    values (:nombre, :apellidos, :correo, :contrasena)";

    $stmt =$con -> prepare($sql);
    
    $stmt -> bindParam(':nombre', $_POST['nombre']);
    $stmt -> bindParam(':apellidos', $_POST['apellidos']);
    $stmt -> bindParam(':correo', $_POST['correo']);
    $stmt -> bindParam(':contrasena', $_POST['contrasena']);
    //$stmt -> bindParam(':contrasena',$pass);
    //$pass = password_hash($_POST['contrasena'],  PASSWORD_BCRYPT );
    
    if($stmt -> execute()){
        $message = 'Se creo usuario';

    }else{
        $message = 'No se pudo agregar usuario';

    }
     
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/singup.css">
    <title>Registrate</title>
</head>
<body>
<header>
    <div class="contenedor">
        <h3 class= "puc"><a href="../indexPuc.html">P.U.C.</a> </h3>
    </div>
</header>


    <?php  
     if(!empty($message)):
    ?>
    <p> <?=$message ?> </p>
     <?php endif; ?>


    
  

<div  class="contenedor">
<h1 class="titulo">Registrate</h1>
    <form  action="singup.php" method="post" class="formulario">
    <p><samp> <a href="login.php ">Iniciar Secion</a> </samp> </p> 
                    <input type="text" name="nombre" placeholder="Nombre">
                    <input type="text" name="apellidos" placeholder="Apellido">
                    <input type="text" name="correo" placeholder="Correo">
                    <input type="password" name="contrasena" placeholder="Contraseña">

                    <input type="submit" value="Enviar" >

    </form>
    </div>
</body>
</html>