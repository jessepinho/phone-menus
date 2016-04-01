import {Company} from '../company/company';
import {Injectable} from 'angular2/core';

@Injectable()
export class Companies {
  constructor() {}

  getAll() {
    return Promise.resolve(COMPANIES);
  }

  findByLowerCaseName(name: string) {
    return this.getAll().then(function(companies) {
      return companies.find(function(company) {
        return company.name.toLowerCase() === name;
      });
    });
  }
}

var COMPANIES = [
  new Company('Verizon'),
  new Company('Walgreens'),
];
