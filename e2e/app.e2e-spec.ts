import { AngularMenuPage } from './app.po';

describe('angular-menu App', () => {
  let page: AngularMenuPage;

  beforeEach(() => {
    page = new AngularMenuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
