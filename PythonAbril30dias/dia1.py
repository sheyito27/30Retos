grade = float(input("Introduce la nota del examen: "))
if grade - int(grade) <= 0.49:
    print(f"Tu nota final es: {int(grade)}")
else:
    print(f"Tu nota final es: {int(grade) + 1}")