import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bookMovie', component: BookMovieComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: '**', component: HomeComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
