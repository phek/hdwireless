import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;

  navbarCollapsed = true;

  menu: Menu = {
    logo1: '/assets/images/logo.png',
    logo2: '/assets/images/logo2.png',
    items: [
      {
        text: 'Menu Item',
        route: '/item1'
      },
      {
        text: 'Menu Item 2',
        route: '/item2'
      },
      {
        text: 'Menu Item 3',
        route: '/item3'
      }
    ]
  };

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
    const cookie: AuthResponse = JSON.parse(localStorage.getItem('currentUser'));
    if (!cookie) {
      this.auth.login('assess@hd-wireless.com', 'assess1234').subscribe(data => {
        this.username = data.Id;
      });
    } else {
      this.username = cookie.Id;
    }
  }

}
