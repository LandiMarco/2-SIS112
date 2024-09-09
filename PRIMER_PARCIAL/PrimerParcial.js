class CrearMateria {
    constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadInscritos, LatitudLongitud, temas, calificacionMinima, modalidad) {
        this.nombreMateria = nombreMateria;
        this.sigla = sigla;
        this.docente = docente;
        this.horarios = horarios;
        this.aula = aula;
        this.prerequisito = prerequisito;
        this.carrera = carrera;
        this.universidad = universidad;
        this.cantidadInscritos = cantidadInscritos;
        // Nuevos atributos
        this.LatitudLongitud = LatitudLongitud;
        this.temas = temas;
        this.calificacionMinima = calificacionMinima;
        this.modalidad = modalidad;
    }

    // Metodos para crear mensajes
    mostrarNombreMateria() {
        return 'La materia es ' + this.nombreMateria;
    }

    mostrarSigla() {
        return 'La sigla de la materia es ' + this.sigla;
    }

    mostrarDocente() {
        return 'El docente de la materia es ' + this.docente;
    }

    mostrarHorarios() {
        return 'Los horarios de la materia son ' + this.horarios;
    }

    mostrarAula() {
        return 'El aula de la materia es ' + this.aula;
    }

    mostrarPrerequisito() {
        return 'El prerequisito de la materia es ' + this.prerequisito;
    }

    mostrarCarrera() {
        return 'La carrera relacionada con la materia es ' + this.carrera;
    }

    mostrarUniversidad() {
        return 'La universidad es: ' + this.universidad;
    }

    mostrarCantidadInscritos() {
        return 'La cantidad de inscritos en la materia es ' + this.cantidadInscritos;
    }

    // Métodos para mostrar los atributos (incluyendo los nuevos)
    mostrarLatitudLongitud() {
        return 'Las coordenadas de tu aula son: ' + this.LatitudLongitud;
    }

    mostrarTemas() {
        return 'Los temas que se verán en la materia son: ' + this.temas;
    }
    
    mostrarCalificacionMinima() {
        return 'La calificación mínima de la materia es ' + this.calificacionMinima;
    }
    
    mostrarModalidad() {
        return 'La modalidad de la materia es ' + this.modalidad;
    }
    
    // Metodos para modificar los atributos
    modificarNombreMateria() {
        const nuevoNombreMateria = prompt("Ingresa el nuevo nombre de la materia");
        this.nombreMateria = nuevoNombreMateria;
        return this.mostrarNombreMateria();
    }

    modificarSigla() {
        const nuevaSigla = prompt("Ingresa la nueva sigla de la materia");
        this.sigla = nuevaSigla;
        return this.mostrarSigla();
    }

    modificarDocente() {
        const nuevoDocente = prompt("Ingrese el nombre de tu docente:");
        if (this.validarTexto(nuevoDocente)) {
            this.docente = nuevoDocente;
        } else {
            alert("Caracter no válido, ingrese solamente letras");
        }
        return this.mostrarDocente();
    }

    modificarHorarios() {
        const nuevosHorarios = prompt("Ingresa los nuevos horarios de la materia");
        this.horarios = nuevosHorarios;
        return this.mostrarHorarios();
    }

    modificarAula() {
        const nuevaAula = prompt("Ingresa el nuevo aula de la materia");
        this.aula = nuevaAula;
        return this.mostrarAula();
    }

    modificarPrerequisito() {
        const nuevoPrerequisito = prompt("Ingresa el nuevo prerequisito de la materia");
        this.prerequisito = nuevoPrerequisito;
        return this.mostrarPrerequisito();
    }

    modificarCarrera() {
        const nuevaCarrera = prompt("Ingresa tu carrera");
        if (this.validarTexto(nuevaCarrera)) {
            this.carrera = nuevaCarrera;
        } else {
            alert("Caracter no válido, ingrese solamente letras");
        }
        return this.mostrarCarrera();
    }

    modificarUniversidad() {
        const nuevaUniversidad = prompt("Ingresa la nueva universidad");
        this.universidad = nuevaUniversidad;
        return this.mostrarUniversidad();
    }

    modificarCantidadInscritos() {
        const nuevaCantidad = Number(prompt("Ingresa la nueva cantidad de inscritos"));
        if (nuevaCantidad >= 0 && nuevaCantidad <= 60) {
            this.cantidadInscritos = nuevaCantidad;
        } else {
            alert("Cantidad no válida, ingrese un número entre 0 y 60");
        }
        return this.mostrarCantidadInscritos();
    }

    modificarLatitudLongitud() {
        const nuevaLatitudLongitud = prompt("Ingresa las nuevas coordenadas:");
        this.LatitudLongitud = nuevaLatitudLongitud;
        return this.mostrarLatitudLongitud();
    }

    modificarTemas() {
        const nuevoTemas = prompt("Ingresa los nuevos temas de la materia");
        this.temas = nuevoTemas;
        return this.mostrarTemas();
    }
    
    modificarCalificacionMinima() {
        const nuevaCalificacionMinima = Number(prompt("Ingresa la nueva calificación mínima"));
        if (nuevaCalificacionMinima >= 0) {
            this.calificacionMinima = nuevaCalificacionMinima;
        } else {
            alert("Cantidad no válida, ingrese un número positivo");
        }
        return this.mostrarCalificacionMinima();
    }
    
    modificarModalidad() {
        const nuevaModalidad = prompt("Ingresa la nueva modalidad de la materia");
        if (this.validarTexto(nuevaModalidad)) {
            this.modalidad = nuevaModalidad;
        } else {
            alert("Caracter no válido, ingrese solamente letras");
        }
        return this.mostrarModalidad();
    }

    // Metodo para validar texto
    validarTexto(texto) {
        return /^[a-zA-Z\s]+$/.test(texto);
    }


    // Metodos para eliminar los atributos
   eliminarNombreMateria() {
    this.nombreMateria = undefined;
}

