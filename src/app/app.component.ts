import { Component } from '@angular/core';
import { PokeService } from './pokes/poke/poke.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pokes: Object[] = [];

  constructor(pokeService: PokeService){
    pokeService.listFromUser('pokemon')
    .subscribe(pokes => this.pokes = pokes);
  }

}
