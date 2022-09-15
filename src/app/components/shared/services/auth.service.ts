import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken$ = new Subject<string | null>();


  isAuth(token: string | null) {
    this.userToken$.next(token);
  }
}
