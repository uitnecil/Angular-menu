import { Component } from '@angular/core';
import { Button } from './button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttons: Array<Button>;

  constructor() {
    this.buttons = [
      new Button('Home', 'home', ['ui', 'button', 'yellow'], '', 'f'),
      new Button('Edit', 'edit', ['ui', 'button', 'orange']),
      new Button('View', 'view', ['ui', 'button', 'green']),
      new Button('Go', 'view', ['ui', 'button', 'pink']),
      new Button('Bookmarks', 'view', ['ui', 'button', 'purple']),
      new Button('Help', 'view', ['ui', 'button', 'teal']),
    ];

    this.buttons.forEach((v) => {
      console.log(v);
      v.externalStyles.pop();
      v.externalStyles.push('basic');
      // v.externalStyles.push('inverted');
    });
  }

  clicku(event: Button, div: HTMLDivElement) {
    div.textContent = `Parent of Menu - handling the Event Emitted => Clicked on: ${event.text}`;
  }
}
