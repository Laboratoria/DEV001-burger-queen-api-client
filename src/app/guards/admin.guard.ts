import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AdminService } from 'app/admin.service/admin.service';
import { AuthService } from 'app/auth.service/auth.service';
import { ProductsService } from 'app/products.service/products.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private products: ProductsService,
    private admin: AdminService,
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('CanActivate called');
    let isLoggedIn = this.admin.isAdminRole();

    if (isLoggedIn) {
      return true;
    } else {
      
      const dataArr = new Set(this.products.arrayNumber);
      let result: Array<any> = [...dataArr];
      result.forEach((item: number) =>
        this.products.deleteAll(item).subscribe({
          next: () => {
          sessionStorage.clear();
          localStorage.clear();
          this.authService.deleteToken();
          this.router.navigateByUrl('/home')
        }
        })
      );
    }
    return false;
  }
}
