import { from, fromEvent, Observable } from 'rxjs';

const triggerButton = document.querySelector('button#trigger');

const subscription = fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
  (event) => console.log(event, event.type, event.x, event.y)
);

const triggerClick$ = new Observable((subscriber) => {
  const clickHandlerFn = (event) => {
    console.log('Event Callback Executed');
    subscriber.next(event);
  };

  triggerButton.addEventListener('click', clickHandlerFn);

  return () => {
    triggerButton.removeEventListener('click', clickHandlerFn);
  };
});

const subscriptionCustom = triggerClick$.subscribe((ev: MouseEvent) => {
  console.log('Custom Subscription: ');
  console.log(ev);
});

setTimeout(() => {
  console.log('Unsubscribing Sub');
  subscription.unsubscribe();

  console.log('Unsubscribing CustomSub');
  subscriptionCustom.unsubscribe();
}, 3000);
