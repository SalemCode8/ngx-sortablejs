import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective} from 'ngx-bootstrap/dropdown';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    BsDropdownDirective,
    BsDropdownToggleDirective,
    NgIf,
    BsDropdownMenuDirective
  ]
})
export class AppComponent {

  navbarCollapsed = true;

  get showTestCases() {
    return localStorage.getItem('showTestCases') === 'true';
  }

}
