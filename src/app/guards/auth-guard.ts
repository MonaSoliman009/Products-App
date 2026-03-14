import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  // console.log(route,state);
  let authService = inject(Auth)
  let router = inject(Router)

  if (authService.isAuth) {
    return true
  } else {
    router.navigateByUrl('/login')
    return false;

  }

};
