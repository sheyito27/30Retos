days = int(input("Introduce los días: "))
for i in range(1, days+1):
    if i%3 == 0 and i%5 == 0:
        print("FP + Máster")
    elif i%3 == 0:
        print("FP")
    elif i%5 == 0:
        print("Máster")
    else:
        print(i)