/*document.write('<table>');
document.write('<tr>');
document.write('<td></td>');
document.write('<td></td>');
document.write('<td></td>');
document.write('<td></td>');
document.write('<td></td>');
document.write('</tr>');
document.write('</table>');*/

let maxFilas = prompt('¿Cuántas filas quieres?');
let maxColumnas = prompt('¿cuántas columnas quieres?');
let numMinas = prompt('¿Cuantas minas quieres introducir?');

/*
//Creamos el tablero en html.

document.write('<table>');

for (let i = 0; i < maxFilas; i++){
    document.write('<tr>');

    for (let j= 0; j < maxColumnas; j++) {
        document.write('<td></td>');
    }

    document.write('</tr>');
}
document.write('</table>');
*/
//Crear array bidimensional para guardar las minas

let arrayTablero = [];
let contadorMinas = 0;
let posFila;
let posColumna;

for (let fila = 0; fila < maxFilas; fila++){
    arrayTablero[fila] = [];

    for (let columna = 0; columna < maxColumnas; columna++){

        arrayTablero[fila][columna] = '';

    }
}

while (contadorMinas < numMinas){

    posFila = Math.floor(Math.random()*maxFilas);
    posColumna = Math.floor(Math.random()*maxColumnas);

    if (arrayTablero[posFila][posColumna] != 'MINA'){
        arrayTablero[posFila][posColumna] = 'MINA';
        contadorMinas++;
    };

   
};

console.log(arrayTablero);
console.log(contadorMinas);








/*
    <table>
        <tr>
            <th colspan="5">Ejemplo de resultado final (tablero 5x5 y 5 minas)</th>
        </tr>
        <tr>
            <td>1</td>
            <td>MINA</td>
            <td>1</td>
            <td></td>
            <td>1</td>
        </tr>
        <tr>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>1</td>
            <td>MINA</td>
            <td>2</td>
        </tr>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>MINA</td>
        </tr>
        <tr>
            <td>1</td>
            <td>MINA</td>
            <td>2</td>
            <td>3</td>
            <td>MINA</td>
        </tr>
    </table>
*/
