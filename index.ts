import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice Added Synchronously');
  subscriber.next('Ben Added Synchronously');
  setTimeout(
    () => subscriber.next('**Charlie Added after 2s Asynchronously'),
    2000
  );
});

console.log(`--'Before Execute'--`);
observable$.subscribe((value) => console.log(value));
console.log(`--'After Execute'--`);
