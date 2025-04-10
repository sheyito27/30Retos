import java.time.Duration;
import java.time.LocalDate;
import java.time.Period;
import java.time.LocalDateTime;

public class Dia3 {
    public static void main(String[] args) {
        LocalDate actualDate = LocalDate.now();
        LocalDate bornDate = LocalDate.of(2002, 7, 15);
        Period dateRemainder = Period.between(bornDate, actualDate);
        LocalDateTime actualDateTime = actualDate.atStartOfDay();
        LocalDateTime bornDateTime = bornDate.atStartOfDay();


        System.out.println("Han transcurrido " + dateRemainder.getYears() + " años, " + dateRemainder.getMonths() + " meses y " + dateRemainder.getDays() + " días.");

        Duration timeReminder = Duration.between(bornDateTime, actualDateTime);

        System.out.println("Han transcurrido " + timeReminder.toHours() + " horas,  " + timeReminder.toMinutes()%60 + " minutos y " + timeReminder.toSeconds()%60 + " segundos.");

        System.out.println("Día del año al nacer: " + bornDate.getDayOfYear());
        System.out.println("Día del año actual: " + actualDate.getDayOfYear());

        System.out.println("Día del año al nacer: " + bornDate.getDayOfWeek());
        System.out.println("Día del año actual: " + actualDate.getDayOfWeek());

        System.out.println("Día del año al nacer: " + bornDate.getMonth());
        System.out.println("Día del año actual: " + actualDate.getMonth());
    }
}