import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import * as dialogs from "@nativescript/core";
import { LoginService} from '../service/login.service'
import { LoginI} from '../interface/login.interface'
import { ResponseI } from '../interface/response.interface'
import { Page } from "@nativescript/core/ui/page";
require( "nativescript-localstorage" );
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private router: Router, private api:LoginService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onLogin(form:LoginI){
    this.api.loginByEmail(form).subscribe(response => {
      let data:ResponseI = response
      console.log(data)
      if(data.status == 'Okay'){
        localStorage.setItem("access_token",data.result.access_token)
        this.router.navigate(['items'])
      }else{
        this.showAlert();
      }
    }, error => console.log(error) );
  }
  showAlert(){
    dialogs.alert("¡El Correo o Contraseña son Incorrectos!")
    .then(() => {
        console.log("Dialog closed!");
    });
  }
  goRegister(){
    this.router.navigate(['/register'])
  }
}
