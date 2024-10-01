class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        this.lista.push(valor);
        this.actualizarLista();
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
            this.actualizarLista();
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
        this.lista.sort();  // Esto ordena alfabéticamente
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
