import GiangVien from "./giangvien";
import SinhVien from "./sinhvien";

const sv1 = new SinhVien("", "", "");
sv1.setName = "Sinh Vien 1";
sv1.setAddres = "Da Nang";
sv1.setMaSV = "SV1";
// sv1.di_ngu();
console.log(sv1.show_info());

const sv2 = new SinhVien("", "", "");
const sv3 = new SinhVien("", "", "");
const sv4 = new SinhVien("", "", "");
const sv5 = new SinhVien("", "", "");
const sv6 = new SinhVien("", "", "");
const sv7 = new SinhVien("", "", "");
console.log(sv2.show_info());
console.log(SinhVien.count);

const gv1 = new GiangVien("", "");
// gv1.di_ngu();
