import { RegularTicket } from "./RegularTicket.js";
import { VIPTicket } from "./VIPTicket.js";

export class Flight {
  constructor(
    Flight_nama,
    Airline,
    Flight_number,
    Maximum_number_of_passengers,
    Regular_ticket_price,
    VIP_ticket_price
  ) {
    this.Flight_nama = Flight_nama;
    this.Airline = Airline;
    this.Flight_number = Flight_number;
    this.Maximum_number_of_passengers = Maximum_number_of_passengers;
    this.Regular_ticket_price = Regular_ticket_price;
    this.VIP_ticket_price = VIP_ticket_price;
    this.owner_name = null
    this.Tickets_list = []
    this.genarateRegularTicket()
    this.genaratevipTicket()
  }

  add_owner(name) {
    this.owner_name = name;
  }
  genarateRegularTicket(arr = (this.Maximum_number_of_passengers-this.Maximum_number_of_passengers/10)) {
    for (let i = 0; i < arr; i++) {
      const element = new RegularTicket(this.Regular_ticket_price,this.owner_name);
      this.Tickets_list.push(element);
    }
  }
  genaratevipTicket(arr = (this.Maximum_number_of_passengers-this.Maximum_number_of_passengers/10)){
    for (let i =0 ;i<arr;i++){
        const element =new VIPTicket(i,this.VIP_ticket_price,this.owner_name)
        this.Tickets_list.push(element)
    }
  }
   }




