import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.page.html',
  styleUrls: ['./form2.page.scss'],
})
export class Form2Page implements OnInit {

  public segment = '0'

  public pessoa = {
    nome : "",
    sexo : "",
    data : "",
    rg : "",
    cpf :  "",
    cidade : "",
    rua : "",
    numero : ""
  }


  constructor() { }

  ngOnInit() {
  }

}
