import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  urlAPI: string | undefined;
  
  
  
  
  

  constructor() { }

  public chargerMedecins(nomMedecin: string){
    let url = this.urlAPI + "/medecin?nom=" + nomMedecin;
    let req = this.http.get<string>(url);
    return req;
  }






  
}

