window.onload = function(){
  let nodoSelect1 = document.getElementById('paises');
  nodoSelect1.addEventListener('click', mostrarPaises);
  nodoSelect1.addEventListener('change', mostrarCiudades);

  let nodoSelect2 = document.getElementById('ciudades');
  nodoSelect2.addEventListener('click', mostrarCiudad);
}

function mostrarPaises() {
  let nodoSelect1 = document.getElementById('paises');

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    
    let paises = this.responseText;
    let arrayPaises = paises.split(', ');
    let select = document.getElementById('paises');

    for (let i = 0; i < arrayPaises.length; i++) {
      let nodoOption = document.createElement('option');
      nodoOption.innerHTML = arrayPaises[i];
      select.appendChild(nodoOption);
    }
  }
  xmlhttp.open("GET", "php/accesoBaseDatosPais.php");
  xmlhttp.send();
} 

function mostrarCiudades(){
  let nodoSelect1 = document.getElementById('paises');
  let pais = nodoSelect1.value;

      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
        
        let ciudades = this.responseText;
        let arrayCiudades = ciudades.split(', ');
        let select = document.getElementById('ciudades');
  
        for (let i = 0; i < arrayCiudades.length; i++) {
          let nodoOption2 = document.createElement('option');
          nodoOption2.innerHTML = arrayCiudades[i];
          select.appendChild(nodoOption2);
        }
      }
      xmlhttp.open("GET", "php/accesoBaseDatosCiudades.php?q="+pais);
      xmlhttp.send();
}

function mostrarCiudad(){
  let nodoSelect2 = document.getElementById('ciudades');
  let ciudad = nodoSelect2.value;
  
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    
    let datosciudad = this.responseText;
    console.log(this.response);
    let arrayDatos = datosciudad.split(', ');
    let div = document.getElementById('infoCiudad');

    let nodoH1 = document.createElement('h1');
    nodoH1.innerHTML = arrayDatos[0];
    div.appendChild(nodoH1);

    let nodoP1 = document.createElement('p');
    nodoP1.innerHTML = "Districte: " + arrayDatos[1];
    div.appendChild(nodoP1);

    let nodoP2 = document.createElement('p');
    nodoP2.innerHTML = "Població: " + arrayDatos[2];
    div.appendChild(nodoP2);

  }
  xmlhttp.open("GET", "php/accesoBaseDatosCiudad.php?q="+ciudad);
  xmlhttp.send();
}






