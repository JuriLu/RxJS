import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log(`'Observable Executed'`);
  subscriber.next('alice');
  setTimeout(() => subscriber.next('ben'), 2000);
  setTimeout(() => subscriber.next('charlie'), 4000);
});

const observer = {
  next: (value) => console.log(value),
};

//Method 1
// observable$.subscribe(observer);

//Method 2
const subscription = observable$.subscribe((val) => {
  console.log(val);
});

setTimeout(() => {
  console.log(`'Unsubscribe'`);
  subscription.unsubscribe();
}, 3000);
