import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChatsService {

  constructor(private http: Http) {}

  getChat(pConver){
    console.log(pConver)
    return this.http.post('http://localhost:3000/api/chats/getConver', pConver).toPromise()
  }

  sendMessage(pMessage){
    return this.http.post('http://localhost:3000/api/chats/newMessage', pMessage).toPromise()
  }

  getAllConversChef(pChefId){
    return this.http.get(`http://localhost:3000/api/chats/getConversChef/${pChefId}`).toPromise()
  }

  getAllConversInv(pInvId){
    return this.http.get(`http://localhost:3000/api/chats/getConversInv/${pInvId}`).toPromise()
  }



}

  