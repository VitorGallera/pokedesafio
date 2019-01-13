import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke/poke.service';
import { Poke } from '../poke/poke';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {


  poke$: Observable<Poke>;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeService
    ) {
    
  }

  ngOnInit() {
    this.poke$ =  this.pokeService.findById(this.route.snapshot.params.pokeId)
  }

}
