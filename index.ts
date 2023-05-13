import { ajax, AjaxResponse } from 'rxjs/ajax';

interface CCRes {
  credit_card_expiry_date: string;
  credit_card_number: string;
  credit_card_type: string;
  id: number;
  uid: string;
}

const ajax$ = ajax('https://random-data-api.com/api/v2/credit_cards');

ajax$.subscribe((data: AjaxResponse<CCRes>) =>
  console.log('Sub 1: ', data.response.credit_card_number)
);
ajax$.subscribe((data: AjaxResponse<CCRes>) =>
  console.log('Sub 2: ', data.response.credit_card_number)
);
ajax$.subscribe((data: AjaxResponse<CCRes>) =>
  console.log('Sub 3: ', data.response.credit_card_number)
);
