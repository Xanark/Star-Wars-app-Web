import { StarwarsService } from './../starwars.service';
import { caracters } from '../caracters';
import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-detail-personage',
  templateUrl: './detail-personage.component.html',
 
})
export class DetailPersonageComponent implements OnInit {
  
  caracterslist: caracters[];
  caracters: caracters|undefined;
  
  constructor (private route: ActivatedRoute, private router: Router, private caractersService: StarwarsService){}

  ngOnInit() {

    const caractersid: string|null= this.route.snapshot.paramMap.get('id');
    
    if(caractersid){
      this.caractersService.getCaractersId(+caractersid)
      .subscribe(caracters => this.caracters =caracters);
    }
  }
    goToStarWarsList(){
      this.router.navigate(['/Starwars']);
    }
  
}
