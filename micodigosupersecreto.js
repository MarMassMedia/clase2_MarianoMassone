document.getElementById("suma").addEventListener("click", (e)=>{sumatoria(), false});
document.getElementById("resta").addEventListener("click", (e)=>{restar(), false});
document.getElementById("multiplicacion").addEventListener("click", (e)=>{multiplicar(), false});
document.getElementById("division").addEventListener("click", (e)=>{dividir(), false});

function sumatoria() {
    document.getElementById("resultado").innerHTML = "su resultado es: " + (parseInt(document.getElementById("nro1").value) + parseInt(document.getElementById("nro2").value))};

function restar() {
    document.getElementById("resultado").innerHTML = "su resultado es: " + (parseInt(document.getElementById("nro1").value) - parseInt(document.getElementById("nro2").value)) ; 
};

function multiplicar() {
    document.getElementById("resultado").innerHTML = "su resultado es: " + (parseInt(document.getElementById("nro1").value) * parseInt(document.getElementById("nro2").value)) ; 
};

function dividir() {
    document.getElementById("resultado").innerHTML = "su resultado es: " + (parseInt(document.getElementById("nro1").value) / parseInt(document.getElementById("nro2").value)) ; 
};
