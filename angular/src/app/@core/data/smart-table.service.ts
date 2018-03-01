import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    seller: '28',
  },
{
  id: 2,
  firstName: 'Mark',
  lastName: 'Otto',
  username: '@mdo',
  email: 'mdo@gmail.com',
  seller: '28', },
];

  getData() {
    return this.data;
  }
}
