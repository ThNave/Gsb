import { Component, OnInit } from '@angular/core';
import { DataService } from '../app.service.data';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {

  

  ngOnInit(): void {
    
  }
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
  
  constructor(private dataService : DataService){}
  


  


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


  chargerRapports(){
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

      //a tester
      this.medecin = med;
      this.nomMedecin = med.nom + " " + med.prenom+ " ;dep :"+med.departement;
      this.idMedecin = med.id;
      //this.afficherListe=false;
      if(this.medecin.specialitecomplementaire==null){
        console.log("ca passe")
        this.lblMessage2 = "(Aucune spécialité)";
      }else{
        this.lblMessage2="";
      }

  }

















}
