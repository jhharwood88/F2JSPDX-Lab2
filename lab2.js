/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob (){
  this.population = 1000,
  this.consumption = 1,
  this.hoursSpentInDowington = 0; 

  while (this.population > 0) {
   this.population -= this.consumption;
   this.consumtion ++;
   this.hoursSpentInDowington ++;
  }
}

var blob = new Blob ();


var hoursSpentInDowington = blob.hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function HoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  this.population = population,
  this.consumption = peoplePerHour,
  this.hoursSpentInDowington = 0; 

  while (this.population > 0) {
   this.population -= this.consumption;
   this.consumtion ++;
   this.hoursSpentInDowington ++;
  }
  return this.hoursSpentInDowington;
}
blob.hoursToOoze = HoursToOoze;
assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(3, 1) === 2,
  "blob will consume 3 people in two hours");
assert(blob.hoursToOoze(9, 2) === 3,
  "blob will consume 9 people in 3 hours");
assert(blob.hoursToOoze(15, 1) === 5,
  "blob will consume 15 people in 5 hours");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet , spokenLanguage) {
  this.homePlanet = homePlanet;
  this.spokenLanguage = spokenLanguage;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype

    console.log(hello.this.spokenLanguage);
    return hello.sb.spokenLanguage;
  }

 function Klingon(sentientBeing){
  this.sentientBeing = sentientBeing;
  SentientBeing.call (this, "Qu\"noS", "klingon")

 }
 function Human(sentientBeing){
  this.sentientBeing = sentientBeing;
  SentientBeing.call (this, "Earth", "federation standard")

 }
 function Romulan(sentientBeing){
  this.sentientBeing = sentientBeing;
  SentientBeing.call (this, "Romulus", "romulan")

 }

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

//assert((new Human()).sayHello(new Klingon()) === "nuqneH",
//  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************
var arrayTest = ["hard", "soft", "wine"];

function lastLetterSort(strArray) {
  var strVal, newStrVal;
  for (i = 0 ; i < strArray.length ; i++ ){
    strVal = strArray[i];
    newStrVal = strVal.split("").reverse().join("");
    strArray[i] = newStrVal;
  }
  strArray.sort();
  for (i = 0 ; i < strArray.length ; i++ ){
    strVal = strArray[i];
    newStrVal = strVal.split("").reverse().join("");
    strArray[i] = newStrVal;
  }
  return strArray;
}
var x = lastLetterSort(arrayTest);
console.log(x);

//var arrayTest = ["hard", "wine", "soft"];
//var arrayPass = ["hard", "soft", "wine"];
//assert(lastLetterSort(arrayPass)===arrayTest, "The array is sorted");
//assert(lastLetterSort(arrayPass)===arrayPass, "This assert should fail");


function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  var val;
  for (val in numberArray){
    sum += val;
  }
  return sum;
}
arrayTest = [1 , 3 , 6 ]
assert(sumArray(arrayTest)===10, "This is a pass");
assert(sumArray(arrayTest)=== 12321, "This is a fail");

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(item) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array

  });
}

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
