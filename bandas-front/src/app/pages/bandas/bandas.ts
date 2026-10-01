import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Banda } from '../../models/banda';
import { BandaService } from '../../services/banda.service';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-bandas',
  imports: [FormsModule, MatToolbar, MatIcon, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './bandas.html',
  styleUrl: './bandas.css',
})
export class Bandas {

  bandas : Banda[] = [];

  nome = '';
  ano = 0;
  imagem = '';

  idEditando: number | null = null;

  constructor(
    private authService: AuthService, private router :Router, private bandaService: BandaService){}

  ngOnInit(): void{
    
    this.bandaService.listar().subscribe({
      next: (resposta) => {
        this.bandas = resposta;
      },
      error:(erro) =>{
        console.log(erro);
      }
    })
  }

  logout(){
    this.router.navigate(['/login']);

  }

  formularioValido(): boolean{
    return this.nome.trim() !== ''
      && this.ano > 0
      && this.imagem.trim() !== '';
  }

  salvar(){
    const banda : Banda = {
      nome:this.nome,
      ano: this.ano,
      imagem: this.imagem
    };

    this.bandaService.salvar(banda).subscribe({
      next: (resposta) =>{
        this.bandas.push(resposta);

        this.nome = '';
        this.ano = 0;
        this.imagem = '';
      },

      error: (erro)=>{
        console.log(erro);
      }
    });
  }

  editar(banda: Banda) {
    this.idEditando = banda.id!;
    this.nome = banda.nome;
    this.ano = banda.ano;
    this.imagem = banda.imagem;
  }


atualizar(){
  if(this.idEditando === null) return;

  const banda : Banda = {
    nome : this.nome,
    ano: this.ano,
    imagem: this.imagem
  };

  this.bandaService.atualizar(this.idEditando, banda).subscribe({
    next:(resposta) => {
      this.bandas = this.bandas.map(banda =>
        banda.id === resposta.id ? resposta : banda
      );

      this.idEditando = null;
      this.nome = '';
      this.ano = 0;
      this.imagem = ''
    },
    error: (erro) => {
      console.log(erro);
    }
  })
}

cancelar(){
  this.idEditando = null;
  this.nome = '';
  this.ano = 0;
  this.imagem = ''

}

 excluir(id: number){
  const confirmar = confirm ('Tem certeza que deseja excluir essa banda?');
 
  if(!confirmar) return;
  
    this.bandaService.excluir(id).subscribe({
      next:() =>{
        this.bandas = this.bandas.filter(banda => banda.id !== id);
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }


}
