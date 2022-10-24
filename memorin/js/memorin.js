function App() {

    //Pedimos el maxFilas y maxColumnas al usuario.
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuantas columnas quieres?');
    
    totalCasillas = maxFilas * maxColumnas;

    tableroMemorin = crearTablero(maxFilas, maxColumnas);
    
    if ((totalCasillas % 2) != 0) {
        let esPar = false;
        
            while(esPar == false){
                
                let maxFilas = prompt('¡¡¡ERROR!!! La cantidad de filas y columnas debe ser un número par ¿Cuántas filas quieres?');
                let maxColumnas = prompt('¿Cuantas columnas quieres?');

                let totalCasillas = maxFilas * maxColumnas;

                if ((totalCasillas % 2) == 0){
                    esPar == true;
                    break;
                } 
                
            }
        
    } 

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

App();