import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'navbar', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
