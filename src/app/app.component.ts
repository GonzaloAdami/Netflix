import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'netflix';
  animes: Array<Serie>;
 position:number;
  constructor(){
    this.animes = [
      new Serie('baki.jpg', '', 92, 16, '2 temporadas', 'HD', 'Anime Shonen - Animes de acción - De japon', '2 temporadas' , false),
      new Serie('jujutsu.jpg', '', 98, 16, '1 h 44 min', 'HD', 'Imaginativo - Sombrío - Anime de fantasía', '1 h 44 min' , false),
      new Serie('haikyu.jpg', '', 96, 10, '4 temporadas', 'HD', 'Apasionante - Inspirador - Anime de drama', '4 temporadas' , false),
      new Serie('MyHeroAcademia.jpg', '', 82, 13, '5 temporadas', 'HD', 'Imaginativo - Optimista - De adolecentes', '4 temporadas' , false),
      new Serie('vinlandSaga.png', '', 97, 16, '2 temporadas', 'HD', 'Anime de drama - Antigüedad clásica - Edad Media', '2 temporadas' , false),
      new Serie('spyXFamily.png', '', 98, 16, '25 Episodios', 'HD', 'Inusual - Emocionante', '25 Episodios' , false),
      new Serie('myScoreGirl.avif', '', 81, 13, '2 temporadas', 'HD', 'Nostálgico - Disparatado', '2 temporadas' , false),
      new Serie('ROR.jpeg', '', 95, 16, '2 temporadas', 'HD', 'Emocionante', '2 temporadas' , false),
      new Serie('demonSlayer.jfif', '', 97, 16, '4 temporadas', 'HD', 'Imaginativo - Sombrío - Emocionante', '4 temporadas' , false),
      new Serie('doroHeDoro.jfif', '', 88, 16, '13 episodios', 'HD', 'Inusual - Sombrío - Anime de fantasía', '13 episodios' , false),
      new Serie('blackClover.jpg', '', 98, 13, '3 temporadas', 'HD', 'Imaginativo - Disparatado - Emocionante', '13 episodios' , false),
      new Serie('hellParadise.jpg', '', 92, 16, '13 episodios', 'HD', 'Imaginativo - Emocionante - Anime de fantasía', '13 episodios' , false),
      new Serie('tragonesYMazmorras.jpg', '', 98, 16, '24 episodios', 'HD', 'Inusual - Imaginativo - Anime de comedia', '13 episodios' , false),





      
    ];
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

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });
});

class Serie{
  img:string;
  name:string;
  recomendacion:number;
  edad:number;
  episodios:string;
  calidad: string;
  categorias:string;
  episodios_totales:string;
  viendo:boolean;
constructor(img:string, name:string, recomendacion:number, edad:number, episodios:string, calidad:string, categorias:string, episodios_totales:string, viendo:boolean){
  this.img = img;
  this.name = name;
  this.recomendacion = recomendacion;
  this.edad = edad;
  this.episodios = episodios;
  this.calidad = calidad;
  this.categorias = categorias;
  this.episodios_totales = episodios_totales;
  this.viendo = viendo;
}
}