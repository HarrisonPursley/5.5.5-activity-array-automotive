const { Vehicle } = require("./vehicleBaseClass");

class MercurySedan extends Vehicle {
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService){
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}