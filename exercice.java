package com.schottenTotten.view;

import com.schottenTotten.controller.Game;
import com.schottenTotten.model.Borne;
import com.schottenTotten.model.Player;
import java.util.Scanner;

public class GameView {

    private static int getValidatedInput(Scanner scanner, String prompt, IntPredicate validator, String errorMessage) {
        int input;
        do {
            System.out.println(prompt);
            if (scanner.hasNextInt()) {
                input = scanner.nextInt();
                scanner.nextLine(); 
                if (validator.test(input)) {
                    return input;
                } else {
                    System.out.println(errorMessage);
                }
            } else {
                System.out.println("Entrée non valide. Veuillez entrer un nombre.");
                scanner.nextLine();
            }
        } while (true);
    }

    public static int getPlayerCardIndex(Scanner scanner, Player player) {
        player.printHand();
        int handSize = player.getHand().size();
        return getValidatedInput(scanner, "Choisissez une carte de votre main (0-" + (handSize - 1) + ") :", cardIndex -> cardIndex >= 0 && cardIndex < handSize, 
                "Indice de carte invalide. Veuillez réessayer.");
    }

    public static int getBorneIndex(Scanner scanner) {
        return getValidatedInput(scanner, "Choisissez une borne (0-8) :", 
                borneIndex -> borneIndex >= 0 && borneIndex < 9, 
                "Indice de borne invalide. Veuillez réessayer.");
    }

}