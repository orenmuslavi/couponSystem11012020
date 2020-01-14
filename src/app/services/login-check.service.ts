import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class companyLogin {

  constructor(
    private id:number,
    private name:String,
    private email:String
  ) { }

}
