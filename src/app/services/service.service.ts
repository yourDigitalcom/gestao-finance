import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlConfig } from '../config/url.config';
import { GastosModel } from '../models/gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(
    private readonly httpClient: HttpClient,
    ) { }
  
  public todosGastos(): Observable<Array<GastosModel>> {
    return this.httpClient.get<Array<GastosModel>>(urlConfig.json_db_local);
  }

  public publicarGastos(request: GastosModel): Observable<any> {
    return this.httpClient.post(urlConfig.json_db_local, request);
  }

  public editartGasto(request): Observable<any> {
    return this.httpClient.put(urlConfig.json_db_local, request);
  }

  public deletarGasto(id): Observable<any> {
    return this.httpClient.delete(`${urlConfig.json_db_local}/${id}`);
  }

}
