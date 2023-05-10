import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
});

console.log(`'Before Execute'`);
observable$.subscribe();
console.log(`'After Execute'`);
