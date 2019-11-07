import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule }    from '@angular/common/http';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MenuComponent } from './components/menu/menu.component';
import { ScalesComponent } from './components/scales/scales.component';
import { CurrentScaleComponent } from './components/current-scale/current-scale.component';
import { CreateScaleDialogComponent } from './components/scales/create-scale-dialog/create-scale-dialog.component';
import { JudjesComponent } from './components/judjes/judjes.component';
import { MatchesComponent } from './components/matches/matches.component';


var firebaseConfig = {
  apiKey: "AIzaSyAHBSGW1FC0eG55baxpH3eUh4RFoWb5lWk",
  authDomain: "smart-sport-manager.firebaseapp.com",
  databaseURL: "https://smart-sport-manager.firebaseio.com",
  projectId: "smart-sport-manager",
  storageBucket: "smart-sport-manager.appspot.com",
  messagingSenderId: "631754992768",
  appId: "1:631754992768:web:13ae563404465c94878a65",
  measurementId: "G-SY8E65HMQM"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScalesComponent,
    CurrentScaleComponent,
    CreateScaleDialogComponent,
    JudjesComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MaterialModule,
    HttpClientModule
  ],
  entryComponents:[
    CreateScaleDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
