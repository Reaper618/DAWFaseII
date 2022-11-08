function ent() { //evaluara si el PIN es correcto para seguir a la siguiente pagina o regresar error
    var PIN = "1234";
    var str1 = document.getElementById("InputPin").value;
    if (str1 == PIN) {
        window.location = "home.html";
    } else {
		  swal("Credenciales incorrectas","Revisa las credenciales e intenta de nuevo","warning");
        document.getElementById("InputPin").value = "";
    }
}

function input(e) { //Revisara el valor en el input y si es menor de 4, entonces agregara al final el valor del boton presionado
    var tbInput = document.getElementById("InputPin");
    if (tbInput.value.length < 4) {
        tbInput.value = tbInput.value + e.value;
    }
	console.log("B");
}


var saldo = 500; //saldo inicial
document.getElementById("saldo").innerHTML = saldo;


function entDep() {
	var str1=document.getElementById("InputMonto").value;
	if (str1>0 && str1<1001) {
		swal("Exito","Se han depositado $" + str1, "success");
		saldo = saldo + parseInt(str1,10);
		window.localStorage.setItem("Saldo",saldo);

 	} if (str1>1000) {
		swal("Error","Este cajero acepta unicamente depositos de hasta $1000 por favor acuda a una sucursal para realizar su deposito", "info");
 		document.getElementById("InputMonto").value ="";
 	} if (str1 == "") {
		swal("Error", "Ingresa un valor", "error");
	}
}

function input1(e) { //Revisara el valor en el input y si es menor de 5, entonces agregara al final el valor del boton presionado
    var tbInput = document.getElementById("InputMonto");
    if (tbInput.value.length < 5) {
    tbInput.value=tbInput.value + e.value;
	}
}

function inputPred(e) { //Input de los valores predeterminados, limpia el monto actual en lugar de agregar a
    var tbInput = document.getElementById("InputMonto");
	document.getElementById("InputMonto").value ="";
    tbInput.value=tbInput.value + e.value;
}

function entRet() {
	var str1=document.getElementById("InputMonto").value;
	if (str1>0 && str1<1001) {
		swal("Exito","Se han retirado $" + str1, "success");
		saldo = saldo - parseInt(str1,10);
		window.localStorage.setItem("Saldo",saldo);
 	} if (str1>1000) {
		swal("Error","Este cajero acepta unicamente retiros de hasta $1000 por favor acuda a una sucursal para realizar su retiro", "info");
 		document.getElementById("InputMonto").value ="";
 	} if (str1 == "") {
		swal("Error", "Ingresa un valor", "error");
	}
}

function testClear(){
	localStorage.clear();
}

function checkSaldo{ //revisa si es localstorage ya tiene saldo guardado, si tiene se trabaja en base a eso, si no inicia saldo de 500
	console.log("A");
}