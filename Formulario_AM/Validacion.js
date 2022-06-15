//SELECCION DEL FORMULARIO
//Este es el archivo validacion.js
//Conociendo el id
var formulario = document.getElementById("formulario");
var formulario2 = document.forms["formulario"];

//Conociendo el número de formulario que es en la página
var formulario3 = document.getElementsByTagName("form")[0];
var formulario4 = document.forms[0];

//SELECCIONAR ELEMENTOS DE UN FORMULARIO
//.elements[] Devuelve un array con todos los input del formulario
//getElementById("idElemento") Devuelve un elemento con un id determinado
//getElementsByTagName("etiqueta") Devuelve un array con elementos de un tipo de etiqueta (input, select, etc.)
//getElementsByName("nombre") Devuelve un array con elementos que tienen el mismo nombre (por ejemplo, radiobutton).

window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (isNaN(elemento.value) == "") {
        alert("Inserte un nombre valido");
        return false;
    }
    return true;
}

function apellido1() {
    var apellido = document.getElementById("apellido1");
    if (isNaN(apellido.value) == "") {
        alert("inserte un apellido valido");
        return false;
    }
    return true;
}

function apellido2() {
    var apellido2 = document.getElementById("apellido2");
    if (isNaN(apellido2.value) == "") {
        alert("Inserte un segundo apellido valido");
        return false;
    }
    return true;
}

function cp() {
    var cp = document.getElementById("codigopostal");
    if (isNaN(cp.value)){
        alert("El campo del codigo postal tiene que ser numerico");
        return false;
    }if(cp.value == ""){
        alert("El campo del codigo postal debe estar lleno");
        return false;

    }
    return true;
}

function municipio() {
    var municipio = document.getElementById("municipio");
    if (isNaN(municipio.value) == "") {
        alert("ingrese un municipio valido");
        return false;
    }
    return true;
}

function calle(){
    var calle1 = document.getElementById("calle1");
    if (isNaN(calle1.value)){
        alert("ingrese un dato valido");
        return false;
    }
    return true;
}

function direccion() {
    var direccion = document.getElementById("direccion");
    if (direccion.value == "") {
        alert("Ingrese una direccion valida");
        return false;
    }
    return true;
}



function email() {
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var email = document.getElementById("email");
    if (emailRegex.test(email.value) == "") {
        alert("Ingrese un correo electronico valido");
        return false;
    }
    return true;
}

function validaTelefonof() {
    var telefonof = document.getElementById("telefonof");
    if (isNaN(telefonof.value)) {
        alert("El campo teléfono fijo tiene que ser numérico");
        return false;
    }if(telefonof.value == ""){
        alert("El campo teléfono fijo debe estar lleno");
        return false;
    }
    return true;
}

function validaTelefonom() {
    var telefonom = document.getElementById("telefonom");
    if (isNaN(telefonom.value)) {
        alert("El campo de teléfono movil tiene que ser numérico");
        return false;
    }if(telefonom.value == ""){
        alert("El campo teléfono movil debe estar lleno");
        return false;
    }
    return true;
}


function validar(e) {
    if (validaNombre() && apellido1() && apellido2() && cp() && municipio() && email() && direccion() && validaTelefonof() && validaTelefonom() && calle() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}


