import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMessage () {
    return "Bonjour le monde depuis un data service"
  }
}
