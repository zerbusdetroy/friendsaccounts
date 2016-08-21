import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDXnFhDTTEpn_Xa9577uM09Vw0n8VaXw0A',
    authDomain: 'friendsaccounts-527fe.firebaseapp.com',
    databaseURL: 'https://friendsaccounts-527fe.firebaseio.com',
    storageBucket: 'friendsaccounts-527fe.appspot.com',
};

@NgModule({
declarations: [
AppComponent
],
imports: [
AngularFireModule.initializeApp(firebaseConfig),
BrowserModule,
CommonModule,
FormsModule
],
providers: [],
entryComponents: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule {

}
