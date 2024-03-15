
//CAPTURANDO ELEMENTO POR SU ID
let tituloPrincipal = document.getElementById("tituloPrincipal");
//console.log(tituloPrincipal);

//CAPTURAR ELEMENTOS POR SU CLASE
let subtitulos = document.getElementsByClassName("subtitulo");
// console.log(subtitulos);

//CAPTURAR ELEMENTOS POR SU TAGNAME
let parrafos = document.getElementsByTagName("p");
//console.log(parrafos);

//CAPTURAR VARIOS ELEMENTOS CON querySelectorAll
let parrafosSeccion1 = document.querySelectorAll("#seccion1 p");
//console.log(parrafosSeccion1);

let primerParradoS2 = document.querySelector("#seccion2 p");
//console.log(primerParradoS2);

//innerText permite cambiar u obtener el contenido (texto) de un elemento
primerParradoS2.innerText = "Párrafo 1";

//CAMBIAR CONTENIDO AL SUBTITULO DE LA SECCIÓN 2
let subtituloS2 = document.querySelector("#seccion2 .subtitulo");
subtituloS2.innerHTML = "<em>Hola mundo!</em>";
console.log(subtituloS2.innerText);


//MANIPULANDO FORMULARIOS


