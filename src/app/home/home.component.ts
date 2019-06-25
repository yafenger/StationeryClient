import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {CategoryService} from '../services/category.service';
import {Category} from '../model/category';
import {Item} from '../model/Item';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories:Category[]=[];
  

  displayedColumns:string[]=['name','stock','uom','price','cart'];
  itemsdataSource=new MatTableDataSource<Item>([]);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private cateService: CategoryService,
              private itemService:ItemService) {
  }

  ngOnInit(){
    this.getCategories();
    this.getItems();
    this.itemsdataSource.paginator=this.paginator;
  }

  getCategories():void{
    this.cateService.getCategories().subscribe(
      (data)=>{
        this.categories=data
      },
      (err)=>console.log(err)  
    )
  }

  getItems():void{
    this.itemService.getItems().subscribe(
      (items)=>{
        this.itemsdataSource.data=items;
      },
      (err)=>console.log(err)  
    )
  }

  applyFilter(filterValue: string) {
    this.itemsdataSource.filter = filterValue.trim().toLowerCase();
  }

  // getItemsByCatId(catId:number):void{
  //   console.log("items",this.itemsdataSource.data);
  //   this.cateService.getItemsByCatId(catId).subscribe(
  //     (items)=>{
  //       this.itemsdataSource.data=items;
  //     }
  //   )
  // }
  
}
