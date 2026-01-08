import { AirportSystem } from "./AirportSystem.js";

export class StudentPassenger {
  constructor(name, id, Amount_of_money, School) {
    this.name = name;
    this.id = id;
    this.Amount_of_money = Amount_of_money;
    this.School = School;
  }
  buyTicket(airport) {
    const price = airport.flights[0].Regular_ticket_price;
    if (this.Amount_of_money >= price - price / 10) {
      this.Amount_of_money -= price - price / 10;
      airport.flights[0].Tickets_list[1].OwnerName = this.name;
      return true;
    } else {
      return false;
    }
  }
}
