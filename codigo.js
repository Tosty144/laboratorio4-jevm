function encriptar() {

    let e = document.getElementById("e").value;
    let n = document.getElementById("n").value;
    let texto = document.getElementById("textoen").value;

    document.getElementById("rta").innerHTML =
        "Valor de e: " + e + "<br>" +
        "Valor de n: " + n + "<br>" +
        "Texto: " + texto;
}

function desencriptar() {

    let texto = document.getElementById("textode").value;

    document.getElementById("rta").innerHTML =
        "Desencriptando: " + texto;
}