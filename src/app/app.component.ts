import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';
import { DataService } from './service/data.service';
import { ParentComponent } from './shareData/parent/parent.component';
import { EnfantComponent } from './shareData/enfant/enfant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StandaloneComponent, ParentComponent, EnfantComponent],
  template: `
  <p>Apprendre angular pour les débutants {{salutation}}</p>
  <app-standalone/>
  <app-parent/>
  <app-enfant/>
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
  readonly salutation = inject(DataService).getMessage()
}
