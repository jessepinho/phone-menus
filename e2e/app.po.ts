export class PhoneMenusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('phone-menus-app p')).getText();
  }
}
