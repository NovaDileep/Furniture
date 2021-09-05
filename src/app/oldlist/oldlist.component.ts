import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OldlistService } from '../oldlist.service';
import { OldlistModel } from './oldlist.model';
@Component({
  selector: 'app-oldlist',
  templateUrl: './oldlist.component.html',
  styleUrls: ['./oldlist.component.css']
})
export class OldlistComponent implements OnInit {
  title:String="Used Furnitures";
  oldlist:OldlistModel[];
  imageWidth:number=100;
  imageMargin:number=2;
  imageHeight:number=100;
  constructor(private router:Router, private oldlistService:OldlistService) { 
    this.oldlist=[];
  }

  ngOnInit(): void {
    this.oldlistService.getOldlist().subscribe((data)=>{
      this.oldlist=JSON.parse(JSON.stringify(data));
    })
  }
new(){
  this.router.navigate(["newlist"]);
}
}
