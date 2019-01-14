import { NgModule } from '@angular/core';
import { PokeDetailsComponent } from './poke-details.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PokeDetailsComponent],
    exports: [PokeDetailsComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class PokeDetailsModule {}