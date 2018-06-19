import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../services/auth/auth.service';
import {MENU} from './menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;
  loggedIn = false;

  navbarCollapsed = true;

  menu: Menu = MENU;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.loggedIn = true;
      this.username = this.auth.getCurrentUser();
    }
  }

  login() {
    this.auth.login('assess@hd-wireless.com', 'assess1234').subscribe(data => {
      this.username = data.Id;
    });
  }

  logout() {
    this.auth.logout();
  }

}
