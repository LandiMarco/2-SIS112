class Cadena {
  constructor(cadena) {
    this.cadena = cadena;
  }

  getCadena() {
    return this.cadena;
  }

  concatenar(otraCadena) {
    this.cadena += otraCadena;
  }

  invertir() {
    let cadenaInvertida = '';
    for (let i = this.cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += this.cadena[i];
    }
    this.cadena = cadenaInvertida;
  }

  esVacia() {
    return this.cadena.length === 0;
  }

  contiene(subcadena) {
    return this.cadena.includes(subcadena);
  }

  comienzaCon(prefijo) {
    return this.cadena.startsWith(prefijo);
  }

  terminaCon(sufijo) {
    return this.cadena.endsWith(sufijo);
  }

  longitud() {
    return this.cadena.length;
  }

  aMayusculas() {
    return this.cadena.toUpperCase();
  }

  aMinusculas() {
    return this.cadena.toLowerCase();
  }

  aRomano() {
    const romanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let numero = parseInt(this.cadena);
    if (isNaN(numero)) {
        return "No es un número válido.";
    }
    let resultado = '';
    for (let clave in romanos) {
        while (numero >= romanos[clave]) {
            resultado += clave;
            numero -= romanos[clave];
        }
    }
    return resultado;
  }

  generarTexto(nPalabras) {
      const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let resultado = '';
      
      for (let i = 0; i < nPalabras; i++) {
          let palabra = '';
          let longitudPalabra = Math.floor(Math.random() * 10) + 1;
          for (let j = 0; j < longitudPalabra; j++) {
              palabra += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
          }
          resultado += i < nPalabras - 1 ? palabra + ' ' : palabra;
      }
      
      return resultado;
  }

  aTexto() {
    const numero = parseInt(this.cadena); // Convertir la cadena a número
    if (isNaN(numero) || numero < 0 || numero > 255) {
        return "Por favor, introduce un número entero positivo entre 0 y 255.";
    }
    return String.fromCharCode(numero); // Convertir el número a su representación ASCII
  }
}


// Instancia de Cadena
let cadena = new Cadena('');

// Función ejecutar para conectar con los botones HTML
function ejecutar(metodo) {
  const input = document.getElementById('inputCadena');
  const resultadoDiv = document.getElementById('resultado');
  const valorInput = input.value;
  cadena.cadena = valorInput;

  switch (metodo) {
      case 'getCadena':
          resultadoDiv.innerText = `Cadena: ${cadena.getCadena()}`;
          break;
      case 'concatenar':
          cadena.concatenar(valorInput);
          resultadoDiv.innerText = `Cadena actual: ${cadena.getCadena()}`;
          break;
      case 'invertir':
          cadena.invertir();
          resultadoDiv.innerText = `Cadena invertida: ${cadena.getCadena()}`;
          break;
      case 'esVacia':
          resultadoDiv.innerText = `¿Es vacía?: ${cadena.esVacia()}`;
          break;
      case 'contiene':
          resultadoDiv.innerText = `¿Contiene '${valorInput}'?: ${cadena.contiene(valorInput)}`;
          break;
      case 'comienzaCon':
          resultadoDiv.innerText = `¿Comienza con '${valorInput}'?: ${cadena.comienzaCon(valorInput)}`;
          break;
      case 'terminaCon':
          resultadoDiv.innerText = `¿Termina con '${valorInput}'?: ${cadena.terminaCon(valorInput)}`;
          break;
      case 'longitud':
          resultadoDiv.innerText = `Longitud: ${cadena.longitud()}`;
          break;
      case 'aMayusculas':
          resultadoDiv.innerText = `A mayúsculas: ${cadena.aMayusculas()}`;
          break;
      case 'aMinusculas':
          resultadoDiv.innerText = `A minúsculas: ${cadena.aMinusculas()}`;
          break;
      case 'aRomano':
          resultadoDiv.innerText = `Números Romanos: ${cadena.aRomano()}`;
          break;
      case 'generarTexto':
          const numPalabras = parseInt(valorInput);
          if (isNaN(numPalabras)) {
              resultadoDiv.innerText = `Por favor, introduce un número válido para generar texto.`;
          } else {
              resultadoDiv.innerText = `Texto generado: ${cadena.generarTexto(numPalabras)}`;
          }
          break;
      case 'aTexto':
          const asciiInput = parseInt(valorInput);
          if (isNaN(asciiInput) || asciiInput < 0 || asciiInput > 255) {
              resultadoDiv.innerText = `Por favor, introduce un número entero positivo entre 0 y 255.`;
          } else {
              resultadoDiv.innerText = `Carácter ASCII: ${cadena.aTexto()}`;
          }
          break;
      default:
          resultadoDiv.innerText = 'Método no reconocido.';
          break;
  }
}
