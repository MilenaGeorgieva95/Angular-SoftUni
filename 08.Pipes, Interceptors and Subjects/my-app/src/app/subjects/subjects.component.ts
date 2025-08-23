import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit {
  // observable$ = new Observable<number>((observer) => {
  //   observer.next(100);
  //   observer.next(101);
  //   observer.next(102);
  //   observer.error(new Error('Something went wrong!'));
  //   observer.complete();
  //   return () => {
  //     cleanup;
  //   };
  // });

  // observable$.pipe(map((n)=>n*2)).subscribe({
  //   next: console.log(),
  //   error: (err)=>console.error('Error from subscribe: ', err),
  //   complete:()=>console.log('Completed!'),
  // });

  ngOnInit(): void {
    const subject$$ = new Subject();
    subject$$.subscribe((data) => console.log('Data from subscribe A', data));
    subject$$.next(1);

    subject$$.subscribe((data) => console.log('Data from subscribe B', data));

    subject$$.subscribe((data) => console.log('Data from subscribe C', data));
    subject$$.next(2);
    subject$$.next(3);

    setTimeout(() => {
      subject$$.subscribe((data) => console.log('Data from subscribe D', data));
      subject$$.next(4);
    }, 2000);

    //BehavioralSubject latest next value only
    const bSubject$$ = new BehaviorSubject(1);
    bSubject$$.subscribe((data) => console.log('bSubscription 1', data));

    setTimeout(() => {
      bSubject$$.next(2);
      bSubject$$.subscribe((data) => console.log('bSubscription 2', data));
    }, 2000);
    setTimeout(() => {
      bSubject$$.next(3);
      bSubject$$.subscribe((data) => console.log('bSubscription 3', data));
    }, 2000);

    //Replay Subject

    const rSubject$$ = new ReplaySubject(5);
    rSubject$$.next(1);
    rSubject$$.subscribe((data) => console.log('RSubscription 1', data));

    for (let i = 2; i < 10; i++) {
      rSubject$$.next(i);
    }

    rSubject$$.subscribe((data) => console.log('RSubscription 2', data));

    //Async Subject

    const asyncSubject$$ = new AsyncSubject();
    asyncSubject$$.next(1);
    asyncSubject$$.subscribe((data) => console.log('Subscribe 1: ', data));
    asyncSubject$$.subscribe((data) => console.log('Subscribe 2: ', data));
    asyncSubject$$.next(2);
    asyncSubject$$.next(3);
    asyncSubject$$.next(4);
    asyncSubject$$.complete();
  }
}
