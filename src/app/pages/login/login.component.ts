import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/service/auth/login/auth.service';
import { LocalStorageService } from 'src/app/core/service/localStorage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  }

  onSubmit() {
    this.authService.getLogin(this.formulario).subscribe(data => {
      this.localStorage.set('token', data['token'])
      this.localStorage.set('nome', data['nome'])
      this.localStorage.set('auth', data['auth'])

      this.router.navigate(['/home']);
    });
  }

}
