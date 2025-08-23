import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducer',
  pure: true, //memoized
})
// export class ReducerPipe implements PipeTransform {
//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }
// }
export class ReducerPipe<T> implements PipeTransform {
  //[1,2,3,4].reduce(callbackFn, 0)
  transform(
    arr: T[],
    callbackFn: (acc: any, curr: any) => any,
    initialValue: T
  ): unknown {
    return arr.reduce(callbackFn, initialValue);
  }
}
