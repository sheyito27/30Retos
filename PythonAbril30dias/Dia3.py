import datetime
from dateutil.relativedelta import relativedelta

actual_date = datetime.date.today()
born_date = datetime.date(2002, 7, 15)

date_remainder = relativedelta(actual_date, born_date)
years_remainder = date_remainder.years
months_remainder = date_remainder.months
days_remainder = date_remainder.days

time_remainder_in_seconds = int((actual_date - born_date).total_seconds())
hours = time_remainder_in_seconds // 3600
minutes = (time_remainder_in_seconds % 3600) // 60
seconds = (time_remainder_in_seconds  % 3600) % 60


print(f"Han transcurrido {years_remainder} años, {months_remainder} meses y {days_remainder} días.")
print(f"Han transcurrido {hours} horas, {minutes} y {seconds} segundos.")
print(f"Día del año actual: {actual_date.timetuple().tm_yday}")
print(f"Día del año al nacer: {born_date.timetuple().tm_yday}")
print(f"Día del año actual: {actual_date.strftime('%A')}")
print(f"Día del año al nacer: {born_date.strftime('%A')}")
print(f"Mes del año actual: {actual_date.strftime('%B')}")
print(f"Mes del año al nacer: {born_date.strftime('%B')}")
