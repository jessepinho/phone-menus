export class Company {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  get lowerCaseName() {
    return this.name.toLowerCase();
  }
}
