import {Company} from '../company/company';
import {Companies} from '../companies/companies';
import {Component} from 'angular2/core';


@Component({
  selector: 'menus-list',
  templateUrl: 'app/menus-list/menus-list.html',
  providers: [],
  directives: [],
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
