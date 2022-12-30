import { Component, OnInit } from '@angular/core';

export interface iSubTitle {
  name: string;
  value: string;
}

@Component({
  selector: 'card-select',
  templateUrl: './card-select.component.html',
  styleUrls: ['./card-select.component.css']
})
export class CardSelectComponent {

  public title: string = 'Novembro';
  public subTitle: iSubTitle = {
    name: 'Gastos',
    value: 'R$ 4.000,00'
  };
  public subTitleSecond: iSubTitle = {
    name: 'Gastos',
    value: 'R$ 4.000,00'
  };
}
