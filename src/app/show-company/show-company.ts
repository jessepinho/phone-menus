import {RouteParams} from 'angular2/router';
import {Component} from 'angular2/core';

import {Company} from '../company/company';
import {Companies} from '../companies/companies';

@Component({
  selector: 'show-company',
  templateUrl: 'app/show-company/show-company.html',
  providers: [],
  directives: [],
  pipes: []
})
export class ShowCompany {
  constructor(private service: Companies, private routeParams: RouteParams) {}

  company: Company;

  ngOnInit() {
    let lowerCaseName = this.routeParams.get('name');
    this.service.findByLowerCaseName(lowerCaseName).then((company) => {
      this.company = company;
    });
  }
}
