
console.log("hello.....")


let n1 = 2;
let n2 = 55;

console.log(" FOR AND (&&) operator");
if (n1 > 1 && n2 > 50){ 
    // 0 && 0 = 0
    // 1 && 0 = 0
    // 0 && 1 = 0
    // 1 && 1 = 1
    console.log(true);
}else{
    console.log(false)
}
console.log(" FOR OR (||) operator");
if (n1 > 1 || n2 > 60){ 
    // 0 || 0 = 0
    // 1 || 0 = 1
    // 0 || 1 = 1
    // 1 && 1 = 1
    console.log(true);
}else{
    console.log(false)
}

let n = (n1 < n2)? true:false;
console.log(n);

// let v1 = null;
// let v2 = "hari";
// let v =  v1 ?? v2;
// console.log(v);

let v1 = null;
let v2 = "hari";
let v =  v1 ?. v2;
console.log(v);


console.log(new Date().getDay());
console.log(new Date().getTime());
console.log(new Date().getDate().toString());
console.log(new Date().toDateString());


switch(new Date().getDay()){
    case 0:
        console.log("Today is sunday...");
    break;
    case 1:
        console.log("Today is Monday...");
    break;
    case 2:
        console.log("Today is Tuesday...");
    break;
    case 3:
        console.log("Today is Wednesday...");
    break;
    case 4:
        console.log("Today is Thursday...");
    break;
    case 5:
        console.log("Today is Friday...");
    break;
    case 6:
        console.log("Today is Saturday...");
    break;
    default:
        console.log("nothing....");
    break;
}

console.log("\n");

for(let i = 0; i <5 ; i++){

    console.log( i + ": You look too dumb.....");
}

console.log("\n");

let i =5;
for( i=0; i<10;i++){
    console.log(i + ": IN LOOP :" +  i + ": iteration .......");
    // console.log(i); // with in loop prints every iteration value..
}
console.log("Outside loop :: " + i); // prints last value when condition fails..

console.log("\n");

let x = 0 ;
while( x < 8){

    if(x === 4){break};
    console.log("condition is true..")
    x++ ;
}

console.log("\n");
y = 0;
do{
    console.log("the value is " + y);
    y++;

}
while(y < 5);


let s = "";

loop1 : for(s1 = 0; s1 <= 6; s1++){
    // console.log("\n")
    loop2 : for(s2 = 0; s2 <= 6; s2 ++){
        if(s1 == 4){break loop2}
        s += s1;
        // console.log("\n");
        // console.log(s);

    }
}
 console.log(s, "\n");