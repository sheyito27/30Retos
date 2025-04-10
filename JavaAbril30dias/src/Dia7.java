public class Dia7 {
    public static void main (String[]args) {
        double maxDistance = 20;
        double runnedDistance = 1;
        int snailA = printRaceResults("A");
        int snailB = printRaceResults("B");
        if (snailB > snailA) {
            System.out.println("El ganador es el A");
        }
        else {
            System.out.println("El ganador es B");
        }
    }
    public static int printRaceResults (String name ) {
        double maxDistance = 20;
        double runnedDistance = 1;
        int iterations = 0;
        while (maxDistance > runnedDistance) {
            double speed = (Math.random()*4) + 1;
            runnedDistance += speed;
            runnedDistance = Math.round(runnedDistance * 100.0) / 100.0;
            runnedDistance = runnedDistance > 20 ? 20.00 : runnedDistance;
            System.out.print("Caracol " + name + ":\t");
            System.out.print(runnedDistance + " m.\t");
            iterations++;
        }
        System.out.println();
        return iterations;
    }
}
