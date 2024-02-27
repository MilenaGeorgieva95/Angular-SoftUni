var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function createTickets(arr, sortedBy) {
    var result = new Array();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var ticket = arr_1[_i];
        var _a = ticket.split("|"), destination = _a[0], price = _a[1], status_1 = _a[2];
        var tempTicket = new Ticket(destination, Number(price), status_1);
        result.push(tempTicket);
    }
    return result.sort(function (a, b) {
        if (a[sortedBy] > b[sortedBy]) {
            return 1;
        }
        if (a[sortedBy] < b[sortedBy]) {
            return -1;
        }
        return 0;
    });
}
console.log(createTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination"));
console.log(createTickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "status"));
