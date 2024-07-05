import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.seervice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(+id).subscribe((data: any) => {
      this.movie = data;
    });
  }

}
