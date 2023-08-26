function Calcular() {
    numero1 = document.getElementById("dato1") ;
    numero2 = document.getElementById("dato2") ;
    validacion = true;

    if(numero1.value == "" || numero1.value <= 0){         
        validacion = validacionInputs(numero1, numero2);
    }

    if(numero2.value == "" || numero2.value <= 0){
        validacion = validacionInputs(numero2, numero1);    
    }
    
    if (validacion == true) {
        residuo = numero1.value % numero2.value;

        document.getElementById("resultado").innerHTML = "Resultado: " + numero1.value;
        document.getElementById("residuo").innerHTML = "Residuo: " + residuo;

        if (residuo == 0) {
            document.getElementById("mensaje").innerHTML = "El número " + numero1.value + " si es divisible entre el número " + numero2.value;
        }else{
            document.getElementById("mensaje").innerHTML = "El número " + numero1.value + " no es divisible entre el número " + numero2.value;
        }        
        document.getElementById("contenido").style.display = "none";
        document.getElementById("divResultado").style.display = "flex";
    }
 
}

function validacionInputs(input1, input2){
    if(input1.value == "" && input2.value == ""){
        alert("Introduce un valores validos");  
        document.getElementById(input1.id).style.boxShadow = "0px 5px 15px rgba(255, 0, 0, 0.40)";
        document.getElementById(input2.id).style.boxShadow = "0px 5px 15px rgba(255, 0, 0, 0.40)";
    }else{
        alert("Introduce un valor valido");  
        document.getElementById(input1.id).style.boxShadow = "0px 5px 15px rgba(255, 0, 0, 0.40)";
        document.getElementById(input2.id).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)"; 
    }      
    return false;
}

function Regresar() {
    limpiaInputs(numero1, numero2);
    document.getElementById("divResultado").style.display = "none";
    document.getElementById("contenido").style.display = "flex";
}

function limpiaInputs(input1, input2){
    document.getElementById(input1.id).value = "";
    document.getElementById(input2.id).value = "";
    document.getElementById(input1.id).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
    document.getElementById(input2.id).style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";    
}