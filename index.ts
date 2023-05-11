import { Observable, Subscriber } from 'rxjs';

const interval$ = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log('Emmited, ', counter);
    subscriber.next(counter++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval$.subscribe((value) => console.log(value));

setTimeout(() => {
  console.log('Unsubscribing');
  subscription.unsubscribe();
}, 7000);
