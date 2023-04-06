import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../app.service.data';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  
  lblLogin:string="Login";
  lblMdp: string="Mot de passe";
  titre: string="";
  login: any;
  password : any;
  estCache : boolean = true;  
  lblMessage: string ="erreur";

  constructor(private router : Router,private dataService : DataService) {

  }

  ngOnInit(): void {
  }

  
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
    }
      
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
