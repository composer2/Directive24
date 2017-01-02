import { WhiteRidersPage } from './app.po';

describe('white-riders App', function() {
  let page: WhiteRidersPage;

  beforeEach(() => {
    page = new WhiteRidersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
