import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// const URL = '/mock/account.json';
const URL = '/Account/Find';

@Injectable()
export class AccountService {
    constructor(private http: HttpClient) {}

    getData(): Observable<User> {
      return this.http.get(URL).pipe(map(
        (data: User) => {
          return new User(data.name, data.surname, data.age, data.username);
        }
      ));
    }

    updateData(user: User) {
        return this.http.post('/Account/ModifyPlayer', user);
    }
}
