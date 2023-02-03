//Función para validar el nombre y apellidos del formulario
function validarNombre(){
    let patron = /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/;

    this.className = "";
    if (patron.test(this.value)) {
        this.className = "verde";
    }
}

//Función para validar el email del formulario
function validarEmail(){
    let patron = /^.+@.+$/;

    this.className = "";
    if (patron.test(this.value)) {
        this.className = "verde";
    }
}

//Función para validar varios patrones
function validarDatos(){
    let patrones = new Map();

   patrones.set("nombre", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/);
   patrones.set("apellidos", /^[A-Za-záéíóúüàèiòÁÉÍÓÚÀÈÒÜñÑçÇ]{2,}$/);
   patrones.set("email", /^.+@.+$/);
   patrones.set("telefonoNacional", /^([89][^09]|[67][0-9])[0-9]{7}$/);
   patrones.set("telefonoPrefijo", /^\(\+[0-9]{1,3}\)[89][^09]|[67][0-9][0-9]{7}$/);
   patrones.set("fecha", /^([0][1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}$/);
   patrones.set("codigoPostal", /^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/);
   patrones.set("tiempo", /^([0-1][0-9]|2[0-3])(:([0-5][0-9])){2}$/);
//    patrones.set("tarjeta", /^4[0-9]{12}|[0-9]{15}
//    |5[1-5][0-9]{14}|
//    6011[0-9]{12}|5[0-9]{14}|
//    34|37[0-9]{13}|
//    30[0-5][0-9]{11}|36|38[0-9]{12}        
//      REVISAR LOS DOS ULTIMOS
//    |2131[0-9]{15}|1800[0-9]{15}
//    |35{16}$/);

   this.className = "";

    if (patrones.get(this.id).test(this.value)) {
        this.className = "verde";
    }
}

    //Ejecución de la aplicación
    window.addEventListener('load', function(){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let email = document.getElementById('email');

    nombre.addEventListener('keyup', validarDatos);
    apellidos.addEventListener('keyup', validarDatos);
    email.addEventListener('keyup', validarDatos);
});
