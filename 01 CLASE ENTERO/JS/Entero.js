class Entero {
    // Atributos
    constructor(Numero) {
        this.Num = Numero;
    }

    // CLASS - Cargar el valor de Num
    setNum() {
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }

    // CLASS - Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    // CLASS - Mostrar el valor de Num
    showNum() {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = this.getNum();
    }

    showResultado(respuesta) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = respuesta;
    }

    incrementarNum() {
        this.Num++;
    }

    decrementarNum() {
        this.Num--;
    }

    esParImpar() {
        return this.Num % 2 === 0 ? "Par" : "Impar";
    }

    esPositivo() {
        return this.Num > 0 ? "Positivo" : "No es positivo";
    }

    esNegativo() {
        return this.Num < 0 ? "Negativo" : "No es negativo";
    }
}

// Las funciones = botones HTML
var ClaseEntero = new Entero(0); // Se inicializa en 0

// Crear el objeto
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

// Incrementar el valor de Num
function incrementarValor() {
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

// Decrementar el valor de Num
function decrementarValor() {
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
    console.log(mensaje);
}

function esPositivoNum() {
    var respuesta = ClaseEntero.esPositivo();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
    console.log(mensaje);
}

function esNegativoNum() {
    var respuesta = ClaseEntero.esNegativo();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
    console.log(mensaje);
}