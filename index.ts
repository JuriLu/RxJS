import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const source$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
  }, 2000);
  setTimeout(() => {
    subscriber.next('B');
  }, 5000);
});

console.log('App has started');
source$
  .pipe(concatMap((value) => of(1, 2)))
  .subscribe((value) => console.log(value));

// FOR THE VALUE A AND B EMITTED FROM SOURCE$ OBSERVABLE, VALUES 1, 2 ARE EMITTED FROM OF(1,2) OBSERVABLE
