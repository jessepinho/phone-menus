import {Company} from '../company/company';

export class Line {
  company: Company;
  name: string;
  number: string;
  numberDescription: string;

  constructor(company: Company,
              name: string,
              number?: string,
              numberDescription?: string)  {

    this.company = company;
    this.name = name;
    this.number = number;
    this.numberDescription = numberDescription;
  }
}
