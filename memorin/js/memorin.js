let iconos = ["&#128520;", "&#129313;", "&#129312;", "&#128519;", "&#128125;", "&#128123;", "&#128126;", "&#128373;", "&#128585;", "&#129302;"];

function App() {

    //Pedimos el maxFilas y maxColumnas al usuario.
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuantas columnas quieres?');
    
    totalCasillas = maxFilas * maxColumnas;
    
    if ((totalCasillas % 2) != 0) {
        let esPar = false;
        
            while(esPar == false){
                
                maxFilas = prompt('¡¡¡ERROR!!! La cantidad de filas y columnas debe ser un número par ¿Cuántas filas quieres?');
                maxColumnas = prompt('¿Cuantas columnas quieres?');

                let totalCasillas = maxFilas * maxColumnas;

                if ((totalCasillas % 2) == 0){
                    esPar == true;
                    break;
                } 
                
            }
        
    } 

    tableroMemorin = crearTablero(maxFilas, maxColumnas);
    pintarTablero(tableroMemorin, maxFilas, maxColumnas);

}

function crearTablero(maxFilas, maxColumnas){
    let arrayTablero = [];

    for (let fila = 0; fila < maxFilas; fila++){
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columna = 0; columna < maxColumnas; columna++){
            arrayTablero[fila][columna] = '';
        }
    }

    return arrayTablero

}

function pintarTablero(tablero, filas, columnas){
    document.write('<table>');

    for (let i = 0; i < filas; i++){
        document.write('<tr>');

        for (let j = 0; j < columnas; j++){
            document.write('<td>' + tablero[i][j] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function colocarIconos(){

}

console.log(crearTablero);
document.write(iconos);

App();