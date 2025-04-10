import java.util.Scanner;

public class Dia9 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Introduce los días:");
        int days = input.nextInt();
        for (int i=1; i<days+1; i++) {
            if (i%3 == 0 && i%5 == 0) {
                System.out.println("FP + Máster");
            }
            else if (i%3 == 0) {
                System.out.println("FP");
            }
            else if (i%5 == 0) {
                System.out.println("Máster");
            }
            else {
                System.out.println(i);
            }
        }
    }
}
