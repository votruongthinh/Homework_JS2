// Lấy mảng từ input
function getArray() {
  const input = document.getElementById("arrayInput").value;
  return input.split(",").map(Number);
}

// 1. Tổng các số dương
function sumPositiveNumbers() {
  const array = getArray();
  const sum = array.filter((num) => num > 0).reduce((a, b) => a + b, 0);
  document.getElementById("result").innerText = "Tổng các số dương: " + sum;
}

// 2. Đếm số dương
function countPositiveNumbers() {
  const array = getArray();
  const count = array.filter((num) => num > 0).length;
  document.getElementById("result").innerText = "Số lượng số dương: " + count;
}

// 3. Tìm số nhỏ nhất
function findSmallestNumber() {
  const array = getArray();
  const min = Math.min(...array);
  document.getElementById("result").innerText = "Số nhỏ nhất: " + min;
}

// 4. Tìm số dương nhỏ nhất
function findSmallestPositiveNumber() {
  const array = getArray().filter((num) => num > 0);
  const min = array.length ? Math.min(...array) : "Không có số dương";
  document.getElementById("result").innerText = "Số dương nhỏ nhất: " + min;
}

// 5. Tìm số chẵn cuối cùng
function findLastEvenNumber() {
  const array = getArray();
  const evenNumbers = array.filter((num) => num % 2 === 0);
  const lastEven = evenNumbers.length
    ? evenNumbers[evenNumbers.length - 1]
    : -1;
  document.getElementById("result").innerText =
    "Số chẵn cuối cùng: " + lastEven;
}

// 6. Đổi chỗ 2 giá trị trong mảng
function swapArrayElements() {
  const array = getArray();
  const pos1 = prompt("Nhập vị trí thứ nhất:");
  const pos2 = prompt("Nhập vị trí thứ hai:");
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  document.getElementById("result").innerText =
    "Mảng sau khi đổi chỗ: " + array.join(", ");
}

// 7. Sắp xếp mảng theo thứ tự tăng dần
function sortArray() {
  const array = getArray().sort((a, b) => a - b);
  document.getElementById("result").innerText =
    "Mảng sau khi sắp xếp: " + array.join(", ");
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrimeNumber() {
  const array = getArray();
  const prime = array.find(isPrime);
  document.getElementById("result").innerText =
    "Số nguyên tố đầu tiên: " + (prime !== undefined ? prime : -1);
}

// 9. Đếm số nguyên trong mảng số thực
function countIntegersInRealArray() {
  const array = getArray();
  const count = array.filter((num) => Number.isInteger(num)).length;
  document.getElementById("result").innerText = "Số lượng số nguyên: " + count;
}

// 10. So sánh số dương và số âm
function comparePositiveNegative() {
  const array = getArray();
  const positiveCount = array.filter((num) => num > 0).length;
  const negativeCount = array.filter((num) => num < 0).length;
  const result =
    positiveCount > negativeCount
      ? "Số dương nhiều hơn"
      : positiveCount < negativeCount
      ? "Số âm nhiều hơn"
      : "Số dương và số âm bằng nhau";
  document.getElementById("result").innerText = result;
}
