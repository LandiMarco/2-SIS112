class Persona:
    def __init__(self, nombre, edad, carrera, universidad):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera
        self.universidad = universidad

    def saludar(self):
        return f"Hola, soy {self.nombre}"

    def cumpleanios(self):
        return f"Yo tengo {self.edad} años."

    def estudiar(self):
        return f"Estoy estudiando {self.carrera}"

    def mostrarUniversidad(self):
        return f"Estoy estudiando en la {self.universidad}"

    def modificarNombre(self):
        while True:
            nuevo_nombre = input("Ingresa tu nombre: ")
            if self.validarTexto(nuevo_nombre):
                self.nombre = nuevo_nombre
                break
            else:
                print("Caracter no valido, ingrese solamente letras.")
        return self.saludar()

    def modificarEdad(self):
        while True:
            try:
                nueva_edad = int(input("Ingresa tu edad: "))
                if 0 <= nueva_edad <= 118:
                    self.edad = nueva_edad
                    break
                else:
                    print("Edad no valida, ingrese un número entre 0 y 118.")
            except ValueError:
                print("Por favor ingrese un número válido.")
        return f"¡Felicidades! Tienes {self.edad} años."

    def modificarCarrera(self):
        while True:
            nueva_carrera = input("Ingresa tu carrera: ")
            if self.validarTexto(nueva_carrera):
                self.carrera = nueva_carrera
                break
            else:
                print("Caracter no valido, ingrese solamente letras.")
        return self.estudiar()

    def modificarUniversidad(self):
        nueva_universidad = input("Ingresa tu universidad: ")
        self.universidad = nueva_universidad
        return f"Estas estudiando en la {self.universidad}"

    def validarTexto(self, texto):
        return texto.replace(" ", "").isalpha()

    def eliminarNombre(self):
        self.nombre = None

    def eliminarEdad(self):
        self.edad = None

    def eliminarCarrera(self):
        self.carrera = None

    def eliminarUniversidad(self):
        self.universidad = None

# Crear una instancia de la clase Persona
persona = Persona('Marco', 19, 'Ingenieria industrial', 'Universidad Catolica Boliviana')

# Ejemplos de uso de los métodos
print(persona.saludar())
print(persona.modificarNombre())
print(persona.modificarEdad())
print(persona.modificarCarrera())
print(persona.modificarUniversidad())