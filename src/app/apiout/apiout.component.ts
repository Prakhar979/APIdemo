import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apiout',
  templateUrl: './apiout.component.html',
  styleUrls: ['./apiout.component.css']
})
export class APIoutComponent implements OnInit {

  constructor(private api:ApiService) { }
  todos:any[number];

  ngOnInit(): void {
    this.api.getdata().subscribe((res)=>{
     this.todos=res;
    })
  }

}
