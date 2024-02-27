abstract class Melon {
  public weight: number;
  public melonSort: string;
  constructor(weight: number, melonSort: string) {
    (this.weight = weight), (this.melonSort = melonSort);
  }
}

export class myMelon extends Melon {
  private _elementIndex: number;
  public element: string;
  constructor(weight: number, melonSort: string, element: string) {
    super(weight, melonSort);
    (this._elementIndex = weight * melonSort.length), (this.element = element);
  }
  public get elementIndex() {
    return this._elementIndex;
  }
  public toString(): Array<string> {
    return [
      `Element: ${this.melonSort}`,
      `Sort: ${this.element}`,
      `Element Index: ${this.elementIndex}`,
    ];
  }
}

const testMelon = new myMelon(10, "Kingsize", "Water");
console.log(testMelon.toString());
console.log(testMelon.elementIndex);
