import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  public villes:any;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit(): void {
    this.cinemaService.getVilles()
    .subscribe(data=>{
      this.villes = data;
    },err=>{
         console.log(err);
    });

  }

     saveVille(data:any){
       return this.cinemaService.saveNewVille(data)
       .subscribe(()=>{
        alert("ville cree")
      },(err: any)=>{
           console.log(err);
      });
      }
  }

