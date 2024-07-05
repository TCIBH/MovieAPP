import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.seervice';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  bannerMovie: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.bannerMovie = data.results[0];
    });
  }
}
