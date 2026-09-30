import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/login'
  private autenticado = localStorage.getItem('autenticado')  === 'true';

  constructor(private http: HttpClient){}

  login(email: string, senha: string){
    const params = new HttpParams().set('email', email).set ('senha', senha);

    return this.http.post(this.apiUrl, null,{
      params, 
      responseType: 'text'
    
    }).pipe(
      tap(() => {
        this.autenticado = true;
        localStorage.setItem('autenticado', 'true');
      })
    )
  }

  estaAutenticado(): boolean{
    return this.autenticado;
  }

  logout(): void{
    this.autenticado = false;
    localStorage.removeItem('autenticado');
  }
  
}
