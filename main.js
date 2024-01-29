function encriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let cifrado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    console.log(cifrado)
}

function desencriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let decifrado = mensaje
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    console.log(decifrado)
}