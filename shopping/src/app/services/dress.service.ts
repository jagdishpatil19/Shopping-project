import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor( private httpClient:HttpClient) { }
  mainUrl:string='http://localhost:8000/profile'

  getApiCall(){
     
   return this.httpClient.get(this.mainUrl)
  } 

}
