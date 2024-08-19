class Persona:
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años")

    def cumpleaños(self):
        self.edad += 1
        print(f"Feliz cumpleaños! Ahora tengo {self.edad} años.")

    def estudiar(self):
        print(f"Estoy estudiando {self.carrera}.")

# Crear una instancia de la clase persona
personal = Persona("Juan", 20, "Medicina")

#Llamar a los metodos
personal.saludar()
personal.estudiar()