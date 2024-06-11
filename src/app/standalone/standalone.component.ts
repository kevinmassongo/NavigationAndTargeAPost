import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <h2 [ngStyle]="{color : color}">Liste des tâches à faire</h2>
  <input type="text" [(ngModel)]="newTask">
  <button (click)="addTask()">Ajouter</button>
  <ul>
    <li *ngFor="let task of tasks">{{task}}</li>
  </ul>
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
    `
  ]
})
export class StandaloneComponent {
  color = 'blue'
  tasks = ["Faire la lessive", "Faire les courses", "Nettoyer la maison"]
  newTask = "Ajouter une tâche"

  addTask() {
    this.tasks.push(this.newTask)
  }
}
