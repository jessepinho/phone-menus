import {Company} from '../company/company';
import {Companies} from '../companies/companies';
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'menus-list',
  templateUrl: 'app/menus-list/menus-list.html',
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class MenusList {
  constructor(private service: Companies) {}

  companies: Company[];

  ngOnInit() {
    return this.service.getAll().then((companies) => {
      this.companies = companies;
    });
  }
}
