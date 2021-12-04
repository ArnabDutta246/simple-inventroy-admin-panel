import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   name:string;
   phone:string;
   email:string;
   message:string;
   isErrorMsg:string|null = null;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    if(this.name && this.phone && this.email && this.message){
      this.message = null;
    }else{
      this.isErrorMsg = "Please input all these information which help us to contact with you future";
    }
  }

}
