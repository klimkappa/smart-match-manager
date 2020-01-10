import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  constructor(private methodsService: MethodsService) { }

  ngOnInit() {
    this.getAllMatches();
  }

  allMatchesResponse: any;

  getAllMatches(){
    this.methodsService.getAllMatches().subscribe((response) => {
      this.allMatchesResponse = response;
      console.log(this.allMatchesResponse)
    })
  }

}
