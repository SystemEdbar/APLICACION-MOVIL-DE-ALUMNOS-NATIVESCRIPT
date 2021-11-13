import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import * as dialogs from "@nativescript/core";
import { Location } from '@angular/common';
import { UserService } from '../service/user.service'
import { ResponseI } from '../interface/response.interface'
require( "nativescript-localstorage" );
@Component({
  selector: 'menu1',
  templateUrl: './menu1.component.html'
})

export class Menu1Component implements OnInit {
  items: any
  constructor(private router: Router, private api:UserService, private _location: Location) {}
  ngOnInit(): void {
    this.api.infoUser().subscribe(
      response => {
        this.items=response.result;
      },
      error => console.log(error)
    );
  }
  goBack(){
    this._location.back();
  }
}
