export class RegularTicket {
  constructor(price, OwnerName) {
    this.ticketNumber = Math.floor(Math.random() * 1000);
    this.price = price;
    this.OwnerName = OwnerName;
  }
}
