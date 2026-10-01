import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatCardModule, MatFormField, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  senha = '';

  mensagem ='';
  erro = '';


  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar){}

  login() {
  this.authService.login(this.email, this.senha).subscribe({
    next: (resposta) => {
      this.router.navigate(['/bandas']);
    },
    error: () => {
      this.snackBar.open('Email ou senha inválidos.', 'Fechar',{
        duration: 3000,
        verticalPosition: 'top',
      });
    }
  });
}
}
