import { Component } from '@angular/core';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.css'],
})
export class RealisationsComponent {
  title = 'Mes Réalisations';

  onglet1 = 'HTML + CSS';
  onglet2 = 'HTML + CSS + JS';
  onglet3 = 'HTML + CSS + JS + PHP';
  onglet4 = 'Angular';
  onglet5 = 'Symfony';

  //texte HTML+CSS
  textGalerie = 'Affichage d\'une galerie d\'image en taille normale + filtre couleur sepia, au passage de la souris, léger Zoom sur l\'image + affichage des couleurs d\'origine';
  textChocoBoom = 'Découverte des media queries, les éléments sont affichés/placés en fonction de la taille de l\'écran.';
  textJDW = 'Découverte et première utilisation du SCSS';
  textGameStory = 'Premiers pas avec le framework Bootstrap sur une page statique. Objectif: reproduire une page à l\'identique.';
  textACDC = 'Créée avec Bootstrap, ce site pourrait être celui du vrai groupe. Objectif: reproduire une page à l\'identique.';

  //texte HTML+CSS+JS
  textImpots = 'Premiers pas en JavaScript, vérification de condition pour voir qui paiera. Les hommes de plus de 20 ans et les femmes de + de 18 ans payent des impots, pour les autres c\'est gratuit.';
  textReprographie = 'Calcul du tarif de l\'addition en fonction du nombre de Photocopies effectué. de 0 à 10 copies la copie coute 10 cents, de 11 à 30 copies la copie coutera 9 cents, à partir de la 31è copie, le prix à l\'unité est de 8 cents.';
  textHorloge = 'Entrez l\'heure qu\'il est, l\'application vous dira l\'heure qu\il sera une seconde plus tard.';
  textCaisse = 'Entrez le montant de l\'addition, l\'application vous dira combien on doit vous rendre et ce qu\'on doit vous rendre précisément.';
  textMailValide = 'Verification de la validité d\'une adresse mail en vérifiant si le \"@\" est bien présent, si il y a bien un \".\" après le \"@\" et si il y a bien des caractères après le  \".\". ';
  textAssu = 'Calcul du tarif de votre assurance en fonction de critères.';
  textMDP = 'Vérification de la fiabilité de votre mot de passe en fonction du nombre de caractères, la présence de majuscules et/ou de minuscules, de chiffres et de caractères spéciaux.';
  textJustePrix = '10 essais pour trouver le prix de l\'article affiché, son prix est choisi aléatoirement entre 1 et 100 par la machine.';
  textPendu = 'Un mot de 14 lettres a été choisis aléatoirement, vous avez le droit à 9 erreurs pour trouver le mot mystère.';
  textCVbilingue = 'Première version FR/ENG de mon CV en ligne, possibilité de changer de langue à tout moment de la navigation, une autre version utilisant une autre technologie arrivera par la suite.';

  // texte Angular
  textMyuka = 'Premier projet Angular, bipez un code barre et voyez quelles sont ses données(source Openfoodfacts) code bar pour ex: 3017620425035'
  textCapitale = 'Entrez le nom d\'un pays (en Anglais) et obtenez des informations sur ce pays. Utilisation de l\'API Restcountries'

  //texte Symfony

  textLocaliser = 'Entrez une Adresse valide, elle apparaitra sur la carte. Découverte et utilisation de l\'auto-complétion et Ajax. Projet pas encore mis en ligne car hébergement actuel pas adapté pour Symfony';
  textProgica = 'Madame Eva Khance, directrice de l\'association des propriétaires de gîtes campagnards (PROGICA) désire mettre en place une plate-forme de réservation, en ligne afin de faciliter et fiabiliser la gestion des réservations. Afin de tester votre réactivité et votre professionnalisme, elle décide avant d\'aller plus loin, de vous confier la conception d\'un outil à usage interne afin de recenser l\'ensemble des biens mis à la location, ainsi que les outils de recherche. La réservation se faisant dans un premier temps directement auprès du propriétaire du bien.'
}
