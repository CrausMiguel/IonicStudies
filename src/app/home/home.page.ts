import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nomeDaVariavel : any;
  public pessoa = {
    id : 1,
    nome : "Herique",
    sobrenome : "Cidade",
    idade : 20
  }
  
  public list : any = []; 

  public increaseAge(){
    this.pessoa.idade ++;
  }

  public addAluno(nome : String, sobrenome : String, idade : number){
    this.list.push({
      nome : nome,
      sobrenome : sobrenome,
      idade : idade 
    });
  }

  public printAluno(){
    this.list.forEach((element :any) => {
      console.log(element)
    });
  }

}
