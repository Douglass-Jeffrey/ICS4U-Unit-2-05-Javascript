/* 
* This class holds information about a vehicle.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-14
*/

// declaring Vehicle class
class Vehicle {
  // Constructor that defines fields
  constructor() {
    this.plateNumber = "";
    this.colour = "";
    this.doorNum = 4;
    this.speed = 0;
    this.maxSpeed = 200;
  }

  // setter for setting colour 
  setColour(colourChoice) {
    this.colour = colourChoice;
  }

  // Method for getting colour 
  getColour() {
    
    return this.colour;
  }

  // setter for setting plateNum 
  setPlate(plateNum) {
    this.plateNumber = plateNum;
  }

  // getter for getting plateNum 
  getPlateNum() {
    
    return this.plateNumber;
  }
  
  // Method for getting colour 
  currentSpeed() {
    
    return this.speed;
  }
  
  /**
   * Method for accellerating.
   */

  accelerate(accCommand) {
    if (accCommand == 1) {
      this.speed = (this.speed + 20);
    } else if (accCommand == 2) {
      this.speed = (this.speed + 40);
    }
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed; 
    }
    return this.speed;
  }
  
  /**
   * Method for decellerating.
   */

  brake(brakeCommand) {
    if (brakeCommand == 1) {
      this.speed = (this.speed - 20);
    } else if (brakeCommand == 2) {
      this.speed = (this.speed - 40);
    }
    if (this.speed < 0) {
      this.speed = 0;
    }

    return this.speed;
  }
}

// Exporting the class
module.exports = Vehicle;