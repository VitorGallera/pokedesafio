import { NgModule } from '@angular/core';
import { PokeDetailsComponent } from './poke-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PokeDetailsComponent],
    exports: [PokeDetailsComponent],
    imports: [CommonModule]
})
export class PokeDetailsModule {}