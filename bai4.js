let classRoom = [
  "nguyễn tiến duẩn",
  "Hoàng Xuân Hiếu",
  "Hồ Sỹ Hưng",
  "Nguyễn Đức Thuận",
  "đoàn Minh Tùng",
  "Hồ Sỹ Hùng",
  "Lê Trung Hiếu",
  "đoàn vua dep trai vua hoc gioi Hữu Quý"
];

let separatedNames = classRoom.map(fullName => {
  let names = fullName.split(" ");
  return {
    ho: names.slice(-1).join(" "),
    ten: names.slice(0, -1).join(" ")
  };
});

console.log("Câu 1: Tách tên và họ riêng");
console.log(separatedNames);

let newStudent = "Nguyễn Văn A";
let positionToAdd = 3;
classRoom.splice(positionToAdd, 0, newStudent);

console.log("\nCâu 2: Thêm sinh viên vào vị trí bất kỳ");
console.log(classRoom);

let studentToRemove = "Hồ Sỹ Hưng";
classRoom = classRoom.filter(student => student !== studentToRemove);

console.log("\nCâu 3: Xoá sinh viên khỏi mảng");
console.log(classRoom);

let searchTerm = "Huu Quy";
let searchResults = classRoom.filter(student =>
  student.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchTerm.toLowerCase())
);

console.log("\nCâu 4: Tìm kiếm theo tên không chứa dấu");
console.log(searchResults);
