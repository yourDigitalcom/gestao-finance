import { Component, OnInit } from '@angular/core';
import { iCardSelect } from '../../components/card-select/card-select.component';
import { SessionService } from '../../services/session/session.service';
import { GastosModel } from '../../models/gastos.model';
import { GastosService } from '../../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listaGastos: Array<iCardSelect>;

  public count = 2;

  public nomeMeses = [
    { mes: '01', name: 'janeiro' },
    { mes: '02', name: 'fevereiro' },
    { mes: '03', name: 'março' },
    { mes: '04', name: 'abril' },
    { mes: '05', name: 'maio' },
    { mes: '06', name: 'junho' },
    { mes: '07', name: 'julho' },
    { mes: '08', name: 'agosto' },
    { mes: '09', name: 'setembro' },
    { mes: '10', name: 'outubro' },
    { mes: '11', name: 'novembro' },
    { mes: '12', name: 'dezembro' },
  ];

  constructor(
    private readonly _gastosService: GastosService,
    private readonly _session: SessionService,
  ) { }

  ngOnInit(): void {

    this.listaGastos = new Array<iCardSelect>()

    this._gastosService.todosGastos()
      .subscribe((success: Array<GastosModel>) => {

        success.forEach(gasto => {
          this._session.idDataBase = gasto.id + 1;
          const month = this.convertMonthlyToMonth(gasto.monthly);

          if (this.listaGastos.length > 0 && this.isEqualMonth(month)) {

            this.listaGastos.find(value => value.title === month).subTitle.value += gasto.value;

          } else {
            
            this.listaGastos.push({
              id: gasto.id,
              title: this.convertMonthlyToMonth(gasto.monthly),
              subTitle: {
                name: 'Gasto total',
                value: gasto.value
              }
            })
          }
        })

      }, error => {
        console.log('error');
      })

  }

  public receiverAddButton(): void {
    console.log('receiverAddButton');

    const request: GastosModel = {
      id: this._session.idDataBase,
      monthly: '012022',
      description: '',
      value: 1500.00
    }

    this._gastosService.publicarGastos(request)
      .subscribe(sucess => {
        this.ngOnInit();
      });
  }

  public cardSelected(value: string): void {
    if(value != this._session.monthSelected) {
      console.log('cardSelected', value);
  
      this._session.monthSelected = value;
    }
    
  }

  private convertMonthlyToMonth(monthly: string): string {
    const mes = monthly.substring(0, 2);
    return this.nomeMeses.find(value => value.mes === mes).name;
  }

  private toSumArrayValues(array: Array<any>): number {
    return Number(array.reduce((soma, i) => soma + i).toFixed(2));
  }

  private isEqualMonth(month: string): boolean {
    const value = this.listaGastos.find(value => value.title === month);
    return value && value.title === month;
  }

}
