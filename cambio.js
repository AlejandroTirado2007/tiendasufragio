let contenedorPrincipal = document.getElementById("contenedor")

contenedorPrincipal.addEventListener("mouseover" , function(evento){
    

    if(evento.target.classList.contains("img-fluid")){

        evento.target.classList.add("cortina")
        
        
    }

})

contenedorPrincipal.addEventListener("mouseout" , function (evento){
    
    if(evento.target.classList.contains("cortina")){

        evento.target.classList.remove("cortina")
        
    }
})




