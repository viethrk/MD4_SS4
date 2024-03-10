abstract class Person {
  name: string;
  age: number;
  address: string;

  get getName() {
    return this.name;
  }

  abstract create(): Person;
  abstract read(): void;
  abstract update(): Person;
  abstract delete(): void;
}

export default Person;
