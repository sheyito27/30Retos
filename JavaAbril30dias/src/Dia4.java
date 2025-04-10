import java.util.Scanner;

public class Dia4 {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Introduce el numerín: ");
        var radiance = scanner.nextInt();
        for (int i=radiance; i > 0; i--) {
            try {
                System.out.println(i);
                Thread.sleep(1000);
            }
            catch(java.lang.InterruptedException e) {
                System.out.println(e);
            }
        }
        System.out.println("BOOOOOM!");
    }
}
