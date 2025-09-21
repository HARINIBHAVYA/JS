// alert("hello practice ....");

// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).



// let admin = "John";
// let name = admin;

// alert(name);
// console.log(name);

// let planet =  "EARTH";
// let currentVisitor = "Hari";
// console.log(NaN ** 0);
// console.log(typeof planet);

// let yourName = prompt("Enter yout name : ");
// alert("Your name is " + yourName )

// console.log(Number(undefined));
// console.log(Number(NaN));
// console.log(Number(0));
// console.log(Number(null));

// console.log(Number("  \t   \n   "));


// let n = 2;
// console.log(n = n + 5);
// console.log(n = n * 2);


// let counter = 0;
// console.log(counter++);
// console.log(++counter);
// // let n1 = counter++;
// // let n2 = ++counter;

// // console.log(n1);
// // console.log(n2);

// // for (a = 1, b = 3, c = a * b; a < 5; a++) {

// //      console.log(a, b, c);
// // }


// console.log("\n");
// let a = 1, b = 1;

// let c = ++a; 
// let d = b++; 

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = 2;

// let x = 1 + (a *= 2);
// console.log(x);


// console.log("\n");
// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log("  -9  " + 5);
// console.log("  -9  " - 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(" \t \n" - 2);
// console.log(typeof undefined)


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert( +a + +b); 
// console.log(5 > 4);
// console.log("apple" > "pineapple");
// console.log("2" > "12");
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "\n0\n");
// console.log(null === +"\n0\n");

// if ("0") {
//   alert( 'Hello' );
// }

// let officialNameOfJavascript = prompt("What is the official name of JS:: ", "" );

// if(officialNameOfJavascript == "ECMAScript" ){
//     alert("Right...")
// }else{
//     alert("You don't know? “ECMAScript”")
// }

// let number = prompt("Enter a number?", " ");

// if(number > 0){
//     alert("1");
// }else if(number < 0){
//     alert("-1");
// }else{
//     alert("0");
// }

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let a = prompt("Enter a number?", "");
// let b= prompt("Enter b number ?" ,"");
// let result;
// (a+b < 4)? alert("Below"): alert("Over");


// let message;
// let login = prompt("Enter a designation"

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// console.log ("alert()");

// console.log(-1);

// let user = "new user";

// alert(user ?? "Anonymous");``

// let x = (1 && 2) ?? 3; 
// alert(x);

// Write a loop which prompts for a number greater than 100.
//  If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100
//  or cancels the input/enters an empty line.

// let i ;
// let n ;
// while(n < 100 ){
//     i =  prompt("Enter a number.....", "");

//     if ( i < 100){
//        alert("allowed only above 100......")

//     }else if(i === null || i === ""){
//         break;
//     }else{
//         alert("well done ...")
//     }

// }

// let n = prompt("Enter a number ... ", "");
// while(n < 100){
//     let i;
//     if(i < 100){
//         prompt("Enter another input ", "");
//     }else if (n === null || n === ""){
//         break;
//     }else{
//         alert("well done ...")

//     }
// }

// let n;

// while (true) {
//     n = prompt("Enter a number ...", "");

//     if (Number(n) > 100) {
//         alert("Well done ...");
//         break;
      
//     } else if(Number(n) < 100) {
//         prompt("Enter input again ...", "");
      
//       }
//      else if (n === null || n === "") {
//         break; // user canceled or empty input
//     }

// }

// // =====================Correct code===================================
// let n;

// while (true) {
//     n = prompt("Enter a number ...", "");

//     if (n === null || n === "") {
//         break; // user canceled or empty input
//     }

//     if (Number(n) > 100) {
//         alert("Well done ...");
//         break; // stop if > 100
//     }
    
//     // If number is <= 100, the loop just repeats automatically
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );


let ask = (question, yes, no) => {
     if (confirm(question)) yes();
    else no();
};

    ask("Do you agree?",
     () => alert("You agreed."),
     () => alert("You canceled the execution."));