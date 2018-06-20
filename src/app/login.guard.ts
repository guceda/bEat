import { CanActivate, Router } from '@angular/router'
import { ModalService } from './modal.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Login implements CanActivate {
constructor(private router:Router){}
    canActivate() {
        if (localStorage.getItem('usr')) {
            return true
        } else {
            //this.modalService.showConfirm('login')
            this.router.navigate(['/'])
            return false
        }

    }
}