import java.util.Scanner;

public class Dia5 {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("Introduce una palabra/Frase: ");
        String word = scanner.nextLine();

        if (word.charAt(0) == '¡' && word.charAt(word.length()-1) == '!') {
            System.out.println("¿No serás tú el creador de la Real Academia Española de la Lengua?");
        }
        else {
            System.out.println("Bro. ¿A ti te han enseñado a escribir?");
        }
    }
}
