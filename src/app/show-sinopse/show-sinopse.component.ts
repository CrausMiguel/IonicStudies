import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-sinopse',
  templateUrl: './show-sinopse.component.html',
  styleUrls: ['./show-sinopse.component.scss'],
})
export class ShowSinopseComponent implements OnInit {

  
  ngOnInit() {}

  public sinopse:any

  constructor(private navParams: NavParams){
    this.sinopse = this.navParams.get('sinopse')
  }

}
