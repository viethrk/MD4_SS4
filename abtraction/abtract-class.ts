abstract class Rikkei {
  static STATIC_A = 10;
  private props: string;

  get getProps() {
    return this.props;
  }
  nonAbtractFunc() {
    console.log("non abtract");
    this.abstractFunc();
  }

  abstract abstractFunc(): void;
}

abstract class ChildRikkei2 extends Rikkei {
  abstract abstractFuncChild(): void;
}

class ChildRikkei3 extends ChildRikkei2 {
  abstractFuncChild(): void {
    throw new Error("Method not implemented.");
  }
  abstractFunc(): void {
    throw new Error("Method not implemented.");
  }
}

class ChildRikkei1 extends Rikkei {
  abstractFunc(): void {
    console.log(123);
  }
}
