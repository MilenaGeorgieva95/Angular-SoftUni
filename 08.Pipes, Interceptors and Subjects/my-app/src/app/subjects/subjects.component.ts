import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  }
}
