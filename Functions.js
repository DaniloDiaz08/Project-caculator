//Funciones calculadora
function numeros(valor) {
    document.getElementById("resultado").value += valor;
}

function operacion(){
    var opera = document.getElementById("resultado").value;
    if(opera == 0){
        document.getElementById("resultado").value = "Sin Operación";
    } else{
        document.getElementById("resultado").value = eval(opera);
    }
}

function resetear(){
    document.getElementById("resultado").value = " ";
}

/* modo dia-noche */ 
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("dark"); 
}
