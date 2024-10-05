class ListaEnteros{
        constructor(){
            this.lista = [];
        }

        agregar(valor){
          this.lista.push(valor);
        }

        eliminar(valor){
          const index = this.lista.indexOf(valor);
          if (index !== -1){
            this.lista.splice(index, 1);
          }
        }

        buscar(valor){
          return this.lista.indexOf(valor);
        }

        ordenar(){
          this.lista.sort((a, b) => a - b);
        }
    }

const listaEnteros = new ListaEnteros();
listaEnteros.agregar(21);
listaEnteros.agregar(12);
listaEnteros.agregar(15);
listaEnteros.agregar(30);
console.log(listaEnteros.lista);

var a = listaEnteros.lista[0];
console.log(a);

var b = listaEnteros.lista[1];
console.log(b);

var c = listaEnteros.lista[2];
console.log(c);

var d = listaEnteros.lista[3];
console.log(d);


//RETORNAR EL ELEMENTO MENOR DE LA LISTA
/*
var datoMenor = -1;

var a = listaEnteros.lista[0];
if(a > datoMenor){
  datoMenor = a;
}
console.log("Dato menor: " + datoMenor);

//------------------------------------------------
var b = listaEnteros.lista[1];
if(a > b){
  datoMenor = b
}
console.log("Dato menor: " + datoMenor)

//------------------------------------
var c = listaEnteros.lista[2];
if(b > c){
  datoMenor = c
}
console.log("Dato menor: " + datoMenor)
//------------------------------------------
var d = listaEnteros.lista[3];
if(c > d){
  datoMenor = d
}
console.log("Dato menor: " + datoMenor)

*/
//----------------------------
var lista = listaEnteros.lista;
var datoMenor = lista[0]; 
var datoMayor = lista[0]; 
for (var i = 1; i < lista.length; i++) { 
  var valorActual = lista[i];
  
  if (valorActual < datoMenor) {
    datoMenor = valorActual;
  } 
  if (valorActual > datoMayor) {
    datoMayor = valorActual;
  }
}

console.log("Dato menor: " + datoMenor);
console.log("Dato mayor: " + datoMayor);

