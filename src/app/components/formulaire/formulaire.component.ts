import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1 align="center">Formulaire piloté par un modèle HTML</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <input type="text" ngModel name="nom" #nom="ngModel">
      <input type="text" name="prenom" ngModel #prenom="ngModel">
      <button type="submit">Soumettre</button>
    </form>

    <p>{{f.value | json }}</p>

    <p>Nom : {{ nom.value }}</p>
    <p>Prénom : {{ prenom.value }}</p>
  `,
  styles: [`
    * {
      text-align : center;
    }
    `]
})
export class FormulaireComponent {
  onSubmit(f : NgForm) {
    console.log(f.value);
  }
}
