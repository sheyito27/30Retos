allMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
months_30_days = ["Abril", "Junio", "Septiembre", "Noviembre"]

def is_leap_year(year):
    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        return True
    return False

year = int(input("Introduce el año: "))
february_days = 29 if is_leap_year(year) else 28

for i in allMonths:
    print(i)
    if i in months_30_days:
        for j in range(1, 30+1):
            print(f"{j}\t", end="")
            if j % 7 == 0:
                print()
    elif i == "Febrero":
        for j in range(1, february_days+1):
            print(f"{j}\t", end="")
            if j % 7 == 0:
                print()
    else:
        for j in range(1, 31+1):
            print(f"{j}\t", end="")
            if j % 7 == 0:
                print()
    print("\n\n")






