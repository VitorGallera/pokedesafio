import { NgModule } from '@angular/core';
import { PokeListComponent } from './poke-list/poke-list.component';
import { CommonModule } from '@angular/common';

import { PokeComponent } from './poke/poke.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ 
        PokeComponent,
        PokeListComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PokesModule {}