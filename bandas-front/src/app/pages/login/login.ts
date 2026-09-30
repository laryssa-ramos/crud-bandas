import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  senha = '';

  mensagem ='';
  erro = '';


  constructor(private authService: AuthService, private router: Router){}

  login() {
  this.authService.login(this.email, this.senha).subscribe({
    next: (resposta) => {
      this.router.navigate(['/bandas']);
    },
    error: (erro) => {
      alert(erro.error);
    }
  });
}
}
