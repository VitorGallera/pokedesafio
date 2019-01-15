import { Component, OnInit, OnChanges } from '@angular/core';
import { PokeService } from '../poke/poke.service';
import { Poke } from '../poke/poke';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  pokes: Poke[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    // this.pokeService
    //   .listFromUser('pokemon')
    //   .subscribe(pokes => this.pokes = pokes);

    //private pokeService: PokeService

    this.pokes = this.activatedRoute.snapshot.data['pokes'];
  }

 
}
