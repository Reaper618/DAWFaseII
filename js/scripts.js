function ent() { //evaluara si el PIN es correcto para seguir a la siguiente pagina o regresar error
    var PIN = "1234";
    var str1 = document.getElementById("InputPin").value;
    if (str1 == PIN) {
        window.location = "home.html";
    } else {
        alert("PIN Incorrecto");
        document.getElementById("InputPin").value = "";
    }
}

function input(e) { //Revisara el valor en el input y si es menor de 4, entonces agregara al final el valor del boton presionado
    var tbInput = document.getElementById("InputPin");
    if (tbInput.value.length < 4) {
        tbInput.value = tbInput.value + e.value;
    }
}


var saldo = 500; //saldo inicial
document.getElementById("saldo").innerHTML = saldo;