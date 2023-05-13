import { EMPTY, fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

const endpointInput: HTMLInputElement =
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click')
  .pipe(
    map(() => endpointInput.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`).pipe(
        catchError(() =>
          of('Could not fetch data').pipe(
            tap((val) => {
              alert(val);
              //can show primeNG toast
            })
          )
        )
      )
    )
  )
  .subscribe({
    next: (val) => console.log(val),
    error: (err) => console.log('Error:', err),
    complete: () => console.log('Completed'),
  });
