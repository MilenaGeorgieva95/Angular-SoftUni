import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.maxLength(4)]],
  });
  constructor(private fb: FormBuilder) {}

  handleSubmit(): void {
    console.log(this.registerForm.value);
  }

  ngAfterViewInit(){
    if(this.registerForm){
      this.registerForm.valueChanges.subscribe(x=>console.log(x)
      )
    }
  }
}
