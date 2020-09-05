const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.map(x => x*x);
console.log(result);


const resultFilter = numbers.filter(x=> x<5);
console.log(resultFilter);

const resultFind = numbers.find(x => x>5);
console.log("5 থেকে শুধু একটা বড় থাকলে সেটা দিবেঃ ", resultFind);


const student = [
    {Name: "Abdur Rahim", ID: 101, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 102, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 103, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 104, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 105, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 106, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 107, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 108, Phone: 01748983774},
    {Name: "Abdullah Al Alamin", ID: 109, Phone: 01748983774},
    {Name: "Abdur Rahim", ID: 110, Phone: 01748983774},
]
const newElement =  [];
for (let i = 0; i<student.length; i++){
    const element = student[i];
    let name = element["Name"];
    newElement.push(name);
}
console.log(newElement);

const names = student.map(x => x.Name);
console.log(names);

const id = student.filter(x => x.ID>107);
console.log(id);

const id0 = student.find(x => x.ID>108);
console.log(id0);



const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const afterSlice0 = allNumbers.slice(3, 5);
console.log("অরথাত আমি একটা এরে বা লিস্ট থেকে যেই অংশটুকু আলাদাভাবে প্রিন্ট বা কনসোল বা নিতে চাইব তখন সেটা .slice() মেথড ব্যবহার করে নিতে হবে। যেটা এখন আমি নিয়েছি। ", afterSlice0);

console.log(allNumbers.slice(0, 7)); 
console.log(allNumbers.splice(0, 7));
console.log(allNumbers.splice);

const testingNumber = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(testingNumber);
console.log(testingNumber.splice(1, 5, 100, 200, 2300, 400, 500));
console.log(testingNumber.slice(1, 5));
console.log(testingNumber);
const num = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20]
console.log(num)
const remove = num.splice(0, 5,);
console.log(remove)

const numbers0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20];
console.log("This is main array: ",numbers0)

const remove0 = numbers0.splice(1, 5);
console.log("After Splice: ",remove0);

const afterSlice = numbers0.slice(1, 5);
console.log("After Slice: ", afterSlice);