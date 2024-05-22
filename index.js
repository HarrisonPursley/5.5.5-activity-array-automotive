const { Vehicle } = require("./vehicleBaseClass");

class MercurySedan extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if (this.passenger + passengers < this.maxPassengers){
            console.log("This vehicle is full!")
            return this.passenger;
        }
    }
    start(){
        if (this.fuel > 0){
            console.log("The engine has started successfully. There are " + this.fuel + " gallons remaining in the fuel tank.")
            return this.started = true;
        }
        else{
            console.log("The fuel tank is empty. Please refill the tank.")
            return this.started = false;
        }
    }
    scheduleService(){
        if (this.mileage > 30000){
            this.scheduleService = true
            console.log("Vehicle service has been automatically scheduled.")
            return this.scheduleService;
        }
    }
}