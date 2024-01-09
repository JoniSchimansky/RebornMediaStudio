<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "jonischimansky@gmail.com"; // Cambiar por email de empresa
    $subject = "Nuevo mensaje de formulario de contacto";
    $txt = "Has recibido un nuevo mensaje:\n\nNombre: $name $surname\nTeléfono: $phone\nEmail: $email\nAsunto: $subject\nMensaje: $message";

    $headers = "From: $email" . "\r\n" .
    "CC: jonischimansky@gmail.com";

    if (mail($to, $subject, $txt, $headers)) {
        echo "¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo lo antes posible.";
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>


