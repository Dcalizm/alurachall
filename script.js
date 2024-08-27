
function encriptar(c) {
    var conversion = ""
    switch(c){
        case "e":
            conversion = "enter";
            break;
        case "i":
            conversion = "imes";
            break;
        case "a":
            conversion = "ai";
            break;
        case "o":
            conversion = "ober";
            break;
        case "u":
            conversion = "ufat";
            break;
    }
    return conversion;
}

function codificar(palabra){
    var patronrexp=/[aeiou]/g;
    return palabra.replace(patronrexp, encriptar);
}


function desencriptar(c) {
    var conversion = ""
    if (c=="enter") {
        conversion = "e";
    }
    if (c=="imes") {
        conversion = "i";
    }
    if (c=="ai") {
        conversion = "a";
    }
    if (c=="ober") {
        conversion = "o";
    }
    if (c=="ufat") {
        conversion = "u";
    }
    return conversion;
}

function decodificar(palabra){
    var patronrexp=/enter|imes|ai|ober|ufat/g;
    return palabra.replace(patronrexp, desencriptar);
}
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector('#btn-desencriptar');
var btnCopiar = document.querySelector('#btn-copy');
var dfInput = document.querySelector("#input-texto");
var dfMsg = document.querySelector("#msg");

function validarEntrada(valor){
    var valida =true;
    if( valor == null || valor.length == 0 ){
        alert("NO PUEDEN HABER ESPACIOS EN BLANCO");
        valida = false;
    }
    else{
        if ( !( /^[a-z ]+$/.test(valor)) ) {
            alert("SOLO LETRAS MAYUSCULAS");
            valida = false;
        }
    }
    dfInput.focus();
    return valida;
}

btnEncriptar.addEventListener("CLICK", function(event){
	event.preventDefault();

    if (validarEntrada(dfInput.value) ) {
        dfMsg.value = codificar(dfInput.value);
        dfInput.value="";
    }
});

btnDesencriptar.addEventListener("CLICK", function(event){
	event.preventDefault();
    
    if (validarEntrada(dfInput.value) ) {
        dfMsg.value = decodificar(dfInput.value);
        dfInput.value="";
    }
});

btnCopiar.addEventListener("CLICK", function(event){
	event.preventDefault();
   
    if (dfMsg.value == "") {
        alert("NO HA NADA PARA COPIAR");
        dfInput.focus();
    }
    else {
        dfMsg.select();
        navigator.clipboard.writeText(dfMsg.value);
        dfInput.focus();
        
    }         
});