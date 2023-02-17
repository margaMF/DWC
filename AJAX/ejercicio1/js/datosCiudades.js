window.onload = function() {
  let nodoInput = document.getElementById('ciudad');
  nodoInput.addEventListener('keyup', mostrar);
}

function mostrar() {
  let nodoInput = document.getElementById('ciudad');
  let letra = nodoInput.value;
  
    if (letra.length == 0) { 
      document.getElementById('sugerencias').innerHTML = '';
    }else{
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
      document.getElementById('sugerencias').innerHTML = this.responseText;
    }
    xmlhttp.open("GET", "php/accesoBaseDatos.php?q="+letra);
    xmlhttp.send(); 
    }  
  }