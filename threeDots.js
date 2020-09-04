const ages1 = [10, 13, 14, 15, 16, 17, 18];
const ages2 = [19, 20, 21, 22, 23, 24, 25];

const allArray = ages1.concat(ages1).concat([100]);
console.log(allArray);

const ages3 = [...ages1, ...ages2, ...[999]];
console.log(ages3);

const number0 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const number1 = [110, 120, 130, 140, 150, 160, 170, 180];
const es_6ConcatArray = [...number0, ...number1, ...[9898998]];
console.log(es_6ConcatArray);

const minister = 100000;
const engineer = 200000;
const officer = 30000;
const maximumSalary = Math.max(minister, engineer, officer);
const es_6maximumNumber = [minister, engineer, officer];
const es_6MaximumNumber = Math.max(...es_6maximumNumber);
console.log(maximumSalary);
console.log(es_6MaximumNumber);