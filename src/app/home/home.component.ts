import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trendingUrl = 'https://api.themoviedb.org/3/trending/all/week?api_key=cba9add9c9da40302e8c6d4db8f10a04';
  topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=cba9add9c9da40302e8c6d4db8f10a04';
}
