import { Component, Input, OnInit } from '@angular/core';



@Component({
    selector: 'ap-poke',
    templateUrl: 'poke.component.html',
    styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

    

    constructor(){
    }

    ngOnInit(): void {
        
    }

    @Input() id = '';
    @Input() pokedex_entry = '';
}