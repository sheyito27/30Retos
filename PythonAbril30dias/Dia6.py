# Lista de dinero en efectivo
change_types = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
# Contador para agrupar las monedas/billetes del mismo tipo
counter = 1
cash_type = None
change_returned = []
money = float(input("¿Con cuanto dinero vas a pagar?: "))
price = float(input("¿Cuanto cuesta el producto?: "))
change = money - round(price*1.21, 2)


if change < 0:
    print("Dinero insuficiente")
else:
    while change > 0:
        for i in change_types:
            if i <= change:
                change_returned.append(i)
                change -= i
                change = round(change, 2)
                break

    for i in range(1, len(change_returned)):
        if change_returned[i] == change_returned[i - 1]:
            counter += 1
        else:
            cash_type = "billete" if change_returned[i - 1] >= 5 else "moneda"
            if counter > 1:
                cash_type = cash_type + "s"
            print(f"{counter} {cash_type} de {change_returned[i - 1]}€.")
            counter = 1

    cash_type = "billete" if change_returned[-1] >= 5 else "moneda"
    if counter > 1:
        cash_type = cash_type + "s"
    print(f"{counter} {cash_type} de {change_returned[-1]}€.")


