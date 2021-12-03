import { Injectable } from '@angular/core';
import { Product } from 'src/app/interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  brand = [
    {
      brandName: 'Hitachi',
      imageUrl:
        'https://www.pngkit.com/png/detail/609-6092424_ge-hitachi-nuclear-ge-hitachi-logo.png',
    },
    {
      brandName: 'Kent',
      imageUrl:
        'https://zeevector.com/wp-content/uploads/2021/02/Kent-Logo-PNG.png',
    },
    {
      brandName: 'LifeUp',
      imageUrl: 'https://www.lifeup.lk/assets/img/homeLogo.png',
    },
    {
      brandName: 'Cromptom',
      imageUrl:
        'https://www.logolynx.com/images/logolynx/1b/1bdececaf8b780636df25e5969614ada.png',
    },
    {
      brandName: 'Voltas',
      imageUrl:
        'http://flowtechair.com/wp-content/uploads/2017/02/voltas-logo.png',
    },
    {
      brandName: 'syska',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/d/d5/Syska_logo.png',
    },
    {
      brandName: 'Hitachi',
      imageUrl:
        'https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Logo.png',
    },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'DC LED Bulb 5 Watt',
      price: 330,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'LED1533-12',
      quantity: 1,
      image:
        'https://png.pngitem.com/pimgs/s/4-48712_white-light-fluorescent-lamp-incandescent-light-bulb-lamp.png',
    },
    {
      id: 2,
      name: 'Best LED Bulb 15 Watt',
      price: 200,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'LED1533-12',
      quantity: 1,
      image:
        'https://atlas-content-cdn.pixelsquid.com/stock-images/led-light-bulb-lightbulb-ENAno48-600.jpg',
    },
    {
      id: 3,
      name: 'Bulb LED 25 Watt',
      price: 410,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'LED1533-12',
      quantity: 1,
      image:
        'https://atlas-content-cdn.pixelsquid.com/stock-images/smart-led-bulb-lightbulb-ZemJYQ1-600.jpg',
    },
    {
      id: 4,
      name: 'High Volt Breaker',
      price: 210,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'BREKER1533-12',
      quantity: 1,
      image:
        'https://atlas-content-cdn.pixelsquid.com/stock-images/circuit-breaker-63dr5a2-600.jpg',
    },
    {
      id: 5,
      name: 'Breaker High Volt ',
      price: 180,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'BREKER1533-12',
      quantity: 1,
      image:
        'https://www.pngplay.com/wp-content/uploads/13/Circuit-Breaker-PNG-HD-Quality.png',
    },
    {
      id: 6,
      name: 'Switch Smart Board ',
      price: 190,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'BREKER1533-12',
      quantity: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOrC9-W4kG6DVf_Yaeq0Dw-FpWx7SbK_aTg&usqp=CAU',
    },
    {
      id: 7,
      name: 'Breaker High Volt Switch ',
      price: 180,
      des: 'energy savings, Elegents Appearance, Long Life',
      modal: 'BREKER1533-12',
      quantity: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ103xJHMHa96tBlzIeihSF8U1qj_5wcHeX0OhbP-MJL2dU5rAw3uVf-AG9u3vs6DboHko&usqp=CAU',
    },
  ];
  constructor() {}
}
//
