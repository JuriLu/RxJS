import { from, fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

fromEvent<MouseEvent>(triggerButton, 'click').subscribe((event) =>
  console.log(event, event.type, event.x, event.y)
);

const triggerClick$ = new Observable((subscriber) => {
  triggerButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

triggerClick$.subscribe((ev: MouseEvent) => {
  console.log('Custom Subscription: ');
  console.log(ev);
});
