import { Pipe, PipeTransform } from '@angular/core';
import { Poke } from '../poke/poke';

@Pipe({ name: 'filterById'})
export class FilterById implements PipeTransform {
    transform(pokes: Poke[], idquery: string) {
        idquery = idquery.trim().toLowerCase();

        if(idquery) {
            return pokes.filter(poke => poke.id.toLowerCase().includes(idquery));
        }else{
            return pokes;
        }
    }
}