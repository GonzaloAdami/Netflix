import { Component } from '@angular/core';

@Component({
  selector: 'app-carroucel',
  templateUrl: './carroucel.component.html',
  styleUrls: ['./carroucel.component.scss']
})
export class CarroucelComponent {

 position:number;
  constructor(){
   
    this.position = 1;

}
next(){
  const carousel = document.getElementById('carousel-anime');
  
  if (this.position < 4) {
    carousel?.scrollBy({ left: 645, behavior: 'smooth' });
    this.position++;
    setTimeout(() => {
      carousel?.classList.add('shadow');
      carousel?.classList.remove('initialShadow');
    }, 300);
  }else{
    carousel?.classList.remove('shadow');
    carousel?.classList.add('initialShadow');
    carousel?.scrollBy({ left: -2645, behavior: 'smooth' });
    this.position = 1;
  }
}
prev(){
    const carousel = document.getElementById('carousel-anime');
    carousel?.scrollBy({ left: -645, behavior: 'smooth' });
    if (this.position > 1) {
      this.position--;
    }
    if(this.position === 1){
      carousel?.classList.remove('shadow');
      carousel?.classList.add('initialShadow');
    }
  }
}
