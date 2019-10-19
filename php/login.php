<?php   
    require 'database.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    $result;

    $json = file_get_contents('php://input');
    $obj = json_decode($json);

    if (!empty ($obj->correo) && !empty ($obj->contrasena)){
        $sql = 
        'SELECT id, correo, contrasena 
            FROM usuario where correo = :correo and contrasena = :contrasena
            ';
    
        $stmt = $con->prepare($sql);

        $stmt->bindParam(':correo', $obj->correo, PDO::PARAM_STR); 
        $stmt->bindParam(':contrasena' ,$obj->contrasena , PDO::PARAM_STR);

        $stmt->execute();
        
        if ( $stmt->rowCount() > 0 ) {
            $aux = array();
            $aux["users"] = array();

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                extract($row);
                $item=array(
                    "id" => $id,
                    "correo" => $correo,
                    "contrasena" => $contrasena
                );
         
                array_push($aux["users"], $item);
            }

            $result = $aux;
            http_response_code(200);
        } else {
            http_response_code(404);
            $result = array("message" => "usuario no encontrado");
        }
    } else {
        http_response_code(404);
        $result = array("message" => "usuario o contraseña vacio");
    }
    echo(json_encode($result));
?>