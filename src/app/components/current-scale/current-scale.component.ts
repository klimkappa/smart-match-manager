import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/services/navigate.service';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-current-scale',
  templateUrl: './current-scale.component.html',
  styleUrls: ['./current-scale.component.scss']
})
export class CurrentScaleComponent implements OnInit {

  constructor(private navigateService: NavigateService,
              private methodsService: MethodsService) { }

  ngOnInit() {
      this.navigateService.GetRouteID();
      this.getCurrentScale();
      
  }


  currentScaleResponse: any;

  getCurrentScale(){
    this.methodsService.getScale(this.navigateService.GetRouteID()).subscribe((response) => {
      this.currentScaleResponse = response;
      console.log(this.currentScaleResponse);
       this.linkedQueue = this.currentScaleResponse.data.linked_queue;
    })
    
    this.getJudjeQueue();
  }

  linkedQueue: string;
  linkedQueueResponse: any;

  getJudjeQueue(){
    this.methodsService.getQueue(this.linkedQueue).subscribe((response) => {
      this.linkedQueueResponse = response;
      console.log('judje queue', this.linkedQueueResponse);
    })
  }

}