type Human = {
  name: string;
  age: number;
  fn: () => void;
};

interface Person {
  name: string;
  age: number;
  fn: () => void;
}

const p2: Human = { name: "123", age: 1, fn: () => {} };
