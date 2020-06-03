import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mensagem = "Olá a todos(as)!";

  public nome: string; // Armazenar textos
  public idade: number; // Armazenar numeros(inteiros,decimais);-
  public excluido: boolean; // Armazenar true ou false

  public situacao: any; // Armazena Qualquer tipo de variável

  public anoNascimento: number;


 // Constroi o que vai ser mostrado//
  constructor() {
    // alert(" Mensagem: " + this.mensagem );

    // console.log(" Mensagem: " + this.mensagem );

    // this.mensagem = 2020;

  }

  // Criar metodo 

  public saudacao() {
    this.mensagem = "Olá " + this.nome + " , você informou a idade de " + this.idade + " anos.";
    if (this.idade >= 18) {
      this.situacao = "Você é maior de idade!";
    } else {
      this.situacao = "Você é menor de idade!";
    }
  }

  public anoDeNascimento() {
    const anoAtual = 2020; // constante do ano não se altera
    // cria variaveis que pode ter seu valor alterado durante a execução do programa
    let anoNascimento = anoAtual - this.idade;


    this.anoNascimento = anoNascimento;

  }

  /*
 Data Binding (ligação entre Javascript e html)
    1. Interpolação {{ valor }}
     Realiza a "impressão" da varável no HTML em tempo real.
    2. Two-Way Data Binding: [(ngModel)]="propriedade"
     Atualiza a variável em tempo real.
    3. Event Binding: (evento)="handler"
     Executa o metodo a partir do evento
    4. Property Binding: [propriedade]="valor"
     
    Associa a propriedade html a uma variável 

  */
}
