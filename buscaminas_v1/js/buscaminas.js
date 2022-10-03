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

//Crear array bidimensional para guardar las minas

let arrayTablero = [];
for (let mina = 0; mina < numMinas; mina++){
    posFila = Math.floor(Math.random()*maxFilas);
    console.log(posFila);
    //arrayTablero[posFila][posColumna] = 'MINA';
}




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
