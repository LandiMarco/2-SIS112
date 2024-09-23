class Entero {
    // Atributos
    constructor(Numero) {
        this.Num = Numero;
    }

    // Cargar el valor de Num
    setNum() {
        const input = document.getElementById('numeroInput');
        this.Num = parseInt(input.value, 10);
    }

    // Obtener el valor de Num
    getNum() {
        return this.Num;
    }

    // Mostrar el valor de Num
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

    esPrimo() {
        const n = this.Num;
        if (n <= 1) return "No es primo";
        if (n <= 3) return "Es primo";
        if (n % 2 === 0 || n % 3 === 0) return "No es primo";
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) {
                return "No es primo";
            }
        }
        return "Es primo";
    }

    // Método para verificar si es un número Armstrong
    esArmstrong() {
        const num = this.Num;
        const num_str = String(num);
        const num_len = num_str.length;
        const sum_of_powers = num_str.split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), num_len), 0);
        return sum_of_powers === num;
    }

    // Método para generar el Triángulo de Pascal
    generarTrianguloPascal(n) {
        if (n <= 0) {
            this.showResultado("Por favor, ingrese un número entero positivo.");
            return;
        }

        let triangulo = [[1]];
        for (let i = 1; i < n; i++) {
            let x = [1].concat(triangulo[i - 1].map((num, idx) => (triangulo[i - 1][idx] || 0) + (triangulo[i - 1][idx + 1] || 0)), [1]);
            triangulo.push(x);
        }

        this.showResultado(triangulo.map(fila => fila.join(' ')).join('\n'));
    }

    // Método para verificar números primos gemelos
    tienePrimoGemelo() {
        return this.esPrimo(this.Num - 2) || this.esPrimo(this.Num + 2);
    }

    // Método para cifrado César
    cifrarCesar(desplazamiento) {
        let num_str = String(this.Num);
        let cifra = '';
        
        for (let char of num_str) {
            if (!isNaN(char)) {
                let nuevo_digito = (parseInt(char) + desplazamiento) % 10;
                cifra += String(nuevo_digito);
            } else {
                cifra += char;
            }
        }
        return cifra;
    }

    // Método para descomponer en factores primos
    descomponerEnFactoresPrimos() {
        let n = this.Num;
        let factores = [];
        
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                factores.push(i);
                n /= i;
            }
        }

        if (n > 1) {
            factores.push(n);
        }
        return factores;
    }

    // Método para calcular números de Catalan
    calcularCatalan() {
        const n = this.Num;
        const factorial = (n) => {
            let resultado = 1;
            for (let i = 2; i <= n; i++) {
                resultado *= i;
            }
            return resultado;
        };

        return factorial(2 * n) / (factorial(n + 1) * factorial(n));
    }

    // Método para verificar números de Mersenne
    esMersenne() {
        const n = this.Num;
        if (n <= 1) return false;
        
        const mersenne = Math.pow(2, n) - 1;
        
        for (let i = 2; i <= Math.sqrt(mersenne); i++) {
            if (mersenne % i === 0) {
                return false;
            }
        }
        
        return true;
    }
}

// Crear el objeto
var ClaseEntero = new Entero(0); // Se inicializa en 0

// Funciones para los botones
function cargarNum() {
    ClaseEntero.setNum();
}

function mostrarNum() {
    ClaseEntero.showNum();
}

function incrementarValor() {
    ClaseEntero.incrementarNum();
    ClaseEntero.showNum();
}

function decrementarValor() {
    ClaseEntero.decrementarNum();
    ClaseEntero.showNum();
}

function esParImparNum() {
    var respuesta = ClaseEntero.esParImpar();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
}

function esPositivoNum() {
    var respuesta = ClaseEntero.esPositivo();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
}

function esNegativoNum() {
    var respuesta = ClaseEntero.esNegativo();
    var mensaje = "El número es " + respuesta;
    ClaseEntero.showResultado(mensaje);
}

function esPerfecto() {
    var respuesta = ClaseEntero.esPerfecto();
    var mensaje = respuesta ? "Es perfecto" : "No es perfecto";
    ClaseEntero.showResultado(mensaje);
}

function esPrimo() {
    var respuesta = ClaseEntero.esPrimo();
    var mensaje = "El numero " + respuesta;
    ClaseEntero.showResultado(mensaje);
}

// Nueva función para mostrar si es Armstrong
function mostrarArmstrong() {
    const respuesta = ClaseEntero.esArmstrong() ? "Es un numero Armstrong." : "No es un numero Armstrong.";
    ClaseEntero.showResultado(respuesta);
}

// Funciones adicionales
function mostrarTrianguloPascal() {
    const n = ClaseEntero.getNum();
    ClaseEntero.generarTrianguloPascal(n);
}

function cifradoCesar() {
    const desplazamiento = parseInt(prompt("Ingrese el desplazamiento para el cifrado Cesar:"), 10);
    const resultado = ClaseEntero.cifrarCesar(desplazamiento);
    ClaseEntero.showResultado(`Cifrado Cesar: ${resultado}`);
}

function tienePrimoGemelo() {
    const resultado = ClaseEntero.tienePrimoGemelo() ? "Tiene primo gemelo." : "No tiene primo gemelo.";
    ClaseEntero.showResultado(resultado);
}

function descomponerEnFactoresPrimos() {
    const factores = ClaseEntero.descomponerEnFactoresPrimos();
    ClaseEntero.showResultado(`Factores primos: ${factores.join(', ')}`);
}

function calcularNumerosCatalan() {
    const catalan = ClaseEntero.calcularCatalan();
    ClaseEntero.showResultado(`Numero de Catalan: ${catalan}`);
}

function esMersenne() {
    const resultado = ClaseEntero.esMersenne() ? "Es un numero de Mersenne." : "No es un numero de Mersenne.";
    ClaseEntero.showResultado(resultado);
}
