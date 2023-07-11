import { HttpClient } from '@angular/common/http';
import { caracters } from './caracters';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';


@Injectable()

export class StarwarsService {

  constructor(private http: HttpClient){}

  
  getStarwarsList (): Observable <caracters[]> {
    return this.http.get<caracters[]>('api/caracters').pipe(
      tap ((Response)=> this.log(Response)),
      catchError((error) =>this.handleError(error, []))
        
    );
  }
  getCaractersId(caractersId: number): Observable <caracters|undefined>{
    return this.http.get<caracters>(`api/caracters/${caractersId}`).pipe(
    tap ((Response)=> this.log(Response)),
    catchError((error) =>this.handleError(error, undefined))

    );
  }

  searchcaracterslist(term: string): Observable<caracters[]>{
    return this.http.get<caracters[]>(`api/caracters/?name=${term}`).pipe(
      tap ((Response)=> this.log(Response)),
      catchError((error) =>this.handleError(error, []))
    );
  }






  
  private log(response: caracters[]|caracters|undefined){
    console.table(response);
  }
  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }

}
