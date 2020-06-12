import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSidebar = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.showSidebar = !this.showSidebar;
  }

  onNavigateHome() {
    this.router.navigate(['/home']);
  }

}
