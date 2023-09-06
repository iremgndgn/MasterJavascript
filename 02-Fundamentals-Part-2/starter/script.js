/*
use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

/*
function logger() {
  console.log("My name is Irem");
}
//calling /running /invoking function
logger();

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges}oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(calcAge1, calcAge2);
*/
/*
//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Irem"));
console.log(yearsUntilRetirement(1980, "Mahmut"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces}piece of apple and ${orangePieces}piece of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
/*
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired ❤`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Irem"));
console.log(yearsUntilRetirement(1950, "Mahmut"));
*/
/*

//////////Challange1
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = "Mahmut";
const friend2 = "Erdem";
const friend3 = "Gullu";

const friends = ["Mahmut", "Erdem", "Gullu"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Merve";
console.log(friends);

const firstName = "Irem";
const Irem = [firstName, "Gundogan", 2037 - 2001, "Developer", friends];
console.log(Irem);
console.log(Irem.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge([year.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge[0], calcAge[1], calcAge[year.length - 1]];
console.log(ages);
*/
/*
const friends = ["Mahmut", "Erdem", "Gullu"];

//Add elements
const newLength = friends.push("Merve");
console.log(friends);
console.log(newLength);

friends.unshift("Irem");
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.unshift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
};
*/
/*
/////Coding challange 
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips + bills);
*/
/*
const ıremArray = [
  "Irem",
  "Gundogan",
  2023 - 2001,
  "developer",
  ["erdem", "mahmut", "gullu"],
];

const ırem = {
  firstName: "Irem",
  lastName: "Gundogan",
  age: 2023 - 2001,
  job: "developer",
  friends: ["erdem", "mahmut", "gullu"],
};
*/
/*
const ırem = {
  firstName: "Irem",
  lastName: "Gundogan",
  age: 2023 - 2001,
  job: "developer",
  friends: ["erdem", "mahmut", "gullu"],
};

console.log(ırem);

console.log(ırem.lastName);
console.log(ırem["lastName"]);

const nameKey = "Name";
console.log(ırem["first" + nameKey]);
console.log(ırem["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Irem? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

console.log(
  `${ırem.firstName} has ${ırem.friends.length} friends, and her best friend is called ${ırem.friends[0]}`
);
*/
/*
const ırem = {
  firstName: "Irem",
  lastName: "Gundogan",
  birthyear: 2001,
  job: "developer",
  friends: ["erdem", "mahmut", "gullu"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
};

console.log(ırem.calcAge());

console.log(
  `${ırem.firstName} is a ${ırem.calcAge()} year old ${ırem.job}, and has ${
    ırem.hasDriversLicense ? "a" : "no"
  } driver's license`
);
*/
/*
//////Coding Challange
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
console.log(
  `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
);
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}
*/
/*
//for lloop keeps running whie condyion is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetion ${rep} 🏋️‍♂️`);
}
*/
/*
const ırem = [
  "Irem",
  "Gundogan",
  2023 - 2001,
  "developer",
  ["erdem", "mahmut", "gullu"],
];

const types = [];

for (let i = 0; i < ırem.length; i++) {
  //reading from ırem array
  console.log(ırem[i], typeof ırem[i]);
  types.push(typeof ırem[i]);
}

console.log(types);

console.log("---ONLY STRINGS");
for (let i = 0; i < ırem.length; i++) {
  if (typeof ırem[i] !== "string") continue;
  console.log(ırem[i], typeof ırem[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < ırem.length; i++) {
  if (typeof ırem[i] !== "number") continue;
  console.log(ırem[i], typeof ırem[i]);
}
*/
/*
const ırem = [
  "Irem",
  "Gundogan",
  2023 - 2001,
  "developer",
  ["erdem", "mahmut", "gullu"],
];

for (let i = ırem.length - 1; i >= 0; i--) {
  console.log(i, ırem[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
*/

///challange
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
