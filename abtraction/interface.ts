interface IRikkei {
  name: string;
  code(): void;
}

interface IRikkei2 extends IRikkei {
  add: string;
  review(): void;
}

type AbClass = {
  name: string;
  age: number;
  func: () => void;
};

const per1: AbClass = {
  name: "123",
  age: 1,
  func: () => {},
};

class RikkeiImpl implements IRikkei2 {
  add: string;
  review(): void {
    throw new Error("Method not implemented.");
  }
  name: string;
  code(): void {}
}
