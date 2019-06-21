import { Component, OnInit } from '@angular/core';

import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories:Category[]=[];

  constructor(private cateService: CategoryService) {
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories():void{
    this.cateService.getCategories().subscribe(
      (data)=>{
        this.categories=data
      },
      (err)=>console.log(err)  
    )
  }
  
}
