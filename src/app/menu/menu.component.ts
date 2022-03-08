import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loading: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  opened = false;

  toggleSidebar(){
    this.loading = true;
    this.opened = !this.opened;
  }

}
