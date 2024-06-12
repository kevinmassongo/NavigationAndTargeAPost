import { Component } from '@angular/core';
import { PostComponent } from './components/post/post.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostComponent],
  template: `
  <p>Apprendre angular pour les débutant</p>
  <app-post />
  `,
  styles: [`
    p {
      font-size : 3rem;
      color : red;
      font-weight:bold;
      text-align:center
    };
    `]
})
export class AppComponent {
  title = 'ApprendreAngular';
}
