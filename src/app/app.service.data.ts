import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    
   
    
    //url api du lycée
    private urlAPI = "http://localhost/restGSB"
    dataService: any;
    lesMedecins: any;
    nomMedecin: any;
    motifRapport: any;
    lesRapport: any;
    idMedecin: any;
    


    constructor(private http: HttpClient) { }

    public connexion(login: string, mdp: string){
        let url = this.urlAPI + "/connexion?login="+ login + "&mdp=" +mdp;
        let req = this.http.get<string>(url);
        return req
    }






    public chargerMedecins(nomMedecin: string){
        let url = this.urlAPI + "/medecins?nom="+ nomMedecin;
        let req = this.http.get<string>(url);
        return req
    }

    public chargerRapports(idMedecin : number){
        let url = this.urlAPI + "/rapport/"+idMedecin;
        let req = this.http.get<string>(url);
        return req

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

    



















}
