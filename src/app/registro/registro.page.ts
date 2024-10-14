import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.matchPasswords('password')]], // Validación personalizada
      birthdate: ['', Validators.required]
    });
  }

  // Validación personalizada para confirmar que las contraseñas coincidan
  matchPasswords(password: string) {
    return (control: any) => {
      const formGroup = control.parent;
      if (formGroup) {
        const passwordControl = formGroup.controls[password];
        if (passwordControl && passwordControl.value !== control.value) {
          return { passwordsDoNotMatch: true };
        }
      }
      return null;
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario válido:', this.registerForm.value);
      // Lógica adicional para enviar los datos del formulario al servidor
    } else {
      console.log('Formulario no válido');
    }
  }

  // Método para acceder a los controles del formulario desde el HTML
  get formControls() {
    return this.registerForm.controls;
  }
}
