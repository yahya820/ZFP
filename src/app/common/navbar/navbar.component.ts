import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // appTitle = environment.appTitle;
  currentUser!: any;

  @Output() toggleSidenav = new EventEmitter<void>();

  // constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.currentUser = this.authService.user;
  }

  logout() {
    // this.authService.logout();
  }
}
