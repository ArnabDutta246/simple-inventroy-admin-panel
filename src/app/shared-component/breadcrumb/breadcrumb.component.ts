import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() routes:Breadcrumb[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.routes);
  }

}
