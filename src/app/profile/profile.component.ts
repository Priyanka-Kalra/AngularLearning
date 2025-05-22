import {Component} from '@angular/core'

@Component({
    selector:'app-profile',
    imports:[],
    // templateUrl:'./profile.component.html',
    // styleUrl:'./profile.component.css'
    template:`
        <h1>Profile Component</h1>
        <p>{{greet()}}</p>
    `,
    styles:[`h1{color:blue}`,`p{color:green}`]
})

export class ProfileComponent{

    greet(){
        return "From Profile Component";
    }
}