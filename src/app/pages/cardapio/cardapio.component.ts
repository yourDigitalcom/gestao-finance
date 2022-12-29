import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/utils/util.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  public list = [
    {name:'Promoção', route:'promocao'},
    {name:'Cervejas', route:'cervejas'},
    {name:'Pingas', route:'pingas'},
    {name:'Whiskys', route:'whiskys'},
    {name:'Combos', route:'combos'},
    {name:'Águas', route:'aguas'},
    {name:'Energéticos', route:'energeticos'},
    {name:'Cooler', route:'cooler'},
  ];

  constructor(
    private readonly util: UtilService
  ) { }

  ngOnInit(): void {
  }

  public receiverClick(product: string): void {
    const route = product;
    this.util.goToPage(route);
  }

}

