import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poke } from './poke';

const API = 'https://orgnova.concore.io';

@Injectable({ providedIn: 'root'})
export class PokeService {

    constructor( private http: HttpClient){}

        listFromUser(userName :string) {

            return this.http
            .get<Poke[]>(API + '/pokemon');
            
        
    }
}