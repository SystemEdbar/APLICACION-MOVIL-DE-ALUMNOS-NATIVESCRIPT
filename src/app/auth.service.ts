import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { ResponseI } from './interface/response.interface'
import { Router } from '@angular/router'
import { UserService } from './service/user.service'
import { of, Observable } from 'rxjs'
@Injectable()
export class AuthGuard implements CanActivate {
    data: boolean
    constructor(private api: UserService, private router: Router) { }

    canActivate(): boolean {
        this.router.navigate(['items'])
        return false;
    }
}
