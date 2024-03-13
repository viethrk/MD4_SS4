let people: Array<string> = ["1"];
let stringArr: string[] = ["2"];

people.push();
stringArr.push();

const getTuple = <T>(a: T, b: T): [T, T] => {
  return [a, b];
};

getTuple<string>("hello", "world");
getTuple<number>(1.25, 2.56);
getTuple<boolean>(true, false);

const merge = <T extends object, U extends object>(
  objA: T,
  objB: U
): object => {
  return {};
};

type User = {
  name: string;
};

type Hs = {
  address: string;
};

merge<User, Hs>({ name: "123" }, { address: "'" });

interface Lenghthy {
  length: number;
}

const countAndDescripe = <T extends Lenghthy>(element: T): [T, string] => {
  return [element, ""];
};

countAndDescripe([""]);

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value " + obj[key];
};

extractAndConvert({ name: "nameobjt" }, "name");
