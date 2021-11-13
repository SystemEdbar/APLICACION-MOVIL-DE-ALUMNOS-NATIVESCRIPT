import { Component, OnInit } from '@angular/core'
import { Item } from './item'
import { ItemService } from './item.service'
import { Location } from '@angular/common';
import { UserService } from '../service/user.service'
import { ResponseI } from '../interface/response.interface'
require( "nativescript-localstorage" );
@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  data: any
  constructor(private itemService: ItemService, private api:UserService, private _location: Location) {}

  ngOnInit(): void {
    this.api.infoUser().subscribe(
      response => {
        this.data=response.result;
      },
      error => console.log(error)
    );
    this.items = this.itemService.getItems()
  }
  goBack(){
    this._location.back();
  }
}
