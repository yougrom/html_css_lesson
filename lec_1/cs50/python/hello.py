print("Hello world!")


n = int(input("Число: "))
if n > 0:
    print("Число додатне")
elif n < 0:
    print("Число від’ємне")
else:
    print("Число дорівнює нулю")


name = "Harry"
print(name[0])
print(name[1])



# Це коментар у Python 
names = ["Гаррі", "Рон", "Герміона"]
# Вивести весь список:
print(names)
# Print the second element of the list:
print(names[2])
# Додати нове ім’я до списку:
names.append("Драко")
# Відсотрувати список:
names.sort()
# Вивести новий список:
print(names)


#Множини
# Створити пусту множину:
s = set()

# Додати якісь елементи:
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)
s.add(1)

# Видалити 2 з множини
s.remove(2)

# Вивести множину:
print(s)



#Словники
# Визначення словника
houses = {"Гаррі": "Гриффиндор", "Драко": "Слизерин"}
# Вивести будинок Гаррі
print(houses["Гаррі"])
# Додати значення до словника:
houses["Герміона"] = "Гриффиндор"
# Вивести будинок Герміони:
print(houses["Герміона"])





#Цикли
for i in [0, 1, 2, 3, 4, 5]:
    print(i)

for i in range(6):
    print(i)


names = ["Гаррі", "Рон", "Герміона"]

# Вивести кожне ім’я:
for name in names:
    print(name)




#Функції
for i in range(10):
    print(f"The square of {i} is {square(i)}")





#Модулі

for i in range(10):
    print(f"The square of {i} is {square(i)}")



from functions import square

for i in range(10):
    print(f"The square of {i} is {square(i)}")





#Об’єктноорієнтоване програмування

class Point():
    # Метод визначає, як створювати точку:
    def __init__(self, x, y):
        self.x = x
        self.y = y



p = Point(2, 8)
print(p.x)
print(p.y)


class Flight():
    # Метод для створення нового рейсу з визначеною місткістю 
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    # Метод для додавання пасажира на рейс
    def add_passenger(self, name):
        self.passengers.append(name)



class Flight():
    # Метод створення нового рейсу з визначеною місткістю 
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    # Метод для додавання пасажира на рейс
    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

    # Метод повернення числа наявних вільних місць
    def open_seats(self):
        return self.capacity - len(self.passengers)


#Work
flight = Flight(3)

# Створити список людей
people = ["Гаррі", "Рон", "Герміона", "Джинні"]

# Спробувати додати кожну особу до списку пасажирів 
for person in people:
    if flight.add_passenger(person):
        print(f"{person} додано успішно на рейс")
    else:
        print(f"Для {person} вільних місць немає")




#Функціональне програмування
#Декоратори
def announce(f):
    def wrapper():
        print("Запуск функції")
        f()
        print("Завершення роботи функції")
    return wrapper

@announce
def hello():
    print("Привіт, світе!")

hello()



#Лямбда-функція
people = [
    {"name": "Гаррі", "house": "Гриффиндор"},
    {"name": "Чо", "house": "Рейвенклов"},
    {"name": "Драко", "house": "Слизерин"}
]

def f(person):
    return person["name"]

people.sort(key=f)

print(people)



#Винятки

import sys

try:
    x = int(input("x: "))
    y = int(input("y: "))
except ValueError:
    print("Помилка: Неправильні вхідні значення")
    sys.exit(1)

try:
    result = x / y
except ZeroDivisionError:
    print("Помилка: Неможливо поділити на нуль")
    # Exit the program
    sys.exit(1)

print(f"{x} / {y} = {result}")




