import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  withCredentials:true
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser=""
  currentAcc=""

  users: any = {
    1000: { acno: 1000, username: "Aahil", password: "userone", balance: 5000,transaction:[] },
    1001: { acno: 1001, username: "Abhinav", password: "usertwo", balance: 6000,transaction:[] },
    1002: { acno: 1002, username: "Laisha", password: "userthree", balance: 7000,transaction:[] },
    1003: { acno: 1003, username: "Riddhieka", password: "userfour", balance: 8000,transaction:[] },
  }

  constructor( private http: HttpClient) { 
    // this.getDetails()
  }

  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }

    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
  }

  getDetails(){
    if(localStorage.getItem("users")){
      this.users=JSON.parse(localStorage.getItem("users")||'')
    }
   
   if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
   }

  if(localStorage.getItem("currentAcc")){
    this.currentAcc=JSON.parse(localStorage.getItem("currentAcc")||'')
   }



  }


  getTransaction(acno:any){
    const data={
      acno
    }
    return this.http.post("http://localhost:3000/getTransaction",data,options)
    
  }

  register(acno:any,username:any,password:any){

    const data={
      acno,
      username,
      password
    }


 return this.http.post("http://localhost:3000/register",data)
  //   let accDetails=this.users

  //   if(acno in accDetails){ 
      
  //     return false
  //   }
  //   else{
  //     accDetails[acno]={
  //       acno,
  //       username,
  //       password,
  //       balance:0,
  //       transaction:[]
  //     }
  //    this.saveDetails()
      
  //     return true
  //   }

  }


  login(acno:any,pswd:any){
const data={
  acno,
  pswd
}

    return this.http.post("http://localhost:3000/login",data,options)
//     let accDetails = this.users

//     if (acno in accDetails) {

//       if (pswd == accDetails[acno]["password"]) {
//         this.currentUser=accDetails[acno]["username"]
//         this.currentAcc=acno

//         this.saveDetails()

// return true

       
//       }
//       else {
//         alert("invalid password")
//         return false
//       }
//     }
//     else {
//       alert("Invalid Account Number")
//       return false
//     }

  }



deposit(acno:any,pswd:any,amount:any){
  const data={
    acno,
    pswd,
    amount
  }
  
      return this.http.post("http://localhost:3000/deposit",data,options)
//   let accDetails= this.users

// var amt= parseInt(amount)

//   if(acno in accDetails){
//     if(pswd== accDetails[acno]["password"]){
//       accDetails[acno]["balance"]+=amt
//       accDetails[acno].transaction.push({
//         amount:amt,
//         type:"credit"

//       })
//       this.saveDetails()
//       return accDetails[acno]["balance"]
//     }
//     else{
//       alert("invalid password")
//         return false
//     }
//   }
//   else {
//     alert("Invalid Account Number")
//     return false
//   }


}

withdraw(acno:any,pswd:any,amount:any){

  const data={
    acno,
    pswd,
    amount
  }
  
      return this.http.post("http://localhost:3000/withdraw",data,options)


//   let accDetails= this.users

// var amt= parseInt(amount)

//   if(acno in accDetails){
//     if(pswd== accDetails[acno]["password"]){

//       if(accDetails[acno]["balance"]>amt){
        
//         accDetails[acno]["balance"]-=amt
//         accDetails[acno].transaction.push({
//           amount:amt,
//           type:"Debit"
  
//         })
//         this.saveDetails()
//       return accDetails[acno]["balance"]

//       }
//       else{
//         alert("insufficient balance")
//         return false
//       }
      
//     }
//     else{
//       alert("invalid password")
//         return false
//     }
//   }
//   else {
//     alert("Invalid Account Number")
//     return false
//   }


}

deleteAcc(acno:any){
return this.http.delete("http://localhost:3000/deleteAcc/"+acno,options)
}


}
