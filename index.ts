import { forkJoin } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

const randomNames$ = ajax<any>(
  'https://random-data-api.com/api/name/random_name'
);
const randomNation$ = ajax<any>(
  'https://random-data-api.com/api/nation/random_nation'
);
const randomFood$ = ajax<any>(
  'https://random-data-api.com/api/food/random_food'
);

// randomNames$.subscribe((ajaxResponse: any) =>
//   console.log(ajaxResponse.response.first_name)
// );
// randomNation$.subscribe((ajaxResponse: any) =>
//   console.log(ajaxResponse.response.capital)
// );
// randomFood$.subscribe((ajaxResponse: any) =>
//   console.log(ajaxResponse.response.dish)
// );

forkJoin([randomNames$, randomNation$, randomFood$]).subscribe(
  (
    [nameAjax, nationAjax, foodAjax] //Array Destructuring
  ) =>
    console.log(
      `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`
    )
);
