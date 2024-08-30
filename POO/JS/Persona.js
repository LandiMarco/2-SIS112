class Persona {
  constructor(nombre, edad, carrera, universidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.universidad = universidad;
  }

  // Metodo avanzado en clases
  saludar() {
    return 'Hola, soy ' + this.nombre + ', y tengo ' + this.edad + ' años.';
  }

  cumpleanios() {
    return 'Yo tengo ' + this.edad + ' años.';
  }

  estudiar() {
    return 'Estoy estudiando ' + this.carrera;
  }

  mostrarUniversidad() {
    return 'Estoy estudiando en la ' + this.universidad;
  }

  // Metodos para modificar los atributos
  ModificarNombre() {
    const nuevoNombre = prompt("Ingresa tu nombre");
    if (this.validarTexto(nuevoNombre)) {
      this.nombre = nuevoNombre;
    } else {
      alert("Caracter no valido, ingrese solamente letras");
    }
    return this.saludar();
  }

  ModificarEdad(){
    const nuevaEdad = Number(prompt("Ingresa tu edad"));
    if (nuevaEdad >= 0) {
      this.edad = nuevaEdad;
    } else {
      alert("Edad no valida, ingrese un numero positivo");
    }
    return `¡Felicidades! Tienes ${this.edad} años.`;
  }

  ModificarCarrera() {
    const nuevaCarrera = prompt("Ingresa tu carrera");
    if (this.validarTexto(nuevaCarrera)) {
      this.carrera = nuevaCarrera;
    } else {
      alert("Caracter no valido, ingrese solamente letras");
    }
    return this.estudiar();
  }

  ModificarUniversidad(){
    this.universidad = prompt("Ingresa tu universidad");
    return 'Estas estudiando en la ' + this.universidad;
  }

  // Metodo para validar texto
  validarTexto(texto) {
    return /^[a-zA-Z\s]+$/.test(texto);
  }

  // Metodos para eliminar los atributos
  EliminarNombre() {
    this.nombre = undefined;
  }

  EliminarEdad(){
    this.edad = undefined;
  }

  EliminarCarrera(){
    this.carrera = undefined;
  }

  EliminarUniversidad(){
    this.universidad = undefined;
  }
}

// Crear una instancia de la clase Persona
const persona = new Persona('Marco', 19, 'Ingenieria industrial', 'Universidad Catolica Boliviana');

// Inicializar los elementos HTML
const saludar = document.getElementById('saludar');
const edad = document.getElementById('edad');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');

// Funcion para saludar
function botonSaludar() {
  saludar.textContent = persona.saludar();
}

// Funcion para cumpleaños
function botonCumpleanios() {
  edad.textContent = persona.cumpleanios();
}

// Funcion para estudiar
function botonEstudiar() {
  carrera.textContent = persona.estudiar();
}

// Funcion para mostrar universidad
function botonUniversidad() {
  universidad.textContent = persona.mostrarUniversidad();
}

// Funcion para modificar nombre
function botonModificarNombre(){
  saludar.textContent = persona.ModificarNombre();
}

// Funcion para modificar edad
function botonModificarEdad(){
  edad.textContent = persona.ModificarEdad();
}

// Funcion para modificar carrera
function botonModificarCarrera(){
  carrera.textContent = persona.ModificarCarrera();
}

// Funcion para modificar universidad
function botonModificarUniversidad(){
  universidad.textContent = persona.ModificarUniversidad();
}

// Funcion para eliminar nombre
function botonEliminarNombre(){
  saludar.textContent = ''; 
}

// Funcion para eliminar edad
function botonEliminarEdad(){
  edad.textContent = ''; 
}

// Funcion para eliminar carrera
function botonEliminarCarrera(){
  carrera.textContent = ''; 
}

// Funcion para eliminar universidad
function botonEliminarUniversidad(){
  universidad.textContent = ''; 
}