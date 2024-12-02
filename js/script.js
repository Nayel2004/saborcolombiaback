let menuVisible = false; //variable que mantiene el estado del menu

// funcion que muestra o oculta el menu

function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// funcion cuando el usuario quiera ocultar el menu cuando el selecciona una opcion

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}