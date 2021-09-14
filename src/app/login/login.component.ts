import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to SBL Bank"

  

  acno = ""
  pswd = ""

  loginForm=this.fb.group({
  
    acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]

  })

 

  constructor(private router:Router,private ds:DataService, private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  // accNumber(event: any) {
  //   // console.log(event.target.value);
  //   this.acno = event.target.value
  // }

  // pswdChange(event: any) {
  //   // console.log(event.target.value);
  //   this.pswd = event.target.value
  // }

  login() {
  
  if(this.loginForm.valid) {
    var acno = this.loginForm.value.acno;
    
    
    
    var pswd = this.loginForm.value.pswd;
    
    
    

    this.ds.login(acno,pswd)
.subscribe((result:any)=>{
  if(result){
    alert(result.message)
    localStorage.setItem("userName",result.userName)
    localStorage.setItem("currentAcc",result.currentAcc)
    this.router.navigateByUrl("dashboard");
  }
},
(result)=>{
  alert(result.error.message)
}
)
    // if (result) {
    //   alert("login successfully")
      
     
    // }
  }
    else{
      alert("invalid form")
    }

    
    
  }

}
