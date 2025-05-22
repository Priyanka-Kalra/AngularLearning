import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {InputComponent} from './input/input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,ProfileComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // properties of the class
  title = 'demo-angular-app';
  name= 'prepWork';

  hello(){
    return "Hello King";
  }

  handleClick(){
    console.log("Button clicked");
    this.otherFunction();
  }
  otherFunction(){
    alert('otherFunction Called')
  }

  sumNum(a:number,b:number){
    alert(a+b);
  }
}
