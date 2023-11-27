import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent {

  @Input() text: string;
  @Input() limit: number;
  voirPlus: boolean;
  
  constructor() {
    this.voirPlus = false;
    this.text = '';
    this.limit = 0;
  }
}

