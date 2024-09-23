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
        return self.Num % 2 == 0

    def esArmstrong(self):
        num = self.Num
        num_str = str(num)
        num_len = len(num_str)
        sum_of_powers = sum(int(digit) ** num_len for digit in num_str)
        return sum_of_powers == num

    def es_primo(self, n=None):
        if n is None:
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

    def generar_triangulo_pascal(self, n):
        if n <= 0:
            print("Por favor, ingrese un número entero positivo.")
            return

        triangulo = [[1]]
        for _ in range(1, n):
            x = [1] + [triangulo[-1][i] + triangulo[-1][i + 1] for i in range(len(triangulo[-1]) - 1)] + [1]
            triangulo.append(x)

        for fila in triangulo:
            print(fila)

    def esPerfectoGeneralizado(self):
        k = 2  # Puedes ajustar este valor como desees
        suma = sum(divisor ** k for divisor in range(1, self.Num + 1) if self.Num % divisor == 0)
        return suma == (2 ** k) * self.Num

    def calcularCatalan(self):
        n = self.Num
        def factorial(n):
            resultado = 1
            for i in range(2, n + 1):
                resultado *= i
            return resultado

        catalan = factorial(2 * n) // (factorial(n + 1) * factorial(n))
        return catalan

    def esMersenne(self):
        n = self.Num
        if n <= 1:
            return False
        
        mersenne = 2 ** n - 1  
        
        for i in range(2, int(mersenne ** 0.5) + 1):
            if mersenne % i == 0:
                return False
        
        return True

    def descomponerEnFactoresPrimos(self):
        n = self.Num
        factores = []
        
        for i in range(2, int(n ** 0.5) + 1):
            while n % i == 0:
                factores.append(i)
                n //= i

        if n > 1:
            factores.append(n)
        return factores

    def tienePrimoGemelo(self):
        return self.es_primo(self.Num - 2) or self.es_primo(self.Num + 2)

    def cifrarCesar(self, desplazamiento):
        num_str = str(self.Num)
        cifra = ''
        
        for char in num_str:
            if char.isdigit():
                nuevo_digito = (int(char) + desplazamiento) % 10
                cifra += str(nuevo_digito)
            else:
                cifra += char  
        return cifra

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
            print("8. Verificar si es perfecto generalizado")
            print("9. Generar triángulo de Pascal")
            print("10. Calcular número de Catalán")
            print("11. Verificar si es Mersenne")
            print("12. Verificar si tiene primo gemelo")
            print("13. Cifrar usando César")
            print("14. Salir")

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
                if self.esPerfectoGeneralizado():
                    print(f"El número {self.Num} es un número perfecto generalizado.")
                else:
                    print(f"El número {self.Num} no es un número perfecto generalizado.")
            elif opcion == '9':
                n = int(input("¿Cuántas filas del triángulo de Pascal deseas generar? "))
                self.generar_triangulo_pascal(n)
            elif opcion == '10':
                print(f"El número de Catalán para n={self.Num} es {self.calcularCatalan()}.")
            elif opcion == '11':
                if self.esMersenne():
                    print(f"El número de Mersenne 2^{self.Num} - 1 es primo.")
                else:
                    print(f"El número de Mersenne 2^{self.Num} - 1 no es primo.")
            elif opcion == '12':
                if self.tienePrimoGemelo():
                    print(f"El número {self.Num} tiene un primo gemelo.")
                else:
                    print(f"El número {self.Num} no tiene un primo gemelo.")
            elif opcion == '13':
                desplazamiento = int(input("Ingrese el desplazamiento para el cifrado César: "))
                resultado = self.cifrarCesar(desplazamiento)
                print(f"El número cifrado es: {resultado}")
            elif opcion == '14':
                print("¡Hasta luego!")
                break
            else:
                print("Opción inválida. Intente nuevamente.")

# Crear un objeto de la clase Entero
numero = Entero(10)

# Iniciar el menú
numero.menu()
