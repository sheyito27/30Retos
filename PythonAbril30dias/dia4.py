import time
radiance = int(input("Programa la cuenta atrás: "))
for i in range(radiance, 0, -1):
    print(i)
    time.sleep(1)
print("BOOOM!!!")