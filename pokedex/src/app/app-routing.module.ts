import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { DetailsPageComponent} from  './details-page/details-page.component';

const routes: Routes = [
  {
          path:"",component: HomePageComponent
  },
  {
          path: "details/:id",component: DetailsPageComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
