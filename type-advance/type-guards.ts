type CombinableGuard = string | number;
type NumericGuard = number | boolean;

type UniversalGuard = CombinableGuard & NumericGuard;

const com1: CombinableGuard = 1;
const com2: CombinableGuard = "2";
// ====
type AdminGuard = {
  name: string;
  permission: number;
};

type EmployeeGuard = {
  name: string;
  startDate: string;
};

type UnknowEmployee = AdminGuard | EmployeeGuard;

const unk1: UnknowEmployee = {
  name: "name",
  permission: 1,
};

if ("permission" in unk1) {
  console.log("AdminGuard");
}

if (unk1.hasOwnProperty("permission")) {
  console.log("AdminGuard");
}
