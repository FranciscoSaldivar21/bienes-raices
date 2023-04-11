//Una vez argandose el DOM y todos los archivos se ejecutará la función  CALLBACK
document.addEventListener('DOMContentLoaded', function() {
    //Llama a una función 
    eventListeners();
    //Comprobar dark-mode del sistema
    comprobarDarkMode();
    //En cuanto este listo el DOM esta disponible la función  
    darkMode();
});

//Comprobar preferencias del sistema para DarkMode
function comprobarDarkMode() {
    preferencias = window.matchMedia('prefers-color-scheme: dark');

    if(preferencias.matches) {
        document.body.classList.toggle('darkMode');
    }


    //Código para agregar DarkMode leyendo las preferencias del sistema en tiempo real
    preferencias.addEventListener('change', function() {
        if(preferencias.matches) {
            document.body.classList.add('darkMode');
        }else{
            document.body.classList.remove('darkMode');
        }
    })
}
function darkMode() {
    const boton = document.querySelector('.dark-mode-boton');
    boton.addEventListener('click', function(){
        document.body.classList.toggle('darkMode');  //Agrega o quita dark mode al body
    });
}
function eventListeners() {
    const navegacion = document.querySelector('.menu-movil'); //Se agrega el evento al div de menu-movil
    navegacion.addEventListener('click', menuMovil);
}

function menuMovil() {
    const navegacion = document.querySelector('.navegacion');  //Se lo agrega a navegación
    navegacion.classList.toggle('mostrar');
}