import java.util.Scanner;

public class Dia1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce la nota del examen:  ");
        double grade = scanner.nextDouble();
        if (grade - (int) grade <= 0.49) {
            System.out.println("Tu nota final es: " + (int) grade);
        }
        else {
            System.out.println("Tu nota final es: " + ((int)grade + 1));

        }
    }
}