eliminarSigla() {
    this.sigla = undefined;
}

eliminarDocente() {
    this.docente = undefined;
}

eliminarHorarios() {
    this.horarios = undefined;
}

eliminarAula() {
    this.aula = undefined;
}

eliminarPrerequisito() {
    this.prerequisito = undefined;
}

eliminarCarrera() {
    this.carrera = undefined;
}

eliminarUniversidad() {
    this.universidad = undefined;
}

eliminarCantidadInscritos() {
    this.cantidadInscritos = undefined;
}

//metodos para eliminar nuevos atributos

eliminarLatitudLongitud() {
    this.LatitudLongitud = undefined;
}

eliminarTemas() {
    this.temas = undefined;
}

eliminarCalificacionMinima() {
    this.calificacionMinima = undefined;
}

eliminarModalidad() {
    this.modalidad = undefined;
}
}

// Crear instancias de CrearMateria
const materia1 = new CrearMateria(
    'Calculo 1', 'MAT-132', 'Ing Victor Hugo Aspiazu', 
    'Lunes 7:30-9:00, Miercoles 7:30-9:00', '10 AULA A-N4',
    'MAT-030', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 33,
    '-17.695167, -63.150146', 'Funciones, limites, Derivadas, Integrales', 60, 'Presencial'
);

const materia2 = new CrearMateria(
    'Fisica 1', 'FIS-111', 'Ing Victor Hugo Lobo', 
    'Lunes 9:30-10:50, Miercoles 9:30-10:50', 'AULA E 2-5',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 45,
    '-17.695009, -63.149901', 'Magnitudes fisicas, vectores, cinematica, dinamica y estatica, energia mecanica', 60, 'Presencial'
);

const materia3 = new CrearMateria(
    'Probabilidad y Estadistica 1', 'MAT-143', 'Lic Silvia Vaca',
    'Martes 1:15-2:50, Jueves 1:15-2:50', 'AULA D 2-4',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 27,
    '-17.694788, -63.150177', 'Organizacion de datos, medidas de dispersion, teoria de la probabilidad', 60, 'Presencial'
);

const materia4 = new CrearMateria(
    'Programacion 1', 'SIS-112', 'Ing Eddy Escalante',
    'Lunes 10:50-12:20, Viernes 9:10-11:30', 'C 2-2',
    'SIS-111', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 15,
    '-17.695055, -63.150650', 'Programacion orientada a objetos , diseño y desarrolo de algoritmos', 60, 'Presencial'
);

const materia5 = new CrearMateria(
    'Manufactura y Mecanizado', 'IND-112', 'Ing Jorge Salvatierra',
    'Martes 7:30-9:00, Jueves 7:30-9:00, Viernes 7:30-9:00', '12 AULA A-N4, AULA F 1-2',
    'IND-111', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 14,
    '-17.695038, -63.149647', 'Fundidicones, solidificacion, diseño AUTOCAD', 60, 'Presencial'
);

const materia6 = new CrearMateria(
    'Antropologia Cristiana', 'FHC 140', 'Lic Exalta de la Barra',
    'Martes 9:10-10:50, Jueves 9:10-10:50', '4 AULA A-N3',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 60,
    '-17.695155, -63.150812', 'Antropologia cultural, social y biologico , bloque de valores', 60, 'Presencial'
);

//Inicializar los elementos HTML
const nombreMateria = document.getElementById('Materia');
const sigla = document.getElementById('sigla');
const docente = document.getElementById('docente');
const horarios = document.getElementById('horarios');
const aula = document.getElementById('aula');
const prerequisito = document.getElementById('prerequisito');
const carrera = document.getElementById('carrera');
const universidad = document.getElementById('universidad');
const cantidadInscritos = document.getElementById('cantidadInscritos');
const LatitudLongitud = document.getElementById('LatitudLongitud');
const temas = document.getElementById('temas');
const calificacionMinima = document.getElementById('calificacionMinima');
const modalidad = document.getElementById('modalidad');

