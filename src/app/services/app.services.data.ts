import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import{ Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
    private urlDomaine : string = "http://localhost/restGSB";
    constructor(private http: Http) {}
    public connexion( loginIn : string, mdpIn : string ) :
Observable<string[]> {
        let url :string = this.urlDomaine + "/connexion?login=" +
loginIn + "&mdp=" + mdpIn;
        let req = this.http
                    .get(url)
                    .map((r: Response)=>r.json());
        return req;
    }




    

    
}


