
class Tablero {

    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.iconos = ["&#128520;", "&#129313;", "&#129312;", "&#128519;", "&#128125;", "&#128123;", "&#128126;", "&#128373;", "&#128585;", "&#129302;"];

        this.crearTablero();
    }

    crearTablero() {
        //Se crea un array para guardar los iconos.

        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }

    }

    // pintarTablero() {
    //     //Se crea el tablero en html

    //     document.write('<table>');

    //     for (let i = 0; i < this.filas; i++) {
    //         document.write('<tr>');

    //         for (let j = 0; j < this.columnas; j++) {
    //             document.write(`<td><p>${this.arrayTablero[i][j]}</p></td>`);
    //         }
    //         document.write('</tr>');
    //     }
    //     document.write('</table>');
    // }

    pintarTableroDOM() {
        //Se crea el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna.document.createElement('td');
                fila.appendChild(columna);
            }
        }
        document.body.appendChild(tabla)
    }

}

class Memorin extends Tablero {

    constructor(filas, columnas, iconos) {
        super(filas, columnas, iconos);

        this.colocarIconos();
    }

    colocarIconos() {
        //Se comprueba si la casilla está vacía, si es así, se imprime el icono, si no, se genera de nuevo otro númeor aleatorio.

        let casillas = (this.filas * this.columnas) / 2;
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
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);
            posFila2 = Math.floor(Math.random() * this.filas);
            posColumna2 = Math.floor(Math.random() * this.columnas);
            if (posFila == posFila2 && posColumna == posColumna2) {
                esIgual = true;
            }
            if (this.arrayTablero[posFila][posColumna] == '' && this.arrayTablero[posFila2][posColumna2] == '' && esIgual == false) {
                this.arrayTablero[posFila][posColumna] = this.iconos[i];
                this.arrayTablero[posFila2][posColumna2] = this.iconos[i];
                contador++;
                i++;
            } else {
                let esVacio = false;

                do {
                    esIgual = false;
                    posFila = Math.floor(Math.random() * this.filas);
                    posColumna = Math.floor(Math.random() * this.columnas);
                    posFila2 = Math.floor(Math.random() * this.filas);
                    posColumna2 = Math.floor(Math.random() * this.columnas);

                    if (posFila == posFila2 && posColumna == posColumna2) {
                        esIgual = true;
                    }

                    if (this.arrayTablero[posFila][posColumna] == '' && this.arrayTablero[posFila2][posColumna2] == ''
                        && esIgual == false) {
                        this.arrayTablero[posFila][posColumna] = this.iconos[i];
                        this.arrayTablero[posFila2][posColumna2] = this.iconos[i];
                        esVacio = true;
                        contador++;
                        i++;
                    }

                } while (esVacio == false);
            }

        }

    }

}

//Se pide el número de filas y de columnas al usuario.
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
            esPar = true;
            
        }

    }

}

let memorin1 = new Memorin(maxFilas, maxColumnas);
console.log(memorin1.arrayTablero);
memorin1.pintarTablero();