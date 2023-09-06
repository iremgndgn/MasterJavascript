/*let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("İrem");
console.log(22);

let firstName = "İrem";
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = "3.1415";

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher;";

console.log(myFirstJob)*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null );
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

// const job; //false

var job = "programmer";
job = "teacher";

const lastName = "Gundogan";
console.log(lastName);
*/

/*
//math operators
const now = 2037;
const ageIrem = now - 2001;
const ageMahmut = now - 2000;
console.log(ageIrem, ageMahmut);

console.log(ageIrem * 2, ageIrem / 10, 2 ** 3); //2**3=2*2*2

const firstName = "Irem";
const lastName = "Gundogan";
console.log(firstName + "" + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; //x=x+10
x *= 4;
x++;
x--;
console.log(x);

//comparospn operators
console.log(ageIrem > ageMahmut); //< > <= >=
console.log(ageMahmut >= 18);

const isFullAge = ageMahmut >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageIrem = now - 2001;
const ageMahmut = now - 2000;

console.log(now - 1991 > now - 2018);

console.log(28 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

const averageAge = (ageIrem + ageMahmut) / 2;
console.log(ageIrem, ageMahmut, averageAge);
*/
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHeigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn);
console.log(BMIMark);
console.log(markHeigherBMI);
*/
/*
const firstName = "Irem";
const job = "developer";
const birthYear = 2001;
const year = 2023;

const Irem =
  "I'm" + firstName + "'a" + (year - birthYear) + "years old" + job + "!";
console.log(Irem);

const IremNew = `I'm ${firstName},a ${year - birthYear} years old ${job}!`;
console.log(IremNew);

console.log(`Just a regular String...`);

console.log("String with \n multiple \n lines");
console.log(`String
 multiple 
 lines`);
*/
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Mahmut can start drving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Mahmut is too young. Wait another ${yearsLeft} years :)`);
}
``
const birthYear = 1998;

let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);
*/
/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHeigherBMI = BMIMark > BMIJohn;

if (markHeigherBMI) {
  console.log(`Mark's BMI ${BMIMark} is heigher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is he,gher than Mark's ${BMIMark} `);
}
*/
/*
//type conversion
const inputYear = "2001";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23));

//type coercion
console.log("I am " + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/
/*
//5 falsy values:0,'',undefined,null,Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mahmut"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it AbortController;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UDEFINED");
}
*/
/*
const age = 18;

if (age === 18) console.log("You just became an adult :) (strict)");

if (age == 18) console.log("You just became an adult :)(loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite == 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is laos a cool number ");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("Why not 23?");
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); //and &&
console.log(hasDriversLicense || hasGoodVision); // ||
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Mahmut is able to drive !");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired); // ||

if (shouldDrive && !isTired) {
  console.log("Mahmut is able to drive !");
} else {
  console.log("Someone else should drive...");
}
*/
/*
// const ScoreDolphins = (96 + 108 + 89) / 3;
// const ScoreKoalas = (88 + 91 + 110) / 3;

// if (ScoreDolphins > ScoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (ScoreKoalas === ScoreDolphins) {
//   console.log("Both win the trophy");
// } else if{
//   console.log("Koalas win the trophy");
// }

//BONUS1-2
const ScoreDolphins = (97 + 112 + 101) / 3;
const ScoreKoalas = (109 + 95 + 123) / 3;

if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (
  ScoreKoalas === ScoreDolphins &&
  ScoreDolphins >= 100 &&
  ScoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else if (ScoreKoalas > ScoreDolphins && ScoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else {
  console.log("No one wins the trophy");
}
*/
/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theroy videos");
    break;
  case "wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjot the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
  console.log("Prepare theroy videos");
} else if (day === "tuesday") {
  console.log("Write code examples");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Record videos");
} else if (day === "friday") {
  console.log("Enjot the weekend :D");
} else if (day === "saturday" || day === "sunday") {
} else {
  console.log("Not a valid day!");
}
*/
/*
if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Irem";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/


// let tip;
// if (50 > bill && bill < 300) {
  //   tip = bill * 0.15;
  // } else {
    //   tip = bill * 0.2;
    // }
    // const totalValue = bill + tip;
    // console.log(
      //   `The bill was ${bill}, the tip was${tip}, and the total value ${totalValue}`
      // );
      
      // const bill = 275;
      // const tip =( bill <= 300 && bill >= 50) ? bill * 0.15 : bill * 0.2;
      // const totalValue = tip + bill;
      // console.log(
      //   `The bill was ${bill}, the tip was${tip}, and the total value ${totalValue}`
      // );