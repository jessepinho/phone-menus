import {CliRouteConfig} from './route-config';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {Companies} from './companies/companies';
import {Component} from 'angular2/core';
import {MenusList} from './menus-list/menus-list';
import {ShowCompany} from './show-company/show-company';

@Component({
  selector: 'phone-menus-app',
  providers: [ROUTER_PROVIDERS, Companies],
  templateUrl: 'app/phone-menus.html',
  directives: [ROUTER_DIRECTIVES, MenusList],
  pipes: []
})
@RouteConfig([
  { path: '/:company', name: 'Company', component: ShowCompany },
  { path: '/:company/:line', name: 'Line', component: ShowCompany }
].concat(CliRouteConfig))

export class PhoneMenusApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
