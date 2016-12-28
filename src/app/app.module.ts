import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";

export const firebaseConfig = {
  apiKey: "AIzaSyDoSESpawwUQXaqHZkvcMLDmQHjke9Q36Q",
  authDomain: "fir-crud-93710.firebaseapp.com",
  databaseURL: "https://fir-crud-93710.firebaseio.com",
  storageBucket: "fir-crud-93710.appspot.com",
  messagingSenderId: "720204736178"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
