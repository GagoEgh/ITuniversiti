import { CanActivateFn } from '@angular/router';
import { inject } from 'vue';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService)

  return true;
};
