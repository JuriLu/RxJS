import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice Added');
});

console.log(`'Before Execute'`);
observable$.subscribe((value) => console.log(value));
console.log(`'After Execute'`);
