import {CliRouteConfig} from './route-config';
import {Component} from 'angular2/core';
import {MenusList} from './menus-list/menus-list';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'phone-menus-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/phone-menus.html',
  directives: [ROUTER_DIRECTIVES, MenusList],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class PhoneMenusApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
