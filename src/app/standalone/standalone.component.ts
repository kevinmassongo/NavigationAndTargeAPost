import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <h1 *ngIf="showMessage">Bonjour le monde</h1>
  <button (click)="toggleMessage()">afficher/masquer le message</button>
    <p>client {{dateVariable | date}} {{client | uppercase }} {{nombre | currency}}</p>
    <input [(ngModel)]="client">
  `,
  styles: [
    `
     p {
      color: green;
    }
    button {
      padding : 1rem;
      background-color : marrow;
      font-weight : bold;

    } 
    `
  ]
})
export class StandaloneComponent {
  nombre !: number;
  client = "Maria"

  dateVariable = new Date()

  ngOnInit(): void {

    this.nombre = 100


  }

  incrementer() {
    this.nombre += 1
  }

  decrementer() {
    if (this.nombre > 0) {
      this.nombre -= 1
    }
  }

  showMessage = true

  toggleMessage() {
    this.showMessage = !this.showMessage
  }
}
