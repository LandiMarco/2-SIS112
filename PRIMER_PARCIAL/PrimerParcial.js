class CrearMateria {
    constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadInscritos) {
        this.nombreMateria = nombreMateria;
        this.sigla = sigla;
        this.docente = docente;
        this.horarios = horarios;
        this.aula = aula;
        this.prerequisito = prerequisito;
        this.carrera = carrera;
        this.universidad = universidad;
        this.cantidadInscritos = cantidadInscritos;
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
        return 'La universidad donde se imparte la materia es ' + this.universidad;
    }

    mostrarCantidadInscritos() {
        return 'La cantidad de inscritos en la materia es ' + this.cantidadInscritos;
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
        const nuevoDocente = prompt("Ingresa el nuevo nombre del docente");
        this.docente = nuevoDocente;
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
        const nuevaCarrera = prompt("Ingresa la nueva carrera relacionada con la materia");
        this.carrera = nuevaCarrera;
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
        } else if (nuevaCantidad > 60) {
            alert("Cantidad no valida, ingrese un numero menor o igual a 60");
        } else {
            alert("Cantidad no valida, ingrese un numero positivo");
        }
        return this.mostrarCantidadInscritos();
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
}

// Crear instancias de CrearMateria
const materia1 = new CrearMateria(
    'Calculo 1', 'MAT-132', 'Ing Victor Hugo Aspiazu', 
    'Lunes 7:30-9:00, Miercoles 7:30-9:00', '10 AULA A-N4',
    'MAT-030', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 33
);

const materia2 = new CrearMateria(
    'Fisica 1', 'FIS-111', 'Ing Victor Hugo Lobo', 
    'Lunes 9:30-10:50, Miircoles 9:30-10:50', 'AULA E 2-5',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 45
);

const materia3 = new CrearMateria(
    'Probabilidad y Estadistica 1', 'MAT-143', 'Lic Silvia Vaca',
    'Martes 1:15-2:50, Jueves 1:15-2:50', 'AULA D 2-4',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 27
);

const materia4 = new CrearMateria(
    'Programacion 1', 'SIS-112', 'Ing Eddy Escalante',
    'Lunes 10:50-12:20, Viernes 9:10-11:30', 'C 2-2',
    'SIS-111', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 15
);

const materia5 = new CrearMateria(
    'Manufactura y Mecanizado', 'IND-112', 'Ing Jorge Salvatierra',
    'Martes 7:30-9:00, Jueves 7:30-9:00, Viernes 7:30-9:00', '12 AULA A-N4, AULA F 1-2',
    'IND-111', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 14
);

const materia6 = new CrearMateria(
    'Antropologia Cristiana', 'FHC 140', 'Lic Exalta de la Barra',
    'Martes 9:10-10:50, Jueves 9:10-10:50', '4 AULA A-N3',
    'Ninguno', 'Ingenieria Industrial', 'Universidad Catolica Boliviana', 60
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
}
