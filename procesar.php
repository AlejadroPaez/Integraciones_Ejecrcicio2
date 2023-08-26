<?php
    
    $dato2 =  $_POST['dato2'];

    if (isset($_POST['dato1'])){ 
        $dato1 = $_POST['dato1'];
    }
    if (isset($_POST['dato2'])){ 
        $dato2 = $_POST['dato2'];
    }

    if ($dato1 && $dato2){

        echo "<h2>Resultado</h2><br>";
        
        $residuo = $dato1 % $dato2;

        echo "Resultado: " . $dato1 . "<br>";
        echo "Residuo: " . $residuo . "<br>";

        if ($residuo == 0) {
            echo "El número " . $dato1 . " si es divisible entre el número " . $dato2 . "<br>";
        }
        else{
            echo "El número " . $dato1 . " no es divisible entre el número " . $dato2 . "<br>";
        }

    }
    else {
        echo "<h2>Debe ingresar todos los datos</h2>";
    }
    echo "<a href='index.php'>Regresar</a>";
?>