import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formSubmithandler(form: NgForm) {
    console.log('invalid: ', form.invalid);
    if(form.invalid){
      console.log('Invalid form!');
      return;
    }
    console.log(form.value);
    
    const { email, password } = form?.value;
    //? form.reset();
    form.setValue({ email: '', password: '' });
  }
}
