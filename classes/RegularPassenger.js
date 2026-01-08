export class RegularPassenger {
  constructor(name, id, Amount_of_money, Workplace, Knows_an_airport_employee) {
    this.name = name;
    this.id = id;
    this.Amount_of_money = Amount_of_money;
    this.Workplace = Workplace;
    this.Knows_an_airport_employee = Knows_an_airport_employee;
  }
  buyTicket(airport) {
    const regularPrice = airport.flights[0].Regular_ticket_price;
    const vipPrice = airport.flights[0].VIP_ticket_price;
    if (this.Knows_an_airport_employee === true) {
      if (
        this.Amount_of_money >= regularPrice - regularPrice / 20 ||
        this.Amount_of_money >= vipPrice - vipPrice / 15
      ) {
        this.Amount_of_money >= regularPrice - regularPrice / 15
        airport.flights[0].Tickets_list.OwnerName = this.name;
        
        return true;
      } else {
        return false;
      }
    } else if (this.Knows_an_airport_employee === false) {
      if (
        this.Amount_of_money >= regularPrice ||
        this.Amount_of_money >= vipPrice
      ) {
        this.Amount_of_money >= regularPrice - regularPrice / 15
        airport.flights[0].Tickets_list.OwnerName = this.name;
        return true;
      } else {
        return false;
      }
    }
  }
}
