import { NgModule } from '@angular/core';
import { PokeComponent } from './poke/poke.component';

@NgModule({
    declarations: [ PokeComponent ],
    exports: [PokeComponent]
})
export class PokesModule {}