import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PokeListComponent } from './pokes/poke-list/poke-list.component';

const routes: Routes = [
    { path: 'pokemon', component: PokeListComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{}