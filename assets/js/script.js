
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

//capturamos formulario por su id
let formRegistro = document.getElementById("formRegistro");
//agregamos un listener al evento submit
formRegistro.addEventListener("submit", function(event){
    //suspender el evento por defecto del formulario que envía los datos
    event.preventDefault();

    //INPUTS DEL FORMULARIO
    let nombreForm = document.getElementById("nombre");
    let apellidoForm = document.getElementById("apellido");
    let emailForm = document.getElementById("email");
    let passwordForm = document.getElementById("password");

    //muestro los valores que tienen los inputs
    console.log("nombre", nombreForm.value);
    console.log("apellido", apellidoForm.value);
    console.log("email", emailForm.value);
    console.log("password", passwordForm.value);

    alert(`Gracias ${nombreForm.value} ${apellidoForm.value} por inscribirte.`);

})




