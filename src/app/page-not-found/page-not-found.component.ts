import { Component } from '@angular/core';
  
@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://wegotthiscovered.com/wp-content/uploads/2022/09/best-star-wars-meme.jpg" width="1000" height="950"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/Starwars" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
