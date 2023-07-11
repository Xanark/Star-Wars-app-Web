import { caracters } from './../caracters';
import { Observable,Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-search-caracters',
  templateUrl: './search-caracters.component.html',


})
export class SearchCaractersComponent implements OnInit {
  searchTerms= new Subject<string>();
  caracters$: Observable<caracters[]>;



  constructor(private router: Router, private caractersservice: StarwarsService){}

  ngOnInit(): void {
    this.caracters$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.caractersservice.searchcaracterslist(term))

    );
  }

  search(term: string){
    this.searchTerms.next(term);
  }
  goTodetail(caracters: caracters){
    const link =['/Starwars', caracters.id];
    this.router.navigate(link);
  }

}
