class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
       
    }

    crearTablero() {
        // Crear array bidimensional para guardar las minas
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }
    /*
    dibujarTablero() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }
    */

    dibujarTableroDom(){
        //Creamos el tablero en el DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);
            

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.innerHTML = this.arrayTablero[i][j];
               
                columna.id = `f${j}_c${j}`; 
                columna.dataset.f = i;
                columna.dataset.c = j; 
                fila.appendChild(columna);

                columna.addEventListener('click', this.despejar);
                columna.addEventListener('contextmenu', this.marcar);
            }

        }
        document.body.appendChild(tabla);

    }

    //Obtenerr el nodo que produjo el evento
    //obtener del nodo que produjo el evento el valor de su atributo data_fila y data_columna
    despejar(){
        alert("Despejando");

        //alert("Despejada celda (valor_fila, valor_columna)");
    }

    marcar(){
        alert("He marcado");
        //alert("Marcada celda (valor_fila, valor_columna)");
    }

    modificarFilas(nuevasFilas) {
        // Modificar el número de filas y volver a crear el tablero con las filas nuevas
        this.filas = nuevasFilas;

        this.crearTablero();
    }

    modificarColumnas(nuevasColumnas) {
        // Modificar el número de columnas y volver a crear el tablero con las columnas nuevas
        this.columnas = nuevasColumnas;

        this.crearTablero();
    }


}

class Buscaminas extends Tablero {
    constructor(filas, columnas, numMinas) {
        super(filas, columnas);
        this.numMinas = numMinas;

        this.colocarMinas();
        this.colocarNumMinas();
    }

    colocarMinas() {
        let contadorMinas = 0;
        let posFila;
        let posColumna;


        while (contadorMinas < this.numMinas) {
            posFila = Math.floor(Math.random() * this.filas);
            posColumna = Math.floor(Math.random() * this.columnas);

            if (this.arrayTablero[posFila][posColumna] != 'MINA') {
                this.arrayTablero[posFila][posColumna] = 'MINA';
                contadorMinas++;
            };
        };
    }

    colocarNumMinas() {
        let numMinasAlrededor;
    
        for (let fila = 0; fila < this.filas; fila++) {
            for (let columna = 0; columna < this.columnas; columna++) {
                numMinasAlrededor = 0;
                if (this.arrayTablero[fila][columna] != 'MINA') {
                    for (let cFila = fila - 1; cFila <= fila + 1; cFila++) {
                        if (cFila >= 0 && cFila < this.filas) {
                            for (let cColumna = columna - 1; cColumna <= columna + 1; cColumna++) {
                                if (cColumna >= 0 && cColumna < this.columnas &&
                                    this.arrayTablero[cFila][cColumna] == 'MINA') {
                                    numMinasAlrededor++;
                                }
                            }
                        }
                        this.arrayTablero[fila][columna] = numMinasAlrededor;
                    }
        
                }
            }
        }
    }
}

window.onload = function(){
    let buscaminas1 = new Buscaminas(5,5,5);
    buscaminas1.dibujarTableroDom();
}
