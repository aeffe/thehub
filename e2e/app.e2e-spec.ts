import { ThehubPage } from './app.po';

describe('thehub App', () => {
  let page: ThehubPage;

  beforeEach(() => {
    page = new ThehubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
