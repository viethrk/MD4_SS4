import Person from "./person";

class Student extends Person {
  create(): Person {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): Person {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}
