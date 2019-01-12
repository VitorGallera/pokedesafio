import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PokesModule } from './pokes/pokes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PokesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
