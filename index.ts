import { name$, storeDataOnServer, storeDataOnServerError } from './external';

// name$.subscribe((value) => console.log(value));

storeDataOnServer('Some Value').subscribe((value) => console.log(value));

// storeDataOnServerError('ValVal').subscribe((val) => console.log(val));
