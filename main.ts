/**
 * @author xxx
 * @version 1.0.0
 * @date 2025-xx-yy
 * @fileoverview This program keeps track of car stats
 */

// constants and variables
let keepGoing: number = 1;
let odometer: number = 65000;		// mileage of Car
let oilChangeKM: number = 65000   // value since the last oil change 
let carColor: string = null;	// color of Car
let carModel: string = null;	// model of Car
let newMileage: number = 0.0;	// new mileage amount
let gasCost: number[] = new Array(10);// cost of gas per fill up.
gasCost[0] = 74.00;

// Prompt user for what action they would like to perform 
while (keepGoing === 1) {
  // User input 
  const userOperation = prompt("Congrats on your new car!\nWhat would you like to do? (select by typing the letter in the front of the action.)\na.drive\nb.fill up with gas\nc.change the colour of your car\nd.see how much it costs to fill up with gas\ne.is it time for an oil change?\nf.car details\ng.I'm done driving\n") || "";

  // create if statement
  if (userOperation === "a") {
    newMileage = newMileage + drive();
    //console.log(`${newMileage}`)
  }

  if (userOperation === "b") {
    fillUp();
    //console.log(`${gasCost}`)
  }

  if (userOperation === "c") {
    carColor = wrapCar();
    //console.log(`${carColor}`)
  }

  if (userOperation === "d") {
    let averageFillUp: number = displayCostToFillUp();
    console.log(`The average cost of your fill ups was $ ${averageFillUp.toFixed(2)}`)
  }

  if (userOperation === "e") {
    if (oilChange(odometer,oilChangeKM)){
      // if true do nothing
    } else {
      console.log("Your car does not need an oil change.")
    }
  }

  if (userOperation === "f") {
    console.log(`${carStats()}`)
  }

  if (userOperation === "g") {
    keepGoing = 0;
  }
}  

// add necessary code for the assignment here.
function oilChange(mileage: number, oilChangeKM: number): boolean {
  // This function will check to see if your car needs an oil change and
  let oilChangeNeeded: boolean = false 
  if ((odometer - oilChangeKM) >= 5000) {
    oilChangeKM = odometer;
    console.log("An oil change was done")
    oilChangeNeeded = true 
  }
  // return the necessary responses, as well as update the variables.
  return oilChangeNeeded
}

function carStats(): string {
  // This function will return a string of: make,colour,odometer reading,cost of gas,and oil change KM
  console.log(`Here are the statistics of your ${carColor} ${carModel}: \n the odometer reads ${odometer}\n the last time the oil was changed ${oilChangeKM}\n the gas cost is ${gasCost}\n the new mileage on your car is${newMileage}`)
}

function wrapCar(): string {
  // prompt user for colour of car 
  const newColour: string = prompt("What is the new colour you wish for your car?") || "no colour entered";
  // return the colour to the main program to update carColor
  return newColour;
}

function drive(): number {
  // generate random number between 100 and 1000
  let randomDistance: number; 
  randomDistance = Math.floor(Math.random() * 1000) + 10;
  // update odometer in main to original reading + random number
  odometer = odometer + randomDistance
  // return value to main and update mileage variable 
  return randomDistance;
}

function fillUp(): number {
  // prompt user how much they paid to fill up car
  const costOfGasAsString: string = prompt("How much did you pay to fill up your car?") || "no amount entered";
  const costOfGasAsNumber = parseFloat(costOfGasAsString || "0.00");
  // update gasCost array at the next empty location
  let counter: number = 0;
  while (gasCost[counter] > 0){
    counter++;
  }
  gasCost[counter] = costOfGasAsNumber;
}

function displayCostToFillUp(): number {
// display costs to fill up the car (gasCost array)
  let counter: number = 0;
  let totalFillUpCost: number = 0.0;
  while (gasCost[counter] >= 0) {
    totalFillUpCost = totalFillUpCost + gasCost[counter];
    console.log(`When you filled up time number ${counter + 1} it cost you $ ${gasCost[counter].toFixed(2)} `)
    counter++;
  }
// average cost based on fill ups done 
  const averageFillUpCost: number = totalFillUpCost / (counter -1)
// return average cost to main() to display 
  return averageFillUpCost
}


console.log("\nDone.");