import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  
alert(msg:string,title:string,type:"success"|"error"|"warning"){
  Swal.fire({
    title: title,
    text: msg,
    icon: type,
    showCancelButton: true,
   // confirmButtonText: 'Yes, go ahead.',
    cancelButtonText: 'Cancel'
  })
}
}
