//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");
const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class mercurySedan extends Vehicle {
  constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
    super(make, model, year, color, mileage);

    this.maximumPassengers = maximumPassengers;
    this.passenger = passenger;
    this.numberOfWheels = numberOfWheels;
    this.maximumSpeed = maximumSpeed;
    this.fuel = fuel;
    this.scheduleService = scheduleService;
  }

  getMaximumPassengers() {
    return this.maximumPassengers;
  }

  getPassenger() {
    return this.passenger;
  }

  getNumberOfWheels() {
    return this.numberOfWheels;
  }

  getMaxSpeed() {
    return this.maximumSpeed;
  }

  getFuel() {
    return this.fuel;
  }

  getScheduleService() {
    return this.scheduleService;
  }

  setMaximumPassengers() {
    this.maximumPassengers = maximumPassengers;
  }

  setPassenger() {
    this.passenger = passenger;
  }

  setNumberOfWheels() {
    this.numberOfWheels = numberOfWheels;
  }

  setMaximumSpeed() {
    this.maximumSpeed = maximumSpeed;
  }

  setScheduleService() {
    this.scheduleService = scheduleService;
  }

  setFuel() {
    this.fuel = fuel;
  }

  loadPassenger() {
    if (this.passenger < this.maximumPassengers) {
      if (this.passenger <= this.maximumPassengers) {
          console.log(`A total of ${this.passenger} additional passenger(s) are in the car.`)
          return this.passenger;               
      } else {
          console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
      }
    } else {
      console.log(this.model + " " + this.make + " is full");
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("Engine has started.")
      return this.started = true;
    } else {
      console.log("No fuel!");
      return this.started = false;
    }
  }

  scheduledService(mileage) {
    if (this.mileage > 30000) {            
      this.scheduleService == true
      console.log("It is time to schedule service!")
      return this.scheduleService;                       
    } else {
      console.log("No scheduled service is needed at this time.")
    }
  }
}

// Test Runs for both types of Mercury
let newSedan = new mercurySedan("Mecury", "Sedan", "1965", "Blue", 25000, 5, 2, 4, 160, 0);

console.log("1965 SEDAN DETAILS: ");

console.log(newSedan);

console.log(newSedan.loadPassenger());

console.log(newSedan.start());

console.log(newSedan.scheduledService());

let newEliteSportSedan = new mercurySedan("Mercury", "Sedan", "2022", "Red", 45000, 6, 3, 4, 250, 20);

console.log("2022 SEDAN DETAILS: ")

console.log(newEliteSportSedan);

console.log(newEliteSportSedan.loadPassenger());

console.log(newEliteSportSedan.start());

console.log(newEliteSportSedan.scheduledService());