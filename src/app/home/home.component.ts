import {Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import * as dialogs from "@nativescript/core";
import { UserService } from '../service/user.service'
import { ResponseI } from '../interface/response.interface'
require( "nativescript-localstorage" );
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  items: any
  constructor(private router: Router, private api:UserService) {}
  ngOnInit(): void {
    this.api.infoUser().subscribe(
      response => {
        this.items=response.result;
      },
      error => console.log(error)
    );
  }
  goBack(){
  }
  option1(){
    this.router.navigate(['/items'])
  }
  option2(){
    this.router.navigate(['/menu1'])
  }
  option3(){
    this.router.navigate(['/menu2'])
  }
  option4(){
    this.router.navigate(['/menu3'])
  }

}
