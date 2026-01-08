import { Flight } from "./Flight.js";

export class AirportSystem {
  constructor(name) {
    this.name = name;
    this.flights = [];
    this.genarate3flights()
}
genarate3flights(arr = 3) {
    for (let i = 0; i < arr; i++) {
      const element = new Flight("tlv to bbc", 1, 123, 100, 50,100,1);
      this.flights.push(element);
    }
  }
}

