import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './Auth/auth.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'search', component: SearchComponent },
  { path:'home',component:HomeComponent },
  {path:"auth",component:AuthComponent},
  {path:'404',component:PageNotFoundComponent},
  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
