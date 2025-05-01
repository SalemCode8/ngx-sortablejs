import { Component } from '@angular/core';
import {FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import {SortablejsDirective} from 'ngx-sortablejs';
import {JsonPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-sortable-form-array',
  templateUrl: './sortable-form-array.component.html',
  styleUrls: ['./sortable-form-array.component.css'],
  imports: [
    SortablejsDirective,
    NgForOf,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class SortableFormArrayComponent {

  citiesControls = new FormArray([
    'Ankara',
    'Moscow',
    'Munich',
    'Paris',
    'Washington',
  ].map(city => new FormControl(city)));

}
