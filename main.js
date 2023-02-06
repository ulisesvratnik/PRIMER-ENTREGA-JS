//ACCESO A NUESTRO SITIO
let Usuario = prompt("Elija su nombre de usuario");

//CREAMOS UN DO WHILE POR SI EL USUARIO PONE MAL LA CLAVE LA VUELVE A PEDIR
for (let i = 0; i < 1; i++) {
    do {
        passwordUsuario = parseInt(prompt("Eliga su clave de ingreso"));
        repitePassword = parseInt(prompt("Vuelva a ingresar su clave de ingreso"));
    } while (passwordUsuario != repitePassword)
    alert("Hola " + Usuario + ", Bienvenido a Model Import!");
    continue;
}

//FUNCIONES
function calcularIva(precioSmartwacht) {
    let compraSmartwacht = (precioSmartwacht * iva);
    return compraSmartwacht;
}

function calcularIva(precioAuricular) {
    let compraAuricular = (precioAuricular * iva);
    return compraAuricular;
}

//PRECIOS Y NOMBRE DE PRODUCTOS
const nombreSmartwacht = "Smartwacht Y13"
const precioSmartwacht = 8000

const nombreAuricular = "Auricular I12 PRO"
const precioAuricular = 3500

const iva = 1.21

let modelos = prompt("Contamos con smartwacht y auriculares, que producto te gustaria ver?")

// SEGUN LA OPCION SELECIONADA SE DARA EL RESULTADO DE SU COMPRA FINAL, ESTO SE REALIZA GRACIAS A LA FUNCION DE LA SUMA DEL IVA
if (modelos == "smartwacht" || modelos == "Smartwacht" || modelos == "SMARTWACHT") {
    alert("Elegiste la opcion de Smartwacht, te los mostramos a continuacion:");
    alert("Smartwacht Y13 tiene un precio de $" + precioSmartwacht + "+IVA");
    let compraSmartwacht = calcularIva(precioSmartwacht);
    alert("El valor final con el IVA incluido es de $" + compraSmartwacht + ". ¡Gracias por su compra!")
} else if (modelos == "auriculares" || modelos == "Auriculares" || modelos == "AURICULARES") {
    alert("Elegiste la opcion de auriculares, te los mostramos a continuacion:");
    alert("Auricular I12 PRO tiene un precio de $" + precioAuricular + "+IVA")
    let compraAuricular = calcularIva(precioAuricular);
    alert("El valor final con el IVA incluido es de $" + compraAuricular + ". ¡Gracias por su compra!")
} else {
    alert("Muchas gracias por visitar Model Import :)");
}