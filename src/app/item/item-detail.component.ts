import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Item } from './item'
import { ItemService } from './item.service'

import { Location } from '@angular/common';
import { UserService } from '../service/user.service'
import { ResponseI } from '../interface/response.interface'
require( "nativescript-localstorage");
@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item
  data: any
  constructor(private itemService: ItemService, private route: ActivatedRoute, private api:UserService, private _location: Location) {}

  ngOnInit(): void {
    this.api.infoUser().subscribe(
      response => {
        this.data=response.result;
      },
      error => console.log(error)
    );
    const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id)
  }
    goBack(){
      this._location.back();
    }
}
