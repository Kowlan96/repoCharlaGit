function mostrarColor() {
    var colorInput = document.getElementById("colorInput").value;
    var colorDisplay = document.getElementById("colorDisplay");
    
    // Verificar si el color introducido es válido
    if (/^#([0-9A-F]{3}){1,2}$/i.test(colorInput)) {
      colorDisplay.style.backgroundColor = colorInput;
    } else {
      alert("Por favor, introduce un color válido en formato hexadecimal (#xxxxxx).");
    }
  }