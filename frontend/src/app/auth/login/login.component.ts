import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { UtilsService } from '../../_services/utils.service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private auth: AuthService,
    private utils: UtilsService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      password: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  ngOnInit(): void {}
  async submit() {
    try {
      let token = await this.auth.login(this.loginForm.value);
      let user = jwtDecode(token['access']);

      localStorage.setItem('access_token', token['access']);
      localStorage.setItem('user_id', user['user_id']);

      this.utils.handleSuccess('Logged in successfully!');
      this.router.navigate(['/posts/'], {});
    } catch (error) {
      this.utils.handleError(error.error.detail);
    }
  }
}
