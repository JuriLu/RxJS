import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement =
  document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => {
  isLoggedIn$.next(true);
});

fromEvent(logoutButton, 'click').subscribe(() => {
  isLoggedIn$.next(false);
});

//Navigation Bar
isLoggedIn$.subscribe(
  (isLoggedIn) => (loggedInSpan.innerText = isLoggedIn.toString())
);

//Buttons

isLoggedIn$.subscribe((isLoggedIn) => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none';
});

// Print Sate

fromEvent(printStateButton, 'click')
  .pipe(withLatestFrom(isLoggedIn$)) // takes the latest value of the observable/subject declared inside and stores it in an array [event,value]
  .subscribe(([event, isLoggedIn]) => {
    console.log('User is logged in', isLoggedIn);
  });
