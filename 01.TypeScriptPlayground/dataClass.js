var httpData = /** @class */ (function () {
    function httpData(method, uri, version, message) {
        this.response = undefined;
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    return httpData;
}());
var myData = new httpData("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
