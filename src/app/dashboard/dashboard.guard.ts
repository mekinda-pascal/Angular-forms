import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardService } from '../dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  [x: string]: any;

  constructor(
    private router: Router,
    private serviceGuard: DashboardService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(route);
    return this.serviceGuard.TestGuard();
  }





}
