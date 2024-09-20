class Entero:
    def __init__(self, Numero):
        self.Num = Numero

    def setNum(self):
        input_value = input("Escribe un número: ")
        self.Num = int(input_value)

    def getNum(self):
        return self.Num

    def showNum(self):
        print(self.getNum())

    def showResultado(self, respuesta):
        print(respuesta)

    def incrementarNum(self):
        self.Num += 1

    def decrementarNum(self):
        self.Num -= 1

    def esParImpar(self):
        return (self.Num % 2 == 0)

    def esArmstrong(self):
        num = self.Num
        num_str = str(num)
        num_len = len(num_str)
        sum_of_powers = sum(int(digit) ** num_len for digit in num_str)
        return sum_of_powers == num

    def es_primo(self):
        n = self.Num
        if n <= 1:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True

    def calcular_factorial(self, n):
        factorial = 1
        for i in range(1, n + 1):
            factorial *= i
        return factorial

    def menu(self):
        while True:
            print("\nMenú:")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el número actual")
            print("3. Incrementar el número")
            print("4. Decrementar el número")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es primo")
            print("7. Verificar si es Armstrong")
            print("8. Salir")

            opcion = input("Ingrese una opción: ")

            if opcion == '1':
                self.setNum()
            elif opcion == '2':
                self.showNum()
            elif opcion == '3':
                self.incrementarNum()
            elif opcion == '4':
                self.decrementarNum()
            elif opcion == '5':
                if self.esParImpar():
                    print("El número es par.")
                else:
                    print("El número es impar.")
            elif opcion == '6':
                if self.es_primo():
                    print("El número es primo.")
                else:
                    print("El número no es primo.")
            elif opcion == '7':
                if self.esArmstrong():
                    print("El número es Armstrong.")
                else:
                    print("El número no es Armstrong.")
            elif opcion == '8':
                print("¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente nuevamente.")

# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menú
numero.menu()
