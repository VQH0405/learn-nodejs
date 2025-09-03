
// # Bộ bài tập ôn JavaScript cho học viên backend

// ## Phần 1: Cơ bản về biến, kiểu dữ liệu, toán tử
// 1. Khai báo 3 biến `name`, `age`, `isStudent` và in ra màn hình.
// 2. Tính tổng, hiệu, tích, thương của hai số `a = 10`, `b = 3`.
// 3. Kiểm tra số `x` có chia hết cho 2 không (số chẵn/lẻ).
// 4. Viết chương trình so sánh tuổi 2 người và in ra ai lớn hơn.

// ## Phần 2: Cấu trúc điều kiện & vòng lặp
// 5. Viết chương trình nhập điểm (0–10) và in ra xếp loại: Giỏi, Khá, Trung bình, Yếu.
// 6. Viết chương trình in ra bảng cửu chương từ 1 đến 9.
// 7. Tính tổng các số từ 1 đến 100.
// 8. Viết chương trình đếm có bao nhiêu số lẻ từ 1 → 50.

// ## Phần 3: Hàm
// 9. Viết hàm `sum(a, b)` trả về tổng hai số.
// 10. Viết hàm `isPrime(n)` kiểm tra số nguyên tố.
// 11. Viết hàm `factorial(n)` tính giai thừa.
// 12. Viết hàm `reverseString(str)` để đảo ngược một chuỗi.

// ## Phần 4: Mảng
// 13. Cho mảng `[1, 2, 3, 4, 5]`. Viết code để tính tổng các phần tử.
// 14. Tìm phần tử lớn nhất trong mảng `[10, 20, 5, 8, 30]`.
// 15. Viết hàm lọc ra các số chẵn trong mảng.
// 16. Viết chương trình sắp xếp mảng tăng dần (không dùng `sort`).

// ## Phần 5: Đối tượng & JSON
// 17. Tạo đối tượng `student` có `name, age, email`. In ra màn hình.
// 18. Viết hàm nhận vào `student` và in: "Tên: ..., Tuổi: ..."
// 19. Cho mảng học sinh:
// [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 }
// ]
// Viết code tìm học sinh lớn tuổi nhất.

// 20. Chuyển đối tượng `{name: "David", age: 21}` thành JSON string (`JSON.stringify`) và ngược lại (`JSON.parse`).

// ## Phần 6: Bài tập tổng hợp
// 21. Viết chương trình quản lý danh sách học sinh (mảng).
//    - Thêm học sinh mới.
//    - Xóa học sinh theo tên.
//    - In ra danh sách.

// 22. Viết hàm tính tổng điểm của học sinh, với dữ liệu:
// const student = {
//   name: "Alice",
//   scores: [8, 9, 7, 10]
// };

// 23. Viết hàm sắp xếp danh sách học sinh theo tuổi tăng dần.

// 24. Viết hàm tìm học sinh có điểm trung bình cao nhất từ danh sách.

// 25. Viết chương trình mô phỏng đăng nhập đơn giản:
//    - Có `username = "admin"`, `password = "1234"`.
//    - Nhập từ bàn phím (prompt hoặc readline).
//    - Nếu đúng → in "Đăng nhập thành công", sai → "Sai tài khoản/mật khẩu".


// 1
let name = "Hoàng", age = 19, isStudent = true;
console.log(name, age, isStudent);

// 2
let a = 10, b = 3;
console.log("Tổng:", a + b, "Hiệu:", a - b, "Tích:", a * b, "Thương:", a / b);

// 3
let x = 5;
console.log(x % 2 === 0 ? "Chẵn" : "Lẻ");

// 4
let ageA = 20, ageB = 22;
if (ageA > ageB) console.log("Người A lớn hơn");
else if (ageA < ageB) console.log("Người B lớn hơn");
else console.log("Bằng tuổi");
// 5
function xepLoai(diem) {
  if (diem < 0 || diem > 10) return "Điểm không hợp lệ";
  if (diem >= 8.5) return "Giỏi";
  if (diem >= 7) return "Khá";
  if (diem >= 5) return "Trung bình";
  return "Yếu";
}
console.log(xepLoai(8.2));

// 6: Bảng cửu chương 1..9
for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = 1; j <= 9; j++) row += `${i}x${j}=${i*j}\t`;
  console.log(row);
}

// 7: Tổng 1..100
let sum100 = 0;
for (let i = 1; i <= 100; i++) sum100 += i;
console.log("Tổng 1..100 =", sum100);

// 8: Đếm số lẻ 1..50
let countOdd = 0;
for (let i = 1; i <= 50; i++) if (i % 2 !== 0) countOdd++;
console.log("Số lẻ 1..50:", countOdd);

// 9
const sum = (a, b) => a + b;
console.log(sum(3, 7));

// 10
function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}
console.log(isPrime(29));

// 11
function factorial(n) {
  if (n < 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
console.log(factorial(5));

// 12
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("backend"));

// 13
const arr13 = [1,2,3,4,5];
const total13 = arr13.reduce((s, v) => s + v, 0);
console.log(total13);

// 14
const arr14 = [10, 20, 5, 8, 30];
let max14 = arr14[0];
for (const v of arr14) if (v > max14) max14 = v;
console.log("Max:", max14);

// 15
function evenNumbers(arr) { return arr.filter(n => n % 2 === 0); }
console.log(evenNumbers([1,2,3,4,5,6]));

// 16: Sắp xếp tăng dần (không dùng sort) — dùng Selection Sort
function sortAsc(arr) {
  const a = arr.slice();
  for (let i = 0; i < a.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) if (a[j] < a[minIdx]) minIdx = j;
    if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
  }
  return a;
}
console.log(sortAsc([5,3,8,1,2]));

// 17
const student = { name: "Alice", age: 20, email: "alice@example.com" };
console.log(student);

// 18
function printStudent(s) { console.log(`Tên: ${s.name}, Tuổi: ${s.age}`); }
printStudent(student);

// 19
const students19 = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];
let oldest = students19[0];
for (const s of students19) if (s.age > oldest.age) oldest = s;
console.log("Lớn tuổi nhất:", oldest);

// 20
const david = { name: "David", age: 21 };
const json = JSON.stringify(david);
const back = JSON.parse(json);
console.log(json, back);



