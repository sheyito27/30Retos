import java.util.Scanner;

public class Dia10 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int boxPrice = 6;
        System.out.println("¿Cuantas cajas quieres?");
        int boxQuantity = input.nextInt();
        double totalPrice = boxPrice * boxQuantity;
        if (boxQuantity >= 5) {
            if (boxQuantity > 15) {
                System.out.println("Gastos de envío: 0€.");
            }
            else {
                System.out.println("Gastos de envío: 10€.");
            }
            if (totalPrice > 250) {
                double discountPrice = Math.round((totalPrice * 0.9) * 100.0) / 100.0;
                System.out.println("Precio final con 10% de descuento: " + discountPrice);
            }
            else if (totalPrice > 120) {
                double discountPrice = Math.round((totalPrice * 0.95) * 100.0) / 100.0;
                System.out.println("Precio final con 5% de descuento: " + discountPrice);
            }
            else {
                System.out.println("Precio final sin descuento: " + totalPrice);
            }
        }
        else {
            System.out.println("No puedes comprar más de 5 cajas.");
        }
        input.close();
    }
}
