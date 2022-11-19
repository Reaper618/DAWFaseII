function ent() { //evaluara si el PIN es correcto para seguir a la siguiente pagina o regresar error
    var PIN = "1234";
    var str1 = document.getElementById("InputPin").value;
    if (str1 == PIN) {
        window.location = "home.html";
    } else {
        swal("Credenciales incorrectas", "Revisa las credenciales e intenta de nuevo", "warning");
        document.getElementById("InputPin").value = "";
    }
}

function input(e) { //Revisara el valor en el input y si es menor de 4, entonces agregara al final el valor del boton presionado
    var tbInput = document.getElementById("InputPin");
    if (tbInput.value.length < 4) {
        tbInput.value = tbInput.value + e.value;
    }
}




function entDep() {
    var str1 = document.getElementById("InputMonto").value;
    if (str1 > 0 && str1 < 1001) {
swal("Se ha realizado el deposito, deseas generar un comprobante?", {
  buttons: {
    cancel: "No",
    catch: {
      text: "Si",
      value: "true",
    },
  },
})
.then((value) => {
  switch (value) {

    case "true":
		const { jsPDF } = window.jspdf; 

	const doc = new jsPDF(
        {
        orientation: "portrait",
        unit: "in",
        format: [6, 6]    
        });
		var fecha = new Date().toLocaleString(); 
		var nfecha = "Fecha de transacción : "+ fecha;
        var str2 = localStorage.getItem("saldo");
        doc.setFontSize(13);
        doc.text(2.2, 1, 'POKEMON BANK');
        doc.text(0.5, 1.3, '_________________________________________________');
        doc.text(1.9, 1.7, 'Comprobante de Depósito');
        doc.text(0.5, 1.9, '_________________________________________________');
        doc.setFontSize(12);
        doc.text(2.2, 2.5, 'Cuenta #0987654321');
		doc.text("Ha realizado un deposito de $" + str1, 1.8, 3);
        doc.text("Su nuevo saldo es de $" + str2, 2, 3.2); //mensaje que incluir el PDF
        doc.text(0.5, 3.7, '_________________________________________________');
        doc.text(nfecha,1.2,4);
		doc.save("Comprobante_deposito.pdf");
		break;
 
    default:
      swal("Entendido","Puedes visitar la pagina de consulta de saldo si deseas ver tus transacciones luego","success");
  }
});         var cont = window.localStorage.getItem("saldo");
        cont = parseInt(cont, 10) + parseInt(str1, 10);
        window.localStorage.setItem("saldo", cont); //actualiza valor en localstorage con el valor del contador
        var cont2 = window.localStorage.getItem("depositos");//suma 1 al numero de depositos que se ha hecho 
        cont2 = parseInt(cont2, 10) + 1;
        window.localStorage.setItem("depositos", cont2); 
			var tot=window.localStorage.getItem("totalIngresos");//lleva cuenta de total de ingresos para poder graficarlos
		 tot = parseInt(tot,10) + parseInt(str1,10);
		 window.localStorage.setItem("totalIngresos",tot);
		
    }
    if (str1 > 1000) {
        swal("Error", "Este cajero acepta unicamente depositos de hasta $1000 por favor acuda a una sucursal para realizar su deposito", "info");
        document.getElementById("InputMonto").value = "";
    }
    if (str1 == "") {
        swal("Error", "Ingresa un valor", "error");
    }
	        document.getElementById("InputMonto").value = "";

}

function input1(e) { //Revisara el valor en el input y si es menor de 5, entonces agregara al final el valor del boton presionado
    var tbInput = document.getElementById("InputMonto");
    if (tbInput.value.length < 5) {
        tbInput.value = tbInput.value + e.value;
    }
}

function inputPred(e) { //Input de los valores predeterminados, limpia el monto actual en lugar de agregar a
    var tbInput = document.getElementById("InputMonto");
    document.getElementById("InputMonto").value = "";
    tbInput.value = tbInput.value + e.value;
}

function entRet() {
    var str1 = document.getElementById("InputMonto").value;
    if (str1 > 0 && str1 < 1001) {
swal("Se ha realizado el retiro, deseas generar un comprobante?", {
  buttons: {
    cancel: "No",
    catch: {
      text: "Si",
      value: "true",
    },
  },
})
.then((value) => {
  switch (value) {

    case "true":
		const { jsPDF } = window.jspdf; 

	const doc = new jsPDF(
        {
        orientation: "portrait",
        unit: "in",
        format: [6, 6]    
        });
		var fecha = new Date().toLocaleString(); 
        var nfecha = "Fecha de transacción : "+ fecha;
        var str2 = localStorage.getItem("saldo");
        doc.setFontSize(13);
        doc.text(2.2, 1, 'POKEMON BANK');
        doc.text(0.5, 1.3, '_________________________________________________');
        doc.text(2, 1.7, 'Comprobante de Retiro');
        doc.text(0.5, 1.9, '_________________________________________________');
        doc.setFontSize(12);
        doc.text(2.2, 2.5, 'Cuenta #0987654321');
        doc.text("Ha realizado un retiro de $" + str1, 1.9,3); //mensaje que incluir el PDF
        doc.text("Su nuevo saldo es de $" + str2, 2, 3.2);
        doc.text(0.5, 3.7, '_________________________________________________');
        doc.text(nfecha,1.2,4);
		doc.save("Comprobante_retiro.pdf");
		  break;
 
    default:
      swal("Entendido","Puedes visitar la pagina de consulta de saldo si deseas ver tus transacciones luego","success");
  }
});        var cont = window.localStorage.getItem("saldo");
        cont = parseInt(cont, 10) - parseInt(str1, 10);
        window.localStorage.setItem("saldo", cont);
        var cont2 = window.localStorage.getItem("retiros");//suma 1 al numero de retiros que se ha hecho
        cont2 = parseInt(cont2, 10) + 1;
        window.localStorage.setItem("retiros", cont2); 
			var tot=window.localStorage.getItem("totalRetiros");//lleva cuenta de total de retiros para poder graficarlos
		 tot = parseInt(tot,10) + parseInt(str1,10);
		 window.localStorage.setItem("totalRetiros",tot);
    }
    if (str1 > 1000) {
        swal("Error", "Este cajero acepta unicamente retiros de hasta $1000 por favor acuda a una sucursal para realizar su retiro", "info");
        document.getElementById("InputMonto").value = "";
    }
    if (str1 > localStorage.getItem("saldo")) {
        swal("Error", "Fondos insuficientes", "info");
        document.getElementById("InputMonto").value = "";
    }
    if (str1 == "") {
        swal("Error", "Ingresa un valor", "error");
    }
	        document.getElementById("InputMonto").value = "";

}


