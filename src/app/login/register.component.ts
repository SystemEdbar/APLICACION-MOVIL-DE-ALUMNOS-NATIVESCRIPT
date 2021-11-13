import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Location } from '@angular/common';
import * as dialogs from "@nativescript/core";
import { LoginService} from '../service/login.service'
import { RegisterI} from '../interface/register.interface'
import { ResponseI } from '../interface/response.interface'
require( "nativescript-localstorage" );
@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  constructor(private router: Router, private api:LoginService, private _location: Location) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onRegister(form:RegisterI){
    this.api.registerByEmail(form).subscribe(response => {
      let data:ResponseI = response
      console.log(data);
      if(data.status == 'Okay'){
        localStorage.setItem("access_token",data.result.access_token)
        this.router.navigate(['items'])
      }else{
        this.showAlert("¡Error al Registrarse!");
      }
    }, error => console.log(error) );
  }
    showAlert(text: string){
      dialogs.alert("¡Error al Registrarse!")
      .then(() => {
          console.log("Dialog closed!");
      });
    }
  goLogin(){
     this._location.back();
  }
}
