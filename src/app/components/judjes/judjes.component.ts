import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-judjes',
  templateUrl: './judjes.component.html',
  styleUrls: ['./judjes.component.scss']
})
export class JudjesComponent implements OnInit {

  constructor(private methodsService: MethodsService) { }

  ngOnInit() {
    this.getAllJudjes();
  }

  allJudjesResponse: any;

  getAllJudjes(){
    this.methodsService.getAllJudjes().subscribe((response) => {
      this.allJudjesResponse = response;
      console.log(this.allJudjesResponse)
    })
  }

}
