import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PokeService } from '../poke/poke.service';
import { Observable } from 'rxjs';
import { Poke } from '../poke/poke';

@Injectable({ providedIn: 'root'})
export class PokeListResolver implements Resolve<Observable<Poke[]>> {

    constructor(private service: PokeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this.service.listFromUser('pokemon');
    }

}