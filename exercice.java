package com.schottenTotten.view;

import com.schottenTotten.controller.Game;
import com.schottenTotten.model.Borne;
import com.schottenTotten.model.Player;
import java.util.Scanner;

public class GameView {

    public static int getPlayerCardIndex(Scanner scanner, Player player) {
        int cardIndex = -1;
        do {
            player.printHand();
            System.out.println("Choisissez une carte à jouer (0-5) :");
            if (scanner.hasNextInt()) {
                cardIndex = scanner.nextInt();
                scanner.nextLine(); 
                if (cardIndex >= 0 && cardIndex < player.getHand().size()) {
                    break;
                } else {
                    System.out.println("Indice invalide. Veuillez réessayer.");
                }
            } else {
                System.out.println("Entrée non valide. Veuillez entrer un nombre.");
                scanner.nextLine();
            }
        } while (true);
        return cardIndex;
    }

    public static int getBorneIndex(Scanner scanner) {
        int borneIndex = -1;
        do {
            System.out.println("Choisissez une borne (0-8) :");
            if (scanner.hasNextInt()) {
                borneIndex = scanner.nextInt();
                scanner.nextLine(); 
                if (borneIndex >= 0 && borneIndex < 9) {
                    break;
                } else {
                    System.out.println("Indice de borne invalide. Veuillez réessayer.");
                }
            } else {
                System.out.println("Entrée non valide. Veuillez entrer un nombre.");
                scanner.nextLine();
            }
        } while (true);
        return borneIndex;
    }

    public static void printGameStatus(Game game) {
        System.out.println("\n--- État actuel des bornes ---");
        for (int i = 0; i < 9; i++) {
            Borne borne = game.getBornes()[i];
            System.out.println("Borne " + i + ": Propriétaire - " + borne.getOwner());
            System.out.println("  Cartes Joueur 1: " + borne.getPileCarteJ1());
            System.out.println("  Cartes Joueur 2: " + borne.getPileCarteJ2());
        }
        System.out.println("--- Fin de tour ---\n");
    }
}