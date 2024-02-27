class Box<T> {
  public _boxes: Array<T> = [];
  public add(el: T): void {
    this._boxes.push(el);
  }
  public remove(): void {
    this._boxes.shift();
  }

  public get count(): number {
    return this._boxes.length;
  }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
