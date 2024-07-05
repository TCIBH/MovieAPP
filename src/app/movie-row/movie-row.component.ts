import { Component, Input } from '@angular/core';
import { MovieService } from '../movie.seervice';

@Component({
  selector: 'app-movie-row',
  templateUrl: './movie-row.component.html',
  styleUrl: './movie-row.component.css'
})
export class MovieRowComponent {
  @Input() title: string;
  @Input() fetchUrl: string;
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies(this.fetchUrl).subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
