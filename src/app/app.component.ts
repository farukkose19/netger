import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars = [
    {'sliderName': 'slider1'},
    {'sliderName': 'slider2'},
    {'sliderName': 'slider3'},
    {'sliderName': 'slider4'},
    {'sliderName': 'slider5'},
    {'sliderName': 'slider6'}
  ];

  responsiveOptions;

  constructor() { 
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 2
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}



}
