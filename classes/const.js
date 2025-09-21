// class Age {
//     constructor (num){
//         this.age = num;
//     }
// }

// const uage =  new Age(20) ;
// let user_age = "your age is " +uage.age;
// console.log(user_age);

class Car {
  constructor(name, mode) {
    this.brand = name;
    this.model = mode;
  }

  brought(){
      return `I have brought this ${this.brand}  of ${this.model} on new year festival sale`;
  }
}

class Budget extends Car {
    constructor(brand, model, online){
        super(brand, model);
        // this.brand = brand;
        // this.model = model
        // super(model);
        this.pay = online;
    }
    update(){
        return `on this  ${this.brand}  ${this.model} , car should be brought only by ${this.pay}`;
    }
}
console.log("\n");
const mycar = new Car("Ford", "latest-s model ");
console.log("The car company is " +mycar.brand + ", and model is "+mycar.model);
console.log("====================================================================");
console.log(mycar.brought());
console.log("======================================================================");
const payMethod = new Budget(mycar.brand, mycar.model, "online mode payment!!!!");
console.log(payMethod.update());
console.log("\n");