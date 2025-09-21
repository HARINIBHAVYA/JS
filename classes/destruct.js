// arr = [1,2,3,4,5,6,7,8,9,10];
// newarr = arr.map(x => x * 2);
// console.log(newarr);

const car = ["new", "ford", "race-car","above 50lpa"];

const [when, brand, type, price] = car;

console.log(brand);


function dateInfo(da){
  const d = da.getDate();
  const m = da.getMonth()+1;
  const y = da.getFullYear();
  console.log(da.toString());
  // const nd = d.toString();
  return [d, m, y];


}

console.log(dateInfo(new Date()));

const users = {
  u1 : "neha",
  u2 : "nihal",
  u3 : "yashwant"
}


let {u1, u2, u3} = users;

console.log(`${u1} and ${u3} are far away distance relatives to ${u2}`);