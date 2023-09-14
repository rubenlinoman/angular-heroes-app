import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor(
      private autoService: AuthService,
      private router: Router
  ) {}

  onLogin(): void {
    this.autoService.login('fernando@gmail.com', '123456')
      .subscribe(user => {
        this.router.navigate(['/']);
      })
  }

}
