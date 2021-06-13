import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { VilleComponent } from './ville/ville.component';

const routes: Routes = [
   {
     path : "cinema",component:CinemaComponent
    
   },
   {
    path : "addville", component:VilleComponent
   }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
