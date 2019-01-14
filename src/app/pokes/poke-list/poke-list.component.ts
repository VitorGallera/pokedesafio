import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke/poke.service';
import { Poke } from '../poke/poke';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokes: Poke[] = [];
  filter: string = '';
  
  constructor(private pokeService: PokeService){
  }
  
  ngOnInit(): void {
    this.pokeService
    .listFromUser('pokemon')
    .subscribe(pokes => this.pokes = pokes);
  }


}
