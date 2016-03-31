import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {PhoneMenusApp} from '../app/phone-menus';

beforeEachProviders(() => [PhoneMenusApp]);

describe('App: PhoneMenus', () => {
  it('should have the `defaultMeaning` as 42', inject([PhoneMenusApp], (app: PhoneMenusApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([PhoneMenusApp], (app: PhoneMenusApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

