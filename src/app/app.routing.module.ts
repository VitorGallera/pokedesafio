import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PokeListComponent } from './pokes/poke-list/poke-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PokeDetailsComponent } from './pokes/poke-details/poke-details.component';

const routes: Routes = [
    { path: 'pokemon', component: PokeListComponent },
    { path: 'pokemon/:pokeId', component: PokeDetailsComponent },
    { path: '**', redirectTo: 'pokemon' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule{}