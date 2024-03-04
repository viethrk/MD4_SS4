class Person {
  private name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  get getAddres() {
    return this.address;
  }

  set setAddres(address: string) {
    this.address = address;
  }

  public di_ngu() {
    console.log("Ngu truoc 12h");
  }

  public show_info(): string {
    return `Ten toi la: ${this.getName}, toi o: ${this.getAddres}`;
  }
}

export default Person;
