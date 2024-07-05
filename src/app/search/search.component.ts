import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.seervice';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  query: string;
  searchResults: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  searchMovies(): void {
    if (this.query) {
      this.movieService.searchMovies(this.query).subscribe((data: any) => {
        this.searchResults = data.results;
      });
    }
  }
}
