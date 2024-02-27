class Ticket {
  destination: string;
  price: number;
  status: string;
  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

function createTickets(arr: Array<string>, sortedBy: string): Array<object> {
  let result = new Array<object>();
  for (let ticket of arr) {
    const [destination, price, status] = ticket.split("|");
    const tempTicket = new Ticket(destination, Number(price), status);
    result.push(tempTicket);
  }
  return result.sort((a, b) => {
    if (a[sortedBy] > b[sortedBy]) {
      return 1;
    }

    if (a[sortedBy] < b[sortedBy]) {
      return -1;
    }

    return 0;
  });
}

console.log(
  createTickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);

console.log(
  createTickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
