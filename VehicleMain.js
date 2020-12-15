/*
* This program receives and outputs information about a car when prompted
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-014
*/

// Importing the class vehicle from another file
const Vehicle = require("./Vehicle");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// creates vehicle 1 
let automobile1 = new Vehicle();
// creates vehicle 2
let automobile2 = new Vehicle();

// ensures that user inputs only proper values
try {

  // CAR 1
///////////////////////////////////////////////////////////////////////////////
  // variables for later
  let accCommand = 0;
  let brakeCommand = 0;

  // accepts input on Car colour
  const colourChoice = prompt("Enter the colour you wish your car to be: ");
  automobile1.setColour(colourChoice);
  
  // accepts input on Plate numbers
  const plateNum = prompt("Enter the license plate number of your car: ");
  automobile1.setPlate(plateNum);

  // initiates car loop
  while (true) {

    // tells user options
    console.log();
    console.log("Welcome to your Vehicle! If you wish to check the "
                + "plate numbers, type plates, if you wish to check "
                + "the colour, type colour, if you wish to accelerat"
                + "e or decelerate, type either of those. If you wis"
                + "h to check your current speed, type speed. Type s"
                + "top if you wish to stop the program. What would"
                + " you like to do? ");
    const userChoiceLow = prompt("");
    // converts choice to upper
    const userChoice = userChoiceLow.toUpperCase();
    
    // if user wants plates
    if (userChoice == ("PLATES")) {
      console.log("Plate number: " + automobile1.getPlateNum());
      
      // if user wants colour
    } else if (userChoice == ("COLOUR")) {
      console.log("Colour: " + automobile1.getColour());
      
      // if user wants speed
    } else if (userChoice == ("SPEED")) {
      console.log("Current speed: " + automobile1.currentSpeed()
                         + "km/h");
      //if user wants to accelerate
    } else if (userChoice == ("ACCELERATE")) {
      const accChoiceLow = prompt("Would you like soft or hard "
                                       + "acceleration? (soft/hard) :");

      
      // convert to upper
      const accChoice = accChoiceLow.toUpperCase();
      // if user chooses hard accel
      if (accChoice == ("HARD")) {
        accCommand = 2;
        console.log("Current speed: " + automobile1.accelerate(
                           accCommand) + "km/h");
        // if user chooses soft accel
      } else if (accChoice == ("SOFT")) {
        accCommand = 1;
        console.log("Current speed: " + automobile1.accelerate(
                           accCommand) + "km/h");
      // if user chooses something else
      } else {
       console.log("Invalid acceleration selected");
      }
      // if user wants to decelerate
    } else if (userChoice == ("DECELERATE")) {
      const brakeChoiceLow = prompt("Would you like soft or hard "
                                       + "deceleration? (soft/hard) :");

      //convert to uppeer
      const brakeChoice = brakeChoiceLow.toUpperCase();
      
      // if user chooses hard decel
      if (brakeChoice == ("HARD")) {
        brakeCommand = 2;
        console.log("Current speed: " 
                           + automobile1.brake(brakeCommand) + "km/h");
        
        // if user chooses soft decel
      } else if (brakeChoice == ("SOFT")) {
        brakeCommand = 1;
        console.log("Current speed: " 
                           + automobile1.brake(brakeCommand) + "km/h");
      // if user chooses something else
      } else {
        console.log("Invalid deceleration selected");
      }
    //if user types stop, stop!
    } else if (userChoice == ("STOP")) {
      console.log("Stopping...");
      break;
    //if user inputs invalid commands stop
    } else {
      console.log("Invalid Command");
    }
  }
  
  // CAR 2
////////////////////////////////////////////////////////////////////////////////

  // asks user if they want to do a second car
  const car2QuestionLow = prompt("Would you like to take out a second car?"
                                 + "(yes/no) ");
  //ask to upper
  const car2Question = car2QuestionLow.toUpperCase();
      
  if (car2Question == ("YES")) {
    // variables for later
    let accCommand2 = 0;
    let brakeCommand2 = 0;
  
    // accepts input on Car colour
    const colourChoice2 = prompt("Enter the colour you wish your car to be: ");
    automobile2.setColour(colourChoice2);
    
    // accepts input on Plate numbers
    const plateNum2 = prompt("Enter the license plate number of your car: ");
    automobile2.setPlate(plateNum2);
  
    // initiates car loop
    while (true) {
  
      // tells user options
      console.log();
      console.log("Welcome to Vehicle 2! If you wish to check the "
                  + "plate numbers, type plates, if you wish to check "
                  + "the colour, type colour, if you wish to accelerat"
                  + "e or decelerate, type either of those. If you wis"
                  + "h to check your current speed, type speed. Type s"
                  + "top if you wish to stop the program. What would"
                  + " you like to do? ");
      const userChoiceLow2 = prompt("");
      // converts choice to upper
      const userChoice2 = userChoiceLow2.toUpperCase();
      
      // if user wants plates
      if (userChoice2 == ("PLATES")) {
        console.log("Plate number: " + automobile2.getPlateNum());
        
        // if user wants colour
      } else if (userChoice2 == ("COLOUR")) {
        console.log("Colour: " + automobile2.getColour());
        
        // if user wants speed
      } else if (userChoice2 == ("SPEED")) {
        console.log("Current speed: " + automobile2.currentSpeed()
                           + "km/h");
        //if user wants to accelerate
      } else if (userChoice2 == ("ACCELERATE")) {
        const accChoiceLow2 = prompt("Would you like soft or hard "
                                       + "acceleration? (soft/hard) :");
  
        
        // convert to upper
        const accChoice2 = accChoiceLow2.toUpperCase();
        // if user chooses hard accel
        if (accChoice2 == ("HARD")) {
          accCommand2 = 2;
          console.log("Current speed: " + automobile2.accelerate(
                             accCommand2) + "km/h");
          // if user chooses soft accel
        } else if (accChoice2 == ("SOFT")) {
          accCommand2 = 1;
          console.log("Current speed: " + automobile2.accelerate(
                             accCommand2) + "km/h");
        // if user chooses something else
        } else {
         console.log("Invalid acceleration selected");
        }
        // if user wants to decelerate
      } else if (userChoice2 == ("DECELERATE")) {
        const brakeChoiceLow2 = prompt("Would you like soft or hard "
                                       + "deceleration? (soft/hard) :");
  
        //convert to uppeer
        const brakeChoice2 = brakeChoiceLow2.toUpperCase();
        
        // if user chooses hard decel
        if (brakeChoice2 == ("HARD")) {
          brakeCommand2 = 2;
          console.log("Current speed: " 
                             + automobile2.brake(brakeCommand2) + "km/h");
          
          // if user chooses soft decel
        } else if (brakeChoice2 == ("SOFT")) {
          brakeCommand2 = 1;
          console.log("Current speed: " 
                             + automobile2.brake(brakeCommand2) + "km/h");
        // if user chooses something else
        } else {
          console.log("Invalid deceleration selected");
        }
      //if user types stop, stop!
      } else if (userChoice2 == ("STOP")) {
        console.log("Stopping...");
        break;
      //if user inputs invalid commands stop
      } else {
        console.log("Invalid Command");
      }
    }
  } else {
    console.log("You did not wish to take out a second car.");
  }
// catch for general problems like bad user inputs
} catch (err) {
  console.log("Invalid Input");
}
