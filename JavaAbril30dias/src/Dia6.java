import java.util.Scanner;
import java.util.ArrayList;

public class Dia6 {
    public static void main (String[]args) {
        double[] changeTypes = {500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01};
        Scanner input = new Scanner(System.in);
        int counter = 1;
        String cashType;
        ArrayList<Double> changeReturned = new ArrayList<>();

        System.out.println("¿Con cuanto dinero vas a pagar?:");
        double money = input.nextDouble();
        System.out.println("¿Cuanto cuesta el producto?:");
        double price = input.nextDouble();

        double change = Math.round((money - price * 1.21) * 100.0) / 100.0;

        if (change < 0) {
            System.out.println("Dinero insuficiente");
        }
        else {
            while (change > 0) {
                for (double i : changeTypes) {
                    if (i <= change) {
                        changeReturned.add(i);
                        change -= i;
                        change = Math.round(change * 100.0) / 100.0;
                        break;
                    }
                }
            }

            for (int i=1; i < changeReturned.size(); i++) {
                if (changeReturned.get(i).equals(changeReturned.get(i-1))) {
                    counter += 1;
                }
                else {
                    cashType = changeReturned.get(i) >= 5 ? "billete" : "moneda";
                    if (counter > 1) {
                        cashType += "s";
                    }
                    System.out.println(counter + " " + cashType + " de " + changeReturned.get(i) + " €.");
                    counter = 1;
                }
            }
            cashType = changeReturned.getLast() >= 5 ? "billete" : "moneda";
            if (counter > 1) {
                cashType += "s";
            }
            System.out.println(counter + " " + cashType + " de " + changeReturned.getLast() + " €.");
        }
    }
}
