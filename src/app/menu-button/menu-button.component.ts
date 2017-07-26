import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Button } from '../button.model';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html'
})
export class MenuButtonComponent implements OnInit {
  @Input() theButton: Button;
  @Input() negativeClass: boolean;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.theButton);
  }

}
