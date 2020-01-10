import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(private http: HttpClient) { }


  getAllJudjes(){
    return this.http.get('https://us-central1-smart-sport-manager.cloudfunctions.net/api/get-all-judgie/');
  }


  getAllMatches(){
    return this.http.get('https://us-central1-smart-sport-manager.cloudfunctions.net/api/get-all-matches/');
  }

  getScale(scaleId: any){
    return this.http.get('https://us-central1-smart-sport-manager.cloudfunctions.net/api/get-scale/?scale_id='+ scaleId);
  }

  getQueue(queueId: any){
    return this.http.get('https://us-central1-smart-sport-manager.cloudfunctions.net/api/get-queue/?queue_id='+ queueId);
  }


}
