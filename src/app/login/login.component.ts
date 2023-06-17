import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login successful');
    this.router.navigate(['/voting']);
  }

  redirectToAdminPage() {
    // Redirect to the admin page
    this.router.navigate(['/votes']);
  }
}

