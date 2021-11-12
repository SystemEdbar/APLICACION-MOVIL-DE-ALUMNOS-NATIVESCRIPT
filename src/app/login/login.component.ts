import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import * as dialogs from "@nativescript/core";
require( "nativescript-localstorage" );
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
