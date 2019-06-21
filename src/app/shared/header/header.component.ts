import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  username:string;

  constructor(private token:TokenStorageService,
              private router: Router) { }

  ngOnInit() {
    this.username=this.token.getUsername();
  }

  logOut(){
    this.token.signOut();
    this.router.navigate(['auth/login']);
  }
  
}
