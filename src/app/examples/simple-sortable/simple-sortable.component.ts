import { Component } from '@angular/core';
import {SortablejsDirective} from 'ngx-sortablejs';
import {JsonPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-simple-sortable',
  templateUrl: './simple-sortable.component.html',
  styleUrls: ['./simple-sortable.component.css'],
  imports: [
    SortablejsDirective,
    NgForOf,
    JsonPipe
  ]
})
export class SimpleSortableComponent {

  cities = [
    'Ankara',
    'Moscow',
    'Munich',
    'Paris',
    'Washington',
  ];

}
