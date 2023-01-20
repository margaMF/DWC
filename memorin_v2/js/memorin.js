
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

        
        this.arrayIconoCasilla = [];

    }

    pintarTablero() {
        //Se crea el tablero en html

        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td><p></p></td>`);
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }

    pintarTableroDOM() {
        //Se crea el tablero en DOM
        let tabla = document.createElement('table');
        let fila;
        let columna;

        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement('tr');
            tabla.appendChild(fila);

            for (let j = 0; j < this.columnas; j++) {
                columna = document.createElement('td');
                columna.id = `f${i}_c${j}`;
                columna.dataset.fila = i;
                columna.dataset.columna = j;
                fila.appendChild(columna);

                let nodoIconos = document.createElement('p');
                columna.appendChild(nodoIconos);
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
        //Se comprueba si la casilla está vacía, si es así, se imprime el icono, si no, se genera de nuevo otro número aleatorio.

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

    pintarTableroDOM() {
        super.pintarTableroDOM();

        let celda;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                celda = document.getElementById(`f${i}_c${j}`);

                this.despejar = this.despejar.bind(this);

                celda.addEventListener('click', this.despejar);         
            }
        }
        console.log(this.arrayTablero);
    }

    //Se captura el evento y el nodo que lo genera
    despejar(elEvento){
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.despejarCelda(celda);
        this.esPareja();
        this.noSonPareja();
    }

    //Se despeja la celda y se muestra el icono
    despejarCelda(celda){
        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);
        
        let valorCasilla = this.arrayTablero[fila][columna];

        celda.firstChild.innerHTML = valorCasilla;
        //Se guarda la celda en un array cada vez que se hace click.
        this.arrayIconoCasilla.push(celda);

        celda.removeEventListener('click', this.despejar);//CAMBIAR A BOTÓN DERECHO
    }

    esPareja(){
        //Comprobamos si el arrayIconoCasilla tiene dos posiciones y si estas dos son iguales.
        if(this.arrayIconoCasilla.length == 2){
            if(this.arrayIconoCasilla[0].innerHTML == this.arrayIconoCasilla[1].innerHTML){
                this.arrayIconoCasilla[0].style.backgroundColor  = 'rgb(175, 255, 110)';
                this.arrayIconoCasilla[1].style.backgroundColor  = 'rgb(175, 255, 110)';
                this.arrayIconoCasilla = [];
            }
        }
    }

    noSonPareja(){
        if(this.arrayIconoCasilla.length == 2){
            if(this.arrayIconoCasilla[0].innerHTML != this.arrayIconoCasilla[1].innerHTML){
                this.arrayIconoCasilla[0].style.backgroundColor  = 'red';
                this.arrayIconoCasilla[1].style.backgroundColor  = 'red';
                this.arrayIconoCasilla = [];
            }
        }

    }

    //this.arrayIconoCasilla[1].innerHTML  = '';
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

window.onload = function(){
    let memorin1 = new Memorin(maxFilas, maxColumnas);
    memorin1.pintarTableroDOM();
}

