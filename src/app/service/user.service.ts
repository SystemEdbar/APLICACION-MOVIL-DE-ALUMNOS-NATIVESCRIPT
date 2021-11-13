import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ResponseI } from '../interface/response.interface'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url: string = "https://systemedbar.site/"
  constructor(private http:HttpClient) {}

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("access_token")
    });
    return headers;
  }

  infoUser():Observable<ResponseI>{
    let options = this.createRequestOptions();
    let dir = this.url + "api/infouser"
    return this.http.get<ResponseI>(dir,{headers: options})
  }
}
