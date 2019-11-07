import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/services/navigate.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreateScaleDialogComponent } from './create-scale-dialog/create-scale-dialog.component';

@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss']
})
export class ScalesComponent implements OnInit {

  constructor(
    private navigateService: NavigateService,
    private http: HttpClient,
    public dialog: MatDialog
    ) { }

  ngOnInit() {

    this.getAllScales();
  }

  ScaleNavigate(id){
    this.navigateService.NavigateToSelectedScale(id)
  }


  scalesResponse: any;

  getAllScales(){
    this.http.get('https://us-central1-smart-sport-manager.cloudfunctions.net/api/get-all-scales/').subscribe((response) => {
      this.scalesResponse = response;
      console.log(this.scalesResponse);
    })
  }

  createNewScaleDialogOpen() {
     this.dialog.open(CreateScaleDialogComponent, {
      width: '250px',
      data: {}
    });

    
  }

}
