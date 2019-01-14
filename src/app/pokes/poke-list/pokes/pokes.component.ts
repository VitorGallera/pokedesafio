import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Poke } from '../../poke/poke';

@Component({
  selector: 'ap-pokes',
  templateUrl: './pokes.component.html',
  styleUrls: ['./pokes.component.css']
})
export class PokesComponent implements OnChanges {

  @Input() pokes: Poke[] = [];
  rows: any[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.pokes)
      this.rows = this.groupColumns(this.pokes);  
  }

  groupColumns(pokes: Poke[]) {
    const newRows = [];

    for(let index = 0; index < pokes.length; index+=3) {
      newRows.push(pokes.slice(index, index + 3));
    }

    return newRows;
  }
}
