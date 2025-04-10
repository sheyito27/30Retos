import random

snail_a = []
snail_b = []
snail_a_name = "A"
snail_b_name = "B"

def get_snail_results(snail):
    max_distance = 20
    runned_distance = 0
    while max_distance > runned_distance:
        # Determinar velocidad y longitud recorrida del caracol
        speed = float(random.randint(100, 500) / 100)
        runned_distance += speed
        runned_distance = 20.00 if runned_distance > 20 else runned_distance
        snail.append(runned_distance)
    return snail

def format_results(snail, snail_name):
# Imprimir y formatear recorrido del caracol
    print(f"Caracol {snail_name}]: ", end="\t")
    for i in snail:
        print(f"{i:6.2f} m.", end="\t")
    print()
    return snail

snail_a = get_snail_results(snail_a)
snail_b = get_snail_results(snail_b)

format_results(snail_a, snail_a_name)
format_results(snail_b, snail_b_name)

if len(snail_a) < len(snail_b):
    print(f"¡¡¡Ha ganado el caracol {snail_a_name}!!!")
elif len(snail_a) > len(snail_b):
    print(f"¡¡¡Ha ganado el caracol {snail_b_name}!!!")
else:
    print("¡¡¡Los caracoles han empatado!!!")