import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  hideNavBar: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url == '/admin/ad-login') {
      this.hideNavBar = false;
    } else {
      this.hideNavBar = true;
    }
  }
}
