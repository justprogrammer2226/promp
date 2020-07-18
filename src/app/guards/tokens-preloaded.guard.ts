import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable, forkJoin, Subject } from 'rxjs';
import { PromService } from '../services/prom.service';

@Injectable()
export class TokensPreloadedGuard implements CanActivate {
  constructor(private promService: PromService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return new Observable<boolean>(resolve => {
      if (this.promService.areTokensPreloaded) {
        resolve.next(true);
        resolve.complete();
      } else {
        this.promService.loadTokens().subscribe(_ => {
          resolve.next(true);
          resolve.complete();
        });
      }
    });
  }
}
