
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
    let replyPasswordForm = document.getElementById("replyPassword");

    //muestro los valores que tienen los inputs
    let nombre = nombreForm.value;
    let mensaje = "";
    if(nombre == ""){
        mensaje = "Debe proporcionar un nombre válido."
        messageOutput(mensaje, true);
        return;
    }

    let apellido =  apellidoForm.value;
    if(apellido == ""){
        mensaje = "Debe proporcionar un apellido válido."
        messageOutput(mensaje, true);
        return;
    }

    let email = emailForm.value;
    if(email == ""){
        mensaje = "Debe proporcionar un email válido."
        messageOutput(mensaje, true);
        return;
    }
    let password = passwordForm.value;
    let replyPassword = replyPasswordForm.value
    if(password == "" || replyPassword == "" || password != replyPassword){
        mensaje = "Debe proporcionar un password válido y verificar que ambos password sean iguales."
        messageOutput(mensaje, true);
        return;
    }

    mensaje = "Usuario registrado con éxito.";
    messageOutput(mensaje)
    






    
});

function messageOutput(mensaje, error = false){
    //MANIPULAR ATRIBUTOS DE UN ELEMENTO
    //mensajeForm.setAttribute("style", "color:green; background-color: blue; padding:30px;");

    let mensajeForm = document.getElementById("mensajeForm");
    mensajeForm.innerHTML = mensaje;
    if(error){
        mensajeForm.classList.remove("message-success");
        mensajeForm.classList.add("message-error");
    }else {
        mensajeForm.classList.remove("message-error");
        mensajeForm.classList.add("message-success");
    }

    

}




