import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  brand = [
    {brandName:"Hitachi",imageUrl:"https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png"},
    {brandName:"Kent",imageUrl:"https://zeevector.com/wp-content/uploads/2021/02/Kent-Logo-PNG.png"},
    {brandName:"LifeUp",imageUrl:"https://www.lifeup.lk/assets/img/homeLogo.png"},
    {brandName:"Cromptom",imageUrl:"https://www.logolynx.com/images/logolynx/1b/1bdececaf8b780636df25e5969614ada.png"},
    {brandName:"Voltas",imageUrl:"http://flowtechair.com/wp-content/uploads/2017/02/voltas-logo.png"},
    {brandName:"syska",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Syska_logo.png"},
    {brandName:"Hitachi",imageUrl:"https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png"},
    // {brandName:"Hitachi",imageUrl:"https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png"},
    // {brandName:"Hitachi",imageUrl:"https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png"},
    // {brandName:"Hitachi",imageUrl:"https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png"},
  ]
  constructor() { }
}
