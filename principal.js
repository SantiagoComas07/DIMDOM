const abrir = document.querySelectorAll(".ventana-informacion");
const cerrar = document.querySelectorAll(".cerrar-ventana");
const ventanas = document.querySelectorAll(".ventana");


abrir.forEach((boton, index) => {
    boton.addEventListener("click", function(event){
        event.preventDefault();
        ventanas[index].style.display = "block";
    });
});

cerrar.forEach((boton, index) => {
    boton.addEventListener("click", function(){
        ventanas[index].style.display = "none";
    });
});


window.addEventListener("click", function(event){
    ventanas.forEach((ventana) => {
        if (event.target === ventana) {
            ventana.style.display = "none";
        }
    });
});


ventanas.forEach((ventana) => {
    ventana.addEventListener("mouseleave", function() {
        ventana.style.display = "none";
    });
});