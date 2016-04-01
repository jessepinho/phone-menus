import {Injectable} from 'angular2/core';

import {Company} from '../company/company';
import {Line} from '../line/line';

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

COMPANIES.forEach(function(company) {
  company.lines = [
    new Line(company, 'Customer service', '18885550000'),
    new Line(company, 'Branch', null, 'Varies by branch'),
    new Line(company, 'Corporate', '18885550001')
  ];
});
