import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../register/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  lastName: string | undefined;
  firstName: string | undefined;
  loading: boolean = false;

  constructor(private toastr: ToastrService, private router: Router) {}

  ngOnInit(): void {}

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    this.loading = true;
    //alert(JSON.stringify(registerForm.value));
    //this.toastr.success("Formulaire correctement renseigné");
    //this.router.navigate(['/menu']);
    console.log('test');
  }

  // Nav()
  // {
  //   this.router.navigate(['/dashboard']);
  //     //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
  // //  this.toastr.success("Connexion effectuée avec succes");
  // }

  // Next()
  // {
  //   this.router.navigate(['/dashboard']);
  //     //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
  // //  this.toastr.success("Connexion effectuée avec succes");
  // }

  LoginUser() {
    this.loading = true;
    if (this.lastName == 'jean' && this.firstName == 'marc') {
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('firstName', this.firstName);
      console.log('Welcome');
      this.router.navigate(['/dashboard']);
      this.loading = true;
      //pour les toast, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
      this.toastr.success('Connexion effectuée avec succes');
      //alert("Welcome");
    } else {
      console.log('Erreur');
      this.toastr.error('Connexion echouée: login ou password incorrect');
      this.loading = false;
    }
  }
}
