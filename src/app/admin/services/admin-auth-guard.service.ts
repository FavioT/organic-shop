import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, switchMap } from 'rxjs/operators'
import { AuthService } from 'app/auth.service';
import { UserService } from 'app/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin)
    );

  }
}
