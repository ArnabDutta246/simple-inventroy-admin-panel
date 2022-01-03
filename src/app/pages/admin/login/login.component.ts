import { DatabaseService } from './../../../shared/database/database.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  createUser() {
    if (this.email && this.password) {
      this.auth.signInUser(this.email, this.password).then((res: any) => {
        console.log(res);
        if (res.user.uid) {
          this.auth.setAuth(true);
          this.router.navigate(['/admin/ad-product']);
        }
      });
    }
  }
}
