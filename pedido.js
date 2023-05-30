function calcularPrecio() {
    let cantidadTickets = document.getElementById("cantidad").value;
    let tipoComprador = document.getElementById("tipoComprador").value;
    
    let descuento = obtenerDescuento(tipoComprador);
    let precioPack = 3000; // Precio del pack
    
    let precioTotal = cantidadTickets * precioPack * (1 - descuento);
        
    document.getElementById("precioFinal").textContent = "Precio final: $" + + precioTotal.toFixed(2);
  }
  
  function obtenerDescuento(tipoComprador) {
    let descuento = 0;
    
    if (tipoComprador === "Ncomprador") {
      descuento = 0.05; // 5% de descuento para trainee
    } else if (tipoComprador === "tomador") {
      descuento = 0.1; // 10% de descuento para estudiante
    } else if (tipoComprador === "matero") {
        descuento = 0.15; // 15% de descuento para estudiante
      }
    
    
    return descuento;
  }

  function borrarFormulario() {
    var camposTexto = document.getElementsByClassName("form-control");
    var select = document.getElementsByClassName("form-select")[0];
  
    for (var i = 0; i < camposTexto.length; i++) {
      camposTexto[i].value = "";
    }
  
    select.selectedIndex = 0;
  }