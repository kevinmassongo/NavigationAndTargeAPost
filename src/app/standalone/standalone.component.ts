import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <h2> {{salutation}}</h2>
  `,
  styles: [
    `
     p {
      color: green;
    }
    button {
      background-color : skyblue;
      font-weight : bold;
      border:none;
      padding:5px
    } 

    .style-liste {
      font-size : 2rem;
      color : gray
    }
    `
  ]
})
export class StandaloneComponent {
  readonly salutation = inject(DataService).getMessage()
}
