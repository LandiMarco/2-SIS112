class Game{
    ancho;
    alto;
    cantColumnas; //Valores calculados a partir de la "ancho"
    cantFilas; // Valores calculados a partir de la "alto"
    anchoCelda;
    altoCelda;
    estadoJuego;

    constructor(_ancho, _alto, _estadoJuego){ //28 de ancho // 13 de alto
        this.ancho = _ancho; 
        this.alto = _alto;
        this.estadoJuego = _estadoJuego;

        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS; //utilsObj.Redondear(this.ancho); 
        this.cantFilas = CANT_FILAS; //utilsObj.Redondear(this.alto);
        this.anchoCelda = utilsObj.Redondear(this.ancho / this.cantColumnas);//Math.round(this.ancho / this.cantColumnas);
        this.altoCelda = utilsObj.Redondear(this.alto / this.cantFilas); //Math.round(this.alto / this.cantFilas);

        console.log("cantColumnas", this.cantColumnas)
        console.log("cantFilas", this.cantFilas)

        console.log("anchoCelda", this.anchoCelda)
        console.log("cantCelda", this.altoCelda )
    }

    start(){
        this.estadoJuego = "playing";
        //Iniciar otros elemntos como tanques, puntuacion, etc
    }

    reset(){
        this.estadoJuego = "reset";
        //Reiniciar las
    }
}