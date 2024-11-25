import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivateFn, Router } from '@angular/router';
import { take, map } from 'rxjs';

export const civilGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);
const router = inject(Router);

  return afAuth.authState.pipe(
    take(1),
    map(user => {
      if (user) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  )
};


