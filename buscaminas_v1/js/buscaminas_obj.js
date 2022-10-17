class Tablero {
    constructor(filas, columnas){
        this.filas = filas;
        this.columnas = columnas;

        this.crearTablero();
        this.dibujarTablero();
    }

    crearTablero (){
            // Crear array bidimensional para guardar las minas
            this.arrayTablero = [];
    
            for (let fila = 0; fila < this.filas; fila++) {
                this.arrayTablero[fila] = [];
        
                for (let columna = 0; columna < this.columnas; columna++) {
                    this.arrayTablero[fila][columna] = '';
                }
            }

    }

    dibujarTablero (){
            // Creamos el tablero en html
            this.document.write('<table>');
    
            for (let i = 0; i < this.filas; i++) {
                this.document.write('<tr>');
            
                for (let j = 0; j < this.columnas; j++) {
                    this.document.write('<td>' + this.tablero[i][j] + '</td>');
                }
            
                this.document.write('</tr>');
            }
            this.document.write('</table>');
    }
}

const buscaminas = new Tablero(4,3);
buscaminas.columnas = 5;
console.log(buscaminas.arrayTablero);
console.log(buscaminas.tablero);