// Funciones para mostrar datos
function botonMateria() {
    nombreMateria.textContent = selectedMateria.mostrarNombreMateria();
}

function botonsigla() {
    sigla.textContent = selectedMateria.mostrarSigla();
}

function botonDocente() {
    docente.textContent = selectedMateria.mostrarDocente();
}

function botonHorarios() {
    horarios.textContent = selectedMateria.mostrarHorarios();
}

function botonAula() {
    aula.textContent = selectedMateria.mostrarAula();
}

function botonPrerequisitos() {
    prerequisito.textContent = selectedMateria.mostrarPrerequisito();
}

function botonCarrera() {
    carrera.textContent = selectedMateria.mostrarCarrera();
}

function botonUniversidad() {
    universidad.textContent = selectedMateria.mostrarUniversidad();
}

function botonInscrito() {
    cantidadInscritos.textContent = selectedMateria.mostrarCantidadInscritos();
}

// Funciones para mostrar los nuevos atributos
function botonLatitudLongitud() {
    LatitudLongitud.textContent = selectedMateria.mostrarLatitudLongitud();
}

function botonTemas() {
    temas.textContent = selectedMateria.mostrarTemas();
}

function botonCalificacionMinima() {
    calificacionMinima.textContent = selectedMateria.mostrarCalificacionMinima();
}

function botonModalidad() {
    modalidad.textContent = selectedMateria.mostrarModalidad();
}

// Funciones para modificar datos
function modificarNombreMateria() {
    nombreMateria.textContent = selectedMateria.modificarNombreMateria();
}

function modificarSigla() {
    sigla.textContent = selectedMateria.modificarSigla();
}

function modificarDocente() {
    docente.textContent = selectedMateria.modificarDocente();
}

function modificarHorarios() {
    horarios.textContent = selectedMateria.modificarHorarios();
}

function modificarAula() {
    aula.textContent = selectedMateria.modificarAula();
}

function modificarPrerequisito() {
    prerequisito.textContent = selectedMateria.modificarPrerequisito();
}

function modificarCarrera() {
    carrera.textContent = selectedMateria.modificarCarrera();
}

function modificarUniversidad() {
    universidad.textContent = selectedMateria.modificarUniversidad();
}

function modificarInscritos() {
    cantidadInscritos.textContent = selectedMateria.modificarCantidadInscritos();
}

//nuevas funciones de modificar

function modificarLatitudLongitud() {
    LatitudLongitud.textContent = selectedMateria.modificarLatitudLongitud();
}

function modificarTemas() {
    temas.textContent = selectedMateria.modificarTemas();
}

function modificarCalificacionMinima() {
    calificacionMinima.textContent = selectedMateria.modificarCalificacionMinima();
}

function modificarModalidad() {
    modalidad.textContent = selectedMateria.modificarModalidad();
}
// Funciones para eliminar datos
function eliminarNombreMateria() {
    selectedMateria.eliminarNombreMateria();
    nombreMateria.textContent = '';
}

function eliminarSigla() {
    selectedMateria.eliminarSigla();
    sigla.textContent = '';
}

function eliminarDocente() {
    selectedMateria.eliminarDocente();
    docente.textContent = '';
}

function eliminarHorarios() {
    selectedMateria.eliminarHorarios();
    horarios.textContent = '';
}

function eliminarAula() {
    selectedMateria.eliminarAula();
    aula.textContent = '';
}

function eliminarPrerequisito() {
    selectedMateria.eliminarPrerequisito();
    prerequisito.textContent = '';
}

function eliminarCarrera() {
    selectedMateria.eliminarCarrera();
    carrera.textContent = '';
}

function eliminarUniversidad() {
    selectedMateria.eliminarUniversidad();
    universidad.textContent = '';
}

function eliminarInscritos() {
    selectedMateria.eliminarCantidadInscritos();
    cantidadInscritos.textContent = '';
}

//nuevas funciones de elminar

function eliminarLatitudLongitud() {
    selectedMateria.eliminarLatitudLongitud();
    LatitudLongitud.textContent = '';
}

function eliminarTemas() {
    selectedMateria.eliminarTemas();
    temas.textContent = '';
}

function eliminarCalificacionMinima() {
    selectedMateria.eliminarCalificacionMinima();
    calificacionMinima.textContent = '';
}

function eliminarModalidad() {
    selectedMateria.eliminarModalidad();
    modalidad.textContent = '';
}


// Seleccion de materia
let selectedMateria = materia1;

function seleccionarMateria(materia) {
    selectedMateria = materia;
    botonMateria();
    botonsigla();
    botonDocente();
    botonHorarios();
    botonAula();
    botonPrerequisitos();
    botonCarrera();
    botonUniversidad();
    botonInscrito();
    botonLatitudLongitud();
    botonTemas();
    botonCalificacionMinima();
    botonModalidad();
}
