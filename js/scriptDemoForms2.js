// Ejemplo básico de manejo de envío de formularios
$(function () {
    // Manejo de envío de formulario de inicio de sesión
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        // Aquí puedes realizar la validación y envío del formulario
        console.log('Iniciar Sesión:', email, password);
    });

    // Manejo de envío de formulario de registro
    $('#registerForm').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var emailRegister = $('#emailRegister').val();
        var passwordRegister = $('#passwordRegister').val();
        // Aquí puedes realizar la validación y envío del formulario
        console.log('Registrarse:', name, emailRegister, passwordRegister);
    });
});