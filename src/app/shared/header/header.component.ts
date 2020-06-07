import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    this.userName = localStorage.getItem('name');
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
