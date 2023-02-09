
const registroPacientes = new Map([
    [`AAA024`, `Fernández M. (321790059) -> C/Recoletos, 50`],  
    [`BCD827`, `Ruíz P. (100973253) -> C/Esquerdo izquierdo, 103`],
    [`YUN835`,`Benítez E. (154811767) -> Av.Argentina, 5`]
]);

let i = 0;


registroPacientes.forEach (function(valor, clave) {
    let numeroRegistro = clave;
    i++

    let direccion = valor.split(') -> ')[1];
    let nombreCompleto = valor.split(') -> ')[0].split(' (')[0];
    let numeroSS = valor.split(') -> ')[0].split(' (')[1];

    let valorCompleto = `numeroRegistro: ${numeroRegistro}, nombreCompleto: ${nombreCompleto}, numeroSS: ${numeroSS}, direccion: ${direccion}`;

    let mapaNuevo = new Map();
    mapaNuevo.set(`Paciente ${i}`, valorCompleto);
});

console.log(mapaNuevo);





  