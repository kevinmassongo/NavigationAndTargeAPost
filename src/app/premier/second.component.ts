import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  template: `
    <p>
      second composant!
    </p>
  `,
  styles: [`
    p{
      font-weight : bold;
      color : green;
      font-size : 3rem
    }`]
})
export class SecondComponent {

}
