import { DatabaseService } from './../../../shared/database/database.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  adminD: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private prodS: ProductsService
  ) {}

  ngOnInit(): void {
    this.getAdminData();
  }

  // get extra data
  getAdminData() {
    this.prodS.loaderUpdate(true);
    this.auth
      .getAdminExtras()
      .then((res) => {
        let data: any = res.data();
        this.adminD = res.data();
        this.prodS.loaderUpdate(false);
      })
      .catch((err) => {
        this.prodS.loaderUpdate(false);
      });
  }
  async googleLogin() {
    await this.getAdminData();
    this.auth
      .loginWithGoogle()
      .then((res: any) => {
        // console.log(res);
        if (res.user.uid && this.adminD && this.adminD.uid == res.user.uid) {
          this.auth.setAuth(true);
          this.router.navigate(['/admin/ad-product']);
        }
      })
      .catch((err) => {
        this.auth.setAuth(false);
        // this.router.navigate(['/']);
      });
  }
}
