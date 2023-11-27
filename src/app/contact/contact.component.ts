import { Component } from '@angular/core';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'Contacts';
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;
  faMobileScreen = faMobileScreen;

  // compteur de caractère restants 

  private _text: string = "";

  public get text(): string {
    return this._text;
  }

  public set text(value: string) {
    this._text = value;
    this.debug(value)
  }
  public debug(value: string) {
    console.log(value) //On envoie tout ce qui est tapé dans la zone ngModel = text dans la console chaque caractere est rajouté en temps reel et à la fin pour compter le nombre de caractere on utilisera la longueur de l'élément 'text'
  }

// traitement du formulaire de contact
  form: FormGroup = this.fBuilder.group({
    nom: '',
    prenom: '',
    tel: '',
    message: '',
    email: ''
  });

  constructor(private fBuilder: FormBuilder) {
  }


  async send() {
    emailjs.init('clé emailjs')
    let response = await emailjs.send("/*service_1234567 */", "id du template", {
      nom: this.form.value.nom,
      prenom: this.form.value.prenom,
      email: this.form.value.email,
      message: this.form.value.message,
      tel: this.form.value.tel,
    });

    alert('Message Envoyé avec succès.');
    this.form.reset();
  }


}