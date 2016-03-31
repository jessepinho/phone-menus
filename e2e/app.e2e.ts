import { PhoneMenusPage } from './app.po';

describe('phone-menus App', function() {
  let page: PhoneMenusPage;

  beforeEach(() => {
    page = new PhoneMenusPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('phone-menus Works!');
  });
});
