class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = Math.floor(numeroRandom * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }


    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    

    //HACER EJERCICIOS AQUI

    //Primera fila con 2, el resto con 0
    llenarmatrizPrimeraFila(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                
                if (i == 0) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }
        }
        this.dibujarMatriz();
    }

    //Segundo columna con 2, el resto con 0
    llenarmatrizSegundaColumna(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                    
                if (j == 1) {
                        this.matriz[i][j] = 2;
                 }else{
                        this.matriz[i][j] = 0;
                 }
                    
            }
        }
        this.dibujarMatriz();
    }

    //Llenar otro diagonal
    llenarOtraMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la suma de la posición de la fila (i) y la posición de la columna (j)
                // es igual al número de columnas - 1, estamos en la diagonal inversa.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal inversa, la dibujamos
        this.dibujarMatriz();
    }
    
    //Borde mas chico
    llenarOtroMatrizBordes() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if ((i === 1 || i === this.filas - 2) && (j >= 1 && j <= this.columnas - 2) || (j === 1 || j === this.columnas - 2) && (i >= 1 && i <= this.filas - 2)) {
                     this.matriz[i][j] = 2;
                    } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                    }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }
    
    //Piramides
    llenarMatrizPiramide() {
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
        // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
            for (let j = 0; j < this.columnas; j++) {
                if (j >= inicio && j <= fin) {
                this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
                } else {
                this.matriz[i][j] = 0; // Resto en 0
                }
             }
         }
        this.dibujarMatriz();
    }

    //Cuatro bordes
    llenarMatrizCuatroBordes() {
        this.vaciarMatriz();

        const mitadCol = Math.floor(this.columnas / 2); 
        const mitadFil = Math.floor(this.filas / 2);

        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
                if (j == mitadCol){
                    this.matriz[i][j] = 2;
                }
                if (j == mitadCol-1){
                    this.matriz[i][j] = 2;   
                }
                if (i == mitadFil){
                    this.matriz[i][j] = 2;
                }
                if (i == mitadFil-1){
                    this.matriz[i][j] = 2;
                }
            }
        }
        this.dibujarMatriz();
    }

    //Primera secuencia
    llenarmatrizSecuencia1(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3
            }
        }
        this.dibujarMatriz();
    }

    //Primera secuencia
    llenarmatrizSecuencia2(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = j % 3
            }
        }
    this.dibujarMatriz();
    }

    llenarMatrizSecuencia_0_al_7(){
        this.vaciarMatriz();
        var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if(puntero == 7){
                    puntero = -1;
                }
                puntero = puntero + 1;
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizOtraSecuencia_0_al_7(){
        this.vaciarMatriz();
        var puntero = 0;
        for (let j = 0; j < this.columnas; j++) {
            for (let i = 0; i < this.filas; i++) {
                this.matriz[i][j] = puntero;
                if(puntero == 7){
                    puntero = -1;
                }
                puntero = puntero + 1;
            }
            
        }
        this.dibujarMatriz();
    }

    
    llenarMatrizSecuenciaNro3__0_al_7(){
        this.vaciarMatriz();
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if(puntero == 0){
                    puntero = 8;
                }
                puntero = puntero - 1;
            }
            
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuenciaNro4__0_al_7(){
        this.vaciarMatriz();
        var intercambio = "disminuir";
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;

                ///////////////////////// 7 al 0
                if(intercambio == "disminuir"){
                    if(puntero == 0){
                       // puntero = 8;
                        intercambio = "incrementar"
                    }
                    puntero = puntero - 1;
                } 

                //////////////////////// 0 al 7
                if (intercambio == "incrementar"){
                    if(puntero == 7){
                       puntero = puntero -1;
                        intercambio = "disminuir"
                    }
                    puntero = puntero + 1;
                }

            }
            
        }
        this.dibujarMatriz();
    }

    //-------------------------------------------------------------------------------------------------
    //EJERCICIOS PRACTICO MATRICES

    // Ejercicio1:Cuadrado Relleno 
    ejercicioUno(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1; // Llena toda la matriz con 1s
            }
        }
        this.dibujarMatriz(); // Dibuja la matriz en el canvas
    }

    // Ejercicio2: Marco Interno
    ejercicioDos(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0; // Borde externo con 0s
                } else {
                    this.matriz[i][j] = 1;  // Interior con 1s
                }
            }
        }
        
        this.dibujarMatriz();
    }

    //Ejercicio3:Cruces
    ejercicioTres(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 4 || j === 4 ) {
                    this.matriz[i][j] = 1; // Rellena la fila 4 y la columna 4
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        
        this.dibujarMatriz();
    }

    //Ejercicio4:Bordes y Diagonales
    ejercicioCuatro(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1; // Bordes exteriores
                } else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0; //Interior vacío
                } else if (i === j || i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2; // Diagonales
                }
            }
        }
        this.dibujarMatriz();
    }

    //Ejercicio5:Bandera
    ejercicioCinco(){

        this.vaciarMatriz();

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < this.filas/3) {
                    this.matriz[i][j] = 1;  // Primera franja con 1
                }else if (i < (2 * this.filas) / 3){
                    this.matriz[i][j] = 2; // Segunda franja con 2
                }else {
                    this.matriz[i][j] = 0; // Tercera franja con 0
                }
            }
        }
        this.dibujarMatriz();
    }

    // Ejercicio6:Relleno Alterno
    ejercicioSeis(){

        this.vaciarMatriz();

        let valor = 1; // Comienza con 1
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = valor // Asigna el valor actual
            }
            valor = 1 - valor; // Alterna entre 1 y 0
        }
        this.dibujarMatriz();
    }

    //Ejercicio7:Zig-Zag Horizontal
    ejercicioSiete(){

        this.vaciarMatriz();

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                if (i === j) {
                    this.matriz[i][j] = 1; // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejercicio8: Rellenoen Espiral
    ejercicioOcho(){
        this.vaciarMatriz();
        let valor = 1; // Inicializa con 1
        let inicioFila = 0, finFila = this.filas - 1;
        let inicioCol = 0, finCol = this.columnas - 1;
    
        while (inicioFila <= finFila && inicioCol <= finCol) {
            
            for (let j = inicioCol; j <= finCol; j++) {
                this.matriz[inicioFila][j] = valor; // Rellena fila superior
            }
            inicioFila++;
    
            
            for (let i = inicioFila; i <= finFila; i++) {
                this.matriz[i][finCol] = valor; // Rellena columna derecha
            }
            finCol--;
    
            
            if (inicioFila <= finFila) {
                for (let j = finCol; j >= inicioCol; j--) {
                    this.matriz[finFila][j] = valor; // Rellena fila inferior
                }
                finFila--;
            }
    
            
            if (inicioCol <= finCol) {
                for (let i = finFila; i >= inicioFila; i--) {
                    this.matriz[i][inicioCol] = valor;  // Rellena columna izquierda
                }
                inicioCol++;
            }
    
            
            valor = (valor === 1) ? 0 : 1;  // Alterna entre 1 y 0
        }
        this.dibujarMatriz();
    }

    //Ejercicio9:Triángulo Superior Izquierdo
    ejercicioNueve(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i && j < this.columnas; j++) {
                this.matriz[i][j] = 1; // Llena celdas hasta la posición i en cada fila
            }
        }
        this.dibujarMatriz();
    }

    // Ejercicio10:Triángulo Inferior Derecho
    ejercicioDiez(){
    // Rellenar la mitad inferior derecha con un triángulo de 1s
    this.vaciarMatriz(); 
    for (let i = 0; i < this.filas; i++) {
        for (let j = this.columnas - i - 1; j < this.columnas; j++) {
            
            this.matriz[i][j] = 1;
        }
    }
    this.dibujarMatriz();
    }

    // Ejercicio11: Cuadrícula
    ejercicioOnce(){
        this.vaciarMatriz();

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Llenar todas las filas y columnas con 1
                if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //Ejercicio12: Triángulo Central
    ejercicioDoce(){
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
        // Rellenar la pirámide
        for (let i = 0; i < alturaPiramide; i++) {
        // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
            for (let j = 0; j < this.columnas; j++) {
                if (j >= inicio && j <= fin) {
                this.matriz[1 + i][j] = 1; // Dibujar la pirámide en la parte superior
                } else {
                this.matriz[i][j] = 0; // Resto en 0
                }
             }
         }
        this.dibujarMatriz();
    }

    // Ejercicio13:Rombos Concéntricos
    ejercicioTrece(){
        this.vaciarMatriz();

        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
    
        // Dibujar la pirámide en la mitad superior
        for (let i = 0; i < alturaPiramide; i++) {
            // Calcular los límites de cada fila de la pirámide
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
            }
        }
    
        // Dibujar la pirámide invertida en la mitad inferior
        for (let i = 0; i < alturaPiramide; i++) {
            // Calcular los límites de cada fila de la pirámide invertida
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; // Dibujar la pirámide invertida en la parte inferior
            }
        }
    
        this.dibujarMatriz();
    }

    // Ejercicio14:Cruces Concéntricas
    ejercicioCatorce(){
        
        this.vaciarMatriz();

     for (let j = 2; j < this.columnas - 2; j++) {
            this.matriz[1][j] = 1;
            this.matriz[this.filas - 2][j] = 1;
        }
        for (let i = 2; i < this.filas - 2; i++) {
            this.matriz[i][1] = 1;
            this.matriz[i][this.columnas - 2] = 1;
        }

        // Segunda capa de la cruz (siguiente capa interior)
        for (let j = 2; j < this.columnas - 2; j++) {
            this.matriz[4][j] = 1;
            this.matriz[5][j] = 1;
        }
        for (let i = 2; i < this.filas - 2; i++) {
            this.matriz[i][4] = 1;
            this.matriz[i][5] = 1;
        }

        // Dibujar la matriz
        this.dibujarMatriz();
    }

    // Ejercicio15:Bandera Diagonal
    ejercicioQuince(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i && j < this.columnas; j++) {
                this.matriz[i][j] = 1; // Rellena la diagonal principal con un patrón triangular
            }
        }
        this.dibujarMatriz();
    }

    //Ejercicio16:Cuadrado dentro de Cuadrado
    ejercicioDieciSeis() {
        this.vaciarMatriz();
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Borde exterior (1 en la primera y última fila o columna)
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Segundo borde (0 en la segunda y penúltima fila o columna, pintado de morado)
                else if (i === 1 || i === this.filas - 2 || j === 1 || j === this.columnas - 2) {
                    this.matriz[i][j] = 0;
                }
                // Tercer borde (2 en la tercera y antepenúltima fila o columna, subrayado en amarillo)
                else if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                    this.matriz[i][j] = 2;
                }
                // Interior vacío (0 en el área central)
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Dibujar la matriz
        this.dibujarMatriz();
    }

    //Ejercicio17:Bordes y Centro
    ejercicioDieciSiete(){
        this.vaciarMatriz();

        // Llenar los bordes con 1
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
            }
        }
    
        // Llenar el centro con 2
        let centroInicio = Math.floor(this.filas / 2) - 1;
        let centroFin = Math.ceil(this.filas / 2);
        for (let i = centroInicio; i <= centroFin; i++) {
            for (let j = centroInicio; j <= centroFin; j++) {
                this.matriz[i][j] = 2;
            }
        }
    
        // Dibujar la matriz
        this.dibujarMatriz();
    }

    // Ejercicio18: Líneas Paralelas
    ejercicioDieciOcho(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Llenar las líneas horizontales (cada dos filas)
                if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //Ejercicio19:Marcas de Cruz
    ejercicioDieciNueve(){
        this.vaciarMatriz();
        const intervalo = 4; // Ajusta este valor para cambiar la separación entre las marcas de X
        for (let i = 0; i < this.filas; i += intervalo) {
            for (let j = 0; j < this.columnas; j += intervalo) {
                // Dibuja la cruz "X" en cada intervalo
                if (i < this.filas && j < this.columnas) {
                    this.matriz[i][j] = 1; // Esquina superior izquierda
                }
                if (i + 1 < this.filas && j + 1 < this.columnas) {
                    this.matriz[i + 1][j + 1] = 1; // Diagonal hacia abajo
                }
                if (i + 2 < this.filas && j + 2 < this.columnas) {
                    this.matriz[i + 2][j + 2] = 1; // Diagonal hacia abajo
                }
                if (i + 3 < this.filas && j + 3 < this.columnas) {
                    this.matriz[i + 3][j + 3] = 1; // Diagonal hacia abajo
                }
            }
        }
        this.dibujarMatriz();
    }

    // Ejercicio20: Rombo de Esquinas
    ejercicioVeinte(){
        this.vaciarMatriz();

        const tamanoRombo = 4 // Define el tamaño del rombo en cada esquina
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Esquina superior izquierda
                if (i < tamanoRombo && j < tamanoRombo - i) {
                    this.matriz[i][j] = 1;
                }
                // Esquina superior derecha
                else if (i < tamanoRombo && j >= this.columnas - tamanoRombo + i) {
                    this.matriz[i][j] = 1;
                }
                // Esquina inferior izquierda
                else if (i >= this.filas - tamanoRombo && j < tamanoRombo - (this.filas - 1 - i)) {
                    this.matriz[i][j] = 1;
                }
                // Esquina inferior derecha
                else if (i >= this.filas - tamanoRombo && j >= this.columnas - tamanoRombo + (this.filas - 1 - i)) {
                    this.matriz[i][j] = 1;
                }
                // Espacios vacíos
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

    //Ejercicio21: Relleno de Ajedrez
    ejercicioVeintiUno(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alternar entre 1 y 0 dependiendo de la posición
                this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }


    // Ejercicio 22: Reloj de Arena
    ejercicioVeintiDos() {
        this.vaciarMatriz();
        // Calcular el centro de la matriz
        const centro = Math.floor(this.columnas / 2);
        // Altura de la pirámide (mitad de la matriz)
        const alturaPiramide = Math.floor(this.filas / 2);
    
        // Rellenar el triángulo en la parte superior
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = i;
            const fin = this.columnas - i - 1;
            for (let j = 0; j < this.columnas; j++) {
                // Condición para evitar la diagonal
                if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        // Rellenar el triángulo invertido en la parte inferior
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = i;
            const fin = this.columnas - i - 1;
            const filaActual = this.filas - i - 1;
            for (let j = 0; j < this.columnas; j++) {
                // Condición para evitar la diagonal
                if (j >= inicio && j <= fin && j !== this.columnas - i - 1) {
                    this.matriz[filaActual][j] = 1;
                } else {
                    this.matriz[filaActual][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    //------------------------------------------------------------------------------

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2E2E2E"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1565C0"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "1" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2E7D32"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "2" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 3
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "3" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 4
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "4" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }

    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 5
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "5" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 6
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "6" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }

    
    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 7
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
         // Agregar el texto "7" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }
}
