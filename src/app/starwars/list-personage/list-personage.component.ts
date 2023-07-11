import { caracters } from './../caracters';
import { Router } from '@angular/router';
import { Component,  OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';


@Component({
  selector: 'app-list-personage',
  templateUrl: './list-personage.component.html',

})

export class ListPersonageComponent implements OnInit {
  starwars: caracters[];
  caractersselected: caracters|undefined;
  
  constructor(private router: Router, private caractersservice: StarwarsService ){}

  ngOnInit(){
    this.caractersservice.getStarwarsList()
    .subscribe(caracterslist => this.starwars = caracterslist);
  }



  selctecaracters(caractersid: string){
    
  const caracters: caracters|undefined = this.starwars.find(caracters => caracters.id == +caractersid)
  if(caracters){
    console.log(`vous avez demandé le presonage ${caracters.name}`);
    this.caractersselected = caracters;
  }
  else{

    console.log(`vous avez demandé un personnage qui n'existe pas.`)
    this.caractersselected = caracters;}
  }


  goToCaracters(caracters: caracters){
    this.router.navigate(['/Starwars', caracters.id])
  }

}

