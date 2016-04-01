import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Companies} from './companies';


describe('Companies Service', () => {

  beforeEachProviders(() => [Companies]);


  it('should ...', inject([Companies], (service: Companies) => {

  }));

});
