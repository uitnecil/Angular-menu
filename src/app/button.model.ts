/**
 * Created by lice on 6/19/17.
 */

export class Button {
  constructor(public text: string,
              public link: string = '#',
              public externalStyles: string[] = [],
              public customStyles: string = '',
              public visibility: string = 'visible') {
    this.visibility = (this.visibility === 'visible' || this.visibility === 'hidden') ? this.visibility : 'visible' ;
  }

  setExternalStyle(newStyle: Array<string>): void {
    this.externalStyles = [];
    newStyle.forEach((v) => this.externalStyles.push(v));
  }

  setCustStyle(newStyle: string = ''): void {
    this.customStyles = newStyle;
  }

  setLink(newLink: string = '#'): void {
    this.link = newLink;
  }

  setText(newText: string = '#'): void {
    this.text = newText;
  }

  setVisibility(newState: string = 'visible'): void {
    this.visibility = (newState === 'visible' || newState === 'hidden') ? newState : 'visible' ;
  }
}
