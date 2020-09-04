function doubleItNormal(num) {
    const result = num*2;
    return result;
}
const number = doubleItNormal(5);
console.log(number);

// function doubleItNum0(num) {
//     const result = num * 10;
//     return result;
// }
// const result = doubleItNum0(20);
// console.log(result);


const doubleItNum1 = function (num) {
     return num * 2;
}
const number8 = doubleItNum1(20);
console.log(number8);


// const doubleItNormal1 = function (num) {
//     return num * 2;
// }
// const number1 = doubleItNormal1(50);
// console.log(number1);

const doubleIt5 = (num)=> num *5;
const resultEs_6 = doubleIt5(10);
console.log(resultEs_6);

// const addNumber = (num) => num * 5;
// const resultEs_6_0 = addNumber(100);
// console.log(resultEs_6_0);

const addNumber0 = (num1, num2)=> num1 + num2;
const resultEs_6_1 = addNumber0(50, 60);
console.log(resultEs_6_1);

// const addNumber1 =(num1, num2) => num1 + num2;
// const resultEs_6_2 = addNumber1(10, 10);
// console.log(resultEs_6_2);

const give5 = ()=>5;
console.log(give5());

// const giveNumber =()=> 50;
// const resultEs_6_3 = giveNumber();
// console.log(resultEs_6_3);

const addNumber2 = (num1, num2=10)=>num1 + num2;
const resultEs_6_4 = addNumber2(1);
console.log(resultEs_6_4);

// const addNumber3 = (num1, num2 = 99)=>num1+num2;
// const resultEs_6_5 = addNumber3(10);
// console.log(resultEs_6_5);


const doMath = (x, y) => {
    const sum = x+y;
    const sub = x - y;
    const result99 = sum * sub ;
    return result99;
}
const total = doMath(10, 2);
console.log(total);
