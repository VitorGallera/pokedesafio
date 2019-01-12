import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://orgnova.concore.io';

@Injectable({ providedIn: 'root'})
export class PokeService {

    constructor( private http: HttpClient){}

        listFromUser(userName :string) {

            return this.http
            .get<Object[]>(API + '/pokemon');
            
        
    }
}