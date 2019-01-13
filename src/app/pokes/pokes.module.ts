import { NgModule } from '@angular/core';
import { PokeListComponent } from './poke-list/poke-list.component';
import { CommonModule } from '@angular/common';

import { PokeComponent } from './poke/poke.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeDetailsModule } from './poke-details/poke-details.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ 
        PokeComponent,
        PokeListComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        PokeDetailsModule,
        RouterModule
    ]
})
export class PokesModule {}