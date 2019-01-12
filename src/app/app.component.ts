import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pokes = [
    {
      id: 'Bulba',
      pokedex_entry: '2'
    }
  ];
}
