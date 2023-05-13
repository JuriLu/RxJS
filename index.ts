import { from, Observable, of } from 'rxjs';

from(['Alice', 'Ben', 'Charlie']).subscribe({
  next: (values) => console.log(values),
  complete: () => console.log('== Completed =='),
});

const somePromise = new Promise((resolve, reject) => {
  // resolve('-- Promise Resolved --');
  reject('== Promise Rejected ==');
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error: ', err),
  complete: () => console.log('-- Completed --'),
});