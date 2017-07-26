import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Button } from '../button.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  @Input() menuButtons: Array<Button>;
  @HostBinding('attr.class') cssClass = 'flex-list-row';
  @Output() clickedButton: EventEmitter<Button>;
  private lastClickedButton: Button;

  constructor() {
    this.clickedButton = new EventEmitter();
  }

  onClick(b: Button): void {
    console.log(`Clicked button :`);
    console.log(b);
    this.lastClickedButton = b;
    this.clickedButton.emit(b);
  }

  isSelected(b: Button) {
    if (!b || !this.lastClickedButton) {
      return false;
    }
    console.log(b.text === this.lastClickedButton.text);
    return b.text === this.lastClickedButton.text;
  }


  ngOnInit() {
  }

}
