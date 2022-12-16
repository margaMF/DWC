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

    dibujarTableroHTML() {
        // Creamos el tablero en html
        document.write('<table>');

        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');

            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td></td>`);
            }

            document.write('</tr>');
        }
        document.write('</table>');
    }

    dibujarTableroDOM(){
        // Creamos el tablero en DOM
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
                columna.dataset.despejado = false;
                fila.appendChild(columna);
            }
        }

        document.body.appendChild(tabla);
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

    dibujarTableroDOM(){
        super.dibujarTableroDOM();

        let celda;

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++){
                celda = document.getElementById(`f${i}_c${j}`);

                this.despejar = this.despejar.bind(this);
                this.marcar = this.marcar.bind(this);

                celda.addEventListener('click', this.despejar);
                celda.addEventListener('contextmenu', this.marcar);
            }
        }
        console.log(this.arrayTablero);
    }

    despejar(elEvento) {
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;

        this.despejarCelda(celda);
    }

    despejarCelda(celda){
        let fila = parseInt(celda.dataset.fila);
        let columna = parseInt(celda.dataset.columna);
        
        //Marcar la celda despejada
        celda.dataset.despejado = true;
        celda.style.backgroundColor = "grey";
        celda.removeEventListener('click', this.despejar);
        celda.removeEventListener('contextmenu', this.marcar);

        let valorCelda = this.arrayTablero[fila][columna];
        let esNumero = (valorCelda != 'MINA' && valorCelda != 0);
        let esBomba = (valorCelda == 'MINA');
        let esVacio = (valorCelda == 0);
        let estaDespejado;
        let bombaseleccionadaMal;

        let arrayFilas;
        let arrayColumnas;
        let celdaNueva;
        

        if(esNumero){
            celda.innerHTML = valorCelda;
        } else if (esBomba){
            arrayFilas = celda.parentNode.parentNode.childNodes;
            for(let tr of arrayFilas){
                arrayColumnas = tr.childNodes;
                for(let td of arrayColumnas){
                    td.removeEventListener('click', this.despejar);
                    td.removeEventListener('contextmenu', this.marcar);

                    fila = td.dataset.fila;
                    columna = td.dataset.columna;
                    valorCelda = this.arrayTablero[fila][columna];
                    if(td.lastChild != null){
                        bombaseleccionadaMal = (td.innerHTML == "\uD83D\uDEA9" && valorCelda != 'MINA');

                        if(bombaseleccionadaMal){
                            td.innerHTML = "";
                            td.style.backgroundColor  = 'red';
                            td.innerHTML = valorCelda;
                        }else if(valorCelda == 'MINA'){
                            td.innerHTML = valorCelda;
                        }
                    }else if(valorCelda == 'MINA'){
                        td.innerHTML = valorCelda;
                    }
                }
            }
            alert(`¡HAS PERDIDO!`);
        }else if(esVacio){

            for (let i = fila - 1; i <= fila + 1; i++) {
                if (i >= 0 && i < this.filas) {
                    for (let j = columna - 1; j <= columna + 1; j++) {
                        if (j >= 0 && j < this.columnas) {

                            celdaNueva = document.getElementById(`f${i}_c${j}`);
                            estaDespejado = (celdaNueva.dataset.despejado == 'true');
                            if(!estaDespejado){
                                console.log(`f${i}_c${j}`);
                                this.despejarCelda(celdaNueva);
                            }
                        }
                    }
                }
            }
       
        }
    }

    marcar(elEvento) {
        //Capturar el eventi y el nodo que lo generó
        let evento = elEvento || window.event;
        let celda = evento.currentTarget;
        
        let fila = celda.dataset.fila;
        let columna = celda.dataset.columna;
        
        if (celda.innerHTML == "") {
            celda.innerHTML = "\uD83D\uDEA9";
        } else if (celda.innerHTML == "\uD83D\uDEA9") {
            celda.innerHTML = "\u2754";
        } else if(celda.innerHTML == "\u2754") {
            celda.innerHTML = "";
        }  
    }

    // ganar(){
    //     if(){

    //     }
    // }
}

window.onload = function() {
    let buscaminas1 = new Buscaminas(5, 5, 5);
    buscaminas1.dibujarTableroDOM();
}