class Cadena:
    def __init__(self, cadena):
        self.cadena = cadena

    def get_cadena(self):  # Obtiene el valor asignado a la cadena
        return self.cadena

    # Manipulación de cadenas
    def concatenar(self, otra_cadena):  # Unir una cadena con otra
        self.cadena += otra_cadena

    def invertir(self):  # Invertir los caracteres de la cadena
        self.cadena = self.cadena[::-1]

    # Comparaciones
    def es_vacia(self):  # Compara si la cadena no tiene caracteres
        return len(self.cadena) == 0

    def contiene(self, subcadena):  # Compara si la subcadena existe dentro de la cadena
        return subcadena in self.cadena

    def comienza_con(self, prefijo):  # Compara si la cadena comienza con el prefijo "caracter"
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):  # Compara si la cadena termina con el sufijo "caracter"
        return self.cadena.endswith(sufijo)

    # Otras operaciones
    def longitud(self):  # Obtiene la cantidad de caracteres que tiene la cadena
        return len(self.cadena)

    def a_mayusculas(self):  # Obtiene la cadena transformada en MAYÚSCULA
        return self.cadena.upper()

    def a_minusculas(self):  # Obtiene la cadena transformada en minúscula
        return self.cadena.lower()


# Ejemplo de uso
cadena = Cadena('')

def ejecutar(metodo, valor_input=''):
    if metodo == 'get_cadena':
        return f'Cadena: {cadena.get_cadena()}'
    elif metodo == 'concatenar':
        cadena.concatenar(valor_input)
        return f'Cadena actual: {cadena.get_cadena()}'
    elif metodo == 'invertir':
        cadena.invertir()
        return f'Cadena invertida: {cadena.get_cadena()}'
    elif metodo == 'es_vacia':
        return f'¿Es vacía?: {cadena.es_vacia()}'
    elif metodo == 'contiene':
        return f'¿Contiene "{valor_input}"?: {cadena.contiene(valor_input)}'
    elif metodo == 'comienza_con':
        return f'¿Comienza con "{valor_input}"?: {cadena.comienza_con(valor_input)}'
    elif metodo == 'termina_con':
        return f'¿Termina con "{valor_input}"?: {cadena.termina_con(valor_input)}'
    elif metodo == 'longitud':
        return f'Longitud: {cadena.longitud()}'
    elif metodo == 'a_mayusculas':
        return f'A mayúsculas: {cadena.a_mayusculas()}'
    elif metodo == 'a_minusculas':
        return f'A minúsculas: {cadena.a_minusculas()}'
    else:
        return 'Método no reconocido.'

# Ejemplo de llamada a la función
resultado = ejecutar('concatenar', 'Hola')
print(resultado)  # Cadena actual: Hola
resultado = ejecutar('invertir')
print(resultado)  # Cadena invertida: aloH
resultado = ejecutar('a_mayusculas')
print(resultado)  # A mayúsculas: HOLA
