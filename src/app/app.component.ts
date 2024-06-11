import { Component } from '@angular/core';
import { FormulaireComponent } from './components/formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormulaireComponent],
  template: `
  <p>Apprendre angular pour les débutant</p>
  <app-formulaire />
  `,
  styles: [`
    p {
      font-size : 3rem;
      color : red
    };
    `]
})
export class AppComponent {
  title = 'ApprendreAngular';
}
