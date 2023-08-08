import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/login.interface';
import {ResponseI} from '../../modelos/response.interface';
import {listaVillasI} from '../../modelos/listaVillas.interface'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  villaData: any[] = []; // Array to hold villa data


  url:string = "https://localhost:7059/";

  constructor(private http:HttpClient) { }

  loginByEmail(form: LoginI):Observable<ResponseI>{
    let direccion = this.url + "auth"
    return this.http.post<ResponseI>(direccion,form);
  }
/*
  getAllVillas():Observable<listaVillasI[]>{
    let direccion = this.url + "aip/Villa";
    return this.http.get<listaVillasI[]>(direccion); 
  }
*/
getVillas(): Observable<any> {
  const apiEndpoint = "api/Villa";
  const fullUrl = this.url + apiEndpoint;

  return this.http.get<any>(fullUrl);
}


}
