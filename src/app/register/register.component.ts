import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();

  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public saveData(registerForm: NgForm) {
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value));
    //alert(JSON.stringify(registerForm.value));
    this.toastr.success("Formulaire correctement renseigné");
    this.router.navigate(['/menu']);
    console.log("test");

  }

  Nav()
  {
    this.router.navigate(['/menu']);
      //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
    this.toastr.success("Connexion effectuée avec succes");
  }
  Next()
  {
    this.router.navigate(['/login']);
      //pour les tost, il y'en a 4 principalement: toastr.succes, .error, .info, .warning
    this.toastr.success("Connexion effectuée avec succes");
  }

}
