import Person from "./person";

class SinhVien extends Person {
  private masv: string;
  static count: number = 0;

  constructor(name: string, address: string, masv: string) {
    super(name, address);
    this.masv = masv;
    SinhVien.count++;
  }

  static gayLu() {
    this.count;
  }

  get getMaSV() {
    return this.masv;
  }

  set setMaSV(masv: string) {
    this.masv = masv;
  }

  public di_ngu() {
    console.log("Ngu ngay cay dem");
  }

  // public show_info(): string {
  //   return `Ten toi la: ${this.getName}, toi o: ${this.getAddres}, MaSV la: ${this.masv}`;
  // }

  public show_info(): string {
    return `${super.show_info()}, MaSV la: ${this.masv}`;
  }

  public demo(): number;

  public demo(a: number): number;

  public demo(a?: number): number {
    return 0;
  }
}

export default SinhVien;
