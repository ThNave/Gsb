import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../app.service.data';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {

  nomMedecin!: string;
  lesMedecins : Array<any> = new Array();
  medecin : any;
  gestionMajRapport : boolean = false;
  gestionAjoutRapport : boolean = false;
  dateVisite! : Date;
  dateNouveauRapport! :Date;
  nomMedicament : string = "";
  lesMedicaments! : Array<any>;
  medicamentsSelect : Array<any> = new Array();
  medicamentSelect : any;
  lesRapports : Array<any> | undefined;
  qtes : Array<number> = [1,2,3,4,5];
  qteSelect :number | undefined;
  titre : string | undefined;
  rapport : any;
  motif : string = "";
  bilan : string = "";
  afficherRapports : boolean = false;
  messageMAJ : string ="";
  messageEnregistrement : string =""
  typeMessage : string ="";
  majMedecin : any;
  estCacheMenu:any;
  afficherListe: boolean | undefined;
  lblMessage2: string | undefined;
  idMedecin: any;
  
  motifRapport: any;
  lesRapport: any;
  afficherMedecin: boolean | undefined;

  constructor(private router : Router,private dataService : DataService) {

  } 

  ngOnInit(): void {
  }

  derniersRapports() : void{
    this.afficherMedecin = false;
    this.dataService.chargerRapports(this.idMedecin).subscribe({
      next : (data:any) =>{
        this.lesRapport=Array.of(data)
        this.afficherRapports=true;
        console.table(this.lesRapports)
        console.log(JSON.stringify(this.lesRapport)) //affiche le dernier rapport du medecins selectioné dans la console 
      }
    })                        
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


  chargerR(){
    this.dataService.chargerRapports(this.idMedecin).subscribe({
        next : (data: any) => {
            this.lesRapport = data;
        },
        error : (error: any) => {
            console.log(error);
        }
    });
  }





  selectionner(med: any) : void{
      this.medecin=med;

    
      this.medecin = med;
      this.nomMedecin = med.nom;
      // + " " + med.prenom+ " ;dep :"+med.departement;
      this.idMedecin = med.id;
      //this.afficherListe=false;
      if(this.medecin.specialitecomplementaire==null){
        console.log("okssssss")
        this.lblMessage2 = "(Aucune spécialité)";
      }else{
        this.lblMessage2="";
      }

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