import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Inicializa loginForm con un grupo vacío para evitar errores de inicialización
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Ahora inicializa el formulario en ngOnInit
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // Validación de email
      password: ['', [Validators.required, Validators.minLength(6)]], // Validación de contraseña
    });
  }

  // Para acceder a los controles del formulario más fácilmente
  get formControls() {
    return this.loginForm.controls;
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      // Aquí puedes manejar el inicio de sesión
    } else {
      console.log('Formulario inválido');
    }
  }
}
