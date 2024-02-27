class httpData {
  method: string;
  uri: string;
  version: string;
  message: string;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
  }

  response: string | undefined = undefined;
  fulfilled: boolean = false;
}

let myData = new httpData("GET", "http://google.com", "HTTP/1.1", "");
console.log(myData);
