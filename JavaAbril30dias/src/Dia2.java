import java.util.Scanner;

public class Dia2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] month30Days = {"Abril", "Junio", "Septiembre", "Noviembre"};
        String[] month31Days = {"Enero", "Marzo", "Mayo", "Julio", "Agosto", "Octubre", "Diciembre"};
        String[] allMonths = {
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        };

        System.out.println("Introduce el año actual: ");
        int year = scanner.nextInt();
        // Para determinar si el año es bisiesto el año debe ser múltiplo de 4 pero no de 100, excepto si es múltiplo de 400.
        System.out.println(isLeapYear(year) ? "El año es bisiesto" : "El año no es bisiesto");
        int februaryDays = isLeapYear(year) ? 29 : 28;

        for (int month = 0; month < allMonths.length; month++) {
            System.out.println(allMonths[month]);

            // Contador de días
            int dayCount = 0;

            int daysInMonth = 31;
            if (isMonth30Days(allMonths[month], month30Days)) {
                daysInMonth = 30;
            } else if (allMonths[month].equals("Febrero")) {
                daysInMonth = februaryDays;
            }

            // Imprimir días
            for (int i = 1; i <= daysInMonth; i++) {
                System.out.print(i + "\t");
                dayCount++;

                if (dayCount == 7) {
                    System.out.println();
                    dayCount = 0;
                }
            }
            System.out.print("\n\n");
        }

        scanner.close();
    }

    // Método para verificar si el mes tiene 30 días
    public static boolean isMonth30Days(String month, String[] month30Days) {
        for (String m : month30Days) {
            if (m.equals(month)) {
                return true;
            }
        }
        return false;
    }

    public static boolean isLeapYear(int year) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return true;
        }
        return false;
    }
}
