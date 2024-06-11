import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <p>
      composant enfant
    </p>

    <app-parent [donnees]="donneesEnfant"/>
    `,
  styles: ``
})
export class EnfantComponent {
  donneesEnfant = "Bonjour le monde depuis un composant enfant"
}
