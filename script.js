function encriptar(cadena){
    var cadenanueva ='';
    
    function cambiar(caracter){
        const vocales ='aeiou';
        const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
        return((vocales.indexOf(caracter) >= 0) ? mapa.get(caracter) : caracter);
    }

    for (var i = 0; i < cadena.length; i++){
        cadenanueva += cambiar(cadena.substr(i,1));
    }
    return (cadenanueva)
}

function desencriptar(cadena){
    const mapa = new Map ([["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]);
    var vocales ='aeiou';
    for (var i = 0 ; i < vocales.length; i++){
        var caracter = vocales.substr(i,1);
        var re = new RegExp(mapa.get(caracter), 'g');
        var cadena = cadena.replace(re, caracter)
    }
    return(cadena);
}

document.getElementById("input-texto").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("input-texto");
  const expr = new RegExp("[^A-Za-z ]", 'g')
  x.value = x.value.toLowerCase().replace(expr, "");
}

var botonencriptar = document.querySelector("#btn-encriptar");

botonencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var x = document.getElementById("input-texto");
    var y = document.getElementById("msg");
    y.value = encriptar(x.value);
});

var botondesencriptar = document.querySelector("#btn-desencriptar");

botondesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var x = document.getElementById("input-texto");
    var y = document.getElementById("msg");
    y.value = desencriptar(x.value);
});


var botoncopiar = document.querySelector("#btn-copy");

botoncopiar.addEventListener("click",function(event){
    event.preventDefault();
    var y = document.getElementById("msg");
    console.log(y.value);
    y.select();
    navigator.clipboard.writeText(y.value)
});
