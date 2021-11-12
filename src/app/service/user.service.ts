import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
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

  infoUser():Observable<any>{
    let dir = this.url + "api/infouser"
    return this.http.get(dir)
  }
