import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { UtilsService } from '../../_services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private auth: AuthService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
      password: new FormControl(null, Validators.required),
    });
  }
  async submit() {
    try {
      await this.auth.register(this.registerForm.value);
      this.utils.handleSuccess('Registered successfully!');
      this.router.navigate(['/auth/login'], {});
    } catch (error) {
      this.utils.handleError('username already exists');
    }
  }
}
