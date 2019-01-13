import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-poke',
    templateUrl: 'poke.component.html',
    styleUrls: ['./poke.component.css']
})
export class PokeComponent {
    
    @Input() id = '';
    @Input() pokedex_entry = '';
}