<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);

    $conexion = mysqli_connect('localhost','root','1234', 'world');
    if (mysqli_connect_errno()){
        echo "Error al conectar a MySQL: ". mysqli_connect_error();
    }

    //Obtener el parámetro de la URL
    $q = $_REQUEST['q'];

    $consulta = mysqli_prepare($conexion, "SELECT city.Name FROM city INNER JOIN country ON country.Code = city.CountryCode WHERE country.Name = '".$q."';");
    $consulta->execute();
    $ciudades = $consulta->get_result();

    while ($myrow = $ciudades->fetch_assoc()) {
        echo $myrow['Name'].', ';
    }
?>




