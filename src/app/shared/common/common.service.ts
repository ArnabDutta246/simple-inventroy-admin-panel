import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  
alert(msg:string,title:string,type:"success"|"error"|"warning"){
  console.log("Alert calling");

}
}
