import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIdemo';
  show: boolean=false;
  constructor(private router:Router){}
  
  open(){
    this.show=true;
    this.router.navigateByUrl('/table');
    console.log(this.show);
  }

}
