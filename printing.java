public class Printing {
    
    public static void printBorneStatus(Borne borne, int borneIndex) {
            System.out.println("\n--- Borne " + borneIndex + "Propriétaire: " + borne.getOwner());
            System.out.println("Cartes Joueur 1: " + borne.getPileCarteJ1());
            System.out.println("Cartes Joueur 2: " + borne.getPileCarteJ2());
            System.out.println("--- Fin de l'état de la borne ---\n");
        }
        
        public static void printGameStatus(Game game) {
            System.out.println("\n--- État actuel des bornes ---");
            for (int i = 0; i < 9; i++) {
                Borne borne = game.getBornes()[i];
                printBorneStatus(borne, i);
            }
            System.out.println("--- Fin de tour ---\n");
        }
}