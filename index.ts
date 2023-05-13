import { of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

of(1, 7, 3, 2, 6)
  .pipe(
    filter((value) => value > 5),
    tap({
      next: (value) => console.log('Spy :', value),
      complete: () => console.log('Completed'),
      error: (err) => console.log(err),
      // subscribe: () => { console.log('New Subscription'); },  // PART OF RXJS 7.3.0
      // unsubscribe: () => { console.log('Unsubscribed'); },    // PART OF RXJS 7.3.0
      // finalize: () => { console.log('Subscription ended'); }  // PART OF RXJS 7.3.0
    }),
    map((value) => value * 2)
  )
  .subscribe((value) => console.log('Output:', value));
