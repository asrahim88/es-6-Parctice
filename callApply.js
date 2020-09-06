const normalPerson = {
    FirstName: "Justine",
    LastName: "TimberLake",
    GetFullName: function () {
        this.GetFullName = this.FirstName +" "+this.LastName;
        return this.GetFullName;
    },
    salary: 50000,
    ChargeBill: function (amount, tips, tax) {
        this.salary = this.salary -amount -tips -tax;
        return this.salary;
    }

};

const heroPerson = {
    FirstName: "Komi",
    LastName: "TimberLake",
    salary: 60000,
};

const friendlyPerson = {
    FirstName: "htp",
    LastName: "Owner",
    salary: 60000,
};
// const heroChargeBill = normalPerson.ChargeBill.bind(heroPerson);
// const heroChargeBill0 = heroChargeBill(5000);
// console.log(heroChargeBill0)
// // console.log(heroSalary);

// normalPerson.ChargeBill.call(heroPerson, 500, 10, 50);
// console.log(heroPerson.salary);

// normalPerson.ChargeBill.call(heroPerson, 50, 50, 50)
// console.log(heroPerson.salary);

normalPerson.ChargeBill.apply(heroPerson, [500, 10, 5]);
console.log(heroPerson.salary);
console.log(normalPerson.salary)