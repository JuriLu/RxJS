import { interval, Observable, timer } from 'rxjs';

console.log('App Started');

const interval$ = new Observable((subscriber) => {
  let counter = 0;

  const intervalId = setInterval(() => {
    subscriber.next(counter++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval(1000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('completed'),
});

interval$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribing');
}, 7000);
