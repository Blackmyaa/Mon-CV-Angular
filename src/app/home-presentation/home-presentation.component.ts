import { Component } from '@angular/core';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.css']
})
export class HomePresentationComponent {
  public title: string;
  public monNom: string;
  public titreDev: string;
  public maPresentation: string;
  public permis: string;
  public vehicule: string;
  public age: string;

  constructor() {
    this.title = "Présentation"
    this.monNom = "MBENZEDI Yves";
    this.titreDev = "Developpeur Angular Junior";
    this.maPresentation = "Passionné par l'informatique et toutes ses possibilités, j'ai eu la chance d'avoir un premier contact avec le monde du développement lors de mon parcours universitaire ainsi que lors d'expériences professionnelles. Suite à une carriere professionnelle de 13 ans dans le commerce je reviens vers le domaine qui me passionne.";
    this.permis = "Permis B";
    this.vehicule = "Véhiculé"
    function getAge(date: any) {
      var diff = Date.now() - date.getTime();
      var age = new Date(diff);
      return Math.abs(age.getUTCFullYear() - 1970);
    }
    var ageDef: number;
    ageDef = getAge(new Date(1983, 0, 9)); //janvier considéré comme le mois 0 et non le mois 01

    this.age = ageDef + " ans";
  }


}
