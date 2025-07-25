import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formSubmithandler(form: NgForm) {
    console.log(form.value);
    
    const { email, password } = form?.value;
    //? form.reset();
    form.setValue({ email: '', password: '' });
  }
}
