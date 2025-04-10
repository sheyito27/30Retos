name = input("Introduce tu nombre: ").lower()
if len(name) > 7:
    print(f"¡Vaya, {name.capitalize()}, ¡qué nombre tan largo y sofisticado!.")
elif name.startswith("a"):
    print(f"¡Hola!, Asombroso/a {name.capitalize()}")
else:
    print(f"Saludos, {name}")