// union type with type
type Admin = {
  name: string;
  permission: number;
};

type Employee = {
  name: string;
  startDate: string;
};

type Persion = {
  address: string;
};

type UnionType = Admin & Employee & Persion;

// union interface with type
interface SinhVien {
  masv: string;
  startDate: string;
}

type Student = Persion & SinhVien;

// union interface with interface
interface GiangVien {
  masv: string;
  startDate: string;
}

type Student1 = GiangVien & SinhVien;

// Kieu du lieu nguyen thuy
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const num1: Universal = 1;
