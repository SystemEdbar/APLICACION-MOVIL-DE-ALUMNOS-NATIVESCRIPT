import { Injectable } from '@angular/core'
import { LoginI } from '../interface/login.interface'
import { RegisterI } from '../interface/register.interface'
import { ResponseI } from '../interface/response.interface'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Http, knownFolders, path, File, ImageSource, HttpResponse } from "@nativescript/core";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: string = "https://systemedbar.site/"
  constructor(private http:HttpClient) {}
  private createRequestOptions() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer "+ localStorage.getItem("access_token")
    });
    return headers;
  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let dir = this.url + "api/login"
    return this.http.post<ResponseI>(dir, form)
  }
  registerByEmail(form:RegisterI):Observable<ResponseI>{
    let dir = this.url + "api/register "
    return this.http.post<ResponseI>(dir, form)
  }
}

