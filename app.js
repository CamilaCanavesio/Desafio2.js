let formulario = document.getElementById ("form")

formulario.addEventListener('submit', datosForm)

function datosForm(e){
    e.preventDefault();
    let datos = e.target
    console.log(datos.children[0].value)
    console.log(datos.children[1].value)

}