import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-pge',
  templateUrl: './ng-pge.page.html',
  styleUrls: ['./ng-pge.page.scss'],
})
export class NgPgePage implements OnInit {

  public value: number = 1

  public list = [
    {cod:1, description:"feijao", value:1},
    {cod:2, description:"batata", value:1},
    {cod:3, description:"arroz" , value:1}

  ]

  constructor() { }

  ngOnInit() { }

  public add(item:any){
    item.value = 2
  }

  public remove(item:any){
    item.value = 1
  }

  makeSinopse(str:string, limit:number){
    return str.substring(0, limit) + '...'
  }
}
