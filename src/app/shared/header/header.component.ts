import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  username:string;

  constructor(private token:TokenStorageService) { }

  ngOnInit() {
    this.username=this.token.getUsername();
  }

  logOut(){
    this.token.signOut();
  }
  
}
