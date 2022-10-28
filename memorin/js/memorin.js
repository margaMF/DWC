let iconos = ["&#128520;", "&#129313;", "&#129312;", "&#128519;", "&#128125;", "&#128123;", "&#128126;", "&#128373;", "&#128585;", "&#129302;"];

function App() {

    //Pedimos el maxFilas y maxColumnas al usuario.
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuantas columnas quieres?');

    totalCasillas = maxFilas * maxColumnas;

    if ((totalCasillas % 2) != 0) {
        let esPar = false;

        while (esPar == false) {

            maxFilas = prompt('¡¡¡ERROR!!! La cantidad de filas y columnas debe ser un número par ¿Cuántas filas quieres?');
            maxColumnas = prompt('¿Cuantas columnas quieres?');

            let totalCasillas = maxFilas * maxColumnas;

            if ((totalCasillas % 2) == 0) {
                esPar == true;
                break;
            }

        }

    }

    tableroMemorin = crearTablero(maxFilas, maxColumnas);
    tableroMemorin = colocarIconos(tableroMemorin, iconos, maxFilas, maxColumnas);
    pintarTablero(tableroMemorin, maxFilas, maxColumnas);

}

function crearTablero(maxFilas, maxColumnas) {
    let arrayTablero = [];

    for (let fila = 0; fila < maxFilas; fila++) {
        arrayTablero[fila] = new Array(maxColumnas);

        for (let columna = 0; columna < maxColumnas; columna++) {
            arrayTablero[fila][columna] = '';
        }
    }

    return arrayTablero

}

function pintarTablero(tablero, filas, columnas) {
    document.write('<table>');

    for (let i = 0; i < filas; i++) {
        document.write('<tr>');

        for (let j = 0; j < columnas; j++) {
            document.write('<td>' + tablero[i][j] + '</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

function colocarIconos(arrayTablero, iconos, maxFilas, maxColumnas) {

    let casillas = (maxFilas * maxColumnas) / 2;
    let contador = 0;

    let posFila;
    let posFila2;
    let posColumna;
    let posColumna2;
    let i = 0;
    let esIgual = false;
    
    while (contador < casillas) {
        if (i >= 10) {
            i = 0;
        }
        esIgual = false;
        posFila = Math.floor(Math.random() * maxFilas);
        posColumna = Math.floor(Math.random() * maxColumnas);
        posFila2 = Math.floor(Math.random() * maxFilas);
        posColumna2 = Math.floor(Math.random() * maxColumnas);
        if(posFila == posFila2 && posColumna == posColumna2){
            esIgual = true;
        }
        if (arrayTablero[posFila][posColumna] == '' && arrayTablero[posFila2][posColumna2] == '' && esIgual == false) {
            arrayTablero[posFila][posColumna] = iconos[i];
            arrayTablero[posFila2][posColumna2] = iconos[i];
            contador++;
            i++;
        } else {
            let esVacio = false;

            do {
                esIgual = false;
                posFila = Math.floor(Math.random() * maxFilas);
                posColumna = Math.floor(Math.random() * maxColumnas);
                posFila2 = Math.floor(Math.random() * maxFilas);
                posColumna2 = Math.floor(Math.random() * maxColumnas);

                if(posFila == posFila2 && posColumna == posColumna2){
                    esIgual = true;
                }

                if (arrayTablero[posFila][posColumna] == '' && arrayTablero[posFila2][posColumna2] == '' 
                    && esIgual == false) {
                    arrayTablero[posFila][posColumna] = iconos[i];
                    arrayTablero[posFila2][posColumna2] = iconos[i];
                    esVacio = true;
                    contador++;
                    i++;
                }

            } while (esVacio == false);
        }

    }
    return arrayTablero;

}

App();
console.log(crearTablero);