import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [],
  template: `
    <p>
      count {{nombre}}
    </p>
    <img [src]="logoAngular" alt="logo angular">
    <button [disabled]="desactiverButton">Enregistrer</button>
    <button (click)="incrementer()">Incrementer</button>
    <button (click)="decrementer()">Decrementer</button>
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
  desactiverButton = true
  nombre !: number;

  ngOnInit(): void {

    this.nombre = 1

    setTimeout(() => {
      this.desactiverButton = false
    }, 5000)

  }

  incrementer() {
    this.nombre += 1
  }

  decrementer() {
    if (this.nombre > 0) {
      this.nombre -= 1
    }
  }

  logoAngular = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUcQofbdW28AoTCjLFzojT7sSZQVsEurWQA&s"
}
