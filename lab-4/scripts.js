// Validación de formulario
document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    
    const nombre = document.getElementById("nombre").value;
    const motivo = document.getElementById("motivo").value;
    const correo = document.getElementById("correo").value;
    
    if (nombre === "" || motivo === "" || correo === "") {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos.";
        document.getElementById("mensaje").style.color = "red";
    } else {
        document.getElementById("mensaje").textContent = "¡Formulario enviado con éxito!";
        document.getElementById("mensaje").style.color = "green";
    }
});
