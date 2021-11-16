import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentWebService {

  urlApi:any='https://cloud.abitmedia.com/api/';
  header = {
   headers:{
    'Authorization': 'Bearer 2y-13-tx-zsjtggeehkmygjbtsf-51z5-armmnw-ihbuspjufwubv4vxok6ery7wozao3wmggnxjgyg',
    'Content-Type':'application/json',
    'Cookie': '_csrf=6fe3100cb55080cf602b0dbcd8182e86c1a6429a7404d11b45237e88311575c9a%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22_g4X_hXOLLgKlKqEYkg1JobT4mIgro9r%22%3B%7D'
    //'Access-Control-Allow-Methods':'GET, PUT, POST, OPTIONS'
   }
  }


  constructor(private httpAng: HttpClient) { }

  //PETICION GET
  index(){
    return this.httpAng.get(this.urlApi+'payments/index',this.header)
  }

  //PETICION POST
  createPayment(body){
    return this.httpAng.post(this.urlApi+'payments/create-payment-request',body,this.header)
  }

}
