import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-poke',
    templateUrl: 'poke.component.html'
})
export class PokeComponent {
    
    @Input() id = '';
    @Input() pokedex_entry = '';
}