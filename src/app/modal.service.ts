import { Injectable } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@Injectable()
export class ModalService {

  constructor(private dialogService:DialogService) { }



showConfirm(pComponenteModal) {
    switch(pComponenteModal){
        case 'registro': {
            let disposable = this.dialogService.addDialog(RegistroComponent, {
                title:'Confirm title', 
                message:'Confirm message'}, 
                {
                  backdropColor: 'rgba(0,0,0,0.8)'
                })
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        //alert('accepted');
                    }
                    else {
                       // alert('declined');
                    }
                });
            break
        }
        case 'login': {
            let disposable = this.dialogService.addDialog(LoginComponent, {
                title:'Confirm title', 
                message:'Confirm message'}, 
                {
                  backdropColor: 'rgba(0,0,0,0.8)'
                })
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        //alert('accepted');
                    }
                    else {
                       // alert('declined');
                    }
                });
            
        }
    }
}
}
