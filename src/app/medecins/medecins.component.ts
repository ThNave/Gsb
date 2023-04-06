import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../app.service.data';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {

  nomMedecin : any;
  majMedecin : any;
  estCacheMenu:any;
  lesMedecins : any;
  medecin : any;
  afficherListe: boolean | undefined;
  lblMessage2: string | undefined;
  idMedecin: any;

  constructor(private router : Router,private dataService : DataService) {

  } 

  ngOnInit(): void {
  }

  derniersRapports(){

  }

  
  charger(){
    this.dataService.chargerMedecins(this.nomMedecin).subscribe({
        next : (data: any) => {
            this.lesMedecins = data;
        },
        error : (error: any) => {
            console.log(error);
        }
    });
}


  selectionner(med: any) : void{
      this.medecin=med;

  }

}


/*

  
    valider():void{
      this.dataService.connexion(this.login,this.password).subscribe({
        next : (data) => {
          console.log(this.login+this.password)
          console.log(data)
          this.router.navigate(['accueil']);
        },
        error : (error) =>{
          console.log(this.login+this.password)
    
            console.log(error)
        }
        
      });
    }*/