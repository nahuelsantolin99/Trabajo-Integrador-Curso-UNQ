function validarIngreso() {
    let user = "Nahuel";
    let contrasenia = "welcome";

    if (//Comparo lo que ingresó el usuario con los valores correctos
        document.getElementById("usuario").value == user &&
        document.getElementById("contrasenia").value == contrasenia) 
    {
        relocalizar();
    }
    else 
    {
        //Aviso con ventana que se revise el usuario y contraseña
        alert("Revise usuario y/o contraseña");
    }
}

function agregarComentario(){
    //Creo un elemento de tipo párrafo
    let nuevoElemento = document.createElement("p");
    //Identifico por id el dato que necesito
    let comentario = document.getElementById("coment");
    //Escribo el contenido en la variable que cree
    nuevoElemento.innerHTML = comentario.value;
    //Identifico el div vacío
    let espacio = document.getElementById("espacio");
    //Agrego el elemento nuevo al espacio vacío
    espacio.appendChild(nuevoElemento);
}

function mostrarCompra(){
    //Me guardo en dos variables el contenido del div que identifique por id
    let producto = document.getElementById("opcion").value;
    let cantidad = document.getElementById("cant").value;

    //Muestro con una ventana la cantidad y producto que se compró
    alert("Usted compró " + cantidad + " unidades de " + producto);
}

function relocalizar(){
    window.location.href = "home.html";
}