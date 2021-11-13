import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import * as dialogs from "@nativescript/core";
import { UserService } from '../service/user.service'
require( "nativescript-localstorage" );
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  items: Object
  constructor(private router: Router, private api:UserService) {}
  ngOnInit(): void {
    console.log("ENTRO")
    this.api.infoUser().subscribe(
      response => {
        this.items=response.result;
        console.dir(this.items);
      },
      error => console.log(error)
    );
  }
}
