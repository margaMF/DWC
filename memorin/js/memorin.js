function App() {

    //Pedimos el maxFilas y maxColumnas al usuario.
    let maxFilas = prompt('¿Cuántas filas quieres?');
    let maxColumnas = prompt('¿Cuantas columnas quieres?');


    
    if ((maxFilas % 2) != 0 && (maxColumnas % 2) != 0) {

            let maxFilas = prompt('Error!! La cantidad de filas y columnas debe ser un número par ¿Cuántas filas quieres?');
            let maxColumnas = prompt('¿Cuantas columnas quieres?');
        

    }

   


}


App();