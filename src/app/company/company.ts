import {Line} from '../line/line';

export class Company {
  name: string;
  lines: Line[];

  constructor(name: string) {
    this.name = name;
  }

  get lowerCaseName() {
    return this.name.toLowerCase();
  }
}
