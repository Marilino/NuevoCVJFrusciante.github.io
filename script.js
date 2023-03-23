function changeHandle() {
    var a = document.getElementById('tipo-de-contacto').value;
    if (a == "ent") {
        document.getElementById('respuesta').innerHTML = "Lunes a viernes de 08:00 hs. a 16:00 hs.";
    }
    else if (a == 'vll') {
        document.getElementById('respuesta').innerHTML = "Lunes a sábado de 08:00 hs. a 20:00 hs.";
    }
    else if (a == 'tel') {
        document.getElementById('respuesta').innerHTML = "Lunes a domingo de 08:00 hs. a 23:00 hs";
    }
    else if (a == 'sel') {
        document.getElementById('respuesta').innerHTML = '';
    }
}