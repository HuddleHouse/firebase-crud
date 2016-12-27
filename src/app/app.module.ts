import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDoSESpawwUQXaqHZkvcMLDmQHjke9Q36Q",
  authDomain: "fir-crud-93710.firebaseapp.com",
  databaseURL: "https://fir-crud-93710.firebaseio.com",
  storageBucket: "fir-crud-93710.appspot.com",
  messagingSenderId: "720204736178"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
