class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        if (!this.lista.includes(valor)) {
            this.lista.push(valor);
            this.actualizarLista();
        } else {
            console.warn("El valor ya existe en la lista.");
        }
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
        } else {
            console.warn("El valor no se encontró en la lista.");
        }
    }

    buscar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            alert(`Cadena encontrada en la posición: ${index}`);
        } else {
            alert("Cadena no encontrada");
        }
    }

    ordenar() {
        this.lista.sort(); // Ordena alfabéticamente
        this.actualizarLista();
    }

    actualizarLista() {
        const listaElement = document.getElementById('listaCadenas');
        listaElement.innerHTML = ''; // Limpia la lista antes de actualizar

        // Recorre la lista actualizada y la muestra en la interfaz
        this.lista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listaElement.appendChild(li);
        });
    }
}

let miLista = new ListaCadenas();
miLista.agregar('Hola');
miLista.agregar('Mundo');
miLista.agregar('Ucb');
console.log(miLista.lista);

/*
Crear una cuenta nueva

Inicia sesión
Dijiste:
let a = miLista.lista[0];
console.log(a);
let aCant = a.length;
console.log(aCant);

//------------------------------------------------

let b = miLista.lista[1];
console.log(b);
let bCant = b.length;
console.log(bCant);

//-----------------------------------------------

let c = miLista.lista[2];
console.log(c);
let cCant = c.length;
console.log(cCant);


//------------------------------------------------
var mayor = 0
var posicion = -1;
if (aCant > mayor){
    mayor = aCant;
    posicion = 0;
}

//---
if (bCant > mayor){
    mayor = bCant;
    posicion = 1;
}

//-----
if(cCant > mayor){
    mayor = cCant
    posicion = 2;
}

//----
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);

console.log(miLista.lista);
*/

// Encontrar la cadena con mayor longitud
let mayor = 0;
let posicion = -1;

// Recorremos cada elemento de miLista.lista
for (let i = 0; i < miLista.lista.length; i++) {
    const currentLength = miLista.lista[i].length; // Longitud de la cadena actual
    console.log(miLista.lista[i], currentLength);

    // Comparamos para encontrar la cadena más larga
    if (currentLength > mayor) {
        mayor = currentLength;
        posicion = i;
    }
}

// Mostramos el resultado final
console.log('La mayor cantidad de caracteres tiene: ' + mayor);
console.log('La CADENA con mayor cantidad de caracteres es: ' + miLista.lista[posicion]);
console.log(miLista.lista);

// Funciones para interactuar con la interfaz

function agregarCadena() {
    const valor = document.getElementById('cadenaInput').value;
    if (valor) {
        miLista.agregar(valor);
        document.getElementById('cadenaInput').value = ''; // Limpia el input después de agregar
    }
}

function eliminarCadena() {
    const valor = document.getElementById('eliminarInput').value;
    if (valor) {
        miLista.eliminar(valor);
        document.getElementById('eliminarInput').value = ''; // Limpia el input después de eliminar
    }
}

function buscarCadena() {
    const valor = document.getElementById('buscarInput').value;
    if (valor) {
        miLista.buscar(valor);
    }
}

function ordenarCadenas() {
    miLista.ordenar();
}
