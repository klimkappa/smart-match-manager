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


  GetRouteID(){
    //  console.log('current route id',this.router.url.slice(7));
     return this.router.url.slice(7);
  }

}
