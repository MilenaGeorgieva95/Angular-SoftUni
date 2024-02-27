console.log("hello tsc");

class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new User("John");
console.log(user.sayHello());
