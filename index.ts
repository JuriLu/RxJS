import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');

  subscriber.next('Alice Added Synchronously');
  subscriber.next('Ben Added Synchronously');
  setTimeout(() => {
    subscriber.next('**Charlie Added after 2s Asynchronously');
    subscriber.complete();
  }, 2000);

  return () => {
    console.log('__Teardown__');
  };
});

console.log(`--'Before Execute'--`);
observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log(`----'Completed'----`),
});
console.log(`--'After Execute'--`);

// So simplified what subscriber method had as an argument is an observer object  "subscribe(observer?: Partial<Observer<T>>): Subscription;" which has an Observer interface

export interface Observer<T> {
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

//After the Subscription has ended the 'Teardown Logic'(preventing memory leaks, cancellation)
