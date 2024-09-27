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

