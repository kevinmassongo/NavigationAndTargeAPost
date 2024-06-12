import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
  <nav>
  <p>Apprendre angular pour les débutant</p>
  <ul>
    <li><a routerLink="accueil" routerLinkActive="active">Accueil</a></li>
    <li><a routerLink="apropos" routerLinkActive="active">Apropos</a></li>
    <li><a routerLink="contact" routerLinkActive="active">Contact</a></li>
  </ul>
  </nav>

  <router-outlet />
  
  `,
  styles: [`
    // p {
    //   font-size : 3rem;
    //   color : red;
    //   font-weight:bold;
    //   text-align:center
    // };

    nav {
      display : flex;
      justify-content: space-between;
      font-size : 1.2rem;
      margin: 1rem

    }
    ul{
        display:flex;
      }
      ul li{
        margin-left : 1rem;
        list-style-type : none;

      }

      a {
        text-decoration:none;
        color : inherit;
      }
      .active  {
        background-color : skyblue;
        padding : 1rem 
      }
    `]
})
export class AppComponent {
  title = 'ApprendreAngular';
}
