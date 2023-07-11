import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonageComponent } from './starwars/list-personage/list-personage.component';
import { DetailPersonageComponent } from './starwars/detail-personage/detail-personage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'Starwars', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
