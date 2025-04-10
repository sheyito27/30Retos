import java.util.Scanner;

public class Dia8 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Introduce un nombre:");
        String name = input.nextLine().toLowerCase();
        if (name.length() > 7){
            System.out.println("¡Vaya, " + name.substring(0, 1).toUpperCase() + name.substring(1) + ", ¡qué nombre tan largo y sofisticado!.");
        }
        else if (name.charAt(0) == 'a') {
            System.out.println("¡Hola, Asombroso/a " + name.substring(0, 1).toUpperCase() + name.substring(1) + "!.");
        }
        else {
            System.out.println("Saludos, " + name.substring(0, 1).toUpperCase() + name.substring(1));
        }
    }
}
