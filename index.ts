import { Observable, timer } from 'rxjs';

console.log('App Started');

const timer$ = new Observable((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log('Timer Started');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  return () => {
    clearTimeout(timeoutId);
  };
});

const subscription = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
});

// timer(2000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribing');
}, 1000);
