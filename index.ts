import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe((ev) => console.log('Sub 1', ev.type, ev.x, ev.y));
helloClick$.subscribe((ev) => console.log('Sub 2', ev.type, ev.x, ev.y));

setTimeout(() => {
  console.log('Sub 3 Started');
  helloClick$.subscribe((ev) => console.log('Sub 3', ev.type, ev.x, ev.y));

  console.log('Sub 4 Started');
  helloClick$.subscribe((ev) => console.log('Sub 4', ev.type, ev.x, ev.y));
}, 4000);
