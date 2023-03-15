import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataService } from '../app.services.data';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  login: any;
  password: any;
  estCache : boolean = true;
  lblMessage : string = "";
  visiteur:any;


  constructor(private router: Router, private dataService: DataService ) { 

  }


  valider(): void{

      this.dataService.connexion(this.login,this.password)
                          .subscribe(
                            (data)=>{console.log("cc")}
                            ,(error)=>{}
                                    );

      /*this.route.paramMap.pipe(this.login,this.password)
                            .subscribe(
                              (data)=>{
                                console.table(data);
                              }
                            )*/
                                

                                

                              
                              

                            
                            
   if(this.login !="toto" || this.password !="titi"){
        console.log("erreur");
        this.lblMessage="Erreur identifiant/Mot de passe incorrect";
        this.estCache=false;

    }else{
        console.log("ok");
        this.router.navigate(['accueil']);
  
        this.lblMessage="";
        this.estCache=true;
    }
      
      
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
