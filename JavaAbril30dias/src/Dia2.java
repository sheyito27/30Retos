import java.util.Scanner;

public class Dia2 {
    public static void main(String[] args) {
        String[] allMonths = {"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"};
        String[] months30days = {"Abril", "Junio", "Septiembre", "Noviembre"};
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce un año: ");
        int year = scanner.nextInt();
        int februaryDays = isLeapYear(year) ? 29 : 28;

        for (int i = 0; i < allMonths.length; i++) {
            System.out.println(allMonths[i]);
            if (is30Days(months30days, allMonths[i])) {
                displayMonths(30);
            }
            else if (allMonths[i].equals("Febrero")){
                displayMonths(februaryDays);
            }
            else {
                displayMonths(31);
            }
            System.out.println("\n\n");
        }
        scanner.close();
    }
    public static boolean isLeapYear(int year) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return true;
        }
        return false;
    }
    public static boolean is30Days(String[] months, String month) {
        for (int i = 0; i < months.length; i++) {
            if (months[i].equals(month)) {
                return true;
            }
        }
        return false;
    }
    public static void displayMonths(int monthDays) {
        for (int i=1; i <= monthDays; i++) {
            System.out.print(i + "\t");
            if (i % 7 == 0) {
                System.out.println();
            }
        }
    }
}