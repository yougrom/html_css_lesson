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