//importé les modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../app.service.data';


//component
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  

  //créations variable
  lblLogin:string="Login";
  lblMdp: string="Mot de passe";
  titre: string="";
  login: any;
  password : any;
  estCache : boolean = true;  
  lblMessage: string ="erreur";


  //lié base de donnée
  constructor(private router : Router,private dataService : DataService) { 

  }

  // après le ngOnInit, c'est ici qu'on met nos fonctions
  ngOnInit(): void {
  }

  //valider bdd
    valider():void{
      this.dataService.connexion(this.login,this.password).subscribe({ //si les identifiants  soont valide
        next : (data) => {
          console.log(this.login+this.password)
          console.log(data)
          this.router.navigate(['accueil']); //emmene sur accueil
        },
        error : (error) =>{ //si ils ne sont pas valide
          console.log(this.login+this.password)
    
            console.log(error)
        }
        
      });
    } 
      
    //valider sans bdd :
    /*valider() : void{
    if(this.login == "toto"  || this.password =="titi")
    this.estCache=true;
    
    else
    console.log("ok");
    this.router.navigate(['accueil']);

    this.estCache=false;
    this.lblMessage="erreur";

    //visiteur : any;

    //constructor(private : Router, private dataService :   DataService) {}
 

*/

    }
