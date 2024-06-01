import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HttpService {

    private baseUrl: string = ""; 

    constructor(private httpClient: HttpClient){}

    get(url: string, queryParam?: object){
     
     return this.httpClient.get(this.generateUrl(url)); 
    }

    post(url: string, payload: any, queryParam?: any){
        return this.httpClient.post(this.generateUrl(url), payload) 
    }

    put(url: string, payload: any, queryParam?: any){
        return this.httpClient.put(this.generateUrl(url), payload) 
    }

    delete(url: string, payload: any, queryParam?: any){
        return this.httpClient.delete(this.generateUrl(url), payload) 
    }   

    private generateUrl(url: string, queryParam: object = {}){
       
        return this.baseUrl+url;
    }
}