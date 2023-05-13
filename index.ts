import { Observable, of } from 'rxjs';

of('Alice', 'Ben', 'Charlie').subscribe({
  next: (values) => console.log(values),
  complete: () => console.log('== Completed =='),
});

const names$ = new Observable<string>((subscriber) => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
});

console.log(`'CUSTOM OBSERVABLE IMPLEMENTING 'OF' ':  `);
names$.subscribe({
  next: (values) => console.log(values),
  complete: () => console.log('== Completed =='),
});

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }
    subscriber.complete();
  });
}

console.log(`'CUSTOM FUNCTION IMPLEMENTING 'OF creation function' ':  `);

ourOwnOf('Alice 2', 'Ben 2', 'Charlie 2').subscribe((values) => {
  console.log(values);
});