function entPagcre() {
    var str1 = document.getElementById("InputMonto").value;
    if (str1 > 0 && str1 < 1001) {
swal("Se ha realizado el pago, deseas generar un comprobante?", {
  buttons: {
    cancel: "No",
    catch: {
      text: "Si",
      value: "true",
    },
  },
})
.then((value) => {
  switch (value) {

    case "true":
        const { jsPDF } = window.jspdf; 

    const doc = new jsPDF(
        {
        orientation: "portrait",
        unit: "in",
        format: [6, 6]    
        });
        var fecha = new Date().toLocaleString(); 
        var nfecha = "Fecha de transacción : "+ fecha;
        var str2 = localStorage.getItem("saldo");
        doc.setFontSize(13);
        doc.text(2.2, 1, 'POKEMON BANK');
        doc.text(0.5, 1.3, '_________________________________________________');
        doc.text(1.7, 1.7, 'Comprobante de abono a crédito');
        doc.text(0.5, 1.9, '_________________________________________________');
        doc.setFontSize(12);
        doc.text(2.2, 2.5, 'Cuenta #0987654321');
        doc.text("Ha realizado un pago por $" + str1, 1.9,3); //mensaje que incluir el PDF
        doc.text("Su nuevo saldo es de $" + str2, 2, 3.2);
        doc.text(0.5, 3.7, '_________________________________________________');
        doc.text(nfecha,1.2,4);
        doc.save("Comprobante_pago.pdf");
          break;
 
    default:
      swal("Entendido","Puedes visitar la pagina de consulta de saldo si deseas ver tus transacciones luego","success");
  }
});        var cont = window.localStorage.getItem("saldo");
        cont = parseInt(cont, 10) - parseInt(str1, 10);
        window.localStorage.setItem("saldo", cont);
        var cont2 = window.localStorage.getItem("retiros");//suma 1 al numero de retiros que se ha hecho
        cont2 = parseInt(cont2, 10) + 1;
        window.localStorage.setItem("retiros", cont2); 
            var tot=window.localStorage.getItem("totalRetiros");//lleva cuenta de total de retiros para poder graficarlos
         tot = parseInt(tot,10) + parseInt(str1,10);
         window.localStorage.setItem("totalRetiros",tot);
    }
    if (str1 > localStorage.getItem("saldo")) {
        swal("Error", "Fondos insuficientes", "info");
        document.getElementById("InputMonto").value = "";
    }
    if (str1 == "") {
        swal("Error", "Ingresa un valor", "error");
    }
            document.getElementById("InputMonto").value = "";

}

function testClear() {
    localStorage.clear();
}

function checkSaldo() { //revisa si es localstorage ya tiene saldo guardado, si tiene se trabaja en base a eso, si no inicia saldo de 500
    if (localStorage.getItem("saldo") == null) {
        window.localStorage.setItem("saldo", 500); //saldo inicial
        window.localStorage.setItem("depositos", 0);
        window.localStorage.setItem("retiros", 0);
        window.localStorage.setItem("totalIngresos", 500); //saldo inicial
        window.localStorage.setItem("totalRetiros", 0);

	 }
    document.getElementById("saldo").innerHTML = localStorage.getItem("saldo"); //muestra el valor de localstorage en el menu principal
}


function loadNum(){ //carga tabla de n transacciones
const labels = [
            'Depositos',
            'Retiros',
        ];

const data = {
    labels: labels,
    datasets: [{
        label: 'Transacciones',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(25, 99, 132)',
        data: [window.localStorage.getItem("depositos"),window.localStorage.getItem("retiros")],

            }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};
	
	        const nTrans = new Chart(
            document.getElementById('nTrans'),
            config
        );
}

function loadPorc(){ //carga tabla de % de gastos
const labels = [
            'Ingresos',
            'Retiros',
        ];

const data = {
    labels: labels,
    datasets: [{
        label: 'Monto $',
        backgroundColor: 'rgb(255, 255, 132)',
        borderColor: 'rgb(25, 99, 132)',
        data: [window.localStorage.getItem("totalIngresos"),window.localStorage.getItem("totalRetiros")],

            }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
    }
};
	
	        const nTrans = new Chart(
            document.getElementById('porcentajes'),
            config
        );
}
