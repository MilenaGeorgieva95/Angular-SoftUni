abstract class Employee {
  public age: number;
  public name: string;
  public salary: number = 0;
  public tasks: Array<string | undefined>;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age), (this.tasks = ["abc"]);
  }

  public work(): void {
    const curTask = this.tasks.shift();
    this.tasks.push(curTask);
    console.log(this.name + curTask);
  }
  public collectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
  }
  public getSalary(): number {
    return this.salary;
  }
}

export class Juniour extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(" is working on a simple task.");
  }
}

export class Seniour extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
    this.tasks.push(
      " is working on a complicated task.",
      " is taking time off work.",
      " is supervising juniour workers."
    );
  }
}

export class Manager extends Employee {
  public divident: number;
  constructor(name: string, age: number) {
    super(name, age);
    this.divident = 0;
    this.tasks.push(
      " sheduled a meeting.",
      " is preparing a quarterly meeting."
    );
  }
  public getSalary(): number {
    return this.salary + this.divident;
  }
}
