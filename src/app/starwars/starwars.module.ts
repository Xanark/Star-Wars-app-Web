import { BorderCardDirective } from './border-card.directive';
import { DetailPersonageComponent } from './detail-personage/detail-personage.component';
import { ListPersonageComponent } from './list-personage/list-personage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StarwarsService } from './starwars.service';
import { SearchCaractersComponent } from './search-caracters/search-caracters.component';



const caractersroutes: Routes = [
  {path: 'Starwars', component: ListPersonageComponent},
  {path: 'Starwars/:id', component: DetailPersonageComponent},
];

@NgModule({
  declarations: [
    ListPersonageComponent,
    DetailPersonageComponent,
    BorderCardDirective,
    SearchCaractersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(caractersroutes)
  ],
  providers:[StarwarsService]
})
export class StarwarsModule { }
