export class VIPTicket {
  constructor(TicketNumber, Price, OwnerName) {
    this.TicketNumber = TicketNumber;
    this.Price = Price;
    this.OwnerName = OwnerName;
    this.BenefitsList = ["Free alcohol", "Free food", "Hot towels"];
  }
}
