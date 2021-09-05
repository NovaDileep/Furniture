import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewlistModel} from './newlist.model';
import { NewlistService } from '../newlist.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {
  title:String="Latest Furnitures";
  newlist:NewlistModel[];
  imageWidth:number=100;
  imageMargin:number=2;
  imageHeight:number=100;
  constructor(private router:Router, private newlistService:NewlistService) {
    this.newlist=[];
   }

  ngOnInit(): void {
    this.newlistService.getNewlist().subscribe((data)=>{
      this.newlist=JSON.parse(JSON.stringify(data));
    })
  }
    used(){
      this.router.navigate(["oldlist"]);
    }
  

}
