import { Component, OnInit } from '@angular/core';
import { DiskService } from 'src/app/services/service.service';
import { UtilService } from '../../services/utils/util.service';

@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.css']
})
export class CervejasComponent implements OnInit {

  public links = [
    "Adriática",
    "Amstel",
    "Antarctica",
    "Bavária",
    "Beck's",
    "Bohemia",
    "Brahma",
    "Budweiser",
    "Caracu",
    "Corona",
    "Crystal",
    "Devassa",
    "Eisenbahn",
    "Heineken",
    "Kaiser",
    "Itaipava",
    "Patagonia",
    "Polar",
    "Primus",
    "Quilmes",
    "Schin",
    "Serrana",
    "Skol",
    "Stella Artois",
  ];

  public products: Array<any>;

  constructor(
    private readonly _utils: UtilService,
    private readonly _service: DiskService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public goBack(): void {
    this._utils.onBackPage();
  }

  private getProducts(): void {
    this._service.getBeers().subscribe((products) => {
      products.cervejas
      this.products = products.cervejas;
      
      // this.products.forEach(product => {
      //   product.
      // })

      console.log("get produtos ->" , this.products);
      
    });
  }

}
