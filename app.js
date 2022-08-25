function enviarSaludo(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let saludo = document.querySelector("#saludo");
    let texto = "hola " + nombre.value + " "+ apellido.value +", gracias por rellenar el formulario";
    
    saludo.innerHTML= texto;
}