function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Isa" && password === "justin") {
        alert("Inicio de sesión exitoso");
    } else {
        if (username !== "Isa" && password !== "justin") {
            alert("Usuario y contraseña incorrectos. Por favor, inténtalo de nuevo.");
        } else {
            if (username !== "Isa") {
                alert("Usuario incorrecto. Por favor, inténtalo de nuevo.");
            } else {
                alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
            }
        }
    }

    clearFields(); // Limpiar los campos
}

function clearFields() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
