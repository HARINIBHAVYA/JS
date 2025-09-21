// // let message;
// // let login = prompt("Enter a designation", "");

// // if (login == 'Employee') {
// //      alert('Hello');
// // } else if (login == 'Director') {
// //   alert('Greetings');
// // } else if (login == '') {
// //   alert('No login');
// // } else {
// //   alert( '');
 
// // }

// // alert( null || 2 || undefined );
// // alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );

// For an empty string or cancelled input, show “Canceled”// if (null || -1 && 1) alert( 'third' );

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,



// let user = prompt('Enter your designation: ', "");
// let password ;
// if(user == "Admin"){
//     password = prompt("Enter your password: ", "");
//     if(password == "TheMaster"){
//         alert("WELCOME Master ");
//     }else if(password == "" || password == undefined){
//         alert("Canceled");
//     }else{
//         alert("Wrong password");

//     }
// }else if(user == ""){
//     alert("Canceled");
// }else{
//     alert("I don’t know you");
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   console.log( i );
//   i--;
// }


// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);

// let i = 0 ;
// while(i < 5){
//     console.log("dumb...")
//     i++;
// }


// let i = 3;

// while (i) {
//   console.log( i-- );
// }


// let i = 0;
// while (i++ < 5) console.log( i );

// for (let i = 0; i < 5; ++i) console.log( i );

// for(i = 0; i<=  10 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// let i = 0 ;

// while( i < 3){
//     console.log("number "+ i+"!");
//     i++;
// }

// let n ;
// for (i = 2; i < 10; ++i){
//     if (i % 2 == 1){
//         console.log(i);
//     }
// }


let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}

console.log("================Arrow function===================");

let greet= (name1) => console.log("hello, "+name1);
greet("Haru - san");


console.log(typeof typeof 1);
// console.log(typeof "number");
// console.log(typeof typeof);
console.log(false);
console.log(typeof NaN);