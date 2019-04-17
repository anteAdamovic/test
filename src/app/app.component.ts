import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-analytics';

  constructor(private location: Location, private router: Router) {
    console.log('one', new Date().getTime());
    const loginPaths: string[] = ["/signin", "/signup", "/forgot", "/not-found", "account/reset", "/shipping-policy", "/return-policy"];
    if (loginPaths.find(loginPath => location.path().startsWith(loginPath))) {
      console.log('login');
    } else {
      console.log('home');
    }
    console.log('one', new Date().getTime());

    console.log('two', new Date().getTime());
    let firstSegment = router.parseUrl(location.path()).root.children['primary'].segments[0].path;
    let test: boolean = ["/signin", "/signup", "/forgot", "/not-found", "account/reset", "/shipping-policy", "/return-policy"].includes(firstSegment);
    if (test) {
      console.log('login');
    } else {
      console.log('home');
    }
    console.log('two', new Date().getTime());
  }
}
