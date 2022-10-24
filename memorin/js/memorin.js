function App() {

    //Pedimos el maxFilas y maxColumnas al usuario.
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuantas columnas quieres?');
    
    totalCasillas = maxFilas * maxColumnas;

    
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

App();