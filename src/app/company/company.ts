import {Line} from '../line/line';

export class Company {
  name: string;
  lines: Line[];

  constructor(name: string) {
    this.name = name;
  }

  get urlSafeName() {
    return this.name.toLowerCase().replace(/[^a-z]/g, '-');
  }
}
