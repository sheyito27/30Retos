box_price = 6
box_quantity = int(input("¿Cuantas cajas quieres?"))
total_price = 6 * box_quantity

if box_quantity >= 5:
    if box_quantity < 15:
        print("Gastos de envío: 10€.")
    else:
        print("Gastos de envío: 0€.")
    if 120 < total_price < 250:
        discount_price = round(total_price * 0.95, 2)
        print(f"El precio final es {discount_price}")
    elif total_price > 250:
        discount_price = round(total_price * 0.9, 2)
        print(f"El precio final es {discount_price}")
    else:
        print(f"El precio final es {total_price}")
else:
    print("No puedes comprar menos de 5 cajas.")