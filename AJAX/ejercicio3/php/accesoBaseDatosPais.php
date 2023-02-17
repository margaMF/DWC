<?php
    ini_set('display_errors', 'On');
    ini_set('html_errors', 0);

    $conexion = mysqli_connect('localhost','root','1234', 'world');
    if (mysqli_connect_errno()){
        echo "Error al conectar a MySQL: ". mysqli_connect_error();
    }

    $consulta = mysqli_prepare($conexion, "SELECT Name FROM country;");
    $consulta->execute();
    $paises = $consulta->get_result();

    while ($myrow = $paises->fetch_assoc()) {
        echo $myrow['Name'].', ';
    }
?>


