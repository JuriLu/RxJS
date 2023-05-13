import { ajax, AjaxResponse } from 'rxjs/ajax';

interface CCRes {
  credit_card_expiry_date: string;
  credit_card_number: string;
  credit_card_type: string;
  id: number;
  uid: string;
}

let CCResObjectCopy: CCRes;

ajax('https://random-data-api.com/api/v2/credit_cards').subscribe(
  (data: AjaxResponse<CCRes>) => {
    const {
      credit_card_expiry_date,
      credit_card_number,
      credit_card_type,
      id,
      uid,
    } = data.response;

    CCResObjectCopy = data.response;

    CCResObjectCopy = {
      credit_card_expiry_date,
      credit_card_number,
      credit_card_type,
      id,
      uid,
    };

    let CCED = credit_card_expiry_date;

    console.log(`Ajax Response: ${data.response}
                A copy of the object created ${CCResObjectCopy}
                Expiry Date: ${credit_card_expiry_date}`);
  }
);
