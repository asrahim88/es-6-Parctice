function defaultValue(num1, num2 = 0) {
    return num1 + num2;
}
const total = defaultValue(200);
console.log(total);