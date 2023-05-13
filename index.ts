import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const failingHttpRequest$ = new Observable((subs) => {
  setTimeout(() => {
    subs.error(new Error('Timeout'));
  }, 3000);
});

console.log('App Started');
failingHttpRequest$
  .pipe(
    // catchError((error) => of('Fallback value'))
    catchError((error) => EMPTY) // EMPTY is an empty observable
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed'),
  });
