// class Phone{
//     constructor (price, color, rom, ram) {
//         this.Price = price;
//         this.Color = color;
//         this.Rom = rom;
//         this.Ram = ram;
//         this.Brand = "Huawei";
//     }
// }
// const phone1 = new phone(10000, "red", 16+"gb", 3+"gb");
// const phone2 = new phone(25000, "sky-blue", 64+"gb", 4+"gb");
// console.log(phone1);
// console.log(phone2);




class SmartPhone {
    constructor (camera, ram, rom, price){
        this.Brand = 'Redmi';
        this.Camera = camera;
        this.Ram = ram;
        this.Rom = rom;
        this.Price = price;
        
    }
}
const phone1 = new smartPhone(32+"mp", 4+'Gb', 64+"Gb", 23000);
const phone2 = new smartPhone(48+"mp", 4+'Gb', 64+"Gb", 25000);
const phone3 = new smartPhone(48+"mp", 6+'Gb', 124+"Gb", 30000);
const phone4 = new smartPhone(8+"mp", 1+'Gb', 8+"Gb", 8999);
const phone5 = new smartPhone(13+"mp", 1.5+'Gb', 16+"Gb", 13000);
console.log(phone1)
console.log(phone2)
console.log(phone3)
console.log(phone4)
console.log(phone5)