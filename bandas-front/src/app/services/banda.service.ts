import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banda } from '../models/banda';

@Injectable({
  providedIn: 'root',
})
export class BandaService {

  private apiUrl = 'http://localhost:8080/bandas';

  constructor(private http:HttpClient){}

  listar(): Observable<Banda[]>{
    return this.http.get<Banda[]>(this.apiUrl);
  }

  salvar(banda :Banda): Observable<Banda>{
    return this.http.post<Banda>(this.apiUrl, banda);
  }

  atualizar (id: number, banda: Banda): Observable<Banda>{
    return this.http.put<Banda>(`${this.apiUrl}/${id}`, banda);
  }

  excluir (id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}
