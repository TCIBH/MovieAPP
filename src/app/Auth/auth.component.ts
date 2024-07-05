import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  signUpForm:FormGroup;
  isLoginMode=true;
  constructor(private router:Router,private authService:AuthService){}
  ngOnInit(): void {
      this.signUpForm=new FormGroup({
        'email':new FormControl(null,[Validators.required,Validators.email]),
        "password": new FormControl(null, [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]),
       
        'remember':new FormControl(null)
      })
  }
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
}
  onSubmit(){
 
    if(!this.signUpForm.valid){
      return;
  }
    //console.log(this.signUpForm.value);
    const email = this.signUpForm.get('email').value;
      const password = this.signUpForm.get('password').value;
      if(this.isLoginMode){
       this.authService.login(email,password);        
      }
      else{
         this.authService.signUp(email,password)
      }
      this.router.navigate(['/home'])
    this.signUpForm.reset();
  }


}
