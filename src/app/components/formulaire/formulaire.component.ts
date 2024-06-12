import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1 align="center">Formulaire reactif</h1>
    <label for="nom">Nom</label>
    <input type="text" id="nom" [formControl]="nom">
    <p>{{nom.value}}</p>
  `,
  styles: [`
    * {
      text-align : center;
    }
    `]
})
export default class FormulaireComponent {
  nom = new FormControl('')

  onSubmit() {
    console.log(this.nom);
  }
}
