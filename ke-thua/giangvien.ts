import Person from "./person";

class GiangVien extends Person {
  private magv: string;

  get getMagv() {
    return this.magv;
  }

  set setMagv(magv: string) {
    this.magv = magv;
  }

  public di_ngu() {
    console.log("Ngu trua day du");
  }
}

export default GiangVien;
