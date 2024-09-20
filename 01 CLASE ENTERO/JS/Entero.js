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

    esPerfecto() {
        if (this.Num <= 0) return false;
        
        let suma = 0;
        
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                suma += i;
            }
        }
        return suma === this.Num;
    }

    // CLASS - Saber si es numero primo
    esPrimo() {
        const n = this.Num;
        if (n <= 1) return "No es primo";
        if (n <= 3) return "Es primo";
        if (n % 2 === 0 || n % 3 === 0) return "No es primo";
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return "No es primo";
        }
        return "Es primo";
    }

    mostrarFactorial() {
        const factorial = this.calcularFactorial();
        const mensaje = "El factorial de " + this.Num + " es " + factorial;
        this.showResultado(mensaje);
        console.log(mensaje);
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

function esPerfecto(){
    var respuesta = ClaseEntero.esPerfecto();
    var mensaje =  respuesta ? "Es perfecto": "No es perfecto"
    ClaseEntero.showResultado(mensaje)
}

function esPrimo(){
    var respuesta = ClaseEntero.esPrimo();
    var mensaje = "El número " + respuesta;
    ClaseEntero.showResultado(mensaje);
    console.log(mensaje);
}

function calcularFactorial() {
    ClaseEntero.mostrarFactorial();
}