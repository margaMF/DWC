window.onload = function() {
  let nodoSelect = document.getElementById('paises');
  nodoSelect.addEventListener('change', mostrar);
}


function mostrar() {
  let nodoSelect = document.getElementById('paises'); 
  let letra = nodoSelect.value;
  
  if (letra.length == 0) { 
    document.getElementById('tabla').innerHTML = '';
    return;
  }else{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      
      let paises = this.responseText;
      let arrayPaises = paises.split(', ');

      for (let i = 0; i < arrayPaises.length; i++) {
        let nodoTr = document.createElement('tr');
        document.getElementById('tabla').appendChild(nodoTr);
        nodoTr.innerHTML = arrayPaises[i];
      }
    }
    xmlhttp.open("GET", "php/accesoBaseDatos2.php?q="+letra);
    xmlhttp.send();
  } 
}  




