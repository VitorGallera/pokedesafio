import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeService } from '../poke/poke.service';
import { Poke } from '../poke/poke';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {


  poke$: Observable<Poke>;
  capturados:number = 0;
  cookieValue: string;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeService,
    private cookieService: CookieService
    ) {
    
  }

  ngOnInit() {
    this.poke$ =  this.pokeService.findById(this.route.snapshot.params.pokeId)
    
  }

  getCapturados(name){
    this.cookieValue = this.cookieService.get(name);
    return this.cookieValue;
  }

  setCookies(name){
    this.cookieValue = this.cookieService.get(name);
    this.capturados =  Number(this.cookieValue)
    this.capturados = this.capturados + 1;
    this.cookieService.set( name, this.capturados.toString() );

  }

}
