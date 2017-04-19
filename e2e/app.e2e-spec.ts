import { BctcPage } from './app.po';

describe('bctc App', () => {
  let page: BctcPage;

  beforeEach(() => {
    page = new BctcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
