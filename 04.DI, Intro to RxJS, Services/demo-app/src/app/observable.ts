import { Observable, interval, map, range, tap } from 'rxjs';

//Observables
const o = new Observable((observer) => {
  observer.next(200);
  observer.next(201);
  observer.next(202);
});

o.subscribe((data) => {
  console.log(data); // 200; 201; 202;
});

// const interval = (intervalValue: number) => {
//   const o2 = new Observable<number>((observer) => {
//     let counter = 0;
//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);

//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return o2;
// };

//map, filter, reduce
const stream$ = interval(2000)
  .pipe(map((x) => x * 2))
  .pipe(map((x) => x * 10))
  .pipe(tap((x) => console.log(x)));

stream$.subscribe((data) => {
  console.log(data);
});

stream$.subscribe({
  next: (data) => console.log(data),
  error: (error) => console.log(error),
  complete: () => console.log('The stream is completed'),
});

const obsRange = range(1, 10);
