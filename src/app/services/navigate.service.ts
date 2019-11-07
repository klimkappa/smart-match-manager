import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(public router: Router) { }


  NavigateToSelectedScale(scaleID: any){
    this.router.navigate(['scale/'+ scaleID]);
  }




}
