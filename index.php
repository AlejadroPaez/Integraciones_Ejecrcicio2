<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="js/operaciones.js"></script>
    <link href="css/estilos.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="contenido">
        <div>
            <h2>Introduce 2 números</h2>
                <label >Primero número: </label><br>
                <input type="number" id="dato1"><br>
                <label >Segundo número: </label><br>
                <input type="number" id="dato2"><br>
                <button id="procesar" onclick="Calcular()">Caluclar</button>
        </div>
    </div>
    <div id="divResultado">
        <div>
            <h1>Resultado</h2>
            <label id="resultado"></label><br>
            <label id="residuo"></label><br>
            <label id="mensaje"></label><br>            
            <button id="regresar" onclick="Regresar()">Regresar</button>
        </div>       
    </div>   
</body>
</html>